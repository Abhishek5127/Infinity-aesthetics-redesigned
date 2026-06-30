import PageHero from "../../components/PageHero";
import Image from "next/image";
import Link from "next/link";
import { clinicServices } from "../../lib/services";
import styles from "../services.module.css";

export const metadata = {
  title: "Services | Infinity Aesthetics — Ajmer",
  description:
    "Explore clinical facials, peels, microneedling, laser glow therapy, acne programs, and body polish treatments at Infinity Aesthetics, Ajmer.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        kicker="Treatments"
        title="Clinical Skin Services"
        text="Evidence-informed treatments for glow, clarity, texture, acne care, and long-term skin health. Each treatment is planned around your barrier health and goals."
      />

      <section className={styles.servicesListSection}>
        <div className={styles.container}>
          {clinicServices.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={service.slug}
                className={`${styles.serviceDetailRow} ${isEven ? styles.rowEven : styles.rowOdd}`}
                id={service.slug}
              >
                <div className={styles.serviceImageCol}>
                  <div className={styles.serviceImageWrapLarge}>
                    <Image
                      src={service.image}
                      alt={service.alt || service.name}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="(max-width: 992px) 100vw, 50vw"
                    />
                  </div>
                </div>
                
                <div className={styles.serviceContentCol}>
                  <p className={styles.serviceCategoryText}>{service.category}</p>
                  <h2 className={styles.serviceNameLarge}>{service.name}</h2>
                  <p className={styles.serviceOverviewText}>{service.overview}</p>
                  
                  <div className={styles.serviceDetailsGrid}>
                    <div className={styles.serviceDetailItem}>
                      <strong>Duration</strong>
                      <span>{service.duration}</span>
                    </div>
                    <div className={styles.serviceDetailItem}>
                      <strong>Recovery</strong>
                      <span>{service.recovery}</span>
                    </div>
                    <div className={styles.serviceDetailItem}>
                      <strong>Sessions</strong>
                      <span>{service.sessions}</span>
                    </div>
                    <div className={styles.serviceDetailItem}>
                      <strong>Comfort</strong>
                      <span>{service.pain}</span>
                    </div>
                  </div>

                  <div className={styles.serviceBenefits}>
                    <h3>Key Benefits</h3>
                    <ul>
                      {service.benefits.map((benefit, i) => (
                        <li key={i}>{benefit}</li>
                      ))}
                    </ul>
                  </div>

                  {service.faqs && service.faqs.length > 0 && (
                    <div className={styles.serviceFaqs}>
                      <h3>Frequently Asked Questions</h3>
                      {service.faqs.map((faq, i) => (
                        <details key={i} className={styles.faqAccordion}>
                          <summary>{faq.q}</summary>
                          <p>{faq.a}</p>
                        </details>
                      ))}
                    </div>
                  )}

                  <Link href="/contact" className={styles.bookBtnLarge}>
                    Book Consultation
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
