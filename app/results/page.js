import Link from "next/link";
import styles from "./results.module.css";
import BeforeAfterSlider from "../../components/BeforeAfterSlider";
import JsonLd from "../../components/JsonLd";
import { breadcrumbSchema, createMetadata } from "../../lib/seo";

import treatment1Before from "../assets/results/Treatment1Before.png";
import treatment1After from "../assets/results/Treatment1After.png";
import treatment2Before from "../assets/results/Treatment2Before.png";
import treatment2After from "../assets/results/Treatment2After.png";
import treatment3Before from "../assets/results/treatment3Before.jpeg";
import treatment3After from "../assets/results/treatment3After.png";

export const metadata = createMetadata({
  title: "Skin Treatment Results Ajmer | Infinity Aesthetics",
  description:
    "View Infinity Aesthetics Ajmer treatment result examples and before-after sliders for personalized skin rejuvenation and brightening care.",
  path: "/results",
});

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
          {/* Slider 1 — always visible */}
          <BeforeAfterSlider
            title="Skin Rejuvenation"
            beforeImage={treatment1Before}
            afterImage={treatment1After}
          />
          {/* Slider 2 — desktop/tablet only, hidden on mobile */}
          <div className={styles.desktopOnly}>
            <BeforeAfterSlider
              title="Skin Tightening & Brightening"
              beforeImage={treatment2Before}
              afterImage={treatment2After}
            />
          </div>
          {/* Slider 3 — always visible; swaps in place of slider 2 on mobile */}
          <BeforeAfterSlider
            title="Skin Clarity"
            beforeImage={treatment3Before}
            afterImage={treatment3After}
          />
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
