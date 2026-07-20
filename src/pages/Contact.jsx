import { useState } from 'react'

const infoRows = [
  {
    label: 'Email',
    value: 'info@inukta.com',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1173d4" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 6 9-6" />
      </svg>
    ),
  },
  {
    label: 'Phone',
    value: '+20 XXX XXX XXXX',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1173d4" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 5c0 8 7 15 15 15l2-4-5-2-2 2c-3-1-5-3-6-6l2-2-2-5-4 2z" />
      </svg>
    ),
  },
  {
    label: 'Location',
    value: 'Cairo, Egypt',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1173d4" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 21s7-6 7-11a7 7 0 1 0-14 0c0 5 7 11 7 11z" />
        <circle cx="12" cy="10" r="2.6" />
      </svg>
    ),
  },
  {
    label: 'Working Hours',
    value: '24/7',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1173d4" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l4 2" />
      </svg>
    ),
  },
]

const fields = [
  'ERP System',
  'HR Management',
  'Mobile & Web Development',
  'IT Infrastructure',
  'E-Learning',
  'Other',
]

export default function Contact() {
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
          <h1 className="serif-blue">Contact Us</h1>
          <p className="lead">
            Let’s talk about how we can help your business grow.
          </p>
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
              Get In Touch
            </h3>
            <p className="card-sub">
              We’re here to help you build the right solution.
            </p>
            <ul className="info-list">
              {infoRows.map((r) => (
                <li key={r.label}>
                  {r.icon}
                  <div>
                    <span className="info-label">{r.label}</span>
                    <span className="info-value">{r.value}</span>
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
              Send Us a Message
            </h3>
            <form className="contact-form" onSubmit={handleSubmit}>
              <label>
                <span>Full Name</span>
                <input name="name" type="text" placeholder="Full Name" required />
              </label>
              <label>
                <span>Company Name</span>
                <input name="company" type="text" placeholder="Company Name" />
              </label>
              <label>
                <span>Phone Number</span>
                <input name="phone" type="tel" placeholder="Phone Number" />
              </label>
              <label>
                <span>Field</span>
                <select name="field" defaultValue="">
                  <option value="" disabled>Field</option>
                  {fields.map((f) => (
                    <option key={f} value={f}>{f}</option>
                  ))}
                </select>
              </label>
              <label>
                <span>Message</span>
                <textarea name="message" rows="5" placeholder="How can we help?" required />
              </label>
              <button type="submit" className="btn btn-primary">
                {sent ? 'Opening your email app…' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
