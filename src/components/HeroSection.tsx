import Image from 'next/image'

const portraitSrc =
  'https://lh3.googleusercontent.com/aida/ADBb0uhUhjtJeKYns4SUxWyztjSNQbKvscNSk8WHMPA1zC5SHdesGnwyNkH7_NActvZscE1t-gzHjZSFwTlybhuiKey2bdFVWYzpeTkj_m6gLZp2ljLLa53ThOvEisMYYHOpUnhAOEWkMtm1x1uZwCq_o2juZs6xxteevcr0YCEPjiN_AJbJjRitZGRqXxyapNbCa1Uc7Qm5hJRilCImMQMqwbQrxdxoEfKr4VZ6NNMnyUbX9Y_ljW77DJcRiAwI7aEvKXPhpN2HRL4gZYA'

export default function HeroSection() {
  return (
    <section className="scroll-mt-24 min-h-[100svh] overflow-x-hidden bg-surface" id="home">
      <div className="mx-auto max-w-7xl px-4 pt-16 pb-10 sm:px-6 sm:pt-20 sm:pb-14 md:flex md:min-h-screen md:items-center md:gap-20 md:px-8 md:pt-32 md:pb-24">
        <div className="flex min-h-[calc(100svh-8rem)] w-full flex-col justify-between md:hidden">
          <div className="relative space-y-5">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute top-3 right-0 h-[18rem] w-[6.5rem] max-[420px]:top-2 max-[420px]:h-[15.5rem] max-[420px]:w-[5.5rem] max-[360px]:h-[13.5rem] max-[360px]:w-[4.5rem]"
            >
              <div className="absolute inset-0 rounded-sm border border-outline-variant/25 bg-surface-container-high/20 backdrop-blur-[1px]" />
              <div className="absolute -top-2 -right-2 h-[6.25rem] w-[3.8rem] rounded-sm border border-primary/20 bg-primary/5 max-[420px]:h-[5rem] max-[420px]:w-[3.25rem] max-[360px]:h-[4.2rem] max-[360px]:w-[2.75rem]" />
              <div className="absolute bottom-4 -left-2 h-[5.25rem] w-[4.4rem] rounded-sm border border-outline-variant/25 bg-surface-container-low/25 max-[420px]:bottom-3 max-[420px]:h-[4.25rem] max-[420px]:w-[3.4rem] max-[360px]:h-[3.6rem] max-[360px]:w-[2.9rem]" />
            </div>
            <div className="relative z-10 space-y-3">
              <div className="inline-flex max-w-full items-center gap-2 max-[420px]:gap-1.5">
                <span className="material-symbols-outlined text-base leading-none text-primary">code</span>
                <p className="font-label text-[11px] font-semibold uppercase tracking-[0.08em] text-on-surface max-[420px]:text-[10px] max-[360px]:tracking-[0.06em]">Full Stack &amp; AI Developer</p>
              </div>
              <div className="w-full max-w-[16.75rem] border border-outline-variant/15 bg-surface-container-low p-3 shadow-sm max-[420px]:max-w-[15.5rem] max-[360px]:max-w-[14.75rem]">
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-surface-container-highest">
                  <Image
                    alt="Trishit Swarnakar Portrait"
                    src={portraitSrc}
                    fill
                    className="h-full w-full object-cover object-center grayscale transition-all duration-700"
                  />
                </div>
              </div>
              <div className="flex w-full items-center gap-2">
                <a
                  aria-label="GitHub"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-md border border-outline-variant/15 px-3 py-2 font-headline text-[11px] font-bold text-on-surface transition-all hover:bg-surface-container-low max-[420px]:gap-1 max-[420px]:px-2 max-[420px]:text-[10px]"
                  href="https://github.com/Trishix"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.04-3.34.73-4.04-1.61-4.04-1.61-.55-1.38-1.34-1.75-1.34-1.75-1.09-.75.08-.74.08-.74 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.49 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.94 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.16 0 0 1.01-.32 3.3 1.23a11.44 11.44 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.64.24 2.86.12 3.16.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.63-5.48 5.93.43.37.81 1.1.81 2.22 0 1.6-.02 2.89-.02 3.28 0 .32.21.69.82.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                  <span>GitHub</span>
                </a>
                <a
                  aria-label="LinkedIn"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-md border border-outline-variant/15 px-3 py-2 font-headline text-[11px] font-bold text-on-surface transition-all hover:bg-surface-container-low max-[420px]:gap-1 max-[420px]:px-2 max-[420px]:text-[10px]"
                  href="https://linkedin.com/in/trishit-swarnakar-b7350828a"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 3A2 2 0 0 1 21 5v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.34 10.5H5.67V18h2.67v-7.5zm.17-2.32a1.55 1.55 0 1 0-3.1 0 1.55 1.55 0 0 0 3.1 0zM18.33 13.64c0-2.58-1.38-3.78-3.22-3.78-1.49 0-2.15.82-2.52 1.4V10.5H9.92V18h2.67v-3.71c0-.98.19-1.92 1.4-1.92 1.19 0 1.21 1.12 1.21 1.98V18h2.67v-4.36z"/>
                  </svg>
                  <span>LinkedIn</span>
                </a>
                <a
                  aria-label="Instagram"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-md border border-outline-variant/15 px-3 py-2 font-headline text-[11px] font-bold text-on-surface transition-all hover:bg-surface-container-low max-[420px]:gap-1 max-[420px]:px-2 max-[420px]:text-[10px]"
                  href="https://www.instagram.com/ft.trishit/"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                  </svg>
                  <span>Instagram</span>
                </a>
              </div>
            </div>
            <h1 className="relative z-10 font-headline text-[clamp(2.2rem,13.6vw,3.15rem)] font-extrabold tracking-[-0.03em] leading-[0.92] text-on-background">
              Trishit<br />
              <span className="inline-block pl-0 text-primary-dim min-[420px]:pl-[3.8ch]">Swarnakar</span>
            </h1>
            <a
              className="relative z-10 inline-flex w-full items-center justify-between gap-2 rounded-xl bg-signature-gradient px-5 py-3 text-left font-headline text-[clamp(1.1rem,5.5vw,1.5rem)] font-bold text-on-primary max-[420px]:px-4"
              href="#projects"
            >
              <span>View Projects</span>
              <span className="material-symbols-outlined text-2xl leading-none">arrow_forward</span>
            </a>
          </div>
          <div className="w-full rounded-xl border border-outline-variant/15 bg-surface-container-low px-4 py-4">
            <p className="mb-2 font-label text-[11px] uppercase tracking-[0.1em] text-on-surface-variant">Current Focus</p>
            <p className="text-base font-semibold leading-relaxed text-on-surface">Agents and full-stack products focused on practical use.</p>
            <p className="mt-2 text-sm font-medium text-on-surface-variant">Based in Delhi, India</p>
          </div>
        </div>

        <div className="hidden w-full md:block md:w-3/5 md:space-y-10">
          <div className="space-y-4">
            <span className="font-label text-xs font-semibold uppercase tracking-[0.1em] text-on-surface-variant">
              Full Stack &amp; AI Developer
            </span>
            <h1 className="font-headline text-[clamp(3.2rem,8.4vw,5.6rem)] font-extrabold leading-[0.98] tracking-tighter text-on-background">
              Trishit<br />
              <span className="inline-block pl-[2.35ch] text-primary-dim lg:pl-[2.45ch]">Swarnakar</span>
            </h1>
          </div>

          <div className="flex w-full items-center gap-2 pt-1 sm:w-auto sm:flex-wrap sm:pt-2 sm:gap-4 md:gap-6">
            <a aria-label="GitHub" className="inline-flex flex-1 items-center justify-center gap-2 rounded-md border border-outline-variant/15 px-3 py-2 font-headline text-[11px] font-bold text-on-surface transition-all hover:bg-surface-container-low sm:flex-none sm:px-6 sm:py-3.5 sm:text-base" href="https://github.com/Trishix" target="_blank" rel="noreferrer noopener">
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.04-3.34.73-4.04-1.61-4.04-1.61-.55-1.38-1.34-1.75-1.34-1.75-1.09-.75.08-.74.08-.74 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.49 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.94 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.16 0 0 1.01-.32 3.3 1.23a11.44 11.44 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.64.24 2.86.12 3.16.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.63-5.48 5.93.43.37.81 1.1.81 2.22 0 1.6-.02 2.89-.02 3.28 0 .32.21.69.82.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              <span>GitHub</span>
            </a>
            <a aria-label="LinkedIn" className="inline-flex flex-1 items-center justify-center gap-2 rounded-md border border-outline-variant/15 px-3 py-2 font-headline text-[11px] font-bold text-on-surface transition-all hover:bg-surface-container-low sm:flex-none sm:px-6 sm:py-3.5 sm:text-base" href="https://linkedin.com/in/trishit-swarnakar-b7350828a" target="_blank" rel="noreferrer noopener">
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 3A2 2 0 0 1 21 5v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.34 10.5H5.67V18h2.67v-7.5zm.17-2.32a1.55 1.55 0 1 0-3.1 0 1.55 1.55 0 0 0 3.1 0zM18.33 13.64c0-2.58-1.38-3.78-3.22-3.78-1.49 0-2.15.82-2.52 1.4V10.5H9.92V18h2.67v-3.71c0-.98.19-1.92 1.4-1.92 1.19 0 1.21 1.12 1.21 1.98V18h2.67v-4.36z"/>
              </svg>
              <span>LinkedIn</span>
            </a>
            <a aria-label="Instagram" className="inline-flex flex-1 items-center justify-center gap-2 rounded-md border border-outline-variant/15 px-3 py-2 font-headline text-[11px] font-bold text-on-surface transition-all hover:bg-surface-container-low sm:flex-none sm:px-6 sm:py-3.5 sm:text-base" href="https://www.instagram.com/ft.trishit/" target="_blank" rel="noreferrer noopener">
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
              <span>Instagram</span>
            </a>
          </div>

          <div className="flex items-start gap-8 border-t border-outline-variant/15 pt-10">
            <div>
              <p className="mb-1 font-label text-[10px] uppercase tracking-[0.1em] text-on-surface-variant">Based In</p>
              <p className="font-headline text-base font-extrabold text-primary">Currently Based in Delhi</p>
              <p className="mt-1 text-xs font-medium text-on-surface-variant">Kalyani, West Bengal, India</p>
            </div>
            <div>
              <p className="mb-1 font-label text-[10px] uppercase tracking-[0.1em] text-on-surface-variant">Current Focus</p>
              <p className="font-headline text-sm font-bold">Agentic AI</p>
            </div>
          </div>
        </div>

        <div className="relative hidden w-full max-w-md md:block md:w-2/5 md:max-w-none">
          <div className="absolute -inset-4 hidden -z-10 rotate-1 rounded-xl bg-surface-container-low md:block"></div>
          <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-surface-container-highest shadow-2xl md:aspect-[4/5]">
            <Image
              alt="Trishit Swarnakar Portrait"
              src={portraitSrc}
              fill
              className="h-full w-full object-cover object-center grayscale transition-all duration-700 hover:grayscale-0"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden rounded-xl border border-outline-variant/5 bg-surface-container-lowest p-6 shadow-lg lg:block">
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-container/20">
                <span className="material-symbols-outlined text-primary">code</span>
              </div>
              <div>
                <p className="font-headline text-xs font-bold leading-none">Full Stack AI Developer</p>
                <p className="mt-1 text-[10px] text-on-surface-variant">Specializing in Agentic AI</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
