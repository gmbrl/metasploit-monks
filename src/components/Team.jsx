import './Team.css'

const members = [
  {
    name: 'Ghost_Root',
    role: 'Team Lead · Web Exploitation',
    bio: 'Specializes in OWASP Top 10 and advanced web attack chains. OSCP certified.',
    skills: ['SQLi', 'XSS', 'SSRF', 'Auth Bypass'],
    color: 'var(--green)',
    avatar: 'GR',
  },
  {
    name: 'B1n4ry_S4ge',
    role: 'Binary Exploitation · Pwn',
    bio: 'Low-level wizard. Loves buffer overflows, ROP chains, and heap exploitation.',
    skills: ['Buffer Overflow', 'ROP', 'Heap Pwn', 'GDB'],
    color: 'var(--cyan)',
    avatar: 'BS',
  },
  {
    name: 'CryptoMonk',
    role: 'Cryptography · Reverse Eng.',
    bio: 'Breaks ciphers and reverse engineers binaries with surgical precision.',
    skills: ['RSA', 'AES', 'Ghidra', 'IDA Pro'],
    color: 'var(--green)',
    avatar: 'CM',
  },
  {
    name: 'N3tw0rk_Ninja',
    role: 'Network Hacking · OSINT',
    bio: 'Packet sniffer. Traffic analyst. Leaves no trace on the network.',
    skills: ['Wireshark', 'Nmap', 'MitM', 'Pivoting'],
    color: 'var(--cyan)',
    avatar: 'NN',
  },
  {
    name: 'Forensik',
    role: 'Digital Forensics · Malware',
    bio: 'Recovers the unrecoverable. Analyzes malware samples and memory dumps.',
    skills: ['Volatility', 'Autopsy', 'Yara', 'Binwalk'],
    color: 'var(--green)',
    avatar: 'FK',
  },
  {
    name: 'Sh4d0w_OSINT',
    role: 'OSINT · Social Engineering',
    bio: 'Finds anything about anyone from publicly available information. Legally.',
    skills: ['Maltego', 'Shodan', 'WHOIS', 'Recon-ng'],
    color: 'var(--cyan)',
    avatar: 'SO',
  },
]

export default function Team() {
  return (
    <section id="team" style={{ position: 'relative', zIndex: 1, background: 'var(--surface)' }}>
      <div className="section">
        <p className="section-title"><span>#</span> The Team</p>
        <hr className="section-divider" />
        <div className="team-grid">
          {members.map(m => (
            <div className="member-card" key={m.name} style={{ '--accent': m.color }}>
              <div className="member-avatar" style={{ background: m.color + '22', color: m.color }}>
                {m.avatar}
              </div>
              <div className="member-info">
                <h3 className="member-name">{m.name}</h3>
                <p className="member-role">{m.role}</p>
                <p className="member-bio">{m.bio}</p>
                <div className="member-skills">
                  {m.skills.map(s => <span key={s} className="m-skill">{s}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
