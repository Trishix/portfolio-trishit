const leftTechIcons = [
  { icon: 'code', placementClass: 'top-[7%] left-2 -rotate-[14deg]' },
  { icon: 'language', placementClass: 'top-[16%] left-6 rotate-[8deg]' },
  { icon: 'data_object', placementClass: 'top-[26%] left-3 -rotate-[8deg]' },
  { icon: 'terminal', placementClass: 'top-[38%] left-5 rotate-[12deg]' },
  { icon: 'database', placementClass: 'top-[51%] left-2 -rotate-[10deg]' },
  { icon: 'hub', placementClass: 'top-[63%] left-6 rotate-[7deg]' },
  { icon: 'analytics', placementClass: 'top-[75%] left-3 -rotate-[12deg]' },
  { icon: 'table_chart', placementClass: 'top-[87%] left-5 rotate-[9deg]' },
  { icon: 'integration_instructions', placementClass: 'top-[94%] left-2 -rotate-[6deg]' },
]

const rightTechIcons = [
  { icon: 'palette', placementClass: 'top-[9%] right-2 rotate-[12deg]' },
  { icon: 'cloud', placementClass: 'top-[20%] right-5 -rotate-[8deg]' },
  { icon: 'smart_toy', placementClass: 'top-[31%] right-2 rotate-[11deg]' },
  { icon: 'memory', placementClass: 'top-[43%] right-6 -rotate-[9deg]' },
  { icon: 'settings', placementClass: 'top-[56%] right-2 rotate-[10deg]' },
  { icon: 'psychology', placementClass: 'top-[69%] right-5 -rotate-[8deg]' },
  { icon: 'precision_manufacturing', placementClass: 'top-[82%] right-2 rotate-[9deg]' },
  { icon: 'music_note', placementClass: 'top-[92%] right-6 -rotate-[7deg]' },
  { icon: 'code', placementClass: 'top-[97%] right-2 rotate-[6deg]' },
]

export default function DisciplinesSection() {
  return (
    <section className="relative scroll-mt-24 overflow-hidden bg-surface-container-low px-4 py-16 md:px-8 md:py-20 lg:min-h-screen lg:py-0 lg:flex lg:items-center" id="disciplines">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 hidden lg:block">
        <div className="absolute inset-y-0 left-0 w-20 xl:w-24">
          {leftTechIcons.map((stamp, index) => (
            <div
              className={`absolute ${stamp.placementClass} rounded-full border border-outline-variant/20 bg-surface-container-highest/45 p-2 backdrop-blur-[1px]`}
              key={`left-${stamp.icon}-${index}`}
            >
              <span className="material-symbols-outlined text-base leading-none text-primary/65">{stamp.icon}</span>
            </div>
          ))}
        </div>

        <div className="absolute inset-y-0 right-0 w-20 xl:w-24">
          {rightTechIcons.map((stamp, index) => (
            <div
              className={`absolute ${stamp.placementClass} rounded-full border border-outline-variant/20 bg-surface-container-highest/45 p-2 backdrop-blur-[1px]`}
              key={`right-${stamp.icon}-${index}`}
            >
              <span className="material-symbols-outlined text-base leading-none text-primary/65">{stamp.icon}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="mb-10 md:mb-12">
          <h2 className="font-headline text-3xl font-extrabold tracking-tight md:text-4xl">Core Disciplines</h2>
          <div className="h-1 w-12 bg-primary mt-4"></div>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
          <div className="h-full rounded-xl bg-surface-container-lowest p-6 shadow-sm transition-transform hover:translate-y-[-4px] md:p-8">
            <span className="material-symbols-outlined text-primary text-4xl">database</span>
            <h3 className="mt-5 font-headline text-xl font-bold md:text-2xl">Agentic AI Systems</h3>
            <p className="mt-4 text-sm leading-relaxed text-on-surface-variant md:text-base">
              Designing autonomous AI workflows that plan, reason, and execute across dynamic real-time data sources.
            </p>
          </div>
          <div className="h-full rounded-xl bg-surface-container-lowest p-6 shadow-sm transition-transform hover:translate-y-[-4px] md:p-8">
            <span className="material-symbols-outlined text-primary text-4xl">terminal</span>
            <h3 className="mt-5 font-headline text-xl font-bold md:text-2xl">Full Stack Dev</h3>
            <p className="mt-4 text-sm leading-relaxed text-on-surface-variant md:text-base">
              Crafting end-to-end applications with modern frameworks, focusing on performance, scalability, and user-centric design.
            </p>
          </div>
          <div className="h-full rounded-xl bg-surface-container-lowest p-6 shadow-sm transition-transform hover:translate-y-[-4px] md:p-8">
            <span className="material-symbols-outlined text-primary text-4xl">precision_manufacturing</span>
            <h3 className="mt-5 font-headline text-xl font-bold md:text-2xl">Robotics &amp; Music</h3>
            <p className="mt-4 text-sm leading-relaxed text-on-surface-variant md:text-base">
              Exploring the synergy between autonomous movement and algorithmic sound composition through embedded systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
