import PageHero from "../../components/PageHero";
import { resultStats, testimonials } from "../../lib/content";
import styles from "../page.module.css";

export const metadata = {
  title: "Results | Luneva Skin Clinic",
  description:
    "Visible change with realistic expectations. Treatment frequency, downtime, and home care are planned around your skin response.",
};

export default function ResultsPage() {
  return (
    <>
      <PageHero
        kicker="Results"
        title="Visible change with realistic expectations."
        text="Your provider will recommend treatment frequency, downtime, and home care based on your skin response. Results vary by concern, consistency, and baseline skin health."
      />

      <section className={styles.resultsSection} aria-label="Result statistics">
        <div className={styles.resultGrid}>
          {resultStats.map((stat) => (
            <div className={styles.resultCard} key={stat.value}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.testimonialsSection} aria-labelledby="testimonials-title">
        <div className={styles.sectionIntro}>
          <p className={styles.kicker}>Client Notes</p>
          <h2 className={styles.sectionTitle} id="testimonials-title">
            Considered care, never rushed.
          </h2>
        </div>
        <div className={styles.testimonialGrid}>
          {testimonials.map((testimonial) => (
            <figure className={styles.testimonialCard} key={testimonial.name}>
              <blockquote>{testimonial.quote}</blockquote>
              <figcaption>{testimonial.name}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}
