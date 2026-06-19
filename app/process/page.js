import PageHero from "../../components/PageHero";
import { processSteps } from "../../lib/content";
import styles from "../page.module.css";

export const metadata = {
  title: "Process | Luneva Skin Clinic",
  description:
    "How your skin plan works, from skin mapping and treatment planning through clinic treatment and progress reviews.",
};

export default function ProcessPage() {
  return (
    <>
      <PageHero
        kicker="Process"
        title="How your skin plan works."
        text="A clear, four-step path from first consultation to ongoing progress reviews — adjusted to your skin instead of following a template."
      />

      <section className={styles.processSection} aria-label="Treatment process">
        <div className={styles.processGrid}>
          {processSteps.map((item) => (
            <article className={styles.processCard} key={item.step}>
              <span>{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
