import EmailPopupTrigger from '@/components/EmailPopupTrigger'

export default function Footer() {
  return (
    <footer className="w-full bg-surface py-12 sm:py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 text-center space-y-8 sm:space-y-10 sm:px-6 md:space-y-12 md:px-8">
        <h2 className="text-[clamp(2rem,9vw,3rem)] font-headline font-bold tracking-tight">
          Let's build something <span className="text-primary italic">useful</span>.
        </h2>
        <div className="flex flex-col justify-center gap-4 sm:flex-row sm:flex-wrap sm:gap-6 md:gap-8">
          <EmailPopupTrigger
            buttonClassName="w-full rounded-lg bg-signature-gradient px-6 py-3.5 font-headline text-sm font-bold text-on-primary shadow-lg transition-all hover:opacity-90 sm:w-auto sm:px-8 sm:py-4 sm:text-base"
            buttonLabel="Send an Email"
          />
          <a className="w-full rounded-lg border border-outline-variant/30 px-6 py-3.5 font-headline text-sm font-bold text-on-surface transition-all hover:bg-surface-container-low sm:w-auto sm:px-8 sm:py-4 sm:text-base" href="https://linkedin.com/in/trishit-swarnakar-b7350828a" target="_blank" rel="noreferrer noopener">
            Connect on LinkedIn
          </a>
        </div>
        <div className="border-t border-outline-variant/10 pt-10 sm:pt-12 md:pt-16">
          <div className="mx-auto flex flex-wrap items-center justify-center gap-x-8 gap-y-4 font-body text-xs uppercase tracking-[0.1em] sm:gap-x-12">
            <a className="text-on-surface-variant hover:text-primary transition-colors" href="https://github.com/Trishix" target="_blank" rel="noreferrer noopener">
              GitHub
            </a>
            <a className="text-on-surface-variant hover:text-primary transition-colors" href="https://leetcode.com/trishix" target="_blank" rel="noreferrer noopener">
              Leetcode
            </a>
            <a className="text-on-surface-variant hover:text-primary transition-colors" href="https://linkedin.com/in/trishit-swarnakar-b7350828a" target="_blank" rel="noreferrer noopener">
              LinkedIn
            </a>
            <a className="text-on-surface-variant hover:text-primary transition-colors" href="https://www.instagram.com/trishix/" target="_blank" rel="noreferrer noopener">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
