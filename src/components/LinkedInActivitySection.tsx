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
  const [isSectionVisible, setIsSectionVisible] = useState(false)
  const [shouldLoadEmbeds, setShouldLoadEmbeds] = useState(false)
  const [isAutoScrollPaused, setIsAutoScrollPaused] = useState(false)
  const sectionRef = useRef<HTMLElement | null>(null)
  const trackRef = useRef<HTMLDivElement | null>(null)
  const shouldAutoScroll = isSectionVisible && !isMobileViewport && !isAutoScrollPaused

  useEffect(() => {
    const media = window.matchMedia('(max-width: 900px), (hover: none), (pointer: coarse)')
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
    const section = sectionRef.current
    if (!section || typeof IntersectionObserver === 'undefined') {
      setIsSectionVisible(true)
      setShouldLoadEmbeds(true)
      return
    }

    const preloadObserver = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        setShouldLoadEmbeds(true)
        preloadObserver.disconnect()
      },
      { rootMargin: '240px 0px' }
    )

    const visibilityObserver = new IntersectionObserver(
      ([entry]) => setIsSectionVisible(entry.isIntersecting),
      { threshold: 0.02 }
    )

    preloadObserver.observe(section)
    visibilityObserver.observe(section)

    return () => {
      preloadObserver.disconnect()
      visibilityObserver.disconnect()
    }
  }, [])

  useEffect(() => {
    const track = trackRef.current
    if (!track || !isSectionVisible || isMobileViewport) return

    let animationFrame = 0
    let previousTime = performance.now()
    let virtualScrollLeft = track.scrollLeft
    let direction = 1
    const speedPxPerMs = 0.045

    const tick = (currentTime: number) => {
      const elapsed = currentTime - previousTime
      previousTime = currentTime

      if (shouldAutoScroll) {
        const maxScrollLeft = Math.max(0, track.scrollWidth - track.clientWidth)

        if (maxScrollLeft > 0) {
          if (Math.abs(track.scrollLeft - virtualScrollLeft) > 2) {
            virtualScrollLeft = track.scrollLeft
          }

          virtualScrollLeft += elapsed * speedPxPerMs * direction
          if (virtualScrollLeft >= maxScrollLeft) {
            virtualScrollLeft = maxScrollLeft
            direction = -1
          } else if (virtualScrollLeft <= 0) {
            virtualScrollLeft = 0
            direction = 1
          }
          track.scrollLeft = virtualScrollLeft
        }
      }

      animationFrame = window.requestAnimationFrame(tick)
    }

    animationFrame = window.requestAnimationFrame(tick)

    return () => window.cancelAnimationFrame(animationFrame)
  }, [isMobileViewport, isSectionVisible, shouldAutoScroll])

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

  const getCardClass = (type: ActivityType) => {
    if (type === 'linkedin') return 'activity-card activity-card-linkedin'
    if (type === 'instagram-post') return 'activity-card activity-card-instagram'
    return 'activity-card activity-card-reel'
  }

  const getFrameClass = (type: ActivityType) => {
    if (type === 'linkedin') return 'activity-frame activity-frame-linkedin'
    if (type === 'instagram-post') return 'activity-frame activity-frame-instagram'
    return 'activity-frame activity-frame-reel'
  }

  const getTypeLabel = (type: ActivityType) => {
    if (type === 'linkedin') return 'LinkedIn'
    if (type === 'instagram-post') return 'Instagram'
    return 'Reel'
  }

  return (
    <section className="activity" id="activity" aria-labelledby="activity-title" ref={sectionRef}>
      <div className="activity-shell section-shell">
        <div className="activity-heading" data-reveal>
          <div>
            <h2 id="activity-title">Recent<br />activity.</h2>
            <p>Notes from the workbench, public updates, and a little life outside the editor.</p>
          </div>
          <a
            className="activity-profile-link"
            href="https://www.linkedin.com/in/trishit-swarnakar-b7350828a"
            rel="noreferrer noopener"
            target="_blank"
          >
            Open profile <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="activity-rail">
          <div
            className={`activity-track${shouldAutoScroll ? '' : ' is-manual'}`}
            onMouseEnter={() => setIsAutoScrollPaused(true)}
            onMouseLeave={() => setIsAutoScrollPaused(false)}
            ref={trackRef}
          >
            {activityEmbeds.map((item) => {
              const isReel = item.type === 'instagram-reel'
              const isMuted = reelMuteState[item.id] ?? true

              return (
                <article
                  className={getCardClass(item.type)}
                  key={item.id}
                >
                  <div className="activity-card-header">
                    <span>{getTypeLabel(item.type)}</span>

                    {isReel ? (
                      <button
                        aria-label={isMuted ? 'Unmute reel' : 'Mute reel'}
                        title={isMuted ? 'Unmute reel' : 'Mute reel'}
                        onClick={() => toggleReelAudio(item.id)}
                        type="button"
                      >
                        <span aria-hidden="true">{isMuted ? 'MUTE' : 'SOUND'}</span>
                      </button>
                    ) : (
                      <a
                        href={item.postUrl}
                        rel="noreferrer noopener"
                        target="_blank"
                      >
                        Open
                      </a>
                    )}
                  </div>

                  <div className="activity-frame-wrap">
                    <iframe
                      allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
                      className={getFrameClass(item.type)}
                      loading="lazy"
                      src={shouldLoadEmbeds && (!isReel || isSectionVisible) ? embedSources[item.id] : 'about:blank'}
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
