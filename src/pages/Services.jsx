import { Link } from 'react-router-dom'
import dash from '../assets/dash.png'
import phoneHr from '../assets/phone-hr.png'
import phoneHome from '../assets/phone-home.png'
import { ServiceIcon } from './Home.jsx'

const services = [
  {
    icon: 'erp',
    title: 'ERP System',
    sub: 'An all-in-one system to manage business operations, finance, and resources',
    image: dash,
    imageClass: 'wide',
    features: [
      ['Centralized System', 'Manage all departments (HR, finance, sales, inventory) in one platform.'],
      ['Financial Management', 'Track expenses, revenues, taxes, and generate accurate reports.'],
      ['Inventory & Warehouse', 'Monitor stock, manage purchases, and track items using barcode or QR scanning.'],
      ['Sales & CRM', 'Track customers, manage sales, and improve client relationships.'],
      ['Operations Management', 'Organize daily workflows and improve team coordination.'],
      ['Reports & Analytics', 'Real-time dashboards for better decision-making.'],
    ],
  },
  {
    icon: 'hr',
    title: 'HR Management System',
    sub: 'A complete system to manage employees, attendance, tasks, and operations in one platform.',
    image: phoneHr,
    imageClass: 'tall',
    features: [
      ['Payroll Management', 'Automated salary calculations, deductions, and payments with high accuracy.'],
      ['Advanced Attendance', 'Face recognition with liveness detection and GPS tracking for accurate clock-in/out. Supports multiple locations, overtime, late, and absence tracking.'],
      ['Requests System', 'Manage HR & IT requests (leave, permissions, support) with approval workflows and notifications.'],
      ['Task Management', 'Assign tasks, set deadlines, track progress (To Do / In Progress / Done), and manage attachments.'],
      ['Performance Tracking', 'Evaluate employee performance with structured reports and insights.'],
      ['Mobile & Notifications', 'Access all features on mobile and web with real-time alerts.'],
    ],
  },
  {
    icon: 'mobile',
    title: 'Mobile & Web Development',
    sub: 'Modern applications and websites designed to deliver seamless digital experiences.',
    image: phoneHome,
    imageClass: 'tall',
    features: [
      ['Custom Mobile App Development', 'Build Android and iOS applications tailored to business needs.'],
      ['Web Application Development', 'Develop responsive and secure web applications for all browsers and devices.'],
      ['Cross-Platform Solutions', 'Create apps that work across multiple platforms efficiently.'],
      ['UI/UX Design', 'Design intuitive and modern user experiences.'],
      ['Maintenance & Support', 'Continuous updates, security improvements, and performance optimization.'],
    ],
  },
  {
    icon: 'it',
    title: 'IT Infrastructure Solutions',
    sub: 'Secure IT infrastructure that keeps your business connected, efficient, and protected.',
    image: dash,
    imageClass: 'wide',
    features: [
      ['Domain Registration & Management', 'Register and manage your business domains with full control and reliability.'],
      ['Professional Business Email Setup', 'Create secure, branded email accounts for professional communication.'],
      ['Secure Network Infrastructure', 'Design and implement safe and stable network environments for your operations.'],
      ['Scalable Cloud Solutions', 'Deploy flexible cloud systems that grow with your business needs.'],
      ['Reliable System Support', 'Ongoing technical support to maintain performance, security, and uptime.'],
    ],
  },
  {
    icon: 'learn',
    title: 'E-Learning System',
    sub: 'Smart, scalable platform for modern digital learning.',
    image: dash,
    imageClass: 'wide',
    features: [
      ['Smart Online Assessments', 'Automated quizzes, assessments, and real-time performance tracking.'],
      ['Live Interactive Sessions', 'Integrate live classes, webinars, and meetings using Zoom API.'],
      ['Secure Cloud-Based Storage', 'Store and manage course content securely with high performance and protection.'],
      ['Powerful Course Management', 'Create, organize, and update courses easily and flexibly.'],
      ['Enhances learning experience, improves engagement, and simplifies education management.', ''],
    ],
  },
]

const saves = [
  {
    label: 'Save Cost',
    icon: (
      <svg width="40" height="40" viewBox="0 0 48 48" fill="none" stroke="#1173d4" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 30l8-8 6 6 12-12M34 16h6v6" />
        <circle cx="12" cy="38" r="4" />
        <path d="M12 36v4M10 38h4M22 38h4M30 38h4M38 38h4" />
      </svg>
    ),
  },
  {
    label: 'Save Time',
    icon: (
      <svg width="40" height="40" viewBox="0 0 48 48" fill="none" stroke="#1173d4" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="26" r="14" />
        <path d="M24 18v8l6 4M19 8h10M24 8v4" />
      </svg>
    ),
  },
  {
    label: 'Reduce Workload',
    icon: (
      <svg width="40" height="40" viewBox="0 0 48 48" fill="none" stroke="#1173d4" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="30" cy="12" r="5" />
        <path d="M23 15l-4 2 2 5 4-1M35 15c3 2 4 5 4 9M14 26h10v10M10 40c2-6 7-10 14-10" />
        <path d="M18 30l-4 4 4 4" />
      </svg>
    ),
  },
  {
    label: 'Secure Data',
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
  return (
    <main>
      <section className="hero hero-center">
        <div className="container center">
          <h1>
            <span className="serif-blue">Endless Possibilities</span> for Your
            Business.
          </h1>
          <p className="lead">
            From IT infrastructure to custom web and mobile development, explore
            solutions built to grow with you.
          </p>
        </div>
      </section>

      <section>
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          {services.map((s) => (
            <article className="detail-card" key={s.title}>
              <header className="detail-head">
                <span className="detail-icon"><ServiceIcon name={s.icon} /></span>
                <h3>{s.title}</h3>
              </header>
              <p className="detail-sub">{s.sub}</p>
              <div className="detail-body">
                <div className="features">
                  <h4>Key Features</h4>
                  <ul>
                    {s.features.map(([t, d]) => (
                      <li key={t}>
                        <span className="check">✓</span>
                        <div>
                          <strong>{t}</strong>
                          {d && <p>{d}</p>}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`detail-image ${s.imageClass}`}>
                  <img src={s.image} alt={s.title} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="saves">
        <div className="container">
          <h2 className="section-title lined">What You Save With Us</h2>
          <div className="save-tiles">
            {saves.map((s) => (
              <div className="save-tile" key={s.label}>
                {s.icon}
                <span className="serif-blue">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container center">
          <h2 className="serif-blue cta-serif">Ready to grow your business?</h2>
          <Link to="/contact" className="btn btn-primary btn-lg">Contact Us</Link>
        </div>
      </section>
    </main>
  )
}
