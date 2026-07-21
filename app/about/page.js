import Image from "next/image";
import Link from "next/link";
import styles from "./about.module.css";
import JsonLd from "../../components/JsonLd";
import { breadcrumbSchema, clinicSchema, createMetadata } from "../../lib/seo";

const clinicImg = "/about/ClinicImg.webp";
const doctorImg = "/about/DoctorImg2.webp";
const doctorImg2 = "/about/DoctorImg.png";

export const metadata = createMetadata({
  title: "About Us | Skin, Laser & Hair Clinic Ajmer | Infinity Aesthetics",
  description:
    "Discover Infinity Aesthetics in Ajmer. Founded by Abhay Sen, we offer premium, personalized, and evidence-based treatments for acne, laser hair reduction, PRP, and skin rejuvenation.",
  path: "/about",
});

export default function AboutPage() {
  const offerings = [
    "Acne Solutions",
    "Pigmentation",
    "Melasma Care",
    "Laser Hair Reduction",
    "Anti-Ageing Treatments",
    "Skin Rejuvenation",
    "Hair Restoration",
    "Scar Revision",
    "Aesthetic Consultations",
  ];

  const valuePillars = [
    {
      title: "Personalized Treatment Plans",
      description: "Tailored specifically to every individual's skin, hair, and aesthetic goals.",
    },
    {
      title: "Advanced Technologies",
      description: "Equipped with state-of-the-art laser and aesthetic clinical systems.",
    },
    {
      title: "Evidence-Based Practice",
      description: "Ethical, scientifically proven treatment recommendations and guidelines.",
    },
    {
      title: "Premium Safety Standards",
      description: "Uncompromised hygiene, strict safety protocols, and deep patient comfort.",
    },
    {
      title: "Long-Term Health Focus",
      description: "Natural-looking results optimized for the lasting health of your skin and hair.",
    },
    {
      title: "Compassionate Excellence",
      description: "Delivering clinical care built on patient trust, transparency, and clinical mastery.",
    },
  ];

  return (
    <div className={styles.aboutContainer}>
      <JsonLd data={clinicSchema("/about")} />
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "About", path: "/about" }])} />

      {/* ===== HERO SECTION ===== */}
      <section className={styles.heroSection}>
        <div className={styles.heroBackground}>
          <Image
            src={clinicImg}
            alt="Infinity Aesthetics skin clinic in Ajmer"
            priority
            fill
            sizes="100vw"
          />
        </div>
        <div className={styles.heroGradient}></div>
        <div className={styles.heroContent}>
          <span className={styles.sparkle}>✦</span>
          <h1 className={styles.heroTitle}>
            About Us
          </h1>
          <p className={styles.heroSubtitle}>
            Welcome to Infinity Aesthetics
          </p>
          <p className={styles.paragraph} style={{ marginTop: "20px", marginBottom: 0 }}>
            At Infinity Aesthetics – Skin, Laser & Hair Clinic, we believe true beauty is the reflection of healthy skin, vibrant hair, and genuine confidence. Every treatment we offer is thoughtfully designed to deliver refined, natural-looking results through a combination of advanced aesthetic technology, evidence-based practice, and personalized care.
          </p>
        </div>
      </section>

      {/* ===== FOUNDING & PHILOSOPHY SECTION ===== */}
      <section className={styles.contentSection}>
        <div className={styles.grid}>
          <div className={styles.textContent}>
            <span className={styles.sectionEyebrow}>Our Philosophy</span>
            <h2 className={styles.sectionTitle}>Becoming Your Most Confident Self</h2>

            <p className={styles.paragraph}>
              Founded by Abhay Sen, Infinity Aesthetics was created with a simple philosophy: every patient deserves honest guidance, exceptional care, and treatment plans tailored to their unique skin and hair concerns.
            </p>
            <div className={styles.imageWrapperMobile}>
              <Image
                src={doctorImg}
                alt="Founding vision and clinical consultation space at Infinity Aesthetics"
                fill
                sizes="100vw"
                priority
              />
            </div>

            <blockquote className={styles.philosophyQuote}>
              &ldquo;We don&apos;t believe in changing who you are—we believe in helping you become the most confident version of yourself. Healthy skin, naturally beautiful results, and patient trust remain at the heart of everything we do.&rdquo;
            </blockquote>
          </div>

          <div className={styles.imageWrapper}>
            <Image
              src={doctorImg}
              alt="Founding vision and clinical consultation space at Infinity Aesthetics"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </section>

      {/* ===== WHY PATIENTS CHOOSE US ===== */}
      <section className={styles.chooseUsSection}>
        <div className={styles.chooseUsHeader}>
          <span className={styles.sectionEyebrow} style={{ justifyContent: "center" }}>Why Choose Us</span>
          <h2 className={styles.sectionTitle}>The Pillars of Infinity Aesthetics</h2>
          <p className={styles.paragraph} style={{ maxWidth: "700px", margin: "0 auto" }}>
            We combine medical expertise, state-of-the-art clinical tools, and a client-focused environment to elevate your aesthetic care.
          </p>
        </div>

        <div className={styles.chooseUsGrid}>
          {valuePillars.map((pillar, idx) => (
            <div key={idx} className={styles.chooseUsCard}>
              <div className={styles.cardNumber}>0{idx + 1}</div>
              <h3 className={styles.cardTitle}>{pillar.title}</h3>
              <p className={styles.cardDescription}>{pillar.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== COMPREHENSIVE OFFERINGS & LUXURY ===== */}
      <section className={styles.contentSection}>
        <div className={styles.gridReverse}>
          <div className={styles.imageWrapper}>
            <Image
              src={doctorImg2}
              alt="Advanced dermatology treatments and equipment at Infinity Aesthetics"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div className={styles.textContent}>
            <span className={styles.sectionEyebrow}>Comprehensive Care</span>
            <h2 className={styles.sectionTitle}>Solutions Tailored to Your Concerns</h2>
            <p className={styles.paragraph}>
              Our clinic offers comprehensive solutions for acne, pigmentation, melasma, laser hair reduction, anti-ageing treatments, skin rejuvenation, hair restoration, scars, and other aesthetic concerns.
            </p>
            <p className={styles.paragraph}>
              Every consultation begins with a detailed assessment, allowing us to recommend treatments that are appropriate for your individual needs and expectations.
            </p>

            <div className={styles.servicesList}>
              {offerings.map((tag, idx) => (
                <div key={idx} className={styles.serviceTag}>
                  {tag}
                </div>
              ))}
            </div>

            <div className={styles.luxuryBox}>
              <h3 className={styles.luxuryBoxTitle}>The Luxury Experience</h3>
              <p className={styles.luxuryBoxText}>
                Luxury at Infinity Aesthetics is defined by precision, comfort, privacy, and attention to detail. From your first consultation to your final follow-up, every aspect of your experience is designed to be welcoming, transparent, and centered around your well-being.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className={styles.ctaSection}>
        <span className={styles.ctaEyebrow}>Start Your Experience</span>
        <h2 className={styles.ctaTitle}>Experience the Art of Modern Aesthetics</h2>
        <p className={styles.ctaText}>
          At Infinity Aesthetics, every treatment is more than a procedure—it&apos;s an investment in your confidence, your well-being, and your self-image. Where science meets luxury and every detail is designed around you.
        </p>

        <div className={styles.addressBox}>
          <div className={styles.addressIcon}>📍</div>
          <div>
            <strong>Infinity Aesthetics — Skin, Laser & Hair Clinic</strong><br />
            48-49, Ajmer Tower, Kutchery Road,<br />
            Ajmer, Rajasthan 305001
          </div>
        </div>

        <div>
          <Link href="/contact" className={styles.bookButton}>
            Book a Personal Consultation →
          </Link>
        </div>
      </section>
    </div>
  );
}
