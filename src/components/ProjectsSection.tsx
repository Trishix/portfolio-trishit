import Image from 'next/image'
import ubotImg from '@/assets/ubot.png'
import stringzImg from '@/assets/stringzthumb.png'
import responsivelyImg from '@/assets/responsively.png'
import lamaticImg from '@/assets/lamatic.png'
import sastImg from '@/assets/sast.png'

export default function ProjectsSection() {
  return (
    <section className="scroll-mt-24 py-32 px-8 bg-surface" id="projects">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24">
          <span className="text-on-surface-variant uppercase tracking-[0.1em] text-xs font-semibold mb-4 block">Featured Projects</span>
          <h2 className="text-5xl md:text-7xl font-headline font-extrabold tracking-tighter text-on-surface leading-none mb-8">
            Latest <br /> <span className="text-primary italic">Developments</span>
          </h2>
          <p className="max-w-2xl text-xl text-on-surface-variant leading-relaxed">
            Pushing the boundaries of intelligent interfaces and real-time social connectivity through robust architectural patterns.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-20 gap-x-16">
          {/* UBOT */}
          <div className="group flex flex-col">
            <a
              aria-label="Open UBOT project"
              className="block aspect-video bg-surface-container-low rounded-xl overflow-hidden mb-8 transition-transform duration-500 group-hover:-translate-y-2 relative"
              href="https://ubot-chat.vercel.app/"
              rel="noreferrer noopener"
              target="_blank"
              title="Open UBOT project"
            >
              <Image
                alt="UBOT Interface"
                src={ubotImg}
                fill
                className="w-full h-full object-cover transition-all duration-700"
              />
            </a>
            <div className="flex flex-col space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-on-surface-variant px-2 py-1 bg-surface-container-highest rounded">AI Agent</span>
                  <span className="text-[10px] font-bold tracking-widest uppercase text-primary">2024</span>
                </div>
                <span className="text-[10px] font-bold text-on-surface-variant">AGENTIC-AI</span>
              </div>
              <h3 className="text-4xl font-headline font-bold text-on-surface group-hover:text-primary transition-colors">UBOT</h3>
              <p className="text-on-surface-variant text-base leading-relaxed">
                An intelligent portfolio concierge utilizing Agentic AI workflows to answer specific queries about projects, skills, and professional experience.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-on-surface">
                  <span className="material-symbols-outlined text-primary text-lg mr-2">check_circle</span>
                  Semantic context retrieval for precise inquiries
                </li>
                <li className="flex items-center text-sm text-on-surface">
                  <span className="material-symbols-outlined text-primary text-lg mr-2">check_circle</span>
                  Vectorized knowledge base with automated sync
                </li>
              </ul>
            </div>
          </div>

          {/* STRINGZ */}
          <div className="group flex flex-col">
            <a
              aria-label="Open STRINGZ project"
              className="block aspect-video bg-surface-container-low rounded-xl overflow-hidden mb-8 transition-transform duration-500 group-hover:-translate-y-2 relative"
              href="https://stringz-lijo.vercel.app/"
              rel="noreferrer noopener"
              target="_blank"
              title="Open STRINGZ project"
            >
              <Image
                alt="STRINGZ Platform"
                src={stringzImg}
                fill
                className="w-full h-full object-cover transition-all duration-700"
              />
            </a>
            <div className="flex flex-col space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-on-surface-variant px-2 py-1 bg-surface-container-highest rounded">Social Tech</span>
                  <span className="text-[10px] font-bold tracking-widest uppercase text-primary">2024</span>
                </div>
                <span className="text-[10px] font-bold text-on-surface-variant">FULL-STACK</span>
              </div>
              <h3 className="text-4xl font-headline font-bold text-on-surface group-hover:text-primary transition-colors">STRINGZ</h3>
              <p className="text-on-surface-variant text-base leading-relaxed">
                A high-performance social ecosystem developed for real-time engagement and instant messaging.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-on-surface">
                  <span className="material-symbols-outlined text-primary text-lg mr-2">check_circle</span>
                  Real-time bi-directional events via WebSockets
                </li>
                <li className="flex items-center text-sm text-on-surface">
                  <span className="material-symbols-outlined text-primary text-lg mr-2">check_circle</span>
                  Scalable infrastructure using Docker orchestration
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Open Source Contributions */}
        <div className="mt-32">
          <div className="mb-16">
            <span className="text-on-surface-variant uppercase tracking-[0.1em] text-xs font-semibold mb-4 block">Open Source</span>
            <h2 className="text-4xl md:text-5xl font-headline font-extrabold tracking-tight text-on-surface">
              Contributions
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-20 gap-x-16">
            {/* Responsively */}
            <div className="group flex flex-col">
              <a
                aria-label="Open Responsively repository"
                className="block aspect-video bg-surface-container-low rounded-xl overflow-hidden mb-6 transition-transform duration-500 group-hover:-translate-y-2 relative"
                href="https://github.com/responsively-org/responsively-app"
                rel="noreferrer noopener"
                target="_blank"
                title="Open Responsively repository"
              >
                <Image
                  alt="Responsively App"
                  src={responsivelyImg}
                  fill
                  className="w-full h-full object-cover transition-all duration-700"
                />
              </a>
              <div className="flex flex-col space-y-3">
                <h3 className="text-3xl font-headline font-bold text-on-surface group-hover:text-primary transition-colors">Responsively</h3>
                <p className="text-on-surface-variant text-base leading-relaxed">
                  Contributions to the Responsively App, enhancing open source dev tooling tailored for responsive web development workflows.
                </p>
              </div>
            </div>

            {/* Lamatic AI */}
            <div className="group flex flex-col">
              <a
                aria-label="Open Lamatic AI"
                className="block aspect-video bg-surface-container-low rounded-xl overflow-hidden mb-6 transition-transform duration-500 group-hover:-translate-y-2 relative"
                href="https://lamatic.ai/"
                rel="noreferrer noopener"
                target="_blank"
                title="Open Lamatic AI"
              >
                <Image
                  alt="Lamatic AI"
                  src={lamaticImg}
                  fill
                  className="w-full h-full object-cover transition-all duration-700"
                />
              </a>
              <div className="flex flex-col space-y-3">
                <h3 className="text-3xl font-headline font-bold text-on-surface group-hover:text-primary transition-colors">Lamatic AI</h3>
                <p className="text-on-surface-variant text-base leading-relaxed">
                  Open source contributions driving forward structured GenAI solutions and agentic frameworks.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Organizations */}
        <div className="mt-32">
          <div className="mb-16">
            <span className="text-on-surface-variant uppercase tracking-[0.1em] text-xs font-semibold mb-4 block">Communities & Groups</span>
            <h2 className="text-4xl md:text-5xl font-headline font-extrabold tracking-tight text-on-surface">
              Organizations
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-20 gap-x-16">
            {/* SAST */}
            <div className="group flex flex-col">
              <a
                aria-label="Open SAST organization"
                className="block aspect-video bg-surface-container-low rounded-xl overflow-hidden mb-6 transition-transform duration-500 group-hover:-translate-y-2 relative"
                href="https://github.com/SASTxNST"
                rel="noreferrer noopener"
                target="_blank"
                title="Open SAST organization"
              >
                <Image
                  alt="SAST (Society of Automation and Software Technology)"
                  src={sastImg}
                  fill
                  className="w-full h-full object-cover transition-all duration-700"
                />
              </a>
              <div className="flex flex-col space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-on-surface-variant px-2 py-1 bg-surface-container-highest rounded">GitHub Organization Member</span>
                </div>
                <h3 className="text-3xl font-headline font-bold text-on-surface group-hover:text-primary transition-colors">SAST</h3>
                <p className="text-on-surface-variant text-base leading-relaxed">
                  Active contributor and organization member, collaborating on technical initiatives and driving development within the community.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
