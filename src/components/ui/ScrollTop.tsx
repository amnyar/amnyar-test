'use client'
import { useEffect, useRef, useState } from 'react'

export default function ScrollTop() {
  const [show, setShow] = useState(false)
  const c = useRef<SVGCircleElement>(null)
  const R = 22
  const C = 2 * Math.PI * R

  useEffect(() => {
    const onScroll = () => {
      const st = window.scrollY
      const h = document.documentElement.scrollHeight - window.innerHeight
      setShow(st > 240)
      const p = h > 0 ? st / h : 0
      if (c.current) c.current.style.strokeDashoffset = String(C * (1 - p))
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      aria-label="بالا"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`scrolltop ${show ? 'visible' : ''}`}
    >
      <svg width="48" height="48" viewBox="0 0 48 48">
        <circle cx="24" cy="24" r={R} stroke="#f59e0b33" strokeWidth="4" fill="none" />
        <circle ref={c} cx="24" cy="24" r={R} stroke="#f59e0b" strokeWidth="4" fill="none" strokeDasharray={C} strokeDashoffset={C} />
      </svg>
      <span className="arrow">↑</span>
    </button>
  )
}
