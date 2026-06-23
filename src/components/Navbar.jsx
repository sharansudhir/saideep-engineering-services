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
      Home: 'home', Accueil: 'home',
      About: 'about', 'À propos': 'about',
      Products: 'products', Produits: 'products',
      Contact: 'contact',
    }
    const id = idMap[label] ?? label.toLowerCase()
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth' })
    setMenuOpen(false)
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} aria-label={nav.ariaLabel}>
      <div className="nav-left">
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
          className="nav-brand"
          onClick={() => scrollTo('Home')}
          aria-label={nav.brandAriaLabel}
        >
          <span className="brand-icon" aria-hidden="true">⚙</span>
          <div>
            <div className="brand-name">Saideep Engineering</div>
            <div className="brand-tag">Services</div>
          </div>
        </button>
      </div>

      <button
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={nav.menuAriaLabel}
        aria-expanded={menuOpen}
        aria-controls="nav-menu"
      >
        <span aria-hidden="true" /><span aria-hidden="true" /><span aria-hidden="true" />
      </button>

      <ul id="nav-menu" className={`nav-links ${menuOpen ? 'open' : ''}`} role="list">
        {nav.links.map(l => (
          <li key={l}>
            <button onClick={() => scrollTo(l)}>{l}</button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
