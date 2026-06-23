import { useLocale } from '../i18n/LocaleContext'
import './Footer.css'

const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

export default function Footer() {
  const { content } = useLocale()
  const { footer, nav, company } = content

  const scrollTo = (label) => {
    const idMap = {
      Home: 'home', Accueil: 'home',
      About: 'about', 'À propos': 'about',
      Products: 'products', Produits: 'products',
      Contact: 'contact',
    }
    const id = idMap[label] ?? label.toLowerCase()
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <div className="footer-logo" aria-label={company.name}>
            <span aria-hidden="true">⚙</span> {company.name}
          </div>
          <p>{footer.description}</p>
          <ul className="footer-badges" aria-label="Credentials">
            {footer.badges.map(badge => (
              <li key={badge}><span aria-hidden="true">✔</span> {badge}</li>
            ))}
          </ul>
        </div>

        <nav className="footer-links" aria-label="Footer navigation">
          <h4 id="footer-nav-heading">{footer.navHeading}</h4>
          <ul aria-labelledby="footer-nav-heading">
            {nav.links.map(label => (
              <li key={label}>
                <button onClick={() => scrollTo(label)}>{label}</button>
              </li>
            ))}
          </ul>
        </nav>

        <address className="footer-contact">
          <h4>{footer.contactHeading}</h4>
          {footer.contactItems.map((item, i) => (
            <div className="footer-contact-item" key={i}>
              <span aria-hidden="true">{item.icon}</span>
              <p>{item.value.split('\n').map((line, j, arr) => (
                <span key={j}>{line}{j < arr.length - 1 && <br />}</span>
              ))}</p>
            </div>
          ))}
        </address>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} {footer.copyright}</p>
        <p className="footer-bottom-sub">{footer.sub}</p>
      </div>
    </footer>
  )
}
