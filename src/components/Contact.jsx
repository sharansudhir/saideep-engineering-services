import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

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

  return (
    <section id="contact" className="contact">
      <h2 className="section-title">Contact Us</h2>
      <span className="underline" />
      <p className="section-subtitle">Send us an enquiry or reach out directly — we respond within 24 hours</p>

      <div className="contact-container">
        <div className="contact-info">
          <h3>Get In Touch</h3>
          <div className="info-item">
            <span className="info-icon">📍</span>
            <div>
              <strong>Address</strong>
              <p>802, Neelkanth Enclave, Plot 6 &amp; 67, Sec-2A,<br />Kopar Khairane, Navi Mumbai,<br />Maharashtra – 400709</p>
            </div>
          </div>
          <div className="info-item">
            <span className="info-icon">👤</span>
            <div>
              <strong>Proprietor</strong>
              <p>Mr. Sudhir Kumar</p>
            </div>
          </div>
          <div className="info-item">
            <span className="info-icon">🕐</span>
            <div>
              <strong>Working Hours</strong>
              <p>Monday – Sunday<br />Open all days</p>
            </div>
          </div>
          <div className="info-item">
            <span className="info-icon">🏷️</span>
            <div>
              <strong>GST Number</strong>
              <p>27AYYPS1105J1ZX</p>
            </div>
          </div>
        </div>

        <div className="contact-form-wrap">
          {submitted ? (
            <div className="success-msg">
              <div className="success-icon">✅</div>
              <h3>Thank you for reaching out!</h3>
              <p>We've received your enquiry and will get back to you within 24 hours.</p>
              <button onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', subject: '', message: '' }) }}>
                Send another message
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name *</label>
                  <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" />
                  {errors.name && <span className="err">{errors.name}</span>}
                </div>
                <div className="form-group">
                  <label>Email *</label>
                  <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="your@email.com" />
                  {errors.email && <span className="err">{errors.email}</span>}
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Phone</label>
                  <input name="phone" value={form.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" />
                </div>
                <div className="form-group">
                  <label>Subject</label>
                  <input name="subject" value={form.subject} onChange={handleChange} placeholder="e.g. Product enquiry" />
                </div>
              </div>
              <div className="form-group">
                <label>Message *</label>
                <textarea name="message" value={form.message} onChange={handleChange} rows={5} placeholder="Describe your requirement..." />
                {errors.message && <span className="err">{errors.message}</span>}
              </div>
              <button type="submit" className="submit-btn">Send Enquiry →</button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
