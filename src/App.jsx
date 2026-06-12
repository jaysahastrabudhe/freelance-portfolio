import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'

gsap.registerPlugin(ScrollTrigger)

function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return
    const dot = dotRef.current
    const ring = ringRef.current
    const xDot  = gsap.quickTo(dot,  'x', { duration: 0.08, ease: 'power3.out' })
    const yDot  = gsap.quickTo(dot,  'y', { duration: 0.08, ease: 'power3.out' })
    const xRing = gsap.quickTo(ring, 'x', { duration: 0.45, ease: 'power3.out' })
    const yRing = gsap.quickTo(ring, 'y', { duration: 0.45, ease: 'power3.out' })
    const onMove = (e) => { xDot(e.clientX); yDot(e.clientY); xRing(e.clientX); yRing(e.clientY) }
    const onEnter = (e) => { if (e.target.closest('a,button,[role="button"]')) document.body.classList.add('cursor-hover') }
    const onLeave = (e) => { if (e.target.closest('a,button,[role="button"]')) document.body.classList.remove('cursor-hover') }
    window.addEventListener('mousemove', onMove, { passive: true })
    document.addEventListener('mouseover', onEnter)
    document.addEventListener('mouseout', onLeave)
    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onEnter)
      document.removeEventListener('mouseout', onLeave)
    }
  }, [])
  return (
    <>
      <div ref={dotRef}  className="cursor-dot"  aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  )
}

/* Thin cinematic scroll-progress bar pinned to the very top of the viewport */
function ScrollProgress() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    const onScroll = () => {
      const h = document.documentElement
      const max = h.scrollHeight - h.clientHeight
      const p = max > 0 ? h.scrollTop / max : 0
      el.style.transform = `scaleX(${p})`
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-0.5 bg-transparent pointer-events-none">
      <div
        ref={ref}
        className="h-full origin-left"
        style={{ background: '#FFD60A', transform: 'scaleX(0)' }}
      />
    </div>
  )
}

export default function App() {
  return (
    <>
      <Cursor />
      <div className="grain-overlay" aria-hidden="true" />
      <ScrollProgress />
      <Navbar />
      <main>
        <Home />
      </main>
      <Footer />
    </>
  )
}
