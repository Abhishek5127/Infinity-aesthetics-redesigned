import Link from "next/link";
import PageHero from "../../components/PageHero";
import { clinicServices } from "../../lib/services";
import styles from "../page.module.css";

export const metadata = {
  title: "Fees | Luneva Skin Clinic",
  description:
    "Transparent starting prices for every Luneva treatment. Final recommendations are confirmed after consultation.",
};

export default function FeesPage() {
  const featuredFees = clinicServices.map((service) => ({
    title: service.shortTitle,
    price: service.fees[0].price,
    duration: service.fees[0].duration,
    slug: service.slug,
  }));

  return (
    <>
      <PageHero
        kicker="Fees"
        title="Transparent starting prices."
        text="Final recommendations are confirmed after consultation, but each service page includes sample structures so clients can plan before booking."
      />

      <section className={styles.feesSection} aria-label="Service fees">
        <div className={styles.feeList}>
          {featuredFees.map((fee) => (
            <Link className={styles.feeRow} href={`/services/${fee.slug}`} key={fee.slug}>
              <span>{fee.title}</span>
              <small>{fee.duration}</small>
              <strong>from {fee.price}</strong>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
