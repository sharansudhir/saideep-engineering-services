import './About.css'

const highlights = [
  { icon: '🏭', title: 'Manufacturer', desc: 'In-house manufacturing of precision tipper body components and assemblies.' },
  { icon: '🚢', title: 'Exporter', desc: 'Exporting quality engineered parts to markets beyond India.' },
  { icon: '🔩', title: 'Supplier', desc: 'Reliable supply chain partner for commercial vehicle OEMs.' },
  { icon: '✅', title: 'GST Registered', desc: 'GST No: 27AYYPS1105J1ZX — fully compliant business.' },
]

export default function About() {
  return (
    <section id="about" className="about">
      <h2 className="section-title">About Us</h2>
      <span className="underline" />
      <p className="section-subtitle">
        Over 18 years of engineering excellence in Navi Mumbai
      </p>

      <div className="about-container">
        <div className="about-text">
          <h3>Who We Are</h3>
          <p>
            Founded in <strong>2007</strong> by <strong>Mr. Sudhir Kumar</strong>, Saideep Engineering Services
            is a Navi Mumbai-based firm specializing in the manufacture and export of high-quality
            components, sub-assemblies, and assemblies for tipper bodies used across commercial
            vehicle manufacturers in India.
          </p>
          <p>
            With nearly two decades of hands-on experience, we have built a reputation for
            precision, reliability, and timely delivery. Our products meet the rigorous demands
            of India's commercial transportation industry.
          </p>
          <div className="about-detail">
            <div><span>📍</span> 802, Neelkanth Enclave, Plot 6 &amp; 67, Sec-2A, Kopar Khairane, Navi Mumbai – 400709</div>
            <div><span>🗓</span> Established 2007 &nbsp;·&nbsp; Operating 7 days a week</div>
          </div>
        </div>

        <div className="about-cards">
          {highlights.map(h => (
            <div className="about-card" key={h.title}>
              <div className="about-card-icon">{h.icon}</div>
              <h4>{h.title}</h4>
              <p>{h.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
