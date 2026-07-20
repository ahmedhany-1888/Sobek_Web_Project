import { useMemo, useState } from 'react'

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const MONTHS_FULL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const DOW = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']

export default function Book() {
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

  const dateLabel = day ? `${MONTHS_FULL[month]} ${day}, ${year}` : null
  const hourValid = /^([1-9]|1[0-2])$/.test(hour)
  const timeLabel = hourValid ? `${hour}:${minute} ${meridiem}` : null

  function confirm() {
    const subject = encodeURIComponent('Appointment request — Inukta')
    const body = encodeURIComponent(
      `I would like to book an appointment on ${dateLabel} at ${timeLabel}.`,
    )
    window.location.href = `mailto:info@inukta.com?subject=${subject}&body=${body}`
    setConfirmed(true)
  }

  return (
    <main>
      <section className="hero hero-center compact">
        <div className="container center">
          <h1 className="serif-blue">Book an appointment</h1>
          <p className="lead">
            Pick a date and time that suits you — we’ll take it from there.
          </p>
        </div>
      </section>

      <section className="booking">
        <div className="container booking-grid">
          {/* Calendar — per the design's date picker element */}
          <div className="card picker-card">
            <div className="cal-head">
              <span>{MONTHS_FULL[month]} {year}</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" /></svg>
            </div>
            <div className="cal-body">
              <table className="cal-table">
                <thead>
                  <tr>{DOW.map((d) => <th key={d}>{d}</th>)}</tr>
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
                {MONTHS.map((m, i) => (
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
                Apply
              </button>
            </div>
          </div>

          {/* Time — per the design's "Enter time" element */}
          <div className="card picker-card time-card">
            <p className="time-caption">ENTER TIME</p>
            <div className="time-inputs">
              <div className="time-cell">
                <input
                  value={hour}
                  onChange={(e) => setHour(e.target.value.replace(/\D/g, '').slice(0, 2))}
                  placeholder=""
                  aria-label="Hour"
                  className={hour && !hourValid ? 'bad' : ''}
                />
                <span>Hour</span>
              </div>
              <div className="time-colon">:</div>
              <div className="time-cell">
                <div className="minute-box">{minute}</div>
                <span>Minute</span>
              </div>
              <div className="ampm">
                <button type="button" className={meridiem === 'AM' ? 'active' : ''} onClick={() => setMeridiem('AM')}>AM</button>
                <button type="button" className={meridiem === 'PM' ? 'active' : ''} onClick={() => setMeridiem('PM')}>PM</button>
              </div>
            </div>
            <div className="time-foot">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5c6470" strokeWidth="1.8"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l4 2" /></svg>
              <div className="time-actions">
                <button type="button" className="text-btn" onClick={() => { setHour(''); setMeridiem('AM') }}>CANCEL</button>
                <button type="button" className="text-btn" disabled={!hourValid}>OK</button>
              </div>
            </div>
          </div>

          {/* Summary */}
          <div className="card summary-card">
            <h3 className="serif-blue">Your appointment</h3>
            <ul>
              <li>
                <span>Date</span>
                <strong>{dateApplied && dateLabel ? dateLabel : 'Pick a date and press Apply'}</strong>
              </li>
              <li>
                <span>Time</span>
                <strong>{timeLabel || 'Enter an hour'}</strong>
              </li>
            </ul>
            <button
              type="button"
              className="btn btn-primary"
              disabled={!(dateApplied && dateLabel && timeLabel)}
              onClick={confirm}
            >
              {confirmed ? 'Opening your email app…' : 'Confirm booking'}
            </button>
            <p className="trial-note">1 Month Free Trial – No Payment Needed</p>
          </div>
        </div>
      </section>
    </main>
  )
}
