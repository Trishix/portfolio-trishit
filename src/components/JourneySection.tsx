import Image from 'next/image';
import nstLogo from '../assets/nst.png';
import kcmsLogo from '../assets/kcms.jpeg';
import springdaleLogo from '../assets/springdale.jpeg';

export default function JourneySection() {
  return (
    <section className="bg-surface px-4 py-20 sm:px-8 md:px-12 lg:px-16 md:py-32 border-t-2 border-on-background" id="journey">
      <div className="mx-auto max-w-screen-2xl">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left Column: Journey */}
          <div className="lg:col-span-5 flex flex-col space-y-12">
            <h2 className="font-headline text-[clamp(2.5rem,8vw,5rem)] font-black uppercase leading-none tracking-tighter text-on-surface border-b-2 border-on-background pb-8">
              The<br/>Journey.
            </h2>
            
            <div className="flex flex-col space-y-12">
              <div className="flex flex-col space-y-2">
                <h4 className="font-headline text-2xl font-bold uppercase tracking-tight text-on-surface">HPAIR Delegate</h4>
                <p className="font-headline text-sm font-bold uppercase tracking-widest text-on-surface-variant">Harvard Project for Asian &amp; International Relations</p>
                <p className="font-body text-base font-medium leading-relaxed text-on-surface mt-2 max-w-md">
                  Selected as a delegate to discuss policy, technology, and regional issues with global peers.
                </p>
              </div>

              <div className="flex flex-col space-y-2">
                <h4 className="font-headline text-2xl font-bold uppercase tracking-tight text-on-surface">Musician</h4>
                <p className="font-headline text-sm font-bold uppercase tracking-widest text-on-surface-variant">Guitarist</p>
                <p className="font-body text-base font-medium leading-relaxed text-on-surface mt-2 max-w-md">
                  10+ years as a lead guitarist, including live performance and composition.
                </p>
              </div>

              <div className="flex flex-col space-y-2">
                <h4 className="font-headline text-2xl font-bold uppercase tracking-tight text-on-surface">Former VP</h4>
                <p className="font-headline text-sm font-bold uppercase tracking-widest text-on-surface-variant">
                  <a href="https://www.linkedin.com/company/newtonbotics/" target="_blank" rel="noreferrer" className="hover:text-on-surface transition-colors">Robotics Club, Newton School of Technology</a>
                </p>
                <p className="font-body text-base font-medium leading-relaxed text-on-surface mt-2 max-w-md">
                  Ran workshops and events, coordinated teams, and helped students build robotics projects.
                </p>
              </div>

            </div>
          </div>

          {/* Right Column: Education */}
          <div className="lg:col-span-7 flex flex-col space-y-12 lg:pl-12 lg:border-l-2 border-on-background">
             <h2 className="font-headline text-[clamp(2.5rem,8vw,5rem)] font-black uppercase leading-none tracking-tighter text-on-surface border-b-2 border-on-background pb-8">
              Education.
            </h2>
            
            <div className="flex flex-col space-y-16">
              
              {/* College */}
              <div className="group flex flex-col sm:flex-row gap-6 md:gap-8 items-start">
                <div className="relative h-20 w-20 md:h-24 md:w-24 shrink-0 overflow-hidden bg-surface-dim mix-blend-luminosity opacity-80 group-hover:opacity-100 group-hover:mix-blend-normal transition-all duration-500">
                  <Image src={nstLogo} alt="Newton School of Technology" fill sizes="96px" className="object-cover" />
                </div>
                <div className="flex flex-col">
                  <h4 className="font-headline text-2xl md:text-3xl font-bold uppercase tracking-tight text-on-surface">B.Tech in CSAI</h4>
                  <p className="font-headline text-sm md:text-base font-bold uppercase tracking-widest text-on-surface-variant mt-1">Newton School of Technology</p>
                  <p className="font-label text-xs uppercase tracking-widest text-on-surface mt-4 border border-on-background px-3 py-1 self-start">Current Program</p>
                </div>
              </div>

              {/* High School */}
              <div className="group flex flex-col sm:flex-row gap-6 md:gap-8 items-start">
                <div className="relative h-20 w-20 md:h-24 md:w-24 shrink-0 overflow-hidden bg-surface-dim mix-blend-luminosity opacity-80 group-hover:opacity-100 group-hover:mix-blend-normal transition-all duration-500">
                  <Image src={kcmsLogo} alt="Kalyani Central Model School" fill sizes="96px" className="object-cover" />
                </div>
                <div className="flex flex-col">
                  <h4 className="font-headline text-2xl md:text-3xl font-bold uppercase tracking-tight text-on-surface">Higher Secondary</h4>
                  <p className="font-headline text-sm md:text-base font-bold uppercase tracking-widest text-on-surface-variant mt-1">Kalyani Central Model School</p>
                  <p className="font-body text-base font-medium leading-relaxed text-on-surface mt-4 max-w-lg">
                    Physics, Mathematics, Chemistry, English, Biology, Commercial Arts
                  </p>
                  <p className="font-label text-xs uppercase tracking-widest text-on-surface mt-4 border border-on-background px-3 py-1 self-start">84.4% CBSE</p>
                </div>
              </div>

              {/* Secondary School */}
              <div className="group flex flex-col sm:flex-row gap-6 md:gap-8 items-start">
                <div className="relative h-20 w-20 md:h-24 md:w-24 shrink-0 overflow-hidden bg-surface-dim mix-blend-luminosity opacity-80 group-hover:opacity-100 group-hover:mix-blend-normal transition-all duration-500">
                  <Image src={springdaleLogo} alt="Springdale High School" fill sizes="96px" className="object-cover" />
                </div>
                <div className="flex flex-col">
                  <h4 className="font-headline text-2xl md:text-3xl font-bold uppercase tracking-tight text-on-surface">Secondary Education</h4>
                  <p className="font-headline text-sm md:text-base font-bold uppercase tracking-widest text-on-surface-variant mt-1">Springdale High School</p>
                  <p className="font-body text-base font-medium leading-relaxed text-on-surface mt-4 max-w-lg">
                    Physical Science, Mathematics, Biology, Geography, History, English
                  </p>
                  <p className="font-label text-xs uppercase tracking-widest text-on-surface mt-4 border border-on-background px-3 py-1 self-start">88% WBBSE</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
