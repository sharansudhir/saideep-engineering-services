import { useLocale } from '../i18n/LocaleContext'
import './About.css'

export default function About() {
  const { content } = useLocale()
  const { about, company } = content

  return (
    <section id="about" className="about" aria-labelledby="about-heading">
      <h2 id="about-heading" className="section-title">{about.heading}</h2>
      <span className="underline" aria-hidden="true" />
      <p className="section-subtitle">{about.subheading}</p>

      <div className="about-container">
        <div className="about-text">
          <h3>{about.sectionTitle}</h3>
          {about.body.map((para, i) => <p key={i}>{para}</p>)}
          <div className="about-detail">
            <div>
              <span aria-hidden="true">📍</span>
              {' '}{company.address.line1}, {company.address.line2}, {company.address.city} – {company.address.pin}
            </div>
            <div>
              <span aria-hidden="true">🗓</span>
              {' '}Established {company.established} &nbsp;·&nbsp; {company.hours}
            </div>
          </div>
        </div>

        <div className="about-cards">
          {about.highlights.map(h => (
            <div className="about-card" key={h.title}>
              <div className="about-card-icon" aria-hidden="true">{h.icon}</div>
              <h4>{h.title}</h4>
              <p>{h.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
