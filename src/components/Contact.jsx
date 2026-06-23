import { useState, useEffect, useRef } from 'react'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})
  const successRef = useRef(null)

  useEffect(() => {
    if (submitted && successRef.current) successRef.current.focus()
  }, [submitted])

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Valid email is required'
    if (!form.message.trim()) e.message = 'Message is required'
    return e
  }

  const handleChange = (e) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
    if (errors[e.target.name]) setErrors(er => ({ ...er, [e.target.name]: undefined }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setSubmitted(true)
  }

  const resetForm = () => {
    setSubmitted(false)
    setForm({ name: '', email: '', phone: '', subject: '', message: '' })
  }

  return (
    <section id="contact" className="contact" aria-labelledby="contact-heading">
      <h2 id="contact-heading" className="section-title">Contact Us</h2>
      <span className="underline" aria-hidden="true" />
      <p className="section-subtitle">Send us an enquiry or reach out directly — we respond within 24 hours</p>

      <div className="contact-container">
        <div className="contact-info">
          <h3>Get In Touch</h3>
          <div className="info-item">
            <span className="info-icon" aria-hidden="true">📍</span>
            <div>
              <strong>Address</strong>
              <p>802, Neelkanth Enclave, Plot 6 &amp; 67, Sec-2A,<br />Kopar Khairane, Navi Mumbai,<br />Maharashtra – 400709</p>
            </div>
          </div>
          <div className="info-item">
            <span className="info-icon" aria-hidden="true">👤</span>
            <div>
              <strong>Proprietor</strong>
              <p>Mr. Sudhir Kumar</p>
            </div>
          </div>
          <div className="info-item">
            <span className="info-icon" aria-hidden="true">🕐</span>
            <div>
              <strong>Working Hours</strong>
              <p>Monday – Sunday<br />Open all days</p>
            </div>
          </div>
          <div className="info-item">
            <span className="info-icon" aria-hidden="true">🏷️</span>
            <div>
              <strong>GST Number</strong>
              <p>27AYYPS1105J1ZX</p>
            </div>
          </div>
        </div>

        <div className="contact-form-wrap">
          {submitted ? (
            <div
              className="success-msg"
              role="status"
              aria-live="polite"
              tabIndex={-1}
              ref={successRef}
            >
              <div className="success-icon" aria-hidden="true">✅</div>
              <h3>Thank you for reaching out!</h3>
              <p>We've received your enquiry and will get back to you within 24 hours.</p>
              <button onClick={resetForm}>Send another message</button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit} noValidate aria-label="Enquiry form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="field-name">Full Name <span aria-hidden="true">*</span><span className="sr-only">(required)</span></label>
                  <input
                    id="field-name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    aria-required="true"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'err-name' : undefined}
                  />
                  {errors.name && <span id="err-name" className="err" role="alert">{errors.name}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="field-email">Email <span aria-hidden="true">*</span><span className="sr-only">(required)</span></label>
                  <input
                    id="field-email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    aria-required="true"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'err-email' : undefined}
                  />
                  {errors.email && <span id="err-email" className="err" role="alert">{errors.email}</span>}
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="field-phone">Phone</label>
                  <input
                    id="field-phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="field-subject">Subject</label>
                  <input
                    id="field-subject"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="e.g. Product enquiry"
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="field-message">Message <span aria-hidden="true">*</span><span className="sr-only">(required)</span></label>
                <textarea
                  id="field-message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Describe your requirement..."
                  aria-required="true"
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'err-message' : undefined}
                />
                {errors.message && <span id="err-message" className="err" role="alert">{errors.message}</span>}
              </div>
              <button type="submit" className="submit-btn">Send Enquiry</button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
