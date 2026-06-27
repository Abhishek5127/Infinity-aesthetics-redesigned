"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

/* ── helpers ────────────────────────────────────────────── */

// Brand palette mapped to Three.js colors
const COLORS = [
  new THREE.Color("#C8973F"), // accent-gold
  new THREE.Color("#D4A855"), // gold-light
  new THREE.Color("#2D6A4F"), // accent-green
  new THREE.Color("#4CAF82"), // green-light
  new THREE.Color("#E8C5B0"), // accent-blush
  new THREE.Color("#F0D5C3"), // blush-light
];

// Infinity (∞) curve parameterisation — lemniscate of Bernoulli
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

// Organic blob shape
function blobPoint(t, scale = 1) {
  const r =
    1.6 * scale +
    0.35 * scale * Math.sin(3 * t) +
    0.2 * scale * Math.cos(5 * t + 1.2);
  return {
    x: r * Math.cos(t),
    y: r * Math.sin(t),
  };
}

const PARTICLE_COUNT = 700;
const DEPTH_RANGE = 2.5;

export default function ThreeHeroCanvas() {
  const containerRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check reduced motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    /* ── Scene setup ─────────────────────────────────── */
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    /* ── Particle geometry ───────────────────────────── */
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(PARTICLE_COUNT * 3);
    const colors = new Float32Array(PARTICLE_COUNT * 3);
    const sizes = new Float32Array(PARTICLE_COUNT);
    const seeds = new Float32Array(PARTICLE_COUNT); // per-particle randomness
    const targetA = new Float32Array(PARTICLE_COUNT * 3); // infinity targets
    const targetB = new Float32Array(PARTICLE_COUNT * 3); // blob targets

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const t = (i / PARTICLE_COUNT) * Math.PI * 2;
      const color = COLORS[i % COLORS.length];

      // Infinity target
      const inf = infinityPoint(t);
      targetA[i * 3] = inf.x + (Math.random() - 0.5) * 0.35;
      targetA[i * 3 + 1] = inf.y + (Math.random() - 0.5) * 0.35;
      targetA[i * 3 + 2] = (Math.random() - 0.5) * DEPTH_RANGE;

      // Blob target
      const blb = blobPoint(t);
      targetB[i * 3] = blb.x + (Math.random() - 0.5) * 0.4;
      targetB[i * 3 + 1] = blb.y + (Math.random() - 0.5) * 0.4;
      targetB[i * 3 + 2] = (Math.random() - 0.5) * DEPTH_RANGE;

      // Start scattered
      positions[i * 3] = (Math.random() - 0.5) * 8;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 8;
      positions[i * 3 + 2] = (Math.random() - 0.5) * DEPTH_RANGE;

      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;

      sizes[i] = Math.random() * 6 + 3;
      seeds[i] = Math.random() * Math.PI * 2;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute("size", new THREE.BufferAttribute(sizes, 1));

    /* ── Shader material ─────────────────────────────── */
    const material = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uPixelRatio: { value: Math.min(window.devicePixelRatio, 2) },
      },
      vertexShader: `
        attribute float size;
        varying vec3 vColor;
        uniform float uTime;
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
          alpha *= 0.7;
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

    /* ── Animation loop ──────────────────────────────── */
    let morphPhase = 0;
    const clock = new THREE.Clock();

    function animate() {
      rafRef.current = requestAnimationFrame(animate);

      const elapsed = clock.getElapsedTime();
      material.uniforms.uTime.value = elapsed;

      // Morph between infinity ↔ blob every ~8 seconds (smooth sinusoidal)
      morphPhase = (Math.sin(elapsed * 0.25) + 1) * 0.5; // 0 → 1 → 0

      const posArr = geometry.attributes.position.array;
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const i3 = i * 3;
        const seed = seeds[i];

        // Lerp target between infinity and blob
        const tx =
          targetA[i3] * (1 - morphPhase) + targetB[i3] * morphPhase;
        const ty =
          targetA[i3 + 1] * (1 - morphPhase) +
          targetB[i3 + 1] * morphPhase;
        const tz =
          targetA[i3 + 2] * (1 - morphPhase) +
          targetB[i3 + 2] * morphPhase;

        // Add gentle organic motion
        const floatX = Math.sin(elapsed * 0.4 + seed * 3.0) * 0.12;
        const floatY = Math.cos(elapsed * 0.35 + seed * 2.5) * 0.12;
        const floatZ = Math.sin(elapsed * 0.3 + seed * 4.0) * 0.06;

        // Mouse repulsion
        const dx = posArr[i3] - mx * 3.5;
        const dy = posArr[i3 + 1] - my * 3.5;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const repulsion = Math.max(0, 1.2 - dist) * 0.6;
        const repX = dist > 0.01 ? (dx / dist) * repulsion : 0;
        const repY = dist > 0.01 ? (dy / dist) * repulsion : 0;

        // Smooth approach to target
        posArr[i3] += ((tx + floatX + repX - posArr[i3]) * 0.025);
        posArr[i3 + 1] += ((ty + floatY + repY - posArr[i3 + 1]) * 0.025);
        posArr[i3 + 2] += ((tz + floatZ - posArr[i3 + 2]) * 0.025);
      }

      geometry.attributes.position.needsUpdate = true;

      // Subtle camera sway
      camera.position.x = Math.sin(elapsed * 0.15) * 0.15;
      camera.position.y = Math.cos(elapsed * 0.12) * 0.1;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    }

    animate();

    /* ── Mouse tracking ──────────────────────────────── */
    function onMouseMove(e) {
      const rect = container.getBoundingClientRect();
      mouseRef.current.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouseRef.current.y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
    }

    function onTouchMove(e) {
      if (e.touches.length > 0) {
        const rect = container.getBoundingClientRect();
        mouseRef.current.x =
          ((e.touches[0].clientX - rect.left) / rect.width) * 2 - 1;
        mouseRef.current.y =
          -(((e.touches[0].clientY - rect.top) / rect.height) * 2 - 1);
      }
    }

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });

    /* ── Resize handler ──────────────────────────────── */
    function onResize() {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
      material.uniforms.uPixelRatio.value = Math.min(
        window.devicePixelRatio,
        2
      );
    }
    window.addEventListener("resize", onResize);

    /* ── Cleanup ─────────────────────────────────────── */
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("resize", onResize);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} className="ia-three-canvas" />;
}
