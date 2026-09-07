'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ArrowIcon } from './InterfaceIcon'

type ActivityPost = {
  id: string
  platform: 'Instagram' | 'LinkedIn'
  title: string
  alt: string
  url: string
  reel?: boolean
  contain?: boolean
}

const posts: ActivityPost[] = [
  { id: 'ig-reel-3', platform: 'Instagram', title: 'Raw string sounds.', alt: 'Trishit playing his blue electric guitar', url: 'https://www.instagram.com/reel/Dc_GzcIpLAK/', reel: true },
  { id: 'ig-post-2', platform: 'Instagram', title: 'A little more colour.', alt: 'Trishit in a colourful shirt in Mathura Vrindavan', url: 'https://www.instagram.com/p/DHMS81PTDqj/' },
  { id: 'li-3', platform: 'LinkedIn', title: 'Beyond the classroom.', alt: 'A group photograph from the Rishihood leadership retreat', url: 'https://www.linkedin.com/feed/update/urn:li:ugcPost:7404835011960532992/' },
  { id: 'ig-post-1', platform: 'Instagram', title: 'The festive side.', alt: 'Trishit at a Durga Puja celebration', url: 'https://www.instagram.com/p/DPWwo5JD6Mc/' },
  { id: 'ig-reel-2', platform: 'Instagram', title: 'Hona Tha Pyar.', alt: 'A still from Trishit and Saarang\'s Hona Tha Pyar reel', url: 'https://www.instagram.com/reel/DMhZR2_JbYQ/', reel: true },
  { id: 'li-1', platform: 'LinkedIn', title: 'Building with memory.', alt: 'A screenshot of the personal intelligence app shared on LinkedIn', url: 'https://www.linkedin.com/feed/update/urn:li:ugcPost:7442654018381922304/', contain: true },
  { id: 'ig-reel-1', platform: 'Instagram', title: 'One more take.', alt: 'Trishit playing electric guitar in a reel with Saarang', url: 'https://www.instagram.com/reel/DOFl-IXCR2h/', reel: true },
  { id: 'li-2', platform: 'LinkedIn', title: 'From the workbench.', alt: 'The UBOT project shared on LinkedIn', url: 'https://www.linkedin.com/feed/update/urn:li:ugcPost:7430689904260456448/', contain: true },
]

function PlaybackIcon({ paused }: { paused: boolean }) {
  return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">{paused ? <path d="m9 5 10 7-10 7V5Z" fill="currentColor" /> : <path d="M8 5v14M16 5v14" stroke="currentColor" strokeWidth="3" />}</svg>
}

export default function ActivityGallery() {
  const sectionRef = useRef<HTMLElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const progressRef = useRef<HTMLSpanElement>(null)
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [paused, setPaused] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)
  const [selected, setSelected] = useState<ActivityPost | null>(null)
  const [current, setCurrent] = useState(1)
  const pauseRef = useRef(false)

  useEffect(() => { pauseRef.current = paused || selected !== null }, [paused, selected])

  useEffect(() => {
    const track = trackRef.current
    const section = sectionRef.current
    if (!track || !section) return
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const preference = () => setReducedMotion(media.matches)
    preference()
    media.addEventListener('change', preference)
    let visible = false
    let hovering = false
    let direction = 1
    let velocity = 0
    let position = track.scrollLeft
    let dragging = false
    let moved = false
    let origin = 0
    let startScroll = 0
    let lastX = 0
    let lastTime = 0
    let dragVelocity = 0
    let glide: gsap.core.Tween | null = null
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting }, { threshold: 0 })
    observer.observe(section)
    const updateProgress = () => {
      position = track.scrollLeft
      const max = track.scrollWidth - track.clientWidth
      if (progressRef.current) progressRef.current.style.transform = `scaleX(${max > 0 ? position / max : 1})`
      const cards = Array.from(track.querySelectorAll<HTMLElement>('.activity-card'))
      const first = cards[0]?.offsetLeft ?? 0
      const nearest = cards.reduce((best, card, index) => Math.abs(card.offsetLeft - first - position) < Math.abs(cards[best].offsetLeft - first - position) ? index : best, 0)
      setCurrent(position >= max - 2 ? posts.length : nearest + 1)
    }
    const tick = (_time: number, deltaMs: number) => {
      if (!visible || document.hidden || media.matches || pauseRef.current || dragging || glide?.isActive()) { velocity = 0; return }
      const max = track.scrollWidth - track.clientWidth
      if (max <= 0) return
      if (position >= max - 1) direction = -1
      if (position <= 1) direction = 1
      const delta = Math.min(deltaMs, 50)
      velocity += (direction * (hovering ? 18 : 42) - velocity) * (1 - Math.exp(-delta / 180))
      position = gsap.utils.clamp(0, max, position + velocity * delta / 1000)
      track.scrollLeft = position
    }
    const stop = () => {
      pauseRef.current = true
      setPaused(true)
      glide?.kill()
    }
    const down = (event: PointerEvent) => {
      if (event.button !== 0) return
      stop()
      if (event.pointerType !== 'mouse') return
      dragging = true
      moved = false
      origin = lastX = event.clientX
      startScroll = track.scrollLeft
      lastTime = performance.now()
      dragVelocity = 0
    }
    const move = (event: PointerEvent) => {
      if (!dragging) return
      const distance = event.clientX - origin
      if (!moved && Math.abs(distance) < 6) return
      if (!moved) { moved = true; track.setPointerCapture(event.pointerId); track.classList.add('is-dragging') }
      const now = performance.now()
      dragVelocity = (lastX - event.clientX) / Math.max(1, now - lastTime)
      lastX = event.clientX
      lastTime = now
      track.scrollLeft = startScroll - distance
    }
    const release = (event: PointerEvent) => {
      if (!dragging) return
      dragging = false
      track.classList.remove('is-dragging')
      if (track.hasPointerCapture(event.pointerId)) track.releasePointerCapture(event.pointerId)
      if (moved && !media.matches && event.type !== 'pointercancel') {
        const momentum = performance.now() - lastTime < 80 ? dragVelocity : 0
        glide = gsap.to(track, { scrollLeft: gsap.utils.clamp(0, track.scrollWidth - track.clientWidth, track.scrollLeft + momentum * 220), duration: .75, ease: 'power3.out' })
      }
    }
    const click = (event: MouseEvent) => {
      if (moved) { event.preventDefault(); event.stopPropagation(); moved = false }
    }
    const enter = () => { hovering = true }
    const leave = () => { hovering = false }
    track.addEventListener('scroll', updateProgress, { passive: true })
    track.addEventListener('pointerdown', down)
    track.addEventListener('pointermove', move)
    window.addEventListener('pointerup', release)
    window.addEventListener('pointercancel', release)
    track.addEventListener('pointerenter', enter)
    track.addEventListener('pointerleave', leave)
    track.addEventListener('click', click, true)
    track.addEventListener('wheel', stop, { passive: true })
    track.addEventListener('focusin', stop)
    gsap.ticker.add(tick)
    const resize = new ResizeObserver(updateProgress)
    resize.observe(track)
    updateProgress()
    return () => {
      gsap.ticker.remove(tick)
      glide?.kill()
      observer.disconnect()
      resize.disconnect()
      media.removeEventListener('change', preference)
      track.removeEventListener('scroll', updateProgress)
      track.removeEventListener('pointerdown', down)
      track.removeEventListener('pointermove', move)
      window.removeEventListener('pointerup', release)
      window.removeEventListener('pointercancel', release)
      track.removeEventListener('pointerenter', enter)
      track.removeEventListener('pointerleave', leave)
      track.removeEventListener('click', click, true)
      track.removeEventListener('wheel', stop)
      track.removeEventListener('focusin', stop)
      gsap.killTweensOf(track)
    }
  }, [])

  useEffect(() => {
    const dialog = dialogRef.current
    if (!selected || !dialog) return
    const previousOverflow = document.body.style.overflow
    dialog.showModal()
    document.body.style.overflow = 'hidden'
    return () => { dialog.close(); document.body.style.overflow = previousOverflow }
  }, [selected])

  const scroll = (direction: number) => {
    const track = trackRef.current
    if (!track) return
    setPaused(true)
    pauseRef.current = true
    gsap.killTweensOf(track)
    gsap.to(track, { scrollLeft: gsap.utils.clamp(0, track.scrollWidth - track.clientWidth, track.scrollLeft + direction * track.clientWidth * .75), duration: reducedMotion ? 0 : .8, ease: 'power3.out' })
  }

  return <section className="activity" id="activity" aria-labelledby="activity-title" ref={sectionRef}>
    <div className="activity-heading section-shell">
      <h2 id="activity-title">Off the <span>clock.</span></h2>
      <svg className="activity-orbit" viewBox="0 0 100 100" fill="none" aria-hidden="true"><circle cx="50" cy="50" r="43" /><path d="M50 16v6m0 56v6M16 50h6m56 0h6M50 30v22l17 10" /><circle cx="50" cy="50" r="3" fill="currentColor" /></svg>
    </div>

    <div className="activity-track" id="activity-posts" ref={trackRef} tabIndex={0} role="region" aria-label="Off the clock photo gallery" data-lenis-prevent>
      {posts.map((post, index) => <article className={`activity-card${post.contain ? ' activity-card-screen' : ''}`} key={post.id}>
        <a className="activity-post" href={post.url} target="_blank" rel="noreferrer noopener" aria-label={`${post.reel ? 'Watch' : 'View'} ${post.title} on ${post.platform}`} onDragStart={event => event.preventDefault()} onClick={event => {
          if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
          event.preventDefault()
          setPaused(true)
          setSelected(post)
        }}>
          <div className="activity-photo">
            <Image src={`/social/${post.id}.webp`} alt={post.alt} fill sizes="(max-width: 600px) 78vw, 360px" draggable={false} />
            <span className="activity-platform">{post.platform}{post.reel ? ' / Reel' : ''}</span>
            <span className="activity-open">{post.reel ? <PlaybackIcon paused /> : <ArrowIcon />}</span>
          </div>
          <div className="activity-caption"><h3>{post.title}</h3><span>{String(index + 1).padStart(2, '0')}</span></div>
        </a>
      </article>)}
    </div>

    <div className="activity-footer section-shell">
      <div className="activity-controls">
        <span className="activity-hint">Drag a little. Stay a while.</span>
        <div className="activity-transport">
          <button type="button" aria-label="Previous posts" aria-controls="activity-posts" onClick={() => scroll(-1)}><ArrowIcon direction="left" /></button>
          {!reducedMotion && <button type="button" className="activity-playback" aria-label={paused ? 'Play gallery' : 'Pause gallery'} aria-pressed={!paused} onClick={() => {
            if (trackRef.current) gsap.killTweensOf(trackRef.current)
            pauseRef.current = !paused
            setPaused(!paused)
          }}><PlaybackIcon paused={paused} /><span>{paused ? 'Play' : 'Pause'}</span></button>}
          <button type="button" aria-label="Next posts" aria-controls="activity-posts" onClick={() => scroll(1)}><ArrowIcon direction="right" /></button>
        </div>
        <span className="activity-count">{String(current).padStart(2, '0')} <span>/ {String(posts.length).padStart(2, '0')}</span></span>
      </div>
      <div className="activity-progress" aria-hidden="true"><span ref={progressRef} /></div>
      <div className="activity-notes"><p>Notes from the workbench, public updates,<br />and a little life outside the editor.</p><div><a href="https://www.instagram.com/ft.trishit/" target="_blank" rel="noreferrer noopener">Instagram <ArrowIcon /></a><a href="https://www.linkedin.com/in/trishit-swarnakar-b7350828a" target="_blank" rel="noreferrer noopener">LinkedIn <ArrowIcon /></a></div></div>
    </div>

    {selected && <dialog className="activity-dialog" ref={dialogRef} aria-labelledby="activity-dialog-title" data-lenis-prevent onCancel={() => setSelected(null)} onClose={() => setSelected(null)} onClick={event => {
      const rect = event.currentTarget.getBoundingClientRect()
      if (event.target === event.currentTarget && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) setSelected(null)
    }}>
      <div className="activity-dialog-heading"><h3 id="activity-dialog-title">{selected.title}</h3><button type="button" aria-label="Close post" onClick={() => setSelected(null)}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" /></svg></button></div>
      <iframe key={selected.id} src={selected.platform === 'Instagram' ? `${selected.url}embed/` : selected.url.replace('/feed/update/', '/embed/feed/update/')} title={`${selected.title} ${selected.platform} post`} allow="encrypted-media; fullscreen; picture-in-picture" />
      <a className="activity-dialog-link" href={selected.url} target="_blank" rel="noreferrer noopener">Open on {selected.platform} <ArrowIcon /></a>
    </dialog>}
  </section>
}
