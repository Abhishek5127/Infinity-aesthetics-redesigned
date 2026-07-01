import PageHero from "../../components/PageHero";
import Image from "next/image";
import Link from "next/link";
import JsonLd from "../../components/JsonLd";
import { clinicServices } from "../../lib/services";
import { breadcrumbSchema, createMetadata, serviceSeo } from "../../lib/seo";
import styles from "../services.module.css";

export const metadata = createMetadata({
  title: "Skin Clinic Services Ajmer | Infinity Aesthetics",
  description:
    "Explore acne treatment, PRP hair therapy, HydraFacial, chemical peels, pigmentation care, microneedling, and laser services in Ajmer.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Services", path: "/services" }])} />
      <PageHero
        kicker="Treatments"
        title="Skin clinic services in Ajmer."
        text="Evidence-informed treatments for glow, clarity, texture, acne care, hair support, pigmentation, and long-term skin health. Each plan is shaped around your barrier health, Ajmer's climate, and your goals."
      />

      <section className={styles.servicesListSection}>
        <div className={styles.container}>
          {clinicServices.map((service, index) => {
            const isEven = index % 2 === 0;
            const seo = serviceSeo[service.slug];
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
                      alt={service.alt || `${service.name} treatment at Infinity Aesthetics Ajmer`}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="(max-width: 992px) 100vw, 50vw"
                    />
                  </div>
                </div>

                <div className={styles.serviceContentCol}>
                  <p className={styles.serviceCategoryText}>{service.category}</p>
                  <h2 className={styles.serviceNameLarge}>{seo?.h1 || service.name}</h2>
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

                  <Link href={`/services/${service.slug}`} className={styles.bookBtnLarge}>
                    Learn About {service.name} in Ajmer
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
