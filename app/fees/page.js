import Link from "next/link";
import PageHero from "../../components/PageHero";
import JsonLd from "../../components/JsonLd";
import { clinicServices } from "../../lib/services";
import { breadcrumbSchema, createMetadata, serviceSeo } from "../../lib/seo";
import styles from "../page.module.css";

export const metadata = createMetadata({
  title: "Skin Clinic Fees Ajmer | Infinity Aesthetics",
  description:
    "Review consultation-led starting fee information for Infinity Aesthetics Ajmer skin, laser, PRP hair, acne, facial, peel, and pigmentation services.",
  path: "/fees",
});

export default function FeesPage() {
  const featuredFees = clinicServices.map((service) => ({
    title: serviceSeo[service.slug]?.h1 || service.shortTitle || service.name,
    price: service.fees?.[0]?.price || "Consultation",
    duration: service.fees?.[0]?.duration || service.duration,
    slug: service.slug,
  }));

  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Fees", path: "/fees" }])} />
      <PageHero
        kicker="Fees"
        title="Skin clinic fees in Ajmer."
        text="Final recommendations are confirmed after consultation, but each service page includes treatment duration and session guidance so clients can plan before booking."
      />

      <section className={styles.feesSection} aria-label="Service fees">
        <div className={styles.feeList}>
          {featuredFees.map((fee) => (
            <Link className={styles.feeRow} href={`/services/${fee.slug}`} key={fee.slug}>
              <span>{fee.title}</span>
              <small>{fee.duration}</small>
              <strong>{fee.price}</strong>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
