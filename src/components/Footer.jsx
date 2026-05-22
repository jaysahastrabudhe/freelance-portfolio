import { Link } from 'react-router-dom'
import { Github, Linkedin, Mail, Code2, ArrowUpRight } from 'lucide-react'

const nav = [
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/services', label: 'Services' },
  { to: '/contact', label: 'Contact' },
]

const socials = [
  { href: 'https://www.linkedin.com/in/jaysahastrabudhe/', icon: Linkedin, label: 'LinkedIn' },
  { href: 'mailto:hello@jaysahastrabudhe.dev', icon: Mail, label: 'Email' },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#030712]">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-400 flex items-center justify-center">
                <Code2 className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-white">Jay<span className="gradient-text">Dev</span></span>
            </Link>
            <p className="text-[#8899BB] text-sm leading-relaxed max-w-xs">
              Freelance web developer based in Dharwad, Karnataka. Building fast, modern web experiences for businesses across India.
            </p>
            <div className="flex items-center gap-3 mt-6">
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
            <h3 className="text-white font-semibold text-sm mb-4">Navigation</h3>
            <ul className="space-y-3">
              {nav.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-[#8899BB] hover:text-white text-sm transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Live Projects */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Live Projects</h3>
            <ul className="space-y-3">
              {[
                { label: 'Jay Defence Academy', url: 'https://www.jaydefenceacademy.com' },
                { label: 'JawanDrop', url: 'https://jawandrop.in' },
                { label: 'BLiive', url: 'https://darkred-leopard-153534.hostingersite.com' },
              ].map(({ label, url }) => (
                <li key={label}>
                  <a
                    href={url}
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
            © {new Date().getFullYear()} Jay Sahastrabudhe. All rights reserved.
          </p>
          <p className="text-[#8899BB] text-xs">
            Built with React + Vite + Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
