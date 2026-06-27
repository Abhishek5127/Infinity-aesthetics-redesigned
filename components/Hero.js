"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import ThreeHeroCanvas from "./ThreeHeroCanvas";

export default function Hero() {
  const [scrolledOnce, setScrolledOnce] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!scrolledOnce && window.scrollY > 100) {
        setScrolledOnce(true);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolledOnce]);

  return (
    <section className="ia-hero" id="home">
      <div className="ia-container">
        <div className="ia-hero-content">
          <div className="ia-hero-glow" />
          <p className="ia-hero-eyebrow">Infinity Aesthetics — Ajmer</p>
          <h1 className="ia-hero-title">
            <span className="ia-hero-word">Reveal</span>
            <span className="ia-hero-word">Your Natural</span>
            <span className="ia-hero-word">Radiance.</span>
          </h1>
          <p className="ia-hero-subtitle">
            Where medical expertise meets aesthetic artistry. Discover personalized skin and hair treatments tailored to your unique beauty.
          </p>

          <div className="ia-hero-ctas">
            <Link href="/contact" className="ia-btn ia-btn-gold">
              Book Consultation — ₹85
              <div className="ripple" />
            </Link>
            <Link href="#reviews" className="ia-btn ia-btn-ghost">
              See Our Results ↓
              <div className="ripple" />
            </Link>
          </div>

          <div className="ia-hero-badges">
            <div className="ia-hero-badge">
              <svg viewBox="0 0 24 24" fill="var(--accent-gold)" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              4.9★ Google Rated
            </div>
            <div className="ia-hero-badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="var(--accent-green)" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              500+ Patients
            </div>
            <div className="ia-hero-badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="var(--accent-green)" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              Ajmer&apos;s #1 Clinic
            </div>
          </div>
        </div>

        <div className="ia-hero-visual">
          <ThreeHeroCanvas />
        </div>
      </div>

      <div className={`ia-scroll-indicator ${scrolledOnce ? 'hidden' : ''}`}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
      </div>
    </section>
  );
}
