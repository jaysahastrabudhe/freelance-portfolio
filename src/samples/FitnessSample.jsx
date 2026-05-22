import { Link } from 'react-router-dom'
import { PortfolioBanner, SampleNav, img } from './SampleShared'

// Unsplash IDs — gym / fitness
const HERO_BG  = 'photo-1534438327276-14e5300c3a48' // dark gym barbells
const GYM_1    = 'photo-1571019614242-c5c5dee9f50b' // weight training
const GYM_2    = 'photo-1518611012118-696072aa579a' // yoga / flexibility
const GYM_3    = 'photo-1517836357463-d25dfeac3438' // personal trainer coaching
const GYM_INT  = 'photo-1540497077202-7c8a3999166f' // gym interior machines
const BEFORE   = 'photo-1583454110551-21f2fa2afe61' // fitness motivation

const neon  = '#10B981'
const dark  = '#0A0A0A'
const card  = '#111111'
const muted = '#888888'

export default function FitnessSample({ sample, prev, next }) {
  const { businessName, tagline, headline, subheadline, services, stats, about, testimonial, ctaHeadline, ctaText, phone, address, email } = sample

  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif", background: dark, color: '#F0F0F0', margin: 0, padding: 0 }}>
      <PortfolioBanner />

      {/* ── Navbar ── */}
      <nav style={{ position: 'sticky', top: 0, zIndex: 50, background: 'rgba(10,10,10,0.95)', backdropFilter: 'blur(12px)', borderBottom: `1px solid ${neon}25`, padding: '0 40px', height: '68px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ width: '10px', height: '32px', background: neon, borderRadius: '2px' }} />
          <div style={{ fontWeight: 900, fontSize: '20px', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#fff' }}>{businessName}</div>
        </div>
        <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
          {['Training', 'Classes', 'Pricing', 'Contact'].map(item => (
            <span key={item} style={{ color: muted, fontSize: '13px', fontWeight: 600, cursor: 'pointer', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{item}</span>
          ))}
          <button style={{ background: neon, color: dark, padding: '10px 26px', borderRadius: '4px', fontWeight: 800, fontSize: '13px', border: 'none', cursor: 'pointer', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            {ctaText}
          </button>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <img src={img(HERO_BG, 1600, 1000)} alt="Gym" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.35)' }} />
        {/* Green glow */}
        <div style={{ position: 'absolute', top: '50%', left: '10%', width: '400px', height: '400px', background: `${neon}18`, borderRadius: '50%', filter: 'blur(100px)', transform: 'translateY(-50%)' }} />
        <div style={{ position: 'relative', maxWidth: '1200px', margin: '0 auto', padding: '0 48px', width: '100%' }}>
          <div style={{ maxWidth: '600px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '28px' }}>
              <div style={{ width: '32px', height: '2px', background: neon }} />
              <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', color: neon }}>Pune's #1 Gym</span>
            </div>
            <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 900, lineHeight: 1.0, color: '#fff', marginBottom: '24px', letterSpacing: '-0.02em', textTransform: 'uppercase' }}>
              {headline}
            </h1>
            <p style={{ fontSize: '1rem', color: '#9CA3AF', lineHeight: 1.75, marginBottom: '48px', maxWidth: '480px' }}>
              {subheadline}
            </p>
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <button style={{ background: neon, color: dark, padding: '16px 44px', borderRadius: '4px', fontWeight: 800, fontSize: '14px', border: 'none', cursor: 'pointer', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                {ctaText}
              </button>
              <button style={{ background: 'transparent', color: '#fff', padding: '16px 44px', borderRadius: '4px', fontWeight: 700, fontSize: '14px', border: '1px solid rgba(255,255,255,0.25)', cursor: 'pointer', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                Take a Tour
              </button>
            </div>

            {/* Stats row */}
            <div style={{ display: 'flex', gap: '48px', marginTop: '64px', flexWrap: 'wrap' }}>
              {stats.map(({ v, l }) => (
                <div key={l}>
                  <div style={{ fontSize: '2.2rem', fontWeight: 900, color: neon, letterSpacing: '-0.02em' }}>{v}</div>
                  <div style={{ fontSize: '11px', color: muted, letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: '4px' }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Ticker ── */}
      <div style={{ background: neon, padding: '14px 0', overflow: 'hidden', whiteSpace: 'nowrap' }}>
        <span style={{ display: 'inline-block', animation: 'none', fontSize: '13px', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', color: dark }}>
          {Array(6).fill('⚡ STRENGTH TRAINING  ·  YOGA CLASSES  ·  PERSONAL TRAINING  ·  CERTIFIED COACHES  ·  RESULTS GUARANTEED  ').join('')}
        </span>
      </div>

      {/* ── Services ── */}
      <section style={{ background: '#0D0D0D', padding: '100px 32px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ marginBottom: '56px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div style={{ width: '32px', height: '2px', background: neon }} />
              <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', color: neon }}>Programs</span>
            </div>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 900, color: '#fff', textTransform: 'uppercase', letterSpacing: '-0.02em' }}>Train Like a Pro</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2px' }}>
            {[
              { ...services[0], image: GYM_1 },
              { ...services[1], image: GYM_2 },
              { ...services[2], image: GYM_3 },
            ].map((s, i) => (
              <div key={i} style={{ position: 'relative', overflow: 'hidden', cursor: 'pointer', group: true }}
                onMouseEnter={e => e.currentTarget.querySelector('img').style.transform = 'scale(1.06)'}
                onMouseLeave={e => e.currentTarget.querySelector('img').style.transform = 'scale(1)'}>
                <img src={img(s.image, 600, 450)} alt={s.title} style={{ width: '100%', height: '380px', objectFit: 'cover', display: 'block', transition: 'transform 0.5s ease', filter: 'brightness(0.45)' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,10,10,0.9) 0%, transparent 60%)' }} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, padding: '32px' }}>
                  <div style={{ width: '40px', height: '3px', background: neon, marginBottom: '16px', borderRadius: '2px' }} />
                  <h3 style={{ fontWeight: 800, fontSize: '1.3rem', color: '#fff', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>{s.title}</h3>
                  <p style={{ color: '#9CA3AF', fontSize: '0.85rem', lineHeight: 1.6 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gym Interior ── */}
      <section style={{ position: 'relative', height: '420px', overflow: 'hidden' }}>
        <img src={img(GYM_INT, 1600, 600)} alt="IronForge Gym interior" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.4)' }} />
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '32px' }}>
          <div>
            <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', color: neon, marginBottom: '16px' }}>The Facility</div>
            <h2 style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.8rem)', fontWeight: 900, color: '#fff', textTransform: 'uppercase', letterSpacing: '-0.02em', maxWidth: '600px' }}>
              5,000 Sq.Ft of Premium Training Space
            </h2>
            <p style={{ color: '#9CA3AF', marginTop: '16px', fontSize: '14px' }}>Air-conditioned · Open 6AM–10PM · 7 days a week</p>
          </div>
        </div>
      </section>

      {/* ── About + Testimonial ── */}
      <section style={{ background: dark, padding: '100px 32px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '72px', alignItems: 'center' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <div style={{ width: '32px', height: '2px', background: neon }} />
              <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', color: neon }}>About</span>
            </div>
            <h2 style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.6rem)', fontWeight: 900, color: '#fff', textTransform: 'uppercase', letterSpacing: '-0.02em', marginBottom: '24px', lineHeight: 1.1 }}>
              Real Results,<br />Real People
            </h2>
            <p style={{ color: '#9CA3AF', lineHeight: 1.8, fontSize: '0.95rem', marginBottom: '36px' }}>{about}</p>
            <img src={img(BEFORE, 600, 350)} alt="Members training" style={{ width: '100%', borderRadius: '4px', objectFit: 'cover', aspectRatio: '16/9', display: 'block', filter: 'brightness(0.85)' }} />
          </div>
          <div>
            {/* Testimonial card */}
            <div style={{ background: card, border: `1px solid ${neon}30`, borderRadius: '8px', padding: '44px 40px', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: '-30px', right: '-30px', width: '120px', height: '120px', background: `${neon}10`, borderRadius: '50%', filter: 'blur(30px)' }} />
              <div style={{ fontSize: '48px', color: neon, lineHeight: 1, marginBottom: '20px', fontWeight: 900 }}>"</div>
              <blockquote style={{ fontSize: '1.05rem', color: '#E0E0E0', lineHeight: 1.8, fontStyle: 'italic', marginBottom: '32px' }}>
                {testimonial.text}
              </blockquote>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '4px', background: neon, display: 'flex', alignItems: 'center', justifyContent: 'center', color: dark, fontWeight: 900, fontSize: '18px' }}>
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div style={{ fontWeight: 700, color: '#fff', fontSize: '14px' }}>{testimonial.name}</div>
                  <div style={{ fontSize: '12px', color: muted }}>Member since 2022 · Lost 18 kg</div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '4px', marginTop: '20px' }}>
                {'★★★★★'.split('').map((s, i) => <span key={i} style={{ color: neon, fontSize: '18px' }}>{s}</span>)}
              </div>
            </div>
            {/* Membership card */}
            <div style={{ marginTop: '24px', background: card, border: `1px solid ${neon}20`, borderRadius: '8px', padding: '28px 32px' }}>
              <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: neon, marginBottom: '20px' }}>Membership Plans</div>
              {[['Monthly', '₹1,800 / mo', ''], ['Quarterly', '₹4,800 / 3mo', 'SAVE 11%'], ['Annual', '₹15,000 / yr', 'BEST VALUE']].map(([p, pr, badge]) => (
                <div key={p} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                  <span style={{ color: '#D0D0D0', fontSize: '14px', fontWeight: 500 }}>{p}</span>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    {badge && <span style={{ background: `${neon}20`, color: neon, fontSize: '10px', fontWeight: 700, padding: '3px 8px', borderRadius: '4px' }}>{badge}</span>}
                    <span style={{ color: '#fff', fontSize: '14px', fontWeight: 700 }}>{pr}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: neon, padding: '80px 32px', textAlign: 'center' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, color: dark, textTransform: 'uppercase', letterSpacing: '-0.02em', marginBottom: '16px' }}>
            {ctaHeadline}
          </h2>
          <p style={{ color: 'rgba(0,0,0,0.65)', marginBottom: '36px', fontSize: '1.05rem', fontWeight: 500 }}>
            No commitment. Full access for 7 days. Cancel anytime.
          </p>
          <button style={{ background: dark, color: neon, padding: '16px 52px', borderRadius: '4px', fontWeight: 900, fontSize: '16px', border: 'none', cursor: 'pointer', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            {ctaText}
          </button>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ background: '#050505', padding: '60px 32px 28px', borderTop: `1px solid ${neon}18` }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '48px', marginBottom: '48px' }}>
            <div>
              <div style={{ fontWeight: 900, fontSize: '1.2rem', color: neon, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '10px' }}>{businessName}</div>
              <p style={{ color: muted, fontSize: '13px', lineHeight: 1.7 }}>{tagline}</p>
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: muted, marginBottom: '16px' }}>Contact</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', color: '#9CA3AF', fontSize: '13px' }}>
                <span>📞 {phone}</span>
                <span>✉️ {email}</span>
                <span>📍 {address}</span>
              </div>
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: muted, marginBottom: '16px' }}>Website by</div>
              <div style={{ color: muted, fontSize: '13px', lineHeight: 1.8 }}>
                <Link to="/" style={{ color: '#818CF8', fontWeight: 700, textDecoration: 'none' }}>Jay Sahastrabudhe</Link>
                <div>Freelance Web Developer · Pune</div>
                <Link to="/contact" style={{ color: neon, fontWeight: 600, textDecoration: 'none', display: 'inline-block', marginTop: '8px' }}>Get yours from ₹5,000 →</Link>
              </div>
            </div>
          </div>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '24px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', color: '#3A3A3A', fontSize: '12px' }}>
            <span>© {new Date().getFullYear()} {businessName}. Sample design.</span>
            <Link to="/samples" style={{ color: '#818CF8', textDecoration: 'none', fontWeight: 600 }}>← View all samples</Link>
          </div>
        </div>
      </footer>
      <SampleNav prev={prev} next={next} />
    </div>
  )
}
