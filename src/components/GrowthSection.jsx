import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/* ────────────────── STAGE DATA ────────────────── */
const stages = [
  {
    id: 'intro',
    isIntro: true,
    accent: '#818CF8',
    bg: 'radial-gradient(ellipse 120% 80% at 50% 20%, #0E1330 0%, #070A1A 50%, #04060F 100%)',
  },
  {
    id: 'student',
    year: '2017 – 2020',
    chapter: 'Chapter 01',
    title: 'The Student',
    context: "St. Xavier's College · Pune",
    copy: 'A CS degree and a quiet curiosity. The foundations — logic, structure, patience — before the spark.',
    accent: '#D4922A',
    bg: 'radial-gradient(ellipse 120% 70% at 50% 0%, #3A2000 0%, #1A0E00 40%, #0A0600 100%)',
    pose: 'student',
    logos: [
      { mono: "X", name: "St. Xavier's" },
      { mono: 'A', name: 'Army Public School' },
    ],
  },
  {
    id: 'creator',
    year: 'Apr 2020',
    chapter: 'Chapter 02',
    title: 'The Creator',
    context: 'Rom Guruji · YouTube',
    copy: 'Lockdown. A camera. A channel about tech. 23K subscribers and 15M views — and a real education in how audiences think.',
    accent: '#818CF8',
    bg: 'radial-gradient(ellipse 100% 80% at 50% 55%, #1B1550 0%, #0C0A2E 50%, #05030F 100%)',
    pose: 'creator',
    logos: [
      { mono: '▶', name: 'Rom Guruji' },
    ],
  },
  {
    id: 'craftsman',
    year: '2022 – 2025',
    chapter: 'Chapter 03',
    title: 'The Craftsman',
    context: 'Macmerise · Nirva · FullHouse',
    copy: 'Celebrity campaigns, organic growth, and a Head of Department chair. 8 brands, full-funnel marketing, and 3 client websites built along the way.',
    accent: '#FCD34D',
    bg: 'radial-gradient(ellipse 120% 70% at 50% 0%, #2C1C00 0%, #160E00 50%, #080500 100%)',
    pose: 'craftsman',
    logos: [
      { mono: 'M',  name: 'Macmerise' },
      { mono: 'N',  name: 'Nirva Health' },
      { mono: 'FH', name: 'FullHouse' },
      { mono: 'MR', name: 'MeRise' },
    ],
  },
  {
    id: 'marketer',
    year: 'Jan 2026 →',
    chapter: 'Chapter 04',
    title: 'The Marketer',
    context: "Let's Enterprise · Symbiosis MBA",
    copy: '6× ROI on Meta. Full-funnel ownership. An Executive MBA in motion. The craft, the data, and the story — still being written.',
    accent: '#22D3EE',
    bg: 'radial-gradient(ellipse 100% 60% at 50% 100%, #002835 0%, #001420 60%, #000B14 100%)',
    pose: 'marketer',
    logos: [
      { mono: 'LE', name: "Let's Enterprise" },
      { mono: 'S',  name: 'Symbiosis' },
    ],
  },
]

/* ────────────────── HUMAN SILHOUETTE ──────────────────
   Shared anatomical body + per-pose arms.
   Single fill (accent) inherited from <svg>.                */

const BODY = (
  <>
    {/* Hair crown — adds volume / human read */}
    <path d="M70 42 C68 12 132 12 130 42 C130 24 121 18 100 18 C79 18 70 24 70 42 Z" />
    {/* Head */}
    <ellipse cx="100" cy="46" rx="27" ry="31" />
    {/* Neck */}
    <path d="M92 72 C95 81 105 81 108 72 L106 91 C103 96 97 96 94 91 Z" />
    {/* Torso — sloped shoulders, tapered waist */}
    <path d="M60 99
      C68 90 80 86 100 86
      C120 86 132 90 140 99
      C147 123 149 151 147 181
      C146 207 143 233 139 255
      C120 263 80 263 61 255
      C57 233 54 207 53 181
      C51 151 53 123 60 99 Z" />
    {/* Left leg */}
    <path d="M62 253
      C58 301 58 351 61 399
      C62 425 64 441 66 451
      C73 456 84 454 86 445
      C88 409 90 359 95 301
      C97 281 98 267 99 258
      C86 261 72 260 62 253 Z" />
    {/* Right leg */}
    <path d="M138 253
      C142 301 142 351 139 399
      C138 425 136 441 134 451
      C127 456 116 454 114 445
      C112 409 110 359 105 301
      C103 281 102 267 101 258
      C114 261 128 260 138 253 Z" />
    {/* Left shoe */}
    <path d="M56 449 C56 442 66 440 75 442 C84 444 90 449 90 453 C90 459 80 460 69 459 C60 458 56 455 56 449 Z" />
    {/* Right shoe */}
    <path d="M144 449 C144 442 134 440 125 442 C116 444 110 449 110 453 C110 459 120 460 131 459 C140 458 144 455 144 449 Z" />
  </>
)

/* Right arm hanging at side (shared by student + creator) */
const RIGHT_ARM_DOWN = (
  <>
    <path d="M139 101
      C152 107 158 141 159 173
      C160 197 159 221 156 241
      C151 247 143 245 140 239
      C138 217 137 193 133 163
      C129 135 127 117 125 104 Z" />
    <ellipse cx="158" cy="244" rx="9" ry="11" />
  </>
)

function HumanFigure({ pose, color }) {
  return (
    <svg viewBox="0 0 200 470" fill={color} width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      {BODY}

      {pose === 'student' && (
        <>
          {/* Left arm down, books tucked */}
          <path d="M61 101
            C48 107 42 141 41 173
            C40 197 41 221 44 241
            C49 247 57 245 60 239
            C62 217 63 193 67 163
            C71 135 73 117 75 104 Z" />
          {/* Books */}
          <rect x="17" y="190" width="42" height="9" rx="2" />
          <rect x="17" y="203" width="42" height="9" rx="2" />
          <rect x="20" y="178" width="36" height="10" rx="2" />
          {RIGHT_ARM_DOWN}
        </>
      )}

      {pose === 'creator' && (
        <>
          {/* Left arm raised, camera */}
          <path d="M61 101
            C49 91 38 69 31 50
            C27 40 31 30 40 29
            C49 28 54 37 58 49
            C63 67 70 89 75 105 Z" />
          {/* Camera */}
          <rect x="7" y="20" width="38" height="27" rx="5" />
          <ellipse cx="26" cy="33" rx="10" ry="10" />
          <ellipse cx="26" cy="33" rx="5" ry="5" opacity="0.45" />
          <rect x="35" y="24" width="13" height="8" rx="2" />
          {RIGHT_ARM_DOWN}
        </>
      )}

      {pose === 'craftsman' && (
        <>
          {/* Left hand on hip (elbow out) */}
          <path d="M61 101
            C48 107 42 133 44 155
            C45 169 53 177 64 175
            C71 173 73 161 71 147
            C69 129 71 115 75 104 Z" />
          {/* Right arm extended up-forward, phone */}
          <path d="M139 101
            C155 93 172 79 187 61
            C195 51 197 39 189 33
            C181 27 171 35 163 47
            C153 65 141 87 133 105 Z" />
          <rect x="182" y="17" width="21" height="35" rx="5" />
          <rect x="185" y="23" width="15" height="23" rx="2" opacity="0.4" />
        </>
      )}

      {pose === 'marketer' && (
        <>
          {/* Left arm, slightly open bend */}
          <path d="M61 101
            C47 107 40 135 42 161
            C43 179 51 187 62 185
            C70 183 73 169 70 151
            C68 131 70 115 76 104 Z" />
          {/* Right arm, open gesture */}
          <path d="M139 101
            C156 95 172 83 186 67
            C194 57 196 45 188 39
            C180 33 170 41 162 53
            C153 71 141 89 133 105 Z" />
          <ellipse cx="190" cy="62" rx="12" ry="11" />
        </>
      )}
    </svg>
  )
}

/* ────────────────── FLOATING LOGOS ────────────────── */
const LOGO_POS = [
  { left: '50%', top: '0%' },
  { left: '14%', top: '20%' },
  { left: '84%', top: '12%' },
  { left: '34%', top: '44%' },
]

function FloatingLogos({ logos, accent }) {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {logos.map((logo, i) => {
        const pos = LOGO_POS[i % LOGO_POS.length]
        return (
          <div
            key={logo.name}
            className="absolute animate-floaty"
            style={{
              left: pos.left,
              top: pos.top,
              transform: 'translateX(-50%)',
              animationDelay: `${i * 0.6}s`,
            }}
          >
            <div
              className="flex items-center gap-2 pl-1.5 pr-3 py-1.5 rounded-full backdrop-blur-md whitespace-nowrap"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: `1px solid ${accent}45`,
                boxShadow: `0 4px 20px ${accent}22`,
              }}
            >
              {/* Monogram badge */}
              <span
                className="flex items-center justify-center rounded-full font-black text-white"
                style={{
                  width: 24, height: 24, fontSize: 10,
                  background: `linear-gradient(135deg, ${accent}, ${accent}99)`,
                }}
              >
                {logo.mono}
              </span>
              <span className="text-white/90 text-xs font-semibold tracking-wide">{logo.name}</span>
            </div>
          </div>
        )
      })}
    </div>
  )
}

/* ────────────────── ENVIRONMENT LAYERS ────────────────── */
function AcademicEnv() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-x-0 top-0" style={{ height: 280, background: 'radial-gradient(ellipse 70% 100% at 50% 0%, rgba(212,146,42,0.18) 0%, transparent 100%)' }} />
      {[4, 16, 80, 68].map((l, i) => (
        <div key={i} className="absolute bottom-0" style={{ left: `${l}%`, width: 72, height: 260, border: '2px solid rgba(212,146,42,0.14)', borderRadius: '36px 36px 0 0' }} />
      ))}
      <div className="absolute bottom-0 inset-x-0 h-px" style={{ background: 'rgba(212,146,42,0.12)' }} />
      {[...Array(14)].map((_, i) => (
        <div key={i} className="absolute rounded-full animate-pulse" style={{ width: 2 + (i % 3), height: 2 + (i % 3), left: `${(i * 7.3) % 100}%`, top: `${(i * 11.7) % 75}%`, background: 'rgba(212,146,42,0.55)', animationDelay: `${i * 0.4}s`, animationDuration: '3s' }} />
      ))}
    </div>
  )
}

function CreatorEnv() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute" style={{ top: '42%', left: '50%', transform: 'translate(-50%,-55%)', width: 360, height: 360, borderRadius: '50%', border: '20px solid rgba(129,140,248,0.22)', boxShadow: '0 0 80px rgba(129,140,248,0.14), inset 0 0 50px rgba(129,140,248,0.08)' }} />
      <div className="absolute" style={{ top: '42%', left: '50%', transform: 'translate(-50%,-55%)', width: 420, height: 420, borderRadius: '50%', border: '2px solid rgba(129,140,248,0.07)' }} />
      <div className="absolute bottom-0 inset-x-0" style={{ height: 130, background: 'linear-gradient(to top, rgba(129,140,248,0.07) 0%, transparent 100%)' }} />
      {[...Array(18)].map((_, i) => (
        <div key={i} className="absolute rounded-full animate-pulse" style={{ width: 2 + (i % 3), height: 2 + (i % 3), left: `${(i * 5.4) % 100}%`, top: `${(i * 8.9) % 80}%`, background: i % 2 === 0 ? 'rgba(129,140,248,0.5)' : 'rgba(34,211,238,0.4)', animationDelay: `${i * 0.3}s`, animationDuration: '2.5s' }} />
      ))}
    </div>
  )
}

function CraftsmanEnv() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute" style={{ top: -30, left: '50%', transform: 'translateX(-50%)', width: 0, height: 0, borderLeft: '200px solid transparent', borderRight: '200px solid transparent', borderTop: '280px solid rgba(252,211,77,0.04)' }} />
      <div className="absolute inset-x-0 top-0" style={{ height: 200, background: 'radial-gradient(ellipse 60% 100% at 50% 0%, rgba(252,211,77,0.10) 0%, transparent 100%)' }} />
      <div className="absolute bottom-0 inset-x-0" style={{ height: 90 }}>
        {[...Array(7)].map((_, i) => (
          <div key={i} className="absolute w-full" style={{ bottom: i * 13, height: 1, background: 'rgba(252,211,77,0.07)' }} />
        ))}
      </div>
      {[...Array(10)].map((_, i) => (
        <div key={i} className="absolute rounded-full animate-pulse" style={{ width: 2 + (i % 2), height: 2 + (i % 2), left: `${(i * 9.1) % 100}%`, top: `${20 + (i * 6.3) % 55}%`, background: 'rgba(252,211,77,0.55)', animationDelay: `${i * 0.25}s` }} />
      ))}
    </div>
  )
}

function MarketerEnv() {
  const bokeh = [
    { x: 8, y: 28, r: 30, c: 'rgba(245,158,11,0.15)' },
    { x: 16, y: 58, r: 20, c: 'rgba(239,68,68,0.12)' },
    { x: 26, y: 38, r: 14, c: 'rgba(34,211,238,0.18)' },
    { x: 74, y: 30, r: 24, c: 'rgba(99,102,241,0.15)' },
    { x: 84, y: 52, r: 32, c: 'rgba(245,158,11,0.12)' },
    { x: 90, y: 22, r: 16, c: 'rgba(255,255,255,0.08)' },
    { x: 93, y: 68, r: 22, c: 'rgba(34,211,238,0.12)' },
    { x: 47, y: 14, r: 18, c: 'rgba(255,255,255,0.07)' },
    { x: 62, y: 72, r: 26, c: 'rgba(99,102,241,0.12)' },
    { x: 36, y: 82, r: 12, c: 'rgba(245,158,11,0.18)' },
    { x: 11, y: 74, r: 18, c: 'rgba(34,211,238,0.10)' },
  ]
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute bottom-0 inset-x-0" style={{ height: 180, background: 'linear-gradient(to top, rgba(34,211,238,0.07) 0%, transparent 100%)' }} />
      {bokeh.map((b, i) => (
        <div key={i} className="absolute rounded-full animate-pulse" style={{ left: `${b.x}%`, top: `${b.y}%`, width: b.r, height: b.r, background: b.c, filter: `blur(${b.r * 0.55}px)`, transform: 'translate(-50%,-50%)', animationDelay: `${i * 0.4}s`, animationDuration: `${2 + i * 0.25}s` }} />
      ))}
      <svg className="absolute bottom-0 inset-x-0 w-full" style={{ height: 110, opacity: 0.15 }} viewBox="0 0 800 110" preserveAspectRatio="none">
        <path d="M0,110 L0,78 L55,78 L55,48 L75,48 L75,28 L95,28 L95,48 L115,48 L115,18 L135,18 L135,48 L170,48 L170,68 L210,68 L210,38 L230,38 L230,12 L250,12 L250,38 L290,38 L290,58 L330,58 L330,33 L350,33 L350,58 L395,58 L395,28 L415,28 L415,8 L435,8 L435,28 L475,28 L475,52 L515,52 L515,38 L535,38 L535,18 L555,18 L555,38 L595,38 L595,63 L635,63 L635,43 L655,43 L655,22 L675,22 L675,43 L715,43 L715,68 L755,68 L755,78 L800,78 L800,110 Z" fill="rgba(34,211,238,0.6)" />
      </svg>
    </div>
  )
}

const ENVS = [AcademicEnv, CreatorEnv, CraftsmanEnv, MarketerEnv]

/* ────────────────── COMPONENT ────────────────── */
export default function GrowthSection() {
  const wrapperRef = useRef(null)
  const innerRef   = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const wrapper = wrapperRef.current
      const inner   = innerRef.current
      const stageEls = gsap.utils.toArray('.gs-stage', wrapper)

      gsap.set(stageEls[0], { autoAlpha: 1, y: 0 })
      gsap.set(stageEls.slice(1), { autoAlpha: 0, y: 24 })

      ScrollTrigger.create({
        trigger: wrapper,
        start: 'top top',
        end: 'bottom bottom',
        pin: inner,
        pinSpacing: false,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      })

      const tl = gsap.timeline({
        defaults: { ease: 'power2.inOut' },
        scrollTrigger: {
          trigger: wrapper,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.6,
          invalidateOnRefresh: true,
        },
      })

      stageEls.forEach((el, i) => {
        if (i === 0) {
          tl.to(el, { autoAlpha: 0, y: -20, duration: 0.6 }, 0.4)
        } else if (i < stageEls.length - 1) {
          tl.to(el, { autoAlpha: 1, y: 0,   duration: 0.6, immediateRender: false }, (i - 1) * 1.5 + 0.4)
          tl.to(el, { autoAlpha: 0, y: -20, duration: 0.6 },                         i * 1.5 + 0.2)
        } else {
          tl.to(el, { autoAlpha: 1, y: 0, duration: 0.6, immediateRender: false }, (i - 1) * 1.5 + 0.4)
        }
      })

      const progressEl = wrapper.querySelector('.gs-progress-fill')
      if (progressEl) {
        gsap.set(progressEl, { scaleX: 0, transformOrigin: 'left center' })
        gsap.to(progressEl, {
          scaleX: 1, ease: 'none',
          scrollTrigger: { trigger: wrapper, start: 'top top', end: 'bottom bottom', scrub: true, invalidateOnRefresh: true },
        })
      }

      stageEls.forEach((_, i) => {
        ScrollTrigger.create({
          trigger: wrapper,
          start: `top+=${(i / stageEls.length) * 100}% top`,
          end:   `top+=${((i + 1) / stageEls.length) * 100}% top`,
          onEnter:     () => activateDot(i, wrapper),
          onEnterBack: () => activateDot(i, wrapper),
        })
      })

      ScrollTrigger.refresh()
    }, wrapperRef)

    return () => ctx.revert()

    function activateDot(active, scope) {
      scope.querySelectorAll('.gs-dot').forEach((d, j) => {
        gsap.to(d, { scale: j === active ? 1.5 : 1, opacity: j === active ? 1 : 0.3, duration: 0.3, overwrite: 'auto' })
      })
    }
  }, [])

  return (
    <div ref={wrapperRef} style={{ height: `${stages.length * 105}vh` }}>
      <div ref={innerRef} className="overflow-hidden" style={{ height: '100vh' }}>

        {stages.map((stage, i) => {

          /* ── Opening title frame ── */
          if (stage.isIntro) {
            return (
              <div key={stage.id} className="gs-stage absolute inset-0 flex items-center justify-center" style={{ background: stage.bg }}>
                {/* Dot grid */}
                <div className="absolute inset-0 pointer-events-none"
                  style={{ backgroundImage: 'radial-gradient(rgba(129,140,248,0.08) 1px, transparent 1px)', backgroundSize: '42px 42px' }} />
                {/* Orbs */}
                <div className="absolute -top-32 -right-32 rounded-full pointer-events-none"
                  style={{ width: 560, height: 560, background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 65%)' }} />
                <div className="absolute -bottom-32 -left-24 rounded-full pointer-events-none"
                  style={{ width: 440, height: 440, background: 'radial-gradient(circle, rgba(34,211,238,0.10) 0%, transparent 65%)' }} />

                <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                  {/* Eyebrow */}
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/4 mb-8">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="#818CF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
                    </svg>
                    <span className="text-[#CBD5E1] text-xs font-semibold tracking-wide">Pune, Maharashtra · Content, Marketing &amp; Code</span>
                  </div>

                  {/* Name */}
                  <h1 className="font-black text-white tracking-tight leading-[0.95] mb-6 text-6xl sm:text-7xl md:text-8xl">
                    Jay<br />
                    <span style={{ background: 'linear-gradient(135deg,#818CF8,#22D3EE)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                      Sahastrabudhe
                    </span>
                  </h1>

                  {/* Subline */}
                  <p className="text-[#8899BB] text-base md:text-xl max-w-2xl mx-auto leading-relaxed mb-8">
                    A YouTube channel grown to <span className="text-amber-400 font-bold">23K</span> in lockdown.
                    <span className="text-indigo-300 font-bold"> 8 brands</span> to 15M+ views.
                    <span className="text-emerald-400 font-bold"> 3 websites</span> shipped.
                    <br className="hidden md:block" />This is that story — in four chapters.
                  </p>

                  {/* Role tags */}
                  <div className="flex flex-wrap justify-center gap-2 mb-10">
                    {[
                      { label: 'Performance Marketing', c: '#F59E0B' },
                      { label: 'Meta Ads · Lead Gen', c: '#6366F1' },
                      { label: 'Content Creator', c: '#10B981' },
                      { label: 'Web Developer', c: '#06B6D4' },
                    ].map(({ label, c }) => (
                      <span key={label} className="px-3 py-1.5 rounded-full text-xs font-semibold border"
                        style={{ color: c, background: c + '15', borderColor: c + '40' }}>
                        {label}
                      </span>
                    ))}
                  </div>

                  {/* Scroll cue */}
                  <div className="flex flex-col items-center gap-2">
                    <span className="text-[10px] text-[#8899BB] tracking-[0.3em] uppercase">Scroll to begin</span>
                    <div className="w-px h-10 bg-gradient-to-b from-indigo-400/70 to-transparent animate-pulse" />
                  </div>
                </div>
              </div>
            )
          }

          /* ── Chapter frame (figure + logos + env) ── */
          const Env = ENVS[i - 1]
          return (
            <div key={stage.id} className="gs-stage absolute inset-0 flex items-center" style={{ background: stage.bg }}>
              <Env />

              <div className="relative z-10 max-w-6xl mx-auto px-6 w-full grid md:grid-cols-2 gap-10 items-center">

                {/* Text */}
                <div className="order-2 md:order-1 text-center md:text-left">
                  <span className="inline-block text-xs font-black tracking-[0.22em] uppercase mb-3 px-3 py-1 rounded-full"
                    style={{ color: stage.accent, background: stage.accent + '18', border: `1px solid ${stage.accent}35` }}>
                    {stage.chapter}
                  </span>
                  <p className="font-mono text-xs tracking-widest mb-2" style={{ color: stage.accent + 'AA' }}>{stage.year}</p>
                  <h2 className="text-5xl md:text-6xl font-black text-white leading-none tracking-tight mb-3">{stage.title}</h2>
                  <p className="font-semibold text-sm md:text-base mb-4" style={{ color: stage.accent }}>{stage.context}</p>
                  <p className="text-[#8899BB] text-sm md:text-base leading-relaxed max-w-sm mx-auto md:mx-0">{stage.copy}</p>
                </div>

                {/* Silhouette + floating logos */}
                <div className="order-1 md:order-2 flex justify-center">
                  <div className="relative" style={{ width: 280, height: 430 }}>
                    <div className="absolute inset-x-0 top-0" style={{ height: 150 }}>
                      <FloatingLogos logos={stage.logos} accent={stage.accent} />
                    </div>
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2"
                      style={{ width: 120, height: 14, background: stage.accent + '30', filter: 'blur(10px)', borderRadius: '50%' }} />
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2"
                      style={{ width: 190, height: 350, color: stage.accent, filter: `drop-shadow(0 0 22px ${stage.accent}55)` }}>
                      <HumanFigure pose={stage.pose} color={stage.accent} />
                    </div>
                  </div>
                </div>

              </div>
            </div>
          )
        })}

        {/* Progress bar */}
        <div className="absolute bottom-0 inset-x-0 h-0.5 bg-white/5 z-20">
          <div className="gs-progress-fill h-full" style={{ background: 'linear-gradient(to right,#818CF8,#22D3EE)', scaleX: 0, transformOrigin: 'left center' }} />
        </div>

        {/* Nav dots */}
        <div className="absolute right-5 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-20">
          {stages.map((s, i) => (
            <div key={i} className="gs-dot w-2 h-2 rounded-full" style={{ background: s.accent, opacity: i === 0 ? 1 : 0.3, transform: 'scale(1)' }} />
          ))}
        </div>

        {/* Scroll nudge */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20">
          <div className="w-px h-8 bg-gradient-to-b from-white/20 to-transparent animate-pulse" />
        </div>

      </div>
    </div>
  )
}
