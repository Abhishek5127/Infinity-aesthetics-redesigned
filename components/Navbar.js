"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// The particle logo pulls in three.js (~150 KB). Defer it off the initial
// bundle and render it client-side only — it's purely decorative.
const ThreeHeroCanvas = dynamic(() => import("./ThreeHeroCanvas"), {
  ssr: false,
});

/* ── helpers ── */
function isActive(pathname, href) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

/* ── Component ── */
export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeDrawer = () => {
    setOpen(false);
  };

  return (
    <>
      <header className={`ia-navbar ${scrolled ? "scrolled" : ""}`} id="navbar">
        <div className="ia-container">
          {/* ── Brand ── */}
          <div className="ia-nav-brand">
            <Link href="/" aria-label="Home">
              <div className="ia-nav-logo ia-nav-logo-canvas" aria-hidden="true">
                <ThreeHeroCanvas
                  className="ia-nav-logo-animation"
                  compact
                  interactive={false}
                  particleCount={260}
                  speed={1.5}
                />
              </div>
            </Link>
            <Link href="/" style={{ textDecoration: 'none' }}>
              <div className="ia-nav-brand-text">
                <span className="ia-nav-brand-name">Infinity Aesthetics</span>
                <span className="ia-nav-brand-tag">
                  Skin, Laser &amp; Hair Clinic
                </span>
              </div>
            </Link>
          </div>

          {/* ── Desktop Nav Links ── */}
          <nav className="ia-nav-links">
            <Link
              href="/"
              className={isActive(pathname, "/") ? "active" : ""}
            >
              Home
            </Link>
            <Link
              href="/services"
              className={isActive(pathname, "/services") ? "active" : ""}
            >
              Services
            </Link>
            <Link
              href="/about"
              className={isActive(pathname, "/about") ? "active" : ""}
            >
              About
            </Link>
            <Link
              href="/process"
              className={isActive(pathname, "/process") ? "active" : ""}
            >
              Process
            </Link>
            <Link
              href="/results"
              className={isActive(pathname, "/results") ? "active" : ""}
            >
              Results
            </Link>
            <Link
              href="/contact"
              className={isActive(pathname, "/contact") ? "active" : ""}
            >
              Contact
            </Link>
          </nav>

          {/* ── Actions ── */}
          <div className="ia-nav-actions">
            {/* Phone */}
            <a
              href="tel:+919460991160"
              className="ia-nav-phone"
              aria-label="Call us"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              094609 91160
            </a>

            {/* CTA */}
            <Link
              href="/contact"
              className="ia-btn ia-btn-gold ia-nav-cta"
            >
              Book Now
            </Link>

            {/* Mobile hamburger */}
            <button
              className={`ia-mobile-btn ${open ? "open" : ""}`}
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile Drawer ── */}
      <div
        className={`ia-drawer-overlay ${open ? "open" : ""}`}
        onClick={closeDrawer}
      />
      <aside className={`ia-drawer ${open ? "open" : ""}`}>
        <button
          className="ia-drawer-close"
          onClick={closeDrawer}
          aria-label="Close menu"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Drawer Brand */}
        <div className="ia-drawer-brand">
          <div className="ia-nav-logo ia-nav-logo-canvas" aria-hidden="true">
            {open && (
              <ThreeHeroCanvas
                className="ia-nav-logo-animation"
                compact
                interactive={false}
                particleCount={180}
                speed={1.2}
              />
            )}
          </div>
          <div>
            <div className="ia-drawer-brand-name">Infinity Aesthetics</div>
            <div className="ia-drawer-brand-tag">
              Skin, Laser &amp; Hair Clinic
            </div>
          </div>
        </div>

        {/* Drawer Nav */}
        <div className="ia-drawer-nav">
          <Link
            href="/"
            onClick={closeDrawer}
            className={isActive(pathname, "/") ? "active" : ""}
          >
            <span className="ia-drawer-link-icon">🏠</span>
            Home
          </Link>

          <Link
            href="/services"
            onClick={closeDrawer}
            className={isActive(pathname, "/services") ? "active" : ""}
          >
            <span className="ia-drawer-link-icon">✦</span>
            Services
          </Link>

          <Link
            href="/about"
            onClick={closeDrawer}
            className={isActive(pathname, "/about") ? "active" : ""}
          >
            <span className="ia-drawer-link-icon">👥</span>
            About
          </Link>
          <Link
            href="/process"
            onClick={closeDrawer}
            className={isActive(pathname, "/process") ? "active" : ""}
          >
            <span className="ia-drawer-link-icon">📋</span>
            Process
          </Link>
          <Link
            href="/results"
            onClick={closeDrawer}
            className={isActive(pathname, "/results") ? "active" : ""}
          >
            <span className="ia-drawer-link-icon">✨</span>
            Results
          </Link>
          <Link
            href="/fees"
            onClick={closeDrawer}
            className={isActive(pathname, "/fees") ? "active" : ""}
          >
            <span className="ia-drawer-link-icon">💰</span>
            Fees
          </Link>
          <Link
            href="/contact"
            onClick={closeDrawer}
            className={isActive(pathname, "/contact") ? "active" : ""}
          >
            <span className="ia-drawer-link-icon">📩</span>
            Contact
          </Link>
        </div>

        {/* Drawer Contact Bar */}
        <div className="ia-drawer-contact">
          <a href="tel:+919460991160" className="ia-drawer-phone">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            Call — 094609 91160
          </a>
          <a
            href="https://wa.me/919460991160"
            target="_blank"
            rel="noopener noreferrer"
            className="ia-drawer-whatsapp"
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp Us
          </a>
          <Link
            href="/contact"
            className="ia-btn ia-btn-gold ia-drawer-book"
            onClick={closeDrawer}
            style={{ width: "100%", marginTop: "4px" }}
          >
            Book Consultation
          </Link>
        </div>
      </aside>
    </>
  );
}
