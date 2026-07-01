import PageHero from "../../components/PageHero";
import styles from "../page.module.css";

const carbonLaserVideo = "/process/CarbonLaserTreatment.mp4";
const hairPrpVideo = "/process/hairPRPtreatment.mp4";
const mediPeelsVideo = "/process/MediPeels.mp4";
const tattooRemovalVideo = "/process/tattooRemoving.mp4";

const INSTAGRAM_URL = "https://www.instagram.com/infinityaestheticsajmer";

const treatments = [
  {
    title: "Carbon Laser Facial",
    eyebrow: "Glow & refine",
    description:
      "A gentle yet powerful resurfacing treatment that helps brighten the skin, reduce pigmentation, and smooth uneven texture for a polished, healthy look.",
    video: carbonLaserVideo,
    points: ["Pigmentation support", "Pore refinement", "Radiant glow"],
  },
  {
    title: "Hair PRP Therapy",
    eyebrow: "Scalp renewal",
    description:
      "A clinically guided PRP approach to support thicker, healthier hair growth and strengthen the scalp for long-term confidence.",
    video: hairPrpVideo,
    points: ["Hair fall support", "Scalp nourishment", "Visible regrowth potential"],
  },
  {
    title: "Medical Peels",
    eyebrow: "Targeted exfoliation",
    description:
      "Medical-grade peels designed to refresh dull skin, calm active breakouts, and improve tone with expert aftercare and a calm recovery plan.",
    video: mediPeelsVideo,
    points: ["Acne-focused care", "Even skin tone", "Smooth texture"],
  },
  {
    title: "Tattoo Removal",
    eyebrow: "Safe fading",
    description:
      "A precise, step-by-step removal journey that helps lighten unwanted ink gradually while keeping comfort and safety at the center of care.",
    video: tattooRemovalVideo,
    points: ["Gradual fading", "Comfort-first sessions", "Professional guidance"],
  },
];

export const metadata = {
  title: "Process | Infinity Aesthetics — Ajmer",
  description:
    "Explore the treatment journey at Infinity Aesthetics, from skin analysis and facial treatments to hair regrowth and tattoo removal care.",
};

export default function ProcessPage() {
  return (
    <>
      <PageHero
        kicker="Process"
        title="A treatment journey designed around you."
        text="Every step is tailored to your skin goals, comfort, and pace — from consultation to visible transformation."
      />

      <section className={styles.processSection} aria-label="Treatment process">
        <div className={styles.processIntroCard}>
          <div>
            <p className={styles.kicker}>How we guide your care</p>
            <h2 className={styles.sectionTitle}>Personalized treatment plans with clinical care.</h2>
            <p className={styles.sectionTextLarge}>
              We begin with a detailed understanding of your skin concerns, recommend the right treatment path, and support you through each session with clear guidance and visible results.
            </p>
          </div>
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className={styles.processCtaButton}>
            Check all our treatments
          </a>
        </div>

        <div className={styles.processGrid}>
          {treatments.map((item) => (
            <article className={styles.processCard} key={item.title}>
             
              <div className={styles.processCardBody}>
                <p className={styles.processEyebrow}>{item.eyebrow}</p>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <ul className={styles.processBullets}>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
               <div className={styles.processVideoWrap}>
                <video
                  className={styles.processVideo}
                  src={item.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
