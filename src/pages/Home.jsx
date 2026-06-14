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

/* Gradient placeholders — swap src with real image paths once assets are ready */
const creatives = [
  { id: 1,  title: '20M+ Views — Why It Worked', category: 'LinkedIn Posts',    by: 'Jay',      src: '/creatives/c1-linkedin-why-it-worked.png', grad: 'from #0E0F11 to #1a1a2e', span: 'row' },
  { id: 2,  title: 'D2C Brand Campaign',         category: 'Performance',       by: 'Priyanka', src: null, grad: 'from #111 to #1C1E23',    span: 'tall' },
  { id: 3,  title: 'YouTube Thumbnail Series',   category: 'Content Design',    by: 'Jay',      src: null, grad: 'from #0f0f0f to #1a1200',  span: 'normal' },
  { id: 4,  title: 'Sthira Naturals — Branding', category: 'Brand Identity',    by: 'Priyanka', src: null, grad: 'from #0a1a0a to #0E0F11',  span: 'normal' },
  { id: 5,  title: 'Celebrity Campaign',         category: 'Social Media',      by: 'Priyanka', src: null, grad: 'from #1a0a0a to #0E0F11',  span: 'row' },
  { id: 6,  title: 'JawanDrop — Web Design',     category: 'Web · UI',          by: 'Jay',      src: null, grad: 'from #0E0F11 to #141414',  span: 'normal' },
  { id: 7,  title: 'EV Brand — Joy e Bike',      category: 'Social · Content',  by: 'Priyanka', src: null, grad: 'from #080d12 to #0E0F11',  span: 'normal' },
  { id: 8,  title: 'Rom Guruji — Visual Brand',  category: 'Content Design',    by: 'Jay',      src: null, grad: 'from #1a1500 to #0E0F11',  span: 'tall' },
]

const team = [
  {
    name: 'Jay Sahastrabudhe',
    initials: 'JS',
    role: 'Performance Marketing · Meta Ads · Lead Gen',
    location: 'Pune, Maharashtra',
    bio: '8 brands. 15M+ views. 6× ROI on Meta. Not luck — a system. Started Rom Guruji in lockdown 2020, grew it to 23K subscribers, then turned content instincts into full-funnel performance marketing. Owns Meta Ads → MQL → conversion end-to-end. Builds React and WordPress sites alongside campaigns.',
    experience: [
      { period: '2026 — Now', role: 'Performance Marketing Manager', org: 'EdTech · Full-funnel Meta Ads · 6× ROI' },
      { period: '2024 — Now', role: 'Executive MBA', org: 'Symbiosis (SIMS), Pune' },
      { period: '2024 – 2026', role: 'Head of Digital Marketing', org: 'FullHouse · Sitashree Laxminarayan · Nirva Health · Macmerise' },
      { period: '2023 – 2024', role: 'Organic Growth Expert', org: 'Nirva Health · +20% traffic · lead scoring · A/B testing' },
      { period: '2022 – 2023', role: 'Creative Social Media Head', org: 'Macmerise · celebrity clients · +40% brand awareness' },
      { period: '2020 – 2026', role: 'Founder, Rom Guruji', org: 'YouTube · 23K subs · 15M+ views' },
    ],
    skills: ['Performance Marketing', 'Meta Ads · Lead Gen', 'React / WordPress', 'Content & SEO', 'EdTech Growth'],
    linkedin: 'https://www.linkedin.com/in/jaysahastrabudhe/',
  },
  {
    name: 'Priyanka Bhalekar',
    initials: 'PB',
    role: 'Brand Strategy · Performance Marketing · D2C',
    location: 'Pune, Maharashtra',
    bio: '134M+ reach. 7X growth. 5.29X ROAS. Brand strategist and senior performance marketer with 5+ years scaling D2C, FMCG, Healthcare, EV, and Real Estate brands. Led celebrity campaigns with Saif Ali Khan and Kareena Kapoor Khan. Generated 50K+ qualified leads across industries.',
    experience: [
      { period: '2024 — Now', role: 'Brand Architect', org: 'Sthira Naturals · D2C wellness · 7X business growth' },
      { period: '2023 – 2024', role: 'Sr. Social Media Strategist', org: 'Joy e Bike · EV industry · B2B & B2C dealer strategy' },
      { period: '2021 – 2023', role: 'Sr. Digital Marketeer', org: 'AppBell Technologies · USA & India · full-funnel campaigns' },
      { period: '2020 — Now', role: 'Growth Marketing Consultant', org: 'Freelance · 134M+ reach · 5.29X ROAS · celebrity campaigns' },
      { period: '2018 – 2019', role: 'SEO Analyst', org: 'DecisionDatabases.com · 500+ pages · top 10 rankings' },
    ],
    skills: ['Brand Strategy', 'D2C Growth', 'Performance Marketing', 'Meta · Google · Amazon Ads', 'AI Marketing', 'SEO · SEM'],
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
  { name: 'Sthira Naturals',        category: 'D2C · FMCG' },
  { name: 'Jay Defence Academy',    category: 'Education' },
  { name: 'Joy e Bike',             category: 'EV · Mobility' },
  { name: 'Pruthvi Motors',          category: 'EV · Automotive' },
  { name: 'Sitashree Laxminarayan', category: 'Brand' },
  { name: 'Nirva Health',           category: 'Health' },
  { name: 'Macmerise',              category: 'E-commerce' },
  { name: 'Rom Guruji',             category: 'YouTube' },
  { name: 'DataGuru Research',      category: 'B2B Research' },
  { name: 'BLiive',                 category: 'Consulting' },
  { name: 'Real Estate Client',     category: 'Real Estate' },
]

const budgetOptions = ['< ₹25K', '₹25K – ₹75K', '₹75K – ₹2L', '₹2L+', 'Let\'s talk']

/* ─────────────────────────── HELPERS ─────────────────────────── */

/* Scramble text reveal — randomises chars then resolves left→right */
function scrambleText(el, finalText, { duration = 900, delay = 0 } = {}) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ·—/\\'
  const totalFrames = Math.floor(duration / 16)
  let frame = 0, raf, timeout
  const tick = () => {
    const progress = frame / totalFrames
    el.textContent = finalText.split('').map((char, i) => {
      if (char === ' ') return ' '
      if (i / finalText.length < progress * 1.35) return char
      return chars[Math.floor(Math.random() * chars.length)]
    }).join('')
    frame++
    if (frame <= totalFrames) raf = requestAnimationFrame(tick)
    else el.textContent = finalText
  }
  timeout = setTimeout(() => { raf = requestAnimationFrame(tick) }, delay)
  return () => { clearTimeout(timeout); cancelAnimationFrame(raf) }
}

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
  const [sending, setSending] = useState(false)
  const [sendError, setSendError] = useState(null)

  const handleFormChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    setSendError(null)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.error || 'Something went wrong')
      }
      setSubmitted(true)
    } catch (err) {
      setSendError(err.message)
    } finally {
      setSending(false)
    }
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
      /* Text scramble on eyebrow label after it fades in */
      const eyebrowLabel = document.querySelector('.hero-scramble')
      if (eyebrowLabel) scrambleText(eyebrowLabel, eyebrowLabel.dataset.text || eyebrowLabel.textContent, { duration: 1100, delay: 350 })
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

      /* ── Creatives grid ── */
      gsap.utils.toArray('.creative-item').forEach((el, i) => {
        gsap.from(el, {
          opacity: 0, y: 48, scale: 0.96, duration: 0.85, ease: 'power3.out',
          delay: (i % 3) * 0.08,
          scrollTrigger: { trigger: el, start: 'top 92%', toggleActions: 'play none none none' },
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
            <span className="hero-scramble text-xs font-bold tracking-[0.25em] uppercase" data-text="CREATIVES COLLECTIVE · REMOTE AGENCY" style={{ color: LIME }}>CREATIVES COLLECTIVE · REMOTE AGENCY</span>
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
          <span className="text-xs font-bold tracking-[0.22em] uppercase" style={{ color: '#9CA3AF' }}>12 served</span>
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

      {/* ═══════════ SERVICES — bento grid ═══════════ */}
      <section id="services" className="scroll-mt-20 py-28" style={{ background: '#0B0C0E' }}>
        <div className="max-w-6xl mx-auto px-6">

          <div className="section-reveal mb-16 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div className="relative">
              <span className="section-num" aria-hidden="true">01</span>
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

          {/* Bento grid: [2/3 | 1/3] top row, [1/3 | 2/3] bottom row */}
          <div className="grid md:grid-cols-3 gap-5">
            {services.map((s, i) => {
              const isBig = i === 0 || i === 3
              return (
                <div key={s.number}
                  className={`service-card spotlight-card glass-card rounded-2xl p-8 md:p-10 group flex flex-col justify-between ${isBig ? 'bento-lg' : 'bento-sm'}`}>
                  <div>
                    <div className="flex items-start justify-between mb-6">
                      <span className="text-6xl font-black outline-text leading-none" style={{ fontFamily: 'var(--heading-font)' }}>{s.number}</span>
                      <div className="w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 group-hover:rotate-[-45deg] group-hover:border-[#FFD60A]/40"
                        style={{ borderColor: 'rgba(255,255,255,0.12)' }}>
                        <ArrowRight className="w-4 h-4" style={{ color: '#9CA3AF' }} />
                      </div>
                    </div>
                    <h3 className="text-white font-black mb-3 transition-colors duration-300 group-hover:text-[#FFD60A]"
                      style={{ fontSize: isBig ? 'clamp(1.4rem,2.5vw,2rem)' : '1.25rem' }}>
                      {s.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: '#9CA3AF' }}>{s.desc}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-6">
                    {s.tags.map((tag) => (
                      <span key={tag} className="text-[10px] font-bold px-2.5 py-1 rounded-full border transition-transform duration-200 hover:scale-105"
                        style={{ background: 'rgba(255,214,10,0.07)', color: 'rgba(255,214,10,0.85)', borderColor: 'rgba(255,214,10,0.2)' }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══════════ PROCESS — Agenko step row ═══════════ */}
      <section id="process" className="scroll-mt-20 py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="section-reveal text-center mb-16">
            <div className="reveal-rest mb-4 relative inline-block">
              <span className="section-num" style={{ right: 'auto', left: '50%', transform: 'translateX(-50%)' }} aria-hidden="true">03</span>
              <span className="sub-title no-line">How We Work</span>
            </div>
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

      {/* ═══════════ WORK — editorial list ═══════════ */}
      <section id="work" className="scroll-mt-20 py-28" style={{ background: '#0B0C0E' }}>
        <div className="max-w-6xl mx-auto px-6">

          <div className="section-reveal mb-14 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div className="relative">
              <span className="section-num" aria-hidden="true">02</span>
              <div className="reveal-rest mb-4"><span className="sub-title">Selected Work</span></div>
              <h2 className="text-4xl md:text-6xl font-black leading-tight">
                <span className="block overflow-hidden pb-[0.15em] -mb-[0.15em]"><span className="reveal-line block text-white">Built. Shipped.</span></span>
                <span className="block overflow-hidden pb-[0.15em] -mb-[0.15em]">
                  <span className="reveal-line block" style={{ color: LIME }}>Performing.</span>
                </span>
              </h2>
            </div>
            <p className="reveal-rest max-w-sm text-sm leading-relaxed lg:text-right" style={{ color: '#9CA3AF' }}>
              Real clients, real numbers. Click any row to see it live.
            </p>
          </div>

          <div>
            {work.map((p, i) => (
              <a key={p.title} href={p.url} target="_blank" rel="noopener noreferrer"
                className="work-card work-row group flex items-start gap-5 md:gap-10 py-6 md:py-7 block">
                <span className="text-[11px] font-black mt-1.5 w-6 shrink-0 tabular-nums"
                  style={{ color: 'rgba(255,214,10,0.45)', fontFamily: 'var(--heading-font)' }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="text-white font-black text-xl md:text-2xl transition-colors duration-200 group-hover:text-[#FFD60A]"
                      style={{ fontFamily: 'var(--heading-font)' }}>
                      {p.title}
                    </h3>
                    <span className="text-[9px] font-bold px-2 py-0.5 rounded-full border"
                      style={{ background: 'rgba(255,214,10,0.07)', color: 'rgba(255,214,10,0.7)', borderColor: 'rgba(255,214,10,0.18)' }}>
                      {p.by}
                    </span>
                  </div>
                  <p className="text-[11px] font-bold uppercase tracking-wider mb-2" style={{ color: 'rgba(255,214,10,0.55)' }}>{p.category}</p>
                  <p className="text-sm leading-relaxed max-w-2xl" style={{ color: '#6B7280' }}>{p.desc}</p>
                </div>
                <div className="shrink-0 mt-1.5 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                  <span className="text-xs font-bold" style={{ color: LIME }}>View</span>
                  <ExternalLink className="w-3.5 h-3.5" style={{ color: LIME }} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ CREATIVES PORTFOLIO ═══════════ */}
      <section id="creatives" className="scroll-mt-20 py-28" style={{ background: '#0E0F11' }}>
        <div className="max-w-6xl mx-auto px-6">

          <div className="section-reveal mb-14 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div className="relative">
              <div className="reveal-rest mb-4"><span className="sub-title">Creative Portfolio</span></div>
              <h2 className="text-4xl md:text-6xl font-black leading-tight">
                <span className="block overflow-hidden pb-[0.15em] -mb-[0.15em]"><span className="reveal-line block text-white">The work</span></span>
                <span className="block overflow-hidden pb-[0.15em] -mb-[0.15em]">
                  <span className="reveal-line block" style={{ color: LIME }}>speaks for itself.</span>
                </span>
              </h2>
            </div>
            <p className="reveal-rest max-w-sm text-sm leading-relaxed lg:text-right" style={{ color: '#9CA3AF' }}>
              Ad creatives, brand campaigns, web design, and content — a curated sample of what we ship.
            </p>
          </div>

          {/* Masonry-style grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {creatives.map((c) => (
              <div key={c.id}
                className="creative-item break-inside-avoid group relative overflow-hidden rounded-2xl border cursor-pointer"
                style={{
                  borderColor: 'rgba(255,255,255,0.07)',
                  aspectRatio: c.span === 'tall' ? '3/4' : c.span === 'row' ? '16/9' : '4/3',
                }}>

                {/* Image or gradient placeholder */}
                {c.src ? (
                  <img src={c.src} alt={c.title} className="w-full h-full object-cover" />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center"
                    style={{ background: 'linear-gradient(135deg, #15171B 0%, #1C1E23 100%)' }}>
                    {/* Dot pattern */}
                    <div className="absolute inset-0 opacity-30"
                      style={{ backgroundImage: 'radial-gradient(rgba(255,214,10,0.12) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                    {/* Upload hint */}
                    <div className="relative flex flex-col items-center gap-3 opacity-30 group-hover:opacity-60 transition-opacity duration-300">
                      <div className="w-10 h-10 rounded-full border-2 border-dashed flex items-center justify-center"
                        style={{ borderColor: LIME }}>
                        <span className="text-xl font-black leading-none" style={{ color: LIME }}>+</span>
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: LIME }}>Add creative</span>
                    </div>
                  </div>
                )}

                {/* Hover overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-5 opacity-0 group-hover:opacity-100 transition-all duration-300"
                  style={{ background: 'linear-gradient(to top, rgba(14,15,17,0.95) 0%, rgba(14,15,17,0.4) 60%, transparent 100%)' }}>
                  <div className="translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full"
                        style={{ background: 'rgba(255,214,10,0.15)', color: LIME }}>
                        {c.category}
                      </span>
                      <span className="text-[9px] font-bold uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.35)' }}>
                        {c.by}
                      </span>
                    </div>
                    <h3 className="text-white font-black text-base leading-tight">{c.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-10 text-center text-xs" style={{ color: '#6B7280' }}>
            Drop your creative files and they'll replace the placeholders instantly.
          </p>
        </div>
      </section>

      {/* ═══════════ TEAM ═══════════ */}
      <section id="team" className="scroll-mt-20 py-28">
        <div className="max-w-6xl mx-auto px-6">

          <div className="section-reveal mb-16">
            <div className="reveal-rest mb-4 relative"><span className="sub-title">The Collective</span></div>
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

                <a href="#connect" onClick={go('connect')}
                  className="inline-flex items-center gap-2 text-sm font-bold transition-colors text-white/60 hover:text-white group-hover:text-white">
                  Work together <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            ))}
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
                <a href="mailto:info@scrpt.in"
                  className="flex items-center gap-4 p-4 rounded-xl border group transition-all duration-200 hover:border-[#FFD60A]/40"
                  style={{ borderColor: 'rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.02)' }}>
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(255,214,10,0.1)' }}>
                    <Send className="w-4 h-4" style={{ color: LIME }} />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">Email us</p>
                    <p className="text-xs" style={{ color: '#9CA3AF' }}>info@scrpt.in</p>
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
                        style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', fontFamily: 'var(--body-font)' }}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#9CA3AF' }}>Email</label>
                      <input
                        type="email" name="email" required value={form.email} onChange={handleFormChange}
                        placeholder="rahul@yourcompany.com"
                        className="w-full rounded-xl px-4 py-3 text-sm text-white outline-none transition-all duration-200 focus:border-[#FFD60A]/50"
                        style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', fontFamily: 'var(--body-font)' }}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#9CA3AF' }}>Budget range</label>
                      <select name="budget" value={form.budget} onChange={handleFormChange}
                        className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all duration-200 focus:border-[#FFD60A]/50 appearance-none"
                        style={{ background: '#1C1E23', border: '1px solid rgba(255,255,255,0.1)', color: form.budget ? '#fff' : '#6B7280', fontFamily: 'var(--body-font)' }}>
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
                        style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', fontFamily: 'var(--body-font)' }}
                      />
                    </div>
                    <button type="submit" disabled={sending}
                      className="magnetic btn-shine btn-primary w-full justify-center text-sm py-4 font-bold disabled:opacity-60 disabled:cursor-not-allowed">
                      <Send className="w-4 h-4" />
                      <FlipLabel>{sending ? 'Sending…' : 'Send message'}</FlipLabel>
                    </button>
                    {sendError && (
                      <p className="text-center text-xs" style={{ color: '#F87171' }}>{sendError}</p>
                    )}
                    <p className="text-center text-xs" style={{ color: '#6B7280' }}>We'll reply within 24 hours.</p>
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
