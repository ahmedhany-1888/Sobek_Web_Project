import { useMemo, useState } from 'react'
import { useLang } from '../i18n.jsx'

const INUKTA_EMAIL = 'info@inukta.com'

export default function Book() {
  const { t } = useLang()
  const b = t.book
  const today = new Date()
  const [year] = useState(today.getFullYear())
  const [month, setMonth] = useState(today.getMonth())
  const [day, setDay] = useState(null)
  const [dateApplied, setDateApplied] = useState(false)

  const [hour, setHour] = useState('')
  const [minute] = useState('00')
  const [meridiem, setMeridiem] = useState('AM')
  const [confirmed, setConfirmed] = useState(false)

  const weeks = useMemo(() => {
    const first = new Date(year, month, 1).getDay()
    const count = new Date(year, month + 1, 0).getDate()
    const cells = Array(first).fill(null)
    for (let d = 1; d <= count; d++) cells.push(d)
    while (cells.length % 7 !== 0) cells.push(null)
    const rows = []
    for (let i = 0; i < cells.length; i += 7) rows.push(cells.slice(i, i + 7))
    return rows
  }, [year, month])

  const dateLabel = day ? `${b.monthsFull[month]} ${day}, ${year}` : null
  const hourValid = /^([1-9]|1[0-2])$/.test(hour)
  const timeLabel = hourValid ? `${hour}:${minute} ${meridiem}` : null

  // Opens Google Calendar with a 1-hour event that invites info@inukta.com,
  // so the meeting lands on Inukta's calendar when the visitor saves it.
  function confirm() {
    let h24 = parseInt(hour, 10) % 12
    if (meridiem === 'PM') h24 += 12
    const start = new Date(year, month, day, h24, 0, 0)
    const end = new Date(start.getTime() + 60 * 60 * 1000)
    const fmt = (d) =>
      `${d.getFullYear()}${String(d.getMonth() + 1).padStart(2, '0')}${String(d.getDate()).padStart(2, '0')}` +
      `T${String(d.getHours()).padStart(2, '0')}${String(d.getMinutes()).padStart(2, '0')}00`
    const url =
      'https://calendar.google.com/calendar/render?action=TEMPLATE' +
      `&text=${encodeURIComponent(b.eventTitle)}` +
      `&details=${encodeURIComponent(b.eventDetails)}` +
      `&add=${INUKTA_EMAIL}` +
      `&dates=${fmt(start)}/${fmt(end)}`
    window.open(url, '_blank', 'noopener')
    setConfirmed(true)
  }

  function emailFallback() {
    const subject = encodeURIComponent('Appointment request — Inukta')
    const body = encodeURIComponent(
      `I would like to book an appointment on ${dateLabel} at ${timeLabel}.`,
    )
    window.location.href = `mailto:${INUKTA_EMAIL}?subject=${subject}&body=${body}`
  }

  return (
    <main>
      <section className="hero hero-center compact">
        <div className="container center">
          <h1 className="serif-blue">{b.title}</h1>
          <p className="lead">{b.lead}</p>
        </div>
      </section>

      <section className="booking">
        <div className="container booking-grid">
          {/* Calendar — per the design's date picker element */}
          <div className="card picker-card">
            <div className="cal-head">
              <span>{b.monthsFull[month]} {year}</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" /></svg>
            </div>
            <div className="cal-body">
              <table className="cal-table">
                <thead>
                  <tr>{b.dow.map((d) => <th key={d}>{d}</th>)}</tr>
                </thead>
                <tbody>
                  {weeks.map((row, ri) => (
                    <tr key={ri}>
                      {row.map((d, ci) => (
                        <td key={ci}>
                          {d && (
                            <button
                              type="button"
                              className={`cal-day ${day === d ? 'selected' : ''}`}
                              onClick={() => { setDay(d); setDateApplied(false) }}
                            >
                              {d}
                            </button>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="month-rail">
                {b.months.map((m, i) => (
                  <button
                    key={m}
                    type="button"
                    className={i === month ? 'active' : ''}
                    onClick={() => { setMonth(i); setDay(null); setDateApplied(false) }}
                  >
                    {m}
                  </button>
                ))}
              </div>
            </div>
            <div className="picker-foot">
              <button
                type="button"
                className="btn btn-primary btn-sm"
                disabled={!day}
                onClick={() => setDateApplied(true)}
              >
                {b.apply}
              </button>
            </div>
          </div>

          {/* Time — per the design's "Enter time" element */}
          <div className="card picker-card time-card">
            <p className="time-caption">{b.enterTime}</p>
            <div className="time-inputs">
              <div className="time-cell">
                <input
                  value={hour}
                  onChange={(e) => setHour(e.target.value.replace(/\D/g, '').slice(0, 2))}
                  placeholder=""
                  aria-label={b.hour}
                  className={hour && !hourValid ? 'bad' : ''}
                />
                <span>{b.hour}</span>
              </div>
              <div className="time-colon">:</div>
              <div className="time-cell">
                <div className="minute-box">{minute}</div>
                <span>{b.minute}</span>
              </div>
              <div className="ampm">
                <button type="button" className={meridiem === 'AM' ? 'active' : ''} onClick={() => setMeridiem('AM')}>AM</button>
                <button type="button" className={meridiem === 'PM' ? 'active' : ''} onClick={() => setMeridiem('PM')}>PM</button>
              </div>
            </div>
            <div className="time-foot">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5c6470" strokeWidth="1.8"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l4 2" /></svg>
              <div className="time-actions">
                <button type="button" className="text-btn" onClick={() => { setHour(''); setMeridiem('AM') }}>{b.cancel}</button>
                <button type="button" className="text-btn" disabled={!hourValid}>{b.ok}</button>
              </div>
            </div>
          </div>

          {/* Summary */}
          <div className="card summary-card">
            <h3 className="serif-blue">{b.yourAppointment}</h3>
            <ul>
              <li>
                <span>{b.date}</span>
                <strong>{dateApplied && dateLabel ? dateLabel : b.pickDate}</strong>
              </li>
              <li>
                <span>{b.time}</span>
                <strong>{timeLabel || b.enterHour}</strong>
              </li>
            </ul>
            <button
              type="button"
              className="btn btn-primary"
              disabled={!(dateApplied && dateLabel && timeLabel)}
              onClick={confirm}
            >
              {confirmed ? b.opening : b.confirm}
            </button>
            {dateApplied && timeLabel && (
              <button type="button" className="text-btn email-fallback" onClick={emailFallback}>
                {b.orEmail}
              </button>
            )}
            <p className="trial-note">{b.trialNote}</p>
          </div>
        </div>
      </section>
    </main>
  )
}
