"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import carouselImg1Land from "../app/assets/hero/carouselLandscapeImgs/carouselImg1.png";
import carouselImg2Land from "../app/assets/hero/carouselLandscapeImgs/carouselImg2.png";
import carouselImg3Land from "../app/assets/hero/carouselLandscapeImgs/carouselImg3.png";
import carouselImg4Land from "../app/assets/hero/carouselLandscapeImgs/carouselImg4.png";

import carouselImg1Port from "../app/assets/hero/carouselPortraitImgs/carouselImg1.png";
import carouselImg2Port from "../app/assets/hero/carouselPortraitImgs/carouselImg2.png";
import carouselImg3Port from "../app/assets/hero/carouselPortraitImgs/carouselImg3.png";
import carouselImg4Port from "../app/assets/hero/carouselPortraitImgs/carouselImg4.webp";

const slides = [
  {
    srcLand: carouselImg1Land,
    srcPort: carouselImg1Port,
    alt: "Infinity Aesthetics Signature Care",
    eyebrow: "Infinity Aesthetics",
    title: "Signature Care",
  },
  {
    srcLand: carouselImg2Land,
    srcPort: carouselImg2Port,
    alt: "Laser Dermatology",
    eyebrow: "Laser Dermatology",
    title: "Precision skin work",
  },
  {
    srcLand: carouselImg3Land,
    srcPort: carouselImg3Port,
    alt: "Clinical Facials",
    eyebrow: "Clinical Facials",
    title: "Calm barrier repair",
  },
  {
    srcLand: carouselImg4Land,
    srcPort: carouselImg4Port,
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

  const translate = `calc(${-activeSlide * 100}% + ${dragOffset}px)`;
  const titleStyle = {
    opacity: 1,
    transform: `translate3d(-50%, ${titleProgress * 204}px, 0) scale(${1 - titleProgress * 0.8})`,
    fontFamily: "var(--font-genos), var(--font-body), sans-serif",
    fontWeight: 700,
  };

  return (
    <section className="ia-hero" id="home">
      <div className="ia-hero-frame">

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
                    className="ia-hero-img-landscape"
                    src={slide.srcLand}
                    alt={slide.alt}
                    fill
                    style={{ objectFit: "cover", objectPosition: "center" }}
                    sizes="(max-width: 768px) 0vw, 82vw"
                    priority={index === 1}
                  />
                  <Image
                    className="ia-hero-img-portrait"
                    src={slide.srcPort}
                    alt={slide.alt}
                    fill
                    style={{ objectFit: "cover", objectPosition: "center" }}
                    sizes="(max-width: 768px) 94vw, 0vw"
                    priority={index === 1}
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
      </div>
    </section>
  );
}
