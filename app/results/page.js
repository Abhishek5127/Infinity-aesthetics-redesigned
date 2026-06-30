import Link from "next/link";
import styles from "./results.module.css";
import BeforeAfterSlider from "../../components/BeforeAfterSlider";

// Assets
import treatment1Before from "../assets/results/Treatment1Before.png";
import treatment1After from "../assets/results/Treatment1After.png";
import treatment2Before from "../assets/results/Treatment2Before.png";
import treatment2After from "../assets/results/Treatment2After.png";

export const metadata = {
  title: "Results | Infinity Aesthetics — Ajmer",
  description:
    "See the transformative power of our personalized treatments at Infinity Aesthetics.",
};

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
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <p className={styles.heroEyebrow}>Real Transformations</p>
        <h1 className={styles.heroTitle}>Visible Results. <br/> Restored Confidence.</h1>
        <p className={styles.heroSubtitle}>
          Slide to see the transformative outcomes of our personalized treatments. 
          Every procedure is meticulously tailored to your unique skin and hair needs.
        </p>
      </section>

      {/* Slider Gallery Section */}
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

      {/* Call To Action */}
      <section className={styles.ctaSection}>
        <h2 className={styles.ctaTitle}>Ready to start your journey?</h2>
        <p className={styles.ctaText}>
          Book a consultation today to create a personalized treatment plan that aligns with your aesthetic goals.
        </p>
        <Link href="/contact" className={styles.ctaButton}>
          Schedule a Consultation
        </Link>
      </section>
    </div>
  );
}
