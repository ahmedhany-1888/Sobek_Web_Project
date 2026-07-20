import { Link } from 'react-router-dom'
import dash from '../assets/dash.png'

const benefits = [
  {
    title: 'Save Cost',
    desc: 'Reduce your business expenses and avoid unnecessary spending.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 48 48" fill="none" stroke="#1173d4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 30l8-8 6 6 12-12M34 16h6v6" />
        <circle cx="12" cy="38" r="4" />
      </svg>
    ),
  },
  {
    title: 'Save Time',
    desc: 'Get tasks done faster with smart automation.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 48 48" fill="none" stroke="#1173d4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="26" r="14" />
        <path d="M24 18v8l6 4M19 8h10" />
      </svg>
    ),
  },
  {
    title: 'Reduce Workload',
    desc: 'Minimize manual work and simplify daily operations.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 48 48" fill="none" stroke="#1173d4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="30" cy="12" r="5" />
        <path d="M14 26h10v10M10 40c2-6 7-10 14-10M35 15c3 2 4 5 4 9" />
      </svg>
    ),
  },
  {
    title: 'Secure Your Data',
    desc: 'Keep your data safe and accessible on the cloud.',
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
  return (
    <main>
      <section className="hero hero-center compact">
        <div className="container center">
          <h1 className="serif-blue">Why Inukta?</h1>
          <p className="why-sub">Engineering Digital Excellence</p>
          <p className="lead">
            Precision-built solutions designed to scale, perform, and lead.
          </p>
          <div className="btn-row center-row">
            <Link to="/book" className="btn btn-primary">Request demo</Link>
            <Link to="/services" className="btn btn-primary">View Services</Link>
          </div>
        </div>
      </section>

      <section>
        <div className="container benefit-grid">
          {benefits.map((b) => (
            <div className="card benefit-card" key={b.title}>
              <h3 className="serif-blue benefit-title">
                {b.icon}
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
              <h3 className="serif-blue">Built Around Your Business</h3>
              <p>
                Every solution is tailored to your workflows, operations, and
                growth strategy.
              </p>
            </div>
            <img src={dash} alt="Inukta dashboard" />
          </div>
        </div>
      </section>

      <section className="more-than">
        <div className="container center">
          <h2 className="serif-blue cta-serif">More Than a Service Provider</h2>
          <p className="lead">
            Inukta is your long-term technology partner — supporting your
            business at every stage of growth.
          </p>
        </div>
      </section>

      <section className="cta-band">
        <div className="container center">
          <h2 className="serif-blue cta-serif">Ready to Build Smarter?</h2>
          <p className="lead">
            Let’s create solutions that move your business forward.
          </p>
          <div className="btn-row center-row">
            <Link to="/book" className="btn btn-primary">
              Request demo <span className="arrow">↗</span>
            </Link>
            <Link to="/book" className="btn btn-primary">Book an appointment</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
