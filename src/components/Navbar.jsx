import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/samples', label: 'Samples' },
  { to: '/services', label: 'Services' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [location])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#030712]/90 backdrop-blur-md border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-black text-white"
            style={{ background: 'linear-gradient(135deg,#6366F1,#06B6D4)' }}>
            JS
          </div>
          <span className="font-bold text-white tracking-tight text-sm">
            Jay <span className="gradient-text">Sahastrabudhe</span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {links.map(({ to, label }) => {
            const active = location.pathname === to
            return (
              <li key={to}>
                <Link
                  to={to}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    active
                      ? 'text-white bg-white/8'
                      : 'text-[#8899BB] hover:text-white hover:bg-white/5'
                  }`}
                >
                  {label}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <a
            href="https://www.linkedin.com/in/jaysahastrabudhe/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex btn-primary text-sm py-2 px-4"
          >
            Connect
          </a>
          <button
            className="md:hidden text-[#8899BB] hover:text-white transition-colors"
            onClick={() => setOpen((p) => !p)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#030712]/95 backdrop-blur-md border-b border-white/5 px-6 pb-6 pt-2">
          <ul className="flex flex-col gap-1">
            {links.map(({ to, label }) => {
              const active = location.pathname === to
              return (
                <li key={to}>
                  <Link
                    to={to}
                    className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                      active
                        ? 'text-white bg-white/8'
                        : 'text-[#8899BB] hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              )
            })}
          </ul>
          <a href="https://www.linkedin.com/in/jaysahastrabudhe/" target="_blank" rel="noopener noreferrer"
            className="mt-4 btn-primary w-full justify-center text-sm">
            Connect on LinkedIn
          </a>
        </div>
      )}
    </header>
  )
}
