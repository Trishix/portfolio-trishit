'use client'

import { useRef, useState } from 'react'
import { ArrowIcon } from './InterfaceIcon'

type ActivityType = 'linkedin' | 'instagram-post' | 'instagram-reel'
type ActivityEmbed = { id: string; type: ActivityType; embedUrl: string; postUrl: string }

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


export default function LinkedInActivitySection() {
  const [loaded, setLoaded] = useState<string[]>(() => activityEmbeds.map((item) => item.id))
  const trackRef = useRef<HTMLDivElement>(null)
  const scroll = (direction: number) => {
    const track = trackRef.current
    if (!track) return
    track.scrollBy({ left: direction * track.clientWidth * .8, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' })
  }
  return <section className="activity" id="activity" aria-labelledby="activity-title">
    <div className="activity-shell section-shell">
      <div className="activity-heading" data-reveal>
        <div><h2 id="activity-title">Off the<br /><span>clock.</span></h2><p>Notes from the workbench, public updates, and a little life outside the editor.</p></div>
        <a className="activity-profile-link" href="https://www.linkedin.com/in/trishit-swarnakar-b7350828a" target="_blank" rel="noreferrer noopener">Open LinkedIn profile <span><ArrowIcon /></span></a>
      </div>
      <div className="activity-track" ref={trackRef} tabIndex={0} role="region" aria-label="Social posts">
        {activityEmbeds.map((item, index) => {
          const platform = item.type === 'linkedin' ? 'LinkedIn' : 'Instagram'
          return <article className="activity-card" key={item.id}>
            <div className="activity-card-header"><span>{platform} {item.type === 'instagram-reel' ? '/ Reel' : '/ Post'}</span><a href={item.postUrl} target="_blank" rel="noreferrer noopener" aria-label={`Open ${platform} post ${index + 1}`}>Open <ArrowIcon /></a></div>
            <div className="activity-frame-wrap">
              {loaded.includes(item.id) ? <><iframe className="activity-frame" loading="lazy" src={item.embedUrl} title={`${platform} post ${index + 1}`} allow="encrypted-media; fullscreen; picture-in-picture" /><p className="embed-fallback">Post unavailable? <a href={item.postUrl} target="_blank" rel="noreferrer noopener">View on {platform}</a></p></> :
              <div className={`activity-preview activity-preview-${item.type}`}><span className="activity-platform" aria-hidden="true">{platform === 'LinkedIn' ? 'in' : 'ig'}</span><div><p>{item.type === 'instagram-reel' ? 'A moment in motion.' : platform === 'LinkedIn' ? 'From my LinkedIn.' : 'Life outside the editor.'}</p><button type="button" onClick={() => setLoaded(current => [...current, item.id])} aria-label={`Load ${platform} post ${index + 1}`}>Load {item.type === 'instagram-reel' ? 'reel' : 'post'} <span><ArrowIcon /></span></button></div></div>}
            </div>
          </article>
        })}
      </div>
      <div className="activity-controls"><button type="button" aria-label="Previous posts" onClick={() => scroll(-1)}><ArrowIcon direction="left" /></button><button type="button" aria-label="Next posts" onClick={() => scroll(1)}><ArrowIcon direction="right" /></button></div>
    </div>
  </section>
}
