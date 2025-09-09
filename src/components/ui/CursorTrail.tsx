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

    let x = -200, y = -200
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

      f1x = lerp(f1x, x, 0.12)
      f1y = lerp(f1y, y, 0.12)
      f2x = lerp(f2x, x, 0.06)
      f2y = lerp(f2y, y, 0.06)

      const push = (fx: number, fy: number, min: number) => {
        const dx = x - fx
        const dy = y - fy
        const d = Math.hypot(dx, dy) || 1
        if (d < min) {
          const ux = dx / d, uy = dy / d
          fx = x - ux * min
          fy = y - uy * min
        }
        return [fx, fy] as const
      }

      ;[f1x, f1y] = push(f1x, f1y, 24)
      ;[f2x, f2y] = push(f2x, f2y, 48)

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
    const onLeave = () => { x = -200; y = -200 }

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
