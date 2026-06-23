import { useState, useEffect } from 'react'
import content from '../content/en-IN.json'
import './Navbar.css'

const { nav } = content

const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id.toLowerCase())
    if (el) el.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth' })
    setMenuOpen(false)
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} aria-label={nav.ariaLabel}>
      <button
        className="nav-brand"
        onClick={() => scrollTo('home')}
        aria-label={nav.brandAriaLabel}
      >
        <span className="brand-icon" aria-hidden="true">⚙</span>
        <div>
          <div className="brand-name">Saideep Engineering</div>
          <div className="brand-tag">Services</div>
        </div>
      </button>

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
            <button onClick={() => scrollTo(l === 'Home' ? 'home' : l.toLowerCase())}>{l}</button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
