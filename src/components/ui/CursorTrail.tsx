'use client'
import { useEffect, useRef } from 'react'

export default function CursorTrail() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!
    let dpr = window.devicePixelRatio || 1
    let w = 0, h = 0
    const particles: {x:number;y:number;vx:number;vy:number;r:number;a:number}[] = []
    let anim = 0
    const allow = !window.matchMedia('(prefers-reduced-motion: reduce)').matches && window.innerWidth >= 768

    const resize = () => {
      const s = getComputedStyle(canvas)
      const bw = window.innerWidth
      const bh = window.innerHeight
      canvas.style.width = bw + 'px'
      canvas.style.height = bh + 'px'
      w = bw; h = bh
      canvas.width = Math.floor(w * dpr)
      canvas.height = Math.floor(h * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    const add = (x:number, y:number) => {
      for (let i=0;i<4;i++){
        particles.push({ x, y, vx:(Math.random()-0.5)*0.8, vy:(Math.random()-0.5)*0.8, r:3+Math.random()*4, a:1 })
      }
    }
    const step = () => {
      ctx.clearRect(0,0,w,h)
      ctx.globalCompositeOperation = 'lighter'
      for (let i=particles.length-1;i>=0;i--){
        const p = particles[i]
        p.x += p.vx; p.y += p.vy; p.a -= 0.015
        if (p.a <= 0) { particles.splice(i,1); continue }
        ctx.globalAlpha = p.a
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI*2)
        ctx.fillStyle = '#1e40af'
        ctx.fill()
      }
      ctx.globalAlpha = 1
      anim = requestAnimationFrame(step)
    }
    const onMove = (e: MouseEvent) => add(e.clientX, e.clientY)

    resize()
    window.addEventListener('resize', resize)
    if (allow) {
      window.addEventListener('mousemove', onMove)
      anim = requestAnimationFrame(step)
    }

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(anim)
    }
  }, [])

  return <canvas ref={ref} className="cursor-trail" />
}
