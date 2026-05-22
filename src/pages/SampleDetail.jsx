import { useEffect } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { samples } from '../data/samples'
import SampleTemplate from '../components/SampleTemplate'

export default function SampleDetail() {
  const { id } = useParams()
  const idx = samples.findIndex((s) => s.id === id)

  useEffect(() => {
    window.scrollTo(0, 0)
    if (idx !== -1) {
      document.title = `${samples[idx].businessName} — Sample Design by Jay`
    }
    return () => { document.title = 'Jay Sahastrabudhe | Freelance Web Developer' }
  }, [id, idx])

  if (idx === -1) return <Navigate to="/samples" replace />

  const sample = samples[idx]
  const prev = idx > 0 ? samples[idx - 1] : null
  const next = idx < samples.length - 1 ? samples[idx + 1] : null

  return <SampleTemplate sample={sample} prev={prev} next={next} />
}
