import { Link } from 'react-router-dom'
import { PortfolioBanner, SampleNav, img } from './SampleShared'

// Unsplash IDs — healthcare / clinic
const HERO_BG  = 'photo-1519494026892-80bbd2d6fd0d' // doctor office / hospital
const DOC_1    = 'photo-1559839734-2b71ea197ec2' // female doctor
const DOC_2    = 'photo-1612349317150-e413f6a5b16d' // doctor consultation
const DIAG     = 'photo-1587351021759-3e566b6af7cc' // medical equipment / lab
const WAITING  = 'photo-1519161410916-e04a7a5a2d5c' // clinic interior / waiting
const PAEDS    = 'photo-1551884170-09fb70a3a2ed' // child healthcare

const teal   = '#0891B2'
const tealLt = '#ECFEFF'
const navy   = '#0E4C62'
const text   = '#1F2937'
const muted  = '#6B7280'

export default function ClinicSample({ sample, prev, next }) {
  const { businessName, tagline, headline, subheadline, services, stats, about, testimonial, ctaHeadline, ctaText, phone, address, email } = sample

  const doctors = [
    { image: DOC_1, name: 'Dr. Deepa Nair', spec: 'MD (AIIMS) · General Medicine', exp: '14 yrs' },
    { image: DOC_2, name: 'Dr. Rajan Patel', spec: 'MBBS · Paediatrics', exp: '9 yrs' },
    { image: DIAG, name: 'Dr. Sneha Joshi', spec: 'MBBS · Diagnostics & Pathology', exp: '11 yrs' },
  ]

  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif", background: '#fff', color: text, margin: 0, padding: 0 }}>
      <PortfolioBanner />

      {/* ── Top bar ── */}
      <div style={{ background: teal, color: '#fff', fontSize: '12px', padding: '8px 40px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px', fontWeight: 500 }}>
        <span>📞 {phone} &nbsp;·&nbsp; ✉️ {email}</span>
        <span>⏰ Mon–Sat: 8AM–8PM &nbsp; Sun: 9AM–2PM</span>
      </div>

      {/* ── Navbar ── */}
      <nav style={{ background: '#fff', borderBottom: '1px solid #E5E7EB', position: 'sticky', top: 0, zIndex: 50, boxShadow: '0 2px 8px rgba(0,0,0,0.05)', padding: '0 40px', height: '68px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: `linear-gradient(135deg, ${teal}, ${navy})`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 800, fontSize: '16px' }}>+</div>
          <div>
            <div style={{ fontWeight: 800, fontSize: '16px', color: '#111827' }}>{businessName}</div>
            <div style={{ fontSize: '11px', color: muted }}>Quality Healthcare · Pune</div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '28px', alignItems: 'center' }}>
          {['Services', 'Doctors', 'Diagnostics', 'Contact'].map(item => (
            <span key={item} style={{ color: '#374151', fontSize: '14px', fontWeight: 500, cursor: 'pointer' }}>{item}</span>
          ))}
          <button style={{ background: `linear-gradient(135deg, ${teal}, ${navy})`, color: '#fff', padding: '10px 24px', borderRadius: '8px', fontWeight: 700, fontSize: '14px', border: 'none', cursor: 'pointer' }}>
            {ctaText}
          </button>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section style={{ position: 'relative', minHeight: '90vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <img src={img(HERO_BG, 1600, 900)} alt="Clinic" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%', filter: 'brightness(0.3) saturate(0.8)' }} />
        {/* Teal gradient */}
        <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(135deg, ${navy}E0 0%, ${teal}90 100%)` }} />

        <div style={{ position: 'relative', maxWidth: '1200px', margin: '0 auto', padding: '0 48px', width: '100%', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '64px', alignItems: 'center' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '999px', padding: '6px 16px', marginBottom: '24px' }}>
              <span style={{ fontSize: '14px' }}>🏥</span>
              <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#A5F3FC' }}>Est. 2012 · NABH Accredited</span>
            </div>
            <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.6rem)', fontWeight: 800, lineHeight: 1.08, color: '#fff', marginBottom: '20px', letterSpacing: '-0.02em' }}>
              {headline}
            </h1>
            <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.8, marginBottom: '40px' }}>
              {subheadline}
            </p>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <button style={{ background: '#fff', color: teal, padding: '14px 36px', borderRadius: '8px', fontWeight: 800, fontSize: '14px', border: 'none', cursor: 'pointer' }}>
                {ctaText}
              </button>
              <button style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', padding: '14px 36px', borderRadius: '8px', fontWeight: 600, fontSize: '14px', border: '1px solid rgba(255,255,255,0.3)', cursor: 'pointer' }}>
                Our Doctors
              </button>
            </div>
          </div>
          {/* Quick booking card */}
          <div style={{ background: '#fff', borderRadius: '20px', padding: '36px 32px', boxShadow: '0 20px 60px rgba(0,0,0,0.3)' }}>
            <h3 style={{ fontWeight: 700, fontSize: '1.1rem', color: '#111827', marginBottom: '4px' }}>Book Appointment</h3>
            <p style={{ color: muted, fontSize: '13px', marginBottom: '24px' }}>Same-day slots available</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {['Select Department', 'Choose Doctor', 'Pick Date & Time'].map((p, i) => (
                <div key={i} style={{ border: '1px solid #E5E7EB', borderRadius: '8px', padding: '12px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#9CA3AF', fontSize: '14px', cursor: 'pointer' }}>
                  <span>{p}</span><span style={{ fontSize: '18px' }}>›</span>
                </div>
              ))}
              <button style={{ background: `linear-gradient(135deg, ${teal}, ${navy})`, color: '#fff', padding: '14px', borderRadius: '8px', fontWeight: 700, fontSize: '14px', border: 'none', cursor: 'pointer', marginTop: '8px' }}>
                Confirm Booking
              </button>
            </div>
          </div>
        </div>

        {/* Stats ribbon */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(12px)', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '20px 48px', display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '16px' }}>
            {stats.map(({ v, l }) => (
              <div key={l} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#fff' }}>{v}</div>
                <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.6)', letterSpacing: '0.1em', marginTop: '2px' }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section style={{ background: tealLt, padding: '88px 40px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '52px' }}>
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: teal, marginBottom: '10px' }}>What We Offer</p>
            <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 800, color: '#111827', letterSpacing: '-0.02em' }}>Our Medical Services</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {[
              { ...services[0], image: DOC_2, color: '#ECFEFF', border: '#A5F3FC' },
              { ...services[1], image: DIAG,  color: '#EFF6FF', border: '#BFDBFE' },
              { ...services[2], image: PAEDS, color: '#F0FDF4', border: '#86EFAC' },
            ].map((s, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 2px 16px rgba(0,0,0,0.06)', border: '1px solid #E5E7EB', cursor: 'pointer', transition: 'transform 0.2s, box-shadow 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = `0 12px 40px ${teal}20` }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 2px 16px rgba(0,0,0,0.06)' }}>
                <img src={img(s.image, 500, 260)} alt={s.title} style={{ width: '100%', height: '180px', objectFit: 'cover', display: 'block' }} />
                <div style={{ padding: '28px 28px 32px' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '12px' }}>{s.icon}</div>
                  <h3 style={{ fontWeight: 700, fontSize: '1.05rem', color: '#111827', marginBottom: '10px' }}>{s.title}</h3>
                  <p style={{ color: muted, fontSize: '0.88rem', lineHeight: 1.7 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Doctor Cards ── */}
      <section style={{ background: '#fff', padding: '88px 40px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '52px' }}>
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: teal, marginBottom: '10px' }}>Our Team</p>
            <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 800, color: '#111827', letterSpacing: '-0.02em' }}>Meet Our Doctors</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: '24px' }}>
            {doctors.map((doc, i) => (
              <div key={i} style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid #E5E7EB', boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}>
                <img src={img(doc.image, 500, 300)} alt={doc.name} style={{ width: '100%', height: '220px', objectFit: 'cover', display: 'block', objectPosition: 'center top', filter: 'saturate(0.85)' }} />
                <div style={{ padding: '24px 24px', borderTop: `3px solid ${teal}` }}>
                  <div style={{ fontWeight: 700, fontSize: '1.05rem', color: '#111827', marginBottom: '4px' }}>{doc.name}</div>
                  <div style={{ fontSize: '12px', color: teal, fontWeight: 600, marginBottom: '8px' }}>{doc.spec}</div>
                  <div style={{ fontSize: '12px', color: muted }}>{doc.exp} experience</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About + Testimonial ── */}
      <section style={{ background: tealLt, padding: '88px 40px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '72px', alignItems: 'center' }}>
          <div>
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: teal, marginBottom: '12px' }}>Our Story</p>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800, color: '#111827', marginBottom: '20px', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
              Compassionate Care Since 2012
            </h2>
            <p style={{ color: muted, lineHeight: 1.85, marginBottom: '32px', fontSize: '0.95rem' }}>{about}</p>
            <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
              {stats.map(({ v, l }) => (
                <div key={l}>
                  <div style={{ fontSize: '1.75rem', fontWeight: 800, color: teal }}>{v}</div>
                  <div style={{ fontSize: '12px', color: muted, marginTop: '2px' }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
          <div>
            {/* Testimonial */}
            <div style={{ background: '#fff', borderRadius: '20px', padding: '40px 36px', boxShadow: '0 4px 24px rgba(8,145,178,0.1)', border: `1px solid ${teal}25`, marginBottom: '20px' }}>
              <div style={{ display: 'flex', gap: '2px', marginBottom: '16px' }}>
                {'★★★★★'.split('').map((s, i) => <span key={i} style={{ color: '#FBBF24', fontSize: '18px' }}>{s}</span>)}
              </div>
              <blockquote style={{ fontSize: '0.95rem', color: '#374151', lineHeight: 1.8, fontStyle: 'italic', marginBottom: '24px' }}>
                "{testimonial.text}"
              </blockquote>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: `linear-gradient(135deg, ${teal}, ${navy})`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: '15px', flexShrink: 0 }}>
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div style={{ fontWeight: 700, color: '#111827', fontSize: '14px' }}>{testimonial.name}</div>
                  <div style={{ fontSize: '12px', color: muted, marginTop: '1px' }}>Patient since 2020</div>
                </div>
              </div>
            </div>
            {/* Waiting room image */}
            <img src={img(WAITING, 600, 280)} alt="Our clinic" style={{ width: '100%', borderRadius: '16px', objectFit: 'cover', height: '180px', display: 'block' }} />
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: `linear-gradient(135deg, ${navy} 0%, ${teal} 100%)`, padding: '88px 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: '580px', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '999px', padding: '6px 18px', marginBottom: '24px' }}>
            <span style={{ fontSize: '14px' }}>🟢</span>
            <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#A5F3FC' }}>Same-Day Appointments Available</span>
          </div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 800, color: '#fff', marginBottom: '16px', letterSpacing: '-0.02em' }}>{ctaHeadline}</h2>
          <p style={{ color: 'rgba(255,255,255,0.75)', marginBottom: '36px', fontSize: '1rem', lineHeight: 1.7 }}>
            Walk in or book online. Your health is our priority.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <button style={{ background: '#fff', color: teal, padding: '14px 40px', borderRadius: '8px', fontWeight: 800, fontSize: '15px', border: 'none', cursor: 'pointer' }}>
              {ctaText}
            </button>
            <button style={{ background: 'transparent', color: '#fff', padding: '14px 40px', borderRadius: '8px', fontWeight: 600, fontSize: '15px', border: '1.5px solid rgba(255,255,255,0.4)', cursor: 'pointer' }}>
              Call Now
            </button>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ background: '#0A1929', color: '#fff', padding: '60px 40px 28px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', marginBottom: '40px' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: `linear-gradient(135deg, ${teal}, ${navy})`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 800, fontSize: '14px' }}>+</div>
                <div style={{ fontWeight: 800, fontSize: '1rem' }}>{businessName}</div>
              </div>
              <p style={{ color: '#94A3B8', fontSize: '13px', lineHeight: 1.7 }}>{tagline}</p>
            </div>
            <div>
              <div style={{ fontWeight: 600, fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#64748B', marginBottom: '14px' }}>Contact</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', color: '#94A3B8', fontSize: '13px' }}>
                <span>📞 {phone}</span>
                <span>✉️ {email}</span>
                <span>📍 {address}</span>
              </div>
            </div>
            <div>
              <div style={{ fontWeight: 600, fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#64748B', marginBottom: '14px' }}>Website by</div>
              <div style={{ color: '#94A3B8', fontSize: '13px', lineHeight: 1.8 }}>
                <Link to="/" style={{ color: '#818CF8', fontWeight: 700, textDecoration: 'none' }}>Scrpt</Link>
                <div>Web Development Studio · Pune</div>
                <Link to="/contact" style={{ color: '#22D3EE', fontWeight: 600, textDecoration: 'none', display: 'inline-block', marginTop: '8px' }}>Get yours from ₹5,000 →</Link>
              </div>
            </div>
          </div>
          <div style={{ borderTop: '1px solid #1E293B', paddingTop: '24px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', color: '#475569', fontSize: '12px' }}>
            <span>© {new Date().getFullYear()} {businessName}. Sample design.</span>
            <Link to="/samples" style={{ color: '#818CF8', textDecoration: 'none', fontWeight: 600 }}>← View all samples</Link>
          </div>
        </div>
      </footer>
      <SampleNav prev={prev} next={next} />
    </div>
  )
}
