import { useEffect, useRef } from 'react'

export function useScrollReveal() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let observer
    // Double RAF: ensures browser has painted & laid out before we observe
    const id = requestAnimationFrame(() =>
      requestAnimationFrame(() => {
        observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              el.classList.add('visible')
              observer.unobserve(el)
            }
          },
          { threshold: 0, rootMargin: '0px 0px 80px 0px' }
        )
        observer.observe(el)
      })
    )
    return () => {
      cancelAnimationFrame(id)
      observer?.disconnect()
    }
  }, [])

  return ref
}

export function useScrollRevealAll(selector = '.reveal') {
  useEffect(() => {
    let observer
    const id = requestAnimationFrame(() =>
      requestAnimationFrame(() => {
        const els = document.querySelectorAll(selector)
        observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add('visible')
                observer.unobserve(entry.target)
              }
            })
          },
          // threshold:0 fires the instant any pixel enters viewport
          // positive rootMargin bottom pre-reveals elements just below fold
          { threshold: 0, rootMargin: '0px 0px 80px 0px' }
        )
        els.forEach((el) => observer.observe(el))
      })
    )
    return () => {
      cancelAnimationFrame(id)
      observer?.disconnect()
    }
  }, [selector])
}
