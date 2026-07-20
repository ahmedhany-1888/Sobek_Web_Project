import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <img src={logo} alt="Inukta" className="footer-logo" />
        <nav className="footer-nav">
          <Link to="/why-inukta">About Us</Link>
          <Link to="/services">Services</Link>
          <Link to="/book">Request a demo</Link>
        </nav>
      </div>
      <div className="container">
        <p className="footer-tagline">
          We build solutions for businesses across various sectors.
        </p>
      </div>
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>
            Copyright © {new Date().getFullYear()}, Inukta . All rights
            reserved. <a href="#privacy">Privacy Policy</a>.
          </p>
          <div className="socials">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.2 8h4.6v14.8H.2V8zm7.6 0h4.4v2h.06c.61-1.16 2.1-2.38 4.33-2.38 4.63 0 5.48 3.05 5.48 7.02v8.16h-4.6v-7.23c0-1.72-.03-3.94-2.4-3.94-2.4 0-2.77 1.87-2.77 3.81v7.36H7.8V8z" />
              </svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12a12 12 0 1 0-13.88 11.85v-8.38H7.08V12h3.04V9.36c0-3 1.79-4.67 4.53-4.67 1.31 0 2.68.24 2.68.24v2.95H15.8c-1.49 0-1.95.93-1.95 1.87V12h3.32l-.53 3.47h-2.79v8.38A12 12 0 0 0 24 12z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
