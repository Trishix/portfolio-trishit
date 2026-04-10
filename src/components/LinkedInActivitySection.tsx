'use client'

import { useEffect, useMemo, useRef, useState } from 'react'

type ActivityType = 'linkedin' | 'instagram-post' | 'instagram-reel'

type ActivityEmbed = {
  id: string
  type: ActivityType
  embedUrl: string
  postUrl: string
}

const activityEmbeds: ActivityEmbed[] = [
  {
    id: 'li-1',
    type: 'linkedin',
    embedUrl: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7442654018381922304',
    postUrl: 'https://www.linkedin.com/feed/update/urn:li:ugcPost:7442654018381922304/',
  },
  {
    id: 'li-2',
    type: 'linkedin',
    embedUrl: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7430689904260456448',
    postUrl: 'https://www.linkedin.com/feed/update/urn:li:ugcPost:7430689904260456448/',
  },
  {
    id: 'li-3',
    type: 'linkedin',
    embedUrl: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7404835011960532992',
    postUrl: 'https://www.linkedin.com/feed/update/urn:li:ugcPost:7404835011960532992/',
  },
  {
    id: 'ig-post-1',
    type: 'instagram-post',
    embedUrl: 'https://www.instagram.com/p/DPWwo5JD6Mc/embed/',
    postUrl: 'https://www.instagram.com/p/DPWwo5JD6Mc/',
  },
  {
    id: 'ig-reel-1',
    type: 'instagram-reel',
    embedUrl: 'https://www.instagram.com/reel/DOFl-IXCR2h/embed/',
    postUrl: 'https://www.instagram.com/reel/DOFl-IXCR2h/',
  },
  {
    id: 'ig-reel-2',
    type: 'instagram-reel',
    embedUrl: 'https://www.instagram.com/reel/DMhZR2_JbYQ/embed/',
    postUrl: 'https://www.instagram.com/reel/DMhZR2_JbYQ/',
  },
  {
    id: 'ig-post-2',
    type: 'instagram-post',
    embedUrl: 'https://www.instagram.com/p/DHMS81PTDqj/embed/',
    postUrl: 'https://www.instagram.com/p/DHMS81PTDqj/',
  },
]

const loopedActivityEmbeds: ActivityEmbed[] = [...activityEmbeds, ...activityEmbeds]

const reelIds = activityEmbeds
  .filter((item) => item.type === 'instagram-reel')
  .map((item) => item.id)

const defaultReelMuteState = Object.fromEntries(reelIds.map((id) => [id, true])) as Record<string, boolean>

const appendParams = (url: string, params: Record<string, string>) => {
  const withParams = new URL(url)
  Object.entries(params).forEach(([key, value]) => {
    withParams.searchParams.set(key, value)
  })
  return withParams.toString()
}

export default function LinkedInActivitySection() {
  const [reelMuteState, setReelMuteState] = useState<Record<string, boolean>>(defaultReelMuteState)
  const [isMobileViewport, setIsMobileViewport] = useState(false)
  const [isAutoScrollPaused, setIsAutoScrollPaused] = useState(false)
  const [isAutoScrollStoppedByInteraction, setIsAutoScrollStoppedByInteraction] = useState(false)
  const trackRef = useRef<HTMLDivElement | null>(null)
  const shouldAutoScroll = !isAutoScrollPaused && (!isMobileViewport || !isAutoScrollStoppedByInteraction)

  const normalizeLoopPosition = (track: HTMLDivElement) => {
    const loopWidth = track.scrollWidth / 2
    if (loopWidth <= 0) return track.scrollLeft

    let normalized = track.scrollLeft
    while (normalized >= loopWidth) normalized -= loopWidth
    while (normalized < 0) normalized += loopWidth

    if (Math.abs(track.scrollLeft - normalized) > 0.5) {
      track.scrollLeft = normalized
    }

    return normalized
  }

  useEffect(() => {
    const media = window.matchMedia('(max-width: 767px)')
    const updateViewport = () => {
      setIsMobileViewport(media.matches)
    }

    updateViewport()

    if (typeof media.addEventListener === 'function') {
      media.addEventListener('change', updateViewport)
      return () => media.removeEventListener('change', updateViewport)
    }

    media.addListener(updateViewport)
    return () => media.removeListener(updateViewport)
  }, [])

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    let animationFrame = 0
    let previousTime = performance.now()
    let virtualScrollLeft = normalizeLoopPosition(track)
    const speedPxPerMs = isMobileViewport ? 0.085 : 0.05

    const tick = (currentTime: number) => {
      const elapsed = currentTime - previousTime
      previousTime = currentTime

      if (shouldAutoScroll) {
        const loopWidth = track.scrollWidth / 2

        if (loopWidth > 0) {
          // If the user scrolled while paused, sync animation cursor before continuing.
          if (Math.abs(track.scrollLeft - virtualScrollLeft) > 2) {
            virtualScrollLeft = normalizeLoopPosition(track)
          }

          virtualScrollLeft += elapsed * speedPxPerMs
          if (virtualScrollLeft >= loopWidth) {
            virtualScrollLeft -= loopWidth
          }
          track.scrollLeft = virtualScrollLeft
        }
      }

      animationFrame = window.requestAnimationFrame(tick)
    }

    animationFrame = window.requestAnimationFrame(tick)

    return () => window.cancelAnimationFrame(animationFrame)
  }, [isMobileViewport, shouldAutoScroll])

  const embedSources = useMemo(() => {
    return activityEmbeds.reduce<Record<string, string>>((accumulator, item) => {
      if (item.type === 'linkedin') {
        accumulator[item.id] = appendParams(item.embedUrl, { collapsed: '1' })
        return accumulator
      }

      if (item.type === 'instagram-post') {
        accumulator[item.id] = appendParams(item.embedUrl, { captioned: '0' })
        return accumulator
      }

      const muted = reelMuteState[item.id] ?? true
      accumulator[item.id] = appendParams(item.embedUrl, {
        autoplay: '1',
        muted: muted ? '1' : '0',
        mute: muted ? '1' : '0',
        controls: '0',
        loop: '1',
        playsinline: '1',
      })
      return accumulator
    }, {})
  }, [reelMuteState])

  const toggleReelAudio = (id: string) => {
    setReelMuteState((current) => ({
      ...current,
      [id]: !(current[id] ?? true),
    }))
  }

  const getCardWidthClass = (type: ActivityType) => {
    if (type === 'linkedin') return 'w-[min(84vw,22rem)] max-[360px]:w-[min(88vw,18.5rem)]'
    if (type === 'instagram-post') return 'w-[min(72vw,19rem)] max-[360px]:w-[min(78vw,15.5rem)]'
    return 'w-[min(66vw,17rem)] max-[360px]:w-[min(72vw,14rem)]'
  }

  const getFrameHeightClass = (type: ActivityType) => {
    if (type === 'linkedin') return 'h-[23rem] sm:h-[25rem]'
    if (type === 'instagram-post') return 'h-[24rem] sm:h-[27rem]'
    return 'h-[28rem] sm:h-[31rem]'
  }

  const getTypeLabel = (type: ActivityType) => {
    if (type === 'linkedin') return 'LinkedIn'
    if (type === 'instagram-post') return 'Instagram'
    return 'Reel'
  }

  const stopAutoScrollOnMobileInteraction = () => {
    if (isMobileViewport) {
      setIsAutoScrollStoppedByInteraction(true)
    }
  }

  return (
    <section className="scroll-mt-24 bg-surface-container-low py-12 sm:py-14 md:py-20 lg:min-h-screen lg:flex lg:items-center" id="activity">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <h2 className="section-heading font-headline text-3xl font-extrabold tracking-tight text-on-surface md:text-4xl">Activity</h2>
          <a
            className="text-xs font-semibold uppercase tracking-[0.08em] text-primary transition-opacity hover:opacity-80"
            href="https://www.linkedin.com/in/trishit-swarnakar/"
            rel="noreferrer noopener"
            target="_blank"
          >
            Open Profiles
          </a>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-8 bg-gradient-to-r from-surface-container-low to-transparent" />
          <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-8 bg-gradient-to-l from-surface-container-low to-transparent" />

          <div
            className={`flex gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${
              shouldAutoScroll ? 'snap-none' : 'snap-x snap-mandatory'
            }`}
            onClick={stopAutoScrollOnMobileInteraction}
            onMouseEnter={() => setIsAutoScrollPaused(true)}
            onMouseLeave={() => setIsAutoScrollPaused(false)}
            onPointerDown={stopAutoScrollOnMobileInteraction}
            onTouchStart={stopAutoScrollOnMobileInteraction}
            ref={trackRef}
          >
            {loopedActivityEmbeds.map((item, index) => {
              const isReel = item.type === 'instagram-reel'
              const isMuted = reelMuteState[item.id] ?? true

              return (
                <article
                  className={`${getCardWidthClass(item.type)} shrink-0 snap-start rounded-2xl border border-outline-variant/20 bg-surface p-3 shadow-[0_10px_30px_-20px_rgba(0,0,0,0.5)] md:p-3.5`}
                  key={`${item.id}-${index}`}
                >
                  <div className="mb-2 flex items-center justify-between gap-3">
                    <span className="rounded-full bg-surface-container-highest px-2 py-1 text-[10px] font-bold uppercase tracking-[0.08em] text-on-surface-variant">
                      {getTypeLabel(item.type)}
                    </span>

                    {isReel ? (
                      <button
                        className="rounded-full border border-outline-variant/30 bg-surface-container-low px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.08em] text-on-surface transition-colors hover:bg-surface-container"
                        onClick={() => toggleReelAudio(item.id)}
                        type="button"
                      >
                        {isMuted ? 'Unmute' : 'Mute'}
                      </button>
                    ) : (
                      <a
                        className="text-[10px] font-bold uppercase tracking-[0.08em] text-primary transition-opacity hover:opacity-80"
                        href={item.postUrl}
                        rel="noreferrer noopener"
                        target="_blank"
                      >
                        Open
                      </a>
                    )}
                  </div>

                  <div className="overflow-hidden rounded-xl border border-outline-variant/15 bg-surface-container-low">
                    <iframe
                      allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
                      allowFullScreen
                      className={`${getFrameHeightClass(item.type)} w-full`}
                      src={embedSources[item.id]}
                      title={`${getTypeLabel(item.type)} ${item.id}`}
                    />
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
