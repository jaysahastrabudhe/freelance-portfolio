import { Link } from 'react-router-dom'
import { PortfolioBanner, SampleNav, img } from './SampleShared'

// Curated Unsplash IDs — Indian / warm restaurant vibe
const HERO_BG    = 'photo-1517248135467-4c7edcad34c4' // restaurant interior, warm lights
const FOOD_1     = 'photo-1565557623262-b51c2513a641' // biryani / curry
const FOOD_2     = 'photo-1585937421612-70a008356fbe' // indian food spread
const FOOD_3     = 'photo-1546069901-ba9599a7e63c' // plated dish
const CATERING   = 'photo-1555244162-803834f70033' // catering event
const CHEF       = 'photo-1581299894007-aaa50297cf16' // chef cooking

export default function RestaurantSample({ sample, prev, next }) {
  const { businessName, tagline, headline, subheadline, services, stats, about, testimonial, ctaHeadline, ctaText, phone, address, email } = sample

  const amber = '#F59E0B'
  const red   = '#DC2626'

  return (
    <div style={{ fontFamily: "'Georgia', 'Times New Roman', serif", background: '#0D0705', color: '#F5F0E8', margin: 0, padding: 0 }}>
      <PortfolioBanner />

      {/* ── Navbar ── */}
      <nav style={{ position: 'sticky', top: 0, zIndex: 50, background: 'rgba(13,7,5,0.92)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(245,158,11,0.2)', padding: '0 32px', height: '68px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <div style={{ fontWeight: 700, fontSize: '22px', color: amber, letterSpacing: '0.04em' }}>{businessName}</div>
          <div style={{ fontSize: '11px', color: '#A0816A', letterSpacing: '0.15em', textTransform: 'uppercase', marginTop: '2px' }}>Authentic Indian Cuisine</div>
        </div>
        <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
          {['Menu', 'Catering', 'Contact'].map(item => (
            <span key={item} style={{ color: '#D4C4B0', fontSize: '14px', fontWeight: 400, cursor: 'pointer', letterSpacing: '0.05em' }}>{item}</span>
          ))}
          <button style={{ background: `linear-gradient(135deg, ${amber}, ${red})`, color: '#fff', padding: '10px 24px', borderRadius: '4px', fontWeight: 700, fontSize: '14px', border: 'none', cursor: 'pointer', letterSpacing: '0.05em', fontFamily: 'inherit' }}>
            {ctaText}
          </button>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section style={{ position: 'relative', height: '92vh', minHeight: '600px', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
        <img src={img(HERO_BG, 1600, 900)} alt="Restaurant interior" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(13,7,5,0.88) 40%, rgba(13,7,5,0.4) 100%)' }} />
        <div style={{ position: 'relative', maxWidth: '640px', padding: '0 64px' }}>
          <div style={{ fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', color: amber, marginBottom: '20px', fontFamily: "'Inter', sans-serif" }}>Est. 2009 · Pune, Maharashtra</div>
          <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', fontWeight: 700, lineHeight: 1.1, marginBottom: '24px', color: '#FFF8F0' }}>
            {headline}
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#D4C4B0', lineHeight: 1.8, marginBottom: '40px', fontFamily: "'Inter', sans-serif", fontWeight: 400 }}>
            {subheadline}
          </p>
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <button style={{ background: `linear-gradient(135deg, ${amber}, ${red})`, color: '#fff', padding: '15px 40px', borderRadius: '4px', fontWeight: 700, fontSize: '15px', border: 'none', cursor: 'pointer', fontFamily: 'inherit', letterSpacing: '0.06em' }}>
              {ctaText}
            </button>
            <button style={{ background: 'transparent', color: '#F5F0E8', padding: '15px 40px', borderRadius: '4px', fontWeight: 400, fontSize: '15px', border: '1px solid rgba(245,240,232,0.35)', cursor: 'pointer', fontFamily: 'inherit', letterSpacing: '0.06em' }}>
              View Menu
            </button>
          </div>
          {/* Divider + stats */}
          <div style={{ display: 'flex', gap: '40px', marginTop: '56px', paddingTop: '32px', borderTop: '1px solid rgba(245,158,11,0.25)', flexWrap: 'wrap' }}>
            {stats.map(({ v, l }) => (
              <div key={l}>
                <div style={{ fontSize: '2rem', fontWeight: 700, color: amber }}>{v}</div>
                <div style={{ fontSize: '11px', color: '#A0816A', letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: "'Inter', sans-serif", marginTop: '4px' }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Menu / Services ── */}
      <section style={{ background: '#130A06', padding: '100px 32px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <div style={{ fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', color: amber, marginBottom: '16px', fontFamily: "'Inter', sans-serif" }}>— Our Offerings —</div>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 700, color: '#FFF8F0' }}>Dine, Takeaway & Celebrate</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2px' }}>
            {[
              { image: FOOD_1, ...services[0] },
              { image: FOOD_2, ...services[1] },
              { image: CATERING, ...services[2] },
            ].map((s, i) => (
              <div key={i} style={{ position: 'relative', overflow: 'hidden', aspectRatio: '4/3', cursor: 'pointer' }}>
                <img src={img(s.image, 600, 450)} alt={s.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.5s ease' }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(13,7,5,0.92) 0%, rgba(13,7,5,0.1) 60%)' }} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, padding: '28px 28px' }}>
                  <div style={{ fontSize: '24px', marginBottom: '8px' }}>{s.icon}</div>
                  <h3 style={{ fontWeight: 700, fontSize: '1.25rem', color: '#FFF8F0', marginBottom: '8px' }}>{s.title}</h3>
                  <p style={{ color: '#C4A882', fontSize: '0.85rem', lineHeight: 1.6, fontFamily: "'Inter', sans-serif" }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Feature strip ── */}
      <section style={{ position: 'relative', overflow: 'hidden' }}>
        <img src={img(CHEF, 1600, 600)} alt="Our kitchen" style={{ width: '100%', height: '480px', objectFit: 'cover', display: 'block' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(13,7,5,0.65)' }} />
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '32px' }}>
          <div>
            <div style={{ fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', color: amber, marginBottom: '16px', fontFamily: "'Inter', sans-serif" }}>Our Philosophy</div>
            <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.6rem)', fontWeight: 700, color: '#FFF8F0', maxWidth: '640px', lineHeight: 1.2 }}>
              "Fresh ingredients. Traditional recipes. No shortcuts."
            </h2>
          </div>
        </div>
      </section>

      {/* ── About + Testimonial ── */}
      <section style={{ background: '#0D0705', padding: '100px 32px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '80px', alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', color: amber, marginBottom: '16px', fontFamily: "'Inter', sans-serif" }}>Our Story</div>
            <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 700, color: '#FFF8F0', marginBottom: '24px', lineHeight: 1.2 }}>Why {businessName}?</h2>
            <p style={{ color: '#C4A882', lineHeight: 1.9, fontSize: '0.95rem', fontFamily: "'Inter', sans-serif", marginBottom: '40px' }}>{about}</p>
            <img src={img(FOOD_3, 600, 350)} alt="Signature dish" style={{ width: '100%', borderRadius: '4px', objectFit: 'cover', aspectRatio: '16/9', display: 'block' }} />
          </div>
          <div>
            {/* Testimonial */}
            <div style={{ background: '#1A0E08', border: `1px solid rgba(245,158,11,0.2)`, borderRadius: '4px', padding: '48px 40px' }}>
              <div style={{ fontSize: '40px', color: amber, lineHeight: 1, marginBottom: '20px', fontFamily: "'Georgia', serif" }}>"</div>
              <blockquote style={{ fontSize: '1.1rem', color: '#F5F0E8', lineHeight: 1.8, fontStyle: 'italic', marginBottom: '32px' }}>
                {testimonial.text}
              </blockquote>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: `linear-gradient(135deg, ${amber}, ${red})`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: '18px', fontFamily: "'Inter', sans-serif", flexShrink: 0 }}>
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div style={{ fontWeight: 700, color: '#FFF8F0', fontFamily: "'Inter', sans-serif" }}>{testimonial.name}</div>
                  <div style={{ fontSize: '12px', color: '#A0816A', fontFamily: "'Inter', sans-serif" }}>Regular Guest · ★★★★★</div>
                </div>
              </div>
            </div>
            {/* Opening hours */}
            <div style={{ marginTop: '32px', background: '#1A0E08', border: `1px solid rgba(245,158,11,0.15)`, borderRadius: '4px', padding: '28px 32px' }}>
              <div style={{ fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: amber, marginBottom: '16px', fontFamily: "'Inter', sans-serif" }}>Opening Hours</div>
              {[['Mon – Fri', '11:00 AM – 10:30 PM'], ['Saturday', '10:00 AM – 11:00 PM'], ['Sunday', '10:00 AM – 10:00 PM']].map(([d, h]) => (
                <div key={d} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.06)', fontFamily: "'Inter', sans-serif" }}>
                  <span style={{ color: '#C4A882', fontSize: '14px' }}>{d}</span>
                  <span style={{ color: '#F5F0E8', fontSize: '14px', fontWeight: 500 }}>{h}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ position: 'relative', overflow: 'hidden', padding: '100px 32px', textAlign: 'center' }}>
        <img src={img(FOOD_2, 1600, 700)} alt="Food" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.3)' }} />
        <div style={{ position: 'relative' }}>
          <div style={{ fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', color: amber, marginBottom: '16px', fontFamily: "'Inter', sans-serif" }}>Come Visit Us</div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 700, color: '#FFF8F0', marginBottom: '16px' }}>{ctaHeadline}</h2>
          <p style={{ color: '#C4A882', marginBottom: '40px', fontSize: '1rem', fontFamily: "'Inter', sans-serif" }}>Reservations available for groups of 6 or more. Walk-ins welcome.</p>
          <button style={{ background: `linear-gradient(135deg, ${amber}, ${red})`, color: '#fff', padding: '16px 48px', borderRadius: '4px', fontWeight: 700, fontSize: '16px', border: 'none', cursor: 'pointer', fontFamily: 'inherit', letterSpacing: '0.06em' }}>
            {ctaText}
          </button>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ background: '#080401', padding: '60px 32px 32px', borderTop: '1px solid rgba(245,158,11,0.15)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '48px', marginBottom: '48px' }}>
            <div>
              <div style={{ fontWeight: 700, fontSize: '1.4rem', color: amber, marginBottom: '12px' }}>{businessName}</div>
              <p style={{ color: '#A0816A', fontSize: '13px', lineHeight: 1.8, fontFamily: "'Inter', sans-serif" }}>{tagline}</p>
            </div>
            <div style={{ fontFamily: "'Inter', sans-serif" }}>
              <div style={{ fontWeight: 600, fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#A0816A', marginBottom: '16px' }}>Contact</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', color: '#D4C4B0', fontSize: '13px' }}>
                <span>📞 {phone}</span>
                <span>✉️ {email}</span>
                <span>📍 {address}</span>
              </div>
            </div>
            <div style={{ fontFamily: "'Inter', sans-serif" }}>
              <div style={{ fontWeight: 600, fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#A0816A', marginBottom: '16px' }}>Website by</div>
              <div style={{ color: '#A0816A', fontSize: '13px', lineHeight: 1.8 }}>
                <Link to="/" style={{ color: '#818CF8', fontWeight: 700, textDecoration: 'none' }}>Jay Sahastrabudhe</Link>
                <div>Freelance Web Developer · Pune</div>
                <Link to="/contact" style={{ color: amber, fontWeight: 600, textDecoration: 'none', display: 'inline-block', marginTop: '8px' }}>Get yours from ₹5,000 →</Link>
              </div>
            </div>
          </div>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '24px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', color: '#5A4030', fontSize: '12px', fontFamily: "'Inter', sans-serif" }}>
            <span>© {new Date().getFullYear()} {businessName}. Sample design.</span>
            <Link to="/samples" style={{ color: '#818CF8', textDecoration: 'none', fontWeight: 600 }}>← View all samples</Link>
          </div>
        </div>
      </footer>

      <SampleNav prev={prev} next={next} />
    </div>
  )
}
