import Link from "next/link";
import PageHero from "../../components/PageHero";
import styles from "../page.module.css";

export const metadata = {
  title: "Contact | Luneva Skin Clinic",
  description:
    "Start with a skin consultation. Tell us your goals, what you have tried, and how much downtime feels realistic.",
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
              <span>Email</span>
              <a href="mailto:hello@luneva.clinic">hello@luneva.clinic</a>
            </li>
            <li>
              <span>Phone</span>
              <a href="tel:+15551234567">+1 (555) 123-4567</a>
            </li>
            <li>
              <span>Studio</span>
              <p>128 Marigold Lane, Suite 4 &middot; Open Tue–Sat</p>
            </li>
          </ul>
        </div>
        <div className={styles.contactPanel}>
          <p>Consultation fee</p>
          <strong>$85</strong>
          <span>Applied toward select same-day treatments.</span>
          <Link className={styles.navButton} href="/services">
            Explore Services
          </Link>
        </div>
      </section>
    </>
  );
}
