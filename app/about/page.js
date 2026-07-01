import Image from "next/image";
import Link from "next/link";
import styles from "./about.module.css";

const clinicImg = "/about/ClinicImg.webp";
const doctorImg = "/about/DoctorImg.png";
const doctorImg2 = "/about/DoctorImg2.webp";

export const metadata = {
  title: "About | Infinity Aesthetics — Ajmer",
  description:
    "Infinity Aesthetics - Skin, Laser & Hair Clinic. Your trusted partner for glowing skin & strong, beautiful hair in Ajmer.",
};

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
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroBackground}>
          <Image src={clinicImg} alt="Infinity Aesthetics Clinic" priority width={1200} height={800} />
        </div>
        <div className={styles.heroGradient}></div>
        <div className={styles.heroContent}>
          <span className={styles.sparkle}>✨</span>
          <h1 className={styles.heroTitle}>Infinity Aesthetics <br/> Skin, Laser & Hair Clinic</h1>
          <p className={styles.heroSubtitle}>
            Your trusted partner for glowing skin & strong, beautiful hair.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className={styles.contentSection}>
        <div className={styles.grid}>
          <div className={styles.textContent}>
            <p className={styles.sectionEyebrow}>💆♀️ Our Expertise</p>
            <h2 className={styles.sectionTitle}>Comprehensive Services</h2>
            <p className={styles.heroSubtitle} style={{ marginLeft: 0 }}>
              We offer a wide range of aesthetic treatments tailored to enhance your natural beauty and restore confidence.
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
              alt="Cosmetologist performing treatment" 
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className={styles.contentSection}>
        <div className={styles.gridReverse}>
          <div className={styles.imageWrapper}>
            <Image 
              src={doctorImg2} 
              alt="Advanced clinic technology and care" 
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </div>
          <div className={styles.textContent}>
            <p className={styles.sectionEyebrow}>🌟 The Infinity Standard</p>
            <h2 className={styles.sectionTitle}>Why Choose Us</h2>
            <div className={styles.featuresList}>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>🔹</div>
                <div className={styles.featureText}>Personalized treatment plans</div>
              </div>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>🔹</div>
                <div className={styles.featureText}>Certified cosmetologist & advanced tech</div>
              </div>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>🔹</div>
                <div className={styles.featureText}>Safe, effective & visible results</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className={styles.ctaSection}>
        <p className={styles.ctaEyebrow}>📅 Take the First Step</p>
        <h2 className={styles.ctaTitle}>Ready for your transformation?</h2>
        <p className={styles.ctaText}>
          Get your consultation today and discover a customized approach to your skin and hair goals.
        </p>
        
        <div className={styles.addressBox}>
          <div className={styles.addressIcon}>📍</div>
          <div>
            <strong>Infinity Aesthetics</strong><br/>
            Shop no. 48-49, 1st Floor, Ajmer Tower,<br/>
            Kutchery Road, Ajmer, Rajasthan 305001, India
          </div>
        </div>

        <div>
          <Link href="/contact" className={styles.bookButton}>
            Tap Message to Book Now
          </Link>
        </div>
      </section>
    </div>
  );
}
