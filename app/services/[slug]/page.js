import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { clinicServices, getServiceBySlug } from "../../../lib/services";
import styles from "../../page.module.css";

export function generateStaticParams() {
  return clinicServices.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    return {
      title: "Service Not Found | Luneva Skin Clinic",
    };
  }

  return {
    title: `${service.title} | Luneva Skin Clinic`,
    description: service.text,
  };
}

export default function ServicePage({ params }) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  const relatedServices = clinicServices.filter((item) => item.slug !== service.slug).slice(0, 3);
  const startingFee = service.fees[0];

  return (
    <article className={styles.detailArticle}>
        <section className={styles.detailHeroNew}>
          <div className={styles.detailHeroContent}>
            <Link className={styles.backLink} href="/services">
              Back to all treatments
            </Link>
            <p className={styles.kicker}>{service.category}</p>
            <h1 className={styles.detailTitle}>{service.title}</h1>
            <p className={styles.detailLead}>{service.overview}</p>
            <div className={styles.tagList} aria-label="Best for">
              {service.bestFor.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>

          <aside className={styles.atGlanceCard} aria-label="Treatment summary">
            <div className={styles.detailImageWrapNew}>
              <Image
                src={service.image}
                alt={service.alt}
                fill
                priority
                sizes="(max-width: 900px) 100vw, 420px"
              />
            </div>
            <div className={styles.glanceRows}>
              <div>
                <span>Starts at</span>
                <strong>{startingFee.price}</strong>
              </div>
              <div>
                <span>First visit</span>
                <strong>{startingFee.duration}</strong>
              </div>
              <div>
                <span>Plan style</span>
                <strong>Personalized</strong>
              </div>
            </div>
          </aside>
        </section>

        <section className={styles.detailBand} aria-labelledby="results-heading">
          <div className={styles.sectionIntroLeft}>
            <p className={styles.kicker}>Results</p>
            <h2 className={styles.sectionTitle} id="results-heading">
              What this treatment is designed to improve.
            </h2>
            <p className={styles.richText}>
              Your provider will confirm what is realistic for your skin after consultation.
              Stronger concerns usually need a series rather than one visit.
            </p>
          </div>
          <div className={styles.detailGrid}>{service.results.map((result) => (
            <div className={styles.detailPoint} key={result}>
              <span>+</span>
              <p>{result}</p>
            </div>
          ))}</div>
        </section>

        <section className={styles.detailBandAlt} aria-labelledby="process-heading">
          <div className={styles.sectionIntro}>
            <p className={styles.kicker}>Process</p>
            <h2 className={styles.sectionTitle} id="process-heading">
              Appointment flow from consult to aftercare.
            </h2>
          </div>
          <div className={styles.treatmentTimeline}>
            {service.process.map((step, index) => (
              <article className={styles.timelineCard} key={step}>
                <strong>{String(index + 1).padStart(2, "0")}</strong>
                <p>{step}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.detailBand} aria-labelledby="fees-heading">
          <div className={styles.sectionIntroLeft}>
            <p className={styles.kicker}>Fees</p>
            <h2 className={styles.sectionTitle} id="fees-heading">
              Clear service pricing.
            </h2>
            <p className={styles.richText}>
              Pricing is confirmed before treatment begins. Packages are available when a series is
              the better route for your goal.
            </p>
          </div>
          <div className={styles.pricingTableStrong}>
            {service.fees.map((fee) => (
              <div className={styles.pricingRowStrong} key={fee.label}>
                <span>{fee.label}</span>
                <small>{fee.duration}</small>
                <strong>{fee.price}</strong>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.aftercareSection} aria-labelledby="aftercare-heading">
          <div>
            <p className={styles.kicker}>Aftercare</p>
            <h2 className={styles.sectionTitle} id="aftercare-heading">
              Care that protects your result.
            </h2>
          </div>
          <ul className={styles.aftercareList}>
            <li>Avoid harsh exfoliants until your provider clears them.</li>
            <li>Wear daily SPF and keep your routine gentle after treatment.</li>
            <li>Message the clinic if heat, irritation, or dryness feels unusual.</li>
          </ul>
        </section>

        <section className={styles.relatedSection} aria-labelledby="related-heading">
          <div className={styles.sectionIntro}>
            <p className={styles.kicker}>More treatments</p>
            <h2 className={styles.sectionTitle} id="related-heading">
              Compare related services.
            </h2>
          </div>
          <div className={styles.relatedGrid}>
            {relatedServices.map((item) => (
              <Link className={styles.relatedCard} href={`/services/${item.slug}`} key={item.slug}>
                <span>{item.category}</span>
                <strong>{item.shortTitle}</strong>
                <small>{item.text}</small>
              </Link>
            ))}
          </div>
        </section>

        <section className={styles.detailCtaNew}>
          <div>
            <p className={styles.kicker}>Next step</p>
            <h2>Start with a skin consultation.</h2>
            <p>
              We will review contraindications, downtime, home care, and realistic sequencing before
              recommending this treatment.
            </p>
          </div>
          <Link className={styles.navButton} href="/contact">
            Book Consultation
          </Link>
        </section>
    </article>
  );
}
