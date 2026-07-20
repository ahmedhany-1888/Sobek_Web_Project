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
            {t.nav.book}
          </Link>
          <button className="lang" type="button" onClick={toggle} aria-label={t.nav.langLabel}>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <circle cx="12" cy="12" r="10" />
              <path d="M2 12h20M12 2c2.7 2.9 4 6.4 4 10s-1.3 7.1-4 10c-2.7-2.9-4-6.4-4-10s1.3-7.1 4-10z" />
            </svg>
            <span>{t.nav.langLabel}</span>
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
