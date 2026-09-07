export default function DisciplinesSection() {
  const disciplines = [
    {
      title: 'Agentic AI Systems',
      description: 'I build agent workflows that fetch live data, decide the next step, and execute tasks like search, summarization, and API actions. Focus on practical AI.',
      icon: 'database',
    },
    {
      title: 'Full Stack Dev',
      description: 'I build and deploy end-to-end apps with React, Next.js, TypeScript, APIs, and databases, with an unwavering attention to speed, aesthetics, and maintainability.',
      icon: 'terminal',
    },
    {
      title: 'Side Quests',
      description: 'I am highly interested in robotics, active in music as a guitarist and composer, and also heavily into photography and cinematography.',
      icon: 'precision_manufacturing',
    },
  ]

  return (
    <section className="bg-surface px-4 py-20 sm:px-8 md:px-12 lg:px-16 md:py-32" id="disciplines">
      <div className="mx-auto max-w-screen-2xl">
        {/* Section Header */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <h2 className="font-headline text-[clamp(2.5rem,8vw,5rem)] font-black uppercase leading-none tracking-tighter text-on-surface">
            Core<br />Disciplines.
          </h2>
          <p className="font-body text-base font-medium max-w-md text-on-surface-variant md:text-right">
            From discovery to delivering a full product, my mission is to help businesses build amazing experiences through first-class code.
          </p>
        </div>

        {/* Disciplines List */}
        <div className="flex flex-col">
          {disciplines.map((discipline, idx) => (
            <div key={idx} className="group border-t-2 border-on-background py-8 md:py-12 flex flex-col md:flex-row gap-6 md:gap-16 lg:gap-32 transition-colors hover:bg-surface-dim px-4 md:px-8 -mx-4 md:-mx-8">
              
              <div className="flex-none w-full md:w-1/3 flex items-center justify-between md:justify-start gap-4">
                <h4 className="font-headline text-2xl md:text-4xl font-bold uppercase tracking-tight text-on-surface">
                  {discipline.title}
                </h4>
                <span className="material-symbols-outlined text-3xl md:text-5xl text-on-surface-variant md:hidden">
                  {discipline.icon}
                </span>
              </div>
              
              <div className="flex-grow flex flex-col justify-center">
                <p className="font-body text-base md:text-lg lg:text-xl font-medium leading-relaxed text-on-surface-variant max-w-2xl">
                  {discipline.description}
                </p>
              </div>

              <div className="hidden md:flex flex-none items-center justify-end">
                 <span className="material-symbols-outlined text-5xl text-on-surface-variant group-hover:text-on-surface transition-colors">
                  {discipline.icon}
                </span>
              </div>

            </div>
          ))}
          <div className="border-t-2 border-on-background" />
        </div>
      </div>
    </section>
  )
}
