import Link from "next/link";
import { navLinks } from "../lib/nav";
import styles from "../app/page.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerBrand}>
        <span className={styles.brandName}>Luneva Skin Clinic</span>
        <p>Clinical skin &amp; renewal, planned around your barrier health and goals.</p>
      </div>
      <nav className={styles.footerNav} aria-label="Footer navigation">
        {navLinks.map((link) => (
          <Link key={link.label} href={link.href}>
            {link.label}
          </Link>
        ))}
      </nav>
      <p className={styles.footerNote}>
        &copy; {2026} Luneva Skin Clinic. Results vary by concern, consistency, and baseline skin
        health.
      </p>
    </footer>
  );
}
