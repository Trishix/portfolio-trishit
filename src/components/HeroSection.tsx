import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="scroll-mt-24 bg-surface" id="home">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col items-center gap-16 px-8 pt-32 pb-24 md:flex-row md:gap-24">
      <div className="w-full md:w-3/5 space-y-10">
        <div className="space-y-4">
          <span className="font-label text-xs font-semibold uppercase tracking-[0.1em] text-on-surface-variant">
            Full Stack Developer &amp; Agentic AI Developer
          </span>
          <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-[1.05] text-on-background">
            Trishit<br />
            <span className="text-primary-dim">Swarnakar</span>
          </h1>
        </div>
        <p className="text-on-surface-variant text-lg md:text-xl leading-relaxed max-w-xl font-medium">
          Building robust <span className="text-on-surface font-bold">Agentic AI systems</span>, scaling{' '}
          <span className="text-on-surface font-bold">full-stack applications</span> and exploring the frontiers of{' '}
          <span className="text-on-surface font-bold">robotics</span> through melodic{' '}
          <span className="text-on-surface font-bold">musical landscapes</span>.
        </p>
        <div className="flex flex-col sm:flex-row items-start gap-6 pt-4">
          <a className="inline-flex items-center gap-2 rounded-md border border-outline-variant/15 px-8 py-4 font-headline text-base font-bold text-on-surface transition-all hover:bg-surface-container-low" href="https://github.com/Trishix" target="_blank" rel="noreferrer noopener">
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.04-3.34.73-4.04-1.61-4.04-1.61-.55-1.38-1.34-1.75-1.34-1.75-1.09-.75.08-.74.08-.74 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.49 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.94 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.16 0 0 1.01-.32 3.3 1.23a11.44 11.44 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.64.24 2.86.12 3.16.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.63-5.48 5.93.43.37.81 1.1.81 2.22 0 1.6-.02 2.89-.02 3.28 0 .32.21.69.82.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            <span>GitHub</span>
          </a>
          <a className="inline-flex items-center gap-2 rounded-md border border-outline-variant/15 px-8 py-4 font-headline text-base font-bold text-on-surface transition-all hover:bg-surface-container-low" href="https://linkedin.com/in/trishit-swarnakar-b7350828a" target="_blank" rel="noreferrer noopener">
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 3A2 2 0 0 1 21 5v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.34 10.5H5.67V18h2.67v-7.5zm.17-2.32a1.55 1.55 0 1 0-3.1 0 1.55 1.55 0 0 0 3.1 0zM18.33 13.64c0-2.58-1.38-3.78-3.22-3.78-1.49 0-2.15.82-2.52 1.4V10.5H9.92V18h2.67v-3.71c0-.98.19-1.92 1.4-1.92 1.19 0 1.21 1.12 1.21 1.98V18h2.67v-4.36z"/>
            </svg>
            <span>LinkedIn</span>
          </a>
        </div>
        <div className="pt-12 flex items-center gap-8 border-t border-outline-variant/15">
          <div>
            <p className="mb-1 font-label text-[10px] uppercase tracking-[0.1em] text-on-surface-variant">Based In</p>
            <p className="font-headline text-base font-extrabold text-primary">Currently Based in Delhi</p>
            <p className="text-xs font-medium text-on-surface-variant mt-1">Kalyani, West Bengal, India</p>
          </div>
          <div>
            <p className="mb-1 font-label text-[10px] uppercase tracking-[0.1em] text-on-surface-variant">Current Focus</p>
            <p className="font-headline text-sm font-bold">Agentic AI</p>
          </div>
        </div>
      </div>
      <div className="w-full md:w-2/5 relative">
        <div className="absolute -inset-4 bg-surface-container-low rounded-xl -z-10 rotate-1"></div>
        <div className="aspect-square w-full overflow-hidden rounded-lg shadow-2xl bg-surface-container-highest">
          <Image
            alt="Trishit Swarnakar Portrait"
            src="https://lh3.googleusercontent.com/aida/ADBb0uhUhjtJeKYns4SUxWyztjSNQbKvscNSk8WHMPA1zC5SHdesGnwyNkH7_NActvZscE1t-gzHjZSFwTlybhuiKey2bdFVWYzpeTkj_m6gLZp2ljLLa53ThOvEisMYYHOpUnhAOEWkMtm1x1uZwCq_o2juZs6xxteevcr0YCEPjiN_AJbJjRitZGRqXxyapNbCa1Uc7Qm5hJRilCImMQMqwbQrxdxoEfKr4VZ6NNMnyUbX9Y_ljW77DJcRiAwI7aEvKXPhpN2HRL4gZYA"
            fill
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
          />
        </div>
        <div className="absolute -bottom-6 -left-6 bg-surface-container-lowest p-6 rounded-xl shadow-lg border border-outline-variant/5 hidden lg:block">
          <div className="flex items-center gap-4">
            <div className="h-10 w-10 rounded-full bg-primary-container/20 flex items-center justify-center">
              <span className="material-symbols-outlined text-primary">code</span>
            </div>
            <div>
              <p className="font-headline text-xs font-bold leading-none">Full Stack AI Developer</p>
              <p className="text-[10px] text-on-surface-variant mt-1">Specializing in Agentic AI</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}
