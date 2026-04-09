import EmailPopupTrigger from '@/components/EmailPopupTrigger'

export default function Footer() {
  return (
    <footer className="w-full bg-surface py-24">
      <div className="max-w-7xl mx-auto px-8 text-center space-y-12">
        <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tight">
          Let's build something <span className="text-primary italic">useful</span>.
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          <EmailPopupTrigger
            buttonClassName="bg-signature-gradient rounded-lg px-8 py-4 font-headline text-base font-bold text-on-primary shadow-lg transition-all hover:opacity-90"
            buttonLabel="Send an Email"
          />
          <a className="rounded-lg border border-outline-variant/30 px-8 py-4 font-headline text-base font-bold text-on-surface transition-all hover:bg-surface-container-low" href="https://linkedin.com/in/trishit-swarnakar-b7350828a" target="_blank" rel="noreferrer noopener">
            Connect on LinkedIn
          </a>
        </div>
        <div className="pt-16 border-t border-outline-variant/10">
          <div className="mx-auto flex flex-wrap items-center justify-center gap-x-12 gap-y-4 font-body text-xs uppercase tracking-[0.1em]">
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
