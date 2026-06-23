import './Hero.css'

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="hero">
      <div className="hero-overlay" />
      <div className="hero-content">
        <p className="hero-eyebrow">Est. 2007 · Navi Mumbai, India</p>
        <h1 className="hero-title">
          Built Tough.<br />
          <span>Built to Last.</span>
        </h1>
        <p className="hero-desc">
          For over 18 years, India's commercial vehicle manufacturers have relied on Saideep
          Engineering for tipper body components, hydraulic parts, and sub-assemblies that
          hold up under real-world punishment — delivered on time, every time.
        </p>
        <div className="hero-btns">
          <button className="btn-primary" onClick={() => scrollTo('products')}>Our Products</button>
          <button className="btn-secondary" onClick={() => scrollTo('contact')}>Get a Quote</button>
        </div>
        <div className="hero-stats">
          <div className="stat"><span>18+</span><p>Years of Experience</p></div>
          <div className="stat-divider" />
          <div className="stat"><span>2007</span><p>Year Established</p></div>
          <div className="stat-divider" />
          <div className="stat"><span>4★</span><p>TradeIndia Rating</p></div>
        </div>
      </div>
    </section>
  )
}
