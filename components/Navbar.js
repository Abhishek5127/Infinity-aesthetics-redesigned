import styles from "../app/page.module.css";

const links = ["Home", "Services", "About", "Products", "Contact"];

export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <a className={styles.brand} href="#home" aria-label="Lunéva Spa home">
        <span className={styles.brandMark} aria-hidden="true">
          ◒
        </span>
        <span>
          <span className={styles.brandName}>Lunéva Spa</span>
          <span className={styles.brandTagline}>Wellness & Renewal</span>
        </span>
      </a>

      <nav className={styles.navLinks} aria-label="Primary navigation">
        {links.map((link) => (
          <a key={link} href={link === "Home" ? "#home" : `#${link.toLowerCase()}`}>
            {link}
          </a>
        ))}
      </nav>

      <div className={styles.navActions}>
        <a className={styles.navButton} href="#contact">
          Book Now
        </a>
      </div>

      <button className={styles.mobileMenuButton} type="button" aria-label="Open navigation menu">
        <span className={styles.hamburgerLine} aria-hidden="true" />
      </button>
    </header>
  );
}
