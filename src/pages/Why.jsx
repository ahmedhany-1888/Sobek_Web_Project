import { Link } from 'react-router-dom'
import { useLang } from '../i18n.jsx'
import dash from '../assets/dash.png'

const benefitIcons = [
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 48 48" fill="none" stroke="#1173d4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 30l8-8 6 6 12-12M34 16h6v6" />
        <circle cx="12" cy="38" r="4" />
      </svg>
    ),
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 48 48" fill="none" stroke="#1173d4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="26" r="14" />
        <path d="M24 18v8l6 4M19 8h10" />
      </svg>
    ),
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 48 48" fill="none" stroke="#1173d4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="30" cy="12" r="5" />
        <path d="M14 26h10v10M10 40c2-6 7-10 14-10M35 15c3 2 4 5 4 9" />
      </svg>
    ),
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 48 48" fill="none" stroke="#1173d4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="22" r="9" />
        <rect x="20" y="18" width="8" height="7" rx="1.4" />
        <path d="M21.5 18v-2a2.5 2.5 0 0 1 5 0v2" />
      </svg>
    ),
  },
]

export default function Why() {
  const { t } = useLang()
  const w = t.why
  return (
    <main>
      <section className="hero hero-center compact">
        <div className="container center">
          <h1 className="serif-blue">{w.title}</h1>
          <p className="why-sub">{w.sub}</p>
          <p className="lead">{w.lead}</p>
          <div className="btn-row center-row">
            <Link to="/book" className="btn btn-primary">{w.requestDemo}</Link>
            <Link to="/services" className="btn btn-primary">{w.viewServices}</Link>
          </div>
        </div>
      </section>

      <section>
        <div className="container benefit-grid">
          {w.benefits.map((b, i) => (
            <div className="card benefit-card" key={b.title}>
              <h3 className="serif-blue benefit-title">
                {benefitIcons[i].icon}
                {b.title}
              </h3>
              <p>{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="container">
          <div className="card built-card">
            <div className="built-copy">
              <h3 className="serif-blue">{w.builtTitle}</h3>
              <p>{w.builtDesc}</p>
            </div>
            <img src={dash} alt="Inukta dashboard" />
          </div>
        </div>
      </section>

      <section className="more-than">
        <div className="container center">
          <h2 className="serif-blue cta-serif">{w.moreTitle}</h2>
          <p className="lead">{w.moreLead}</p>
        </div>
      </section>

      <section className="cta-band">
        <div className="container center">
          <h2 className="serif-blue cta-serif">{w.readyTitle}</h2>
          <p className="lead">{w.readyLead}</p>
          <div className="btn-row center-row">
            <Link to="/book" className="btn btn-primary">
              {w.requestDemo} <span className="arrow">↗</span>
            </Link>
            <Link to="/book" className="btn btn-primary">{w.bookAppointment}</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
