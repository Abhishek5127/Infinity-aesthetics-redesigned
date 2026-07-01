import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "../../../components/JsonLd";
import { clinicServices, getServiceBySlug } from "../../../lib/services";
import {
  breadcrumbSchema,
  createMetadata,
  faqSchema,
  serviceSchema,
  serviceSeo,
} from "../../../lib/seo";
import styles from "../../page.module.css";

export function generateStaticParams() {
  return clinicServices.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return createMetadata({
      title: "Service Not Found | Infinity Aesthetics",
      description: "The requested Infinity Aesthetics service page could not be found.",
      path: "/services",
    });
  }

  const seo = serviceSeo[service.slug];
  return createMetadata({
    title: seo?.title || `${service.name} in Ajmer | Infinity Aesthetics`,
    description: seo?.description || service.description,
    path: `/services/${service.slug}`,
    image: service.image?.src || service.image,
    type: "article",
  });
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const seo = serviceSeo[service.slug] || {};
  const localFaqs = seo.faqs || [];
  const faqs = [...localFaqs, ...(service.faqs || [])].slice(0, 5);
  const relatedServices = clinicServices.filter((item) => item.slug !== service.slug).slice(0, 3);
  const servicePath = `/services/${service.slug}`;

  return (
    <article className={styles.detailArticle}>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Services", path: "/services" }, { name: service.name, path: servicePath }])} />
      <JsonLd data={serviceSchema(service, servicePath)} />
      {faqs.length > 0 ? <JsonLd data={faqSchema(faqs)} /> : null}

      <section className={styles.detailHeroNew}>
        <div className={styles.detailHeroContent}>
          <Link className={styles.backLink} href="/services">
            Back to all treatments
          </Link>
          <p className={styles.kicker}>{service.category}</p>
          <h1 className={styles.detailTitle}>{seo.h1 || `${service.name} in Ajmer`}</h1>
          <p className={styles.detailLead}>
            {service.description} At Infinity Aesthetics in Ajmer, your treatment plan is shaped around your skin type, lifestyle, downtime comfort, and realistic goals.
          </p>
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
              alt={service.alt || `${service.name} at Infinity Aesthetics Ajmer`}
              fill
              priority
              sizes="(max-width: 900px) 100vw, 420px"
            />
          </div>
          <div className={styles.glanceRows}>
            <div>
              <span>First visit</span>
              <strong>{service.duration}</strong>
            </div>
            <div>
              <span>Plan style</span>
              <strong>Personalized</strong>
            </div>
          </div>
        </aside>
      </section>

      <section className={styles.detailBand} aria-labelledby="local-heading">
        <div className={styles.sectionIntroLeft}>
          <p className={styles.kicker}>Ajmer context</p>
          <h2 className={styles.sectionTitle} id="local-heading">
            Why this matters in Ajmer.
          </h2>
        </div>
        <p className={styles.richText}>
          {seo.localDriver || "Ajmer's sun, dust, dry air, and hard water can influence skin and hair comfort. A consultation helps tailor treatment timing and aftercare to your routine."}
        </p>
      </section>

      <section className={styles.detailBand} aria-labelledby="results-heading">
        <div className={styles.sectionIntroLeft}>
          <p className={styles.kicker}>Benefits</p>
          <h2 className={styles.sectionTitle} id="results-heading">
            What this treatment is designed to improve.
          </h2>
          <p className={styles.richText}>
            Your provider will confirm what is realistic for your skin after consultation.
            Stronger concerns usually need a series rather than one visit.
          </p>
        </div>
        <div className={styles.detailGrid}>{service.benefits.map((benefit) => (
          <div className={styles.detailPoint} key={benefit}>
            <span>+</span>
            <p>{benefit}</p>
          </div>
        ))}</div>
      </section>

      <section className={styles.detailBandAlt} aria-labelledby="process-heading">
        <div className={styles.sectionIntro}>
          <p className={styles.kicker}>Details</p>
          <h2 className={styles.sectionTitle} id="process-heading">
            What to expect from your treatment.
          </h2>
          <p className={styles.richText}>
            The process starts with assessment, contraindication checks, and a clear aftercare plan. Results vary by concern, skin response, lifestyle, and consistency with home care.
          </p>
        </div>
        <div className={styles.treatmentTimeline}>
          {[
            `Duration: ${service.duration}`,
            `Recovery: ${service.recovery}`,
            `Sessions: ${service.sessions}`,
            `Comfort: ${service.pain}`,
          ].map((step, index) => (
            <article className={styles.timelineCard} key={step}>
              <strong>{String(index + 1).padStart(2, "0")}</strong>
              <p>{step}</p>
            </article>
          ))}
        </div>
      </section>



      {faqs.length > 0 && (
        <section className={styles.detailBand} aria-labelledby="faq-heading">
          <div className={styles.sectionIntroLeft}>
            <p className={styles.kicker}>FAQ</p>
            <h2 className={styles.sectionTitle} id="faq-heading">
              Questions patients ask in Ajmer.
            </h2>
          </div>
          <div className={styles.pricingTableStrong}>
            {faqs.map((faq) => (
              <details className={styles.pricingRowStrong} key={faq.q}>
                <summary>{faq.q}</summary>
                <p>{faq.a}</p>
              </details>
            ))}
          </div>
        </section>
      )}

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
              <strong>{serviceSeo[item.slug]?.h1 || item.name}</strong>
              <small>{item.description}</small>
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.detailCtaNew}>
        <div>
          <p className={styles.kicker}>Next step</p>
          <h2>Book a consultation in Ajmer.</h2>
          <p>
            We will review contraindications, downtime, home care, and realistic sequencing before
            recommending this treatment.
          </p>
        </div>
        <Link className={styles.navButton} href="/contact">
          Book a Consultation in Ajmer
        </Link>
      </section>
    </article>
  );
}
