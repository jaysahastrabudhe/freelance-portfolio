import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ExternalLink, CheckCircle2, Zap, Shield, Layers } from 'lucide-react'
import { useScrollRevealAll } from '../hooks/useScrollReveal'

const skills = [
  { category: 'Frontend', items: ['React 18', 'Vite', 'Tailwind CSS', 'JavaScript (ES2024)', 'TypeScript', 'HTML5/CSS3'] },
  { category: 'CMS', items: ['WordPress', 'Custom Themes', 'WooCommerce', 'ACF', 'Elementor', 'PHP'] },
  { category: 'Backend / DB', items: ['Supabase', 'PostgreSQL', 'Row-Level Security', 'Edge Functions', 'REST APIs', 'Node.js'] },
  { category: 'Email & Payments', items: ['Resend', 'React Email', 'Razorpay', 'Stripe', 'Webhooks', 'SMTP'] },
  { category: 'DevOps & Tools', items: ['Git / GitHub', 'Vercel', 'Hostinger', 'Figma', 'Postman', 'VS Code'] },
]

const values = [
  { icon: Zap, title: 'Speed & Performance', desc: 'Every site I build targets sub-2s load times and 90+ Lighthouse scores. Performance is a feature, not a bonus.' },
  { icon: Shield, title: 'Security First', desc: 'RLS policies in Supabase, input sanitization, environment secrets — security is baked in from the first commit.' },
  { icon: Layers, title: 'Maintainability', desc: 'Clean component architecture and clear documentation so you (or the next dev) can make changes with confidence.' },
  { icon: CheckCircle2, title: 'Delivery You Can Count On', desc: 'I communicate proactively, set realistic timelines, and hit them. No ghost clients here.' },
]

const timeline = [
  { year: '2024', event: 'Built JawanDrop — full-stack React + Supabase + Razorpay e-commerce with 2,000+ customers' },
  { year: '2024', event: "Launched BLiive consulting platform for a retired Army Colonel's higher-education firm" },
  { year: '2024', event: 'Developed Jay Defence Academy institutional website — locally SEO-ranked for Dharwad' },
  { year: 'Ongoing', event: 'Taking on freelance projects across e-commerce, SaaS, and institutional web development' },
]

export default function About() {
  useScrollRevealAll()

  return (
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <section className="py-24 dot-grid relative overflow-hidden">
        <div className="orb w-80 h-80 bg-indigo-600/15 top-0 right-0" />
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="section-tag reveal">About Me</p>
            <h1 className="section-heading text-white mt-2 reveal delay-100">
              I build web products<br />that{' '}
              <span className="gradient-text">actually work.</span>
            </h1>
            <p className="text-[#8899BB] mt-5 leading-relaxed reveal delay-200">
              Hi, I'm <strong className="text-white">Jay Sahastrabudhe</strong> — a freelance web developer based in Pune, Maharashtra. I specialize in React, WordPress, Supabase, and Resend, turning ideas into production-ready web applications.
            </p>
            <p className="text-[#8899BB] mt-4 leading-relaxed reveal delay-300">
              My background spans education institutions, e-commerce platforms, and B2B consulting websites. I treat every project as a product: thinking about the end user, conversion goals, and long-term maintainability before writing a single line of code.
            </p>
            <div className="flex flex-wrap gap-3 mt-8 reveal delay-400">
              <Link to="/contact" className="btn-primary">
                Work With Me <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://www.linkedin.com/in/jaysahastrabudhe/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                LinkedIn <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Avatar card */}
          <div className="flex justify-center md:justify-end reveal delay-200">
            <div className="glass-card rounded-3xl p-8 text-center w-full max-w-xs">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-400 flex items-center justify-center text-3xl font-black text-white mx-auto shadow-lg shadow-indigo-500/25 mb-5">
                JS
              </div>
              <h2 className="text-white font-bold text-xl">Jay Sahastrabudhe</h2>
              <p className="text-[#8899BB] text-sm mt-1">Freelance Web Developer</p>
              <div className="mt-4 pt-4 border-t border-white/5 space-y-2 text-sm text-left">
                {[
                  ['📍', 'Pune, Maharashtra'],
                  ['💻', 'React · WordPress · Supabase'],
                  ['✉️', 'Resend · Email Infra'],
                  ['🟢', 'Available for projects'],
                ].map(([emoji, text]) => (
                  <div key={text} className="flex items-center gap-2 text-[#8899BB]">
                    <span>{emoji}</span>
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#060C18]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="section-tag reveal">My Approach</p>
            <h2 className="section-heading text-white mt-2 reveal delay-100">How I Work</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => {
              const Icon = v.icon
              return (
                <div
                  key={v.title}
                  className="glass-card rounded-2xl p-6 reveal"
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  <Icon className="w-6 h-6 text-indigo-400 mb-4" />
                  <h3 className="text-white font-semibold mb-2">{v.title}</h3>
                  <p className="text-[#8899BB] text-sm leading-relaxed">{v.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="section-tag reveal">Technical Skills</p>
            <h2 className="section-heading text-white mt-2 reveal delay-100">Full-Stack Toolkit</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((group, i) => (
              <div
                key={group.category}
                className="glass-card rounded-2xl p-6 reveal"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <h3 className="text-indigo-400 font-semibold text-sm mb-4 section-tag">{group.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="tech-badge">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-[#060C18]">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="section-tag reveal">Journey</p>
            <h2 className="section-heading text-white mt-2 reveal delay-100">Project Timeline</h2>
          </div>
          <div className="space-y-1">
            {timeline.map((item, i) => (
              <div
                key={i}
                className="flex gap-6 reveal"
                style={{ transitionDelay: `${i * 0.12}s` }}
              >
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-indigo-500 mt-1 flex-shrink-0" />
                  {i < timeline.length - 1 && <div className="w-px flex-1 bg-white/8 my-2" />}
                </div>
                <div className="pb-8">
                  <span className="text-indigo-400 text-xs font-bold">{item.year}</span>
                  <p className="text-[#CBD5E1] text-sm mt-1 leading-relaxed">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="section-heading text-white reveal">
            Ready to work together?
          </h2>
          <p className="text-[#8899BB] mt-4 reveal delay-100">
            I'm always open to interesting projects and collaborations.
          </p>
          <div className="mt-8 reveal delay-200">
            <Link to="/contact" className="btn-primary">
              Get In Touch <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
