"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks } from "../lib/nav";
import styles from "../app/page.module.css";

function isActive(pathname, href) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className={styles.navbar} data-open={open ? "true" : "false"}>
      <Link className={styles.brand} href="/" aria-label="Luneva Skin Clinic home">
        <span className={styles.brandMark} aria-hidden="true">
          LC
        </span>
        <span>
          <span className={styles.brandName}>Luneva Skin Clinic</span>
          <span className={styles.brandTagline}>Clinical Skin &amp; Renewal</span>
        </span>
      </Link>

      <nav
        className={`${styles.navLinks} ${open ? styles.navLinksOpen : ""}`}
        aria-label="Primary navigation"
      >
        {navLinks.map((link) => {
          const active = isActive(pathname, link.href);
          return (
            <Link
              key={link.label}
              href={link.href}
              className={active ? styles.navLinkActive : undefined}
              aria-current={active ? "page" : undefined}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>

      <div className={styles.navActions}>
        <Link className={styles.navButton} href="/contact">
          Book Now
        </Link>
      </div>

      <button
        className={styles.mobileMenuButton}
        type="button"
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <span className={styles.hamburgerLine} aria-hidden="true" />
      </button>
    </header>
  );
}
