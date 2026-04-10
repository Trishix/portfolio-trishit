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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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

  useEffect(() => {
    const closeMobileMenuOnDesktop = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false)
      }
    }

    window.addEventListener('resize', closeMobileMenuOnDesktop)
    return () => {
      window.removeEventListener('resize', closeMobileMenuOnDesktop)
    }
  }, [])

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

  const handleMobileSectionScroll = (sectionId: string) => (event: MouseEvent<HTMLAnchorElement>) => {
    handleSectionScroll(sectionId)(event)
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-outline-variant/10 bg-surface/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-2 px-3 sm:h-20 sm:px-6 md:px-8">
        <button
          aria-controls="mobile-nav-menu"
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-on-surface transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 md:hidden"
          onClick={() => setIsMobileMenuOpen((current) => !current)}
          type="button"
        >
          {isMobileMenuOpen ? (
            <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          ) : (
            <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          )}
        </button>

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
          buttonClassName="whitespace-nowrap rounded-lg bg-signature-gradient px-4 py-2 text-xs font-headline font-bold tracking-tight text-on-primary shadow-sm transition-transform active:scale-95 sm:px-6 sm:py-2.5 sm:text-sm"
          buttonLabel={(
            <>
              <span className="sm:hidden">Contact</span>
              <span className="hidden sm:inline">Get in Touch</span>
            </>
          )}
        />
      </div>

      {isMobileMenuOpen ? (
        <div className="border-t border-outline-variant/10 bg-surface/95 md:hidden" id="mobile-nav-menu">
          <div className="mx-auto max-w-7xl px-3 pb-3 pt-2">
            <div className="rounded-2xl border border-outline-variant/20 bg-surface-container-low/65 p-2 shadow-[0_8px_22px_-18px_rgba(0,0,0,0.45)]">
              {navItems.map((item) => {
                const isActive = activeSection === item.id

                return (
                  <a
                    className={`group flex items-center justify-between rounded-xl px-3.5 py-3 font-headline text-sm font-bold tracking-tight transition-all duration-200 ${
                      isActive
                        ? 'bg-primary/10 text-primary shadow-[inset_0_0_0_1px_rgba(169,58,0,0.28)]'
                        : 'text-on-surface-variant hover:bg-surface-container hover:text-primary'
                    }`}
                    href={`#${item.id}`}
                    key={`mobile-${item.id}`}
                    onClick={handleMobileSectionScroll(item.id)}
                  >
                    <span className="flex items-center gap-2.5">
                      <span
                        className={`h-1.5 w-1.5 rounded-full transition-colors ${
                          isActive ? 'bg-primary' : 'bg-outline-variant/40 group-hover:bg-primary/70'
                        }`}
                      />
                      {item.label}
                    </span>
                    <span
                      className={`material-symbols-outlined text-base leading-none transition-all duration-200 ${
                        isActive ? 'translate-x-0 text-primary' : '-translate-x-0.5 text-on-surface-variant/70 group-hover:translate-x-0 group-hover:text-primary'
                      }`}
                    >
                      arrow_forward
                    </span>
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      ) : null}
    </nav>
  )
}
