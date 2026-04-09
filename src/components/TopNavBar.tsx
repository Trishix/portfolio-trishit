'use client'

import { MouseEvent, useEffect, useMemo, useState } from 'react'
import EmailPopupTrigger from '@/components/EmailPopupTrigger'

export default function TopNavBar() {
  const navItems = useMemo(
    () => [
      { id: 'home', label: 'Home' },
      { id: 'disciplines', label: 'Focus' },
      { id: 'projects', label: 'Projects' },
      { id: 'toolkit', label: 'Toolkit' },
      { id: 'journey', label: 'Journey' },
      { id: 'activity', label: 'Activity' },
    ],
    []
  )

  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const updateActiveSection = () => {
      const navElement = document.querySelector('nav')
      const navOffset = (navElement instanceof HTMLElement ? navElement.offsetHeight : 80) + 24
      const sectionTopProbe = window.scrollY + navOffset

      let nextActiveSection = 'home'

      for (const item of navItems) {
        const section = document.getElementById(item.id)
        if (!section) continue
        if (sectionTopProbe >= section.offsetTop) {
          nextActiveSection = item.id
        }
      }

      setActiveSection((current) => (current === nextActiveSection ? current : nextActiveSection))
    }

    updateActiveSection()
    window.addEventListener('scroll', updateActiveSection, { passive: true })
    window.addEventListener('resize', updateActiveSection)

    return () => {
      window.removeEventListener('scroll', updateActiveSection)
      window.removeEventListener('resize', updateActiveSection)
    }
  }, [navItems])

  const handleSectionScroll = (sectionId: string) => (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()

    const section = document.getElementById(sectionId)
    if (!section) return

    const shouldReduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    section.scrollIntoView({ behavior: shouldReduceMotion ? 'auto' : 'smooth', block: 'start' })
    window.history.replaceState(null, '', `#${sectionId}`)
    setActiveSection(sectionId)
  }

  const getLinkClassName = (sectionId: string) => {
    const baseClass = 'border-b-2 pb-1 transition-all duration-300'
    if (activeSection === sectionId) {
      return `${baseClass} border-primary text-primary`
    }

    return `${baseClass} border-transparent text-on-surface-variant hover:text-primary`
  }

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-outline-variant/10 bg-surface/80 backdrop-blur-xl">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-8 h-20">
        <a className="font-headline text-2xl font-bold tracking-tighter text-on-surface" href="#home" onClick={handleSectionScroll('home')}>
          TRISHIT
        </a>
        <div className="hidden items-center space-x-10 font-headline font-bold tracking-tight md:flex">
          {navItems.map((item) => (
            <a
              className={getLinkClassName(item.id)}
              href={`#${item.id}`}
              key={item.id}
              onClick={handleSectionScroll(item.id)}
            >
              {item.label}
            </a>
          ))}
        </div>
        <EmailPopupTrigger
          buttonClassName="bg-signature-gradient rounded-lg px-6 py-2.5 font-headline text-sm font-bold tracking-tight text-on-primary transition-transform active:scale-95"
          buttonLabel="Get in Touch"
        />
      </div>
    </nav>
  )
}
