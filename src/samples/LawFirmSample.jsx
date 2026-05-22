import { Link } from 'react-router-dom'
import { PortfolioBanner, SampleNav, img } from './SampleShared'

// Unsplash IDs — law / professional
const HERO_BG  = 'photo-1589829545856-d10d557cf95f' // law books / court
const LAW_1    = 'photo-1450101499163-c8848c66ca85' // contract signing
const LAW_2    = 'photo-1521791055366-0d553872952f' // judge gavel
const LAW_3    = 'photo-1606836576983-8b458e75221d' // consultation
const OFFICE   = 'photo-1497366216548-37526070297c' // professional office
const ATTORNEY = 'photo-1560250097-0b93528c311a' // professional man in suit

const navy  = '#1E3A5F'
const gold  = '#B8963E'
const ivory = '#FAF8F4'
const text  = '#2C2C2C'

export default function LawFirmSample({ sample, prev, next }) {
  const { businessName, tagline, headline, subheadline, services, stats, about, testimonial, ctaHeadline, ctaText, phone, address, email } = sample

  return (
    <div style={{ fontFamily: "'Georgia', 'Times New Roman', serif", background: ivory, color: text, margin: 0, padding: 0 }}>
      <PortfolioBanner />

      {/* ── Top bar ── */}
      <div style={{ background: navy, color: 'rgba(255,255,255,0.7)', fontSize: '12px', padding: '8px 40px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px', fontFamily: "'Inter', sans-serif" }}>
        <span>📞 {phone}</span>
        <span>✉️ {email}</span>
        <span>📍 {address}</span>
      </div>

      {/* ── Navbar ── */}
      <nav style={{ background: ivory, borderBottom: `1px solid #E0D8C8`, padding: '0 48px', height: '72px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'sticky', top: 0, zIndex: 50, boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
        <div>
          <div style={{ fontWeight: 700, fontSize: '20px', color: navy, letterSpacing: '0.04em' }}>{businessName}</div>
          <div style={{ fontSize: '10px', color: gold, letterSpacing: '0.2em', textTransform: 'uppercase', fontFamily: "'Inter', sans-serif", marginTop: '3px' }}>Advocates & Legal Consultants</div>
        </div>
        <div style={{ display: 'flex', gap: '36px', alignItems: 'center', fontFamily: "'Inter', sans-serif" }}>
          {['Practice Areas', 'About Us', 'Team', 'Contact'].map(item => (
            <span key={item} style={{ color: '#4A4A4A', fontSize: '13px', fontWeight: 500, cursor: 'pointer', letterSpacing: '0.04em' }}>{item}</span>
          ))}
          <button style={{ background: navy, color: '#fff', padding: '10px 24px', borderRadius: '0', fontWeight: 600, fontSize: '13px', border: 'none', cursor: 'pointer', letterSpacing: '0.06em', fontFamily: "'Inter', sans-serif" }}>
            Free Consultation
          </button>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section style={{ position: 'relative', minHeight: '88vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <img src={img(HERO_BG, 1600, 900)} alt="Law firm" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 40%' }} />
        <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to right, rgba(30,58,95,0.9) 45%, rgba(30,58,95,0.5) 100%)` }} />
        <div style={{ position: 'relative', maxWidth: '1200px', margin: '0 auto', padding: '0 56px', width: '100%' }}>
          <div style={{ maxWidth: '560px' }}>
            {/* Gold rule */}
            <div style={{ width: '60px', height: '2px', background: gold, marginBottom: '28px' }} />
            <div style={{ fontSize: '10px', fontWeight: 500, letterSpacing: '0.3em', textTransform: 'uppercase', color: `${gold}`, fontFamily: "'Inter', sans-serif", marginBottom: '20px' }}>
              Est. 1999 · Pune, Maharashtra
            </div>
            <h1 style={{ fontSize: 'clamp(2rem, 4.5vw, 3.4rem)', fontWeight: 700, lineHeight: 1.1, color: '#fff', marginBottom: '24px', letterSpacing: '0.01em' }}>
              {headline}
            </h1>
            <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.72)', lineHeight: 1.85, marginBottom: '44px', fontFamily: "'Inter', sans-serif", fontWeight: 400 }}>
              {subheadline}
            </p>
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <button style={{ background: gold, color: '#fff', padding: '14px 40px', fontWeight: 700, fontSize: '14px', border: 'none', cursor: 'pointer', fontFamily: "'Inter', sans-serif", letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                {ctaText}
              </button>
              <button style={{ background: 'transparent', color: '#fff', padding: '14px 40px', fontWeight: 400, fontSize: '14px', border: '1px solid rgba(255,255,255,0.35)', cursor: 'pointer', fontFamily: "'Inter', sans-serif" }}>
                Our Practice Areas
              </button>
            </div>
          </div>
        </div>

        {/* Stats ribbon */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'rgba(184,150,62,0.92)', backdropFilter: 'blur(4px)' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '24px 56px', display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '24px' }}>
            {stats.map(({ v, l }) => (
              <div key={l} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '1.75rem', fontWeight: 700, color: '#fff', fontFamily: "'Georgia', serif" }}>{v}</div>
                <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.8)', letterSpacing: '0.2em', textTransform: 'uppercase', fontFamily: "'Inter', sans-serif", marginTop: '4px' }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Practice Areas ── */}
      <section style={{ background: '#fff', padding: '100px 48px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <div style={{ width: '40px', height: '2px', background: gold, margin: '0 auto 20px' }} />
            <p style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.3em', textTransform: 'uppercase', color: gold, fontFamily: "'Inter', sans-serif", marginBottom: '12px' }}>Our Expertise</p>
            <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 700, color: navy }}>Practice Areas</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '0', border: '1px solid #E0D8C8' }}>
            {[
              { ...services[0], image: LAW_1 },
              { ...services[1], image: LAW_3 },
              { ...services[2], image: LAW_2 },
            ].map((s, i) => (
              <div key={i} style={{ borderRight: i < 2 ? '1px solid #E0D8C8' : 'none', padding: '48px 40px', cursor: 'pointer', transition: 'background 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.background = `#F7F3EC`}
                onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
                <img src={img(s.image, 400, 200)} alt={s.title} style={{ width: '100%', height: '160px', objectFit: 'cover', display: 'block', marginBottom: '28px', filter: 'saturate(0.8) brightness(0.9)' }} />
                <div style={{ width: '28px', height: '2px', background: gold, marginBottom: '16px' }} />
                <div style={{ fontSize: '1.6rem', marginBottom: '12px' }}>{s.icon}</div>
                <h3 style={{ fontWeight: 700, fontSize: '1.15rem', color: navy, marginBottom: '12px' }}>{s.title}</h3>
                <p style={{ color: '#5A5A5A', fontSize: '0.9rem', lineHeight: 1.75, fontFamily: "'Inter', sans-serif", fontWeight: 400 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Feature image ── */}
      <section style={{ position: 'relative', height: '360px', overflow: 'hidden' }}>
        <img src={img(OFFICE, 1600, 500)} alt="Our office" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.5) saturate(0.6)' }} />
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '32px' }}>
          <div>
            <div style={{ width: '40px', height: '2px', background: gold, margin: '0 auto 20px' }} />
            <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 2.2rem)', fontWeight: 700, color: '#fff', fontStyle: 'italic', maxWidth: '600px', lineHeight: 1.3 }}>
              "Justice is not just our profession — it is our promise."
            </h2>
            <p style={{ color: gold, marginTop: '16px', fontSize: '13px', letterSpacing: '0.1em', fontFamily: "'Inter', sans-serif" }}>— Advocate Mohan Sharma, Founder</p>
          </div>
        </div>
      </section>

      {/* ── About + Testimonial ── */}
      <section style={{ background: ivory, padding: '100px 48px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '80px', alignItems: 'start' }}>
          <div>
            <div style={{ width: '40px', height: '2px', background: gold, marginBottom: '20px' }} />
            <p style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.3em', textTransform: 'uppercase', color: gold, fontFamily: "'Inter', sans-serif", marginBottom: '12px' }}>About the Firm</p>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 700, color: navy, marginBottom: '24px', lineHeight: 1.2 }}>
              25 Years of Trust & Advocacy
            </h2>
            <p style={{ color: '#5A5A5A', lineHeight: 1.9, fontSize: '0.95rem', fontFamily: "'Inter', sans-serif", marginBottom: '32px' }}>{about}</p>
            <div style={{ display: 'flex', gap: '28px', flexWrap: 'wrap' }}>
              {stats.map(({ v, l }) => (
                <div key={l} style={{ borderTop: `2px solid ${gold}`, paddingTop: '12px', minWidth: '80px' }}>
                  <div style={{ fontSize: '1.6rem', fontWeight: 700, color: navy }}>{v}</div>
                  <div style={{ fontSize: '11px', color: '#888', fontFamily: "'Inter', sans-serif", marginTop: '4px' }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
          <div>
            {/* Testimonial */}
            <div style={{ background: navy, padding: '48px 40px', marginBottom: '28px' }}>
              <div style={{ fontSize: '40px', color: gold, lineHeight: 1, marginBottom: '20px' }}>"</div>
              <blockquote style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.85, fontStyle: 'italic', marginBottom: '28px' }}>
                {testimonial.text}
              </blockquote>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{ width: '44px', height: '44px', background: gold, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontFamily: "'Inter', sans-serif", fontSize: '16px', flexShrink: 0 }}>
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div style={{ fontWeight: 700, color: '#fff', fontFamily: "'Inter', sans-serif", fontSize: '14px' }}>{testimonial.name}</div>
                  <div style={{ fontSize: '12px', color: gold, fontFamily: "'Inter', sans-serif", marginTop: '2px' }}>Verified Client · ★★★★★</div>
                </div>
              </div>
            </div>
            {/* Attorney photo */}
            <div style={{ position: 'relative' }}>
              <img src={img(ATTORNEY, 500, 300)} alt="Lead attorney" style={{ width: '100%', objectFit: 'cover', height: '220px', display: 'block', filter: 'saturate(0.7)' }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'rgba(30,58,95,0.88)', padding: '16px 20px', fontFamily: "'Inter', sans-serif" }}>
                <div style={{ color: '#fff', fontWeight: 600, fontSize: '14px' }}>Advocate Mohan Sharma</div>
                <div style={{ color: gold, fontSize: '12px', marginTop: '2px' }}>Founder · Former High Court Clerk</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: navy, padding: '88px 48px', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <div style={{ width: '40px', height: '2px', background: gold, margin: '0 auto 24px' }} />
          <h2 style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', fontWeight: 700, color: '#fff', marginBottom: '16px' }}>{ctaHeadline}</h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', marginBottom: '40px', fontSize: '0.95rem', lineHeight: 1.7, fontFamily: "'Inter', sans-serif' " }}>
            30-minute consultation at no charge. We'll evaluate your case and advise the best course of action.
          </p>
          <button style={{ background: gold, color: '#fff', padding: '15px 48px', fontWeight: 700, fontSize: '15px', border: 'none', cursor: 'pointer', fontFamily: "'Inter', sans-serif", letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            {ctaText}
          </button>
          <div style={{ marginTop: '28px', color: 'rgba(255,255,255,0.45)', fontSize: '13px', fontFamily: "'Inter', sans-serif" }}>
            📞 {phone}
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ background: '#0F1E30', color: '#fff', padding: '60px 48px 28px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '48px', marginBottom: '40px' }}>
            <div>
              <div style={{ fontWeight: 700, fontSize: '1.1rem', color: '#fff', marginBottom: '4px' }}>{businessName}</div>
              <div style={{ fontSize: '10px', color: gold, letterSpacing: '0.2em', textTransform: 'uppercase', fontFamily: "'Inter', sans-serif", marginBottom: '12px' }}>Advocates & Legal Consultants</div>
              <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '13px', lineHeight: 1.7, fontFamily: "'Inter', sans-serif" }}>{tagline}</p>
            </div>
            <div style={{ fontFamily: "'Inter', sans-serif" }}>
              <div style={{ fontWeight: 600, fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '16px' }}>Contact</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', color: 'rgba(255,255,255,0.55)', fontSize: '13px' }}>
                <span>📞 {phone}</span>
                <span>✉️ {email}</span>
                <span>📍 {address}</span>
              </div>
            </div>
            <div style={{ fontFamily: "'Inter', sans-serif" }}>
              <div style={{ fontWeight: 600, fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '16px' }}>Website by</div>
              <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: '13px', lineHeight: 1.8 }}>
                <Link to="/" style={{ color: '#818CF8', fontWeight: 700, textDecoration: 'none' }}>Jay Sahastrabudhe</Link>
                <div>Freelance Web Developer · Pune</div>
                <Link to="/contact" style={{ color: gold, fontWeight: 600, textDecoration: 'none', display: 'inline-block', marginTop: '8px' }}>Get yours from ₹5,000 →</Link>
              </div>
            </div>
          </div>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: '24px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', color: 'rgba(255,255,255,0.2)', fontSize: '12px', fontFamily: "'Inter', sans-serif" }}>
            <span>© {new Date().getFullYear()} {businessName}. Sample design.</span>
            <Link to="/samples" style={{ color: '#818CF8', textDecoration: 'none', fontWeight: 600 }}>← View all samples</Link>
          </div>
        </div>
      </footer>
      <SampleNav prev={prev} next={next} />
    </div>
  )
}
