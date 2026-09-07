type ArrowDirection = 'up-right' | 'down-right' | 'down' | 'left' | 'right'

export function ArrowIcon({ direction = 'up-right' }: { direction?: ArrowDirection }) {
  return <svg className={`interface-icon arrow-${direction}`} viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 19 19 5M5 5h14v14" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg>
}

export function CapabilityIcon({ kind }: { kind: string }) {
  return <svg className="interface-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true"><g stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
    {kind === '01' ? <path d="m8 6-6 6 6 6m8-12 6 6-6 6m-3-15-2 18" /> : kind === '02' ? <><path d="m12 3 8 5v8l-8 5-8-5V8Zm0 0v18M4 8l8 5 8-5" /><circle cx="12" cy="13" r="2" /></> : kind === '03' ? <><ellipse cx="12" cy="5" rx="8" ry="3" /><path d="M4 5v14c0 4 16 4 16 0V5M4 12c0 4 16 4 16 0" /></> : <><path d="M3 19h18M5 15l5-5 4 2 6-8m-6 0h6v6" /></>}
  </g></svg>
}
