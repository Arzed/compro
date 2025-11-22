"use client"
import { useEffect, useRef, useState } from 'react'

interface Props {
  children: React.ReactNode
  delay?: number
  className?: string
}

export default function Reveal({ children, delay = 0, className = '' }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setInView(true)
          else setInView(false)
        })
      },
      { threshold: [0, 0.25], root: null, rootMargin: '0px 0px -10% 0px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div ref={ref} className={`reveal ${inView ? 'in-view' : ''} ${className}`} style={{ animationDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}