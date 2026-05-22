import { useState } from 'react'
import { useScrollRevealAll } from '../hooks/useScrollReveal'
import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'

const categories = ['All', 'E-commerce', 'Education', 'Consulting']

export default function Projects() {
  useScrollRevealAll()
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="py-24 dot-grid relative overflow-hidden">
        <div className="orb w-96 h-96 bg-cyan-600/10 -top-20 right-0" />
        <div className="max-w-6xl mx-auto px-6">
          <p className="section-tag reveal">Portfolio</p>
          <h1 className="section-heading text-white mt-2 reveal delay-100">
            Live Projects &{' '}
            <span className="gradient-text">Case Studies</span>
          </h1>
          <p className="text-[#8899BB] mt-4 max-w-xl reveal delay-200">
            Real businesses, real outcomes. Every project below is live, built with production-grade architecture, and used by real customers daily.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mt-10">
            {[
              { value: '3', label: 'Live Projects' },
              { value: '2,000+', label: 'End Users' },
              { value: '3', label: 'Tech Stacks' },
              { value: '100%', label: 'Client Satisfaction' },
            ].map(({ value, label }, i) => (
              <div key={label} className="reveal" style={{ transitionDelay: `${0.2 + i * 0.1}s` }}>
                <div className="text-3xl font-black gradient-text">{value}</div>
                <div className="text-[#8899BB] text-xs mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 mb-10 reveal">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-200 ${
                  active === cat
                    ? 'bg-indigo-500/20 border-indigo-500/50 text-indigo-300'
                    : 'border-white/8 text-[#8899BB] hover:text-white hover:border-white/20 bg-transparent'
                }`}
              >
                {cat}
                <span className="ml-2 text-xs opacity-60">
                  {cat === 'All' ? projects.length : projects.filter((p) => p.category === cat).length}
                </span>
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {filtered.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-[#8899BB]">
              No projects in this category yet.
            </div>
          )}
        </div>
      </section>

      {/* Tech summary */}
      <section className="py-20 bg-[#060C18]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="section-tag reveal">Across All Projects</p>
            <h2 className="section-heading text-white mt-2 reveal delay-100">Technologies Used</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {['React', 'Supabase', 'Razorpay', 'Resend', 'WordPress', 'Tailwind CSS', 'PHP', 'PostgreSQL', 'Delhivery API', 'Custom CSS', 'SEO', 'Node.js'].map((t, i) => (
              <span key={t} className="tech-badge reveal" style={{ transitionDelay: `${i * 0.05}s` }}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
