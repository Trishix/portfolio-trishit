'use client'

import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'

gsap.registerPlugin(ScrollTrigger)

export default function MotionController() {
  useEffect(() => {
    const media = gsap.matchMedia()
    media.add('(prefers-reduced-motion: no-preference)', () => {
      const desktop = window.matchMedia('(min-width: 900px) and (pointer: fine)').matches
      const lenis = desktop ? new Lenis({ duration: 1.05, smoothWheel: true, anchors: true }) : null
      const tick = (time: number) => lenis?.raf(time * 1000)
      if (lenis) { lenis.on('scroll', ScrollTrigger.update); gsap.ticker.add(tick) }
      const context = gsap.context(() => {
        gsap.from('[data-hero-reveal]', { y: 35, opacity: 0, duration: 1.1, stagger: .12, ease: 'power3.out', clearProps: 'all' })
        gsap.from('[data-hero-media]', { y: 40, opacity: 0, duration: 1.3, delay: .25, ease: 'power3.out', clearProps: 'all' })
        gsap.utils.toArray<HTMLElement>('[data-reveal], [data-project-card]').forEach(element => {
          gsap.from(element, { y: 32, duration: .85, ease: 'power3.out', clearProps: 'transform', scrollTrigger: { trigger: element, start: 'top 95%', once: true } })
        })
        gsap.from('.manifesto-word', { opacity: .45, stagger: .08, ease: 'none', scrollTrigger: { trigger: '[data-manifesto]', start: 'top 90%', end: 'bottom 55%', scrub: .4 } })
        gsap.to('.web-progress span', { scaleY: 1, ease: 'none', scrollTrigger: { start: 0, end: 'max', scrub: .2 } })
      })
      const cleanups: Array<() => void> = []
      if (desktop) {
        document.querySelectorAll<HTMLElement>('[data-magnetic]').forEach(element => {
          const move = (e: PointerEvent) => {
            const rect = element.getBoundingClientRect()
            gsap.to(element, { x: (e.clientX - rect.left - rect.width / 2) * .12, y: (e.clientY - rect.top - rect.height / 2) * .18, duration: .4, ease: 'power3.out' })
          }
          const leave = () => gsap.to(element, { x: 0, y: 0, duration: .8, ease: 'elastic.out(1, .45)' })
          element.addEventListener('pointermove', move); element.addEventListener('pointerleave', leave)
          cleanups.push(() => { element.removeEventListener('pointermove', move); element.removeEventListener('pointerleave', leave); gsap.killTweensOf(element); gsap.set(element, { clearProps: 'transform' }) })
        })
      }
      let disposed = false
      document.fonts.ready.then(() => { if (!disposed) ScrollTrigger.refresh() })
      return () => { disposed = true; cleanups.forEach(fn => fn()); context.revert(); lenis?.destroy(); gsap.ticker.remove(tick) }
    })
    return () => media.revert()
  }, [])
  return null
}
