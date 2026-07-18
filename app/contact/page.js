import Link from "next/link";
import ContactForm from "../../components/ContactForm";
import PageHero from "../../components/PageHero";
import JsonLd from "../../components/JsonLd";
import styles from "../page.module.css";
import { areasServed, breadcrumbSchema, createMetadata } from "../../lib/seo";

export const metadata = createMetadata({
  title: "Skin Clinic Contact Ajmer | Infinity Aesthetics",
  description:
    "Contact Infinity Aesthetics in Ajmer for skin, laser, acne, pigmentation, PRP hair, HydraFacial, and peel consultations at 48-49, Ajmer Tower.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }])} />
      <PageHero
        kicker="Book"
        title="Start with a skin consultation in Ajmer."
        text="Tell us what you want to change, what you have tried, and how much downtime feels realistic. We will recommend a treatment path that respects your skin."
      />

      <section className={styles.contactSection} id="contact">
        <div>
          <p className={styles.kicker}>Visit</p>
          <h2 className={styles.sectionTitle}>We&apos;re ready when you are.</h2>
          <ul className={styles.contactList}>
            <li>
              <span>Phone</span>
              <div>
                <a href="tel:+917788991101">77889 91101</a>
                <br />
                <a href="tel:+919460991160">94609 91160</a>
              </div>
            </li>
            <li>
              <span>Website</span>
              <a href="https://infinityaestheticsajmer.com" target="_blank" rel="noopener noreferrer">infinityaestheticsajmer.com</a>
            </li>
            <li>
              <span>Clinic</span>
              <p>48-49, Ajmer Tower, Kutchery Road, Ajmer, Rajasthan 305001</p>
            </li>
            <li>
              <span>Hours</span>
              <p>Open - Closes 8 pm</p>
            </li>
            <li>
              <span>Inclusive</span>
              <p>LGBTQ+ friendly</p>
            </li>
          </ul>
        </div>
        <div className={styles.contactPanel}>
          <p>Consultation</p>
          <strong>Free</strong>
          <span>No commitment required. Come discuss your goals.</span>
          <Link className={styles.navButton} href="/services">
            Explore Services
          </Link>
        </div>
      </section>

      <section className={styles.detailBandAlt} id="areas-we-serve" aria-labelledby="areas-heading">
        <div className={styles.sectionIntroLeft}>
          <p className={styles.kicker}>Areas We Serve</p>
          <h2 className={styles.sectionTitle} id="areas-heading">Skin and laser clinic near central Ajmer.</h2>
          <p className={styles.richText}>
            Patients visit Infinity Aesthetics from Ajmer neighborhoods and nearby routes for acne treatment, PRP hair consultation, pigmentation care, peels, and HydraFacial appointments.
          </p>
        </div>
        <div className={styles.relatedGrid}>
          {areasServed.map((area) => (
            <a
              className={styles.relatedCard}
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`Infinity Aesthetics ${area} Ajmer`)}`}
              target="_blank"
              rel="noopener noreferrer"
              key={area}
            >
              <span>Serving</span>
              <strong>{area}</strong>
              <small>Get directions to Infinity Aesthetics from {area}.</small>
            </a>
          ))}
        </div>
      </section>

      <section className={styles.detailBand} aria-labelledby="map-heading">
        <div className={styles.sectionIntroLeft}>
          <p className={styles.kicker}>Map</p>
          <h2 className={styles.sectionTitle} id="map-heading">Find us at 48-49, Ajmer Tower.</h2>
          <p className={styles.richText}>
            Infinity Aesthetics is located at 48-49, Ajmer Tower, Kutchery Road, Ajmer, Rajasthan 305001.
          </p>
        </div>
        <div style={{ minHeight: 320, overflow: "hidden", borderRadius: 16 }}>
          <iframe
            title="Infinity Aesthetics Ajmer map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3571.8660282050882!2d74.63414207520799!3d26.46004707691985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396be7ef361925eb%3A0x75ad62f4bc2645de!2sInfinity%20Aesthetics-%20Skin%2C%20Laser%20%26%20Hair%20Clinic!5e0!3m2!1sen!2sin!4v1783759882721!5m2!1sen!2sin"
            width="100%"
            height="320"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </section>

      <section id="contact-form" style={{ scrollMarginTop: "120px", margin: "0 auto 64px", maxWidth: "1100px", padding: "0 24px" }}>
        <ContactForm />
      </section>
    </>
  );
}
