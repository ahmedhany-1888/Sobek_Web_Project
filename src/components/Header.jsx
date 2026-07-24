import { NavLink, Link } from 'react-router-dom'
import { useState } from 'react'
import { useLang } from '../i18n.jsx'
import logo from '../assets/logo.png'

export default function Header() {
  const [open, setOpen] = useState(false)
  const { t, toggle } = useLang()
  const close = () => setOpen(false)

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="brand" onClick={close}>
          <img src={logo} alt="Inukta" />
        </Link>

        <nav className={`main-nav ${open ? 'open' : ''}`}>
          <NavLink to="/services" onClick={close}>{t.nav.services}</NavLink>
          <NavLink to="/contact" onClick={close}>{t.nav.contact}</NavLink>
          <NavLink to="/why-inukta" onClick={close}>{t.nav.why}</NavLink>
        </nav>

        <div className="header-actions">
          <Link to="/book" className="btn btn-primary" onClick={close}>
            <span className="book-full">{t.nav.book}</span>
            <span className="book-short">{t.nav.bookShort}</span>
          </Link>
          <button className="lang" type="button" onClick={toggle} aria-label={t.nav.langLabel} title={t.nav.langLabel}>
            <svg className="lang-globe" viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="12" r="11" fill="currentColor" />
              <g fill="none" stroke="#fff" strokeWidth="1.9">
                <path d="M1 12h22M4 6.5h16M4 17.5h16" />
                <path d="M12 1c3 3.2 4.5 7 4.5 11S15 20.8 12 23c-3-2.2-4.5-7-4.5-11S9 4.2 12 1z" />
              </g>
            </svg>
            <span className="lang-meta">
              <span className="lang-flag" aria-hidden="true">{t.nav.langFlag}</span>
              <span className="lang-code">({t.nav.langCode}) ▾</span>
            </span>
          </button>
          <button
            className="nav-toggle"
            type="button"
            aria-label="Menu"
            onClick={() => setOpen(!open)}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
    </header>
  )
}
