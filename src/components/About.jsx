import './About.css'

export default function About() {
  return (
    <section id="about" style={{ position: 'relative', zIndex: 1, background: 'var(--surface)' }}>
      <div className="section">
        <p className="section-title"><span>#</span> About Us</p>
        <hr className="section-divider" />
        <div className="about-grid">
          <div className="about-text">
            <p>
              <strong style={{ color: 'var(--green)' }}>Metasploit Monks</strong> is an elite ethical hacking
              and CTF (Capture The Flag) team driven by a passion for cybersecurity. We compete in national and
              international CTF competitions, continuously sharpening our offensive and defensive security skills.
            </p>
            <p style={{ marginTop: '16px' }}>
              Founded on the principles of <span className="highlight">responsible disclosure</span> and
              <span className="highlight"> ethical hacking</span>, we believe that understanding how attackers
              think is the key to building stronger defenses.
            </p>
            <p style={{ marginTop: '16px' }}>
              Our members specialize in web exploitation, reverse engineering, binary exploitation, forensics,
              cryptography, and OSINT — covering every domain of modern cybersecurity.
            </p>
            <div className="about-badges">
              <span className="badge">🕵️ Penetration Testing</span>
              <span className="badge">🔐 CTF Competitions</span>
              <span className="badge">🛡️ Ethical Hacking</span>
              <span className="badge">📡 OSINT</span>
              <span className="badge">🔬 Reverse Engineering</span>
              <span className="badge">💣 Exploit Dev</span>
            </div>
          </div>
          <div className="about-mission">
            <div className="mission-card">
              <div className="mission-icon">⚡</div>
              <h3>Our Mission</h3>
              <p>To learn, grow, and compete at the highest level while always staying on the ethical side of the line.</p>
            </div>
            <div className="mission-card">
              <div className="mission-icon">🎯</div>
              <h3>Our Goal</h3>
              <p>Win CTFs, earn certifications (OSCP, CEH, eJPT), and contribute to the security community through responsible disclosure.</p>
            </div>
            <div className="mission-card">
              <div className="mission-icon">🧘</div>
              <h3>The Monk Way</h3>
              <p>Patience, discipline, and deep focus. Like monks in a monastery, we study our craft with dedication and humility.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
