import Image from 'next/image'
import portraitImage from '@/assets/trishitimage.jpeg'

export default function HeroSection() {
  return (
    <section className="min-h-screen bg-surface px-4 pt-24 pb-12 sm:px-8 md:px-12 md:pt-32 lg:px-16" id="home">
      <div className="mx-auto max-w-screen-2xl">
        {/* Header Image */}
        <div className="relative w-full overflow-hidden" style={{ height: '50vh', maxHeight: '600px' }}>
          <Image
            alt="Trishit Swarnakar Portrait"
            src={portraitImage}
            fill
            sizes="100vw"
            quality={85}
            placeholder="blur"
            className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-700"
          />
        </div>

        {/* Huge Title */}
        <div className="mt-8 overflow-hidden">
          <h1 className="font-headline text-[clamp(3rem,12vw,12rem)] font-black uppercase leading-[0.85] tracking-tighter text-on-background">
            TRISHIT.<br className="md:hidden" />SWARNAKAR
          </h1>
        </div>

        {/* Subtext Grid */}
        <div className="mt-16 grid grid-cols-1 gap-12 border-t-2 border-on-background pt-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-8">
            <div>
              <h6 className="font-label text-xs font-semibold uppercase tracking-widest text-on-surface-variant mb-2">Currently</h6>
              <h6 className="font-headline text-lg font-bold text-on-surface">Building Agents & Full-Stack Apps</h6>
            </div>
            <div>
              <h6 className="font-label text-xs font-semibold uppercase tracking-widest text-on-surface-variant mb-2">Specialized in</h6>
              <h6 className="font-headline text-lg font-bold text-on-surface">Agentic AI, Web Apps & Scalable Systems</h6>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h6 className="font-label text-xs font-semibold uppercase tracking-widest text-on-surface-variant mb-2">Based In</h6>
              <h6 className="font-headline text-lg font-bold text-on-surface">Delhi / Kalyani, India</h6>
            </div>
            <div>
              <h6 className="font-label text-xs font-semibold uppercase tracking-widest text-on-surface-variant mb-2">Role</h6>
              <h6 className="font-headline text-lg font-bold text-on-surface">Full Stack & AI Developer</h6>
            </div>
          </div>

          <div className="space-y-8 lg:col-span-2">
            <div>
              <h6 className="font-label text-xs font-semibold uppercase tracking-widest text-on-surface-variant mb-2">About</h6>
              <p className="font-body text-base font-medium leading-relaxed text-on-surface md:text-lg max-w-xl">
                I empower businesses and projects by building remarkable digital user experiences, driving innovation through Agentic AI, and delivering impeccable, scalable code solutions.
              </p>
            </div>
            <div className="pt-4 flex gap-6">
              <a href="https://github.com/Trishix" target="_blank" rel="noreferrer" className="group flex items-center gap-2 font-headline text-sm font-bold uppercase tracking-wider text-on-surface hover:text-on-surface-variant transition-colors">
                <span>GitHub</span>
                <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">arrow_forward</span>
              </a>
              <a href="https://linkedin.com/in/trishit-swarnakar-b7350828a" target="_blank" rel="noreferrer" className="group flex items-center gap-2 font-headline text-sm font-bold uppercase tracking-wider text-on-surface hover:text-on-surface-variant transition-colors">
                <span>LinkedIn</span>
                <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
