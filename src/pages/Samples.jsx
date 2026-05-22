import { Link } from 'react-router-dom'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { samples } from '../data/samples'
import { useScrollRevealAll } from '../hooks/useScrollReveal'

export default function Samples() {
  useScrollRevealAll()

  return (
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <section className="py-24 dot-grid relative overflow-hidden">
        <div className="orb w-96 h-96 bg-indigo-600/15 -top-20 right-0" />
        <div className="max-w-6xl mx-auto px-6">
          <p className="section-tag reveal">Sample Designs</p>
          <h1 className="section-heading text-white mt-2 reveal delay-100">
            See What Your Industry<br />
            <span className="gradient-text">Could Look Like</span>
          </h1>
          <p className="text-[#8899BB] mt-4 max-w-xl text-lg reveal delay-200">
            Six live demos across popular industries — real design, real content, zero stock photos. Click any to see the full one-page website.
          </p>
          <div className="flex flex-wrap gap-3 mt-8 reveal delay-300">
            <Link to="/contact" className="btn-primary">
              Start My Website <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/services" className="btn-secondary">
              View Pricing
            </Link>
          </div>

          {/* Pricing callout */}
          <div className="mt-10 inline-flex items-center gap-3 px-5 py-3 rounded-2xl border border-cyan-500/30 bg-cyan-500/5 reveal delay-400">
            <span className="text-2xl">⭐</span>
            <div>
              <span className="text-white font-bold">Introductory offer:</span>
              <span className="text-[#8899BB]"> 3-page non-ecom website from </span>
              <span className="text-cyan-400 font-black">₹5,000</span>
            </div>
          </div>
        </div>
      </section>

      {/* Sample grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {samples.map((s, i) => (
              <Link
                key={s.id}
                to={`/samples/${s.id}`}
                className="glass-card rounded-2xl overflow-hidden group reveal"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                {/* Gradient preview banner */}
                <div
                  className="h-44 relative flex flex-col items-center justify-center text-white"
                  style={{ background: s.bgGradient }}
                >
                  {/* Dot grid overlay */}
                  <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                  <span className="text-5xl mb-2 relative">{s.emoji}</span>
                  <span className="font-bold text-lg relative">{s.businessName}</span>
                  <span className="text-xs opacity-80 relative mt-0.5">{s.tagline.split(',')[0]}</span>
                  <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm rounded-full px-2.5 py-0.5 text-xs font-semibold">
                    {s.industry}
                  </div>
                </div>

                {/* Card body */}
                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <h3 className="text-white font-bold">{s.businessName}</h3>
                    <ExternalLink className="w-4 h-4 text-[#8899BB] group-hover:text-indigo-400 transition-colors" />
                  </div>
                  <p className="text-[#8899BB] text-sm mt-1 line-clamp-2">{s.subheadline}</p>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {s.services.map((sv) => (
                      <span key={sv.title} className="tech-badge">{sv.title}</span>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
                    <span className="text-indigo-400 text-sm font-semibold group-hover:text-indigo-300 transition-colors">
                      View Live Demo →
                    </span>
                    <span className="text-xs text-[#8899BB]">from ₹5,000</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-[#060C18]">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="section-heading text-white reveal">
            Don't see your industry?
          </h2>
          <p className="text-[#8899BB] mt-4 reveal delay-100">
            I build websites for any business. Tell me what you need and I'll show you what's possible.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4 reveal delay-200">
            <Link to="/contact" className="btn-primary">
              Get a Custom Quote <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/projects" className="btn-secondary">
              See Live Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
