"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThreeHeroCanvas from "./ThreeHeroCanvas";

function isActive(pathname, href) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState('light');

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const storedTheme = localStorage.getItem('ia-theme');
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.setAttribute('data-theme', storedTheme);
    }
  }, []);

  const toggleTheme = () => {
    document.documentElement.classList.add('theme-transition');
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('ia-theme', newTheme);
    setTimeout(() => {
      document.documentElement.classList.remove('theme-transition');
    }, 350);
  };

  return (
    <>
      <header className={`ia-navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
        <div className="ia-container">
          <Link href="/" className="ia-nav-brand">
            <div className="ia-nav-logo ia-nav-logo-canvas" aria-hidden="true">
              <ThreeHeroCanvas
                className="ia-nav-logo-animation"
                compact
                interactive={false}
                particleCount={260}
                speed={1.5}
              />
            </div>
            <div className="ia-nav-brand-text">
              <span className="ia-nav-brand-name">Infinity Aesthetics</span>
              <span className="ia-nav-brand-tag">Skin, Laser &amp; Hair Clinic</span>
            </div>
          </Link>

          <nav className="ia-nav-links">
            <Link href="/" className={isActive(pathname, "/") ? "active" : ""}>Home</Link>
            <Link href="/services" className={isActive(pathname, "/services") ? "active" : ""}>Services</Link>
            <Link href="/about" className={isActive(pathname, "/about") ? "active" : ""}>About</Link>
            <Link href="/results" className={isActive(pathname, "/results") ? "active" : ""}>Reviews</Link>
            <Link href="/contact" className={isActive(pathname, "/contact") ? "active" : ""}>Contact</Link>
          </nav>

          <div className="ia-nav-actions">
            <button className="ia-theme-toggle" onClick={toggleTheme} aria-label="Toggle dark mode">
              <svg className="ia-icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
              <svg className="ia-icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
            </button>
            <Link href="/contact" className="ia-btn ia-btn-gold ia-nav-cta">Book Now</Link>
            <button
              className={`ia-mobile-btn ${open ? 'open' : ''}`}
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div className={`ia-drawer-overlay ${open ? 'open' : ''}`} onClick={() => setOpen(false)} />
      <aside className={`ia-drawer ${open ? 'open' : ''}`}>
        <button className="ia-drawer-close" onClick={() => setOpen(false)} aria-label="Close menu">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
        <Link href="/" onClick={() => setOpen(false)}>Home</Link>
        <Link href="/services" onClick={() => setOpen(false)}>Services</Link>
        <Link href="/about" onClick={() => setOpen(false)}>About</Link>
        <Link href="/results" onClick={() => setOpen(false)}>Reviews</Link>
        <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
        <a href="tel:+919460991160" className="ia-btn ia-btn-gold" style={{marginTop: '24px'}}>Call Now — 094609 91160</a>
      </aside>
    </>
  );
}
