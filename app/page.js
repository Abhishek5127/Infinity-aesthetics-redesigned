import Link from "next/link";
import Image from "next/image";
import Hero from "../components/Hero";
import ContactForm from "../components/ContactForm";
import GSAPAnimations from "../components/GSAPAnimations";
import { clinicServices } from "../lib/services";

export default function Home() {
  return (
    <>
      <GSAPAnimations />
      <Hero />

      {/* TRUST BAR */}
      <section className="ia-trust-bar">
        <div className="ia-container">
          <p className="ia-trust-headline">Flawless Beauty, Fearless Confidence. <strong>Ajmer&apos;s most trusted medical aesthetics team.</strong></p>
          <div className="ia-trust-row ia-stagger">
            <div className="ia-trust-item ia-reveal">
              <div className="ia-trust-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              IADVL Certified
            </div>
            <div className="ia-trust-item ia-reveal">
              <div className="ia-trust-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>
              </div>
              Laser Certified
            </div>
            <div className="ia-trust-item ia-reveal">
              <div className="ia-trust-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
              </div>
              LGBTQ+ Inclusive
            </div>
            <div className="ia-trust-item ia-reveal">
              <div className="ia-trust-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              </div>
              ₹85 Consultation
            </div>
          </div>
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

          <div className="ia-services-grid ia-stagger">
            {clinicServices.map((service, index) => (
              <Link href={`/services#${service.slug}`} className={`ia-service-card ia-svc-${index + 1} ia-reveal`} key={service.slug}>
                <div className="ia-placeholder" />
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
        </div>
      </section>

      {/* ABOUT - SHOWCASE */}
      <section className="ia-showcase ia-section-pad" id="about">
        <svg className="ia-showcase-ribbon ia-ribbon-left" viewBox="0 0 220 720" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" aria-hidden="true">
          <path d="M164 4C76 104 222 169 108 278C-12 394 210 465 70 596C31 632 23 676 54 716" stroke="currentColor" strokeWidth="34" strokeLinecap="round"/>
        </svg>
        <svg className="ia-showcase-ribbon ia-ribbon-right" viewBox="0 0 220 720" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" aria-hidden="true">
          <path d="M82 4C170 107 15 175 122 286C238 407 6 459 141 594C181 634 184 678 153 716" stroke="currentColor" strokeWidth="34" strokeLinecap="round"/>
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
                <Image src="/laser-treatment.png" alt="Woman receiving gentle laser skin treatment at Infinity Aesthetics clinic" width={520} height={360}/>
              </div>
              <div className="ia-showcase-card-body">
                <div className="ia-showcase-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
                </div>
                <h3 className="ia-showcase-card-title">Laser Skin Therapy</h3>
                <p className="ia-showcase-card-desc">Precision light for flawless, glowing skin without downtime</p>
              </div>
            </div>

            <div className="ia-showcase-card ia-showcase-card--reverse ia-showcase-card--facial">
              <div className="ia-showcase-card-image">
                <Image src="/facial-treatment.png" alt="Woman receiving a luxurious clinical facial at Infinity Aesthetics" width={520} height={360} />
              </div>
              <div className="ia-showcase-card-body">
                <div className="ia-showcase-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                </div>
                <h3 className="ia-showcase-card-title">Advanced Facials &amp; Peels</h3>
                <p className="ia-showcase-card-desc">Clinical-grade serums meet spa-level comfort for instant radiance</p>
              </div>
            </div>

            <div className="ia-showcase-card ia-showcase-card--hair">
              <div className="ia-showcase-card-image">
                <Image src="/hair-treatment.png" alt="Woman with thick healthy hair after PRP treatment at Infinity Aesthetics" width={520} height={360} />
              </div>
              <div className="ia-showcase-card-body">
                <div className="ia-showcase-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                </div>
                <h3 className="ia-showcase-card-title">PRP Hair Revival</h3>
                <p className="ia-showcase-card-desc">Your body&apos;s own growth factors, amplified for thicker, healthier hair</p>
              </div>
            </div>
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
                <svg viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                <svg viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                <svg viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                <svg viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                <svg viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              </div>
              <p className="ia-testi-quote">&quot;I struggled with acne for years. The team at Infinity Aesthetics created a treatment plan that finally worked. My skin has never been this clear — I feel confident again.&quot;</p>
              <p className="ia-testi-author">Priya M.</p>
              <p className="ia-testi-treatment">Acne Clarity Program</p>
              <div className="ia-testi-verified">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                Verified Google Review
              </div>
            </div>

            <div className="ia-testimonial-card ia-reveal">
              <div className="ia-stars">
                <svg viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                <svg viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                <svg viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                <svg viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                <svg viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              </div>
              <p className="ia-testi-quote">&quot;The laser treatment for pigmentation was gentle yet effective. The staff explains everything clearly and the clinic feels premium yet welcoming. Highly recommend to anyone in Ajmer.&quot;</p>
              <p className="ia-testi-author">Rahul S.</p>
              <p className="ia-testi-treatment">Laser Glow Therapy</p>
              <div className="ia-testi-verified">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                Verified Google Review
              </div>
            </div>

            <div className="ia-testimonial-card ia-reveal">
              <div className="ia-stars">
                <svg viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                <svg viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                <svg viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                <svg viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                <svg viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              </div>
              <p className="ia-testi-quote">&quot;Best skin clinic in Ajmer! The consultation was thorough and the chemical peel results were visible within a week. The ₹85 consultation fee is amazing value.&quot;</p>
              <p className="ia-testi-author">Ananya K.</p>
              <p className="ia-testi-treatment">Chemical Peel Series</p>
              <div className="ia-testi-verified">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                Verified Google Review
              </div>
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
              <p className="ia-clinic-hindi">इनफिनिटी एस्थेटिक्स- स्किन, लेजर & हेयर क्लिनिक</p>
              
              <div className="ia-contact-details">
                <div className="ia-contact-item">
                  <div className="ia-contact-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  </div>
                  <div>
                    <div className="ia-ci-label">Call to Book</div>
                    <div className="ia-ci-value ia-phone-value"><a href="tel:+919460991160">094609 91160</a></div>
                  </div>
                </div>

                <div className="ia-contact-item">
                  <div className="ia-contact-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
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
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  </div>
                  <div>
                    <div className="ia-ci-label">Location</div>
                    <div className="ia-ci-value">
                      Ajmer Tower, Kutchery Road<br/>Ajmer, Rajasthan 305001<br/>
                      <a href="https://maps.google.com/?q=Infinity+Aesthetics+Ajmer" target="_blank" rel="noopener noreferrer" style={{color: 'var(--accent-gold)', fontSize: '14px', display: 'inline-block', marginTop: '6px'}}>Get Directions →</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="ia-lgbtq-badge ia-reveal">
                LGBTQ+ friendly clinic
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
