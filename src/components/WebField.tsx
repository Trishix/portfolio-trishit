'use client'

import { useEffect, useRef } from 'react'

/** A small GPU line mesh. Pointer forces displace its nodes and springs restore them. */
export default function WebField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const gl = canvas.getContext('webgl', { alpha: true, antialias: true, powerPreference: 'low-power' })
    if (!gl) return
    const shader = (type: number, source: string) => {
      const value = gl.createShader(type)!
      gl.shaderSource(value, source)
      gl.compileShader(value)
      return value
    }
    const vertex = shader(gl.VERTEX_SHADER, 'attribute vec2 p; void main(){gl_Position=vec4(p,0.0,1.0);}')
    const fragment = shader(gl.FRAGMENT_SHADER, 'precision mediump float; void main(){gl_FragColor=vec4(0.136,0.066,0.066,0.20);}')
    const program = gl.createProgram()!
    gl.attachShader(program, vertex); gl.attachShader(program, fragment); gl.linkProgram(program)
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return
    gl.useProgram(program)
    const buffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
    const position = gl.getAttribLocation(program, 'p')
    gl.enableVertexAttribArray(position); gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0)
    const spokes = 18, rings = 11
    const nodes = Array.from({ length: spokes * rings }, (_, index) => {
      const angle = index % spokes / spokes * Math.PI * 2
      const radius = (Math.floor(index / spokes) + 1) / rings * 1.8
      const x = 0.56 + Math.cos(angle) * radius, y = 0.23 + Math.sin(angle) * radius
      return { x, y, bx: x, by: y, vx: 0, vy: 0 }
    })
    const edges: number[] = []
    nodes.forEach((_, i) => {
      edges.push(i, Math.floor(i / spokes) * spokes + (i + 1) % spokes)
      if (i >= spokes) edges.push(i, i - spokes)
    })
    const positions = new Float32Array(edges.length * 2)
    const pointer = { x: 4, y: 4 }
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce), (pointer: coarse)')
    let frame = 0, visible = true, active = true, last = 0
    const draw = (time: number) => {
      frame = 0
      if (!active || !visible || document.hidden) return
      if (time - last >= 30 || reduced.matches) {
        last = time
        nodes.forEach(n => {
          const dx = n.x - pointer.x, dy = n.y - pointer.y
          const distance = Math.hypot(dx, dy)
          const force = !reduced.matches && distance < 0.35 ? (0.35 - distance) * 0.012 : 0
          n.vx = (n.vx + (n.bx - n.x) * 0.035 + dx * force) * 0.86
          n.vy = (n.vy + (n.by - n.y) * 0.035 + dy * force) * 0.86
          n.x += n.vx; n.y += n.vy
        })
        edges.forEach((n, i) => { positions[i * 2] = nodes[n].x; positions[i * 2 + 1] = nodes[n].y })
        gl.clear(gl.COLOR_BUFFER_BIT)
        gl.bufferData(gl.ARRAY_BUFFER, positions, gl.DYNAMIC_DRAW)
        gl.drawArrays(gl.LINES, 0, edges.length)
      }
      if (!reduced.matches) frame = requestAnimationFrame(draw)
    }
    const start = () => { if (!frame && active && visible && !document.hidden) frame = requestAnimationFrame(draw) }
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, 1.5)
      canvas.width = canvas.clientWidth * dpr; canvas.height = canvas.clientHeight * dpr
      gl.viewport(0, 0, canvas.width, canvas.height); start()
    }
    const move = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect()
      pointer.x = (e.clientX - rect.left) / rect.width * 2 - 1
      pointer.y = 1 - (e.clientY - rect.top) / rect.height * 2
    }
    const leave = () => { pointer.x = 4; pointer.y = 4 }
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; start() })
    observer.observe(canvas)
    const resizer = new ResizeObserver(resize); resizer.observe(canvas)
    const parent = canvas.parentElement!
    parent.addEventListener('pointermove', move); parent.addEventListener('pointerleave', leave)
    document.addEventListener('visibilitychange', start); reduced.addEventListener('change', start)
    resize()
    return () => {
      active = false; cancelAnimationFrame(frame); observer.disconnect(); resizer.disconnect()
      parent.removeEventListener('pointermove', move); parent.removeEventListener('pointerleave', leave)
      document.removeEventListener('visibilitychange', start); reduced.removeEventListener('change', start)
      gl.deleteBuffer(buffer); gl.deleteProgram(program); gl.deleteShader(vertex); gl.deleteShader(fragment)
    }
  }, [])
  return <canvas ref={canvasRef} className="web-field" aria-hidden="true" />
}
