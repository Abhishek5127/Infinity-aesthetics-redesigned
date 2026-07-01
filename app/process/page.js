import PageHero from "../../components/PageHero";
import JsonLd from "../../components/JsonLd";
import styles from "../page.module.css";
import { breadcrumbSchema, createMetadata } from "../../lib/seo";

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
      "A gentle resurfacing treatment that helps brighten the skin, reduce pigmentation, and smooth uneven texture for a polished, healthy look.",
    video: carbonLaserVideo,
    points: ["Reduces active acne and unclogs pores", "Fades pigmentation and evens skin tone", "Stimulates collagen for long-term radiance", "Painless with no peeling"],
    meta: { duration: "45 mins", downtime: "None" },
  },
  {
    title: "Hair PRP Therapy",
    eyebrow: "Scalp renewal",
    description:
      "A clinically guided Platelet-Rich Plasma approach to support thicker, healthier hair growth and strengthen the scalp for long-term confidence.",
    video: hairPrpVideo,
    points: ["Utilizes your own growth factors for natural repair", "Slows down hair thinning and shedding", "Strengthens hair follicles at the root", "Ideal for early stages of hair loss"],
    meta: { duration: "60 mins", downtime: "Minimal (12 hrs)" },
  },
  {
    title: "Medical Peels",
    eyebrow: "Targeted exfoliation",
    description:
      "Medical-grade peels designed to refresh dull skin, calm active breakouts, and improve tone with expert aftercare and a calm recovery plan.",
    video: mediPeelsVideo,
    points: ["Customized strength based on skin type", "Deeply exfoliates dead skin layers", "Softens fine lines and mild scarring", "Improves overall skin texture"],
    meta: { duration: "30 mins", downtime: "3-5 Days (Flaking)" },
  },
  {
    title: "Tattoo Removal",
    eyebrow: "Safe fading",
    description:
      "A precise, step-by-step removal journey using advanced laser technology to lighten unwanted ink gradually while prioritizing comfort and skin safety.",
    video: tattooRemovalVideo,
    points: ["Breaks down ink particles safely", "Requires multiple sessions for full removal", "Cooling technology ensures maximum comfort", "Effective on a variety of ink colors"],
    meta: { duration: "Varies", downtime: "7-10 Days (Healing)" },
  },
];

export const metadata = createMetadata({
  title: "Skin Treatment Process Ajmer | Infinity Aesthetics",
  description:
    "See the consultation-led treatment process at Infinity Aesthetics Ajmer for skin analysis, laser care, peels, PRP hair therapy, and aftercare.",
  path: "/process",
});

export default function ProcessPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Process", path: "/process" }])} />
      <PageHero
        kicker="Process"
        title="Treatment process at our skin clinic in Ajmer."
        text="Every step is tailored to your skin goals, comfort, and pace, from consultation to visible transformation."
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
                <div className={styles.processMeta}>
                  <div className={styles.processMetaItem}>
                    <strong>Duration:</strong> {item.meta.duration}
                  </div>
                  <div className={styles.processMetaItem}>
                    <strong>Downtime:</strong> {item.meta.downtime}
                  </div>
                </div>
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
                  aria-label={`${item.title} treatment video at Infinity Aesthetics Ajmer`}
                />
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
