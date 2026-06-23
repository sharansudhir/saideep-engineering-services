import { useLocale } from '../i18n/LocaleContext'
import './Hero.css'

const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

export default function Hero() {
  const { content } = useLocale()
  const { hero } = content

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth' })
  }

  return (
    <section id="home" className="hero" aria-labelledby="hero-heading">
      <div className="hero-overlay" aria-hidden="true" />
      <div className="hero-content">
        <p className="hero-eyebrow">{hero.eyebrow}</p>
        <h1 id="hero-heading" className="hero-title">
          {hero.title}<br />
          <span>{hero.titleHighlight}</span>
        </h1>
        <p className="hero-desc">{hero.description}</p>
        <div className="hero-btns">
          <button className="btn-primary" onClick={() => scrollTo('products')}>{hero.ctaPrimary}</button>
          <button className="btn-secondary" onClick={() => scrollTo('contact')}>{hero.ctaSecondary}</button>
        </div>
        <div className="hero-stats" aria-label="Company highlights">
          {hero.stats.map((s, i) => (
            <>
              {i > 0 && <div key={`div-${i}`} className="stat-divider" aria-hidden="true" />}
              <div key={s.value} className="stat">
                <span aria-label={s.ariaLabel}>{s.value}</span>
                <p>{s.label}</p>
              </div>
            </>
          ))}
        </div>
      </div>
    </section>
  )
}
