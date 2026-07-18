import Link from "next/link";
import Image from "next/image";
import Hero from "../components/Hero";
import ContactForm from "../components/ContactForm";
import GSAPAnimations from "../components/GSAPAnimations";
import ThreeHeroCanvas from "../components/ThreeHeroCanvas";
import JsonLd from "../components/JsonLd";
import { clinicServices } from "../lib/services";
import { clinicSchema, createMetadata } from "../lib/seo";
import BeforeAfterSlider from "../components/BeforeAfterSlider";
import treatment1Before from "./assets/results/HydrafacialBefore.png";
import treatment1After from "./assets/results/HydrafacialAfter.png";
import treatment2Before from "./assets/results/HIFUbefore.png";
import treatment2After from "./assets/results/HIFUafter.png";
import treatment3Before from "./assets/results/LaserTattooRemovalBefore.jpeg";
import treatment3After from "./assets/results/LaserTattooRemovalAfter.png";

export const metadata = createMetadata({
  title: "Skin Clinic Ajmer | Infinity Aesthetics",
  description:
    "Infinity Aesthetics is a skin clinic in Ajmer for acne care, PRP hair treatment, peels, facials, pigmentation, and laser consultation.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <JsonLd data={clinicSchema("/")} />
      <GSAPAnimations />
      <Hero />

      {/* TRUST BAR */}
      <section className="ia-trust-bar">
        <div className="">
          <p className="ia-trust-headline">Flawless Beauty, Fearless Confidence. <strong>A consultation-led skin clinic in Ajmer for skin, laser, and hair care.</strong></p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="ia-services ia-section-pad" id="services">
        <div className="ia-container">
          <div className="ia-services-header ia-reveal">
            <span className="ia-eyebrow">Our Treatments</span>
            <h2 className="ia-section-title">Precision Care, Beautiful Results</h2>
            <p className="ia-section-text">
              Explore our curated selection of advanced dermatological and aesthetic procedures.
            </p>
          </div>

          {/* DESKTOP GRID */}
          <div className="ia-services-grid ia-services-grid-desktop ia-stagger">
            {clinicServices.map((service, index) => (
              <Link href={`/services#${service.slug}`} className={`ia-service-card ia-svc-${index + 1} ia-reveal`} key={service.slug}>
                <div className="ia-placeholder">
                  <Image src={service.image} alt={service.alt} fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
                <div className="ia-service-name">{service.name}</div>
                <div className="ia-service-overlay">
                  <h3>{service.name}</h3>
                  <p>{service.description}</p>
                  <div className="ia-svc-meta">
                    <span>{service.duration}</span>
                    <span>{service.recovery}</span>
                  </div>
                  <span className="ia-svc-link">Learn More →</span>
                </div>
              </Link>
            ))}
          </div>

          {/* MOBILE GRID */}
          <div className="ia-services-grid-mobile ia-stagger">
            {clinicServices.slice(0, 4).map((service, index) => (
              <Link href={`/services#${service.slug}`} className={`ia-product-card ia-reveal`} key={service.slug}>
                <div className="ia-product-card-img-wrap">
                  <Image src={service.image} alt={service.alt} fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 75vw, 25vw" />
                </div>
                <div className="ia-product-card-content">
                  <div className="ia-product-card-category">{service.category}</div>
                  <h3 className="ia-product-card-title">{service.name}</h3>
                  <div className="ia-btn ia-product-card-btn">Consult</div>
                </div>
              </Link>
            ))}
            <Link href="/services" className="ia-product-card ia-see-more-card ia-reveal">
              <div className="ia-see-more-content">
                See more &gt;
              </div>
            </Link>
          </div>

          <div className="ia-reveal ia-mobile-only-btn" style={{ textAlign: "center", marginTop: "48px" }}>
            <Link href="/services" className="ia-btn ia-btn-ghost">
              Check all treatments →
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT - SHOWCASE */}
      <section className="ia-showcase ia-section-pad" id="about">
        <svg className="ia-showcase-ribbon ia-ribbon-left" viewBox="0 0 220 720" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" aria-hidden="true">
          <path d="M164 4C76 104 222 169 108 278C-12 394 210 465 70 596C31 632 23 676 54 716" stroke="currentColor" strokeWidth="34" strokeLinecap="round" />
        </svg>
        <svg className="ia-showcase-ribbon ia-ribbon-right" viewBox="0 0 220 720" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" aria-hidden="true">
          <path d="M82 4C170 107 15 175 122 286C238 407 6 459 141 594C181 634 184 678 153 716" stroke="currentColor" strokeWidth="34" strokeLinecap="round" />
        </svg>

        <div className="ia-container">
          <div className="ia-showcase-header">
            <div className="ia-showcase-brand">
              <span>Infinity</span>
              <strong>Aesthetics</strong>
            </div>
            <h2 className="ia-showcase-title">
              3 Must-Try<br />Treatments at
              <span className="ia-showcase-title-accent">Infinity Aesthetics</span>
            </h2>
          </div>

          <div className="ia-showcase-cards">
            <div className="ia-showcase-card ia-showcase-card--laser">
              <div className="ia-showcase-card-image">
                <Image src="/laser-treatment.png" alt="Laser hair removal session at Infinity Aesthetics clinic Ajmer" width={520} height={360} />
              </div>
              <div className="ia-showcase-card-body">
                <h3 className="ia-showcase-card-title">Laser Hair Removal</h3>
                <p className="ia-showcase-card-desc">Advanced medical lasers targeting hair follicles to deliver permanent hair reduction safely</p>
              </div>
            </div>

            <div className="ia-showcase-card ia-showcase-card--reverse ia-showcase-card--facial">
              <div className="ia-showcase-card-image">
                <Image src="/facial-treatment.png" alt="Woman receiving a luxurious HydraFacial at Infinity Aesthetics Ajmer" width={520} height={360} />
              </div>
              <div className="ia-showcase-card-body">
                <h3 className="ia-showcase-card-title">HydraFacial &amp; Peels</h3>
                <p className="ia-showcase-card-desc">Medical-grade facials, Oxygeneo, and customized peels for deep hydration and instant glow</p>
              </div>
            </div>

            <div className="ia-showcase-card ia-showcase-card--hair">
              <div className="ia-showcase-card-image">
                <Image src="/hairPRP-treatment.png" alt="Woman with thick healthy hair after GFC hair treatment at Infinity Aesthetics" width={520} height={360} />
              </div>
              <div className="ia-showcase-card-body">
                <h3 className="ia-showcase-card-title">PRP &amp; GFC Hair Therapies</h3>
                <p className="ia-showcase-card-desc">Natural growth factors and concentrated GFC serums to stimulate follicles and restore scalp volume</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VISIBLE TRANSFORMATIONS — Results */}
      <section className="ia-results-preview ia-section-pad" id="results">
        <div className="ia-results-preview-bg" aria-hidden="true">
          <div className="ia-results-preview-glow ia-results-preview-glow--left" />
          <div className="ia-results-preview-glow ia-results-preview-glow--right" />
        </div>

        <div className="ia-container">
          {/* Header */}
          <div className="ia-results-preview-header ia-reveal">
            <div className="ia-results-preview-label">
              <span className="ia-results-preview-dot" />
              Real Patient Outcomes
            </div>
            <h2 className="ia-results-preview-title">
              Visible&nbsp;
              <em className="ia-results-preview-title-em">Transformations</em>
            </h2>
            <p className="ia-results-preview-sub">
              Drag the slider to reveal before & after. Every result is real — achieved through a personalised, consultation-led plan.
            </p>
          </div>

          {/* Stats strip */}
          <div className="ia-results-preview-stats ia-reveal">
            <div className="ia-results-preview-stat">
              <strong>500+</strong>
              <span>Treatments completed</span>
            </div>
            <div className="ia-results-preview-stat-divider" aria-hidden="true" />
            <div className="ia-results-preview-stat">
              <strong>4.9★</strong>
              <span>Average patient rating</span>
            </div>
            <div className="ia-results-preview-stat-divider" aria-hidden="true" />
            <div className="ia-results-preview-stat">
              <strong>100%</strong>
              <span>Consultation-led care</span>
            </div>
          </div>

          {/* Sliders */}
          <div className="ia-results-preview-sliders ia-stagger">
            <div className="ia-results-preview-slider-wrap ia-reveal">
              <div className="ia-results-preview-slider-badge">Skin Rejuvenation</div>
              <BeforeAfterSlider
                beforeImage={treatment1Before}
                afterImage={treatment1After}
              />
            </div>
            {/* Slider 2 — visible on tablet/desktop, hidden on mobile */}
            <div className="ia-results-preview-slider-wrap ia-reveal ia-results-slider--desktop-only">
              <div className="ia-results-preview-slider-badge">Skin Tightening &amp; Brightening</div>
              <BeforeAfterSlider
                beforeImage={treatment2Before}
                afterImage={treatment2After}
              />
            </div>
            {/* Slider 3 — always visible on desktop, swaps in on mobile */}
            <div className="ia-results-preview-slider-wrap ia-reveal">
              <div className="ia-results-preview-slider-badge">Tattoo Removal</div>
              <BeforeAfterSlider
                beforeImage={treatment3Before}
                afterImage={treatment3After}
              />
            </div>
          </div>

          {/* CTA */}
          <div className="ia-results-preview-cta ia-reveal">
            <p className="ia-results-preview-disclaimer">
              Individual results vary based on skin type, concern severity, and aftercare.
            </p>
            <Link href="/results" className="ia-btn ia-btn-ghost ia-results-preview-btn">
              View All Results →
            </Link>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="ia-social-proof ia-section-pad" id="reviews">
        <div className="ia-container">
          <div className="ia-sp-header ia-reveal">
            <div className="ia-eyebrow">Patient Reviews</div>
            <h2 className="ia-section-title">What Our Patients Say</h2>
            <p className="ia-section-text">4.9★ from 113 verified Google reviews</p>
          </div>

          <div className="ia-testimonial-grid ia-stagger">
            <div className="ia-testimonial-card ia-reveal">
              <div className="ia-stars">
                <svg viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                <svg viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                <svg viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                <svg viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                <svg viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
              </div>
              <p className="ia-testi-quote">&quot;Really effective result very good treatment I got even receptionist mam treatment also very polite. Recommend to other best experience you should absolutely visit here. Worth of money spend.&quot;</p>
              <p className="ia-testi-author">Monika Nagrani</p>
              <p className="ia-testi-treatment">Clinical Treatment</p>
              <a href="https://maps.app.goo.gl/Zcn4ZYNg5WPZ41LH9" target="_blank" rel="noopener noreferrer">
                <div className="ia-testi-verified">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                  Verified Google Review
                </div>
              </a>
            </div>

            <div className="ia-testimonial-card ia-reveal">
              <div className="ia-stars">
                <svg viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                <svg viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                <svg viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                <svg viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                <svg viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
              </div>
              <p className="ia-testi-quote">&quot;Getting micro blading for eyebrows, having amazing result, totally professional, hygiene and thank you for great service&quot;</p>
              <p className="ia-testi-author">Divya Sahu</p>
              <p className="ia-testi-treatment">Eyebrow Microblading</p>
              <a href="https://maps.app.goo.gl/un9UrGZjudWCMEfh9" target="_blank" rel="noopener noreferrer">
                <div className="ia-testi-verified">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                  Verified Google Review
                </div>
              </a>
            </div>

            <div className="ia-testimonial-card ia-reveal">
              <div className="ia-stars">
                <svg viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                <svg viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                <svg viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                <svg viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                <svg viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
              </div>
              <p className="ia-testi-quote">&quot;Excellent services in very reasonable price, Abhay sir have such a deep knowledge about laser and skin.
                My laser hair removal of hands have great results, and I like the services and behaviour of staff.
                Thank you so much for the lovely services♥️♥️🎊🎉&quot;</p>
              <p className="ia-testi-author">Ashok Kumar</p>
              <p className="ia-testi-treatment">Chemical Peel Series</p>
              <a href="https://maps.app.goo.gl/zGGHiw4TzSf2hX5V9">
                <div className="ia-testi-verified">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                  Verified Google Review
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* CONTACT */}
      <section className="ia-contact ia-section-pad" id="contact">
        <div className="ia-container">
          <div className="ia-contact-header ia-reveal">
            <div className="ia-eyebrow">Start Your Journey</div>
            <h2 className="ia-section-title">Book your consultation.</h2>
            <p className="ia-section-text">
              Tell us what you want to change, and we&apos;ll recommend a treatment path that respects your skin and your budget.
            </p>
          </div>

          <div className="ia-contact-grid">
            <div className="ia-contact-info ia-reveal">
              <h3 className="ia-clinic-name">Infinity Aesthetics</h3>
              <p className="ia-clinic-hindi">Skin-Hair-Laser</p>

              <div className="ia-contact-details">
                <div className="ia-contact-item">
                  <div className="ia-contact-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                  </div>
                  <div>
                    <div className="ia-ci-label">Call to Book</div>
                    <div className="ia-ci-value ia-phone-value">
                      <a href="tel:+917788991101">77889 91101</a>
                      <br />
                      <a href="tel:+919460991160">94609 91160</a>
                    </div>
                  </div>
                </div>

                <div className="ia-contact-item">
                  <div className="ia-contact-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                  </div>
                  <div>
                    <div className="ia-ci-label">Hours</div>
                    <div className="ia-ci-value">
                      <div className="ia-hours-badge">
                        <div className="ia-hours-dot" /> Open · Closes 8 PM
                      </div>
                    </div>
                  </div>
                </div>

                <div className="ia-contact-item">
                  <div className="ia-contact-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                  </div>
                  <div>
                    <div className="ia-ci-label">Location</div>
                    <div className="ia-ci-value">
                      48-49, Ajmer Tower, Kutchery Road<br />Ajmer, Rajasthan 305001<br />
                      <a href="https://www.google.com/maps/search/?api=1&query=Infinity+Aesthetics-+Skin,+Laser+%26+Hair+Clinic&query_place_id=ChIJ2yUZNu_nuzkR3kUmvPRirXU" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-gold)', fontSize: '14px', display: 'inline-block', marginTop: '6px' }}>Get Directions →</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="ia-lgbtq-badge ia-reveal">
                LGBTQ+ friendly clinic
              </div>
              <div className="ia-reveal ia-desktop-only" style={{ marginTop: '32px' }}>
                <div style={{ width: '300px', height: '300px', position: 'relative', overflow: 'hidden', margin: '0 auto' }}>
                  <ThreeHeroCanvas
                    interactive={true}
                    particleCount={1500}
                    speed={1.5}
                  />
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
