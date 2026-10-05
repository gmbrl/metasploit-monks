import './Achievements.css'

const achievements = [
  { place: '1st', event: 'HackTheBox University CTF 2024', category: 'Web & Pwn', flag: 'HTB{m0nks_rule}' },
  { place: '3rd', event: 'PicoCTF 2024', category: 'All Categories', flag: 'picoCTF{monk_life}' },
  { place: '2nd', event: 'CyberPatriot Regional 2024', category: 'Linux / Windows', flag: '---' },
  { place: 'Top 10', event: 'CSAW CTF 2023', category: 'Forensics & Crypto', flag: 'flag{csaw_monks}' },
  { place: 'Top 5', event: 'NahamCon CTF 2024', category: 'Web Exploitation', flag: 'flag{naham_monks}' },
  { place: '1st', event: 'College Internal CTF 2024', category: 'All Tracks', flag: 'LOCAL{we_are_monks}' },
]

export default function Achievements() {
  return (
    <section id="achievements" style={{ position: 'relative', zIndex: 1 }}>
      <div className="section">
        <p className="section-title"><span>#</span> Achievements</p>
        <hr className="section-divider" />
        <div className="ach-grid">
          {achievements.map((a, i) => (
            <div className="ach-card" key={i}>
              <div className={`ach-place place-${i}`}>{a.place}</div>
              <div className="ach-details">
                <h3>{a.event}</h3>
                <p className="ach-cat">📂 {a.category}</p>
                <p className="ach-flag">🚩 <code>{a.flag}</code></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
