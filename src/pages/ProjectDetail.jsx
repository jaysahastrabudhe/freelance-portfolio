import { useEffect } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import {
  ArrowLeft, ExternalLink, CheckCircle2, ArrowRight,
} from 'lucide-react'
import { projects } from '../data/projects'
import { useScrollRevealAll } from '../hooks/useScrollReveal'

export default function ProjectDetail() {
  useScrollRevealAll()
  const { id } = useParams()
  const project = projects.find((p) => p.id === id)

  useEffect(() => { window.scrollTo(0, 0) }, [id])

  if (!project) return <Navigate to="/projects" replace />

  const {
    title, subtitle, tagline, category, year, url,
    accent, gradientFrom, gradientTo,
    tech, overview, challenge, solution, features, metrics,
  } = project

  const others = projects.filter((p) => p.id !== id)

  return (
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <section className="py-20 relative overflow-hidden dot-grid">
        <div
          className="orb w-96 h-96 opacity-20 -top-20 -right-20"
          style={{ background: `radial-gradient(circle, ${accent}, transparent)` }}
        />
        <div className="max-w-6xl mx-auto px-6">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-[#8899BB] hover:text-white text-sm transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Projects
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span
              className="text-xs font-bold px-3 py-1.5 rounded-full"
              style={{ background: `${accent}18`, color: accent }}
            >
              {category}
            </span>
            <span className="text-xs text-[#8899BB]">{year}</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-black text-white leading-tight tracking-tight reveal">
            {title}
          </h1>
          <p className="text-xl text-[#8899BB] mt-3 reveal delay-100">{subtitle}</p>

          {/* Tagline */}
          <div
            className="mt-6 inline-block px-4 py-2 rounded-xl text-sm font-semibold italic reveal delay-200"
            style={{ background: `${accent}10`, color: accent, border: `1px solid ${accent}25` }}
          >
            "{tagline}"
          </div>

          {/* Mock browser */}
          <div className="mt-10 rounded-2xl overflow-hidden border border-white/8 bg-[#060C18] reveal delay-300">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-[#0B1120]">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                <div className="w-3 h-3 rounded-full bg-[#28C840]" />
              </div>
              <div className="flex-1 bg-white/5 rounded text-xs text-[#8899BB] px-3 py-1 font-mono truncate ml-2">
                {url}
              </div>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8899BB] hover:text-white transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
            <div
              className="h-52 flex items-center justify-center relative overflow-hidden"
              style={{
                background: `linear-gradient(135deg, ${gradientFrom}10 0%, ${gradientTo}18 100%)`,
              }}
            >
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `linear-gradient(${accent}06 1px, transparent 1px), linear-gradient(90deg, ${accent}06 1px, transparent 1px)`,
                  backgroundSize: '28px 28px',
                }}
              />
              <div className="relative text-center">
                <div
                  className="w-20 h-20 rounded-2xl mx-auto flex items-center justify-center text-3xl font-black text-white mb-3 shadow-xl"
                  style={{ background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})` }}
                >
                  {title.charAt(0)}
                </div>
                <p className="text-white font-semibold">{title}</p>
                <p className="text-[#8899BB] text-sm">{url.replace('https://', '')}</p>
              </div>
            </div>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-3 gap-4 mt-6">
            {metrics.map(({ label, value }) => (
              <div
                key={label}
                className="glass-card rounded-2xl p-5 text-center reveal"
              >
                <div className="text-2xl font-black" style={{ color: accent }}>{value}</div>
                <div className="text-[#8899BB] text-xs mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 space-y-16">
          {/* Overview */}
          <div className="reveal">
            <h2 className="text-white font-bold text-2xl mb-4">Project Overview</h2>
            <p className="text-[#8899BB] leading-relaxed">{overview}</p>
          </div>

          {/* Challenge + Solution */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card rounded-2xl p-6 reveal">
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-4">
                <span className="text-amber-400 text-lg">⚡</span>
              </div>
              <h3 className="text-white font-bold mb-3">The Challenge</h3>
              <p className="text-[#8899BB] text-sm leading-relaxed">{challenge}</p>
            </div>
            <div className="glass-card rounded-2xl p-6 reveal delay-100">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4">
                <span className="text-emerald-400 text-lg">✓</span>
              </div>
              <h3 className="text-white font-bold mb-3">The Solution</h3>
              <p className="text-[#8899BB] text-sm leading-relaxed">{solution}</p>
            </div>
          </div>

          {/* Features */}
          <div className="reveal">
            <h2 className="text-white font-bold text-2xl mb-6">Key Features Delivered</h2>
            <ul className="grid sm:grid-cols-2 gap-3">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: accent }} />
                  <span className="text-[#CBD5E1] text-sm leading-relaxed">{f}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech stack */}
          <div className="reveal">
            <h2 className="text-white font-bold text-2xl mb-4">Technologies Used</h2>
            <div className="flex flex-wrap gap-2">
              {tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1.5 rounded-full text-sm font-semibold border"
                  style={{ background: `${accent}12`, borderColor: `${accent}30`, color: accent }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Live link */}
          <div className="glass-card rounded-2xl p-8 text-center reveal">
            <h3 className="text-white font-bold text-xl mb-2">See It Live</h3>
            <p className="text-[#8899BB] text-sm mb-6">This project is live and in production.</p>
            <a href={url} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Visit {title} <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Other projects */}
      {others.length > 0 && (
        <section className="py-20 bg-[#060C18]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-white font-bold text-2xl reveal">Other Projects</h2>
              <Link to="/projects" className="text-indigo-400 text-sm hover:text-indigo-300 transition-colors flex items-center gap-1">
                All Projects <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {others.map((p, i) => {
                const { id: pid, title: pt, subtitle: ps, category: pc, accent: pa, gradientFrom: pf, gradientTo: pto, url: pu } = p
                return (
                  <Link
                    key={pid}
                    to={`/projects/${pid}`}
                    className="glass-card rounded-2xl p-6 flex items-center gap-5 reveal group"
                    style={{ transitionDelay: `${i * 0.1}s` }}
                  >
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center text-xl font-black text-white flex-shrink-0"
                      style={{ background: `linear-gradient(135deg, ${pf}, ${pto})` }}
                    >
                      {pt.charAt(0)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-xs font-semibold" style={{ color: pa }}>{pc}</span>
                      <h4 className="text-white font-semibold mt-0.5 truncate group-hover:text-indigo-300 transition-colors">{pt}</h4>
                      <p className="text-[#8899BB] text-xs truncate">{ps}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#8899BB] group-hover:text-indigo-400 transition-colors flex-shrink-0" />
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
