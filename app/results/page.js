import Link from "next/link";
import styles from "./results.module.css";
import BeforeAfterSlider from "../../components/BeforeAfterSlider";
import JsonLd from "../../components/JsonLd";
import { breadcrumbSchema, createMetadata } from "../../lib/seo";

import treatment1Before from "../assets/results/Treatment1Before.png";
import treatment1After from "../assets/results/Treatment1After.png";
import treatment2Before from "../assets/results/Treatment2Before.png";
import treatment2After from "../assets/results/Treatment2After.png";

export const metadata = createMetadata({
  title: "Skin Treatment Results Ajmer | Infinity Aesthetics",
  description:
    "View Infinity Aesthetics Ajmer treatment result examples and before-after sliders for personalized skin rejuvenation and brightening care.",
  path: "/results",
});

const resultsData = [
  {
    id: 1,
    title: "Skin Rejuvenation",
    beforeImage: treatment1Before,
    afterImage: treatment1After,
  },
  {
    id: 2,
    title: "Skin Tightening & Brightening",
    beforeImage: treatment2Before,
    afterImage: treatment2After,
  },
];

export default function ResultsPage() {
  return (
    <div className={styles.resultsContainer}>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Results", path: "/results" }])} />

      <section className={styles.heroSection}>
        <p className={styles.heroEyebrow}>Real Transformations</p>
        <h1 className={styles.heroTitle}>Skin treatment results in Ajmer.</h1>
        <p className={styles.heroSubtitle}>
          Slide to see example outcomes of personalized treatments. Every procedure is tailored to your unique skin and hair needs, and results vary by concern, skin response, and aftercare.
        </p>
      </section>

      <section className={styles.gallerySection}>
        <div className={styles.sliderGrid}>
          {resultsData.map((item) => (
            <BeforeAfterSlider
              key={item.id}
              title={item.title}
              beforeImage={item.beforeImage}
              afterImage={item.afterImage}
            />
          ))}
        </div>
      </section>

      <section className={styles.ctaSection}>
        <h2 className={styles.ctaTitle}>Ready to start your journey?</h2>
        <p className={styles.ctaText}>
          Book a consultation today to create a personalized treatment plan that aligns with your aesthetic goals.
        </p>
        <Link href="/contact" className={styles.ctaButton}>
          Schedule a Consultation in Ajmer
        </Link>
      </section>
    </div>
  );
}
