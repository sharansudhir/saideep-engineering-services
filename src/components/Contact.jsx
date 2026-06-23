import { useState, useEffect, useRef } from 'react'
import content from '../content/en-IN.json'
import './Contact.css'

const { contact } = content
const { form: formContent } = contact

const initialForm = Object.fromEntries(formContent.fields.map(f => [f.name, '']))

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})
  const successRef = useRef(null)

  useEffect(() => {
    if (submitted && successRef.current) successRef.current.focus()
  }, [submitted])

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = formContent.errors.name
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = formContent.errors.email
    if (!form.message.trim()) e.message = formContent.errors.message
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
    setForm(initialForm)
  }

  const rowFields = [
    formContent.fields.slice(0, 2),
    formContent.fields.slice(2, 4),
  ]
  const messageField = formContent.fields[4]

  return (
    <section id="contact" className="contact" aria-labelledby="contact-heading">
      <h2 id="contact-heading" className="section-title">{contact.heading}</h2>
      <span className="underline" aria-hidden="true" />
      <p className="section-subtitle">{contact.subheading}</p>

      <div className="contact-container">
        <div className="contact-info">
          <h3>{contact.infoHeading}</h3>
          {contact.infoItems.map(item => (
            <div className="info-item" key={item.label}>
              <span className="info-icon" aria-hidden="true">{item.icon}</span>
              <div>
                <strong>{item.label}</strong>
                <p>{item.value.split('\n').map((line, i, arr) => (
                  <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
                ))}</p>
              </div>
            </div>
          ))}
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
              <h3>{formContent.success.heading}</h3>
              <p>{formContent.success.body}</p>
              <button onClick={resetForm}>{formContent.success.reset}</button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit} noValidate aria-label={formContent.ariaLabel}>
              {rowFields.map((row, ri) => (
                <div className="form-row" key={ri}>
                  {row.map(field => (
                    <div className="form-group" key={field.id}>
                      <label htmlFor={field.id}>
                        {field.label}
                        {field.required && <><span aria-hidden="true"> *</span><span className="sr-only"> (required)</span></>}
                      </label>
                      <input
                        id={field.id}
                        name={field.name}
                        type={field.type}
                        value={form[field.name]}
                        onChange={handleChange}
                        placeholder={field.placeholder}
                        aria-required={field.required || undefined}
                        aria-invalid={errors[field.name] ? true : undefined}
                        aria-describedby={errors[field.name] ? `err-${field.name}` : undefined}
                      />
                      {errors[field.name] && (
                        <span id={`err-${field.name}`} className="err" role="alert">{errors[field.name]}</span>
                      )}
                    </div>
                  ))}
                </div>
              ))}

              <div className="form-group">
                <label htmlFor={messageField.id}>
                  {messageField.label}
                  <span aria-hidden="true"> *</span><span className="sr-only"> (required)</span>
                </label>
                <textarea
                  id={messageField.id}
                  name={messageField.name}
                  value={form[messageField.name]}
                  onChange={handleChange}
                  rows={5}
                  placeholder={messageField.placeholder}
                  aria-required="true"
                  aria-invalid={errors[messageField.name] ? true : undefined}
                  aria-describedby={errors[messageField.name] ? `err-${messageField.name}` : undefined}
                />
                {errors[messageField.name] && (
                  <span id={`err-${messageField.name}`} className="err" role="alert">{errors[messageField.name]}</span>
                )}
              </div>

              <button type="submit" className="submit-btn">{formContent.submitLabel}</button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
