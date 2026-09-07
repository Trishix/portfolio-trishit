export default function SpiderMark({ className = '' }: { className?: string }) {
  return <svg className={className} viewBox="0 0 48 64" fill="none" aria-hidden="true">
    <path d="M24 22 19 29 21 44 24 53 27 44 29 29Z" fill="currentColor" />
    <path d="m21 27-9-9-2-14m13 26L8 24 3 13m19 22L8 34 2 45m21-6-10 6-3 15m17-33 9-9 2-14M25 30l15-6 5-11M26 35l14-1 6 11M25 39l10 6 3 15" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
  </svg>
}
