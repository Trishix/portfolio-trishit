'use client'

import { FormEvent, ReactNode, useEffect, useId, useState } from 'react'
import { createPortal } from 'react-dom'

type EmailPopupTriggerProps = {
  buttonLabel: ReactNode
  buttonClassName: string
}

type SubmitState = 'idle' | 'sending' | 'success' | 'error'

export default function EmailPopupTrigger({ buttonLabel, buttonClassName }: EmailPopupTriggerProps) {
  const [isMounted, setIsMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [submitState, setSubmitState] = useState<SubmitState>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const idPrefix = useId()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isOpen) return

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onEscape)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onEscape)
    }
  }, [isOpen])

  const closeModal = () => {
    setIsOpen(false)
    setSubmitState('idle')
    setErrorMessage('')
  }

  const openModal = () => {
    setSubmitState('idle')
    setErrorMessage('')
    setIsOpen(true)
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitState('sending')
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      })

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as { error?: string } | null
        throw new Error(data?.error || 'Unable to send message right now.')
      }

      setSubmitState('success')
      setName('')
      setEmail('')
      setMessage('')
    } catch (error) {
      setSubmitState('error')
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong.')
    }
  }

  return (
    <>
      <button className={buttonClassName} onClick={openModal} type="button">
        {buttonLabel}
      </button>

      {isMounted && isOpen
        ? createPortal(
        <div
          aria-hidden="true"
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 px-4 py-6 backdrop-blur-[2px]"
          onClick={closeModal}
        >
          <div
            aria-labelledby={`${idPrefix}-title`}
            aria-modal="true"
            className="relative w-full max-h-[90vh] max-w-2xl overflow-y-auto rounded-[28px] border border-outline-variant/20 bg-surface-container-lowest p-0 shadow-[0_28px_72px_rgba(0,0,0,0.4)]"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
          >
            <div className="pointer-events-none absolute -left-24 -top-24 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -right-24 h-56 w-56 rounded-full bg-tertiary/10 blur-3xl" />

            <div className="relative rounded-t-[28px] border-b border-outline-variant/15 bg-surface-container/95 px-7 py-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 6h16M5 7l7 6 7-6M4 6v12h16V6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-on-surface-variant">Quick Contact</p>
                    <h3 className="mt-1 font-headline text-2xl font-bold text-on-surface" id={`${idPrefix}-title`}>
                      Send me an email
                    </h3>
                  </div>
                </div>
                <button
                  type="button"
                  aria-label="Close"
                  className="rounded-xl border border-outline-variant/20 bg-surface-container-low px-2.5 py-2.5 text-on-surface-variant transition-colors hover:bg-surface"
                  onClick={closeModal}
                >
                  <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </button>
              </div>
            </div>

            <form className="relative space-y-5 p-7" onSubmit={handleSubmit}>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.14em] text-on-surface-variant" htmlFor={`${idPrefix}-name`}>
                    Name
                  </label>
                  <input
                    className="w-full rounded-xl border border-outline-variant/25 bg-surface px-4 py-3 text-sm text-on-surface shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10"
                    id={`${idPrefix}-name`}
                    onChange={(e) => setName(e.target.value)}
                    required
                    type="text"
                    value={name}
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.14em] text-on-surface-variant" htmlFor={`${idPrefix}-email`}>
                    Email
                  </label>
                  <input
                    className="w-full rounded-xl border border-outline-variant/25 bg-surface px-4 py-3 text-sm text-on-surface shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10"
                    id={`${idPrefix}-email`}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    type="email"
                    value={email}
                  />
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.14em] text-on-surface-variant" htmlFor={`${idPrefix}-message`}>
                  Message
                </label>
                <textarea
                  className="min-h-36 w-full resize-y rounded-xl border border-outline-variant/25 bg-surface px-4 py-3 text-sm text-on-surface shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10"
                  id={`${idPrefix}-message`}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  value={message}
                />
              </div>

              {submitState === 'error' ? (
                <p className="rounded-xl border border-error/30 bg-error/10 px-3 py-2 text-sm text-error">{errorMessage}</p>
              ) : null}
              {submitState === 'success' ? (
                <p className="rounded-xl border border-secondary/30 bg-secondary/10 px-3 py-2 text-sm text-secondary">Message sent successfully.</p>
              ) : null}

              <div className="flex flex-col-reverse gap-2 border-t border-outline-variant/15 pt-4 sm:flex-row sm:justify-end">
                <button
                  className="rounded-xl border border-outline-variant/20 px-4 py-2.5 text-sm font-semibold text-on-surface-variant transition-colors hover:bg-surface-container"
                  onClick={closeModal}
                  type="button"
                >
                  Cancel
                </button>
                <button
                  className="rounded-xl bg-signature-gradient px-5 py-2.5 text-sm font-bold text-on-primary shadow-[0_10px_24px_rgba(169,58,0,0.28)] transition disabled:cursor-not-allowed disabled:opacity-60"
                  disabled={submitState === 'sending' || !name.trim() || !email.trim() || !message.trim()}
                  type="submit"
                >
                  {submitState === 'sending' ? 'Sending...' : 'Send'}
                </button>
              </div>
            </form>
          </div>
        </div>
        ,
        document.body
      )
        : null}
    </>
  )
}
