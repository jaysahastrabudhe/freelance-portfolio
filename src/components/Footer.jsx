import { Linkedin, Mail, ArrowUpRight } from 'lucide-react'

const nav = [
  { id: 'services', label: 'Services' },
  { id: 'work',     label: 'Work' },
  { id: 'team',     label: 'Team' },
  { id: 'connect',  label: 'Connect' },
]

const collective = [
  { label: 'Jay Sahastrabudhe', href: 'https://www.linkedin.com/in/jaysahastrabudhe/' },
  { label: 'Priyanka Bhalekar', href: 'https://www.linkedin.com/in/priyanka-b-794a86167' },
]

const socials = [
  { href: 'https://www.linkedin.com/in/jaysahastrabudhe/', icon: Linkedin, label: 'LinkedIn' },
  { href: 'mailto:jay@scrpt.in', icon: Mail, label: 'Email' },
]

export default function Footer() {
  const go = (id) => (e) => {
    e.preventDefault()
    if (id === 'top') return window.scrollTo({ top: 0, behavior: 'smooth' })
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-white/5 bg-[#030712]">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Brand */}
          <div>
            <a href="#top" onClick={go('top')} className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-black text-white"
                style={{ background: 'linear-gradient(135deg,#6366F1,#06B6D4)' }}>
                s.
              </div>
              <span className="font-black text-white text-base tracking-tight">
                scrpt<span style={{ background: 'linear-gradient(135deg,#6366F1,#06B6D4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>.</span>
              </span>
            </a>
            <p className="text-[#8899BB] text-sm leading-relaxed max-w-xs mb-6">
              A remote creatives collective. Performance marketing, content, web development, and brand design — under one roof.
            </p>
            <div className="flex items-center gap-3">
              {socials.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg border border-white/8 flex items-center justify-center text-[#8899BB] hover:text-white hover:border-indigo-500/50 transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Navigate</h3>
            <ul className="space-y-3">
              {nav.map(({ id, label }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={go(id)}
                    className="text-[#8899BB] hover:text-white text-sm transition-colors duration-200"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* The Collective */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">The Collective</h3>
            <ul className="space-y-3">
              {collective.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#8899BB] hover:text-white text-sm transition-colors duration-200 flex items-center gap-1 group"
                  >
                    {label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#8899BB] text-xs">
            © {new Date().getFullYear()} scrpt. All rights reserved.
          </p>
          <p className="text-[#8899BB] text-xs">
            Built with React + Vite + GSAP · Remote-first · Pune, India
          </p>
        </div>
      </div>
    </footer>
  )
}
