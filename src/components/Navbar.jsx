import { useState, useEffect } from 'react'
import './Navbar.css'

const links = ['Home', 'About', 'Skills', 'Team', 'Achievements', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-brand" onClick={() => scrollTo('home')}>
        <span className="brand-bracket">[</span>
        <span className="brand-name">Metasploit<span>Monks</span></span>
        <span className="brand-bracket">]</span>
      </div>

      <button className={`nav-toggle ${open ? 'open' : ''}`} onClick={() => setOpen(!open)}>
        <span /><span /><span />
      </button>

      <ul className={`nav-links ${open ? 'open' : ''}`}>
        {links.map(link => (
          <li key={link}>
            <button onClick={() => scrollTo(link)}>
              <span className="link-prefix">~/</span>{link}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
