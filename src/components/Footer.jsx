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
            Manufacturer, exporter &amp; supplier of precision tipper body components
            and hydraulic parts since 2007.
          </p>
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
          <h4>Contact</h4>
          <p>802, Neelkanth Enclave, Plot 6 &amp; 67, Sec-2A,<br />Kopar Khairane, Navi Mumbai – 400709</p>
          <p style={{ marginTop: 10 }}>GST: 27AYYPS1105J1ZX</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Saideep Engineering Services. All rights reserved.</p>
      </div>
    </footer>
  )
}
