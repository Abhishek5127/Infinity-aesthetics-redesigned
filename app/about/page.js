import Image from "next/image";
import Link from "next/link";
import styles from "./about.module.css";
import JsonLd from "../../components/JsonLd";
import { breadcrumbSchema, clinicSchema, createMetadata } from "../../lib/seo";

const clinicImg = "/about/ClinicImg.webp";
const doctorImg = "/about/DoctorImg.png";
const doctorImg2 = "/about/DoctorImg2.webp";

export const metadata = createMetadata({
  title: "Dermatologist Ajmer Clinic | Infinity Aesthetics",
  description:
    "Learn about Infinity Aesthetics, an Ajmer skin, laser, and hair clinic offering consultation-led care for acne, pigmentation, PRP, and facials.",
  path: "/about",
});

export default function AboutPage() {
  const services = [
    "HydraFacial",
    "Chemical Peels",
    "Acne Treatment",
    "PRP",
    "Hair Regrowth",
    "Anti-Ageing",
    "Laser hair removal",
    "Laser",
  ];

  return (
    <div className={styles.aboutContainer}>
      <JsonLd data={clinicSchema("/about")} />
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "About", path: "/about" }])} />

      <section className={styles.heroSection}>
        <div className={styles.heroBackground}>
          <Image
            src={clinicImg}
            alt="Infinity Aesthetics skin clinic in Ajmer"
            priority
            width={1200}
            height={800}
          />
        </div>
        <div className={styles.heroGradient}></div>
        <div className={styles.heroContent}>
          <span className={styles.sparkle}>*</span>
          <h1 className={styles.heroTitle}>Infinity Aesthetics <br /> Skin, Laser & Hair Clinic</h1>
          <p className={styles.heroSubtitle}>
            Your trusted partner for glowing skin and strong, beautiful hair in Ajmer.
          </p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.grid}>
          <div className={styles.textContent}>
            <p className={styles.sectionEyebrow}>Our Expertise</p>
            <h2 className={styles.sectionTitle}>Comprehensive Services</h2>
            <p className={styles.heroSubtitle} style={{ marginLeft: 0 }}>
              We offer aesthetic treatments tailored to enhance natural beauty and restore confidence, with consultation-led planning for Ajmer&apos;s sun, dust, and dry-weather skin concerns.
            </p>
            <div className={styles.servicesList}>
              {services.map((service, index) => (
                <div key={index} className={styles.serviceTag}>
                  {service}
                </div>
              ))}
            </div>
          </div>
          <div className={styles.imageWrapper}>
            <Image
              src={doctorImg}
              alt="Cosmetologist performing skin treatment at Infinity Aesthetics Ajmer"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.gridReverse}>
          <div className={styles.imageWrapper}>
            <Image
              src={doctorImg2}
              alt="Advanced skin and hair clinic technology at Infinity Aesthetics Ajmer"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </div>
          <div className={styles.textContent}>
            <p className={styles.sectionEyebrow}>The Infinity Standard</p>
            <h2 className={styles.sectionTitle}>Why Choose Us</h2>
            <div className={styles.featuresList}>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>-</div>
                <div className={styles.featureText}>Personalized treatment plans</div>
              </div>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>-</div>
                <div className={styles.featureText}>Certified cosmetologist and advanced technology</div>
              </div>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>-</div>
                <div className={styles.featureText}>Safe, realistic, and consultation-led care</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <p className={styles.ctaEyebrow}>Take the First Step</p>
        <h2 className={styles.ctaTitle}>Ready for your transformation?</h2>
        <p className={styles.ctaText}>
          Get your consultation today and discover a customized approach to your skin and hair goals.
        </p>

        <div className={styles.addressBox}>
          <div className={styles.addressIcon}>@</div>
          <div>
            <strong>Infinity Aesthetics</strong><br />
            Ajmer Tower, Kutchery Road,<br />
            Ajmer, Rajasthan 305001
          </div>
        </div>

        <div>
          <Link href="/contact" className={styles.bookButton}>
            Book a Consultation in Ajmer
          </Link>
        </div>
      </section>
    </div>
  );
}
