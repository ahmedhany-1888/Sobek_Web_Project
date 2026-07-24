import { Link } from 'react-router-dom'
import { useLang } from '../i18n.jsx'
import payslipsEn from '../assets/app-payslips-en.png'
import payslipsAr from '../assets/app-payslips-ar.png'
import requestsEn from '../assets/app-requests-en.png'
import requestsAr from '../assets/app-requests-ar.png'
import taskEn from '../assets/app-task-en.png'
import taskAr from '../assets/app-task-ar.png'
import homeEn from '../assets/app-home-en.png'
import homeAr from '../assets/app-home-ar.png'
import tasksEn from '../assets/app-tasks-en.png'
import tasksAr from '../assets/app-tasks-ar.png'
import { ServiceIcon } from './Home.jsx'

// Real app screenshots, matched to the visitor's language (EN screens for EN, AR for AR).
const cardImages = {
  en: { erp: payslipsEn, hr: requestsEn, mobile: taskEn, it: homeEn, learn: tasksEn },
  ar: { erp: payslipsAr, hr: requestsAr, mobile: taskAr, it: homeAr, learn: tasksAr },
}

const saves = [
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 48 48" fill="none" stroke="#1173d4" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 30l8-8 6 6 12-12M34 16h6v6" />
        <circle cx="12" cy="38" r="4" />
        <path d="M12 36v4M10 38h4M22 38h4M30 38h4M38 38h4" />
      </svg>
    ),
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 48 48" fill="none" stroke="#1173d4" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="26" r="14" />
        <path d="M24 18v8l6 4M19 8h10M24 8v4" />
      </svg>
    ),
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 48 48" fill="none" stroke="#1173d4" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="30" cy="12" r="5" />
        <path d="M23 15l-4 2 2 5 4-1M35 15c3 2 4 5 4 9M14 26h10v10M10 40c2-6 7-10 14-10" />
        <path d="M18 30l-4 4 4 4" />
      </svg>
    ),
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 48 48" fill="none" stroke="#1173d4" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="22" r="9" />
        <rect x="20" y="18" width="8" height="7" rx="1.4" />
        <path d="M21.5 18v-2a2.5 2.5 0 0 1 5 0v2M24 6v4M38 12l-3 3M42 24h-4M10 12l3 3M6 24h4M24 38v4M14 34l-2 3M34 34l2 3" />
      </svg>
    ),
  },
]

export default function Services() {
  const { t, lang } = useLang()
  const sv = t.services
  return (
    <main>
      <section className="hero hero-center">
        <div className="container center">
          <h1>
            <span className="serif-blue">{sv.heroSerif}</span>
            {sv.heroRest}
          </h1>
          <p className="lead">{sv.lead}</p>
        </div>
      </section>

      <section>
        <div className="container">
          <h2 className="section-title">{sv.ourServices}</h2>
          {sv.cards.map((s) => (
            <article className="detail-card" key={s.icon}>
              <header className="detail-head">
                <span className="detail-icon"><ServiceIcon name={s.icon} /></span>
                <h3>{s.title}</h3>
              </header>
              <p className="detail-sub">{s.sub}</p>
              <div className="detail-body">
                <div className="features">
                  <h4>{sv.keyFeatures}</h4>
                  <ul>
                    {s.features.map(([ft, d]) => (
                      <li key={ft}>
                        <span className="check">✓</span>
                        <div>
                          <strong>{ft}</strong>
                          {d && <p>{d}</p>}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="detail-image tall">
                  <img src={cardImages[lang][s.icon]} alt={s.title} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="saves">
        <div className="container">
          <h2 className="section-title lined">{sv.savesTitle}</h2>
          <div className="save-tiles">
            {saves.map((s, i) => (
              <div className="save-tile" key={sv.saves[i]}>
                {s.icon}
                <span className="serif-blue">{sv.saves[i]}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container center">
          <h2 className="serif-blue cta-serif">{sv.ctaTitle}</h2>
          <Link to="/contact" className="btn btn-primary btn-lg">{sv.contactUs}</Link>
        </div>
      </section>
    </main>
  )
}
