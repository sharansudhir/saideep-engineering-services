import './Footer.css'

export default function Footer() {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <div className="footer-logo">
            <span>⚙</span> Saideep Engineering Services
          </div>
          <p>
            With over 18 years of industry experience, Saideep Engineering Services
            delivers precision-engineered tipper body components, hydraulic parts, and
            sub-assemblies to commercial vehicle manufacturers across India. Quality
            and reliability — built into every part we make.
          </p>
          <div className="footer-badges">
            <span>✔ ISO Compliant</span>
            <span>✔ GST Registered</span>
            <span>✔ Export Ready</span>
          </div>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            {['home', 'about', 'products', 'contact'].map(id => (
              <li key={id}>
                <button onClick={() => scrollTo(id)}>{id.charAt(0).toUpperCase() + id.slice(1)}</button>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Get In Touch</h4>
          <div className="footer-contact-item">
            <span>📍</span>
            <p>802, Neelkanth Enclave, Plot 6 &amp; 67,<br />Sec-2A, Kopar Khairane,<br />Navi Mumbai – 400709, Maharashtra</p>
          </div>
          <div className="footer-contact-item">
            <span>👤</span>
            <p>Mr. Sudhir Kumar, Proprietor</p>
          </div>
          <div className="footer-contact-item">
            <span>🏷️</span>
            <p>GSTIN: 27AYYPS1105J1ZX</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Saideep Engineering Services. All rights reserved.</p>
        <p className="footer-bottom-sub">Navi Mumbai, Maharashtra, India &nbsp;·&nbsp; Est. 2007</p>
      </div>
    </footer>
  )
}
