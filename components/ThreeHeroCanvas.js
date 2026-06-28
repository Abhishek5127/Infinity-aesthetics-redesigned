"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const COLORS = [
  new THREE.Color("#C8973F"),
  new THREE.Color("#D4A855"),
  new THREE.Color("#2D6A4F"),
  new THREE.Color("#4CAF82"),
  new THREE.Color("#E8C5B0"),
  new THREE.Color("#F0D5C3"),
];

const DEPTH_RANGE = 2.5;
const TIMELINE = {
  infinityHold: 3.5,
  transitionToHeart: 1.5,
  heartHold: 2,
  transitionToDna: 1.5,
  dnaHold: 2,
  transitionToInfinity: 1.5,
};
const CYCLE_DURATION = Object.values(TIMELINE).reduce((sum, value) => sum + value, 0);

function infinityPoint(t, scale = 1) {
  const a = 2.8 * scale;
  const sint = Math.sin(t);
  const cost = Math.cos(t);
  const denom = 1 + sint * sint;

  return {
    x: (a * cost) / denom,
    y: (a * sint * cost) / denom,
  };
}

function heartPoint(t, scale = 1) {
  const x = 16 * Math.pow(Math.sin(t), 3);
  const y =
    13 * Math.cos(t) -
    5 * Math.cos(2 * t) -
    2 * Math.cos(3 * t) -
    Math.cos(4 * t);

  return {
    x: (x / 7.5) * scale,
    y: ((y / 8) - 0.35) * scale,
  };
}

function dnaPoint(index, total, scale = 1, timeOffset = 0) {
  const strand = index % 2 === 0 ? 0 : Math.PI;
  const progress = index / Math.max(total - 1, 1);
  const twist = progress * Math.PI * 3.5 + timeOffset;

  // Base helix coordinates
  const hx = Math.sin(twist + strand) * 0.72 * scale;
  const hy = (1 - progress * 2) * 2.05 * scale;
  const hz = Math.cos(twist + strand) * 0.34 * scale;

  // 45° tilt around Z-axis
  const c = 0.7071067811865476; // cos(π/4)
  const s = 0.7071067811865476; // sin(π/4)
  return { x: hx * c - hy * s, y: hx * s + hy * c, z: hz };
}

function smoothstep(value) {
  return value * value * (3 - 2 * value);
}

function getShapeMix(elapsed) {
  const t = elapsed % CYCLE_DURATION;
  let cursor = TIMELINE.infinityHold;

  if (t < cursor) {
    return { from: "infinity", to: "infinity", progress: 0 };
  }

  cursor += TIMELINE.transitionToHeart;
  if (t < cursor) {
    const raw = (t - TIMELINE.infinityHold) / TIMELINE.transitionToHeart;
    return { from: "infinity", to: "heart", progress: smoothstep(raw) };
  }

  cursor += TIMELINE.heartHold;
  if (t < cursor) {
    return { from: "heart", to: "heart", progress: 0 };
  }

  cursor += TIMELINE.transitionToDna;
  if (t < cursor) {
    const raw =
      (t - TIMELINE.infinityHold - TIMELINE.transitionToHeart - TIMELINE.heartHold) /
      TIMELINE.transitionToDna;
    return { from: "heart", to: "dna", progress: smoothstep(raw) };
  }

  cursor += TIMELINE.dnaHold;
  if (t < cursor) {
    return { from: "dna", to: "dna", progress: 0 };
  }

  const raw =
    (t -
      TIMELINE.infinityHold -
      TIMELINE.transitionToHeart -
      TIMELINE.heartHold -
      TIMELINE.transitionToDna -
      TIMELINE.dnaHold) /
    TIMELINE.transitionToInfinity;
  return { from: "dna", to: "infinity", progress: smoothstep(raw) };
}

function pickTarget(targets, shape, index) {
  return targets[shape][index];
}

export default function ThreeHeroCanvas({
  className = "ia-three-canvas",
  compact = false,
  interactive = true,
  particleCount = 700,
  speed = 1,
}) {
  const containerRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return undefined;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.z = compact ? 6 : 5;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);
    const seeds = new Float32Array(particleCount);
    const targets = {
      infinity: new Float32Array(particleCount * 3),
      heart: new Float32Array(particleCount * 3),
      dna: new Float32Array(particleCount * 3),
    };
    const dnaNoiseData = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i += 1) {
      const t = (i / particleCount) * Math.PI * 2;
      const color = COLORS[i % COLORS.length];
      const infinity = infinityPoint(t);
      const heart = heartPoint(t);
      const dna = dnaPoint(i, particleCount);
      const i3 = i * 3;

      targets.infinity[i3] = infinity.x + (Math.random() - 0.5) * 0.35;
      targets.infinity[i3 + 1] = infinity.y + (Math.random() - 0.5) * 0.35;
      targets.infinity[i3 + 2] = (Math.random() - 0.5) * DEPTH_RANGE;

      targets.heart[i3] = heart.x + (Math.random() - 0.5) * 0.32;
      targets.heart[i3 + 1] = heart.y + (Math.random() - 0.5) * 0.32;
      targets.heart[i3 + 2] = (Math.random() - 0.5) * DEPTH_RANGE;

      dnaNoiseData[i3] = (Math.random() - 0.5) * 0.18;
      dnaNoiseData[i3 + 1] = (Math.random() - 0.5) * 0.12;
      dnaNoiseData[i3 + 2] = (Math.random() - 0.5) * 0.3;

      targets.dna[i3] = dna.x + dnaNoiseData[i3];
      targets.dna[i3 + 1] = dna.y + dnaNoiseData[i3 + 1];
      targets.dna[i3 + 2] = dna.z + dnaNoiseData[i3 + 2];

      positions[i3] = targets.infinity[i3];
      positions[i3 + 1] = targets.infinity[i3 + 1];
      positions[i3 + 2] = targets.infinity[i3 + 2];

      colors[i3] = color.r;
      colors[i3 + 1] = color.g;
      colors[i3 + 2] = color.b;

      sizes[i] = compact ? Math.random() * 3 + 2 : Math.random() * 6 + 3;
      seeds[i] = Math.random() * Math.PI * 2;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute("size", new THREE.BufferAttribute(sizes, 1));

    const material = new THREE.ShaderMaterial({
      uniforms: {
        uPixelRatio: { value: Math.min(window.devicePixelRatio, 2) },
      },
      vertexShader: `
        attribute float size;
        varying vec3 vColor;
        uniform float uPixelRatio;

        void main() {
          vColor = color;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = size * uPixelRatio * (3.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        varying vec3 vColor;

        void main() {
          float d = length(gl_PointCoord - vec2(0.5));
          if (d > 0.5) discard;
          float alpha = 1.0 - smoothstep(0.15, 0.5, d);
          alpha *= 0.75;
          gl_FragColor = vec4(vColor, alpha);
        }
      `,
      transparent: true,
      vertexColors: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    const clock = new THREE.Clock();

    function animate() {
      rafRef.current = requestAnimationFrame(animate);

      const elapsed = clock.getElapsedTime();
      const motionTime = elapsed * speed;
      const shapeMix = getShapeMix(elapsed);

      // Spin DNA targets live when DNA is in play
      if (shapeMix.from === 'dna' || shapeMix.to === 'dna') {
        const dnaRotation = motionTime * 0.5;
        for (let j = 0; j < particleCount; j += 1) {
          const j3 = j * 3;
          const dp = dnaPoint(j, particleCount, 1, dnaRotation);
          targets.dna[j3] = dp.x + dnaNoiseData[j3];
          targets.dna[j3 + 1] = dp.y + dnaNoiseData[j3 + 1];
          targets.dna[j3 + 2] = dp.z + dnaNoiseData[j3 + 2];
        }
      }
      const posArr = geometry.attributes.position.array;
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const ease = Math.min(0.06, 0.025 * speed);

      for (let i = 0; i < particleCount; i += 1) {
        const i3 = i * 3;
        const seed = seeds[i];
        const tx =
          pickTarget(targets, shapeMix.from, i3) * (1 - shapeMix.progress) +
          pickTarget(targets, shapeMix.to, i3) * shapeMix.progress;
        const ty =
          pickTarget(targets, shapeMix.from, i3 + 1) * (1 - shapeMix.progress) +
          pickTarget(targets, shapeMix.to, i3 + 1) * shapeMix.progress;
        const tz =
          pickTarget(targets, shapeMix.from, i3 + 2) * (1 - shapeMix.progress) +
          pickTarget(targets, shapeMix.to, i3 + 2) * shapeMix.progress;
        const floatX = Math.sin(motionTime * 0.4 + seed * 3) * 0.08;
        const floatY = Math.cos(motionTime * 0.35 + seed * 2.5) * 0.08;
        const floatZ = Math.sin(motionTime * 0.3 + seed * 4) * 0.04;
        const dx = posArr[i3] - mx * 3.5;
        const dy = posArr[i3 + 1] - my * 3.5;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const repulsion = interactive ? Math.max(0, 1.2 - dist) * 0.6 : 0;
        const repX = dist > 0.01 ? (dx / dist) * repulsion : 0;
        const repY = dist > 0.01 ? (dy / dist) * repulsion : 0;

        posArr[i3] += (tx + floatX + repX - posArr[i3]) * ease;
        posArr[i3 + 1] += (ty + floatY + repY - posArr[i3 + 1]) * ease;
        posArr[i3 + 2] += (tz + floatZ - posArr[i3 + 2]) * ease;
      }

      geometry.attributes.position.needsUpdate = true;
      camera.position.x = Math.sin(motionTime * 0.15) * (compact ? 0.06 : 0.15);
      camera.position.y = Math.cos(motionTime * 0.12) * (compact ? 0.04 : 0.1);
      camera.lookAt(0, 0, 0);
      renderer.render(scene, camera);
    }

    animate();

    function onPointerMove(e) {
      const point = "touches" in e ? e.touches[0] : e;
      if (!point) return;

      const rect = container.getBoundingClientRect();
      mouseRef.current.x = ((point.clientX - rect.left) / rect.width) * 2 - 1;
      mouseRef.current.y = -(((point.clientY - rect.top) / rect.height) * 2 - 1);
    }

    function onResize() {
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
      material.uniforms.uPixelRatio.value = Math.min(window.devicePixelRatio, 2);
    }

    if (interactive) {
      window.addEventListener("mousemove", onPointerMove, { passive: true });
      window.addEventListener("touchmove", onPointerMove, { passive: true });
    }
    window.addEventListener("resize", onResize);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (interactive) {
        window.removeEventListener("mousemove", onPointerMove);
        window.removeEventListener("touchmove", onPointerMove);
      }
      window.removeEventListener("resize", onResize);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [compact, interactive, particleCount, speed]);

  return <div ref={containerRef} className={className} />;
}
