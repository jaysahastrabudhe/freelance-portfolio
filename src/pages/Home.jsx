import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, ExternalLink, Play, MapPin } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

/* ─────────────────────────── DATA ─────────────────────────── */
const timelineData = [
  {
    year: '2015',
    title: 'The Army Public School, Pune',
    detail: 'Class 12th in Arts with IP. Discipline, structure, and a seed of curiosity about technology.',
    type: 'education',
  },
  {
    year: '2017',
    title: "St. Xavier's College",
    detail: "Bachelor's in Computer Software Technology. Code became a language he could speak.",
    type: 'education',
  },
  {
    year: 'Apr 2020',
    title: 'COVID. Lockdown. A YouTube Channel.',
    detail: 'Nothing to do — so Jay started Rom Guruji. A tech channel. In a bedroom. During a pandemic. It grew.',
    type: 'milestone',
  },
  {
    year: '2021',
    title: 'Vadoo',
    detail: 'Video Content Intern → Content Writer. First real taste of building audience from scratch.',
    type: 'work',
  },
  {
    year: 'Apr 2021',
    title: 'Jaljeevika',
    detail: 'Video Editor. Learning post-production and visual storytelling.',
    type: 'work',
  },
  {
    year: 'Feb 2022',
    title: 'The Teal Mango',
    detail: 'Content Writer covering tech. SEO, keyword research, and making complex topics readable.',
    type: 'work',
  },
  {
    year: 'Mar 2022',
    title: 'Macmerise',
    detail: 'Content Creator & Creative Social Media Head. Celebrity clients. Real paid campaigns. 40% brand awareness growth.',
    type: 'work',
  },
  {
    year: 'Jan 2023',
    title: 'MeRise',
    detail: 'Social Media Specialist. Deepening performance marketing chops.',
    type: 'work',
  },
  {
    year: 'Aug 2023',
    title: 'Nirva Health',
    detail: 'Organic Growth Expert. Content strategy that moved the needle — 20% traffic growth.',
    type: 'work',
  },
  {
    year: 'Jun 2024',
    title: 'Symbiosis Institute of Management Studies',
    detail: 'Executive MBA in Business Administration begins. Marketing meets management.',
    type: 'education',
  },
  {
    year: 'Sep 2024',
    title: 'FullHouse Entertainment & Media',
    detail: 'Social Media Manager → Head of Department. Leading a team. Managing 8+ brands. Building client websites alongside digital campaigns.',
    type: 'work',
    highlight: true,
  },
  {
    year: '2024',
    title: 'JawanDrop · Jay Defence Academy · BLiive',
    detail: '3 live client websites shipped. Real payments. Real users. Full-stack development alongside full-funnel marketing.',
    type: 'project',
    highlight: true,
  },
  {
    year: 'Jan 2026',
    title: "Let's Enterprise",
    detail: 'Performance Marketing Manager. Meta Ads → MQL → enrolled student. Full funnel ownership. 6× ROI.',
    type: 'current',
    highlight: true,
  },
]

const projects = [
  {
    title: 'JawanDrop',
    tag: 'E-commerce · React',
    desc: 'Tribute apparel brand with live Razorpay payments, real-time Supabase inventory, and Pan-India shipping. 2,000+ customers served.',
    url: 'https://jawandrop.in',
    color: '#10B981',
  },
  {
    title: 'Jay Defence Academy',
    tag: 'Institution · WordPress',
    desc: 'Defence exam coaching website for Dharwad. 12+ pages, local SEO, mobile-first. Ranks for defence coaching in North Karnataka.',
    url: 'https://www.jaydefenceacademy.com',
    color: '#F59E0B',
  },
  {
    title: 'BLiive',
    tag: 'Consulting · WordPress',
    desc: "Higher-education transformation platform for a retired Army Colonel's consultancy. 4 service pillars, UGC/NAAC aligned.",
    url: 'https://darkred-leopard-153534.hostingersite.com',
    color: '#8B5CF6',
  },
]

const typeColors = {
  education: '#6366F1',
  work: '#F59E0B',
  project: '#10B981',
  milestone: '#EC4899',
  current: '#06B6D4',
}

/* ─────────────────────────── COMPONENT ─────────────────────────── */
export default function Home() {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {

      /* ── Hero: words slide up ── */
      gsap.from('.hero-word', {
        yPercent: 110,
        duration: 1.1,
        stagger: 0.12,
        ease: 'power4.out',
        delay: 0.2,
      })
      gsap.from('.hero-sub', {
        opacity: 0,
        y: 28,
        duration: 0.9,
        ease: 'power3.out',
        delay: 0.7,
      })
      gsap.from('.hero-tag', {
        opacity: 0,
        x: -16,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
        delay: 0.95,
      })
      gsap.from('.hero-cta', {
        opacity: 0,
        y: 18,
        duration: 0.6,
        ease: 'power2.out',
        delay: 1.3,
      })
      gsap.to('.scroll-hint', {
        opacity: 0,
        scrollTrigger: {
          trigger: '.hero-section',
          start: 'top top',
          end: '25% top',
          scrub: true,
        },
      })

      /* ── Stats counters ── */
      document.querySelectorAll('[data-count]').forEach((el) => {
        const end = parseFloat(el.getAttribute('data-count'))
        const suffix = el.getAttribute('data-suffix') || ''
        const isM = end >= 1000000
        const isK = end >= 1000 && !isM
        const obj = { v: 0 }
        gsap.to(obj, {
          v: end,
          duration: 2.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
          onUpdate() {
            if (isM) el.textContent = (obj.v / 1000000).toFixed(1) + 'M+'
            else if (isK) el.textContent = Math.round(obj.v / 1000) + 'K+'
            else el.textContent = Math.round(obj.v) + suffix
          },
        })
      })

      /* ── Timeline line drawing ── */
      gsap.fromTo(
        '.tl-line-fill',
        { scaleY: 0 },
        {
          scaleY: 1,
          transformOrigin: 'top center',
          ease: 'none',
          scrollTrigger: {
            trigger: '.tl-container',
            start: 'top 75%',
            end: 'bottom 35%',
            scrub: 0.4,
          },
        }
      )

      /* ── Timeline items stagger in ── */
      gsap.utils.toArray('.tl-item').forEach((item) => {
        gsap.from(item, {
          opacity: 0,
          y: 40,
          duration: 0.75,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 87%',
            toggleActions: 'play none none none',
          },
        })
      })

      /* ── Project cards ── */
      gsap.utils.toArray('.proj-card').forEach((card, i) => {
        gsap.from(card, {
          opacity: 0,
          y: 50,
          duration: 0.8,
          ease: 'power3.out',
          delay: i * 0.13,
          scrollTrigger: {
            trigger: card,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
        })
      })

      /* ── Now section ── */
      gsap.from('.now-card', {
        opacity: 0,
        y: 40,
        stagger: 0.18,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.now-section',
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      })

      /* ── CTA section ── */
      gsap.from('.cta-content > *', {
        opacity: 0,
        y: 30,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.cta-section',
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      })

    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} className="bg-[#060A14] min-h-screen overflow-x-hidden">

      {/* ═══════════ HERO ═══════════ */}
      <section className="hero-section relative min-h-screen flex flex-col justify-center pt-20 pb-16 overflow-hidden">
        {/* Grid background */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(rgba(99,102,241,0.07) 1px, transparent 1px)', backgroundSize: '44px 44px' }} />
        {/* Orb: indigo top-right */}
        <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.13) 0%, transparent 65%)' }} />
        {/* Orb: amber bottom-left */}
        <div className="absolute bottom-0 -left-32 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(245,158,11,0.08) 0%, transparent 65%)' }} />

        <div className="relative max-w-6xl mx-auto px-6 w-full">
          {/* Available badge */}
          <div className="hero-tag inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/8 mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-emerald-400 text-xs font-semibold tracking-wide">Available for work · Pune, Maharashtra</span>
          </div>

          {/* Name — word-by-word slide up */}
          <h1 className="font-black text-white tracking-tight leading-none mb-6 text-6xl sm:text-7xl md:text-8xl lg:text-[7rem]">
            {['Jay', 'Sahastrabudhe'].map((word, i) => (
              <span key={word} className="inline-block overflow-hidden mr-4 last:mr-0">
                <span className="hero-word inline-block">{word}</span>
              </span>
            ))}
          </h1>

          {/* Subline */}
          <p className="hero-sub text-[#8899BB] text-lg md:text-xl max-w-2xl leading-relaxed mb-8">
            I grew a YouTube channel to{' '}
            <span className="text-amber-400 font-bold">23K subscribers</span> during lockdown,
            managed{' '}
            <span className="text-indigo-400 font-bold">8 brands</span>{' '}to 15M+ views,
            and shipped{' '}
            <span className="text-emerald-400 font-bold">3 live client websites</span>{' '}along the way.
            This is that story.
          </p>

          {/* Role tags */}
          <div className="flex flex-wrap gap-2 mb-10">
            {[
              { label: 'Performance Marketing', c: '#F59E0B' },
              { label: 'Meta Ads · Lead Gen', c: '#6366F1' },
              { label: 'Content Creator', c: '#10B981' },
              { label: 'Web Developer', c: '#06B6D4' },
            ].map(({ label, c }) => (
              <span key={label} className="hero-tag px-3 py-1.5 rounded-full text-xs font-semibold border"
                style={{ color: c, background: c + '15', borderColor: c + '40' }}>
                {label}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="hero-cta flex flex-wrap gap-3">
            <a href="#story"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm text-white transition-all"
              style={{ background: 'linear-gradient(135deg,#6366F1,#06B6D4)' }}>
              Read My Story <ArrowRight className="w-4 h-4" />
            </a>
            <Link to="/contact" className="btn-secondary text-sm">
              Work With Me
            </Link>
            <a href="https://www.linkedin.com/in/jaysahastrabudhe/" target="_blank" rel="noopener noreferrer"
              className="btn-secondary text-sm">
              LinkedIn <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="scroll-hint absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-[10px] text-[#8899BB] tracking-[0.25em] uppercase">Scroll to explore</span>
          <div className="w-px h-10 bg-gradient-to-b from-indigo-400/70 to-transparent" />
        </div>
      </section>

      {/* ═══════════ STATS STRIP ═══════════ */}
      <section className="py-14 border-y border-white/5" style={{ background: '#040710' }}>
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { end: 23000, suffix: '', label: 'YouTube Subscribers' },
            { end: 15000000, suffix: '', label: 'Total Views' },
            { end: 8, suffix: '+', label: 'Brands Managed' },
            { end: 6, suffix: '×', label: 'ROI on Meta Ads' },
          ].map(({ end, suffix, label }) => (
            <div key={label}>
              <div data-count={end} data-suffix={suffix}
                className="text-4xl md:text-5xl font-black"
                style={{ background: 'linear-gradient(135deg,#6366F1,#06B6D4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                {end >= 1000000 ? '15M+' : end >= 1000 ? '23K+' : end + suffix}
              </div>
              <p className="text-[#8899BB] text-xs mt-2 leading-snug">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════ TIMELINE ═══════════ */}
      <section id="story" className="py-28 relative">
        <div className="max-w-5xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-20">
            <p className="section-tag mb-3">The Journey</p>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
              From a lockdown bedroom<br />
              <span style={{ background: 'linear-gradient(135deg,#6366F1,#06B6D4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                to 15 million views.
              </span>
            </h2>
          </div>

          {/* Timeline container */}
          <div className="tl-container relative">
            {/* Track */}
            <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-white/5" />
            {/* Animated fill */}
            <div className="tl-line-fill absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px origin-top"
              style={{ background: 'linear-gradient(to bottom, #6366F1 0%, #F59E0B 40%, #10B981 70%, #06B6D4 100%)' }} />

            {/* Items */}
            <div className="space-y-10 md:space-y-12">
              {timelineData.map((item, i) => {
                const color = typeColors[item.type]
                const isRight = i % 2 !== 0 // desktop: alternate sides

                return (
                  <div key={i} className={`tl-item relative flex items-start gap-5
                    pl-16 md:pl-0
                    ${isRight ? 'md:flex-row-reverse' : 'md:flex-row'}
                  `}>

                    {/* Content — 45% width on desktop */}
                    <div className={`md:w-[45%] ${isRight ? 'md:text-left md:pl-12' : 'md:text-right md:pr-12'}`}>
                      <span className="inline-block text-xs font-bold px-2.5 py-1 rounded-full mb-2"
                        style={{ background: color + '1A', color, border: `1px solid ${color}40` }}>
                        {item.year}
                      </span>
                      <h3 className={`font-bold text-white mb-1 ${item.highlight ? 'text-lg' : 'text-base'}`}>
                        {item.title}
                      </h3>
                      <p className="text-[#8899BB] text-sm leading-relaxed">{item.detail}</p>
                    </div>

                    {/* Center dot — desktop */}
                    <div className="hidden md:flex md:w-[10%] justify-center flex-shrink-0 pt-1">
                      <div className="w-3.5 h-3.5 rounded-full border-2 transition-all"
                        style={{
                          background: item.highlight ? color : color + '30',
                          borderColor: color,
                          boxShadow: item.highlight ? `0 0 14px ${color}80` : 'none',
                        }} />
                    </div>

                    {/* Spacer — desktop */}
                    <div className="hidden md:block md:w-[45%]" />

                    {/* Dot — mobile (absolute) */}
                    <div className="absolute left-4 top-1.5 md:hidden">
                      <div className="w-3 h-3 rounded-full border-2"
                        style={{
                          background: item.highlight ? color : color + '30',
                          borderColor: color,
                          boxShadow: item.highlight ? `0 0 10px ${color}80` : 'none',
                        }} />
                    </div>

                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ PROJECTS ═══════════ */}
      <section className="py-24" style={{ background: '#040710' }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-14">
            <p className="section-tag mb-3">Built During FullHouse</p>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
              3 live websites.<br />
              <span style={{ background: 'linear-gradient(135deg,#10B981,#06B6D4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Real clients. Real results.
              </span>
            </h2>
            <p className="text-[#8899BB] mt-4 max-w-xl text-sm leading-relaxed">
              While heading digital at FullHouse, Jay also built full-stack websites for clients —
              e-commerce, institutional, and consulting — shipping all three in 2024.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {projects.map((p) => (
              <a key={p.title} href={p.url} target="_blank" rel="noopener noreferrer"
                className="proj-card glass-card rounded-2xl p-6 group hover:scale-[1.02] transition-transform duration-300">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full"
                    style={{ background: p.color + '1A', color: p.color, border: `1px solid ${p.color}40` }}>
                    {p.tag}
                  </span>
                  <ExternalLink className="w-4 h-4 text-[#8899BB] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-white font-bold text-xl mb-2">{p.title}</h3>
                <p className="text-[#8899BB] text-sm leading-relaxed">{p.desc}</p>
                <p className="mt-5 text-xs font-bold" style={{ color: p.color }}>View live site →</p>
              </a>
            ))}
          </div>

          <div className="mt-8">
            <Link to="/projects" className="btn-secondary text-sm">
              All Projects <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════ ROM GURUJI ═══════════ */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(255,0,0,0.05) 0%, transparent 65%)' }} />
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          {/* YouTube play button */}
          <div className="w-16 h-16 rounded-2xl bg-[#FF0000] flex items-center justify-center mx-auto mb-6 shadow-lg"
            style={{ boxShadow: '0 0 40px rgba(255,0,0,0.25)' }}>
            <Play className="w-7 h-7 text-white fill-white" />
          </div>
          <p className="section-tag mb-3">The Channel That Started It All</p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Rom Guruji <span className="text-[#FF0000]">—</span><br />
            <span className="text-[#FF4444]">23K subscribers. 5 years. 15M views.</span>
          </h2>
          <p className="text-[#8899BB] text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            April 2020. The city was locked down. Jay opened a camera.
            What started as something to do in quarantine turned into a platform that taught him
            content strategy, SEO, community building, and how audiences actually think.
            Everything that came after — all the marketing, all the web work — was built on that foundation.
          </p>
          <a href="https://youtube.com/c/RomGuruji" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm text-white transition-all hover:opacity-90"
            style={{ background: '#FF0000', boxShadow: '0 4px 20px rgba(255,0,0,0.3)' }}>
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            Visit Rom Guruji
          </a>
        </div>
      </section>

      {/* ═══════════ NOW ═══════════ */}
      <section className="now-section py-24" style={{ background: '#040710' }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="section-tag mb-3">Right Now · May 2026</p>
            <h2 className="text-4xl md:text-5xl font-black text-white">
              What I'm building<br />
              <span style={{ background: 'linear-gradient(135deg,#6366F1,#06B6D4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                today.
              </span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                org: "Let's Enterprise",
                role: 'Performance Marketing Manager',
                since: 'Jan 2026',
                color: '#F59E0B',
                desc: 'Building and optimizing Meta Ads funnels for an experiential BBA program in Pune. Full funnel: awareness → MQL → enrolled student. 6× ROI on Meta.',
                active: true,
              },
              {
                org: 'Symbiosis (SIMS)',
                role: 'Executive MBA',
                since: 'Jun 2024',
                color: '#6366F1',
                desc: 'Business Administration & Management. Combining a CS foundation and 6 years of hands-on marketing with formal management education.',
                active: true,
              },
              {
                org: 'Freelance',
                role: 'Web Developer & Marketer',
                since: 'Ongoing',
                color: '#10B981',
                desc: 'Selective projects — React apps, WordPress sites, Supabase backends, performance marketing audits. If you have something interesting, let\'s talk.',
                active: true,
              },
            ].map((item) => (
              <div key={item.org} className="now-card glass-card rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full"
                    style={{ background: item.color + '1A', color: item.color, border: `1px solid ${item.color}40` }}>
                    Since {item.since}
                  </span>
                  <span className="flex items-center gap-1.5 text-[11px] text-emerald-400 font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Active
                  </span>
                </div>
                <h3 className="text-white font-bold text-lg mb-1">{item.org}</h3>
                <p className="text-sm font-semibold mb-3" style={{ color: item.color }}>{item.role}</p>
                <p className="text-[#8899BB] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ CTA ═══════════ */}
      <section className="cta-section py-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 50% 40%, rgba(99,102,241,0.12) 0%, transparent 60%)' }} />
        <div className="cta-content max-w-3xl mx-auto px-6 text-center relative">
          <p className="section-tag mb-4">Let's Build Together</p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-5">
            Got a project?<br />
            <span style={{ background: 'linear-gradient(135deg,#6366F1,#06B6D4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Let's talk.
            </span>
          </h2>
          <p className="text-[#8899BB] text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Whether it's Meta Ads, a website, or a full growth strategy — I bring the full-stack
            marketing + development perspective to every brief.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm text-white"
              style={{ background: 'linear-gradient(135deg,#6366F1,#06B6D4)' }}>
              Start a Conversation <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="https://www.linkedin.com/in/jaysahastrabudhe/" target="_blank" rel="noopener noreferrer"
              className="btn-secondary text-sm">
              Connect on LinkedIn <ExternalLink className="w-4 h-4" />
            </a>
          </div>
          <p className="mt-8 text-[#8899BB] text-sm flex items-center justify-center gap-1.5">
            <MapPin className="w-3.5 h-3.5" /> Pune, Maharashtra · Available for remote projects across India
          </p>
        </div>
      </section>

    </div>
  )
}
