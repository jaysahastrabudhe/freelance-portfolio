import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Code2, Database, Globe, Mail, ShoppingCart, Palette,
  CheckCircle2, ExternalLink, ChevronRight,
} from 'lucide-react'
import { projects, services } from '../data/projects'
import { samples } from '../data/samples'
import ProjectCard from '../components/ProjectCard'
import { useScrollRevealAll } from '../hooks/useScrollReveal'

/* ─── Typing animation for hero code block ─── */
const codeLines = [
  { indent: 0, text: 'const jay = {' },
  { indent: 1, text: "  role: 'Freelance Web Developer'," },
  { indent: 1, text: "  location: 'Dharwad, Karnataka'," },
  { indent: 1, text: '  stack: [' },
  { indent: 2, text: "    'React', 'WordPress'," },
  { indent: 2, text: "    'Supabase', 'Resend'," },
  { indent: 1, text: '  ],' },
  { indent: 1, text: "  available: true, // let's build" },
  { indent: 0, text: '}' },
]

function CodeBlock() {
  const [visibleLines, setVisibleLines] = useState(0)
  useEffect(() => {
    if (visibleLines >= codeLines.length) return
    const t = setTimeout(() => setVisibleLines((v) => v + 1), 120)
    return () => clearTimeout(t)
  }, [visibleLines])

  return (
    <div className="relative rounded-2xl overflow-hidden border border-white/8 bg-[#060C18]">
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-[#0B1120]">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
          <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
          <div className="w-3 h-3 rounded-full bg-[#28C840]" />
        </div>
        <span className="text-[#8899BB] text-xs font-mono ml-2">jay.config.js</span>
      </div>
      {/* Code */}
      <div className="p-5 font-mono text-sm leading-7 min-h-[240px]">
        {codeLines.slice(0, visibleLines).map((line, i) => (
          <div key={i} className="flex">
            <span className="text-[#3D4F6B] select-none w-6 text-right mr-4 text-xs mt-0.5">{i + 1}</span>
            <span>
              {line.text.startsWith('  //') ? (
                <span className="text-[#57A64A]">{line.text}</span>
              ) : line.text.includes("'") ? (
                <span
                  dangerouslySetInnerHTML={{
                    __html: line.text
                      .replace(/const|true/g, (m) => `<span style="color:#818CF8">${m}</span>`)
                      .replace(/'([^']*)'/g, `<span style="color:#22D3EE">'$1'</span>`)
                      .replace(/role|location|stack|available/g, (m) => `<span style="color:#93C5FD">${m}</span>`),
                  }}
                />
              ) : (
                <span style={{ color: line.text.includes('{') || line.text.includes('}') || line.text.includes('[') || line.text.includes(']') ? '#F59E0B' : '#E2E8F0' }}>
                  {line.text}
                </span>
              )}
            </span>
          </div>
        ))}
        {visibleLines < codeLines.length && (
          <div className="flex">
            <span className="text-[#3D4F6B] select-none w-6 text-right mr-4 text-xs mt-0.5">{visibleLines + 1}</span>
            <span className="w-2 h-5 bg-indigo-400 cursor-blink inline-block" />
          </div>
        )}
      </div>
    </div>
  )
}

/* ─── Tech stack badges ─── */
const techStack = [
  { name: 'React', color: '#61DAFB', bg: '#61DAFB18' },
  { name: 'WordPress', color: '#21759B', bg: '#21759B18' },
  { name: 'Supabase', color: '#3ECF8E', bg: '#3ECF8E18' },
  { name: 'Resend', color: '#FF6B35', bg: '#FF6B3518' },
  { name: 'Vite', color: '#BD34FE', bg: '#BD34FE18' },
  { name: 'Tailwind CSS', color: '#06B6D4', bg: '#06B6D418' },
  { name: 'PostgreSQL', color: '#336791', bg: '#33679118' },
  { name: 'Node.js', color: '#68A063', bg: '#68A06318' },
  { name: 'Razorpay', color: '#02A0F5', bg: '#02A0F518' },
  { name: 'PHP', color: '#777BB4', bg: '#777BB418' },
  { name: 'Git', color: '#F05032', bg: '#F0503218' },
  { name: 'Figma', color: '#F24E1E', bg: '#F24E1E18' },
]

const serviceIcons = { Code2, ShoppingCart, Globe, Database, Mail, Palette }

export default function Home() {
  useScrollRevealAll()

  return (
    <div className="min-h-screen">
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center dot-grid">
        {/* Orbs */}
        <div className="orb w-96 h-96 bg-indigo-600/20 -top-20 -left-20" />
        <div className="orb w-72 h-72 bg-cyan-500/15 top-1/3 right-10" />

        <div className="max-w-6xl mx-auto px-6 pt-24 pb-16 grid md:grid-cols-2 gap-12 items-center w-full">
          {/* Left */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/8">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-emerald-400 text-xs font-semibold tracking-wide">Available for Projects</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-black leading-[1.08] tracking-tight text-white">
              Building{' '}
              <span className="gradient-text">Digital Experiences</span>{' '}
              That Convert
            </h1>

            <p className="text-[#8899BB] text-lg leading-relaxed max-w-md">
              I'm <strong className="text-white">Jay Sahastrabudhe</strong>, a freelance web developer from Dharwad, Karnataka. I build fast, scalable web applications using React, WordPress, Supabase, and Resend.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link to="/projects" className="btn-primary">
                View My Work <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/contact" className="btn-secondary">
                Let's Talk
              </Link>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8 pt-4 border-t border-white/5">
              {[
                { value: '3+', label: 'Live Projects' },
                { value: '2K+', label: 'Users Served' },
                { value: '100%', label: 'On-time Delivery' },
              ].map(({ value, label }) => (
                <div key={label}>
                  <div className="text-2xl font-black gradient-text">{value}</div>
                  <div className="text-[#8899BB] text-xs mt-0.5">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right – animated code */}
          <div className="hidden md:block">
            <CodeBlock />
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <div className="w-px h-10 bg-gradient-to-b from-transparent to-indigo-400 animate-pulse" />
          <span className="text-xs text-[#8899BB] tracking-widest uppercase">Scroll</span>
        </div>
      </section>

      {/* ── TECH STACK ── */}
      <section className="py-20 border-y border-white/5 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-center text-[#8899BB] text-sm mb-8 section-tag reveal">Tech Stack</p>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((t, i) => (
              <span
                key={t.name}
                className="reveal px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-200 hover:scale-105 cursor-default"
                style={{
                  background: t.bg,
                  borderColor: t.color + '33',
                  color: t.color,
                  transitionDelay: `${i * 0.04}s`,
                }}
              >
                {t.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="section-tag reveal">Portfolio</p>
              <h2 className="section-heading text-white mt-2 reveal delay-100">
                Live Projects
              </h2>
              <p className="text-[#8899BB] mt-3 max-w-md reveal delay-200">
                Real businesses, real results. Every project shipped with a live payment gateway, CMS, or full-stack backend.
              </p>
            </div>
            <Link
              to="/projects"
              className="hidden md:flex items-center gap-1.5 text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition-colors reveal"
            >
              All Projects <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} />
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link to="/projects" className="btn-secondary text-sm">
              All Projects <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-24 bg-[#060C18]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-16">
            <p className="section-tag reveal">What I Do</p>
            <h2 className="section-heading text-white mt-2 reveal delay-100">
              Services I Offer
            </h2>
            <p className="text-[#8899BB] mt-3 reveal delay-200">
              End-to-end web development from design to deployment.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => {
              const Icon = serviceIcons[s.icon]
              return (
                <div
                  key={s.title}
                  className="glass-card rounded-2xl p-6 reveal"
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-indigo-400" />
                  </div>
                  <h3 className="font-bold text-white mb-2">{s.title}</h3>
                  <p className="text-[#8899BB] text-sm leading-relaxed mb-4">{s.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {s.tags.map((tag) => (
                      <span key={tag} className="tech-badge">{tag}</span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-12 text-center">
            <Link to="/services" className="btn-secondary reveal">
              See Full Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── ABOUT STRIP ── */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="glass-card rounded-3xl p-8 md:p-12 reveal grid md:grid-cols-2 gap-10 items-center">
            {/* Avatar side */}
            <div className="flex flex-col items-center md:items-start gap-6">
              <div className="relative">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-400 flex items-center justify-center text-3xl font-black text-white shadow-lg shadow-indigo-500/30">
                  JS
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-white font-bold text-xl">Jay Sahastrabudhe</h3>
                <p className="text-[#8899BB] text-sm mt-1">Freelance Web Developer · Dharwad, KA</p>
                <a
                  href="https://www.linkedin.com/in/jaysahastrabudhe/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 mt-3 text-indigo-400 text-sm hover:text-indigo-300 transition-colors"
                >
                  View LinkedIn <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Text side */}
            <div>
              <p className="section-tag mb-2">About</p>
              <h2 className="section-heading text-white">
                Code that ships.<br />Results that matter.
              </h2>
              <p className="text-[#8899BB] mt-4 leading-relaxed">
                I specialize in turning business problems into polished web products — whether that's a defence academy that needs to rank locally, an e-commerce drop store with live payments, or a consulting firm that needs to command authority online.
              </p>
              <p className="text-[#8899BB] mt-3 leading-relaxed">
                Every project I take on is treated as a product, not just a deliverable. I think about conversions, performance, and long-term maintainability from day one.
              </p>
              <div className="mt-6">
                <Link to="/about" className="btn-primary text-sm">
                  More About Me <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SAMPLE DESIGNS ── */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="section-tag reveal">Sample Designs</p>
              <h2 className="section-heading text-white mt-2 reveal delay-100">
                See What I Can Build<br />
                <span className="gradient-text">For Your Industry</span>
              </h2>
              <p className="text-[#8899BB] mt-3 max-w-md reveal delay-200">
                Six live demo websites — restaurant, real estate, fitness, photography, law, and healthcare.
                Starting at <span className="text-cyan-400 font-bold">₹5,000</span> for a 3-page site.
              </p>
            </div>
            <Link
              to="/samples"
              className="hidden md:flex items-center gap-1.5 text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition-colors reveal"
            >
              All Samples <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {samples.slice(0, 3).map((s, i) => (
              <Link
                key={s.id}
                to={`/samples/${s.id}`}
                className="glass-card rounded-2xl overflow-hidden group reveal"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div
                  className="h-32 flex flex-col items-center justify-center text-white relative"
                  style={{ background: s.bgGradient }}
                >
                  <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)', backgroundSize: '18px 18px' }} />
                  <span className="text-4xl mb-1.5 relative">{s.emoji}</span>
                  <span className="font-bold relative text-sm">{s.businessName}</span>
                </div>
                <div className="px-5 py-4">
                  <div className="flex items-center justify-between">
                    <span className="text-white font-semibold text-sm">{s.industry}</span>
                    <span className="text-indigo-400 text-xs font-semibold group-hover:text-indigo-300 transition-colors">View Demo →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
            <Link to="/samples" className="btn-secondary text-sm reveal">
              View All 6 Industry Demos <ChevronRight className="w-4 h-4" />
            </Link>
            <div className="flex items-center gap-2 text-sm reveal delay-100">
              <span className="text-[#8899BB]">3-page non-ecom from</span>
              <span className="text-cyan-400 font-black text-lg">₹5,000</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 bg-[#060C18] relative overflow-hidden">
        <div className="orb w-96 h-96 bg-indigo-600/15 top-0 left-1/2 -translate-x-1/2" />
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <p className="section-tag reveal">Let's Build Together</p>
          <h2 className="section-heading text-white mt-2 reveal delay-100">
            Have a project in mind?
          </h2>
          <p className="text-[#8899BB] mt-4 text-lg reveal delay-200">
            I'm available for freelance projects, partnerships, and consulting. Let's talk about how I can help bring your idea to life.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8 reveal delay-300">
            <Link to="/contact" className="btn-primary">
              Start a Project <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://www.linkedin.com/in/jaysahastrabudhe/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Connect on LinkedIn <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
