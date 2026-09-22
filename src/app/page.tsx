import Image, { StaticImageData } from 'next/image'
import ActivityGallery from '@/components/ActivityGallery'
import SkillsGraph from '@/components/SkillsGraph'
import { ArrowIcon } from '@/components/InterfaceIcon'
import WebField from '@/components/WebField'
import SpiderMark from '@/components/SpiderMark'
import MotionController from '@/components/MotionController'
import TopNavBar from '@/components/TopNavBar'
import portraitImage from '@/assets/trishit-hero-cinematic.jpg'
import ryokuImage from '@/assets/ryoku.png'
import vflowImage from '@/assets/vflow.png'
import lldImage from '@/assets/lldpractice.png'
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
    description: 'Built document and web retrieval, model failover, and streamed tool calls for AI support, with live escalation queues and human handoff.',
    category: 'AI product',
    year: '2026',
    href: 'https://ryoku-iota.vercel.app/',
    image: ryokuImage,
    stack: ['Next.js', 'TypeScript', 'pgvector', 'PostgreSQL', 'Redis', 'Pusher', 'Vercel AI SDK'],
    span: 'wide',
    preview: 'contain-light',
  },
  {
    title: 'VFlow',
    description: 'Built a visual workflow engine with streaming, cancellation, and six model providers. Users connect nodes into reusable pipelines and supply their own API keys.',
    category: 'AI tooling',
    year: '2026',
    href: 'https://vflow-project.vercel.app/',
    image: vflowImage,
    stack: ['Next.js', 'TypeScript', 'React Flow', 'Vercel AI SDK', 'Zustand', 'Zod'],
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
    title: 'LLD Practice',
    description: 'Built guided design worksheets, generated UML, quiz scoring, and revision history. AI reviews check evidence against submitted fields before publishing feedback.',
    category: 'AI learning tool',
    year: '2026',
    href: 'https://github.com/Trishix/lldpractice',
    image: lldImage,
    stack: ['Next.js', 'TypeScript', 'Groq SDK', 'Zod', 'Zustand', 'Vitest', 'Playwright'],
    span: 'third',
    preview: 'contain-dark',
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
    detail: 'Computer Science and Artificial Intelligence; Minor in Finance',
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
    result: '87.0% WBBSE',
    image: springdaleImage,
  },
]

const beyond = [
  {
    period: 'Robotics',
    title: 'Technical Specialist, SAST',
    place: 'RIT Rover Innovation Team',
    detail: 'Built ESP32 and Arduino subsystems in embedded C/C++; contributed to teams competing at IIT Delhi, DTU, and SRM.',
  },
  {
    period: '2025',
    title: 'HPAIR Delegate',
    place: 'Harvard Project for Asian and International Relations',
    detail: 'Delegate at the Harvard and Asia HPAIR conferences.',
  },
  {
    period: '2024',
    title: 'Former Vice President',
    place: 'Robotics Club, Newton School of Technology',
    detail: 'Led CAD and robotics workshops, coordinated teams, and represented the club at Bharat Mandapam for Rishihood’s 10th Convocation.',
  },
  {
    period: '10+ years',
    title: 'Guitarist and Composer',
    place: 'Live performance and original music',
    detail: 'Lead guitarist with 10+ years of experience. Coordinated Damru’s Battle of Bands with 10 teams.',
  },
]

const experience = [
  {
    period: 'Jun – Sep 2026',
    title: 'LLM Research Engineer Intern',
    place: 'Aicoo · Remote, Oxford, United Kingdom',
    points: [
      'Built evaluation harnesses to test LLM behavior, prompt-injection defenses, and output guardrails.',
      'Prototyped retrieval and agent components; evaluated accuracy and robustness to guide implementation changes.',
      'Contributed to shared agent infrastructure and agent-to-agent decision-making.',
    ],
  },
]

const capabilities = [
  {
    title: 'Full-stack development',
    index: '01',
    text: 'I build web and mobile interfaces, connect APIs, and handle application state.',
    tools: ['TypeScript', 'JavaScript', 'React', 'Next.js', 'React Native', 'Tailwind CSS', 'GSAP', 'Zustand', 'Zod'],
  },
  {
    title: 'AI and agent systems',
    index: '02',
    text: 'I build retrieval pipelines and agent workflows, and evaluate model behavior with harnesses and guardrails.',
    tools: ['LLMs', 'RAG', 'Agentic AI', 'Multi-model orchestration', 'Agent-to-agent communication', 'Model Context Protocol (MCP)', 'Agent skills and plugins', 'AI / agent harnesses', 'LLM evaluations', 'Prompt engineering', 'Tool calling', 'Guardrails', 'Vercel AI SDK', 'LangChain', 'LangGraph'],
  },
  {
    title: 'Backend and data',
    index: '03',
    text: 'I implement APIs, authentication, vector retrieval, and real-time application features.',
    tools: ['Python', 'SQL', 'Node.js', 'Express.js', 'REST APIs', 'OAuth 2.0', 'PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'pgvector', 'Drizzle ORM'],
  },
  {
    title: 'Product development',
    index: '04',
    text: 'I use AI coding tools and documentation to learn unfamiliar stacks and turn rough ideas into working applications.',
    tools: ['Prototyping', 'Figma', 'Git', 'GitHub Actions', 'Jest', 'Vitest', 'Playwright', 'Swagger', 'n8n', 'Agile', 'Scrum', 'Deployment'],
  },
  {
    title: 'Computer science',
    index: '01',
    text: 'I apply computer science foundations to program structure, data flow, and system behavior.',
    tools: ['Data structures and algorithms (DSA)', 'Object-oriented programming', 'DBMS', 'Computer networks', 'System design', 'Concurrency', 'Real-time systems', 'Embedded C/C++'],
  },
  {
    title: 'Machine learning',
    index: '02',
    text: 'My studies cover machine learning, deep learning, natural language processing, and data analysis.',
    tools: ['Machine learning', 'Deep learning', 'NLP', 'TensorFlow', 'scikit-learn', 'Hugging Face', 'NumPy', 'Pandas', 'SciPy'],
  },
  {
    title: 'Networks and cloud',
    index: '03',
    text: 'Coursework and labs cover network protocols, cloud traffic routing, access controls, and service connectivity.',
    tools: ['TCP/IP', 'HTTP/HTTPS', 'TLS', 'Client–server networking', 'Peer-to-peer networking', 'AWS VPC', 'EC2', 'Security groups', 'Ports', 'Route tables', 'Gateways', 'Cloudflare Tunnel'],
  },
  {
    title: 'Community and business',
    index: '04',
    text: 'I co-founded a marketing agency, managed content for GoForGold and Life@Rishihood, and led student workshops and events.',
    tools: ['Content planning', 'Team coordination', 'Workshops', 'Event coordination'],
  },
]

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/Trishix' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/trishit-swarnakar' },
  { label: 'LeetCode', href: 'https://leetcode.com/u/trishix/' },
  { label: 'Instagram', href: 'https://www.instagram.com/trishix/' },
]

const calendlyUrl = 'https://calendly.com/trishitofficial/30min'

export default function Home() {
  const manifesto = 'I work across software, AI, and product. I turn ideas into applications people can use.'

  return (
    <>
      <MotionController />
      <a className="skip-link" href="#main-content">Skip to content</a>
      <TopNavBar />
      <div className="web-progress" aria-hidden="true"><span /></div>

      <main id="main-content">
        <section className="hero" id="home" aria-labelledby="hero-title">
          <WebField />
          <div className="hero-content section-shell">
            <h1 id="hero-title" data-hero-reveal><span>Trishit</span><span>Swarnakar<span className="name-period">.</span></span></h1>
            <div className="hero-intro" data-hero-reveal>
              <span className="hero-role">Your friendly neighbourhood<br /><strong>Full-stack & AI engineer.</strong></span>
              <p>I build full-stack applications, AI tools, and agent workflows, using code, AI assistants, and documentation.</p>
              <a className="primary-action" href="#work" data-magnetic>Explore my work <span><ArrowIcon direction="down-right" /></span></a>
            </div>
            <div className="hero-caption"><span>Delhi / Kalyani, India</span><span>Scroll to explore <ArrowIcon direction="down" /></span></div>
          </div>
          <div className="hero-media" data-hero-media>
            <Image alt="Trishit Swarnakar, photographed at night" src={portraitImage} fill priority quality={85} sizes="(max-width: 600px) 100vw, (max-width: 1100px) 51vw, (min-width: 1568px) 768px, 49vw" className="hero-media-image" />
          </div>
        </section>

        <div className="stack-marquee" aria-label="Core capabilities">
          <div>{['Frontend systems', 'Backend architecture', 'AI engineering', 'Product thinking', 'Interaction design', 'Open source', 'System design', 'Deployment'].map(item => <span key={item}>{item}</span>)}</div>
        </div>

        <section className="manifesto" id="profile">
          <div className="manifesto-shell section-shell">
            <div className="profile-signature" data-reveal><SpiderMark /><span>A little about<br />the person building.</span></div>
            <p className="manifesto-statement" data-manifesto>
              {manifesto.split(' ').map((word, index) => (
                <span className="manifesto-word" key={`${word}-${index}`}>{word}{' '}</span>
              ))}
            </p>
            <div className="manifesto-notes" data-reveal>
              <p>I’m a Computer Science and AI undergraduate at Newton School of Technology, Rishihood University, with a minor in Finance. My work spans product development, retrieval systems, LLM evaluations, and real-time collaboration.</p>
            </div>
          </div>
        </section>

        <section className="work" id="work" aria-labelledby="work-title">
          <div className="work-layout section-shell">
            <div className="work-title-rail">
              <h2 id="work-title">Selected<br /><span>work.</span></h2>
              <p className="work-years">2025 — 2026</p>
              <p>Product interfaces and AI systems built to work beyond the demo.</p>
              <a href="https://github.com/Trishix" target="_blank" rel="noreferrer noopener">More work on GitHub <span><ArrowIcon /></span></a>
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
                        <h3>{project.title}</h3>
                        <p>{project.category} / {project.year}</p>
                      </div>
                      <span className="project-open"><ArrowIcon /></span>
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
            <h2 id="capabilities-title">The tools.<br /><span>The thinking.</span></h2>
            <p>From interface to intelligence.<br />The skills behind the work.</p>
          </div>
          <SkillsGraph groups={capabilities} />
        </section>

        <section className="journey" id="experience" aria-labelledby="experience-title">
          <div className="journey-shell section-shell">
            <div className="chapter-heading" data-reveal>
              <h2 id="experience-title">Experience.</h2>
              <p>LLM evaluation, retrieval, and shared agent infrastructure.</p>
            </div>
            <div className="journey-list">
              {experience.map((item) => (
                <article className="journey-row" data-reveal key={item.title}>
                  <time>{item.period}</time>
                  <div><h3>{item.title}</h3><p>{item.place}</p></div>
                  <ul className="experience-points">
                    {item.points.map((point) => <li key={point}>{point}</li>)}
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

        <ActivityGallery />

        <footer className="contact" id="contact">
          <div className="contact-grid" aria-hidden="true" />
          <div className="contact-web contact-web-top" aria-hidden="true" />
          <div className="contact-web contact-web-bottom" aria-hidden="true" />
          <div className="contact-shell section-shell">
            <h2 data-reveal>Have something<br /><span>in mind?</span></h2>
            <p className="contact-intro" data-reveal>Let’s talk about your next build.<br /><a href="/trishit-swarnakar-resume.pdf" download>Download my resume <ArrowIcon /></a></p>
            <a className="contact-cta" href={calendlyUrl} target="_blank" rel="noreferrer noopener" data-reveal>
              Schedule a call <span><ArrowIcon /></span>
            </a>
            <div className="contact-bottom">
              <div className="social-links" aria-label="Social links">
                {socialLinks.map((link) => (
                  <a href={link.href} target="_blank" rel="noreferrer noopener" key={link.label}>{link.label} <span><ArrowIcon /></span></a>
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
