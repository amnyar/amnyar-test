'use client'

import { useEffect, useRef, useState } from 'react'

export default function CursorTrail() {
  const ref = useRef<HTMLCanvasElement>(null)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const mqDesktop = window.matchMedia('(min-width: 1024px)')
    const mqPointer = window.matchMedia('(pointer: fine)')
    const mqHover = window.matchMedia('(hover: hover)')
    const mqReduce = window.matchMedia('(prefers-reduced-motion: reduce)')

    const update = () => {
      setEnabled(mqDesktop.matches && mqPointer.matches && mqHover.matches && !mqReduce.matches)
    }
    update()

    const add = (mq: MediaQueryList) => {
      const fn = update as EventListener

      if (mq.addEventListener) { mq.addEventListener('change', fn); return () => mq.removeEventListener('change', fn) }

      mq.addListener(fn); return () => mq.removeListener(fn)
    }

    const off = [add(mqDesktop), add(mqPointer), add(mqHover), add(mqReduce)]
    return () => { off.forEach(fn => fn()) }
  }, [])

  useEffect(() => {
    if (!enabled) return
    const c = ref.current
    if (!c) return
    const ctx = c.getContext('2d')!
    let dpr = window.devicePixelRatio || 1
    let w = 0, h = 0
    const parts: { x: number; y: number; vx: number; vy: number; r: number; a: number }[] = []
    let anim = 0, mx = 0, my = 0, moved = false

    const resize = () => {
      w = c.clientWidth; h = c.clientHeight
      c.width = Math.floor(w * dpr); c.height = Math.floor(h * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    const emit = (x: number, y: number, n = 6) => {
      for (let i = 0; i < n; i++) {
        const a = Math.random() * Math.PI * 2
        const s = 1.2 + Math.random() * 1.8
        parts.push({ x, y, vx: Math.cos(a) * s, vy: Math.sin(a) * s, r: 2.5 + Math.random() * 5, a: 1 })
      }
    }
    const step = () => {
      if (!moved) emit(mx, my, 2)
      moved = false
      ctx.clearRect(0, 0, w, h)
      for (let i = parts.length - 1; i >= 0; i--) {
        const p = parts[i]
        p.x += p.vx; p.y += p.vy
        p.vx *= 0.98; p.vy *= 0.98
        p.a -= 0.012
        if (p.a <= 0) { parts.splice(i, 1); continue }
        ctx.globalAlpha = p.a
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fillStyle = '#1e40af54'; ctx.fill()
      }
      ctx.globalAlpha = 1
      anim = requestAnimationFrame(step)
    }
    const onMove = (e: MouseEvent) => { mx = e.clientX; my = e.clientY; moved = true; emit(mx, my) }

    resize()
    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', onMove)
    anim = requestAnimationFrame(step)

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(anim)
    }
  }, [enabled])

  if (!enabled) return null
  return <canvas ref={ref} className="cursor-trail" />
}
