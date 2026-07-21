import { useLang } from '../i18n.jsx'

export default function Privacy() {
  const { t } = useLang()
  const p = t.privacy
  return (
    <main>
      <section className="hero hero-center compact">
        <div className="container center">
          <h1 className="serif-blue">{p.title}</h1>
          <p className="lead">{p.intro}</p>
        </div>
      </section>

      <section className="privacy-section">
        <div className="container privacy-body">
          <p className="privacy-updated">{p.updated}</p>
          {p.sections.map(([h, body]) => (
            <div className="card privacy-card" key={h}>
              <h3 className="serif-blue">{h}</h3>
              <p>{body}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
