"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    const revealEls = document.querySelectorAll(".ia-reveal");
    
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: "0px 0px -60px 0px",
      threshold: 0.1
    });

    revealEls.forEach((el) => {
      revealObserver.observe(el);
    });

    return () => {
      revealEls.forEach((el) => revealObserver.unobserve(el));
    };
  }, []);

  return null;
}
