'use client'

import { MouseEvent, useEffect, useState } from 'react'

const navItems = [
  { id: 'work', label: 'Work' },
  { id: 'toolkit', label: 'Expertise' },
  { id: 'education', label: 'Education' },
  { id: 'journey', label: 'Beyond' },
  { id: 'activity', label: 'Activity' },
]

export default function TopNavBar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = ['home', ...navItems.map((item) => item.id)]
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
    return () => document.body.classList.remove('menu-open')
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
  }

  return (
    <header className={`site-header${isScrolled || isOpen ? ' is-scrolled' : ''}`}>
      <nav className="site-nav" aria-label="Primary navigation">
        <a className="wordmark" href="#home" onClick={scrollToSection('home')} aria-label="Trishit Swarnakar, home">
          <span aria-hidden="true">TS/</span>
          <span>TRISHIT SWARNAKAR</span>
        </a>

        <div className="desktop-nav">
          {navItems.map((item) => (
            <a
              className={activeSection === item.id ? 'active' : ''}
              href={`#${item.id}`}
              onClick={scrollToSection(item.id)}
              key={item.id}
            >
              {item.label}
            </a>
          ))}
          <a className="nav-contact" href="#contact" onClick={scrollToSection('contact')}>
            Contact <span aria-hidden="true">↗</span>
          </a>
        </div>

        <button
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
