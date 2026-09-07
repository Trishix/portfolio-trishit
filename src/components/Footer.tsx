export default function Footer() {
  return (
    <footer className="w-full bg-surface border-t-2 border-on-background">
      <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-8 md:px-12 lg:px-16 md:py-24 space-y-16">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <h4 className="font-headline text-2xl font-bold text-on-surface-variant md:text-3xl">Interested in working with me?</h4>
            <h4 className="font-headline text-2xl font-black text-on-surface md:text-3xl max-w-lg">Let's build something useful. Together, we hold the power to design the world that we envision.</h4>
          </div>
          <div className="space-y-1 md:text-right">
            <p className="font-label text-sm font-semibold uppercase tracking-widest text-on-surface-variant">Based In</p>
            <p className="font-headline text-lg font-bold text-on-surface">Kalyani, West Bengal</p>
            <p className="font-body text-base text-on-surface">Remote from India.</p>
          </div>
        </div>

        {/* Middle Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-on-surface-variant/20 pt-16">
          <div className="space-y-4">
            <h5 className="font-label text-sm font-semibold uppercase tracking-widest text-on-surface-variant">Schedule a conversation</h5>
            <a href="https://calendly.com/trishitofficial/30min" target="_blank" rel="noreferrer noopener" className="group flex items-center gap-2 font-headline text-xl font-bold text-on-surface hover:text-on-surface-variant transition-colors">
               <span>Book a 30-minute call</span>
               <span className="material-symbols-outlined text-lg transition-transform group-hover:translate-x-1">arrow_forward</span>
            </a>
          </div>

          <div className="flex flex-col space-y-4 md:items-end">
            <h5 className="font-label text-sm font-semibold uppercase tracking-widest text-on-surface-variant">Socials</h5>
            <div className="flex flex-col gap-2 md:items-end">
              <a href="https://linkedin.com/in/trishit-swarnakar-b7350828a" target="_blank" rel="noreferrer noopener" className="font-headline text-lg font-bold text-on-surface hover:text-on-surface-variant transition-colors">↗ LinkedIn</a>
              <a href="https://github.com/Trishix" target="_blank" rel="noreferrer noopener" className="font-headline text-lg font-bold text-on-surface hover:text-on-surface-variant transition-colors">↗ GitHub</a>
              <a href="https://leetcode.com/trishix" target="_blank" rel="noreferrer noopener" className="font-headline text-lg font-bold text-on-surface hover:text-on-surface-variant transition-colors">↗ Leetcode</a>
              <a href="https://www.instagram.com/trishix/" target="_blank" rel="noreferrer noopener" className="font-headline text-lg font-bold text-on-surface hover:text-on-surface-variant transition-colors">↗ Instagram</a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-t border-on-surface-variant/20 pt-8 gap-4">
          <p className="font-body text-sm font-medium text-on-surface">Copyright © 2026 Trishit Swarnakar. All rights reserved.</p>
          <p className="font-body text-sm font-medium text-on-surface-variant">Design & Development by Trishit Swarnakar</p>
        </div>
      </div>
    </footer>
  )
}
