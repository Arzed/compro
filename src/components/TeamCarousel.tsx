"use client"
import { useEffect, useRef, useState } from 'react'

interface Member {
  name: string
  role: string
  avatar: string
  linkedin?: string
}

const members: Member[] = [
  { name: 'Alex Chen', role: 'CTO', avatar: 'https://images.unsplash.com/photo-1603415526960-f7e0328ef23e?q=80&w=800&auto=format&fit=crop', linkedin: '#' },
  { name: 'Maya Singh', role: 'Design Lead', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop', linkedin: '#' },
  { name: 'Daniel Kim', role: 'Staff Engineer', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop', linkedin: '#' },
  { name: 'Sara Lopez', role: 'PM', avatar: 'https://images.unsplash.com/photo-1548142813-c348350df52b?q=80&w=800&auto=format&fit=crop', linkedin: '#' },
  { name: 'Ethan Park', role: 'AI Engineer', avatar: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=800&auto=format&fit=crop', linkedin: '#' },
  { name: 'Nina Roark', role: 'QA Lead', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop', linkedin: '#' },
  { name: 'Liam Brooks', role: 'DevOps', avatar: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=800&auto=format&fit=crop', linkedin: '#' },
  { name: 'Aisha Khan', role: 'Product', avatar: 'https://images.unsplash.com/photo-1548142813-c348350df52b?q=80&w=800&auto=format&fit=crop', linkedin: '#' },
]

export default function TeamCarousel() {
  const ref = useRef<HTMLDivElement>(null)
  const [centerIndex, setCenterIndex] = useState(2)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const interval = setInterval(() => {
      setCenterIndex((i) => (i + 1) % members.length)
      el.scrollBy({ left: 260, behavior: 'smooth' })
    }, 3500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="overflow-hidden">
      <div ref={ref} className="flex gap-6 overflow-x-auto no-scrollbar py-2" style={{ scrollSnapType: 'x mandatory' }}>
        {members.map((m, idx) => {
          const isCenter = idx === centerIndex
          return (
            <div
              key={m.name}
              className="flex-none w-56 scroll-snap-align-start text-center"
              style={{ transform: `scale(${isCenter ? 1.5 : 1})`, transition: 'transform 400ms ease' }}
            >
              <div className="relative">
                <img src={m.avatar} alt={m.name} className="h-32 w-32 rounded-full object-cover mx-auto border-4 border-white shadow-soft" />
                <a href={m.linkedin} aria-label="LinkedIn" className="absolute right-6 bottom-0 h-8 w-8 rounded-full bg-brand-600 text-white grid place-items-center shadow-soft">in</a>
              </div>
              <div className="mt-3">
                <p className="font-semibold">{m.name}</p>
                <p className="text-sm text-neutral-600">{m.role}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}