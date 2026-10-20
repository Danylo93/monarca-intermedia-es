import { useState, useEffect } from 'react'

const LINKS = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Como Funciona', href: '#como-funciona' },
  { label: 'Contato', href: '#contato' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) window.scrollTo({ top: (el as HTMLElement).offsetTop - 80, behavior: 'smooth' })
  }

  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <div className="container">
        <nav>
          <a href="#inicio" className="logo" onClick={(e) => handleNavClick(e, '#inicio')}>
            <i className="fas fa-crown" aria-hidden />
            MONARCA
          </a>

          <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
            {LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={(e) => handleNavClick(e, l.href)}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            className="mobile-menu-btn"
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <i className={menuOpen ? 'fas fa-times' : 'fas fa-bars'} aria-hidden />
          </button>
        </nav>
      </div>
    </header>
  )
}
