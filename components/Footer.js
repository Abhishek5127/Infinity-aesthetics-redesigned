import Link from "next/link";

export default function Footer() {
  return (
    <footer className="ia-footer" id="footer">
      <div className="ia-container">
        <div className="ia-footer-grid">
          {/* Col 1: Brand */}
          <div>
            <p className="ia-footer-brand">Infinity Aesthetics</p>
            <p className="ia-footer-tagline">Where science meets skin.</p>
            <div className="ia-footer-socials">
              <a href="https://www.instagram.com/infinityaestheticsajmer" target="_blank" rel="noopener noreferrer" className="ia-footer-social" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="https://maps.app.goo.gl/uccX19z8wcXrQ2HF8" target="_blank" rel="noopener noreferrer" className="ia-footer-social" aria-label="Google Business">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </a>
            </div>
            
            <div style={{ marginTop: '24px', width: '100%', maxWidth: '336px', height: '168px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3571.1837568571866!2d74.63660507629574!3d26.482029976906232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396be71e069818ab%3A0xc6226ec4f9b8c2fc!2sInfinity%20Aesthetics%20Ajmer!5e0!3m2!1sen!2sin!4v1709669527014!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className="ia-footer-navs-wrapper">
            {/* Col 2: Quick Links */}
            <div>
              <p className="ia-footer-col-title">Quick Links</p>
              <div className="ia-footer-links">
                <Link href="/">Home</Link>
                <Link href="/services">Services</Link>
                <Link href="/about">About</Link>
                <Link href="/results">Results</Link>
                <Link href="/fees">Fees</Link>
                <Link href="/contact">Contact</Link>
              </div>
            </div>

            {/* Col 3: Treatments */}
            <div>
              <p className="ia-footer-col-title">Treatments</p>
              <div className="ia-footer-links">
                <Link href="/services">Clinical Facial</Link>
                <Link href="/services">Chemical Peel</Link>
                <Link href="/services">Laser Therapy</Link>
                <Link href="/services">Hair Treatment</Link>
                <Link href="/services">Acne Program</Link>
                <Link href="/services">PRP Therapy</Link>
              </div>
            </div>
          </div>

          {/* Col 4: Contact */}
          <div>
            <p className="ia-footer-col-title">Contact</p>
            <div className="ia-footer-ci">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <a href="https://maps.app.goo.gl/uccX19z8wcXrQ2HF8" target="_blank" rel="noopener noreferrer">
                Ajmer Tower, Kutchery Road,<br/>Ajmer, Rajasthan 305001
              </a>
            </div>
            <div className="ia-footer-ci">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <a href="tel:+919460991160">094609 91160</a>
            </div>
            <div className="ia-footer-ci">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              Open · Closes 8 PM
            </div>
          </div>
        </div>

        <div className="ia-footer-bottom">
          <span>© {new Date().getFullYear()} Infinity Aesthetics · Ajmer · <a href="https://infinityaestheticsajmer.in" target="_blank" rel="noopener noreferrer">infinityaestheticsajmer.in</a></span>
          <Link href="#">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
