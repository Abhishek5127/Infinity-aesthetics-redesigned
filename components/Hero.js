import Image from "next/image";
import styles from "../app/page.module.css";

const leafImage =
  "https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=640&q=80";

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.heroContent}>
        <p className={styles.heroEyebrow}>Advanced skin care clinic</p>
        <h1 className={styles.heroTitle}>
          <span className={styles.heroTitleLine}>Repair. Refine.</span>
          <br />
          Radiate.
        </h1>
        <p className={styles.heroSubtitle}>Personalized treatments for healthy, luminous skin</p>
        <p className={styles.heroText}>
          Clinical facials, peels, microneedling, acne programs, and glow therapies designed
          around your skin history, goals, and comfort.
        </p>
        <a className={`${styles.button} ${styles.heroButton}`} href="#contact">
          Book Skin Consultation
          <span className={styles.buttonLeaf} aria-hidden="true">
            +
          </span>
        </a>
      </div>

      <div className={styles.heroVisual} aria-label="Skin clinic client surrounded by tropical leaves">
        <div className={styles.blushCircle} />
        <div className={styles.leafFan}>
          <Image src={leafImage} alt="" width={460} height={340} priority />
        </div>
        <div className={styles.leaf}>
          <Image src={leafImage} alt="" width={490} height={420} priority />
        </div>
        <div className={styles.leafLarge}>
          <Image src={leafImage} alt="" width={416} height={640} priority />
        </div>
        <div className={styles.heroImageWrap}>
          <Image
            className={styles.heroImage}
            src="https://images.unsplash.com/photo-1544717304-a2db4a7b16ee?auto=format&fit=crop&w=900&q=85"
            alt="Woman with clean glowing skin in a towel"
            width={720}
            height={760}
            priority
          />
        </div>
        <span className={styles.heroFlower} aria-hidden="true">
          +
        </span>
        <span className={styles.sparkle} aria-hidden="true">
          +
        </span>
      </div>
    </section>
  );
}
