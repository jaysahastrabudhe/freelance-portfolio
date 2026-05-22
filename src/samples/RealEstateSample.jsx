import { Link } from 'react-router-dom'
import { PortfolioBanner, SampleNav, img } from './SampleShared'
import { Phone, Mail, MapPin, Check } from 'lucide-react'

// Unsplash IDs — property / architecture
const HERO_BG   = 'photo-1564013799919-ab600027ffc6' // beautiful house exterior
const PROP_1    = 'photo-1582407947304-fd86f028f716' // modern apartment
const PROP_2    = 'photo-1571055107559-3e67626fa8be' // luxury interior
const PROP_3    = 'photo-1613490493576-7fde63acd811' // villa exterior
const AGENT_1   = 'photo-1560250097-0b93528c311a' // professional man suit
const CITY      = 'photo-1477959858617-67f85cf4f1df' // city skyline

export default function RealEstateSample({ sample, prev, next }) {
  const { businessName, tagline, headline, subheadline, services, stats, about, testimonial, ctaHeadline, ctaText, phone, address, email } = sample

  const blue  = '#1D4ED8'
  const light = '#EFF6FF'

  const listings = [
    { image: PROP_1, name: '3BHK in Wakad', price: '₹85 L', beds: 3, baths: 2, area: '1,450 sqft', tag: 'New Listing' },
    { image: PROP_2, name: 'Luxury Flat, Koregaon', price: '₹1.8 Cr', beds: 4, baths: 3, area: '2,200 sqft', tag: 'Featured' },
    { image: PROP_3, name: 'Villa in Baner', price: '₹2.5 Cr', beds: 5, baths: 4, area: '3,600 sqft', tag: 'Premium' },
  ]

  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif", background: '#fff', color: '#111827', margin: 0, padding: 0 }}>
      <PortfolioBanner />

      {/* ── Navbar ── */}
      <nav style={{ position: 'sticky', top: 0, zIndex: 50, background: '#fff', borderBottom: '1px solid #E5E7EB', boxShadow: '0 1px 6px rgba(0,0,0,0.06)', padding: '0 40px', height: '70px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: blue, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 900, fontSize: '15px' }}>P</div>
          <div>
            <div style={{ fontWeight: 800, fontSize: '16px', color: '#111827' }}>{businessName}</div>
            <div style={{ fontSize: '11px', color: '#9CA3AF' }}>Pune Real Estate</div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '28px', alignItems: 'center' }}>
          {['Buy', 'Sell', 'Rent', 'Agents'].map(item => (
            <span key={item} style={{ color: '#374151', fontSize: '14px', fontWeight: 500, cursor: 'pointer' }}>{item}</span>
          ))}
          <button style={{ background: blue, color: '#fff', padding: '10px 24px', borderRadius: '8px', fontWeight: 700, fontSize: '14px', border: 'none', cursor: 'pointer' }}>
            {ctaText}
          </button>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section style={{ position: 'relative', minHeight: '88vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <img src={img(HERO_BG, 1600, 900)} alt="Luxury property" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(17,24,39,0.78) 45%, rgba(17,24,39,0.2) 100%)' }} />
        <div style={{ position: 'relative', maxWidth: '1200px', margin: '0 auto', padding: '0 48px', width: '100%' }}>
          <div style={{ maxWidth: '560px' }}>
            <div style={{ display: 'inline-block', background: 'rgba(29,78,216,0.85)', color: '#DBEAFE', fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', padding: '6px 16px', borderRadius: '999px', marginBottom: '24px' }}>
              Pune's Most Trusted Agency
            </div>
            <h1 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)', fontWeight: 900, lineHeight: 1.05, color: '#fff', marginBottom: '20px', letterSpacing: '-0.02em' }}>
              {headline}
            </h1>
            <p style={{ fontSize: '1.05rem', color: '#CBD5E1', lineHeight: 1.75, marginBottom: '40px' }}>
              {subheadline}
            </p>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <button style={{ background: blue, color: '#fff', padding: '14px 36px', borderRadius: '8px', fontWeight: 700, fontSize: '15px', border: 'none', cursor: 'pointer' }}>
                Browse Properties
              </button>
              <button style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', padding: '14px 36px', borderRadius: '8px', fontWeight: 600, fontSize: '15px', border: '1px solid rgba(255,255,255,0.3)', cursor: 'pointer' }}>
                Talk to Agent
              </button>
            </div>
          </div>
        </div>

        {/* Search bar */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
          <div style={{ maxWidth: '900px', margin: '0 auto 0', padding: '0 48px', transform: 'translateY(50%)' }}>
            <div style={{ background: '#fff', borderRadius: '12px', padding: '20px 28px', boxShadow: '0 8px 40px rgba(0,0,0,0.18)', display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
              <div style={{ flex: 1, minWidth: '160px' }}>
                <div style={{ fontSize: '10px', fontWeight: 700, color: '#9CA3AF', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Location</div>
                <div style={{ fontSize: '14px', color: '#374151', fontWeight: 500 }}>Pune, Maharashtra</div>
              </div>
              <div style={{ width: '1px', height: '36px', background: '#E5E7EB' }} />
              <div style={{ flex: 1, minWidth: '120px' }}>
                <div style={{ fontSize: '10px', fontWeight: 700, color: '#9CA3AF', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Type</div>
                <div style={{ fontSize: '14px', color: '#374151', fontWeight: 500 }}>Any Type</div>
              </div>
              <div style={{ width: '1px', height: '36px', background: '#E5E7EB' }} />
              <div style={{ flex: 1, minWidth: '120px' }}>
                <div style={{ fontSize: '10px', fontWeight: 700, color: '#9CA3AF', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Budget</div>
                <div style={{ fontSize: '14px', color: '#374151', fontWeight: 500 }}>Any Budget</div>
              </div>
              <button style={{ background: blue, color: '#fff', padding: '12px 28px', borderRadius: '8px', fontWeight: 700, fontSize: '14px', border: 'none', cursor: 'pointer', whiteSpace: 'nowrap' }}>
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ background: light, padding: '80px 32px 56px', marginTop: '0' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', justifyContent: 'center', gap: '64px', flexWrap: 'wrap', paddingTop: '48px' }}>
          {stats.map(({ v, l }) => (
            <div key={l} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: blue, letterSpacing: '-0.02em' }}>{v}</div>
              <div style={{ fontSize: '13px', color: '#6B7280', marginTop: '4px', fontWeight: 500 }}>{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Featured Listings ── */}
      <section style={{ background: '#fff', padding: '88px 32px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '48px', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: blue, marginBottom: '8px' }}>Properties</p>
              <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 800, color: '#111827', letterSpacing: '-0.02em' }}>Featured Listings</h2>
            </div>
            <button style={{ background: 'transparent', border: `1.5px solid ${blue}`, color: blue, padding: '10px 24px', borderRadius: '8px', fontWeight: 600, fontSize: '14px', cursor: 'pointer' }}>
              View All 500+ Properties
            </button>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
            {listings.map((l, i) => (
              <div key={i} style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid #E5E7EB', boxShadow: '0 2px 16px rgba(0,0,0,0.06)', cursor: 'pointer', transition: 'transform 0.2s, box-shadow 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(29,78,216,0.12)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 2px 16px rgba(0,0,0,0.06)' }}>
                <div style={{ position: 'relative', overflow: 'hidden' }}>
                  <img src={img(l.image, 600, 380)} alt={l.name} style={{ width: '100%', height: '220px', objectFit: 'cover', display: 'block' }} />
                  <span style={{ position: 'absolute', top: '14px', left: '14px', background: blue, color: '#fff', fontSize: '11px', fontWeight: 700, padding: '4px 12px', borderRadius: '999px' }}>{l.tag}</span>
                </div>
                <div style={{ padding: '22px 24px' }}>
                  <div style={{ fontWeight: 800, fontSize: '1.3rem', color: blue, marginBottom: '4px' }}>{l.price}</div>
                  <div style={{ fontWeight: 600, fontSize: '15px', color: '#111827', marginBottom: '14px' }}>{l.name}</div>
                  <div style={{ display: 'flex', gap: '20px', color: '#6B7280', fontSize: '13px' }}>
                    <span>🛏 {l.beds} Beds</span>
                    <span>🚿 {l.baths} Baths</span>
                    <span>📐 {l.area}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section style={{ background: light, padding: '88px 32px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '52px' }}>
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: blue, marginBottom: '8px' }}>What We Do</p>
            <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 800, color: '#111827', letterSpacing: '-0.02em' }}>Our Services</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {services.map((s, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: '16px', padding: '36px 32px', border: '1px solid #E5E7EB', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>{s.icon}</div>
                <h3 style={{ fontWeight: 700, fontSize: '1.1rem', color: '#111827', marginBottom: '10px' }}>{s.title}</h3>
                <p style={{ color: '#6B7280', fontSize: '0.9rem', lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About + Agent ── */}
      <section style={{ background: '#fff', padding: '88px 32px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '72px', alignItems: 'center' }}>
          <div style={{ position: 'relative' }}>
            <img src={img(CITY, 700, 500)} alt="Pune skyline" style={{ width: '100%', borderRadius: '16px', objectFit: 'cover', aspectRatio: '4/3', display: 'block' }} />
            <div style={{ position: 'absolute', bottom: '-20px', right: '-20px', background: blue, color: '#fff', borderRadius: '16px', padding: '24px 28px', boxShadow: '0 8px 32px rgba(29,78,216,0.3)' }}>
              <div style={{ fontSize: '2rem', fontWeight: 900 }}>94%</div>
              <div style={{ fontSize: '12px', opacity: 0.8, marginTop: '4px' }}>Success Rate</div>
            </div>
          </div>
          <div>
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: blue, marginBottom: '12px' }}>About Us</p>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800, color: '#111827', marginBottom: '20px', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
              Why {businessName}?
            </h2>
            <p style={{ color: '#6B7280', lineHeight: 1.8, marginBottom: '28px', fontSize: '0.95rem' }}>{about}</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {['Zero hidden fees — full transparency', 'RERA registered agents', 'Average close time: 22 days', 'Post-sale support included'].map(item => (
                <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#374151', fontSize: '14px' }}>
                  <Check style={{ width: '16px', height: '16px', color: blue, flexShrink: 0 }} />
                  {item}
                </li>
              ))}
            </ul>
            {/* Testimonial */}
            <div style={{ background: light, borderRadius: '12px', padding: '24px 28px', border: '1px solid #BFDBFE' }}>
              <p style={{ color: '#374151', fontStyle: 'italic', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '16px' }}>"{testimonial.text}"</p>
              <div style={{ fontWeight: 700, color: '#111827', fontSize: '13px' }}>{testimonial.name}</div>
              <div style={{ fontSize: '11px', color: '#9CA3AF' }}>Verified Buyer · ★★★★★</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Agent profile ── */}
      <section style={{ background: blue, padding: '88px 32px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '32px', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            <img src={img(AGENT_1, 200, 200)} alt="Agent" style={{ width: '90px', height: '90px', borderRadius: '50%', objectFit: 'cover', border: '3px solid rgba(255,255,255,0.4)' }} />
            <div>
              <div style={{ fontWeight: 700, fontSize: '1.1rem', color: '#fff' }}>Lead Agent</div>
              <div style={{ color: '#BFDBFE', fontSize: '14px', marginTop: '4px' }}>10 agents • 200+ deals/yr</div>
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#fff', marginBottom: '8px' }}>{ctaHeadline}</h3>
            <p style={{ color: '#BFDBFE', fontSize: '14px', marginBottom: '24px' }}>Free 30-minute consultation. No commitment.</p>
            <button style={{ background: '#fff', color: blue, padding: '14px 36px', borderRadius: '8px', fontWeight: 800, fontSize: '15px', border: 'none', cursor: 'pointer' }}>
              {ctaText}
            </button>
          </div>
          <div style={{ color: '#BFDBFE', fontSize: '13px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <span>📞 {phone}</span>
            <span>✉️ {email}</span>
            <span>📍 {address}</span>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ background: '#0F172A', color: '#fff', padding: '56px 32px 28px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', marginBottom: '40px' }}>
            <div>
              <div style={{ fontWeight: 800, fontSize: '1.1rem', marginBottom: '8px' }}>{businessName}</div>
              <p style={{ color: '#94A3B8', fontSize: '13px', lineHeight: 1.7 }}>{tagline}</p>
            </div>
            <div>
              <div style={{ fontWeight: 600, fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#64748B', marginBottom: '14px' }}>Contact</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', color: '#94A3B8', fontSize: '13px' }}>
                <span>📞 {phone}</span>
                <span>✉️ {email}</span>
                <span>📍 {address}</span>
              </div>
            </div>
            <div>
              <div style={{ fontWeight: 600, fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#64748B', marginBottom: '14px' }}>Website by</div>
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
