import Link from "next/link";
import PageHero from "../../components/PageHero";
import styles from "../page.module.css";

export const metadata = {
  title: "Contact | Infinity Aesthetics — Ajmer",
  description:
    "Book a consultation at Infinity Aesthetics, Ajmer Tower, Kutchery Road, Ajmer. Call 094609 91160.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        kicker="Book"
        title="Start with a skin consultation."
        text="Tell us what you want to change, what you have tried, and how much downtime feels realistic. We will recommend a treatment path that respects your skin."
      />

      <section className={styles.contactSection} id="contact">
        <div>
          <p className={styles.kicker}>Visit</p>
          <h2 className={styles.sectionTitle}>We&apos;re ready when you are.</h2>
          <ul className={styles.contactList}>
            <li>
              <span>Phone</span>
              <a href="tel:+919460991160">094609 91160</a>
            </li>
            <li>
              <span>Website</span>
              <a href="https://infinityaestheticsajmer.in" target="_blank" rel="noopener noreferrer">infinityaestheticsajmer.in</a>
            </li>
            <li>
              <span>Clinic</span>
              <p>Ajmer Tower, Kutchery Road, Ajmer, Rajasthan 305001</p>
            </li>
            <li>
              <span>Hours</span>
              <p>Open · Closes 8 pm</p>
            </li>
            <li>
              <span>Google Rating</span>
              <p>4.9 ★ (113 reviews)</p>
            </li>
            <li>
              <span>Inclusive</span>
              <p>LGBTQ+ friendly</p>
            </li>
          </ul>
        </div>
        <div className={styles.contactPanel}>
          <p>Consultation</p>
          <strong>₹85</strong>
          <span>Applied toward select same-day treatments.</span>
          <Link className={styles.navButton} href="/services">
            Explore Services
          </Link>
        </div>
      </section>
    </>
  );
}
