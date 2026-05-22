import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, ArrowLeft, ArrowRight } from 'lucide-react'

export default function SampleTemplate({ sample, prev, next }) {
  const {
    businessName, tagline, headline, subheadline,
    primaryColor, bgGradient, accentLight,
    services, stats, about, testimonial,
    ctaHeadline, ctaText, phone, address, email,
    industry, emoji,
  } = sample

  return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', background: '#fff', color: '#111827' }}>

      {/* ── Portfolio Banner ── */}
      <div style={{ background: '#6366F1', color: '#fff', fontSize: '13px', textAlign: 'center', padding: '10px 16px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
        <span>🎨 <strong>Sample Design</strong> by Jay Sahastrabudhe</span>
        <span style={{ opacity: 0.6 }}>·</span>
        <span>Get a professional website for your business</span>
        <Link to="/contact" style={{ color: '#C7D2FE', fontWeight: 700, textDecoration: 'underline' }}>
          Start at ₹5,000 →
        </Link>
      </div>

      {/* ── Navbar ── */}
      <nav style={{ background: '#fff', borderBottom: '1px solid #E5E7EB', position: 'sticky', top: 0, zIndex: 40, boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: bgGradient, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 800, fontSize: '15px' }}>
              {businessName.charAt(0)}
            </div>
            <div>
              <div style={{ fontWeight: 800, color: '#111827', fontSize: '15px', lineHeight: 1 }}>{businessName}</div>
              <div style={{ fontSize: '11px', color: '#9CA3AF', marginTop: '2px' }}>{industry}</div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '28px', alignItems: 'center' }}>
            {['Services', 'About', 'Contact'].map(item => (
              <span key={item} style={{ color: '#6B7280', fontSize: '14px', fontWeight: 500, cursor: 'pointer' }}>{item}</span>
            ))}
            <button style={{ background: bgGradient, color: '#fff', padding: '9px 22px', borderRadius: '8px', fontWeight: 700, fontSize: '14px', border: 'none', cursor: 'pointer', boxShadow: `0 4px 14px ${primaryColor}40` }}>
              {ctaText}
            </button>
          </div>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section style={{ background: bgGradient, color: '#fff', padding: '100px 24px 90px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div style={{ maxWidth: '700px', margin: '0 auto', position: 'relative' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.15)', borderRadius: '999px', padding: '6px 16px', marginBottom: '24px', fontSize: '12px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            <span style={{ fontSize: '16px' }}>{emoji}</span>
            {tagline}
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, lineHeight: 1.08, marginBottom: '20px', letterSpacing: '-0.02em' }}>
            {headline}
          </h1>
          <p style={{ fontSize: '1.1rem', opacity: 0.88, lineHeight: 1.75, marginBottom: '40px', maxWidth: '560px', margin: '0 auto 40px' }}>
            {subheadline}
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <button style={{ background: '#fff', color: primaryColor, padding: '14px 36px', borderRadius: '10px', fontWeight: 800, fontSize: '15px', border: 'none', cursor: 'pointer', boxShadow: '0 6px 24px rgba(0,0,0,0.18)' }}>
              {ctaText}
            </button>
            <button style={{ background: 'transparent', color: '#fff', padding: '14px 36px', borderRadius: '10px', fontWeight: 600, fontSize: '15px', border: '2px solid rgba(255,255,255,0.45)', cursor: 'pointer' }}>
              Learn More ↓
            </button>
          </div>
          {/* Stats row */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', marginTop: '52px', flexWrap: 'wrap' }}>
            {stats.map(({ v, l }) => (
              <div key={l} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '1.75rem', fontWeight: 900 }}>{v}</div>
                <div style={{ fontSize: '12px', opacity: 0.75, marginTop: '2px' }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section style={{ background: accentLight, padding: '90px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <p style={{ textAlign: 'center', fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: primaryColor, marginBottom: '8px' }}>What We Offer</p>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 800, color: '#111827', marginBottom: '52px', letterSpacing: '-0.02em' }}>Our Services</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {services.map((s, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: '18px', padding: '36px 32px', boxShadow: '0 2px 20px rgba(0,0,0,0.06)', border: `1px solid ${primaryColor}22`, transition: 'transform 0.2s ease, box-shadow 0.2s ease' }}>
                <div style={{ fontSize: '2.75rem', marginBottom: '18px' }}>{s.icon}</div>
                <h3 style={{ fontWeight: 700, fontSize: '1.1rem', color: '#111827', marginBottom: '10px' }}>{s.title}</h3>
                <p style={{ color: '#6B7280', fontSize: '0.9rem', lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About ── */}
      <section style={{ background: '#fff', padding: '90px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '64px', alignItems: 'center' }}>
          <div>
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: primaryColor, marginBottom: '10px' }}>Our Story</p>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800, color: '#111827', marginBottom: '22px', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
              Why Choose {businessName}?
            </h2>
            <p style={{ color: '#6B7280', lineHeight: 1.8, marginBottom: '30px', fontSize: '0.95rem' }}>{about}</p>
            <div style={{ display: 'flex', gap: '36px', flexWrap: 'wrap' }}>
              {stats.map(({ v, l }) => (
                <div key={l}>
                  <div style={{ fontSize: '1.875rem', fontWeight: 900, color: primaryColor }}>{v}</div>
                  <div style={{ fontSize: '12px', color: '#9CA3AF', marginTop: '3px' }}>{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial card */}
          <div style={{ background: accentLight, borderRadius: '24px', padding: '40px', border: `1px solid ${primaryColor}20`, boxShadow: `0 8px 32px ${primaryColor}12` }}>
            <div style={{ display: 'flex', gap: '2px', marginBottom: '18px' }}>
              {'★★★★★'.split('').map((s, i) => (
                <span key={i} style={{ color: '#FBBF24', fontSize: '20px' }}>{s}</span>
              ))}
            </div>
            <blockquote style={{ fontSize: '1rem', color: '#374151', lineHeight: 1.75, fontStyle: 'italic', marginBottom: '28px' }}>
              "{testimonial.text}"
            </blockquote>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: bgGradient, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: '16px', flexShrink: 0 }}>
                {testimonial.name.charAt(0)}
              </div>
              <div>
                <div style={{ fontWeight: 700, color: '#111827', fontSize: '14px' }}>{testimonial.name}</div>
                <div style={{ fontSize: '12px', color: '#9CA3AF', marginTop: '2px' }}>Verified Customer</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: bgGradient, color: '#fff', padding: '90px 24px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div style={{ maxWidth: '600px', margin: '0 auto', position: 'relative' }}>
          <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 900, marginBottom: '16px', letterSpacing: '-0.02em' }}>{ctaHeadline}</h2>
          <p style={{ opacity: 0.85, marginBottom: '36px', fontSize: '1.05rem', lineHeight: 1.7 }}>
            Get in touch today. We respond within 24 hours.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <button style={{ background: '#fff', color: primaryColor, padding: '14px 36px', borderRadius: '10px', fontWeight: 800, fontSize: '15px', border: 'none', cursor: 'pointer', boxShadow: '0 4px 20px rgba(0,0,0,0.15)' }}>
              {ctaText}
            </button>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ background: '#111827', color: '#fff', padding: '56px 24px 32px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', marginBottom: '40px' }}>
            <div>
              <div style={{ fontWeight: 800, fontSize: '1.1rem', marginBottom: '10px' }}>{businessName}</div>
              <p style={{ color: '#9CA3AF', fontSize: '13px', lineHeight: 1.7 }}>{tagline}</p>
            </div>
            <div>
              <div style={{ fontWeight: 600, fontSize: '13px', marginBottom: '14px', color: '#D1D5DB', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Contact</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', color: '#9CA3AF', fontSize: '13px' }}>
                <span>📞 {phone}</span>
                <span>✉️ {email}</span>
                <span>📍 {address}</span>
              </div>
            </div>
            <div>
              <div style={{ fontWeight: 600, fontSize: '13px', marginBottom: '14px', color: '#D1D5DB', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Website by</div>
              <div style={{ color: '#9CA3AF', fontSize: '13px', lineHeight: 1.8 }}>
                <Link to="/" style={{ color: '#818CF8', fontWeight: 700, textDecoration: 'none' }}>Jay Sahastrabudhe</Link>
                <div>Freelance Web Developer</div>
                <div>Dharwad, Karnataka</div>
                <Link to="/contact" style={{ color: '#22D3EE', fontWeight: 600, textDecoration: 'none', display: 'inline-block', marginTop: '8px' }}>Get yours from ₹5,000 →</Link>
              </div>
            </div>
          </div>
          <div style={{ borderTop: '1px solid #374151', paddingTop: '24px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '12px', color: '#6B7280', fontSize: '12px' }}>
            <span>© {new Date().getFullYear()} {businessName}. Sample design.</span>
            <Link to="/samples" style={{ color: '#818CF8', textDecoration: 'none', fontWeight: 600 }}>← View all sample designs</Link>
          </div>
        </div>
      </footer>

      {/* ── Prev / Next sample nav ── */}
      {(prev || next) && (
        <div style={{ background: '#030712', padding: '20px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          {prev ? (
            <Link to={`/samples/${prev.id}`} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#8899BB', textDecoration: 'none', fontSize: '14px', fontWeight: 500 }}>
              <ArrowLeft style={{ width: '14px', height: '14px' }} />
              <span>{prev.emoji} {prev.businessName}</span>
            </Link>
          ) : <span />}
          <Link to="/samples" style={{ color: '#818CF8', fontSize: '13px', textDecoration: 'none', fontWeight: 600 }}>All Samples</Link>
          {next ? (
            <Link to={`/samples/${next.id}`} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#8899BB', textDecoration: 'none', fontSize: '14px', fontWeight: 500 }}>
              <span>{next.emoji} {next.businessName}</span>
              <ArrowRight style={{ width: '14px', height: '14px' }} />
            </Link>
          ) : <span />}
        </div>
      )}
    </div>
  )
}
