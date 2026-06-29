"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const slides = [
  {
    src: "/laser-treatment.png",
    alt: "Laser skin treatment at Infinity Aesthetics",
    eyebrow: "Laser Dermatology",
    title: "Precision skin work",
  },
  {
    src: "/facial-treatment.png",
    alt: "Clinical facial treatment at Infinity Aesthetics",
    eyebrow: "Clinical Facials",
    title: "Calm barrier repair",
  },
  {
    src: "/hair-treatment.png",
    alt: "Healthy hair treatment result at Infinity Aesthetics",
    eyebrow: "Hair Restoration",
    title: "Density with softness",
  },
];

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [titleProgress, setTitleProgress] = useState(0);
  const carouselRef = useRef(null);
  const dragRef = useRef({ pointerId: null, startX: 0, width: 1 });

  useEffect(() => {
    const handleScroll = () => {
      const progress = Math.min(window.scrollY / 260, 1);
      setTitleProgress(progress);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const clampSlide = (value) => Math.max(0, Math.min(slides.length - 1, value));

  const handlePointerDown = (event) => {
    if (!carouselRef.current) return;

    const width = carouselRef.current.getBoundingClientRect().width || 1;
    dragRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      width,
    };
    setIsDragging(true);
    setDragOffset(0);
    carouselRef.current.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event) => {
    if (!isDragging || dragRef.current.pointerId !== event.pointerId) return;
    setDragOffset(event.clientX - dragRef.current.startX);
  };

  const finishDrag = (event) => {
    if (!isDragging || dragRef.current.pointerId !== event.pointerId) return;

    const threshold = dragRef.current.width * 0.16;
    const direction = Math.abs(dragOffset) > threshold ? Math.sign(dragOffset) : 0;
    setActiveSlide((current) => clampSlide(current - direction));
    setDragOffset(0);
    setIsDragging(false);

    if (carouselRef.current?.hasPointerCapture(event.pointerId)) {
      carouselRef.current.releasePointerCapture(event.pointerId);
    }
  };

  const translate = `calc(${-activeSlide * 100}% + ${dragOffset}px)`;
  const titleStyle = {
    opacity: Math.max(0, 1 - titleProgress * 1.35),
    transform: `translate3d(-50%, ${titleProgress * 120}px, 0)`,
  };
  const active = slides[activeSlide];

  return (
    <section className="ia-hero" id="home">
      <div className="ia-hero-backdrop" aria-hidden="true">
        <span>Infinity</span>
        <span>Aesthetics</span>
      </div>
      <div className="ia-hero-frame">
        <div className="ia-hero-kicker">
          <span>Ajmer</span>
          <span>Skin / Laser / Hair</span>
        </div>

        <div
          className={`ia-hero-carousel ${isDragging ? "is-dragging" : ""}`}
          ref={carouselRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={finishDrag}
          onPointerCancel={finishDrag}
          aria-label="Featured Infinity Aesthetics treatments"
        >
          <div className="ia-hero-track" style={{ transform: `translate3d(${translate}, 0, 0)` }}>
            {slides.map((slide, index) => (
              <div
                className={`ia-hero-slide ${activeSlide === index ? "is-active" : ""}`}
                key={slide.src}
                aria-hidden={activeSlide !== index}
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  sizes="(max-width: 768px) 94vw, 82vw"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>
        </div>

        <h1 className="ia-hero-title" style={titleStyle}>
          <span>Infinity</span>
          <span>Aesthetics</span>
        </h1>

        <div className="ia-hero-panel" aria-live="polite">
          <p>{active.eyebrow}</p>
          <h2>{active.title}</h2>
        </div>

        <div className="ia-hero-progress" aria-hidden="true">
          <span>{String(activeSlide + 1).padStart(2, "0")}</span>
          <div>
            {slides.map((slide, index) => (
              <i className={activeSlide === index ? "is-active" : ""} key={slide.src} />
            ))}
          </div>
          <span>{String(slides.length).padStart(2, "0")}</span>
        </div>
      </div>
    </section>
  );
}
