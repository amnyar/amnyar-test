'use client'
import { useEffect, useRef, ReactNode } from 'react'
export default function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add('opacity-100','translate-y-0'); io.disconnect() } }, { threshold: 0.2 })
    el.classList.add('opacity-0','translate-y-6')
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return <div ref={ref} className={`transform transition duration-700 ${className}`}>{children}</div>
}
