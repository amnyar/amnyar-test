'use client'
import { useEffect, useRef } from 'react'

export default function CursorTrail() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const ctx = el.getContext('2d')!
    let dpr = Math.max(1, window.devicePixelRatio || 1)
    let W = 0, H = 0

    let x = -100, y = -100
    let f1x = x, f1y = y
    let f2x = x, f2y = y
    let raf = 0

    const allow =
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches &&
      window.innerWidth >= 768

    const resize = () => {
      W = el.clientWidth
      H = el.clientHeight
      el.width = Math.floor(W * dpr)
      el.height = Math.floor(H * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t

    const step = () => {
      ctx.clearRect(0, 0, W, H)

      f1x = lerp(f1x, x, 0.18)
      f1y = lerp(f1y, y, 0.18)
      f2x = lerp(f2x, x, 0.10)
      f2y = lerp(f2y, y, 0.10)

      const pushAway = (fx: number, fy: number, min: number) => {
        const dx = x - fx
        const dy = y - fy
        const dist = Math.hypot(dx, dy) || 1
        if (dist < min) {
          const ux = dx / dist
          const uy = dy / dist
          fx = x - ux * min
          fy = y - uy * min
        }
        return [fx, fy] as const
      }

      ;[f1x, f1y] = pushAway(f1x, f1y, 14)
      ;[f2x, f2y] = pushAway(f2x, f2y, 28)

      ctx.lineWidth = 2
      ctx.strokeStyle = '#1e40af'

      ctx.globalAlpha = 0.9
      ctx.beginPath()
      ctx.arc(f1x, f1y, 12, 0, Math.PI * 2)
      ctx.stroke()

      ctx.globalAlpha = 0.35
      ctx.beginPath()
      ctx.arc(f2x, f2y, 24, 0, Math.PI * 2)
      ctx.stroke()

      ctx.globalAlpha = 1
      ctx.fillStyle = '#1e40af'
      ctx.beginPath()
      ctx.arc(x, y, 3, 0, Math.PI * 2)
      ctx.fill()

      raf = requestAnimationFrame(step)
    }

    const onMove = (e: MouseEvent) => { x = e.clientX; y = e.clientY }
    const onLeave = () => { x = -100; y = -100 }

    resize()
    window.addEventListener('resize', resize)
    if (allow) {
      window.addEventListener('mousemove', onMove)
      window.addEventListener('mouseleave', onLeave)
      raf = requestAnimationFrame(step)
    } else {
      el.style.display = 'none'
    }

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseleave', onLeave)
      cancelAnimationFrame(raf)
    }
  }, [])

  return <canvas ref={ref} className="cursor-trail" />
}
