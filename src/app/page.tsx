import Image, { StaticImageData } from 'next/image'
import LinkedInActivitySection from '@/components/LinkedInActivitySection'
import MotionController from '@/components/MotionController'
import TopNavBar from '@/components/TopNavBar'
import portraitImage from '@/assets/trishit-hero-cinematic.jpg'
import ryokuImage from '@/assets/ryoku.png'
import vflowImage from '@/assets/vflow.png'
import ubotImage from '@/assets/ubot.png'
import vickyImage from '@/assets/devliveproject.png'
import stringzImage from '@/assets/stringzthumb.png'
import responsivelyImage from '@/assets/responsively.png'
import lamaticImage from '@/assets/lamatic.png'
import nstImage from '@/assets/nst.png'
import kcmsImage from '@/assets/kcms.jpeg'
import springdaleImage from '@/assets/springdale.jpeg'

type Project = {
  title: string
  description: string
  category: string
  year: string
  href: string
  image: StaticImageData
  stack: string[]
  span: 'wide' | 'narrow' | 'third'
  preview?: 'contain-light' | 'contain-dark'
}

const projects: Project[] = [
  {
    title: 'Ryoku',
    description: 'One-click AI customer support agents trained on a business knowledge base.',
    category: 'AI product',
    year: '2026',
    href: 'https://ryoku-iota.vercel.app/',
    image: ryokuImage,
    stack: ['Next.js', 'TypeScript', 'AI SDK'],
    span: 'wide',
    preview: 'contain-light',
  },
  {
    title: 'VFlow',
    description: 'A visual environment for composing and running reusable multi-step AI workflows.',
    category: 'AI tooling',
    year: '2026',
    href: 'https://vflow-project.vercel.app/',
    image: vflowImage,
    stack: ['Next.js 15', 'XYFlow', 'Zustand'],
    span: 'narrow',
    preview: 'contain-dark',
  },
  {
    title: 'UBOT',
    description: 'A personal AI representative that turns portfolio knowledge into a conversation.',
    category: 'AI assistant',
    year: '2026',
    href: 'https://ubot-chat.vercel.app/',
    image: ubotImage,
    stack: ['Next.js 16', 'Supabase', 'Transformers'],
    span: 'narrow',
  },
  {
    title: 'Vicky Live',
    description: 'A cinematic live-event streaming interface engineered for responsive viewing.',
    category: 'Product engineering',
    year: '2026',
    href: 'https://devliveproject.vercel.app/',
    image: vickyImage,
    stack: ['React 19', 'TypeScript', 'Zustand'],
    span: 'wide',
  },
  {
    title: 'Stringz',
    description: 'A full-stack guitar learning platform with payments, roles, lessons, and progress tracking.',
    category: 'Full stack',
    year: '2026',
    href: 'https://stringz-lijo.vercel.app/',
    image: stringzImage,
    stack: ['React', 'Node.js', 'MongoDB'],
    span: 'third',
  },
  {
    title: 'Responsively',
    description: 'Open-source work on the browser built for responsive web development.',
    category: 'Open source',
    year: '2025',
    href: 'https://github.com/responsively-org/responsively-app',
    image: responsivelyImage,
    stack: ['Electron', 'JavaScript', 'Open source'],
    span: 'third',
  },
  {
    title: 'Lamatic AI',
    description: 'Contributions to production infrastructure for building generative AI applications.',
    category: 'Open source',
    year: '2025',
    href: 'https://lamatic.ai/',
    image: lamaticImage,
    stack: ['GenAI', 'APIs', 'Platform'],
    span: 'third',
  },
]

const education = [
  {
    title: 'B.Tech in CSAI',
    school: 'Newton School of Technology, Rishihood University',
    status: 'Current program',
    detail: 'Computer Science and Artificial Intelligence',
    result: '2024 - 2028',
    image: nstImage,
  },
  {
    title: 'Higher Secondary',
    school: 'Kalyani Central Model School',
    status: 'Completed',
    detail: 'Physics, Mathematics, Chemistry, English, Biology, Commercial Arts',
    result: '84.4% CBSE',
    image: kcmsImage,
  },
  {
    title: 'Secondary Education',
    school: 'Springdale High School',
    status: 'Completed',
    detail: 'Physical Science, Mathematics, Biology, Geography, History, English',
    result: '88% WBBSE',
    image: springdaleImage,
  },
]

const beyond = [
  {
    period: '2025',
    title: 'HPAIR Delegate',
    place: 'Harvard Project for Asian and International Relations',
    detail: 'Selected to discuss policy, technology, and regional challenges with an international cohort.',
  },
  {
    period: '2024',
    title: 'Former Vice President',
    place: 'Robotics Club, Newton School of Technology',
    detail: 'Led workshops, coordinated teams, and helped students move robotics projects from idea to prototype.',
  },
  {
    period: '10+ years',
    title: 'Guitarist and Composer',
    place: 'Live performance and original music',
    detail: 'Music sharpens the same instincts engineering needs: timing, restraint, iteration, and listening.',
  },
]

const capabilities = [
  {
    title: 'Frontend systems',
    index: '01',
    text: 'Responsive product interfaces with deliberate interaction, motion, accessibility, and performance.',
    tools: ['TypeScript', 'React 19', 'Next.js 15 / 16', 'GSAP', 'Tailwind CSS 4', 'Zustand'],
  },
  {
    title: 'AI engineering',
    index: '02',
    text: 'Agentic workflows and retrieval systems designed around useful behavior, not model spectacle.',
    tools: ['Vercel AI SDK', 'LangGraph', 'LangChain', 'Transformers', 'LanceDB', 'RAG'],
  },
  {
    title: 'Backend and data',
    index: '03',
    text: 'Production-minded APIs, persistence, authentication, and data flows that remain understandable.',
    tools: ['Node.js', 'Python', 'Supabase', 'MongoDB', 'REST APIs', 'Docker'],
  },
  {
    title: 'Product execution',
    index: '04',
    text: 'From ambiguous problem to shipped product: architecture, interface decisions, iteration, and delivery.',
    tools: ['System design', 'Prototyping', 'Open source', 'Performance', 'Testing', 'Deployment'],
  },
]

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/Trishix' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/trishit-swarnakar-b7350828a' },
  { label: 'LeetCode', href: 'https://leetcode.com/trishix' },
  { label: 'Instagram', href: 'https://www.instagram.com/trishix/' },
]

const calendlyUrl = 'https://calendly.com/trishitofficial/30min'

export default function Home() {
  const manifesto = 'I engineer digital products where difficult systems feel clear, fast, and inevitable.'

  return (
    <>
      <MotionController />
      <a className="skip-link" href="#main-content">Skip to content</a>
      <TopNavBar />
      <div className="web-progress" aria-hidden="true"><span /></div>

      <main id="main-content">
        <section className="hero" id="home" aria-labelledby="hero-title">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-media" data-hero-media>
            <Image
              alt="Trishit Swarnakar"
              src={portraitImage}
              fill
              priority
              quality={94}
              sizes="(max-width: 760px) 72vw, 48vw"
              className="hero-media-image"
            />
            <div className="hero-media-shade" />
          </div>

          <div className="hero-content section-shell">
            <p className="hero-eyebrow" data-hero-reveal>Full-stack and AI engineer</p>
            <h1 id="hero-title" data-hero-reveal>
              Trishit<br />Swarnakar
            </h1>
            <div className="hero-lower" data-hero-reveal>
              <p>Building intelligent products, resilient interfaces, and technical systems with a point of view.</p>
              <div className="hero-actions">
                <a className="primary-action" href="#work">Explore selected work <span aria-hidden="true">↘</span></a>
                <a className="text-action" href="https://github.com/Trishix" target="_blank" rel="noreferrer noopener">
                  GitHub <span aria-hidden="true">↗</span>
                </a>
                <a className="text-action" href="https://linkedin.com/in/trishit-swarnakar-b7350828a" target="_blank" rel="noreferrer noopener">
                  LinkedIn <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </div>

          <div className="hero-scroll" aria-hidden="true"><span /> Scroll to inspect</div>
        </section>

        <div className="stack-marquee" aria-label="Core technologies">
          <div>
            {['TypeScript', 'Next.js', 'React', 'AI systems', 'Node.js', 'Python', 'GSAP', 'Supabase'].map((item) => (
              <span key={item}>{item}</span>
            ))}
            {['TypeScript', 'Next.js', 'React', 'AI systems', 'Node.js', 'Python', 'GSAP', 'Supabase'].map((item) => (
              <span aria-hidden="true" key={`${item}-copy`}>{item}</span>
            ))}
          </div>
        </div>

        <section className="manifesto" id="profile">
          <div className="manifesto-shell section-shell">
            <p className="manifesto-kicker" data-reveal>Engineering, with intent.</p>
            <p className="manifesto-statement" data-manifesto>
              {manifesto.split(' ').map((word, index) => (
                <span className="manifesto-word" key={`${word}-${index}`}>{word}{' '}</span>
              ))}
            </p>
            <div className="manifesto-notes" data-reveal>
              <p>I work across product engineering, agentic AI, and frontend systems, keeping architecture clear and complex interactions direct.</p>
            </div>
          </div>
        </section>

        <section className="work" id="work" aria-labelledby="work-title">
          <div className="work-layout section-shell">
            <div className="work-title-rail">
              <p>Selected work / 2025 - 2026</p>
              <h2 id="work-title">Systems<br />in motion.</h2>
              <p>Product interfaces and AI systems built to work beyond the demo.</p>
              <a href="https://github.com/Trishix" target="_blank" rel="noreferrer noopener">More work on GitHub <span aria-hidden="true">↗</span></a>
            </div>

            <div className="project-grid">
              {projects.map((project) => (
                <article className={`project-card project-card-${project.span}`} data-project-card key={project.title}>
                  <a href={project.href} target="_blank" rel="noreferrer noopener" aria-label={`Open ${project.title}`}>
                    <div className={`project-media project-media-${project.preview ?? 'cover'}`} data-parallax-media>
                      <Image
                        alt={`${project.title} interface`}
                        src={project.image}
                        fill
                        quality={76}
                        sizes={project.span === 'wide' ? '(max-width: 760px) 100vw, 52vw' : '(max-width: 760px) 100vw, 34vw'}
                      />
                      <div className="project-media-wash" />
                    </div>
                    <div className="project-info">
                      <div className="project-heading">
                        <p>{project.category} / {project.year}</p>
                        <h3>{project.title}</h3>
                      </div>
                      <span className="project-open" aria-hidden="true">↗</span>
                      <p className="project-description">{project.description}</p>
                      <ul aria-label={`${project.title} stack`}>
                        {project.stack.map((item) => <li key={item}>{item}</li>)}
                      </ul>
                    </div>
                  </a>
                </article>
              ))}
            </div>
          </div>

        </section>

        <section className="capabilities" id="toolkit" aria-labelledby="capabilities-title">
          <div className="capabilities-intro section-shell">
            <p>Capabilities</p>
            <h2 id="capabilities-title">From interface<br />to intelligence.</h2>
          </div>
          <div className="capabilities-viewport">
            <div className="capabilities-track">
              {capabilities.map((capability) => (
                <article className="capability-panel" key={capability.title}>
                  <span>{capability.index}</span>
                  <h3>{capability.title}</h3>
                  <p>{capability.text}</p>
                  <ul>
                    {capability.tools.map((tool) => <li key={tool}>{tool}</li>)}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="education" id="education" aria-labelledby="education-title">
          <div className="education-shell section-shell">
            <div className="chapter-heading" data-reveal>
              <h2 id="education-title">Education.</h2>
              <p>Formal study in computing, science, and analytical thinking.</p>
            </div>
            <div className="education-list">
              {education.map((item) => (
                <article className="education-row" data-reveal key={item.title}>
                  <div className="education-logo"><Image src={item.image} alt={`${item.school} logo`} fill sizes="72px" /></div>
                  <div className="education-copy">
                    <p>{item.status}</p>
                    <h3>{item.title}</h3>
                    <p>{item.school}</p>
                  </div>
                  <div className="education-detail"><p>{item.detail}</p><strong>{item.result}</strong></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="journey" id="journey" aria-labelledby="journey-title">
          <div className="journey-shell section-shell">
            <div className="chapter-heading" data-reveal>
              <h2 id="journey-title">Beyond the<br />codebase.</h2>
              <p>Communities, leadership, and music that shape how I build.</p>
            </div>
            <div className="journey-list">
              {beyond.map((item) => (
                <article className="journey-row" data-reveal key={item.title}>
                  <time>{item.period}</time>
                  <div><h3>{item.title}</h3><p>{item.place}</p></div>
                  <p>{item.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <LinkedInActivitySection />

        <footer className="contact" id="contact">
          <div className="contact-grid" aria-hidden="true" />
          <div className="contact-web contact-web-top" aria-hidden="true" />
          <div className="contact-web contact-web-bottom" aria-hidden="true" />
          <div className="contact-shell section-shell">
            <p data-reveal>Available for serious builds and difficult product problems.</p>
            <h2 data-reveal>Let&apos;s make the<br />next system count.</h2>
            <a className="contact-cta" href={calendlyUrl} target="_blank" rel="noreferrer noopener" data-reveal>
              Schedule a call on Calendly <span aria-hidden="true">↗</span>
            </a>
            <div className="contact-bottom">
              <div className="social-links" aria-label="Social links">
                {socialLinks.map((link) => (
                  <a href={link.href} target="_blank" rel="noreferrer noopener" key={link.label}>{link.label} <span aria-hidden="true">↗</span></a>
                ))}
              </div>
              <p>© 2026 Trishit Swarnakar</p>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}
