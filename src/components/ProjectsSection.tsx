import Image from 'next/image'
import ubotImg from '@/assets/ubot.png'
import stringzImg from '@/assets/stringzthumb.png'
import responsivelyImg from '@/assets/responsively.png'
import lamaticImg from '@/assets/lamatic.png'
import ryokuImg from '@/assets/ryoku.png'
import vflowImg from '@/assets/vflow.png'

export default function ProjectsSection() {
  return (
    <section className="bg-surface px-4 py-20 sm:px-8 md:px-12 lg:px-16 md:py-32 border-t-2 border-on-background" id="projects">
      <div className="mx-auto max-w-screen-2xl">
        
        {/* Featured Projects Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 border-b-2 border-on-background pb-8">
          <h3 className="font-headline text-[clamp(2rem,6vw,4rem)] font-black uppercase tracking-tighter text-on-surface leading-none">
            Featured<br/>Projects
          </h3>
          <a href="https://github.com/Trishix" target="_blank" rel="noreferrer" className="group flex items-center gap-2 font-headline text-lg font-bold uppercase tracking-widest text-on-surface hover:text-on-surface-variant transition-colors mt-8 md:mt-0">
             <span>See All</span>
             <span className="material-symbols-outlined text-base transition-transform group-hover:translate-x-1">arrow_forward</span>
          </a>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
          
          {/* Ryoku */}
          <a href="https://ryoku-iota.vercel.app/" target="_blank" rel="noreferrer" className="group relative block aspect-[4/3] md:aspect-video w-full overflow-hidden bg-surface-dim hover:opacity-90 transition-opacity">
            <div className="absolute inset-0 z-10 flex flex-col justify-between p-6 md:p-10 pointer-events-none">
              <div className="font-headline text-sm md:text-base font-bold uppercase tracking-widest text-white drop-shadow-md">
                SAAS Platform ▪ 2026
              </div>
              <div className="font-headline text-3xl md:text-5xl font-black uppercase tracking-tighter text-white drop-shadow-lg">
                Ryoku
              </div>
            </div>
            <Image
              alt="Ryoku"
              src={ryokuImg}
              fill
              className="object-cover object-center grayscale group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-700"></div>
          </a>

          {/* VFlow */}
          <a href="https://vflow-project.vercel.app/" target="_blank" rel="noreferrer" className="group relative block aspect-[4/3] md:aspect-video w-full overflow-hidden bg-surface-dim hover:opacity-90 transition-opacity">
            <div className="absolute inset-0 z-10 flex flex-col justify-between p-6 md:p-10 pointer-events-none">
              <div className="font-headline text-sm md:text-base font-bold uppercase tracking-widest text-white drop-shadow-md">
                AI Tooling ▪ 2026
              </div>
              <div className="font-headline text-3xl md:text-5xl font-black uppercase tracking-tighter text-white drop-shadow-lg">
                VFlow
              </div>
            </div>
            <Image
              alt="VFlow"
              src={vflowImg}
              fill
              className="object-cover object-center grayscale group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-700"></div>
          </a>

          {/* UBOT */}
          <a href="https://ubot-chat.vercel.app/" target="_blank" rel="noreferrer" className="group relative block aspect-[4/3] md:aspect-video w-full overflow-hidden bg-surface-dim hover:opacity-90 transition-opacity">
            <div className="absolute inset-0 z-10 flex flex-col justify-between p-6 md:p-10 pointer-events-none">
              <div className="font-headline text-sm md:text-base font-bold uppercase tracking-widest text-white drop-shadow-md">
                AI Assistant ▪ 2026
              </div>
              <div className="font-headline text-3xl md:text-5xl font-black uppercase tracking-tighter text-white drop-shadow-lg">
                UBOT
              </div>
            </div>
            <Image
              alt="UBOT"
              src={ubotImg}
              fill
              className="object-cover object-center grayscale group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-700"></div>
          </a>

          {/* STRINGZ */}
          <a href="https://stringz-lijo.vercel.app/" target="_blank" rel="noreferrer" className="group relative block aspect-[4/3] md:aspect-video w-full overflow-hidden bg-surface-dim hover:opacity-90 transition-opacity">
            <div className="absolute inset-0 z-10 flex flex-col justify-between p-6 md:p-10 pointer-events-none">
              <div className="font-headline text-sm md:text-base font-bold uppercase tracking-widest text-white drop-shadow-md">
                Full-Stack ▪ 2025
              </div>
              <div className="font-headline text-3xl md:text-5xl font-black uppercase tracking-tighter text-white drop-shadow-lg">
                Stringz
              </div>
            </div>
            <Image
              alt="STRINGZ"
              src={stringzImg}
              fill
              className="object-cover object-center grayscale group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-700"></div>
          </a>

        </div>

        {/* Open Source Contributions */}
        <div className="flex flex-col md:flex-row justify-between items-end mt-24 mb-16 border-b-2 border-on-background pb-8">
          <h3 className="font-headline text-[clamp(2rem,6vw,4rem)] font-black uppercase tracking-tighter text-on-surface leading-none">
            Open Source
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
           {/* Responsively */}
           <a href="https://github.com/responsively-org/responsively-app" target="_blank" rel="noreferrer" className="group relative block aspect-[4/3] md:aspect-video w-full overflow-hidden bg-surface-dim hover:opacity-90 transition-opacity">
            <div className="absolute inset-0 z-10 flex flex-col justify-between p-6 md:p-10 pointer-events-none">
              <div className="font-headline text-sm md:text-base font-bold uppercase tracking-widest text-white drop-shadow-md">
                Contribution
              </div>
              <div className="font-headline text-3xl md:text-5xl font-black uppercase tracking-tighter text-white drop-shadow-lg">
                Responsively App
              </div>
            </div>
            <Image
              alt="Responsively"
              src={responsivelyImg}
              fill
              className="object-cover object-center grayscale group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-700"></div>
          </a>

           {/* Lamatic */}
           <a href="https://lamatic.ai/" target="_blank" rel="noreferrer" className="group relative block aspect-[4/3] md:aspect-video w-full overflow-hidden bg-surface-dim hover:opacity-90 transition-opacity">
            <div className="absolute inset-0 z-10 flex flex-col justify-between p-6 md:p-10 pointer-events-none">
              <div className="font-headline text-sm md:text-base font-bold uppercase tracking-widest text-white drop-shadow-md">
                Contribution
              </div>
              <div className="font-headline text-3xl md:text-5xl font-black uppercase tracking-tighter text-white drop-shadow-lg">
                Lamatic AI
              </div>
            </div>
            <Image
              alt="Lamatic"
              src={lamaticImg}
              fill
              className="object-cover object-center grayscale group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-700"></div>
          </a>
        </div>

      </div>
    </section>
  )
}
