import { useEffect } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { samples } from '../data/samples'

import RestaurantSample  from '../samples/RestaurantSample'
import RealEstateSample  from '../samples/RealEstateSample'
import FitnessSample     from '../samples/FitnessSample'
import PhotographySample from '../samples/PhotographySample'
import LawFirmSample     from '../samples/LawFirmSample'
import ClinicSample      from '../samples/ClinicSample'

const SAMPLE_COMPONENTS = {
  'restaurant':  RestaurantSample,
  'real-estate': RealEstateSample,
  'fitness':     FitnessSample,
  'photography': PhotographySample,
  'law-firm':    LawFirmSample,
  'clinic':      ClinicSample,
}

export default function SampleDetail() {
  const { id } = useParams()
  const idx = samples.findIndex((s) => s.id === id)

  useEffect(() => {
    window.scrollTo(0, 0)
    if (idx !== -1) {
      document.title = `${samples[idx].businessName} — Sample Design by Jay`
    }
    return () => { document.title = 'Scrpt | Freelance Web Developer' }
  }, [id, idx])

  if (idx === -1) return <Navigate to="/samples" replace />

  const sample    = samples[idx]
  const prev      = idx > 0 ? samples[idx - 1] : null
  const next      = idx < samples.length - 1 ? samples[idx + 1] : null
  const SamplePage = SAMPLE_COMPONENTS[id]

  if (!SamplePage) return <Navigate to="/samples" replace />

  return <SamplePage sample={sample} prev={prev} next={next} />
}
