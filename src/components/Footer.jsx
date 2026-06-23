import './Footer.css'

const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

export default function Footer() {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <div className="footer-logo" aria-label="Saideep Engineering Services">
            <span aria-hidden="true">⚙</span> Saideep Engineering Services
          </div>
          <p>
            With over 18 years of industry experience, Saideep Engineering Services
            delivers precision-engineered tipper body components, hydraulic parts, and
            sub-assemblies to commercial vehicle manufacturers across India. Quality
            and reliability — built into every part we make.
          </p>
          <ul className="footer-badges" aria-label="Credentials">
            <li><span aria-hidden="true">✔</span> ISO Compliant</li>
            <li><span aria-hidden="true">✔</span> GST Registered</li>
            <li><span aria-hidden="true">✔</span> Export Ready</li>
          </ul>
        </div>

        <nav className="footer-links" aria-label="Footer navigation">
          <h4 id="footer-nav-heading">Quick Links</h4>
          <ul aria-labelledby="footer-nav-heading">
            {['home', 'about', 'products', 'contact'].map(id => (
              <li key={id}>
                <button onClick={() => scrollTo(id)}>{id.charAt(0).toUpperCase() + id.slice(1)}</button>
              </li>
            ))}
          </ul>
        </nav>

        <address className="footer-contact">
          <h4>Get In Touch</h4>
          <div className="footer-contact-item">
            <span aria-hidden="true">📍</span>
            <p>802, Neelkanth Enclave, Plot 6 &amp; 67,<br />Sec-2A, Kopar Khairane,<br />Navi Mumbai – 400709, Maharashtra</p>
          </div>
          <div className="footer-contact-item">
            <span aria-hidden="true">👤</span>
            <p>Mr. Sudhir Kumar, Proprietor</p>
          </div>
          <div className="footer-contact-item">
            <span aria-hidden="true">🏷️</span>
            <p>GSTIN: 27AYYPS1105J1ZX</p>
          </div>
        </address>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Saideep Engineering Services. All rights reserved.</p>
        <p className="footer-bottom-sub">Navi Mumbai, Maharashtra, India <span aria-hidden="true">&nbsp;·&nbsp;</span> Est. 2007</p>
      </div>
    </footer>
  )
}
