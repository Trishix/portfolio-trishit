'use client'

import { useState, useRef, type CSSProperties } from 'react'

type Group = { title: string; text: string; tools: string[] }
type Node = { id: string; label: string; x: number; y: number; group?: number; hub?: boolean; preview?: boolean; mobileX?: number; mobileY?: number }
const centers = [[21, 24], [49, 17], [77, 24], [82, 53], [74, 80], [45, 81], [20, 76], [15, 49]]
const titles = ['Full stack', 'AI & agents', 'Backend & data', 'Product', 'Computer science', 'Machine learning', 'Networks & cloud', 'Community']
const shortLabel = (label: string) => ({
  'Multi-model orchestration': 'Multi-model',
  'Agent-to-agent communication': 'Agent communication',
  'Model Context Protocol (MCP)': 'MCP',
  'Data structures and algorithms (DSA)': 'DSA',
  'Object-oriented programming': 'OOP',
  'Client–server networking': 'Client–server',
  'Peer-to-peer networking': 'Peer-to-peer',
}[label] ?? label)

export default function SkillsGraph({ groups }: { groups: Group[] }) {
  const rootRef = useRef<HTMLButtonElement>(null)
  const [selected, setSelected] = useState<number | null>(null)
  const [hovered, setHovered] = useState<string | null>(null)
  const [focused, setFocused] = useState<string | null>(null)
  const active = focused ?? hovered
  const group = selected === null ? null : groups[selected]
  const nodes: Node[] = [{ id: 'root', label: group ? titles[selected!] : 'How I build', x: 49, y: 49, hub: true }]
  const edges: [string, string][] = []

  if (group) {
    group.tools.forEach((tool, i) => {
      const angle = (i / group.tools.length) * Math.PI * 2 - Math.PI / 2
      nodes.push({ id: `tool-${i}`, label: shortLabel(tool), x: 49 + Math.cos(angle) * 37, y: 49 + Math.sin(angle) * 39, mobileX: i % 2 === 0 ? 19 : 81, mobileY: 8 + Math.floor(i / 2) * (80 / Math.max(1, Math.ceil(group.tools.length / 2) - 1)) })
      edges.push(['root', `tool-${i}`])
    })
  } else {
    groups.forEach((item, i) => {
      const [x, y] = centers[i]
      const id = `group-${i}`
      nodes.push({ id, label: titles[i], x, y, group: i, hub: true })
      edges.push(['root', id])
      item.tools.slice(0, 3).forEach((tool, j) => {
        const angle = Math.atan2(y - 49, x - 49) + (j - 1) * 1.15
        const toolId = `${id}-${j}`
        nodes.push({ id: toolId, label: shortLabel(tool), x: x + Math.cos(angle) * 10, y: y + Math.sin(angle) * 12, group: i, preview: true })
        edges.push([id, toolId])
      })
    })
    ;[[0, 2], [1, 5], [2, 6], [3, 7], [0, 3], [4, 6]].forEach(([a, b]) => edges.push([`group-${a}`, `group-${b}`]))
  }

  // Quantize trig coordinates so server and browser serialize identical attributes.
  nodes.forEach(node => { node.x = Math.round(node.x * 1000) / 1000; node.y = Math.round(node.y * 1000) / 1000 })

  const related = new Set([active])
  edges.forEach(([a, b]) => { if (a === active) related.add(b); if (b === active) related.add(a) })
  const selectGroup = (index: number | null) => { setSelected(index); setHovered(null); setFocused(null); requestAnimationFrame(() => rootRef.current?.focus({ preventScroll: true })) }

  return (
    <div className="skills-network section-shell" onKeyDown={event => { if (event.key === 'Escape') selectGroup(null) }}>
      <div className="skills-network-toolbar">
        <span>{group ? group.title : 'An interconnected toolkit'}</span>
        {group ? <button onClick={() => selectGroup(null)}>← All connections</button> : <span className="skills-network-hint">Select a field to explore</span>}
      </div>
      <div className={`skills-network-canvas${group ? ' is-expanded' : ''}`} role="group" aria-label={group ? `${group.title} tools` : 'Interactive map of skills and tools'}>
        {[false, true].map(mobile => <svg key={String(mobile)} viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true" className={`skills-network-lines${mobile ? ' is-mobile' : ' is-desktop'}`}>
          {edges.map(([a, b]) => {
            const from = nodes.find(node => node.id === a)!
            const to = nodes.find(node => node.id === b)!
            return <line key={`${a}-${b}`} x1={mobile ? from.mobileX ?? from.x : from.x} y1={mobile ? from.mobileY ?? from.y : from.y} x2={mobile ? to.mobileX ?? to.x : to.x} y2={mobile ? to.mobileY ?? to.y : to.y} className={`${from.preview || to.preview ? 'is-preview ' : ''}${active ? a === active || b === active ? 'is-active' : 'is-muted' : ''}`} />
          })}
        </svg>)}
        {nodes.map(node => (
          <button key={node.id} type="button" ref={node.id === 'root' ? rootRef : undefined}
            className={`skills-network-node${node.hub ? ' is-hub' : ''}${node.preview ? ' is-preview' : ''}${node.id === 'root' ? ' is-root' : ''}${active && !related.has(node.id) ? ' is-muted' : ''}${active === node.id ? ' is-active' : ''}`}
            style={{ '--node-x': `${node.x}%`, '--node-y': `${node.y}%`, '--mobile-x': `${node.mobileX ?? node.x}%`, '--mobile-y': `${node.mobileY ?? node.y}%` } as CSSProperties}
            aria-label={node.group !== undefined ? `Explore ${groups[node.group].title}: ${node.label}` : node.id === 'root' && group ? 'Return to all connections' : node.label}
            onPointerEnter={event => { if (event.pointerType !== 'touch') setHovered(node.id) }} onPointerLeave={() => setHovered(null)}
            onFocus={() => setFocused(node.id)} onBlur={() => setFocused(null)}
            onClick={() => { if (node.group !== undefined) selectGroup(node.group); else if (node.id === 'root') selectGroup(null); else setFocused(node.id) }}>
            <span className="skills-network-dot" aria-hidden="true" />
            <span className="skills-network-label">{node.label}</span>
          </button>
        ))}
      </div>
      <div className="skills-network-footer" aria-live="polite">
        <p>{group ? group.text : 'Interfaces, intelligence, and the systems that connect them.'}</p>
        <span>{group ? `${group.tools.length} tools & concepts` : `${groups.length} fields · ${groups.reduce((total, item) => total + item.tools.length, 0)} tools & concepts`}</span>
      </div>
    </div>
  )
}
