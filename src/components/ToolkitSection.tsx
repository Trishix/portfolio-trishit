export default function ToolkitSection() {
  return (
    <section className="bg-surface px-4 py-20 sm:px-8 md:px-12 lg:px-16 md:py-32" id="toolkit">
      <div className="mx-auto max-w-screen-2xl">
        {/* Section Header */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-end gap-8 border-b-2 border-on-background pb-8">
          <h2 className="font-headline text-[clamp(2.5rem,8vw,5rem)] font-black uppercase leading-none tracking-tighter text-on-surface">
            Skills &amp;<br />Tools.
          </h2>
          <p className="font-body text-base font-medium max-w-sm text-on-surface-variant md:text-right">
            The core technologies and concepts I use daily across AI, web development, and data visualization.
          </p>
        </div>

        {/* Toolkit Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
          
          {/* AI & ML */}
          <div className="flex flex-col space-y-8">
            <h4 className="font-headline text-2xl font-bold uppercase tracking-widest text-on-surface border-b border-on-background pb-4">
              AI &amp; ML
            </h4>
            <div className="flex flex-col space-y-4">
              <div className="flex justify-between items-center group cursor-default">
                <span className="font-headline text-lg font-bold text-on-surface group-hover:text-on-surface-variant transition-colors">Agents &amp; LLMs</span>
                <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant">Active</span>
              </div>
              <div className="flex justify-between items-center group cursor-default">
                <span className="font-headline text-lg font-bold text-on-surface group-hover:text-on-surface-variant transition-colors">Preprocessing</span>
                <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant">Frequent</span>
              </div>
              <div className="flex justify-between items-center group cursor-default">
                <span className="font-headline text-lg font-bold text-on-surface group-hover:text-on-surface-variant transition-colors">Machine Learning</span>
                <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant">Regular</span>
              </div>
              <div className="flex justify-between items-center group cursor-default">
                <span className="font-headline text-lg font-bold text-on-surface group-hover:text-on-surface-variant transition-colors">Deep Learning</span>
                <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant">Working</span>
              </div>
              <div className="flex justify-between items-center group cursor-default">
                <span className="font-headline text-lg font-bold text-on-surface group-hover:text-on-surface-variant transition-colors">Neural Networks</span>
                <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant">Working</span>
              </div>
            </div>
          </div>

          {/* Core Development */}
          <div className="flex flex-col space-y-8">
            <h4 className="font-headline text-2xl font-bold uppercase tracking-widest text-on-surface border-b border-on-background pb-4">
              Development
            </h4>
            <div className="flex flex-col space-y-4">
              <div className="flex justify-between items-center group cursor-default">
                <span className="font-headline text-lg font-bold text-on-surface group-hover:text-on-surface-variant transition-colors">Backend</span>
                <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant">Daily</span>
              </div>
              <div className="flex justify-between items-center group cursor-default">
                <span className="font-headline text-lg font-bold text-on-surface group-hover:text-on-surface-variant transition-colors">Frontend</span>
                <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant">Daily</span>
              </div>
              <div className="flex justify-between items-center group cursor-default">
                <span className="font-headline text-lg font-bold text-on-surface group-hover:text-on-surface-variant transition-colors">DBMS</span>
                <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant">Frequent</span>
              </div>
              <div className="flex justify-between items-center group cursor-default">
                <span className="font-headline text-lg font-bold text-on-surface group-hover:text-on-surface-variant transition-colors">OOPs</span>
                <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant">Frequent</span>
              </div>
              <div className="flex justify-between items-center group cursor-default">
                <span className="font-headline text-lg font-bold text-on-surface group-hover:text-on-surface-variant transition-colors">LLD</span>
                <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant">Frequent</span>
              </div>
            </div>
          </div>

          {/* DevOps & Analytics */}
          <div className="flex flex-col space-y-8">
            <h4 className="font-headline text-2xl font-bold uppercase tracking-widest text-on-surface border-b border-on-background pb-4">
              Analytics &amp; DevOps
            </h4>
            <div className="flex flex-col space-y-4">
              <div className="flex justify-between items-center group cursor-default">
                <span className="font-headline text-lg font-bold text-on-surface group-hover:text-on-surface-variant transition-colors">Tableau</span>
                <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant">Frequent</span>
              </div>
              <div className="flex justify-between items-center group cursor-default">
                <span className="font-headline text-lg font-bold text-on-surface group-hover:text-on-surface-variant transition-colors">Excel Dashboards</span>
                <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant">Frequent</span>
              </div>
              <div className="flex justify-between items-center group cursor-default">
                <span className="font-headline text-lg font-bold text-on-surface group-hover:text-on-surface-variant transition-colors">GitHub Actions</span>
                <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant">Active</span>
              </div>
              <div className="flex justify-between items-center group cursor-default">
                <span className="font-headline text-lg font-bold text-on-surface group-hover:text-on-surface-variant transition-colors">Finance Ops</span>
                <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant">Working</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
