import Link from "next/link";
import styles from "./results.module.css";
import BeforeAfterSlider from "../../components/BeforeAfterSlider";
import JsonLd from "../../components/JsonLd";
import { breadcrumbSchema, createMetadata } from "../../lib/seo";

import hydrafacialBefore from "../assets/results/HydrafacialBefore.png";
import hydrafacialAfter from "../assets/results/HydrafacialAfter.png";
import photofacialBefore from "../assets/results/PhotofacialBefore.png";
import photofacialAfter from "../assets/results/PhotofacialAfter.png";
import laserHairBefore from "../assets/results/LaserHairRemovalBefore.png";
import laserHairAfter from "../assets/results/LaserHairRemovalAfter.jpeg";
import chemicalPeelBefore from "../assets/results/ChemicalPeelBefore.png";
import chemicalPeelAfter from "../assets/results/ChemicalPeelAfter.png";
import hifuBefore from "../assets/results/HIFUbefore.png";
import hifuAfter from "../assets/results/HIFUafter.png";
import hairPrpBefore from "../assets/results/HairPRPbefore.png";
import hairPrpAfter from "../assets/results/HairPRPafter.png";
import hairPrpGfcBefore from "../assets/results/hairPRP(GFC)before.png";
import hairPrpGfcAfter from "../assets/results/hairPRP(GFC)After.png";
import facePrpBefore from "../assets/results/FacePRPbefore.png";
import facePrpAfter from "../assets/results/FacePRPafter.png";
import glutathioneBefore from "../assets/results/Glutathione IV before.png";
import glutathioneAfter from "../assets/results/Glutathione IV after.png";
import carbonLaserBefore from "../assets/results/CarbonLaserBefore.png";
import carbonLaserAfter from "../assets/results/CarbonLaserAfter.png";
import iplBefore from "../assets/results/IPLtreatmentbefore.png";
import iplAfter from "../assets/results/IPLtreatmentAfter.png";
import oxygeneoBefore from "../assets/results/OxygeneoTreatmentBefore.png";
import oxygeneoAfter from "../assets/results/OxygeneoTreatmentAfter.png";
import scarBefore from "../assets/results/ScarTreatmentBefore.png";
import scarAfter from "../assets/results/ScarTreatmentAfter.png";
import acneBefore from "../assets/results/AcneTreatmentBefore.png";
import acneAfter from "../assets/results/AcneTreatmentAfter.png";
import pigmentationBefore from "../assets/results/PigmentationMalasmaTreatmentBefore.png";
import pigmentationAfter from "../assets/results/PigmentationMalasmaTreatmentAfter.png";
import tattooRemovalBefore from "../assets/results/LaserTattooRemovalBefore.jpeg";
import tattooRemovalAfter from "../assets/results/LaserTattooRemovalAfter.png";

export const metadata = createMetadata({
  title: "Skin Treatment Results Ajmer | Infinity Aesthetics",
  description:
    "View Infinity Aesthetics Ajmer treatment result examples and before-after sliders for personalized skin rejuvenation and brightening care.",
  path: "/results",
});

const resultSliders = [
  { title: "Hydra Facial", before: hydrafacialBefore, after: hydrafacialAfter },
  { title: "Photo Facial", before: photofacialBefore, after: photofacialAfter },
  { title: "Laser Hair Removal", before: laserHairBefore, after: laserHairAfter },
  { title: "Chemical Peel", before: chemicalPeelBefore, after: chemicalPeelAfter },
  { title: "HIFU", before: hifuBefore, after: hifuAfter },
  { title: "Hair PRP", before: hairPrpBefore, after: hairPrpAfter },
  { title: "Hair PRP (GFC)", before: hairPrpGfcBefore, after: hairPrpGfcAfter },
  { title: "Face PRP", before: facePrpBefore, after: facePrpAfter },
  { title: "Glutathione IV", before: glutathioneBefore, after: glutathioneAfter },
  { title: "Carbon Laser", before: carbonLaserBefore, after: carbonLaserAfter },
  { title: "IPL Treatment", before: iplBefore, after: iplAfter },
  { title: "Oxygeneo Treatment", before: oxygeneoBefore, after: oxygeneoAfter },
  { title: "Scar Treatment", before: scarBefore, after: scarAfter },
  { title: "Acne Treatment", before: acneBefore, after: acneAfter },
  { title: "Pigmentation Treatment", before: pigmentationBefore, after: pigmentationAfter },
  { title: "Tattoo Removal", before: tattooRemovalBefore, after: tattooRemovalAfter },
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
          {resultSliders.map((slider) => (
            <BeforeAfterSlider
              key={slider.title}
              title={slider.title}
              beforeImage={slider.before}
              afterImage={slider.after}
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
