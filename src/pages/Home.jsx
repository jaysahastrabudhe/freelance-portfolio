import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ExternalLink, ArrowRight, MapPin } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

/* ─────────────────────────── DATA ─────────────────────────── */

const services = [
  {
    number: '01',
    title: 'Performance Marketing',
    desc: 'Meta & Google Ads funnels built for measurable outcomes — awareness to conversion. We live in the data.',
    tags: ['Meta Ads', 'Google Ads', 'CRO', 'Analytics'],
    color: '#6366F1',
  },
  {
    number: '02',
    title: 'Content & Video',
    desc: 'Long-form YouTube, short-form Reels, written content that ranks. Strategy-first, not just aesthetics.',
    tags: ['YouTube', 'Reels', 'SEO Content', 'Scripting'],
    color: '#EC4899',
  },
  {
    number: '03',
    title: 'Web Development',
    desc: 'React apps, WordPress sites, e-commerce stores — shipped end-to-end with design, payments, and deploy.',
    tags: ['React', 'WordPress', 'Supabase', 'Razorpay'],
    color: '#10B981',
  },
  {
    number: '04',
    title: 'Brand & Design',
    desc: 'Visual identity, UI/UX, and communication design that makes your brand impossible to ignore.',
    tags: ['Brand Identity', 'UI/UX', 'Figma', 'Illustration'],
    color: '#F59E0B',
  },
]

const work = [
  {
    title: 'JawanDrop',
    category: 'E-commerce · React',
    desc: 'Tribute apparel brand with live Razorpay payments, real-time Supabase inventory, Pan-India shipping. 2,000+ customers served.',
    url: 'https://jawandrop.in',
    color: '#10B981',
    by: 'Jay',
  },
  {
    title: 'Jay Defence Academy',
    category: 'Institution · WordPress',
    desc: 'Defence exam coaching site for Dharwad. 12+ pages, local SEO, mobile-first. Ranks for defence coaching in North Karnataka.',
    url: 'https://www.jaydefenceacademy.com',
    color: '#F59E0B',
    by: 'Jay',
  },
  {
    title: 'BLiive',
    category: 'Consulting · WordPress',
    desc: "Higher-education transformation platform for a retired Army Colonel's consultancy. 4 service pillars, UGC/NAAC aligned.",
    url: 'https://darkred-leopard-153534.hostingersite.com',
    color: '#8B5CF6',
    by: 'Jay',
  },
  {
    title: "Let's Enterprise",
    category: 'Performance Marketing',
    desc: 'Full Meta Ads funnel for an experiential BBA program in Pune. Awareness → MQL → enrolled student. 6× ROI achieved.',
    url: 'https://www.linkedin.com/in/jaysahastrabudhe/',
    color: '#6366F1',
    by: 'Jay',
  },
  {
    title: 'Rom Guruji',
    category: 'YouTube · Content Strategy',
    desc: '23K subscribers, 15M+ views. Built from zero during lockdown 2020. Strategy, scripting, editing, SEO — all in-house.',
    url: 'https://youtube.com/c/RomGuruji',
    color: '#FF4444',
    by: 'Jay',
  },
  {
    title: 'DataGuru Research Partners',
    category: 'SEO · Content Strategy',
    desc: "Full-scale SEO for a global market research firm — 500+ research report pages optimized, 250+ reports ranking in Google's top 10.",
    url: 'https://www.notion.so/Priyanka-Bhalekar-25bb23cd43cb8008ab88ef7ff05f1c71',
    color: '#EC4899',
    by: 'Priyanka',
  },
  {
    title: 'Pune Real Estate SEO',
    category: 'SEO · Local Search',
    desc: 'End-to-end SEO from scratch — keyword research, on-page, link building. Ranked "Top Builders in Prabhat Road" #1 on Google.',
    url: 'https://www.notion.so/Priyanka-Bhalekar-25bb23cd43cb8008ab88ef7ff05f1c71',
    color: '#06B6D4',
    by: 'Priyanka',
  },
]

const team = [
  {
    name: 'Jay Sahastrabudhe',
    initials: 'JS',
    role: 'Founder · Marketing & Dev',
    location: 'Pune, Maharashtra',
    bio: 'Performance marketer, web developer, and content creator. 6+ years building brands across digital — from Meta Ads funnels to full-stack apps.',
    skills: ['Performance Marketing', 'React / WordPress', 'Content Strategy', 'SEO'],
    linkedin: 'https://www.linkedin.com/in/jaysahastrabudhe/',
    gradFrom: '#6366F1',
    gradTo: '#06B6D4',
  },
  {
    name: 'Priyanka Bhalekar',
    initials: 'PB',
    role: 'Digital Marketing & Web Design',
    location: 'India · Remote',
    bio: '6+ years working with Indian and international clients across digital marketing and web design. From strategy to execution — she owns the full cycle.',
    skills: ['Digital Marketing', 'Web Design', 'SEO', 'Client Management'],
    linkedin: 'https://www.linkedin.com/in/priyanka-b-794a86167',
    gradFrom: '#EC4899',
    gradTo: '#F59E0B',
  },
]

const stats = [
  { end: 23, suffix: 'K+', label: 'YouTube Subscribers' },
  { end: 15, suffix: 'M+', label: 'Total Views' },
  { end: 8, suffix: '+', label: 'Brands Managed' },
  { end: 6, suffix: '×', label: 'ROI on Meta Ads' },
]

const marqueeWords = ['Performance', 'Content', 'Web', 'Brand', 'Strategy', 'Design']

/* ─────────────────────────── HELPERS ─────────────────────────── */

/* Masked line reveal — wraps each headline line in an overflow-hidden strip */
function MaskedLine({ children, className = '' }) {
  return (
    <span className="block overflow-hidden pb-[0.18em] -mb-[0.18em]">
      <span className={`hero-line block will-change-transform ${className}`}>{children}</span>
    </span>
  )
}

const go = (id) => (e) => {
  e.preventDefault()
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

/* ─────────────────────────── COMPONENT ─────────────────────────── */

export default function Home() {
  const containerRef = useRef(null)

  /* Cursor-tracking spotlight on every .spotlight-card (single delegated listener) */
  useEffect(() => {
    const root = containerRef.current
    const onMove = (e) => {
      const card = e.target.closest?.('.spotlight-card')
      if (!card) return
      const r = card.getBoundingClientRect()
      card.style.setProperty('--mx', `${e.clientX - r.left}px`)
      card.style.setProperty('--my', `${e.clientY - r.top}px`)
    }
    root.addEventListener('mousemove', onMove, { passive: true })
    return () => root.removeEventListener('mousemove', onMove)
  }, [])

  /* Hero orbs: mouse parallax (desktop pointers only) */
  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return
    const orbA = containerRef.current.querySelector('.orb-a')
    const orbB = containerRef.current.querySelector('.orb-b')
    if (!orbA || !orbB) return
    const ax = gsap.quickTo(orbA, 'x', { duration: 1.2, ease: 'power3.out' })
    const ay = gsap.quickTo(orbA, 'y', { duration: 1.2, ease: 'power3.out' })
    const bx = gsap.quickTo(orbB, 'x', { duration: 1.6, ease: 'power3.out' })
    const by = gsap.quickTo(orbB, 'y', { duration: 1.6, ease: 'power3.out' })
    const onMouse = (e) => {
      const nx = e.clientX / window.innerWidth - 0.5
      const ny = e.clientY / window.innerHeight - 0.5
      ax(nx * 50); ay(ny * 40)
      bx(nx * -70); by(ny * -50)
    }
    window.addEventListener('mousemove', onMouse, { passive: true })
    return () => window.removeEventListener('mousemove', onMouse)
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {

      /* ── Hero: masked line reveal ── */
      gsap.fromTo('.hero-line',
        { yPercent: 110 },
        { yPercent: 0, stagger: 0.12, duration: 1.2, ease: 'power4.out', delay: 0.15 }
      )

      gsap.from('.hero-eyebrow', { opacity: 0, x: -24, duration: 0.9, ease: 'power3.out', delay: 0.1 })
      gsap.from('.hero-sub',     { opacity: 0, y: 28, duration: 0.9, ease: 'power3.out', delay: 0.75 })
      gsap.from('.hero-ctas',    { opacity: 0, y: 20, duration: 0.8, ease: 'power3.out', delay: 0.95 })
      gsap.from('.hero-badge',   { opacity: 0, y: 16, duration: 0.8, ease: 'power3.out', delay: 1.15 })

      /* ── Hero orbs: scroll drift ── */
      gsap.to('.orb-a', {
        yPercent: 35, ease: 'none',
        scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: 1 },
      })
      gsap.to('.orb-b', {
        yPercent: -28, ease: 'none',
        scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: 1 },
      })

      /* ── Hero content drifts up + fades as you scroll past ── */
      gsap.to('.hero-inner', {
        yPercent: -12, autoAlpha: 0.25, ease: 'none',
        scrollTrigger: { trigger: '#hero', start: '40% top', end: 'bottom top', scrub: true },
      })

      /* ── Magnetic CTAs (desktop only) ── */
      if (window.matchMedia('(pointer: fine)').matches) {
        document.querySelectorAll('.magnetic').forEach((btn) => {
          const xTo = gsap.quickTo(btn, 'x', { duration: 0.4, ease: 'power3.out' })
          const yTo = gsap.quickTo(btn, 'y', { duration: 0.4, ease: 'power3.out' })
          btn.addEventListener('mousemove', (e) => {
            const r = btn.getBoundingClientRect()
            xTo((e.clientX - r.left - r.width / 2) * 0.3)
            yTo((e.clientY - r.top - r.height / 2) * 0.4)
          })
          btn.addEventListener('mouseleave', () => { xTo(0); yTo(0) })
        })
      }

      /* ── Stats: count up ── */
      document.querySelectorAll('[data-count]').forEach((el) => {
        const end = parseFloat(el.dataset.count)
        const suffix = el.dataset.suffix || ''
        const obj = { v: 0 }
        gsap.to(obj, {
          v: end, duration: 1.8, ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' },
          onUpdate() { el.textContent = Math.round(obj.v) + suffix },
        })
      })
      gsap.from('.stat-item', {
        opacity: 0, y: 30, stagger: 0.1, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: '.stats-strip', start: 'top 85%', toggleActions: 'play none none none' },
      })

      /* ── Section headings: masked line reveal on scroll ── */
      gsap.utils.toArray('.section-reveal').forEach((el) => {
        const lines = el.querySelectorAll('.reveal-line')
        const rest = el.querySelectorAll('.reveal-rest')
        const tl = gsap.timeline({
          scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' },
        })
        if (lines.length) {
          tl.fromTo(lines, { yPercent: 110 }, { yPercent: 0, stagger: 0.1, duration: 1.0, ease: 'power4.out' })
        }
        if (rest.length) {
          tl.from(rest, { opacity: 0, y: 24, stagger: 0.08, duration: 0.7, ease: 'power3.out' }, lines.length ? '-=0.55' : 0)
        }
      })

      /* ── Service cards ── */
      gsap.utils.toArray('.service-card').forEach((card, i) => {
        gsap.from(card, {
          opacity: 0, y: 44, duration: 0.85, ease: 'power3.out', delay: (i % 2) * 0.1,
          scrollTrigger: { trigger: card, start: 'top 92%', toggleActions: 'play none none none' },
        })
      })

      /* ── Work cards ── */
      gsap.utils.toArray('.work-card').forEach((card, i) => {
        gsap.from(card, {
          opacity: 0, y: 52, duration: 0.85, ease: 'power3.out', delay: (i % 3) * 0.1,
          scrollTrigger: { trigger: card, start: 'top 92%', toggleActions: 'play none none none' },
        })
      })

      /* ── Team cards ── */
      gsap.from('.team-card', {
        opacity: 0, y: 60, stagger: 0.18, duration: 1.0, ease: 'power3.out',
        scrollTrigger: { trigger: '.team-grid', start: 'top 85%', toggleActions: 'play none none none' },
      })

      /* ── CTA ── */
      gsap.from('.cta-content', {
        autoAlpha: 0, y: 36, scale: 0.97, duration: 1.0, ease: 'power3.out',
        scrollTrigger: { trigger: '.cta-section', start: 'top 78%', toggleActions: 'play none none none' },
      })

    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} className="bg-[#060A14] min-h-screen" style={{ overflowX: 'clip' }}>

      {/* ═══════════ HERO ═══════════ */}
      <section id="hero" className="relative min-h-screen flex flex-col justify-center pt-24 pb-24 overflow-hidden">
        {/* Dot grid + ambient orbs */}
        <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none"
          style={{ maskImage: 'radial-gradient(ellipse at 30% 40%, black 0%, transparent 70%)', WebkitMaskImage: 'radial-gradient(ellipse at 30% 40%, black 0%, transparent 70%)' }} />
        <div className="absolute inset-0 pointer-events-none">
          <div className="orb orb-a" style={{ top: '12%', left: '8%', width: 620, height: 620, background: 'radial-gradient(circle, rgba(99,102,241,0.14) 0%, transparent 70%)' }} />
          <div className="orb orb-b" style={{ bottom: '15%', right: '4%', width: 460, height: 460, background: 'radial-gradient(circle, rgba(236,72,153,0.10) 0%, transparent 70%)' }} />
        </div>

        <div className="hero-inner max-w-6xl mx-auto px-6 relative w-full">

          {/* Eyebrow */}
          <div className="hero-eyebrow flex items-center gap-3 mb-10">
            <span className="w-8 h-px bg-indigo-400/60" />
            <span className="text-indigo-400 text-xs font-bold tracking-widest uppercase">Creatives Collective · Remote Agency</span>
          </div>

          {/* Headline — masked line reveals */}
          <h1 className="font-black leading-[0.92] tracking-tight mb-10 text-[clamp(3rem,8vw,7rem)]">
            <MaskedLine className="text-white">We make brands</MaskedLine>
            <MaskedLine className="gradient-anim">impossible</MaskedLine>
            <MaskedLine className="text-white">to ignore.</MaskedLine>
          </h1>

          {/* Sub-copy */}
          <p className="hero-sub text-[#8899BB] text-lg md:text-xl max-w-xl leading-relaxed mb-10">
            scrpt is a collective of marketers, builders, and designers working remotely across India.
            We don't do fluff — we do performance.
          </p>

          {/* CTAs */}
          <div className="hero-ctas flex flex-wrap items-center gap-5">
            <a
              href="#work"
              onClick={go('work')}
              className="magnetic btn-shine inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-base text-white transition-shadow hover:shadow-[0_12px_40px_rgba(99,102,241,0.45)]"
              style={{ background: 'linear-gradient(135deg,#6366F1,#06B6D4)', boxShadow: '0 8px 30px rgba(99,102,241,0.3)' }}
            >
              See our work <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#team"
              onClick={go('team')}
              className="magnetic inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-base text-[#8899BB] border border-white/10 hover:text-white hover:border-white/30 transition-colors"
            >
              Meet the team
            </a>
          </div>

          {/* Floating label */}
          <div className="hero-badge mt-20 flex items-center gap-4">
            <div className="flex -space-x-2">
              {team.map((m) => (
                <div key={m.initials} className="w-9 h-9 rounded-full border-2 border-[#060A14] flex items-center justify-center text-xs font-black text-white"
                  style={{ background: `linear-gradient(135deg,${m.gradFrom},${m.gradTo})` }}>
                  {m.initials}
                </div>
              ))}
            </div>
            <p className="text-[#8899BB] text-sm">
              <span className="text-white font-semibold">2 creatives.</span> 1 collective. Pune, India.
            </p>
          </div>
        </div>

        {/* Bottom scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
          <span className="text-white text-[10px] tracking-widest uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/70 to-transparent cue-drop" />
        </div>
      </section>

      {/* ═══════════ MARQUEE ═══════════ */}
      <div className="marquee py-8 border-y border-white/5" style={{ background: '#040710' }} aria-hidden="true">
        {[0, 1].map((dup) => (
          <div key={dup} className="marquee-track">
            {marqueeWords.map((w) => (
              <span key={w} className="flex items-center shrink-0">
                <span className="text-2xl md:text-4xl font-black tracking-tight text-white/10 hover:text-white/30 transition-colors px-6 whitespace-nowrap">
                  {w}
                </span>
                <span className="text-xl md:text-2xl shrink-0"
                  style={{ background: 'linear-gradient(135deg,#6366F1,#06B6D4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  ✦
                </span>
              </span>
            ))}
          </div>
        ))}
      </div>

      {/* ═══════════ STATS STRIP ═══════════ */}
      <div className="stats-strip py-14 border-b border-white/5" style={{ background: '#040710' }}>
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map(({ end, suffix, label }) => (
            <div key={label} className="stat-item text-center">
              <div data-count={end} data-suffix={suffix}
                className="text-3xl md:text-4xl font-black mb-1"
                style={{ background: 'linear-gradient(135deg,#6366F1,#06B6D4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                {end}{suffix}
              </div>
              <p className="text-[#8899BB] text-xs leading-snug">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ═══════════ SERVICES ═══════════ */}
      <section id="services" className="scroll-mt-20 py-28" style={{ background: '#040710' }}>
        <div className="max-w-6xl mx-auto px-6">

          <div className="section-reveal mb-16">
            <div className="reveal-rest flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-indigo-400/60" />
              <span className="text-indigo-400 text-xs font-bold tracking-widest uppercase">What We Do</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black leading-tight">
              <span className="block overflow-hidden pb-[0.15em] -mb-[0.15em]"><span className="reveal-line block text-white">Focused on results,</span></span>
              <span className="block overflow-hidden pb-[0.15em] -mb-[0.15em]">
                <span className="reveal-line block"
                  style={{ background: 'linear-gradient(135deg,#6366F1,#EC4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  not just deliverables.
                </span>
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-white/5 rounded-2xl overflow-hidden grid-glint">
            {services.map((s) => (
              <div key={s.number} className="service-card spotlight-card bg-[#040710] p-8 md:p-10 group hover:bg-[#070d1a] transition-colors duration-300">
                <div className="flex items-start justify-between mb-6">
                  <span className="text-[11px] font-black tracking-widest transition-transform duration-300 group-hover:-translate-y-0.5" style={{ color: s.color + 'AA' }}>{s.number}</span>
                  <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center transition-all duration-300 group-hover:border-white/40 group-hover:rotate-[-45deg]">
                    <ArrowRight className="w-3.5 h-3.5 text-[#8899BB] group-hover:text-white transition-colors" />
                  </div>
                </div>
                <h3 className="text-white text-2xl font-black mb-3">{s.title}</h3>
                <p className="text-[#8899BB] text-sm leading-relaxed mb-6">{s.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {s.tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-bold px-2.5 py-1 rounded-full border transition-transform duration-200 hover:scale-105"
                      style={{ background: s.color + '12', color: s.color + 'CC', borderColor: s.color + '30' }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ WORK ═══════════ */}
      <section id="work" className="scroll-mt-20 py-28">
        <div className="max-w-6xl mx-auto px-6">

          <div className="section-reveal mb-16">
            <div className="reveal-rest flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-pink-400/60" />
              <span className="text-pink-400 text-xs font-bold tracking-widest uppercase">Selected Work</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black leading-tight">
              <span className="block overflow-hidden pb-[0.15em] -mb-[0.15em]"><span className="reveal-line block text-white">Built. Shipped.</span></span>
              <span className="block overflow-hidden pb-[0.15em] -mb-[0.15em]">
                <span className="reveal-line block"
                  style={{ background: 'linear-gradient(135deg,#10B981,#06B6D4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  Performing.
                </span>
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {work.map((p) => (
              <a key={p.title} href={p.url} target="_blank" rel="noopener noreferrer"
                className="work-card spotlight-card glass-card rounded-2xl p-6 group block">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex flex-col gap-1.5">
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-full w-fit"
                      style={{ background: p.color + '1A', color: p.color, border: `1px solid ${p.color}40` }}>
                      {p.category}
                    </span>
                    <span className="text-[10px] text-[#8899BB]">by {p.by}</span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-[#8899BB] group-hover:text-white transition-all duration-300 mt-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                <h3 className="text-white font-black text-xl mb-2">{p.title}</h3>
                <p className="text-[#8899BB] text-sm leading-relaxed">{p.desc}</p>
                <p className="mt-5 text-xs font-bold flex items-center gap-1" style={{ color: p.color }}>
                  View <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">→</span>
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ TEAM ═══════════ */}
      <section id="team" className="scroll-mt-20 py-28" style={{ background: '#040710' }}>
        <div className="max-w-6xl mx-auto px-6">

          <div className="section-reveal mb-16">
            <div className="reveal-rest flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-cyan-400/60" />
              <span className="text-cyan-400 text-xs font-bold tracking-widest uppercase">The Collective</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black leading-tight">
              <span className="block overflow-hidden pb-[0.15em] -mb-[0.15em]"><span className="reveal-line block text-white">Small team.</span></span>
              <span className="block overflow-hidden pb-[0.15em] -mb-[0.15em]">
                <span className="reveal-line block"
                  style={{ background: 'linear-gradient(135deg,#6366F1,#06B6D4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  Outsized output.
                </span>
              </span>
            </h2>
            <p className="reveal-rest text-[#8899BB] mt-5 text-base max-w-xl leading-relaxed">
              We're a lean, remote-first collective — no bloat, no account managers in the middle. You work directly with the people doing the work.
            </p>
          </div>

          <div className="team-grid grid md:grid-cols-2 gap-6">
            {team.map((m) => (
              <div key={m.initials} className="team-card spotlight-card glass-card rounded-2xl p-8 md:p-10 group">
                <div className="flex items-start gap-5 mb-6">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-xl font-black text-white flex-shrink-0 shadow-lg transition-transform duration-300 group-hover:scale-105 group-hover:-rotate-3"
                    style={{ background: `linear-gradient(135deg,${m.gradFrom},${m.gradTo})`, boxShadow: `0 8px 30px ${m.gradFrom}30` }}>
                    {m.initials}
                  </div>
                  <div>
                    <h3 className="text-white font-black text-xl mb-1">{m.name}</h3>
                    <p className="text-sm font-semibold mb-1.5"
                      style={{ background: `linear-gradient(135deg,${m.gradFrom},${m.gradTo})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                      {m.role}
                    </p>
                    <span className="flex items-center gap-1 text-[#8899BB] text-xs">
                      <MapPin className="w-3 h-3" /> {m.location}
                    </span>
                  </div>
                </div>

                <p className="text-[#8899BB] text-sm leading-relaxed mb-6">{m.bio}</p>

                <div className="flex flex-wrap gap-2 mb-7">
                  {m.skills.map((skill) => (
                    <span key={skill} className="text-[10px] font-bold px-2.5 py-1 rounded-full border border-white/10 text-[#8899BB] transition-colors duration-200 hover:border-white/30 hover:text-white">
                      {skill}
                    </span>
                  ))}
                </div>

                <a href={m.linkedin} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold text-white/60 hover:text-white transition-colors group-hover:text-white">
                  View portfolio <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            ))}
          </div>

          {/* Hiring note */}
          <div className="section-reveal mt-8 p-6 rounded-2xl border border-dashed border-white/10 text-center">
            <span className="reveal-rest block text-[#8899BB] text-sm">
              The collective is selective — we take on work that excites us.{' '}
              <a href="#connect" onClick={go('connect')}
                className="text-white font-semibold hover:text-indigo-400 transition-colors">
                Tell us about your project →
              </a>
            </span>
          </div>
        </div>
      </section>

      {/* ═══════════ CONNECT CTA ═══════════ */}
      <section id="connect" className="cta-section scroll-mt-20 py-32 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none glow-breathe"
          style={{ background: 'radial-gradient(ellipse at 50% 40%, rgba(99,102,241,0.16) 0%, transparent 60%)' }} />
        <div className="cta-content max-w-3xl mx-auto px-6 text-center relative">
          <div className="flex justify-center gap-3 mb-8">
            {team.map((m, i) => (
              <div key={m.initials}
                className="w-12 h-12 rounded-xl flex items-center justify-center text-sm font-black text-white shadow-lg animate-floaty"
                style={{ background: `linear-gradient(135deg,${m.gradFrom},${m.gradTo})`, animationDelay: `${i * 0.7}s` }}>
                {m.initials}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-3 justify-center mb-4">
            <span className="w-8 h-px bg-indigo-400/60" />
            <span className="text-indigo-400 text-xs font-bold tracking-widest uppercase">Work With Us</span>
            <span className="w-8 h-px bg-indigo-400/60" />
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-white mb-5 leading-tight">
            Have a project? A brief?<br />
            <span className="gradient-anim">Even just an idea?</span>
          </h2>
          <p className="text-[#8899BB] text-lg mb-10 max-w-lg mx-auto leading-relaxed">
            No RFPs. No formalities. Just a conversation. If there's a fit, we'll know quickly.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://www.linkedin.com/in/jaysahastrabudhe/" target="_blank" rel="noopener noreferrer"
              className="magnetic btn-shine inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-bold text-base text-white transition-shadow hover:shadow-[0_12px_40px_rgba(10,102,194,0.5)]"
              style={{ background: '#0A66C2', boxShadow: '0 8px 30px rgba(10,102,194,0.35)' }}>
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              Reach Jay on LinkedIn
            </a>
            <a href="mailto:jay@scrpt.in"
              className="magnetic inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-base text-[#8899BB] border border-white/10 hover:text-white hover:border-white/30 transition-colors">
              jay@scrpt.in
            </a>
          </div>

          <p className="mt-8 text-[#8899BB] text-xs flex items-center justify-center gap-1.5">
            <MapPin className="w-3 h-3" /> Pune, Maharashtra, India · Remote-first
          </p>
        </div>
      </section>

    </div>
  )
}
