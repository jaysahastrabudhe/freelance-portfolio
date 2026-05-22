import { Link } from 'react-router-dom'
import { PortfolioBanner, SampleNav, img } from './SampleShared'

// Unsplash IDs — photography / wedding
const HERO_BG   = 'photo-1519741497674-611481863552' // wedding couple
const GALLERY_1 = 'photo-1511285560929-80b456fea0bc' // wedding ceremony
const GALLERY_2 = 'photo-1606216794079-73e0b0a59f93' // portrait closeup
const GALLERY_3 = 'photo-1537907690979-80b456fea0bc' // couple outdoor
const GALLERY_4 = 'photo-1465495976277-4387d4b0b4c6' // wedding reception
const GALLERY_5 = 'photo-1583939003579-730e3918a45a' // bridal portrait
const GALLERY_6 = 'photo-1552334405-b81c5c4e1843' // product photography
const PORTRAIT  = 'photo-1507003211169-0a1dd7228f2d' // professional portrait

const purple = '#8B5CF6'
const pink   = '#EC4899'
const bg     = '#0C0910'
const card   = '#14101A'

export default function PhotographySample({ sample, prev, next }) {
  const { businessName, tagline, headline, subheadline, services, stats, about, testimonial, ctaHeadline, ctaText, phone, address, email } = sample

  const galleryImages = [GALLERY_1, GALLERY_2, GALLERY_3, GALLERY_4, GALLERY_5, GALLERY_6]

  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif", background: bg, color: '#E8E0F0', margin: 0, padding: 0 }}>
      <PortfolioBanner />

      {/* ── Navbar ── */}
      <nav style={{ position: 'sticky', top: 0, zIndex: 50, background: 'rgba(12,9,16,0.9)', backdropFilter: 'blur(16px)', padding: '0 48px', height: '68px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(139,92,246,0.15)' }}>
        <div>
          <div style={{ fontWeight: 300, fontSize: '18px', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#fff' }}>{businessName}</div>
        </div>
        <div style={{ display: 'flex', gap: '36px', alignItems: 'center' }}>
          {['Work', 'Services', 'About', 'Contact'].map(item => (
            <span key={item} style={{ color: 'rgba(232,224,240,0.5)', fontSize: '12px', fontWeight: 400, cursor: 'pointer', letterSpacing: '0.14em', textTransform: 'uppercase' }}>{item}</span>
          ))}
          <button style={{ background: `linear-gradient(135deg, ${purple}, ${pink})`, color: '#fff', padding: '9px 24px', borderRadius: '999px', fontWeight: 600, fontSize: '12px', border: 'none', cursor: 'pointer', letterSpacing: '0.08em' }}>
            {ctaText}
          </button>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'flex-end', overflow: 'hidden', paddingBottom: '80px' }}>
        <img src={img(HERO_BG, 1600, 1000)} alt="Photography hero" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(12,9,16,1) 0%, rgba(12,9,16,0.3) 50%, rgba(12,9,16,0.1) 100%)' }} />
        {/* Grain texture overlay */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'0.04\'/%3E%3C/svg%3E")', opacity: 0.6 }} />

        <div style={{ position: 'relative', maxWidth: '1200px', margin: '0 auto', padding: '0 48px', width: '100%' }}>
          <div style={{ maxWidth: '680px' }}>
            <div style={{ display: 'inline-block', marginBottom: '24px' }}>
              <span style={{ fontSize: '10px', fontWeight: 500, letterSpacing: '0.35em', textTransform: 'uppercase', color: 'rgba(139,92,246,0.8)', borderBottom: '1px solid rgba(139,92,246,0.4)', paddingBottom: '4px' }}>
                {tagline}
              </span>
            </div>
            <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 4.2rem)', fontWeight: 300, lineHeight: 1.1, color: '#fff', marginBottom: '28px', letterSpacing: '-0.01em' }}>
              {headline}
            </h1>
            <p style={{ fontSize: '1rem', color: 'rgba(232,224,240,0.65)', lineHeight: 1.8, marginBottom: '44px', maxWidth: '500px', fontWeight: 300 }}>
              {subheadline}
            </p>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
              <button style={{ background: `linear-gradient(135deg, ${purple}, ${pink})`, color: '#fff', padding: '14px 40px', borderRadius: '999px', fontWeight: 600, fontSize: '14px', border: 'none', cursor: 'pointer', letterSpacing: '0.06em' }}>
                {ctaText}
              </button>
              <button style={{ background: 'transparent', color: 'rgba(255,255,255,0.7)', padding: '14px 40px', borderRadius: '999px', fontWeight: 400, fontSize: '14px', border: '1px solid rgba(255,255,255,0.2)', cursor: 'pointer' }}>
                View Gallery ↓
              </button>
            </div>
          </div>
          {/* Stats row */}
          <div style={{ display: 'flex', gap: '52px', marginTop: '72px', flexWrap: 'wrap' }}>
            {stats.map(({ v, l }) => (
              <div key={l}>
                <div style={{ fontSize: '1.8rem', fontWeight: 700, background: `linear-gradient(135deg, ${purple}, ${pink})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{v}</div>
                <div style={{ fontSize: '11px', color: 'rgba(232,224,240,0.5)', letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: '4px' }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gallery Grid ── */}
      <section style={{ background: bg, padding: '88px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 32px' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '40px', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <p style={{ fontSize: '10px', fontWeight: 500, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(139,92,246,0.7)', marginBottom: '12px' }}>Portfolio</p>
              <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.6rem)', fontWeight: 300, color: '#fff', letterSpacing: '-0.01em' }}>Selected Work</h2>
            </div>
            <span style={{ color: 'rgba(232,224,240,0.4)', fontSize: '13px', letterSpacing: '0.08em', cursor: 'pointer' }}>View All →</span>
          </div>
          {/* Masonry-style grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: 'auto', gap: '4px' }}>
            {galleryImages.map((id, i) => (
              <div key={i} style={{ overflow: 'hidden', gridRow: i === 0 ? 'span 2' : 'span 1', position: 'relative', cursor: 'pointer' }}
                onMouseEnter={e => { e.currentTarget.querySelector('img').style.transform = 'scale(1.04)'; e.currentTarget.querySelector('.overlay').style.opacity = '1' }}
                onMouseLeave={e => { e.currentTarget.querySelector('img').style.transform = 'scale(1)'; e.currentTarget.querySelector('.overlay').style.opacity = '0' }}>
                <img src={img(id, 500, i === 0 ? 700 : 350)} alt={`Gallery ${i+1}`}
                  style={{ width: '100%', height: i === 0 ? '580px' : '280px', objectFit: 'cover', display: 'block', transition: 'transform 0.6s ease', filter: 'brightness(0.8)' }} />
                <div className="overlay" style={{ position: 'absolute', inset: 0, background: `linear-gradient(135deg, ${purple}40, ${pink}30)`, opacity: 0, transition: 'opacity 0.3s ease' }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section style={{ background: card, padding: '88px 32px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <p style={{ fontSize: '10px', fontWeight: 500, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(139,92,246,0.7)', marginBottom: '14px' }}>Services</p>
            <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 300, color: '#fff' }}>What I Offer</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1px', background: 'rgba(139,92,246,0.1)' }}>
            {services.map((s, i) => (
              <div key={i} style={{ background: card, padding: '48px 36px' }}>
                <div style={{ fontSize: '2.2rem', marginBottom: '20px' }}>{s.icon}</div>
                <h3 style={{ fontWeight: 600, fontSize: '1.05rem', color: '#fff', marginBottom: '12px' }}>{s.title}</h3>
                <p style={{ color: 'rgba(232,224,240,0.55)', fontSize: '0.9rem', lineHeight: 1.75, fontWeight: 300 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About + Testimonial ── */}
      <section style={{ background: bg, padding: '88px 32px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '80px', alignItems: 'center' }}>
          <div style={{ position: 'relative' }}>
            <img src={img(PORTRAIT, 500, 600)} alt="Photographer portrait" style={{ width: '100%', aspectRatio: '4/5', objectFit: 'cover', display: 'block', filter: 'brightness(0.85) saturate(0.9)' }} />
            <div style={{ position: 'absolute', bottom: '-16px', right: '-16px', background: `linear-gradient(135deg, ${purple}, ${pink})`, padding: '20px 24px', color: '#fff' }}>
              <div style={{ fontSize: '1.8rem', fontWeight: 700 }}>8+</div>
              <div style={{ fontSize: '12px', opacity: 0.85, marginTop: '2px' }}>Years of Experience</div>
            </div>
          </div>
          <div>
            <p style={{ fontSize: '10px', fontWeight: 500, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(139,92,246,0.7)', marginBottom: '14px' }}>The Artist</p>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 300, color: '#fff', marginBottom: '24px', lineHeight: 1.2 }}>
              Behind the Lens
            </h2>
            <p style={{ color: 'rgba(232,224,240,0.6)', lineHeight: 1.85, fontSize: '0.95rem', fontWeight: 300, marginBottom: '40px' }}>{about}</p>
            {/* Testimonial */}
            <div style={{ borderLeft: `2px solid ${purple}`, paddingLeft: '24px' }}>
              <blockquote style={{ fontSize: '0.95rem', color: 'rgba(232,224,240,0.8)', lineHeight: 1.8, fontStyle: 'italic', fontWeight: 300, marginBottom: '20px' }}>
                "{testimonial.text}"
              </blockquote>
              <div style={{ fontWeight: 600, color: '#fff', fontSize: '13px' }}>{testimonial.name}</div>
              <div style={{ fontSize: '11px', color: 'rgba(232,224,240,0.4)', marginTop: '4px', letterSpacing: '0.08em' }}>Wedding Client · ★★★★★</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: `linear-gradient(135deg, ${purple}30 0%, ${pink}20 100%)`, borderTop: `1px solid ${purple}25`, borderBottom: `1px solid ${pink}25`, padding: '100px 32px', textAlign: 'center' }}>
        <div style={{ maxWidth: '580px', margin: '0 auto' }}>
          <p style={{ fontSize: '10px', fontWeight: 500, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(139,92,246,0.7)', marginBottom: '20px' }}>Ready to Begin?</p>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 300, color: '#fff', marginBottom: '16px', lineHeight: 1.2 }}>{ctaHeadline}</h2>
          <p style={{ color: 'rgba(232,224,240,0.55)', marginBottom: '44px', fontSize: '0.95rem', fontWeight: 300, lineHeight: 1.7 }}>
            Limited slots available per month. Book early to secure your date.
          </p>
          <button style={{ background: `linear-gradient(135deg, ${purple}, ${pink})`, color: '#fff', padding: '16px 52px', borderRadius: '999px', fontWeight: 600, fontSize: '15px', border: 'none', cursor: 'pointer', letterSpacing: '0.06em' }}>
            {ctaText}
          </button>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ background: '#080509', padding: '60px 32px 28px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '48px', marginBottom: '48px' }}>
            <div>
              <div style={{ fontWeight: 300, fontSize: '1.2rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#fff', marginBottom: '12px' }}>{businessName}</div>
              <p style={{ color: 'rgba(232,224,240,0.35)', fontSize: '13px', lineHeight: 1.7, fontWeight: 300 }}>{tagline}</p>
            </div>
            <div>
              <div style={{ fontWeight: 600, fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(232,224,240,0.3)', marginBottom: '16px' }}>Contact</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', color: 'rgba(232,224,240,0.5)', fontSize: '13px' }}>
                <span>📞 {phone}</span>
                <span>✉️ {email}</span>
                <span>📍 {address}</span>
              </div>
            </div>
            <div>
              <div style={{ fontWeight: 600, fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(232,224,240,0.3)', marginBottom: '16px' }}>Website by</div>
              <div style={{ color: 'rgba(232,224,240,0.4)', fontSize: '13px', lineHeight: 1.8 }}>
                <Link to="/" style={{ color: '#818CF8', fontWeight: 700, textDecoration: 'none' }}>Jay Sahastrabudhe</Link>
                <div>Freelance Web Developer · Pune</div>
                <Link to="/contact" style={{ color: pink, fontWeight: 600, textDecoration: 'none', display: 'inline-block', marginTop: '8px' }}>Get yours from ₹5,000 →</Link>
              </div>
            </div>
          </div>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.04)', paddingTop: '24px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', color: 'rgba(255,255,255,0.15)', fontSize: '12px' }}>
            <span>© {new Date().getFullYear()} {businessName}. Sample design.</span>
            <Link to="/samples" style={{ color: '#818CF8', textDecoration: 'none', fontWeight: 600 }}>← View all samples</Link>
          </div>
        </div>
      </footer>
      <SampleNav prev={prev} next={next} />
    </div>
  )
}
