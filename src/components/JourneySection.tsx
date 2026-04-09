import Image from 'next/image';
import nstLogo from '../assets/nst.png';
import kcmsLogo from '../assets/kcms.jpeg';
import springdaleLogo from '../assets/springdale.jpeg';

export default function JourneySection() {
  return (
    <section className="scroll-mt-24 bg-surface px-4 py-16 md:px-8 md:py-20 lg:min-h-screen lg:flex lg:items-center" id="journey">
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
        {/* Left Column: Journey */}
        <div className="lg:col-span-4">
          <span className="mb-3 block font-label text-xs uppercase tracking-[0.1em] text-on-surface-variant">Professional &amp; Creative Path</span>
          <h2 className="mb-8 font-headline text-3xl font-bold tracking-tight md:text-4xl">The Journey</h2>
          <div className="space-y-7 md:space-y-8">
            <div>
              <h4 className="mb-1 font-headline text-lg font-bold md:text-xl">HPAIR Delegate</h4>
              <p className="mb-2 text-sm font-medium text-on-surface-variant">Harvard Project for Asian &amp; International Relations</p>
              <p className="text-sm leading-relaxed text-on-surface-variant">
                Selected to engage in global dialogue on international relations and technological progress.
              </p>
            </div>

            <div>
              <h4 className="mb-1 font-headline text-lg font-bold md:text-xl">Musician</h4>
              <p className="mb-2 text-sm font-medium text-on-surface-variant">Guitarist</p>
              <p className="text-sm leading-relaxed text-on-surface-variant">
                More than 10+ years of experience as a lead guitarist
              </p>
            </div>

            <div>
              <h4 className="mb-1 font-headline text-lg font-bold md:text-xl">
                Former VP of{' '}
                <a
                  className="text-primary transition-colors hover:underline"
                  href="https://www.linkedin.com/company/newtonbotics/"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  Robotics Club
                </a>
              </h4>
              <p className="mb-2 text-sm font-medium text-on-surface-variant">Newton School of Technology - RU</p>
              <p className="text-sm leading-relaxed text-on-surface-variant">
                Managed complex events and technical workshops while fostering a community of innovators.
              </p>
            </div>

            <div>
              <h4 className="mb-1 font-headline text-lg font-bold md:text-xl">
                Tech Team member at{' '}
                <a
                  className="text-primary transition-colors hover:underline"
                  href="https://sastclub.tech"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  sastclub.tech
                </a>
              </h4>
              <p className="text-sm leading-relaxed text-on-surface-variant">
                Building and supporting technical initiatives, product experiences, and community-facing solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Education */}
        <div className="lg:col-span-8">
          <span className="mb-3 block font-label text-xs uppercase tracking-[0.1em] text-on-surface-variant">Academic Foundation</span>
          <h2 className="mb-8 font-headline text-4xl font-bold tracking-tight text-primary md:text-5xl">Education</h2>
          <div className="space-y-5 md:space-y-6">
            {/* College */}
            <div className="rounded-2xl border border-outline-variant/10 bg-surface-container-lowest p-5 shadow-sm transition-shadow hover:shadow-md md:p-6">
              <div className="flex items-start gap-4 md:gap-6">
                <div className="relative hidden h-14 w-14 shrink-0 overflow-hidden rounded-lg bg-surface-container sm:block md:h-16 md:w-16">
                  <Image src={nstLogo} alt="Newton School of Technology" fill className="object-cover" />
                </div>
                <div>
                  <h4 className="font-headline text-xl font-extrabold md:text-2xl">B.Tech in CSAI</h4>
                  <p className="mt-2 text-sm font-bold text-on-surface-variant md:text-base">Newton School of Technology, Rishihood University</p>
                  <p className="mt-1 text-sm font-medium text-primary">Current Program</p>
                </div>
              </div>
            </div>

            {/* High School */}
            <div className="rounded-2xl border border-outline-variant/10 bg-surface-container-lowest p-5 shadow-sm transition-shadow hover:shadow-md md:p-6">
              <div className="flex items-start gap-4 md:gap-6">
                <div className="relative hidden h-14 w-14 shrink-0 overflow-hidden rounded-lg bg-surface-container sm:block md:h-16 md:w-16">
                  <Image src={kcmsLogo} alt="Kalyani Central Model School" fill className="object-cover" />
                </div>
                <div>
                  <h4 className="font-headline text-xl font-extrabold md:text-2xl">Higher Secondary</h4>
                  <p className="mt-2 text-sm font-bold text-on-surface-variant md:text-base">Kalyani Central Model School</p>
                  <p className="mt-1 text-sm font-medium text-primary">Completed</p>
                  <p className="mt-3 text-sm text-on-surface-variant">Physics, Mathematics, Chemistry, English, Biology, Commercial Arts</p>
                  <div className="mt-3 flex items-center">
                    <span className="rounded-full border border-primary/20 bg-surface-container-low px-3 py-1.5 text-xs font-bold text-primary-dim">
                      Grade: 84.4% CBSE
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Secondary School */}
            <div className="rounded-2xl border border-outline-variant/10 bg-surface-container-lowest p-5 shadow-sm transition-shadow hover:shadow-md md:p-6">
              <div className="flex items-start gap-4 md:gap-6">
                <div className="relative hidden h-14 w-14 shrink-0 overflow-hidden rounded-lg bg-surface-container sm:block md:h-16 md:w-16">
                  <Image src={springdaleLogo} alt="Springdale High School" fill className="object-cover" />
                </div>
                <div>
                  <h4 className="font-headline text-xl font-extrabold md:text-2xl">Secondary Education</h4>
                  <p className="mt-2 text-sm font-bold text-on-surface-variant md:text-base">Springdale High School</p>
                  <p className="mt-1 text-sm font-medium text-primary">Completed</p>
                  <p className="mt-3 text-sm text-on-surface-variant">Physical Science, Mathematics, Biology, Geography, History, English</p>
                  <div className="mt-3 flex items-center">
                    <span className="rounded-full border border-primary/20 bg-surface-container-low px-3 py-1.5 text-xs font-bold text-primary-dim">
                      Grade: 88% WBBSE
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}
