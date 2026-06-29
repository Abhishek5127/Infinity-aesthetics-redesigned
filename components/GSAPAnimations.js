"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function GSAPAnimations() {
  useEffect(() => {
    // Bail out early for reduced-motion users
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      // Just show everything instantly
      document.querySelectorAll(".ia-reveal").forEach((el) => {
        el.style.opacity = "1";
        el.style.transform = "none";
      });
      return;
    }

    const ctx = gsap.context(() => {
      /* ──────────────────────────────────────────────
         1.  TRUST BAR — elastic slide-up
         ────────────────────────────────────────────── */
      gsap.from(".ia-trust-headline", {
        scrollTrigger: {
          trigger: ".ia-trust-bar",
          start: "top 85%",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(".ia-trust-item", {
        scrollTrigger: {
          trigger: ".ia-trust-row",
          start: "top 85%",
        },
        opacity: 0,
        y: 40,
        scale: 0.85,
        stagger: 0.1,
        duration: 0.7,
        ease: "elastic.out(1, 0.6)",
      });

      /* ──────────────────────────────────────────────
         2.  SERVICES — 3D tilt cards
         ────────────────────────────────────────────── */
      gsap.from(".ia-services-header .ia-eyebrow, .ia-services-header .ia-section-title, .ia-services-header .ia-section-text", {
        scrollTrigger: {
          trigger: ".ia-services-header",
          start: "top 80%",
        },
        opacity: 0,
        y: 35,
        stagger: 0.12,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(".ia-service-card", {
        scrollTrigger: {
          trigger: ".ia-services-grid",
          start: "top 80%",
        },
        opacity: 0,
        y: 60,
        rotateY: 8,
        scale: 0.92,
        stagger: {
          each: 0.1,
          from: "start",
        },
        duration: 0.9,
        ease: "power4.out",
        transformOrigin: "center bottom",
      });

      /* ──────────────────────────────────────────────
         3.  SHOWCASE (ABOUT) — header & cards
         ────────────────────────────────────────────── */
      gsap.from(".ia-showcase-header > *", {
        scrollTrigger: {
          trigger: ".ia-showcase",
          start: "top 75%",
        },
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(".ia-showcase-card", {
        scrollTrigger: {
          trigger: ".ia-showcase-cards",
          start: "top 80%",
        },
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
      });

      /* ──────────────────────────────────────────────
         4.  TESTIMONIALS — multi-directional entrance
         ────────────────────────────────────────────── */
      gsap.from(".ia-sp-header .ia-eyebrow, .ia-sp-header .ia-section-title, .ia-sp-header .ia-section-text", {
        scrollTrigger: {
          trigger: ".ia-sp-header",
          start: "top 80%",
        },
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
      });

      const testimonialCards = document.querySelectorAll(".ia-testimonial-card");
      testimonialCards.forEach((card, i) => {
        const directions = [
          { x: -50, y: 30, rotate: -3 },
          { x: 0, y: 50, rotate: 0 },
          { x: 50, y: 30, rotate: 3 },
        ];
        const dir = directions[i % 3];
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
          opacity: 0,
          x: dir.x,
          y: dir.y,
          rotate: dir.rotate,
          duration: 0.9,
          delay: i * 0.12,
          ease: "power3.out",
        });
      });

      /* ──────────────────────────────────────────────
         5.  CONTACT — sequential slide-up
         ────────────────────────────────────────────── */
      gsap.from(".ia-contact-header .ia-eyebrow, .ia-contact-header .ia-section-title, .ia-contact-header .ia-section-text", {
        scrollTrigger: {
          trigger: ".ia-contact-header",
          start: "top 80%",
        },
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(".ia-contact-info", {
        scrollTrigger: {
          trigger: ".ia-contact-grid",
          start: "top 80%",
        },
        opacity: 0,
        x: -40,
        duration: 0.9,
        ease: "power3.out",
      });

      gsap.from(".ia-contact-form-wrap", {
        scrollTrigger: {
          trigger: ".ia-contact-form-wrap",
          start: "top 85%",
        },
        opacity: 0,
        y: 40,
        scale: 0.97,
        duration: 0.9,
        ease: "power3.out",
      });

      /* ──────────────────────────────────────────────
         6.  FOOTER — staggered reveal
         ────────────────────────────────────────────── */
      gsap.from(".ia-footer-grid > div", {
        scrollTrigger: {
          trigger: ".ia-footer",
          start: "top 85%",
        },
        opacity: 0,
        y: 30,
        stagger: 0.12,
        duration: 0.8,
        ease: "power3.out",
      });

      /* ──────────────────────────────────────────────
         7.  MAGNETIC CURSOR on buttons & cards
         ────────────────────────────────────────────── */
      const magneticElements = document.querySelectorAll(
        ".ia-btn, .ia-service-card, .ia-trust-item"
      );

      magneticElements.forEach((el) => {
        const strength = el.classList.contains("ia-service-card") ? 0.15 : 0.3;

        el.addEventListener("mousemove", (e) => {
          const rect = el.getBoundingClientRect();
          const cx = rect.left + rect.width / 2;
          const cy = rect.top + rect.height / 2;
          const dx = (e.clientX - cx) * strength;
          const dy = (e.clientY - cy) * strength;

          gsap.to(el, {
            x: dx,
            y: dy,
            duration: 0.4,
            ease: "power2.out",
          });
        });

        el.addEventListener("mouseleave", () => {
          gsap.to(el, {
            x: 0,
            y: 0,
            duration: 0.6,
            ease: "elastic.out(1, 0.4)",
          });
        });
      });
    });

    return () => {
      ctx.revert(); // cleans up all GSAP animations
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return null;
}
