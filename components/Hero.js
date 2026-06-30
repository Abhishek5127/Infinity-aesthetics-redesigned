"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import carouselImg1 from "../app/assets/hero/carouselImg1.png";
import carouselImg2 from "../app/assets/hero/carouselImg2.png";
import carouselImg3 from "../app/assets/hero/carouselImg3.png";
import carouselImg4 from "../app/assets/hero/carouselImg4.png";

const slides = [
  {
    src: carouselImg1,
    alt: "Infinity Aesthetics Signature Care",
    eyebrow: "Infinity Aesthetics",
    title: "Signature Care",
  },
  {
    src: carouselImg2,
    alt: "Laser Dermatology",
    eyebrow: "Laser Dermatology",
    title: "Precision skin work",
  },
  {
    src: carouselImg3,
    alt: "Clinical Facials",
    eyebrow: "Clinical Facials",
    title: "Calm barrier repair",
  },
  {
    src: carouselImg4,
    alt: "Hair Restoration",
    eyebrow: "Hair Restoration",
    title: "Density with softness",
  },
];

const extendedSlides = [slides[slides.length - 1], ...slides, slides[0]];

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(1);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [titleProgress, setTitleProgress] = useState(0);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  
  const carouselRef = useRef(null);
  const dragRef = useRef({ pointerId: null, startX: 0, width: 1 });

  // Infinite Auto-Scrolling
  useEffect(() => {
    if (isDragging) return;
    const interval = setInterval(() => {
      setTransitionEnabled(true);
      setActiveSlide((current) => current + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [isDragging]);

  useEffect(() => {
    const handleScroll = () => {
      const progress = Math.min(window.scrollY / 260, 1);
      setTitleProgress(progress);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handlePointerDown = (event) => {
    if (!carouselRef.current) return;

    let currentSlide = activeSlide;
    // Snap to real slides instantly before drag begins
    if (activeSlide >= extendedSlides.length - 1) {
      currentSlide = 1;
      setTransitionEnabled(false);
      setActiveSlide(currentSlide);
    } else if (activeSlide <= 0) {
      currentSlide = extendedSlides.length - 2;
      setTransitionEnabled(false);
      setActiveSlide(currentSlide);
    }

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
    
    setTransitionEnabled(true);
    setActiveSlide((current) => current - direction);
    setDragOffset(0);
    setIsDragging(false);

    if (carouselRef.current?.hasPointerCapture(event.pointerId)) {
      carouselRef.current.releasePointerCapture(event.pointerId);
    }
  };

  const handleTransitionEnd = () => {
    if (activeSlide >= extendedSlides.length - 1) {
      setTransitionEnabled(false);
      setActiveSlide(1);
    } else if (activeSlide <= 0) {
      setTransitionEnabled(false);
      setActiveSlide(extendedSlides.length - 2);
    }
  };

  const getRealIndex = (index) => {
    if (index === 0) return slides.length - 1;
    if (index === extendedSlides.length - 1) return 0;
    return index - 1;
  };

  const realSlideIndex = getRealIndex(activeSlide);
  const active = slides[realSlideIndex] || slides[0];

  const translate = `calc(${-activeSlide * 100}% + ${dragOffset}px)`;
  const titleStyle = {
    opacity: Math.max(0, 1 - titleProgress * 1.35),
    transform: `translate3d(-50%, ${titleProgress * 120}px, 0)`,
  };

  return (
    <section className="ia-hero" id="home">
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
          <div 
            className="ia-hero-track" 
            style={{ 
              transform: `translate3d(${translate}, 0, 0)`,
              transition: !transitionEnabled ? "none" : undefined
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {extendedSlides.map((slide, index) => {
              const isSlideActive = realSlideIndex === getRealIndex(index);
              return (
                <div
                  className={`ia-hero-slide ${isSlideActive ? "is-active" : ""}`}
                  key={index}
                  aria-hidden={!isSlideActive}
                >
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    sizes="(max-width: 768px) 94vw, 82vw"
                    priority={index === 1}
                    placeholder="blur"
                  />
                </div>
              );
            })}
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
          <span>{String(realSlideIndex + 1).padStart(2, "0")}</span>
          <div>
            {slides.map((_, index) => (
              <i className={realSlideIndex === index ? "is-active" : ""} key={index} />
            ))}
          </div>
          <span>{String(slides.length).padStart(2, "0")}</span>
        </div>
      </div>
    </section>
  );
}
