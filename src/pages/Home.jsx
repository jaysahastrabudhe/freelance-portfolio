import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ExternalLink, ArrowRight, ArrowDownRight, MapPin, Search, PenTool, Rocket, TrendingUp, Send, CheckCircle } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const LIME = '#FFD60A'

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
    role: 'Performance Marketing · Web Dev · Content',
    location: 'Pune, Maharashtra',
    bio: 'Opened a camera in lockdown 2020 and built Rom Guruji to 23K subscribers and 15M views. That foundation grew into performance marketing, full-stack web development, and an Executive MBA. Builds Meta Ads funnels by day, ships React and WordPress sites end-to-end — design, payments, deploy.',
    experience: [
      { period: '2026 — Now', role: 'Performance Marketing Manager', org: "Let's Enterprise · 6× ROI on Meta Ads" },
      { period: '2024 — Now', role: 'Executive MBA', org: 'Symbiosis (SIMS), Pune' },
      { period: '2024', role: 'Head of Digital', org: 'FullHouse · 8+ brands · shipped 3 client sites' },
      { period: '2020 — Now', role: 'Creator, Rom Guruji', org: 'YouTube · 23K subs · 15M+ views' },
    ],
    skills: ['Performance Marketing', 'React / WordPress', 'Content Strategy', 'SEO'],
    linkedin: 'https://www.linkedin.com/in/jaysahastrabudhe/',
  },
  {
    name: 'Priyanka Bhalekar',
    initials: 'PB',
    role: 'Performance Marketing · Web Design · SEO',
    location: 'India · Remote',
    bio: '6+ years driving performance marketing, SEO, and web design for Indian and international clients. Runs full-funnel digital campaigns — from Meta Ads and Google to organic SEO — owning strategy through execution. Delivered lowest CPL in real estate while ranking competitive keywords at #1 on Google.',
    experience: [
      { period: 'Performance', role: 'Meta & Google Ads', org: 'Lowest CPL delivered for real estate client' },
      { period: 'SEO Lead', role: 'Research & Content Client', org: "500+ pages optimized · 250+ reports in Google's top 10" },
      { period: 'SEO', role: 'Real Estate Client', org: 'Competitive keyword ranked #1 on Google' },
      { period: '6+ Years', role: 'Digital Marketing & Web Design', org: 'Indian & international clients' },
    ],
    skills: ['Performance Marketing', 'Meta & Google Ads', 'SEO', 'Web Design', 'Content Optimization'],
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

const brands = [
  { name: 'JawanDrop',              category: 'E-commerce' },
  { name: 'Jay Defence Academy',    category: 'Education' },
  { name: 'BLiive',                 category: 'Consulting' },
  { name: "Let's Enterprise",       category: 'Higher Ed' },
  { name: 'Rom Guruji',             category: 'YouTube' },
  { name: 'DataGuru Research',      category: 'B2B Research' },
  { name: 'Real Estate Client',     category: 'Real Estate' },
  { name: 'FullHouse',              category: 'Multi-brand' },
  { name: 'International Clients',  category: 'Global' },
]

const budgetOptions = ['< ₹25K', '₹25K – ₹75K', '₹75K – ₹2L', '₹2L+', 'Let\'s talk']

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
  const [form, setForm] = useState({ name: '', email: '', budget: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleFormChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Project Inquiry from ${form.name}`)
    const body = encodeURIComponent(`Hi Jay & Priyanka,\n\nName: ${form.name}\nEmail: ${form.email}\nBudget: ${form.budget}\n\nMessage:\n${form.message}`)
    window.open(`mailto:jay@scrpt.in?subject=${subject}&body=${body}`)
    setSubmitted(true)
  }

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

      /* ── Brand scroll entrance ── */
      gsap.from('.brand-scroll-section', {
        opacity: 0, y: 24, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: '.brand-scroll-section', start: 'top 90%', toggleActions: 'play none none none' },
      })

      /* ── Contact form ── */
      gsap.from('.contact-left', {
        opacity: 0, x: -40, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: '.contact-section', start: 'top 80%', toggleActions: 'play none none none' },
      })
      gsap.from('.contact-right', {
        opacity: 0, x: 40, duration: 0.9, ease: 'power3.out', delay: 0.1,
        scrollTrigger: { trigger: '.contact-section', start: 'top 80%', toggleActions: 'play none none none' },
      })

    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} className="min-h-screen" style={{ background: '#0E0F11', overflowX: 'clip' }}>

      {/* ═══════════ HERO — yellow/black display type ═══════════ */}
      <section id="hero" className="relative min-h-screen flex flex-col justify-center pt-24 pb-24 overflow-hidden">
        {/* Vertical hairline grid columns */}
        <div className="absolute inset-0 pointer-events-none max-w-6xl mx-auto px-6 hidden md:flex justify-between" aria-hidden="true">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="w-px h-full" style={{ background: 'rgba(255,255,255,0.04)' }} />
          ))}
        </div>
        {/* Dot grid + ambient orbs */}
        <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none"
          style={{ maskImage: 'radial-gradient(ellipse at 30% 40%, black 0%, transparent 70%)', WebkitMaskImage: 'radial-gradient(ellipse at 30% 40%, black 0%, transparent 70%)' }} />
        <div className="absolute inset-0 pointer-events-none">
          <div className="orb orb-a" style={{ top: '10%', left: '6%', width: 560, height: 560, background: 'radial-gradient(circle, rgba(255,214,10,0.09) 0%, transparent 70%)' }} />
          <div className="orb orb-b" style={{ bottom: '12%', right: '4%', width: 460, height: 460, background: 'radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)' }} />
        </div>

        <div className="hero-inner max-w-6xl mx-auto px-6 relative w-full">

          {/* Eyebrow */}
          <div className="hero-eyebrow flex items-center gap-3 mb-10">
            <span className="rotate-slow inline-block text-lg leading-none" style={{ color: LIME }}>✦</span>
            <span className="text-xs font-bold tracking-[0.25em] uppercase" style={{ color: LIME }}>Creatives Collective · Remote Agency</span>
          </div>

          {/* Headline — stacked display type */}
          <h1 className="font-bold leading-[0.92] mb-4 uppercase" style={{ fontFamily: 'var(--heading-font)', letterSpacing: '-0.03em' }}>
            <MaskedLine className="text-white text-[clamp(3rem,9vw,8rem)]">We Make</MaskedLine>
            <MaskedLine className="text-[clamp(3rem,9vw,8rem)]">
              <span className="px-3 inline-block" style={{ background: LIME, color: '#0E0F11' }}>Brands</span>{' '}
              <span className="text-white">Impossible</span>
            </MaskedLine>
          </h1>
          {/* Giant outline line, right-aligned */}
          <div className="overflow-hidden pb-[0.18em] -mb-[0.18em] mb-8">
            <div className="hero-line outline-text font-bold uppercase leading-[0.92] text-right text-[clamp(3.5rem,11vw,10rem)]"
              style={{ fontFamily: 'var(--heading-font)', letterSpacing: '-0.03em' }}>
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

      {/* ═══════════ BRAND SCROLL ═══════════ */}
      <div className="brand-scroll-section py-16 border-b" style={{ background: '#0E0F11', borderColor: 'rgba(255,255,255,0.06)' }}>
        <div className="max-w-6xl mx-auto px-6 mb-8 flex items-center gap-4">
          <span className="text-xs font-bold tracking-[0.22em] uppercase" style={{ color: '#9CA3AF' }}>Brands & Clients</span>
          <span className="flex-1 h-px" style={{ background: 'rgba(255,255,255,0.06)' }} />
          <span className="text-xs font-bold tracking-[0.22em] uppercase" style={{ color: '#9CA3AF' }}>9 served</span>
        </div>
        <div className="marquee" aria-hidden="true">
          {[0, 1].map((dup) => (
            <div key={dup} className="marquee-track" style={{ animationDuration: '36s', animationDirection: dup === 1 ? 'normal' : 'normal' }}>
              {brands.map((b) => (
                <span key={b.name + dup} className="flex items-center shrink-0 px-8">
                  <span className="flex flex-col items-center gap-0.5">
                    <span className="text-white font-black text-base md:text-lg whitespace-nowrap tracking-tight" style={{ fontFamily: 'var(--heading-font)' }}>
                      {b.name}
                    </span>
                    <span className="text-[9px] font-bold uppercase tracking-[0.18em]" style={{ color: 'rgba(255,214,10,0.6)' }}>{b.category}</span>
                  </span>
                  <span className="ml-8 text-lg" style={{ color: 'rgba(255,255,255,0.12)' }}>·</span>
                </span>
              ))}
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
                <h3 className="text-white text-2xl font-black mb-3 transition-colors duration-300 group-hover:text-[#FFD60A]">{s.title}</h3>
                <p className="text-sm leading-relaxed mb-6" style={{ color: '#9CA3AF' }}>{s.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {s.tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-bold px-2.5 py-1 rounded-full border transition-transform duration-200 hover:scale-105"
                      style={{ background: 'rgba(255,214,10,0.07)', color: 'rgba(255,214,10,0.85)', borderColor: 'rgba(255,214,10,0.2)' }}>
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
                      style={{ background: 'rgba(255,214,10,0.07)', color: LIME, borderColor: 'rgba(255,214,10,0.25)' }}>
                      {p.category}
                    </span>
                    <span className="text-[10px]" style={{ color: '#9CA3AF' }}>by {p.by}</span>
                  </div>
                  <ExternalLink className="w-4 h-4 transition-all duration-300 mt-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" style={{ color: '#9CA3AF' }} />
                </div>
                <h3 className="text-white font-black text-xl mb-2 transition-colors duration-300 group-hover:text-[#FFD60A]">{p.title}</h3>
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
                    style={{ background: LIME, color: '#0E0F11', boxShadow: '0 8px 30px rgba(255,214,10,0.2)' }}>
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

                {/* Experience timeline — Agenko award-list rows */}
                <div className="mb-7 border-t" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
                  {m.experience.map((x) => (
                    <div key={x.role + x.period}
                      className="flex flex-col sm:flex-row sm:items-baseline gap-0.5 sm:gap-4 py-3 border-b transition-colors duration-200 hover:bg-white/[0.02]"
                      style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
                      <span className="shrink-0 sm:w-24 text-[11px] font-bold uppercase tracking-wider" style={{ color: LIME }}>
                        {x.period}
                      </span>
                      <div className="min-w-0">
                        <span className="block text-white text-sm font-bold">{x.role}</span>
                        <span className="block text-xs mt-0.5" style={{ color: '#9CA3AF' }}>{x.org}</span>
                      </div>
                    </div>
                  ))}
                </div>

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
                className="text-white font-semibold transition-colors hover:text-[#FFD60A]">
                Tell us about your project →
              </a>
            </span>
          </div>
        </div>
      </section>

      {/* ═══════════ CONNECT — split layout with form ═══════════ */}
      <section id="connect" className="contact-section cta-section scroll-mt-20 py-28 relative overflow-hidden" style={{ background: '#0B0C0E' }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 30% 60%, rgba(255,214,10,0.06) 0%, transparent 55%)' }} />

        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

            {/* Left — copy + contact methods */}
            <div className="contact-left">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-px" style={{ background: 'rgba(255,214,10,0.5)' }} />
                <span className="text-xs font-bold tracking-widest uppercase" style={{ color: LIME }}>Work With Us</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight" style={{ fontFamily: 'var(--heading-font)' }}>
                Have a project?<br />
                <span style={{ color: LIME }}>Let's talk.</span>
              </h2>
              <p className="text-base leading-relaxed mb-10" style={{ color: '#9CA3AF' }}>
                No RFPs. No formalities. Just a conversation about what you're building and how we can help. If there's a fit, we'll know quickly.
              </p>

              {/* Contact methods */}
              <div className="space-y-4 mb-10">
                <a href="mailto:jay@scrpt.in"
                  className="flex items-center gap-4 p-4 rounded-xl border group transition-all duration-200 hover:border-[#FFD60A]/40"
                  style={{ borderColor: 'rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.02)' }}>
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors"
                    style={{ background: 'rgba(255,214,10,0.1)' }}>
                    <Send className="w-4 h-4" style={{ color: LIME }} />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">Email us</p>
                    <p className="text-xs" style={{ color: '#9CA3AF' }}>jay@scrpt.in</p>
                  </div>
                  <ArrowRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1" style={{ color: LIME }} />
                </a>
                <a href="https://www.linkedin.com/in/jaysahastrabudhe/" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl border group transition-all duration-200 hover:border-[#FFD60A]/40"
                  style={{ borderColor: 'rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.02)' }}>
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(255,214,10,0.1)' }}>
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill={LIME}>
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">LinkedIn</p>
                    <p className="text-xs" style={{ color: '#9CA3AF' }}>Jay Sahastrabudhe</p>
                  </div>
                  <ArrowRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1" style={{ color: LIME }} />
                </a>
              </div>

              {/* Team avatars */}
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  {team.map((m, i) => (
                    <div key={m.initials}
                      className="w-10 h-10 rounded-full border-2 flex items-center justify-center text-xs font-black animate-floaty"
                      style={{ background: LIME, color: '#0E0F11', borderColor: '#0B0C0E', animationDelay: `${i * 0.7}s` }}>
                      {m.initials}
                    </div>
                  ))}
                </div>
                <p className="text-sm" style={{ color: '#9CA3AF' }}>
                  <span className="text-white font-semibold">Usually reply same day.</span>
                </p>
              </div>

              <p className="mt-8 text-xs flex items-center gap-1.5" style={{ color: '#6B7280' }}>
                <MapPin className="w-3 h-3" /> Pune, Maharashtra, India · Remote-first
              </p>
            </div>

            {/* Right — contact form */}
            <div className="contact-right">
              <div className="rounded-2xl border p-8 md:p-10" style={{ background: '#15171B', borderColor: 'rgba(255,255,255,0.08)' }}>
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 animate-floaty"
                      style={{ background: 'rgba(255,214,10,0.12)' }}>
                      <CheckCircle className="w-8 h-8" style={{ color: LIME }} />
                    </div>
                    <h3 className="text-white font-black text-2xl mb-3">Message ready!</h3>
                    <p className="text-sm leading-relaxed" style={{ color: '#9CA3AF' }}>
                      Your email client opened with everything filled in. We typically respond within a few hours.
                    </p>
                    <button onClick={() => setSubmitted(false)}
                      className="mt-8 text-sm font-semibold transition-colors hover:text-white"
                      style={{ color: '#9CA3AF' }}>
                      Send another →
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#9CA3AF' }}>Your name</label>
                      <input
                        type="text" name="name" required value={form.name} onChange={handleFormChange}
                        placeholder="Rahul Sharma"
                        className="w-full rounded-xl px-4 py-3 text-sm text-white outline-none transition-all duration-200 focus:border-[#FFD60A]/50"
                        style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', fontFamily: 'Inter, sans-serif' }}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#9CA3AF' }}>Email</label>
                      <input
                        type="email" name="email" required value={form.email} onChange={handleFormChange}
                        placeholder="rahul@yourcompany.com"
                        className="w-full rounded-xl px-4 py-3 text-sm text-white outline-none transition-all duration-200 focus:border-[#FFD60A]/50"
                        style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', fontFamily: 'Inter, sans-serif' }}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#9CA3AF' }}>Budget range</label>
                      <select name="budget" value={form.budget} onChange={handleFormChange}
                        className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all duration-200 focus:border-[#FFD60A]/50 appearance-none"
                        style={{ background: '#1C1E23', border: '1px solid rgba(255,255,255,0.1)', color: form.budget ? '#fff' : '#6B7280', fontFamily: 'Inter, sans-serif' }}>
                        <option value="" style={{ color: '#6B7280' }}>Select a range…</option>
                        {budgetOptions.map((o) => <option key={o} value={o} style={{ color: '#fff', background: '#1C1E23' }}>{o}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#9CA3AF' }}>Tell us about your project</label>
                      <textarea
                        name="message" required value={form.message} onChange={handleFormChange} rows={4}
                        placeholder="What are you building? What's the challenge?"
                        className="w-full rounded-xl px-4 py-3 text-sm text-white outline-none transition-all duration-200 focus:border-[#FFD60A]/50 resize-none"
                        style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', fontFamily: 'Inter, sans-serif' }}
                      />
                    </div>
                    <button type="submit"
                      className="magnetic btn-shine btn-primary w-full justify-center text-sm py-4 font-bold">
                      <Send className="w-4 h-4" />
                      <FlipLabel>Send message</FlipLabel>
                    </button>
                    <p className="text-center text-xs" style={{ color: '#6B7280' }}>Opens your email client — no data stored.</p>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}
