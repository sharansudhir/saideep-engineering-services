import { useState, useEffect } from 'react'
import './Navbar.css'

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

  const links = ['Home', 'About', 'Products', 'Contact']

  const scrollTo = (id) => {
    const el = document.getElementById(id.toLowerCase())
    if (el) el.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth' })
    setMenuOpen(false)
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} aria-label="Main navigation">
      <button
        className="nav-brand"
        onClick={() => scrollTo('home')}
        aria-label="Saideep Engineering Services — go to top"
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
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
        aria-controls="nav-menu"
      >
        <span aria-hidden="true" /><span aria-hidden="true" /><span aria-hidden="true" />
      </button>

      <ul
        id="nav-menu"
        className={`nav-links ${menuOpen ? 'open' : ''}`}
        role="list"
      >
        {links.map(l => {
          const id = l === 'Home' ? 'home' : l.toLowerCase()
          return (
            <li key={l}>
              <button onClick={() => scrollTo(id)}>{l}</button>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
