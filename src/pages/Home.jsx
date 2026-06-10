import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ExternalLink, ArrowRight, ArrowDownRight, MapPin, Search, PenTool, Rocket, TrendingUp } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const LIME = '#9CFE4F'

/* ─────────────────────────── DATA ─────────────────────────── */

const services = [
  {
    number: '01',
    title: 'Performance Marketing',
    desc: 'Meta & Google Ads funnels built for measurable outcomes — awareness to conversion. We live in the data.',
    tags: ['Meta Ads', 'Google Ads', 'CRO', 'Analytics'],
  },
  {
    number: '02',
    title: 'Content & Video',
    desc: 'Long-form YouTube, short-form Reels, written content that ranks. Strategy-first, not just aesthetics.',
    tags: ['YouTube', 'Reels', 'SEO Content', 'Scripting'],
  },
  {
    number: '03',
    title: 'Web Development',
    desc: 'React apps, WordPress sites, e-commerce stores — shipped end-to-end with design, payments, and deploy.',
    tags: ['React', 'WordPress', 'Supabase', 'Razorpay'],
  },
  {
    number: '04',
    title: 'Brand & Design',
    desc: 'Visual identity, UI/UX, and communication design that makes your brand impossible to ignore.',
    tags: ['Brand Identity', 'UI/UX', 'Figma', 'Illustration'],
  },
]

const process = [
  { step: '01', icon: Search,     title: 'Research',      desc: 'Deep-dive into your market, audience, and competitors before anything ships.' },
  { step: '02', icon: PenTool,    title: 'Strategy',      desc: 'A clear plan — channels, creative direction, budgets, and the metrics that matter.' },
  { step: '03', icon: Rocket,     title: 'Build & Launch', desc: 'Design, develop, and deploy — campaigns, content, and websites, end-to-end.' },
  { step: '04', icon: TrendingUp, title: 'Scale',         desc: 'Measure, iterate, and double down on what performs. Growth is a loop, not a launch.' },
]

const work = [
  {
    title: 'JawanDrop',
    category: 'E-commerce · React',
    desc: 'Tribute apparel brand with live Razorpay payments, real-time Supabase inventory, Pan-India shipping. 2,000+ customers served.',
    url: 'https://jawandrop.in',
    by: 'Jay',
  },
  {
    title: 'Jay Defence Academy',
    category: 'Institution · WordPress',
    desc: 'Defence exam coaching site for Dharwad. 12+ pages, local SEO, mobile-first. Ranks for defence coaching in North Karnataka.',
    url: 'https://www.jaydefenceacademy.com',
    by: 'Jay',
  },
  {
    title: 'BLiive',
    category: 'Consulting · WordPress',
    desc: "Higher-education transformation platform for a retired Army Colonel's consultancy. 4 service pillars, UGC/NAAC aligned.",
    url: 'https://darkred-leopard-153534.hostingersite.com',
    by: 'Jay',
  },
  {
    title: "Let's Enterprise",
    category: 'Performance Marketing',
    desc: 'Full Meta Ads funnel for an experiential BBA program in Pune. Awareness → MQL → enrolled student. 6× ROI achieved.',
    url: 'https://www.linkedin.com/in/jaysahastrabudhe/',
    by: 'Jay',
  },
  {
    title: 'Rom Guruji',
    category: 'YouTube · Content Strategy',
    desc: '23K subscribers, 15M+ views. Built from zero during lockdown 2020. Strategy, scripting, editing, SEO — all in-house.',
    url: 'https://youtube.com/c/RomGuruji',
    by: 'Jay',
  },
  {
    title: 'DataGuru Research Partners',
    category: 'SEO · Content Strategy',
    desc: "Full-scale SEO for a global market research firm — 500+ research report pages optimized, 250+ reports ranking in Google's top 10.",
    url: 'https://www.notion.so/Priyanka-Bhalekar-25bb23cd43cb8008ab88ef7ff05f1c71',
    by: 'Priyanka',
  },
  {
    title: 'Pune Real Estate SEO',
    category: 'SEO · Local Search',
    desc: 'End-to-end SEO from scratch — keyword research, on-page, link building. Ranked "Top Builders in Prabhat Road" #1 on Google.',
    url: 'https://www.notion.so/Priyanka-Bhalekar-25bb23cd43cb8008ab88ef7ff05f1c71',
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
  },
  {
    name: 'Priyanka Bhalekar',
    initials: 'PB',
    role: 'Digital Marketing & Web Design',
    location: 'India · Remote',
    bio: '6+ years working with Indian and international clients across digital marketing and web design. From strategy to execution — she owns the full cycle.',
    skills: ['Digital Marketing', 'Web Design', 'SEO', 'Client Management'],
    linkedin: 'https://www.linkedin.com/in/priyanka-b-794a86167',
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

/* Agenko text-flip button label */
function FlipLabel({ children }) {
  return (
    <span className="text-flip">
      <span>{children}</span>
      <span aria-hidden="true">{children}</span>
    </span>
  )
}

/* Rotating circular text badge */
function CircleBadge() {
  return (
    <div className="relative w-28 h-28 hidden md:flex items-center justify-center">
      <svg viewBox="0 0 100 100" className="rotate-slow absolute inset-0 w-full h-full">
        <defs>
          <path id="circle-path" d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
        </defs>
        <text className="uppercase" style={{ fontSize: 9.5, letterSpacing: '2.5px', fill: '#9CA3AF', fontWeight: 700 }}>
          <textPath href="#circle-path">scroll down · scrpt collective ·</textPath>
        </text>
      </svg>
      <ArrowDownRight className="w-5 h-5" style={{ color: LIME }} />
    </div>
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

      /* ── Process boxes ── */
      gsap.from('.process-box', {
        opacity: 0, y: 40, stagger: 0.12, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: '.process-grid', start: 'top 85%', toggleActions: 'play none none none' },
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
    <div ref={containerRef} className="min-h-screen" style={{ background: '#0E0F11', overflowX: 'clip' }}>

      {/* ═══════════ HERO — Agenko display type ═══════════ */}
      <section id="hero" className="relative min-h-screen flex flex-col justify-center pt-24 pb-24 overflow-hidden">
        {/* Dot grid + ambient orbs */}
        <div className="absolute inset-0 dot-grid opacity-25 pointer-events-none"
          style={{ maskImage: 'radial-gradient(ellipse at 30% 40%, black 0%, transparent 70%)', WebkitMaskImage: 'radial-gradient(ellipse at 30% 40%, black 0%, transparent 70%)' }} />
        <div className="absolute inset-0 pointer-events-none">
          <div className="orb orb-a" style={{ top: '10%', left: '6%', width: 560, height: 560, background: 'radial-gradient(circle, rgba(156,254,79,0.10) 0%, transparent 70%)' }} />
          <div className="orb orb-b" style={{ bottom: '12%', right: '4%', width: 460, height: 460, background: 'radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)' }} />
        </div>

        <div className="hero-inner max-w-6xl mx-auto px-6 relative w-full">

          {/* Eyebrow */}
          <div className="hero-eyebrow flex items-center gap-3 mb-10">
            <span className="w-8 h-px" style={{ background: 'rgba(156,254,79,0.6)' }} />
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: LIME }}>Creatives Collective · Remote Agency</span>
          </div>

          {/* Headline — Agenko stacked display type */}
          <h1 className="font-black leading-[0.9] tracking-tight mb-4 uppercase">
            <MaskedLine className="text-white text-[clamp(3rem,9vw,8rem)]">We Make</MaskedLine>
            <MaskedLine className="text-[clamp(3rem,9vw,8rem)]">
              <span style={{ color: LIME }}>Brands</span>{' '}
              <span className="text-white">Impossible</span>
            </MaskedLine>
          </h1>
          {/* Giant outline line, right-aligned like Agenko's big-text */}
          <div className="overflow-hidden pb-[0.18em] -mb-[0.18em] mb-8">
            <div className="hero-line outline-text font-black uppercase leading-[0.9] tracking-tight text-right text-[clamp(3.5rem,11vw,10rem)]"
              style={{ fontFamily: 'var(--heading-font)' }}>
              To Ignore.
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
            <div>
              {/* Sub-copy */}
              <p className="hero-sub text-lg md:text-xl max-w-xl leading-relaxed mb-10" style={{ color: '#9CA3AF' }}>
                scrpt is a collective of <span className="text-white font-semibold">marketers, builders, and designers</span> working
                remotely across India. We don't do fluff — we do performance.
              </p>

              {/* CTAs */}
              <div className="hero-ctas flex flex-wrap items-center gap-5">
                <a href="#work" onClick={go('work')}
                  className="magnetic btn-shine btn-primary text-base px-8 py-4">
                  <FlipLabel>See our work</FlipLabel> <ArrowRight className="w-4 h-4" />
                </a>
                <a href="#team" onClick={go('team')}
                  className="magnetic btn-outline text-base px-8 py-4">
                  <FlipLabel>Meet the team</FlipLabel>
                </a>
              </div>

              {/* Floating label */}
              <div className="hero-badge mt-14 flex items-center gap-4">
                <div className="flex -space-x-2">
                  {team.map((m) => (
                    <div key={m.initials} className="w-9 h-9 rounded-full border-2 flex items-center justify-center text-xs font-black"
                      style={{ background: LIME, color: '#0E0F11', borderColor: '#0E0F11' }}>
                      {m.initials}
                    </div>
                  ))}
                </div>
                <p className="text-sm" style={{ color: '#9CA3AF' }}>
                  <span className="text-white font-semibold">2 creatives.</span> 1 collective. Pune, India.
                </p>
              </div>
            </div>

            {/* Rotating circular badge */}
            <div className="hero-badge shrink-0 self-end">
              <CircleBadge />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ MARQUEE ═══════════ */}
      <div className="marquee py-8 border-y" style={{ background: '#0B0C0E', borderColor: 'rgba(255,255,255,0.06)' }} aria-hidden="true">
        {[0, 1].map((dup) => (
          <div key={dup} className="marquee-track">
            {marqueeWords.map((w) => (
              <span key={w} className="flex items-center shrink-0">
                <span className="outline-text text-3xl md:text-5xl font-black uppercase tracking-tight px-6 whitespace-nowrap"
                  style={{ fontFamily: 'var(--heading-font)' }}>
                  {w}
                </span>
                <span className="text-xl md:text-2xl shrink-0" style={{ color: LIME }}>✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>

      {/* ═══════════ STATS STRIP ═══════════ */}
      <div className="stats-strip py-14 border-b" style={{ background: '#0B0C0E', borderColor: 'rgba(255,255,255,0.06)' }}>
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map(({ end, suffix, label }) => (
            <div key={label} className="stat-item text-center">
              <div data-count={end} data-suffix={suffix}
                className="text-4xl md:text-5xl font-black mb-1" style={{ color: LIME, fontFamily: 'var(--heading-font)' }}>
                {end}{suffix}
              </div>
              <p className="text-xs leading-snug" style={{ color: '#9CA3AF' }}>{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ═══════════ SERVICES — Agenko stair grid ═══════════ */}
      <section id="services" className="scroll-mt-20 py-28" style={{ background: '#0B0C0E' }}>
        <div className="max-w-6xl mx-auto px-6">

          <div className="section-reveal mb-16 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div>
              <div className="reveal-rest mb-4"><span className="sub-title">Our Services</span></div>
              <h2 className="text-4xl md:text-6xl font-black leading-tight">
                <span className="block overflow-hidden pb-[0.15em] -mb-[0.15em]"><span className="reveal-line block text-white">Focused on results,</span></span>
                <span className="block overflow-hidden pb-[0.15em] -mb-[0.15em]">
                  <span className="reveal-line block" style={{ color: LIME }}>not just deliverables.</span>
                </span>
              </h2>
            </div>
            <p className="reveal-rest max-w-sm text-sm leading-relaxed lg:text-right" style={{ color: '#9CA3AF' }}>
              Four disciplines, one team. Every service is run by the person who actually does the work.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <div key={s.number}
                className={`service-card spotlight-card glass-card rounded-2xl p-8 md:p-10 group ${i % 2 === 1 ? 'md:mt-12' : ''}`}>
                <div className="flex items-start justify-between mb-6">
                  <span className="text-5xl font-black outline-text" style={{ fontFamily: 'var(--heading-font)' }}>{s.number}</span>
                  <div className="w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 group-hover:rotate-[-45deg]"
                    style={{ borderColor: 'rgba(255,255,255,0.12)' }}>
                    <ArrowRight className="w-4 h-4 transition-colors" style={{ color: '#9CA3AF' }} />
                  </div>
                </div>
                <h3 className="text-white text-2xl font-black mb-3 transition-colors duration-300 group-hover:text-[#9CFE4F]">{s.title}</h3>
                <p className="text-sm leading-relaxed mb-6" style={{ color: '#9CA3AF' }}>{s.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {s.tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-bold px-2.5 py-1 rounded-full border transition-transform duration-200 hover:scale-105"
                      style={{ background: 'rgba(156,254,79,0.07)', color: 'rgba(156,254,79,0.85)', borderColor: 'rgba(156,254,79,0.2)' }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ PROCESS — Agenko step row ═══════════ */}
      <section id="process" className="scroll-mt-20 py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="section-reveal text-center mb-16">
            <div className="reveal-rest mb-4"><span className="sub-title no-line">How We Work</span></div>
            <h2 className="text-4xl md:text-5xl font-black leading-tight">
              <span className="block overflow-hidden pb-[0.15em] -mb-[0.15em]">
                <span className="reveal-line block text-white">The process behind the magic.</span>
              </span>
            </h2>
          </div>

          <div className="process-grid relative">
            <div className="process-line hidden lg:block" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map(({ step, icon: Icon, title, desc }) => (
                <div key={step} className="process-box relative text-center lg:text-left">
                  <div className="relative inline-flex mb-6">
                    <div className="w-20 h-20 rounded-2xl flex items-center justify-center border transition-colors duration-300"
                      style={{ background: '#15171B', borderColor: 'rgba(255,255,255,0.08)' }}>
                      <Icon className="w-8 h-8" style={{ color: LIME }} />
                    </div>
                    <span className="absolute -top-2 -right-3 text-[10px] font-black px-2 py-0.5 rounded-full"
                      style={{ background: LIME, color: '#0E0F11' }}>
                      {step}
                    </span>
                  </div>
                  <h3 className="text-white font-black text-lg mb-2">{title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#9CA3AF' }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ WORK ═══════════ */}
      <section id="work" className="scroll-mt-20 py-28" style={{ background: '#0B0C0E' }}>
        <div className="max-w-6xl mx-auto px-6">

          <div className="section-reveal mb-16 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div>
              <div className="reveal-rest mb-4"><span className="sub-title">Selected Work</span></div>
              <h2 className="text-4xl md:text-6xl font-black leading-tight">
                <span className="block overflow-hidden pb-[0.15em] -mb-[0.15em]"><span className="reveal-line block text-white">Built. Shipped.</span></span>
                <span className="block overflow-hidden pb-[0.15em] -mb-[0.15em]">
                  <span className="reveal-line block" style={{ color: LIME }}>Performing.</span>
                </span>
              </h2>
            </div>
            <p className="reveal-rest max-w-sm text-sm leading-relaxed lg:text-right" style={{ color: '#9CA3AF' }}>
              Real clients, real numbers. Tap any card to see it live.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {work.map((p) => (
              <a key={p.title} href={p.url} target="_blank" rel="noopener noreferrer"
                className="work-card spotlight-card glass-card rounded-2xl p-6 group block">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex flex-col gap-1.5">
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-full w-fit border"
                      style={{ background: 'rgba(156,254,79,0.07)', color: LIME, borderColor: 'rgba(156,254,79,0.25)' }}>
                      {p.category}
                    </span>
                    <span className="text-[10px]" style={{ color: '#9CA3AF' }}>by {p.by}</span>
                  </div>
                  <ExternalLink className="w-4 h-4 transition-all duration-300 mt-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" style={{ color: '#9CA3AF' }} />
                </div>
                <h3 className="text-white font-black text-xl mb-2 transition-colors duration-300 group-hover:text-[#9CFE4F]">{p.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#9CA3AF' }}>{p.desc}</p>
                <p className="mt-5 text-xs font-bold flex items-center gap-1" style={{ color: LIME }}>
                  View <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">→</span>
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ TEAM ═══════════ */}
      <section id="team" className="scroll-mt-20 py-28">
        <div className="max-w-6xl mx-auto px-6">

          <div className="section-reveal mb-16">
            <div className="reveal-rest mb-4"><span className="sub-title">The Collective</span></div>
            <h2 className="text-4xl md:text-6xl font-black leading-tight">
              <span className="block overflow-hidden pb-[0.15em] -mb-[0.15em]"><span className="reveal-line block text-white">Small team.</span></span>
              <span className="block overflow-hidden pb-[0.15em] -mb-[0.15em]">
                <span className="reveal-line block" style={{ color: LIME }}>Outsized output.</span>
              </span>
            </h2>
            <p className="reveal-rest mt-5 text-base max-w-xl leading-relaxed" style={{ color: '#9CA3AF' }}>
              We're a lean, remote-first collective — no bloat, no account managers in the middle. You work directly with the people doing the work.
            </p>
          </div>

          <div className="team-grid grid md:grid-cols-2 gap-6">
            {team.map((m) => (
              <div key={m.initials} className="team-card spotlight-card glass-card rounded-2xl p-8 md:p-10 group">
                <div className="flex items-start gap-5 mb-6">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-xl font-black flex-shrink-0 transition-transform duration-300 group-hover:scale-105 group-hover:-rotate-3"
                    style={{ background: LIME, color: '#0E0F11', boxShadow: '0 8px 30px rgba(156,254,79,0.2)' }}>
                    {m.initials}
                  </div>
                  <div>
                    <h3 className="text-white font-black text-xl mb-1">{m.name}</h3>
                    <p className="text-sm font-semibold mb-1.5" style={{ color: LIME }}>{m.role}</p>
                    <span className="flex items-center gap-1 text-xs" style={{ color: '#9CA3AF' }}>
                      <MapPin className="w-3 h-3" /> {m.location}
                    </span>
                  </div>
                </div>

                <p className="text-sm leading-relaxed mb-6" style={{ color: '#9CA3AF' }}>{m.bio}</p>

                <div className="flex flex-wrap gap-2 mb-7">
                  {m.skills.map((skill) => (
                    <span key={skill} className="text-[10px] font-bold px-2.5 py-1 rounded-full border transition-colors duration-200 hover:text-white"
                      style={{ borderColor: 'rgba(255,255,255,0.1)', color: '#9CA3AF' }}>
                      {skill}
                    </span>
                  ))}
                </div>

                <a href={m.linkedin} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold transition-colors text-white/60 hover:text-white group-hover:text-white">
                  View portfolio <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            ))}
          </div>

          {/* Hiring note */}
          <div className="section-reveal mt-8 p-6 rounded-2xl border border-dashed text-center" style={{ borderColor: 'rgba(255,255,255,0.12)' }}>
            <span className="reveal-rest block text-sm" style={{ color: '#9CA3AF' }}>
              The collective is selective — we take on work that excites us.{' '}
              <a href="#connect" onClick={go('connect')}
                className="text-white font-semibold transition-colors hover:text-[#9CFE4F]">
                Tell us about your project →
              </a>
            </span>
          </div>
        </div>
      </section>

      {/* ═══════════ CONNECT CTA ═══════════ */}
      <section id="connect" className="cta-section scroll-mt-20 py-32 relative overflow-hidden" style={{ background: '#0B0C0E' }}>
        <div className="absolute inset-0 pointer-events-none glow-breathe"
          style={{ background: 'radial-gradient(ellipse at 50% 40%, rgba(156,254,79,0.08) 0%, transparent 60%)' }} />
        <div className="cta-content max-w-3xl mx-auto px-6 text-center relative">
          <div className="flex justify-center gap-3 mb-8">
            {team.map((m, i) => (
              <div key={m.initials}
                className="w-12 h-12 rounded-xl flex items-center justify-center text-sm font-black animate-floaty"
                style={{ background: LIME, color: '#0E0F11', animationDelay: `${i * 0.7}s` }}>
                {m.initials}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-3 justify-center mb-4">
            <span className="w-8 h-px" style={{ background: 'rgba(156,254,79,0.5)' }} />
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: LIME }}>Work With Us</span>
            <span className="w-8 h-px" style={{ background: 'rgba(156,254,79,0.5)' }} />
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-white mb-5 leading-tight">
            Have a project? A brief?<br />
            <span style={{ color: LIME }}>Even just an idea?</span>
          </h2>
          <p className="text-lg mb-10 max-w-lg mx-auto leading-relaxed" style={{ color: '#9CA3AF' }}>
            No RFPs. No formalities. Just a conversation. If there's a fit, we'll know quickly.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://www.linkedin.com/in/jaysahastrabudhe/" target="_blank" rel="noopener noreferrer"
              className="magnetic btn-shine btn-primary text-base px-8 py-4">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <FlipLabel>Reach Jay on LinkedIn</FlipLabel>
            </a>
            <a href="mailto:jay@scrpt.in" className="magnetic btn-outline text-base px-8 py-4">
              <FlipLabel>jay@scrpt.in</FlipLabel>
            </a>
          </div>

          <p className="mt-8 text-xs flex items-center justify-center gap-1.5" style={{ color: '#9CA3AF' }}>
            <MapPin className="w-3 h-3" /> Pune, Maharashtra, India · Remote-first
          </p>
        </div>
      </section>

    </div>
  )
}
