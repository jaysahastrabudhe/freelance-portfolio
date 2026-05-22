import { Link } from 'react-router-dom'
import { ArrowRight, Code2, ShoppingCart, Globe, Database, Mail, Palette, CheckCircle2 } from 'lucide-react'
import { services } from '../data/projects'
import { useScrollRevealAll } from '../hooks/useScrollReveal'

const serviceIcons = { Code2, ShoppingCart, Globe, Database, Mail, Palette }

const detailedServices = [
  {
    icon: 'Code2',
    title: 'Custom React Development',
    price: 'From ₹15,000',
    desc: 'High-performance single-page and full-stack applications built with React 18 and Vite. Ideal for SaaS products, dashboards, and complex web apps.',
    includes: [
      'React 18 + Vite setup with optimal build config',
      'Component library and design system',
      'Routing, state management, and API integration',
      'Supabase or REST API backend connection',
      'Vercel deployment and CI/CD setup',
      'Full source code handover',
    ],
    accent: '#818CF8',
  },
  {
    icon: 'ShoppingCart',
    title: 'E-commerce Store',
    price: 'From ₹25,000',
    desc: 'End-to-end online stores with live payment gateways, inventory management, shipping integration, and transactional email flows.',
    includes: [
      'Product catalog with variants (size, color, etc.)',
      'Razorpay or Stripe payment integration',
      'Real-time inventory via Supabase',
      'Shipping API integration (Delhivery, BlueDart)',
      'Order management and email notifications via Resend',
      'Admin panel for product/order management',
    ],
    accent: '#10B981',
  },
  {
    icon: 'Globe',
    title: 'WordPress Development',
    price: 'From ₹10,000',
    desc: 'Custom WordPress sites and themes for institutions, businesses, and service providers. Fast, SEO-ready, and easy for clients to manage.',
    includes: [
      'Custom WordPress theme or child theme',
      'Page builder integration (Elementor / ACF)',
      'On-page SEO and sitemap setup',
      'Contact forms with email notifications',
      'Mobile-responsive layout',
      'Performance optimization (90+ Lighthouse)',
    ],
    accent: '#3B82F6',
  },
  {
    icon: 'Database',
    title: 'Supabase Backend',
    price: 'From ₹8,000',
    desc: 'PostgreSQL-powered backends with auth, row-level security, real-time subscriptions, and serverless edge functions.',
    includes: [
      'Database schema design and migrations',
      'Row-level security policies',
      'Auth (email/password, OAuth, magic link)',
      'Real-time subscriptions',
      'Edge functions for custom business logic',
      'Storage buckets for file uploads',
    ],
    accent: '#3ECF8E',
  },
  {
    icon: 'Mail',
    title: 'Email Infrastructure',
    price: 'From ₹5,000',
    desc: 'Beautiful, deliverable transactional and marketing emails using Resend and React Email. Set up once, runs forever.',
    includes: [
      'Resend account setup and domain verification',
      'React Email templates (order, welcome, reset)',
      'Transactional flow integration with your app',
      'Webhook-driven triggers',
      'Newsletter and marketing sequences',
      'Spam score testing and deliverability optimization',
    ],
    accent: '#F97316',
  },
  {
    icon: 'Palette',
    title: 'UI/UX & Consulting',
    price: 'From ₹5,000',
    desc: 'Figma wireframes, design system creation, or a technical audit of your existing site. Also available for ongoing consulting retainers.',
    includes: [
      'Figma wireframes and prototype',
      'Mobile-first responsive design',
      'Design token system (colors, spacing, typography)',
      'Accessibility review (WCAG 2.1)',
      'Performance and SEO audit',
      'Technical consulting and code review',
    ],
    accent: '#EC4899',
  },
]

const process = [
  { step: '01', title: 'Discovery Call', desc: 'We discuss your goals, audience, and requirements. I\'ll ask the right questions to understand what success looks like for your project.' },
  { step: '02', title: 'Proposal & Scope', desc: 'I send a detailed proposal with scope, timeline, and pricing. No vague estimates — everything is itemized and agreed upfront.' },
  { step: '03', title: 'Design & Build', desc: 'Regular check-ins and staging previews throughout. You see progress, not surprises. Feedback cycles are fast.' },
  { step: '04', title: 'Launch & Handover', desc: 'Full deployment, domain setup, and documentation. You get source code, credentials, and a walkthrough so you own your project completely.' },
]

export default function Services() {
  useScrollRevealAll()

  return (
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <section className="py-24 dot-grid relative overflow-hidden">
        <div className="orb w-80 h-80 bg-indigo-600/15 top-0 left-0" />
        <div className="max-w-6xl mx-auto px-6">
          <p className="section-tag reveal">Services</p>
          <h1 className="section-heading text-white mt-2 reveal delay-100">
            What I Build For You
          </h1>
          <p className="text-[#8899BB] mt-4 max-w-xl text-lg reveal delay-200">
            From a single landing page to a full e-commerce platform — I handle the complete stack so you don't have to.
          </p>
          <div className="flex flex-wrap gap-3 mt-8 reveal delay-300">
            <Link to="/contact" className="btn-primary">
              Get a Quote <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/projects" className="btn-secondary">
              See Past Work
            </Link>
          </div>
        </div>
      </section>

      {/* ── Starter Package ── */}
      <section className="py-16 bg-[#060C18]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-8">
            <p className="section-tag reveal">Introductory Offer</p>
            <h2 className="section-heading text-white mt-2 reveal delay-100">Getting Started Has Never Been Easier</h2>
          </div>
          <div className="relative glass-card rounded-3xl p-8 md:p-10 border border-cyan-500/30 bg-gradient-to-br from-cyan-500/5 to-indigo-500/5 overflow-hidden reveal">
            {/* Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative grid md:grid-cols-2 gap-8 items-center">
              {/* Left */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-cyan-500/15 text-cyan-400 border border-cyan-500/25 tracking-wide">
                    ⭐ INTRODUCTORY PRICE
                  </span>
                  <span className="text-xs text-[#8899BB]">Limited offer for new clients</span>
                </div>
                <h3 className="text-white font-black text-2xl md:text-3xl leading-tight">
                  3-Page Website<br />
                  <span className="gradient-text">Non E-commerce</span>
                </h3>
                <p className="text-[#8899BB] mt-3 leading-relaxed">
                  Home, About & Contact — everything a local business, freelancer, or professional needs to establish a polished web presence. Mobile-first, fast, and built to last.
                </p>
                <ul className="grid sm:grid-cols-2 gap-2 mt-5">
                  {[
                    'Home page — hero, services & CTA',
                    'About page with your story',
                    'Contact page with form',
                    'Mobile responsive & fast',
                    'WhatsApp chat button',
                    'Delivered in 1 week',
                    'Free domain advice',
                    '30-day post-launch support',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-[#CBD5E1]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              {/* Right */}
              <div className="text-center md:text-right flex flex-col items-center md:items-end gap-5">
                <div>
                  <div className="text-6xl font-black" style={{ background: 'linear-gradient(135deg, #22D3EE, #818CF8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                    ₹5,000
                  </div>
                  <div className="text-[#8899BB] text-sm mt-1">one-time · no hidden fees</div>
                </div>
                <Link to="/contact" className="btn-primary whitespace-nowrap">
                  Claim This Offer <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/samples" className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                  See sample designs first →
                </Link>
                <div className="text-xs text-[#8899BB] max-w-[220px]">
                  Want e-commerce or more pages? Let's talk — custom quotes available.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed services */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-10">
            <p className="section-tag reveal">Full Service Menu</p>
            <h2 className="section-heading text-white mt-2 reveal delay-100">All Services & Pricing</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {detailedServices.map((s, i) => {
              const Icon = serviceIcons[s.icon]
              return (
                <div
                  key={s.title}
                  className="glass-card rounded-2xl p-7 reveal"
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  <div className="flex items-start justify-between mb-5">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center"
                      style={{ background: `${s.accent}15`, border: `1px solid ${s.accent}25` }}
                    >
                      <Icon className="w-5 h-5" style={{ color: s.accent }} />
                    </div>
                    <span
                      className="text-xs font-bold px-3 py-1.5 rounded-full"
                      style={{ background: `${s.accent}12`, color: s.accent, border: `1px solid ${s.accent}25` }}
                    >
                      {s.price}
                    </span>
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">{s.title}</h3>
                  <p className="text-[#8899BB] text-sm leading-relaxed mb-5">{s.desc}</p>
                  <ul className="space-y-2">
                    {s.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm">
                        <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: s.accent }} />
                        <span className="text-[#CBD5E1]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-[#060C18]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="section-tag reveal">My Process</p>
            <h2 className="section-heading text-white mt-2 reveal delay-100">How We'll Work Together</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {process.map((p, i) => (
              <div
                key={p.step}
                className="glass-card rounded-2xl p-6 reveal"
                style={{ transitionDelay: `${i * 0.12}s` }}
              >
                <div className="text-4xl font-black gradient-text mb-4">{p.step}</div>
                <h3 className="text-white font-semibold mb-2">{p.title}</h3>
                <p className="text-[#8899BB] text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="section-tag reveal">FAQ</p>
            <h2 className="section-heading text-white mt-2 reveal delay-100">Common Questions</h2>
          </div>
          <div className="space-y-4">
            {[
              {
                q: 'Do you work with clients outside Dharwad?',
                a: 'Absolutely. I work remotely with clients across India. All communication happens over WhatsApp, email, or video call.',
              },
              {
                q: 'What\'s included after the project launches?',
                a: 'You get full source code, deployment access, and a walkthrough. I also offer 30 days of post-launch support for bug fixes.',
              },
              {
                q: 'How long does a typical project take?',
                a: 'A landing page or WordPress site typically takes 1–2 weeks. A React + Supabase app or e-commerce store takes 3–6 weeks depending on complexity.',
              },
              {
                q: 'Do you offer payment plans?',
                a: 'Yes. Most projects are split 50% upfront and 50% on delivery. For larger projects, milestone-based payments can be arranged.',
              },
              {
                q: 'Can you work with an existing codebase?',
                a: 'Yes. I\'m comfortable jumping into existing projects for feature additions, refactors, or performance improvements.',
              },
            ].map(({ q, a }, i) => (
              <div
                key={q}
                className="glass-card rounded-2xl p-6 reveal"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <h3 className="text-white font-semibold mb-2">{q}</h3>
                <p className="text-[#8899BB] text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#060C18]">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="section-heading text-white reveal">
            Let's start building
          </h2>
          <p className="text-[#8899BB] mt-4 reveal delay-100">
            Tell me about your project and I'll send a tailored proposal within 24 hours.
          </p>
          <div className="mt-8 reveal delay-200">
            <Link to="/contact" className="btn-primary">
              Contact Me <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
