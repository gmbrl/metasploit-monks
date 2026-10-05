import './Hero.css'
import { useEffect, useState } from 'react'

const TAGLINES = [
  'We Break. We Learn. We Protect.',
  'Authorized to Hack. Trained to Defend.',
  'Exploiting Vulnerabilities, Ethically.',
  'CTF Champions in the Making.',
]

export default function Hero() {
  const [tagline, setTagline] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const full = TAGLINES[tagline]
    let i = 0
    setDisplayed('')
    setTyping(true)
    const interval = setInterval(() => {
      i++
      setDisplayed(full.slice(0, i))
      if (i >= full.length) {
        clearInterval(interval)
        setTyping(false)
        setTimeout(() => {
          setTagline(t => (t + 1) % TAGLINES.length)
        }, 2800)
      }
    }, 45)
    return () => clearInterval(interval)
  }, [tagline])

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <p className="hero-pre">&#47;&#47; CTF TEAM — ETHICAL HACKING DIVISION</p>
        <h1 className="hero-title">
          <span className="ht-green">Metasploit</span>
          <br />
          <span className="ht-cyan">Monks</span>
        </h1>
        <p className="hero-tagline">
          {displayed}
          <span className={`cursor ${typing ? 'blink' : 'hidden'}`}>_</span>
        </p>
        <div className="hero-cta">
          <button className="btn-primary" onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>
            Explore Team
          </button>
          <button className="btn-outline" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
            Join Us
          </button>
        </div>
        <div className="hero-stats">
          <div className="stat"><span>12+</span><p>CTFs Played</p></div>
          <div className="stat"><span>6</span><p>Members</p></div>
          <div className="stat"><span>3</span><p>Top-10 Finishes</p></div>
          <div className="stat"><span>100%</span><p>Ethical</p></div>
        </div>
      </div>
      <div className="hero-terminal">
        <div className="terminal-bar">
          <span className="dot red" /><span className="dot yellow" /><span className="dot green" />
          <span className="terminal-title">msf6 &gt; monks.rb</span>
        </div>
        <div className="terminal-body">
          <p><span className="prompt">msf6&gt;</span> use exploit/ctf/monks</p>
          <p><span className="prompt">msf6 exploit&gt;</span> set TARGET all_flags</p>
          <p className="t-green">TARGET =&gt; all_flags</p>
          <p><span className="prompt">msf6 exploit&gt;</span> set PAYLOAD ethical/win</p>
          <p className="t-green">PAYLOAD =&gt; ethical/win</p>
          <p><span className="prompt">msf6 exploit&gt;</span> run</p>
          <p className="t-cyan">[*] Starting exploit handler...</p>
          <p className="t-cyan">[*] Scanning for vulnerabilities...</p>
          <p className="t-green">[+] Flag captured: CTF&#123;m3t4spl01t_m0nks&#125;</p>
          <p className="t-green">[+] Mission complete. Stay ethical. 🙏</p>
          <p><span className="prompt">msf6 exploit&gt;</span> <span className="blink-cursor">█</span></p>
        </div>
      </div>
    </section>
  )
}
