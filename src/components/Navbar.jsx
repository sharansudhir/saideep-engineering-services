import { useState, useEffect } from 'react'
import { useLocale, locales } from '../i18n/LocaleContext'
import './Navbar.css'

const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

export default function Navbar() {
  const { content, locale, setLocale } = useLocale()
  const { nav } = content

  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (label) => {
    const idMap = {
      // English
      Home: 'home', About: 'about', Products: 'products', Contact: 'contact',
      // French
      Accueil: 'home', 'À propos': 'about', Produits: 'products', Contacts: 'contact',
      // German
      Startseite: 'home', 'Über uns': 'about', Produkte: 'products', Kontakt: 'contact',
      // Italian
      'Chi Siamo': 'about', Prodotti: 'products', Contatti: 'contact',
      // Spanish
      Inicio: 'home', Nosotros: 'about', Productos: 'products', Contacto: 'contact',
      // Hindi
      होम: 'home', 'हमारे बारे में': 'about', उत्पाद: 'products', संपर्क: 'contact',
    }
    const id = idMap[label] ?? label.toLowerCase()
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth' })
    setMenuOpen(false)
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} aria-label={nav.ariaLabel}>
      <button
        className="nav-brand"
        onClick={() => scrollTo(nav.links[0])}
        aria-label={nav.brandAriaLabel}
      >
        <span className="brand-icon" aria-hidden="true">⚙</span>
        <div>
          <div className="brand-name">Saideep Engineering</div>
          <div className="brand-tag">Services</div>
        </div>
      </button>

      <div className="nav-right">
        <ul id="nav-menu" className={`nav-links ${menuOpen ? 'open' : ''}`} role="list">
          {nav.links.map(l => (
            <li key={l}>
              <button onClick={() => scrollTo(l)}>{l}</button>
            </li>
          ))}
        </ul>

        <select
          className="lang-select"
          value={locale}
          onChange={e => setLocale(e.target.value)}
          aria-label="Select language"
        >
          {Object.entries(locales).map(([code, { label }]) => (
            <option key={code} value={code}>{label}</option>
          ))}
        </select>

        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={nav.menuAriaLabel}
          aria-expanded={menuOpen}
          aria-controls="nav-menu"
        >
          <span aria-hidden="true" /><span aria-hidden="true" /><span aria-hidden="true" />
        </button>
      </div>
    </nav>
  )
}
