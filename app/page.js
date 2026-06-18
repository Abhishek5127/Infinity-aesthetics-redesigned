import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.page}>
      <div className={styles.backgroundShapeTop} />
      <div className={styles.backgroundShapeLeft} />
      <section className={styles.canvas} aria-label="Luneva Spa landing page">
        <Navbar />
        <Hero />
        <Services />
      </section>
    </main>
  );
}
