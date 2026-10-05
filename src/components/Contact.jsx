import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = (e) => {
    e.preventDefault()
    setSent(true)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" style={{ position: 'relative', zIndex: 1, background: 'var(--surface)' }}>
      <div className="section">
        <p className="section-title"><span>#</span> Contact & Join</p>
        <hr className="section-divider" />
        <div className="contact-layout">
          <div className="contact-info">
            <p className="contact-lead">
              Want to join <strong style={{ color: 'var(--green)' }}>Metasploit Monks</strong>?
              We accept passionate hackers of all levels — beginners to advanced. Fill in the form or reach us on any platform.
            </p>
            <ul className="contact-links">
              <li><span className="cl-icon">📧</span><a href="mailto:monks@ctf.team">monks@ctf.team</a></li>
              <li><span className="cl-icon">🐙</span><a href="https://github.com" target="_blank" rel="noreferrer">github.com/metasploit-monks</a></li>
              <li><span className="cl-icon">💬</span><a href="https://discord.gg" target="_blank" rel="noreferrer">Discord: MetasploitMonks</a></li>
              <li><span className="cl-icon">🐦</span><a href="https://twitter.com" target="_blank" rel="noreferrer">@MetasploitMonks</a></li>
            </ul>
            <div className="contact-note">
              <code>{'// We operate strictly within legal and ethical boundaries.'}</code><br />
              <code>{'// Unauthorized hacking is a crime. We do NOT condone it.'}</code>
            </div>
          </div>

          <form className="contact-form" onSubmit={submit}>
            {sent ? (
              <div className="form-success">
                <p>✅ <strong>Message sent!</strong> We'll get back to you soon.</p>
                <button type="button" className="btn-outline" onClick={() => setSent(false)}>Send another</button>
              </div>
            ) : (
              <>
                <div className="form-group">
                  <label>Your Handle / Name</label>
                  <input name="name" value={form.name} onChange={handle} placeholder="hacker123" required />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input name="email" type="email" value={form.email} onChange={handle} placeholder="you@domain.com" required />
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea name="message" rows={5} value={form.message} onChange={handle} placeholder="Tell us why you want to join or ask a question..." required />
                </div>
                <button type="submit" className="btn-primary" style={{ width: '100%' }}>Send Message →</button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
