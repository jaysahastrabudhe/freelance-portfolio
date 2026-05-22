import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight } from 'lucide-react'

/** Top banner shown on all sample pages */
export function PortfolioBanner() {
  return (
    <div style={{
      background: 'linear-gradient(90deg, #4F46E5 0%, #7C3AED 100%)',
      color: '#fff', fontSize: '13px', textAlign: 'center',
      padding: '10px 16px', display: 'flex', flexWrap: 'wrap',
      alignItems: 'center', justifyContent: 'center', gap: '6px', zIndex: 100,
    }}>
      <span>🎨 <strong>Sample Design</strong> — Scrpt</span>
      <span style={{ opacity: 0.5 }}>·</span>
      <span>Want a website like this for your business?</span>
      <Link to="/contact" style={{ color: '#C7D2FE', fontWeight: 700, textDecoration: 'underline', whiteSpace: 'nowrap' }}>
        Get yours from ₹5,000 →
      </Link>
    </div>
  )
}

/** Prev / Next navigation bar at the bottom */
export function SampleNav({ prev, next }) {
  return (
    <div style={{
      background: '#030712', padding: '20px 24px',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      flexWrap: 'wrap', gap: '12px',
    }}>
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
  )
}

/** Unsplash image helper */
export const img = (id, w = 800, h = 500) =>
  `https://images.unsplash.com/${id}?w=${w}&h=${h}&fit=crop&auto=format&q=80`
