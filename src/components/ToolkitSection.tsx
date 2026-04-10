export default function ToolkitSection() {
  return (
    <section className="scroll-mt-24 bg-surface-container-low px-4 py-12 sm:py-14 md:px-8 md:py-20 lg:min-h-screen lg:flex lg:items-center" id="toolkit">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-10 flex flex-col justify-between gap-6 md:mb-12 md:flex-row md:items-end md:gap-8">
          <div className="max-w-xl">
            <span className="mb-3 block font-label text-xs uppercase tracking-[0.1em] text-on-surface-variant">The Toolkit</span>
            <h2 className="section-heading font-headline text-3xl font-bold tracking-tight md:text-4xl">Skills &amp; Tools</h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-on-surface-variant">
            Tools I use in day-to-day work across AI, web development, data visualization, and finance coursework. Labels show usage frequency, not test scores.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-3 lg:gap-6">
          {/* AI & Machine Learning */}
          <div className="h-full rounded-xl bg-surface-container-lowest p-6 shadow-sm md:p-8">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">psychology</span>
              <h3 className="font-headline text-lg font-bold md:text-xl">AI &amp; ML</h3>
            </div>
            <div className="mt-6 space-y-4 md:space-y-5">
              <div className="space-y-1.5">
                <div className="flex justify-between gap-2 text-sm font-medium max-[420px]:flex-col max-[420px]:items-start">
                  <span>Preprocessing</span>
                  <span className="text-on-surface-variant">Frequent</span>
                </div>
                <div className="h-1.5 w-full bg-surface-variant rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[90%]"></div>
                </div>
              </div>
              <div className="space-y-1.5">
                <div className="flex justify-between gap-2 text-sm font-medium max-[420px]:flex-col max-[420px]:items-start">
                  <span>ML</span>
                  <span className="text-on-surface-variant">Regular</span>
                </div>
                <div className="h-1.5 w-full bg-surface-variant rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[60%]"></div>
                </div>
              </div>
              <div className="space-y-1.5">
                <div className="flex justify-between gap-2 text-sm font-medium max-[420px]:flex-col max-[420px]:items-start">
                  <span>DL</span>
                  <span className="text-on-surface-variant">Working Knowledge</span>
                </div>
                <div className="h-1.5 w-full bg-surface-variant rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[40%]"></div>
                </div>
              </div>
              <div className="space-y-1.5">
                <div className="flex justify-between gap-2 text-sm font-medium max-[420px]:flex-col max-[420px]:items-start">
                  <span>Neural Networks</span>
                  <span className="text-on-surface-variant">Working Knowledge</span>
                </div>
                <div className="h-1.5 w-full bg-surface-variant rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[40%]"></div>
                </div>
              </div>
              <div className="space-y-1.5">
                <div className="flex justify-between gap-2 text-sm font-medium max-[420px]:flex-col max-[420px]:items-start">
                  <span>Agents &amp; LLMs</span>
                  <span className="text-on-surface-variant">Active Use</span>
                </div>
                <div className="h-1.5 w-full bg-surface-variant rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[80%]"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Core Development */}
          <div className="h-full rounded-xl bg-surface-container-lowest p-6 shadow-sm md:p-8">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">code</span>
              <h3 className="font-headline text-lg font-bold md:text-xl">Core Development</h3>
            </div>
            <div className="mt-6 space-y-4 md:space-y-5">
              <div className="space-y-1.5">
                <div className="flex justify-between gap-2 text-sm font-medium max-[420px]:flex-col max-[420px]:items-start">
                  <span>Backend</span>
                  <span className="text-on-surface-variant">Daily</span>
                </div>
                <div className="h-1.5 w-full bg-surface-variant rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[95%]"></div>
                </div>
              </div>
              <div className="space-y-1.5">
                <div className="flex justify-between gap-2 text-sm font-medium max-[420px]:flex-col max-[420px]:items-start">
                  <span>Frontend</span>
                  <span className="text-on-surface-variant">Daily</span>
                </div>
                <div className="h-1.5 w-full bg-surface-variant rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[92%]"></div>
                </div>
              </div>
              <div className="space-y-1.5">
                <div className="flex justify-between gap-2 text-sm font-medium max-[420px]:flex-col max-[420px]:items-start">
                  <span>DBMS</span>
                  <span className="text-on-surface-variant">Frequent</span>
                </div>
                <div className="h-1.5 w-full bg-surface-variant rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[88%]"></div>
                </div>
              </div>
              <div className="space-y-1.5">
                <div className="flex justify-between gap-2 text-sm font-medium max-[420px]:flex-col max-[420px]:items-start">
                  <span>LLD</span>
                  <span className="text-on-surface-variant">Frequent</span>
                </div>
                <div className="h-1.5 w-full bg-surface-variant rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[85%]"></div>
                </div>
              </div>
              <div className="space-y-1.5">
                <div className="flex justify-between gap-2 text-sm font-medium max-[420px]:flex-col max-[420px]:items-start">
                  <span>OOPs</span>
                  <span className="text-on-surface-variant">Frequent</span>
                </div>
                <div className="h-1.5 w-full bg-surface-variant rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[90%]"></div>
                </div>
              </div>
              <div className="space-y-1.5">
                <div className="flex justify-between gap-2 text-sm font-medium max-[420px]:flex-col max-[420px]:items-start">
                  <span>Design and Analysis of Algorithms</span>
                  <span className="text-on-surface-variant">Ongoing Practice</span>
                </div>
                <div className="h-1.5 w-full bg-surface-variant rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[80%]"></div>
                </div>
              </div>
            </div>
          </div>

          {/* DevOps, DVA & Finance */}
          <div className="h-full rounded-xl bg-surface-container-lowest p-6 shadow-sm md:p-8">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">terminal</span>
              <h3 className="font-headline text-lg font-bold md:text-xl">DevOps, Analytics &amp; Finance</h3>
            </div>
            <div className="mt-6 space-y-5">
              <div>
                <p className="text-sm font-semibold text-on-surface mb-3">DevOps</p>
                <ul className="space-y-3">
                  <li className="group flex items-start justify-between gap-2">
                    <span className="text-on-surface-variant font-medium">GitHub Actions</span>
                    <span className="h-2 w-2 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  </li>
                </ul>
              </div>
              <div className="border-t border-outline-variant/10 pt-4">
                <p className="text-sm font-semibold text-on-surface mb-3">Data Visualization</p>
                <ul className="space-y-3">
                  <li className="group flex items-start justify-between gap-2">
                    <span className="text-on-surface-variant font-medium">Tableau</span>
                    <span className="h-2 w-2 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  </li>
                  <li className="group flex items-start justify-between gap-2">
                    <span className="text-on-surface-variant font-medium">Excel Dashboards</span>
                    <span className="h-2 w-2 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  </li>
                  <li className="group flex items-start justify-between gap-2">
                    <span className="text-on-surface-variant font-medium">Pivot Tables</span>
                    <span className="h-2 w-2 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  </li>
                </ul>
              </div>
              <div className="border-t border-outline-variant/10 pt-4">
                <p className="text-sm font-semibold text-on-surface mb-3">Finance</p>
                <ul className="space-y-3">
                  <li className="group flex items-start justify-between gap-2">
                    <span className="text-on-surface-variant font-medium">Essentials of Finance</span>
                    <span className="h-2 w-2 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  </li>
                  <li className="group flex items-start justify-between gap-2">
                    <span className="text-on-surface-variant font-medium">Strategic Financial Management</span>
                    <span className="h-2 w-2 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
