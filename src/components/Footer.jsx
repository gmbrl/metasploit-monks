import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="footer-brand">
          <span className="fb-bracket">[</span>
          Metasploit<span>Monks</span>
          <span className="fb-bracket">]</span>
        </p>
        <p className="footer-copy">
          © {new Date().getFullYear()} Metasploit Monks · All Rights Reserved
        </p>
        <p className="footer-motto">
          <code>{'// Hack Ethically. Protect Fiercely. Compete Relentlessly.'}</code>
        </p>
      </div>
    </footer>
  )
}
