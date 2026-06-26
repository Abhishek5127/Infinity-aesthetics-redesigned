import Image from "next/image";
import Link from "next/link";
import PageHero from "../../components/PageHero";
import styles from "../page.module.css";

export const metadata = {
  title: "About | Infinity Aesthetics — Ajmer",
  description:
    "Infinity Aesthetics combines clinical planning with patient comfort, focused on skin health, laser treatments, and hair care in Ajmer.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker="Skin-first, not trend-first"
        title="A calm clinic for strategic skin renewal."
        text="Every treatment starts with your barrier health, tolerance, and long-term goals so the path to better skin feels measured, personal, and sustainable."
      />

      <section className={styles.aboutClinic} id="about">
        <div>
          <p className={styles.kicker}>Our approach</p>
          <h2 className={styles.sectionTitle}>Spa-level comfort, clinical planning.</h2>
          <p className={styles.richText}>
            Infinity Aesthetics combines clinical precision with patient comfort. We avoid one-size-fits-all
            protocols and instead tune every visit to your skin&apos;s response, downtime tolerance,
            and the result you actually want.
          </p>
          <Link className={styles.sectionCta} href="/process">
            See how your plan works
          </Link>
        </div>
        <div className={styles.aboutImage}>
          <Image
            src="https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=900&q=82"
            alt="Skin care oils and treatment tools on a clinic counter"
            fill
            sizes="(max-width: 900px) 100vw, 42vw"
          />
        </div>
      </section>
    </>
  );
}
