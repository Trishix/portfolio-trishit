import Image from 'next/image'
import ubotImg from '@/assets/ubot.png'
import stringzImg from '@/assets/stringzthumb.png'
import responsivelyImg from '@/assets/responsively.png'
import lamaticImg from '@/assets/lamatic.png'
import sastImg from '@/assets/sast.png'
import devLiveImg from '@/assets/devliveproject.png'

export default function ProjectsSection() {
  return (
    <section className="scroll-mt-24 bg-surface px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20" id="projects">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 sm:mb-12 md:mb-14">
          <span className="text-on-surface-variant uppercase tracking-[0.1em] text-xs font-semibold mb-4 block">Featured Projects</span>
          <h2 className="section-heading text-[clamp(2.2rem,12vw,4.5rem)] sm:text-5xl md:text-7xl font-headline font-extrabold tracking-tighter text-on-surface leading-none mb-8">
            Latest <br /> <span className="text-primary italic">Developments</span>
          </h2>
          <p className="max-w-2xl text-base sm:text-lg md:text-xl text-on-surface-variant leading-relaxed">
            Pushing the boundaries of intelligent interfaces and real-time social connectivity through robust architectural patterns.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-y-12 gap-x-8 sm:gap-y-14 md:grid-cols-2 md:gap-y-16 md:gap-x-12 lg:gap-x-16">
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
                sizes="(max-width: 767px) 100vw, (max-width: 1279px) 48vw, 42vw"
                placeholder="blur"
                className="w-full h-full object-cover transition-all duration-700"
              />
            </a>
            <div className="flex flex-col space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center space-x-2">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-on-surface-variant px-2 py-1 bg-surface-container-highest rounded">AI Agent</span>
                  <span className="text-[10px] font-bold tracking-widest uppercase text-primary">2026</span>
                </div>
                <span className="text-[10px] font-bold text-on-surface-variant">AI ASSISTANT</span>
              </div>
              <div className="flex items-center gap-3 md:gap-4">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-headline font-bold text-on-surface group-hover:text-primary transition-colors leading-none">UBOT</h3>
                <a href="https://github.com/Trishix/ubot" target="_blank" rel="noopener noreferrer" className="text-on-surface-variant hover:text-primary transition-all hover:scale-110 active:scale-95 duration-200" aria-label="UBOT GitHub Repository" title="GitHub Repository">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
              <p className="text-on-surface-variant text-base leading-relaxed">
                A tool that turns portfolio content into an embeddable chatbot. It answers visitor questions using your projects and experience data.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start text-sm text-on-surface">
                  <span className="material-symbols-outlined text-primary text-lg mr-2">check_circle</span>
                  Semantic search retrieves relevant context before each answer
                </li>
                <li className="flex items-start text-sm text-on-surface">
                  <span className="material-symbols-outlined text-primary text-lg mr-2">check_circle</span>
                  Vector knowledge base synced with portfolio updates and GitHub repositories
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
                sizes="(max-width: 767px) 100vw, (max-width: 1279px) 48vw, 42vw"
                placeholder="blur"
                className="w-full h-full object-cover transition-all duration-700"
              />
            </a>
            <div className="flex flex-col space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center space-x-2">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-on-surface-variant px-2 py-1 bg-surface-container-highest rounded">Learning Platform</span>
                  <span className="text-[10px] font-bold tracking-widest uppercase text-primary">2025</span>
                </div>
                <span className="text-[10px] font-bold text-on-surface-variant">FULL-STACK</span>
              </div>
              <div className="flex items-center gap-3 md:gap-4">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-headline font-bold text-on-surface group-hover:text-primary transition-colors leading-none">STRINGZ</h3>
                <a href="https://github.com/Trishix/Stringz" target="_blank" rel="noopener noreferrer" className="text-on-surface-variant hover:text-primary transition-all hover:scale-110 active:scale-95 duration-200" aria-label="STRINGZ GitHub Repository" title="GitHub Repository">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
              <p className="text-on-surface-variant text-base leading-relaxed">
                A full-stack learning platform with video streaming, payment checkout, and CRUD workflows for course content.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start text-sm text-on-surface">
                  <span className="material-symbols-outlined text-primary text-lg mr-2">check_circle</span>
                  Real-time bi-directional events over WebSockets
                </li>
                <li className="flex items-start text-sm text-on-surface">
                  <span className="material-symbols-outlined text-primary text-lg mr-2">check_circle</span>
                  Containerized deployment and local orchestration with Docker
                </li>
              </ul>
            </div>
          </div>

          {/* DEVLIVE */}
          <div className="group flex flex-col">
            <a
              aria-label="Open DevLive project"
              className="block aspect-video bg-surface-container-low rounded-xl overflow-hidden mb-8 transition-transform duration-500 group-hover:-translate-y-2 relative"
              href="https://devliveproject.vercel.app/"
              rel="noreferrer noopener"
              target="_blank"
              title="Open DevLive project"
            >
              <Image
                alt="DevLive event streaming website"
                src={devLiveImg}
                fill
                sizes="(max-width: 767px) 100vw, (max-width: 1279px) 48vw, 42vw"
                placeholder="blur"
                className="w-full h-full object-cover transition-all duration-700"
              />
            </a>
            <div className="flex flex-col space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center space-x-2">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-on-surface-variant px-2 py-1 bg-surface-container-highest rounded">Live Events</span>
                  <span className="text-[10px] font-bold tracking-widest uppercase text-primary">2026</span>
                </div>
                <span className="text-[10px] font-bold text-on-surface-variant">FRONTEND</span>
              </div>
              <div className="flex items-center gap-3 md:gap-4">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-headline font-bold text-on-surface group-hover:text-primary transition-colors leading-none">DevLive</h3>
                <a href="https://github.com/Trishix/vickylivefrontend" target="_blank" rel="noopener noreferrer" className="text-on-surface-variant hover:text-primary transition-all hover:scale-110 active:scale-95 duration-200" aria-label="DevLive GitHub Repository" title="GitHub Repository">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
              <p className="text-on-surface-variant text-base leading-relaxed">
                Frontend for a live event streaming website with polished discovery, category filtering, and an immersive dark UI.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start text-sm text-on-surface">
                  <span className="material-symbols-outlined text-primary text-lg mr-2">check_circle</span>
                  Responsive event browsing with live and upcoming tag-based navigation
                </li>
                <li className="flex items-start text-sm text-on-surface">
                  <span className="material-symbols-outlined text-primary text-lg mr-2">check_circle</span>
                  Fast frontend experience for streaming audiences using modern layout patterns
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Open Source Contributions */}
        <div className="mt-16 sm:mt-20 md:mt-24">
          <div className="mb-8 sm:mb-10 md:mb-12">
            <span className="text-on-surface-variant uppercase tracking-[0.1em] text-xs font-semibold mb-4 block">Open Source</span>
            <h2 className="section-heading text-4xl sm:text-5xl md:text-6xl font-headline font-extrabold tracking-tight text-on-surface">
              Contributions
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-y-12 gap-x-8 sm:gap-y-14 md:grid-cols-2 md:gap-y-16 md:gap-x-12 lg:gap-x-16">
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
                  sizes="(max-width: 767px) 100vw, (max-width: 1279px) 48vw, 42vw"
                  placeholder="blur"
                  className="w-full h-full object-cover transition-all duration-700"
                />
              </a>
              <div className="flex flex-col space-y-3">
                <h3 className="text-2xl sm:text-3xl font-headline font-bold text-on-surface group-hover:text-primary transition-colors">Responsively</h3>
                <p className="text-on-surface-variant text-base leading-relaxed">
                  Contributed fixes to Responsively App to improve multi-viewport testing for responsive web workflows.
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
                  sizes="(max-width: 767px) 100vw, (max-width: 1279px) 48vw, 42vw"
                  placeholder="blur"
                  className="w-full h-full object-cover transition-all duration-700"
                />
              </a>
              <div className="flex flex-col space-y-3">
                <div className="flex items-center gap-3 md:gap-4">
                  <h3 className="text-2xl sm:text-3xl font-headline font-bold text-on-surface group-hover:text-primary transition-colors leading-none">Lamatic AI</h3>
                  <a href="https://github.com/Trishix/AgentKit" target="_blank" rel="noopener noreferrer" className="text-on-surface-variant hover:text-primary transition-all hover:scale-110 active:scale-95 duration-200" aria-label="AgentKit GitHub Repository" title="GitHub Repository">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
                <p className="text-on-surface-variant text-base leading-relaxed">
                  Built a System Design Analyzer kit for Lamatic AI's AgentKit repository.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Organizations */}
        <div className="mt-16 sm:mt-20 md:mt-24">
          <div className="mb-8 sm:mb-10 md:mb-12">
            <span className="text-on-surface-variant uppercase tracking-[0.1em] text-xs font-semibold mb-4 block">Communities & Groups</span>
            <h2 className="section-heading text-4xl sm:text-5xl md:text-6xl font-headline font-extrabold tracking-tight text-on-surface">
              Organizations
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-y-12 gap-x-8 sm:gap-y-14 md:grid-cols-2 md:gap-y-16 md:gap-x-12 lg:gap-x-16">
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
                  sizes="(max-width: 767px) 100vw, (max-width: 1279px) 48vw, 42vw"
                  placeholder="blur"
                  className="w-full h-full object-cover transition-all duration-700"
                />
              </a>
              <div className="flex flex-col space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] sm:text-[10px] font-bold tracking-widest uppercase text-on-surface-variant px-2 py-1 bg-surface-container-highest rounded">GitHub Organization Member</span>
                </div>
                <div className="flex items-center gap-3 md:gap-4">
                  <h3 className="text-2xl sm:text-3xl font-headline font-bold text-on-surface group-hover:text-primary transition-colors leading-none">SAST</h3>
                  <a href="https://github.com/SASTxNST" target="_blank" rel="noopener noreferrer" className="text-on-surface-variant hover:text-primary transition-all hover:scale-110 active:scale-95 duration-200" aria-label="SAST GitHub Organization" title="GitHub Organization">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
                <p className="text-on-surface-variant text-base leading-relaxed">
                  Contribute to club projects, internal tools, and technical event setup as an active organization member.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
