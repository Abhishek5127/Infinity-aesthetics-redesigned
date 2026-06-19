import Link from "next/link";
import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";
import { clinicServices } from "../lib/services";
import styles from "./page.module.css";

export default function Home() {
  const featured = clinicServices.slice(0, 3);

  return (
    <>
      <Hero />

      <section className={styles.services} id="services" aria-labelledby="featured-title">
        <h2 className={styles.sectionTitle} id="featured-title">
          Clinical Skin Services
        </h2>
        <div className={styles.sectionDivider} aria-hidden="true">
          +
        </div>
        <p className={styles.sectionText}>
          Evidence-informed treatments for glow, clarity, texture, acne care, and long-term skin
          health.
        </p>

        <div className={styles.serviceGrid}>
          {featured.map((service) => (
            <ServiceCard key={service.slug} {...service} title={service.shortTitle} />
          ))}
        </div>

        <Link className={styles.sectionCta} href="/services">
          View all treatments
        </Link>
      </section>

      <section className={styles.homeCta}>
        <div>
          <p className={styles.kicker}>Book</p>
          <h2 className={styles.sectionTitle}>Start with a skin consultation.</h2>
          <p className={styles.richText}>
            Tell us what you want to change, what you have tried, and how much downtime feels
            realistic. We will recommend a treatment path that respects your skin.
          </p>
        </div>
        <Link className={styles.navButton} href="/contact">
          Book Consultation
        </Link>
      </section>
    </>
  );
}
