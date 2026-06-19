import PageHero from "../../components/PageHero";
import ServiceCard from "../../components/ServiceCard";
import { clinicServices } from "../../lib/services";
import styles from "../page.module.css";

export const metadata = {
  title: "Services | Luneva Skin Clinic",
  description:
    "Explore clinical facials, peels, microneedling, laser glow therapy, acne programs, and body polish treatments.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        kicker="Treatments"
        title="Clinical Skin Services"
        text="Evidence-informed treatments for glow, clarity, texture, acne care, and long-term skin health. Each treatment is planned around your barrier health and goals."
      />

      <section className={styles.servicesPageGrid}>
        <div className={styles.serviceGrid}>
          {clinicServices.map((service) => (
            <ServiceCard key={service.slug} {...service} title={service.shortTitle} />
          ))}
        </div>
      </section>
    </>
  );
}
