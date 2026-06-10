import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'

gsap.registerPlugin(ScrollTrigger)

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
        style={{ background: '#9CFE4F', transform: 'scaleX(0)' }}
      />
    </div>
  )
}

export default function App() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Home />
      </main>
      <Footer />
    </>
  )
}
