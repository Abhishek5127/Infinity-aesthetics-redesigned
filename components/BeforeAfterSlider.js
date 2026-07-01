"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import styles from "./BeforeAfterSlider.module.css";

export default function BeforeAfterSlider({ title, beforeImage, afterImage }) {
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setPosition(percent);
  };

  const onPointerDown = (e) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    setIsDragging(true);
    handleMove(e.clientX);
  };

  const onPointerMove = (e) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  const onPointerUp = (e) => {
    e.currentTarget.releasePointerCapture(e.pointerId);
    setIsDragging(false);
  };

  return (
    <div className={styles.sliderWrapper}>
      {title && <h3 className={styles.title}>{title}</h3>}
      <div 
        className={styles.container} 
        ref={containerRef}
      >
        {/* After Image (Background) */}
        <div className={styles.imageContainer} style={{ pointerEvents: 'none' }}>
          <Image 
            src={afterImage} 
            alt={`${title} - After`}
            fill
            style={{ objectFit: "cover" }}
            priority
            draggable={false}
          />
          <span className={styles.labelBottomRight}>After</span>
        </div>
        
        {/* Before Image (Foreground with clip path) */}
        <div 
          className={styles.beforeContainer}
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)`, pointerEvents: 'none' }}
        >
          <Image 
            src={beforeImage} 
            alt={`${title} - Before`}
            fill
            style={{ objectFit: "cover" }}
            priority
            draggable={false}
          />
          <span className={styles.labelBottomLeft}>Before</span>
        </div>

        {/* Drag Handle */}
        <div className={styles.handle} style={{ left: `${position}%` }}>
          <div 
            className={styles.handleButton}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
