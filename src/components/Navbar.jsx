import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { id: 'services', label: 'Services' },
  { id: 'work',     label: 'Work' },
  { id: 'team',     label: 'Team' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('hero')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const ids = ['hero', ...links.map((l) => l.id), 'connect']
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean)
    if (!sections.length) return
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id) })
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    )
    sections.forEach((s) => obs.observe(s))
    return () => obs.disconnect()
  }, [])

  const go = (id) => (e) => {
    e.preventDefault()
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const goTop = (e) => {
    e.preventDefault()
    setOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0E0F11]/90 backdrop-blur-md border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" onClick={goTop} className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-black"
            style={{ background: '#9CFE4F', color: '#0E0F11' }}>
            s.
          </div>
          <span className="font-black text-white tracking-tight text-base">
            scrpt<span style={{ color: '#9CFE4F' }}>.</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {links.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={go(id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  active === id
                    ? 'text-white bg-white/8'
                    : 'text-[#9CA3AF] hover:text-white hover:bg-white/5'
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <a
            href="#connect"
            onClick={go('connect')}
            className="hidden md:inline-flex btn-primary text-sm py-2 px-4"
          >
            Work with us
          </a>
          <button
            className="md:hidden text-[#9CA3AF] hover:text-white transition-colors"
            onClick={() => setOpen((p) => !p)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#0E0F11]/95 backdrop-blur-md border-b border-white/5 px-6 pb-6 pt-2">
          <ul className="flex flex-col gap-1">
            {links.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={go(id)}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    active === id
                      ? 'text-white bg-white/8'
                      : 'text-[#9CA3AF] hover:text-white hover:bg-white/5'
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#connect" onClick={go('connect')}
            className="mt-4 btn-primary w-full justify-center text-sm">
            Work with us
          </a>
        </div>
      )}
    </header>
  )
}
