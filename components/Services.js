import ServiceCard from "./ServiceCard";
import styles from "../app/page.module.css";

const services = [
  {
    title: "Massage Therapy",
    text: "Relieve tension and melt away stress.",
    icon: "♧",
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=640&q=80",
    alt: "Spa stones, candle, and flower on a treatment table",
  },
  {
    title: "Facials",
    text: "Revitalize and nourish your skin.",
    icon: "♁",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=640&q=80",
    alt: "Facial treatment with a spa mask application",
  },
  {
    title: "Aromatherapy",
    text: "Restore balance with healing scents.",
    icon: "♨",
    image:
      "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=640&q=80",
    alt: "Essential oils, candle, and lavender for aromatherapy",
  },
  {
    title: "Body Scrubs",
    text: "Exfoliate, refresh, and renew your glow.",
    icon: "❀",
    image:
      "https://images.unsplash.com/photo-1634612831148-03a8550e1d52?auto=format&fit=crop&w=640&q=80",
    alt: "Natural body scrub in a bowl with spa towels",
  },
];

export default function Services() {
  return (
    <section className={styles.services} id="services" aria-labelledby="services-title">
      <h2 className={styles.sectionTitle} id="services-title">
        Our Signature Services
      </h2>
      <div className={styles.sectionDivider} aria-hidden="true">
        ✦
      </div>
      <p className={styles.sectionText}>
        Carefully curated treatments to relax, rejuvenate, and renew.
      </p>

      <div className={styles.serviceGrid}>
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </section>
  );
}
