import Link from "next/link";
import { areasServed } from "../lib/seo";

export default function Footer() {
  const mapUrl =
    "https://www.google.com/maps/search/?api=1&query=Infinity+Aesthetics-+Skin,+Laser+%26+Hair+Clinic&query_place_id=ChIJ2yUZNu_nuzkR3kUmvPRirXU";
  const mapEmbedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3571.8660282050882!2d74.63414207520799!3d26.46004707691985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396be7ef361925eb%3A0x75ad62f4bc2645de!2sInfinity%20Aesthetics-%20Skin%2C%20Laser%20%26%20Hair%20Clinic!5e0!3m2!1sen!2sin!4v1783759882721!5m2!1sen!2sin";

  return (
    <footer className="ia-footer" id="footer">
      <div className="ia-container">
        <div className="ia-footer-grid">
          {/* Brand + Map */}
          <div>
            <p className="ia-footer-brand">Infinity Aesthetics</p>
            <p className="ia-footer-tagline">Where science meets skin.</p>
            <div className="ia-footer-socials">
              <a
                href="https://www.instagram.com/infinityaestheticsajmer"
                target="_blank"
                rel="noopener noreferrer"
                className="ia-footer-social"
                aria-label="Instagram"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ia-footer-social"
                aria-label="Google Business"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </a>
              <a
                href="mailto:infinityaestheticsajmer@gmail.com"
                className="ia-footer-social"
                aria-label="Email"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </a>
            </div>

            <div
              style={{
                marginTop: "24px",
                width: "100%",
                maxWidth: "336px",
                height: "168px",
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <iframe
                title="Infinity Aesthetics Ajmer map"
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Nav columns */}
          <div className="ia-footer-navs-wrapper">
            {/* Quick Links */}
            <div>
              <p className="ia-footer-col-title">Quick Links</p>
              <div className="ia-footer-links">
                <Link href="/">Home</Link>
                <Link href="/services">Services</Link>
                <Link href="/about">About</Link>
                <Link href="/results">Results</Link>
                <Link href="/blog">Blog</Link>
                <Link href="/contact">Contact</Link>
              </div>
            </div>

            {/* Treatments — all 16, split in two sub-columns */}
            <div>
              <p className="ia-footer-col-title">Treatments</p>
              <div className="ia-footer-treatments-grid">
                <div className="ia-footer-links">
                  <Link href="/services/hydra-facial">Hydra Facial</Link>
                  <Link href="/services/photo-facial">Photo Facial</Link>
                  <Link href="/services/oxygeneo-treatment">Oxygeneo Treatment</Link>
                  <Link href="/services/chemical-peel">Chemical Peel</Link>
                  <Link href="/services/laser-hair-removal">Laser Hair Removal</Link>
                  <Link href="/services/carbon-laser">Carbon Laser</Link>
                  <Link href="/services/ipl-treatment">IPL Treatment</Link>
                  <Link href="/services/hair-prp">Hair PRP</Link>
                </div>
                <div className="ia-footer-links">
                  <Link href="/services/hair-prp-gfc">Hair PRP (GFC)</Link>
                  <Link href="/services/face-prp">Face PRP</Link>
                  <Link href="/services/glutathione-iv">Glutathione IV</Link>
                  <Link href="/services/hifu">HIFU</Link>
                  <Link href="/services/scar-treatment">Scar Treatment</Link>
                  <Link href="/services/acne-treatment">Acne Treatment</Link>
                  <Link href="/services/pigmentation-treatment">Pigmentation Treatment</Link>
                  <Link href="/services/tattoo-removal">Tattoo Removal</Link>
                </div>
              </div>
            </div>

            {/* Areas We Serve */}
            <div>
              <p className="ia-footer-col-title">Areas We Serve</p>
              <div className="ia-footer-links">
                {areasServed.slice(0, 8).map((area) => (
                  <Link href="/contact#areas-we-serve" key={area}>
                    {area}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="ia-footer-col-title">Contact</p>
            <div className="ia-footer-ci">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <a href={mapUrl} target="_blank" rel="noopener noreferrer">
                48-49, Ajmer Tower, Kutchery Road,
                <br />
                Ajmer, Rajasthan 305001
              </a>
            </div>
            <div className="ia-footer-ci" style={{ alignItems: "flex-start" }}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                style={{ marginTop: "4px" }}
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <div>
                <a href="tel:+917788991101">77889 91101</a>
                <br />
                <a href="tel:+919460991160">94609 91160</a>
              </div>
            </div>
            <div className="ia-footer-ci">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              Open - Closes 8 PM
            </div>
          </div>
        </div>

        <div className="ia-footer-bottom">
          <span>
            Copyright {new Date().getFullYear()} Infinity Aesthetics - Ajmer -{" "}
            <a
              href="https://infinityaestheticsajmer.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              infinityaestheticsajmer.com
            </a>
          </span>
          <Link href="#">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
