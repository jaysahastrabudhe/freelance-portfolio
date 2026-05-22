import { Link } from 'react-router-dom'
import { ArrowUpRight, ExternalLink } from 'lucide-react'

export default function ProjectCard({ project, index = 0 }) {
  const { id, title, subtitle, category, year, accent, gradientFrom, gradientTo, tech, shortDesc, url } = project

  return (
    <div
      className="glass-card rounded-2xl overflow-hidden reveal"
      style={{ transitionDelay: `${index * 0.12}s` }}
    >
      {/* Top color band */}
      <div
        className="h-1.5 w-full"
        style={{ background: `linear-gradient(90deg, ${gradientFrom}, ${gradientTo})` }}
      />

      {/* Mock browser window */}
      <div className="relative bg-[#060C18] mx-4 mt-4 rounded-xl overflow-hidden border border-white/5" style={{ height: '180px' }}>
        {/* Browser chrome */}
        <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/5 bg-[#0B1120]">
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
          <div className="ml-2 flex-1 bg-white/5 rounded text-[10px] text-[#8899BB] px-2 py-0.5 font-mono truncate">
            {url.replace('https://', '')}
          </div>
        </div>
        {/* Content placeholder */}
        <div className="absolute inset-0 top-9 flex items-center justify-center">
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold text-white"
            style={{ background: `linear-gradient(135deg, ${gradientFrom}22, ${gradientTo}44)`, border: `1px solid ${accent}33` }}
          >
            {title.charAt(0)}
          </div>
        </div>
        {/* Decorative grid lines */}
        <div className="absolute inset-0 top-9"
          style={{
            backgroundImage: `linear-gradient(${accent}08 1px, transparent 1px), linear-gradient(90deg, ${accent}08 1px, transparent 1px)`,
            backgroundSize: '24px 24px',
          }}
        />
      </div>

      {/* Card body */}
      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <span
            className="text-xs font-semibold px-2.5 py-1 rounded-full"
            style={{ background: `${accent}18`, color: accent }}
          >
            {category}
          </span>
          <span className="text-xs text-[#8899BB]">{year}</span>
        </div>

        <h3 className="text-white font-bold text-lg leading-tight mt-3">{title}</h3>
        <p className="text-[#8899BB] text-sm mt-1 leading-relaxed line-clamp-2">{shortDesc}</p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mt-4">
          {tech.slice(0, 4).map((t) => (
            <span key={t} className="tech-badge">{t}</span>
          ))}
          {tech.length > 4 && (
            <span className="tech-badge">+{tech.length - 4}</span>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 mt-5 pt-4 border-t border-white/5">
          <Link
            to={`/projects/${id}`}
            className="flex items-center gap-1.5 text-sm font-semibold text-white hover:text-indigo-400 transition-colors"
          >
            Case Study <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto flex items-center gap-1.5 text-sm text-[#8899BB] hover:text-white transition-colors"
          >
            Live Site <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  )
}
