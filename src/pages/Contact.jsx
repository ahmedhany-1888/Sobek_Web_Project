import { useState } from 'react'
import { useLang } from '../i18n.jsx'

const infoRows = [
  {
    key: 'email',
    value: 'info@inukta.com',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1173d4" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 6 9-6" />
      </svg>
    ),
  },
  {
    key: 'phone',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1173d4" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 5c0 8 7 15 15 15l2-4-5-2-2 2c-3-1-5-3-6-6l2-2-2-5-4 2z" />
      </svg>
    ),
  },
  {
    key: 'location',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1173d4" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 21s7-6 7-11a7 7 0 1 0-14 0c0 5 7 11 7 11z" />
        <circle cx="12" cy="10" r="2.6" />
      </svg>
    ),
  },
  {
    key: 'hours',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1173d4" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l4 2" />
      </svg>
    ),
  },
]

export default function Contact() {
  const { t } = useLang()
  const c = t.contact
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    const data = new FormData(e.target)
    const subject = encodeURIComponent(
      `Website inquiry — ${data.get('field') || 'General'}`,
    )
    const body = encodeURIComponent(
      `Name: ${data.get('name')}\nCompany: ${data.get('company')}\nPhone: ${data.get('phone')}\nField: ${data.get('field')}\n\n${data.get('message')}`,
    )
    window.location.href = `mailto:info@inukta.com?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <main>
      <section className="hero hero-center compact">
        <div className="container center">
          <h1 className="serif-blue">{c.title}</h1>
          <p className="lead">{c.lead}</p>
        </div>
      </section>

      <section className="contact-section">
        <div className="container contact-grid">
          <div className="card contact-card">
            <h3 className="card-title serif-blue">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#1173d4" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M3 7l9 6 9-6" />
              </svg>
              {c.getInTouch}
            </h3>
            <p className="card-sub">{c.getInTouchSub}</p>
            <ul className="info-list">
              {infoRows.map((r) => (
                <li key={r.key}>
                  {r.icon}
                  <div>
                    <span className="info-label">{c.infoLabels[r.key]}</span>
                    <span className="info-value">{r.value || c.infoValues[r.key]}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="card contact-card">
            <h3 className="card-title serif-blue">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#1173d4" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 4L11 14M21 4l-7 17-3-7-7-3 17-7z" />
              </svg>
              {c.sendUs}
            </h3>
            <form className="contact-form" onSubmit={handleSubmit}>
              <label>
                <span>{c.fullName}</span>
                <input name="name" type="text" placeholder={c.fullName} required />
              </label>
              <label>
                <span>{c.company}</span>
                <input name="company" type="text" placeholder={c.company} />
              </label>
              <label>
                <span>{c.phone}</span>
                <input name="phone" type="tel" placeholder={c.phone} />
              </label>
              <label>
                <span>{c.field}</span>
                <select name="field" defaultValue="">
                  <option value="" disabled>{c.field}</option>
                  {c.fields.map((f) => (
                    <option key={f} value={f}>{f}</option>
                  ))}
                </select>
              </label>
              <label>
                <span>{c.message}</span>
                <textarea name="message" rows="5" placeholder={c.messagePlaceholder} required />
              </label>
              <button type="submit" className="btn btn-primary">
                {sent ? c.opening : c.send}
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
