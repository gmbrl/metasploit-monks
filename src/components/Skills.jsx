import './Skills.css'

const skills = [
  { name: 'Web Exploitation', level: 90, color: 'var(--green)', icon: '🌐' },
  { name: 'Reverse Engineering', level: 78, color: 'var(--cyan)', icon: '🔬' },
  { name: 'Binary Exploitation', level: 72, color: 'var(--green)', icon: '💣' },
  { name: 'Cryptography', level: 85, color: 'var(--cyan)', icon: '🔐' },
  { name: 'OSINT', level: 88, color: 'var(--green)', icon: '🔍' },
  { name: 'Forensics', level: 80, color: 'var(--cyan)', icon: '🧪' },
  { name: 'Network Hacking', level: 82, color: 'var(--green)', icon: '📡' },
  { name: 'Privilege Escalation', level: 76, color: 'var(--cyan)', icon: '⬆️' },
]

const tools = [
  'Metasploit', 'Burp Suite', 'Nmap', 'Wireshark', 'Ghidra', 'IDA Pro',
  'sqlmap', 'Hydra', 'John the Ripper', 'Hashcat', 'Aircrack-ng',
  'Volatility', 'Binwalk', 'pwndbg', 'Impacket', 'BloodHound',
]

export default function Skills() {
  return (
    <section id="skills" style={{ position: 'relative', zIndex: 1 }}>
      <div className="section">
        <p className="section-title"><span>#</span> Skills & Tools</p>
        <hr className="section-divider" />
        <div className="skills-layout">
          <div>
            <h3 className="skills-sub">Core Competencies</h3>
            <div className="skill-bars">
              {skills.map(s => (
                <div className="skill-item" key={s.name}>
                  <div className="skill-header">
                    <span>{s.icon} {s.name}</span>
                    <span style={{ color: s.color, fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>{s.level}%</span>
                  </div>
                  <div className="skill-track">
                    <div
                      className="skill-fill"
                      style={{ width: `${s.level}%`, background: s.color }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="skills-sub">Tools & Frameworks</h3>
            <div className="tools-grid">
              {tools.map(t => (
                <div className="tool-chip" key={t}>{t}</div>
              ))}
            </div>
            <div className="certs-box">
              <h3 className="skills-sub" style={{ marginTop: 0 }}>Certifications & Goals</h3>
              <ul className="cert-list">
                <li><span className="check">✔</span> eJPT — eLearnSecurity Junior Penetration Tester</li>
                <li><span className="check">✔</span> CompTIA Security+</li>
                <li><span className="goal">🎯</span> OSCP — Offensive Security Certified Professional</li>
                <li><span className="goal">🎯</span> CEH — Certified Ethical Hacker</li>
                <li><span className="goal">🎯</span> CRTE — Certified Red Team Expert</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
