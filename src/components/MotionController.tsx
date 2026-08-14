'use client'

import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'

gsap.registerPlugin(ScrollTrigger)

export default function MotionController() {
  useEffect(() => {
    const root = document.documentElement
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduceMotion) {
      root.classList.add('motion-disabled')
      return () => root.classList.remove('motion-disabled')
    }

    root.classList.add('motion-ready')

    const useSmoothWheel = window.innerWidth > 900 && window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const lenis = useSmoothWheel
      ? new Lenis({
          duration: 1.05,
          smoothWheel: true,
        })
      : null

    const updateLenis = (time: number) => lenis?.raf(time * 1000)

    if (lenis) {
      lenis.on('scroll', ScrollTrigger.update)
      gsap.ticker.add(updateLenis)
      gsap.ticker.lagSmoothing(0)
    }

    const context = gsap.context(() => {
      gsap.fromTo(
        '[data-hero-reveal]',
        { autoAlpha: 0, y: 42 },
        { autoAlpha: 1, y: 0, duration: 1.15, stagger: 0.14, ease: 'power3.out', delay: 0.12 }
      )

      const words = gsap.utils.toArray<HTMLElement>('.manifesto-word')

      gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((element) => {
        gsap.fromTo(
          element,
          { autoAlpha: 0, y: 44 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 88%',
              once: true,
            },
          }
        )
      })

      const media = gsap.matchMedia()

      media.add('(min-width: 901px)', () => {
        gsap.fromTo(
          '[data-hero-media]',
          { scale: 1.02, yPercent: 0 },
          {
            scale: 1.1,
            yPercent: 10,
            ease: 'none',
            scrollTrigger: {
              trigger: '.hero',
              start: 'top top',
              end: 'bottom top',
              scrub: 1.2,
            },
          }
        )

        gsap.to('.hero-content', {
          yPercent: -8,
          autoAlpha: 0.22,
          ease: 'none',
          scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
          },
        })

        gsap.fromTo(
          words,
          { opacity: 0.1 },
          {
            opacity: 1,
            stagger: 0.06,
            ease: 'none',
            scrollTrigger: {
              trigger: '[data-manifesto]',
              start: 'top 78%',
              end: 'bottom 42%',
              scrub: 1,
            },
          }
        )

        gsap.to('.web-progress span', {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            start: 0,
            end: 'max',
            scrub: 0.35,
          },
        })

        ScrollTrigger.create({
          trigger: '.work-layout',
          start: 'top top+=112',
          end: 'bottom bottom-=140',
          pin: '.work-title-rail',
          pinSpacing: false,
          anticipatePin: 1,
        })

        gsap.utils.toArray<HTMLElement>('[data-project-card]').forEach((card) => {
          const timeline = gsap.timeline({
            scrollTrigger: {
              trigger: card,
              start: 'top 96%',
              end: 'bottom 6%',
              scrub: 0.8,
            },
          })

          timeline
            .fromTo(card, { scale: 0.88, autoAlpha: 0.28, y: 90 }, { scale: 1, autoAlpha: 1, y: 0, duration: 0.46, ease: 'none' })
            .to(card, { scale: 0.95, autoAlpha: 0.32, duration: 0.54, ease: 'none' })

          const image = card.querySelector<HTMLElement>('[data-parallax-media]')
          if (image && !image.classList.contains('project-media-contain-light') && !image.classList.contains('project-media-contain-dark')) {
            gsap.fromTo(image, { yPercent: -5, scale: 1.08 }, {
              yPercent: 7,
              scale: 1.02,
              ease: 'none',
              scrollTrigger: {
                trigger: card,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1,
              },
            })
          }
        })

        const track = document.querySelector<HTMLElement>('.capabilities-track')
        const viewport = document.querySelector<HTMLElement>('.capabilities-viewport')

        if (track && viewport) {
          const distance = () => Math.max(0, track.scrollWidth - viewport.clientWidth)
          gsap.to(track, {
            x: () => -distance(),
            ease: 'none',
            scrollTrigger: {
              trigger: '.capabilities',
              start: 'top top',
              end: () => `+=${distance() + window.innerHeight * 0.35}`,
              pin: true,
              scrub: 1,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          })
        }
      })

      media.add('(max-width: 900px)', () => {
        gsap.set(words, { opacity: 1 })

        gsap.utils.toArray<HTMLElement>('[data-project-card], .capability-panel').forEach((element) => {
          gsap.fromTo(element, { autoAlpha: 0, y: 54 }, {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 90%',
              once: true,
            },
          })
        })
      })

      return () => media.revert()
    }, document.body)

    const refresh = () => ScrollTrigger.refresh()
    document.fonts?.ready.then(refresh)
    window.addEventListener('load', refresh)

    return () => {
      window.removeEventListener('load', refresh)
      context.revert()
      lenis?.destroy()
      if (lenis) gsap.ticker.remove(updateLenis)
      root.classList.remove('motion-ready')
    }
  }, [])

  return null
}
