'use client'

import { MouseEvent, useEffect, useRef, useState } from 'react'
import { ArrowIcon } from './InterfaceIcon'
import SpiderMark from './SpiderMark'

const navItems = [
  { id: 'work', label: 'Work' },
  { id: 'toolkit', label: 'Expertise' },
  { id: 'education', label: 'Education' },
  { id: 'journey', label: 'Beyond' },
  { id: 'activity', label: 'Activity' },
]

export default function TopNavBar() {
  const toggleRef = useRef<HTMLButtonElement>(null)
  const headerRef = useRef<HTMLElement>(null)
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const hero = document.getElementById('home')
    if (!hero) return
    const observer = new IntersectionObserver(([entry]) => setIsScrolled(!entry.isIntersecting), { rootMargin: '-80px 0px 0px 0px' })
    observer.observe(hero)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const sections = ['home', ...navItems.map((item) => item.id), 'contact']
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section instanceof HTMLElement)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target.id) setActiveSection(visible.target.id)
      },
      { rootMargin: '-20% 0px -65% 0px', threshold: [0, 0.2, 0.5] }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.classList.toggle('menu-open', isOpen)
    if (!isOpen) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { setIsOpen(false); toggleRef.current?.focus() }
      if (event.key !== 'Tab') return
      const links = Array.from(headerRef.current?.querySelectorAll<HTMLElement>('a, button') ?? []).filter(el => el.getClientRects().length > 0)
      const first = links[0], last = links[links.length - 1]
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus() }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus() }
    }
    document.addEventListener('keydown', onKey)
    return () => { document.body.classList.remove('menu-open'); document.removeEventListener('keydown', onKey) }
  }, [isOpen])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 900) setIsOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const scrollToSection = (id: string) => (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    const target = document.getElementById(id)
    if (!target) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' })
    window.history.replaceState(null, '', `#${id}`)
    setActiveSection(id)
    setIsOpen(false)
    target.setAttribute('tabindex', '-1')
    target.focus({ preventScroll: true })
  }

  return (
    <header ref={headerRef} className={`site-header${isScrolled || isOpen ? ' is-scrolled' : ''}`}>
      <nav className="site-nav" aria-label="Primary navigation">
        <a className="wordmark" href="#home" onClick={scrollToSection('home')} aria-label="Trishit Swarnakar, home">
          <SpiderMark className="nav-mark" />
          <span>TRISHIT SWARNAKAR</span>
        </a>

        <div className="desktop-nav">
          {navItems.map((item) => (
            <a
              className={activeSection === item.id ? 'active' : ''}
              aria-current={activeSection === item.id ? 'location' : undefined}
              href={`#${item.id}`}
              onClick={scrollToSection(item.id)}
              key={item.id}
            >
              {item.label}
            </a>
          ))}
          <a className="nav-contact" href="#contact" onClick={scrollToSection('contact')}>
            Contact <span><ArrowIcon /></span>
          </a>
        </div>

        <button
          ref={toggleRef}
          className="menu-toggle"
          type="button"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-controls="mobile-navigation"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          <span />
          <span />
        </button>
      </nav>

      <div className={`mobile-nav${isOpen ? ' is-open' : ''}`} id="mobile-navigation">
        <div>
          {navItems.map((item, index) => (
            <a href={`#${item.id}`} onClick={scrollToSection(item.id)} key={item.id}>
              <span>0{index + 1}</span>
              {item.label}
            </a>
          ))}
          <a href="#contact" onClick={scrollToSection('contact')}>
            <span>{String(navItems.length + 1).padStart(2, '0')}</span>
            Contact
          </a>
        </div>
      </div>
    </header>
  )
}
