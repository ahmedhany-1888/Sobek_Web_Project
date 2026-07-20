import { Link } from 'react-router-dom'
import { useLang } from '../i18n.jsx'
import hero from '../assets/hero.png'

export function ServiceIcon({ name }) {
  const stroke = { fill: 'none', stroke: '#1173d4', strokeWidth: 1.7, strokeLinecap: 'round', strokeLinejoin: 'round' }
  switch (name) {
    case 'erp':
      return (
        <svg width="44" height="44" viewBox="0 0 48 48" {...stroke}>
          <rect x="8" y="8" width="32" height="24" rx="3" />
          <path d="M8 16h32M14 12h8M20 22h14M20 27h10M14 22h2M14 27h2M24 32v6M16 42h16M18 38h12" />
        </svg>
      )
    case 'hr':
      return (
        <svg width="44" height="44" viewBox="0 0 48 48" {...stroke}>
          <circle cx="17" cy="16" r="5" />
          <circle cx="31" cy="16" r="5" />
          <path d="M8 34c0-5 4-8 9-8s9 3 9 8M22 34c0-5 4-8 9-8s9 3 9 8" />
          <path d="M40 10c3 3 4 8 3 12M8 10C5 13 4 18 5 22" />
        </svg>
      )
    case 'web':
      return (
        <svg width="44" height="44" viewBox="0 0 48 48" {...stroke}>
          <rect x="6" y="9" width="36" height="24" rx="3" />
          <path d="M18 39h12M24 33v6M18 18l-4 4 4 4M30 18l4 4-4 4M26 16l-4 12" />
        </svg>
      )
    case 'mobile':
      return (
        <svg width="44" height="44" viewBox="0 0 48 48" {...stroke}>
          <rect x="14" y="6" width="20" height="36" rx="4" />
          <path d="M21 10h6M20 22l-3 3 3 3M28 22l3 3-3 3" />
          <circle cx="24" cy="37" r="1.4" />
        </svg>
      )
    case 'it':
      return (
        <svg width="44" height="44" viewBox="0 0 48 48" {...stroke}>
          <path d="M24 6a8 8 0 0 1 8 8c0 4-2 6-4 8h-8c-2-2-4-4-4-8a8 8 0 0 1 8-8z" />
          <path d="M20 26h8M21 30h6M12 40c4-4 8-5 12-5s8 1 12 5" />
        </svg>
      )
    case 'learn':
      return (
        <svg width="44" height="44" viewBox="0 0 48 48" {...stroke}>
          <rect x="8" y="8" width="32" height="22" rx="3" />
          <path d="M24 13c-2-2-5-2-7 0v10c2-2 5-2 7 0 2-2 5-2 7 0V13c-2-2-5-2-7 0zM24 13v10M18 36h12M24 30v6" />
        </svg>
      )
    default:
      return null
  }
}

export function IndustryIcon({ name }) {
  const stroke = { fill: 'none', stroke: '#1173d4', strokeWidth: 1.7, strokeLinecap: 'round', strokeLinejoin: 'round' }
  switch (name) {
    case 'health':
      return (
        <svg width="56" height="56" viewBox="0 0 48 48" {...stroke}>
          <path d="M24 14c3-5 10-5 12 0 2 4-1 8-12 16C13 22 10 18 12 14c2-5 9-5 12 0z" />
          <path d="M24 18v8M20 22h8M6 34c4 3 8 4 18 4s14-1 18-4" />
        </svg>
      )
    case 'construction':
      return (
        <svg width="56" height="56" viewBox="0 0 48 48" {...stroke}>
          <path d="M10 40V20h10v20M14 24h2M14 29h2M14 34h2M20 40V14l14-6v32M27 14h2M27 20h2M27 26h2M27 32h2M34 12l8-2v6M42 10v14M6 40h38" />
        </svg>
      )
    case 'retail':
      return (
        <svg width="56" height="56" viewBox="0 0 48 48" {...stroke}>
          <path d="M8 16l3-8h26l3 8M8 16h32v6a4 4 0 0 1-8 0 4 4 0 0 1-8 0 4 4 0 0 1-8 0 4 4 0 0 1-8 0v-6zM11 26v14h26V26M19 40V30h10v10" />
        </svg>
      )
    case 'ecommerce':
      return (
        <svg width="56" height="56" viewBox="0 0 48 48" {...stroke}>
          <rect x="8" y="8" width="32" height="24" rx="3" />
          <path d="M8 14h32M18 39h12M24 32v7M19 20l2 8h7l2-6h-9" />
          <circle cx="22" cy="30.5" r="0.8" />
          <circle cx="27" cy="30.5" r="0.8" />
        </svg>
      )
    case 'logistics':
      return (
        <svg width="56" height="56" viewBox="0 0 48 48" {...stroke}>
          <rect x="4" y="14" width="22" height="18" rx="2" />
          <path d="M26 20h9l7 7v5h-16M11 20l4 3 4-3v-6h-8v6z" />
          <circle cx="12" cy="35" r="3.4" />
          <circle cx="33" cy="35" r="3.4" />
        </svg>
      )
    case 'education':
      return (
        <svg width="56" height="56" viewBox="0 0 48 48" {...stroke}>
          <path d="M8 34c5-3 11-3 16 0V16c-5-3-11-3-16 0v18zM40 34c-5-3-11-3-16 0V16c5-3 11-3 16 0v18z" />
          <path d="M24 6v6M24 6a4 4 0 0 1 4 4M19 9c1-2 3-3 5-3" />
          <circle cx="24" cy="4.6" r="1.2" />
        </svg>
      )
    default:
      return null
  }
}

export default function Home() {
  const { t } = useLang()
  const h = t.home
  return (
    <main>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <h1>
              <span className="serif-blue">{h.heroTitleSerif}</span>
              <br />
              {h.heroTitle}
            </h1>
            <p className="lead">{h.heroLead}</p>
            <div className="btn-row">
              <Link to="/book" className="btn btn-primary">
                {h.requestDemo} <span className="arrow">↗</span>
              </Link>
              <Link to="/book" className="btn btn-primary">
                {h.bookAppointment}
              </Link>
            </div>
            <p className="trial-note">{h.trialNote}</p>
          </div>
          <div className="hero-art">
            <img src={hero} alt="Inukta platform on desktop and mobile" />
          </div>
        </div>
      </section>

      <section className="trusted">
        <div className="container">
          <h2 className="section-title">{h.trustedTitle}</h2>
        </div>
        <div className="pill-row">
          {h.trusted.map((p) => (
            <span className="pill" key={p}>{p}</span>
          ))}
        </div>
      </section>

      <section className="services-grid-section">
        <div className="container">
          <h2 className="section-title">{h.ourServices}</h2>
          <div className="service-cards">
            {h.services.map((s) => (
              <Link to="/services" className="service-card" key={s.icon}>
                <div className="service-card-icon">
                  <ServiceIcon name={s.icon} />
                </div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="industries">
        <div className="container">
          <h2 className="section-title">{h.industriesTitle}</h2>
          <p className="section-sub">{h.industriesSub}</p>
          <div className="industry-row">
            {h.industries.map((i) => (
              <div className="industry" key={i.icon}>
                <IndustryIcon name={i.icon} />
                <span>{i.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container center">
          <h2 className="section-title">{h.ctaTitle}</h2>
          <Link to="/book" className="btn btn-primary btn-lg">
            {h.requestDemo} <span className="arrow">↗</span>
          </Link>
        </div>
      </section>
    </main>
  )
}
