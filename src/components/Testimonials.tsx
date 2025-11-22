"use client"
import { useState } from 'react'
import Reveal from './Reveal'
import { ChevronLeft, ChevronRight } from 'lucide-react'

type Testimonial = {
  name: string
  role: string
  quote: string
  avatar: string
}

const data: Testimonial[] = [
  {
    name: 'Mike Torello',
    role: 'Executive Engineer',
    quote:
      'AuroraSoft shipped our platform ahead of schedule with exceptional quality. The collaboration was smooth and efficient.',
    avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=200&auto=format&fit=crop',
  },
  {
    name: 'Rick Wright',
    role: 'Executive Engineer',
    quote:
      'Their design discipline and engineering rigor are second to none. We trust them with our most critical initiatives.',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop',
  },
  {
    name: 'Devon Miles',
    role: 'Executive Engineer',
    quote:
      'Security-first mindset and flawless delivery. The team communicates clearly and delivers results consistently.',
    avatar: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=200&auto=format&fit=crop',
  },
  {
    name: 'Elena Wright',
    role: 'VP Engineering',
    quote:
      'They elevated our UX while strengthening reliability. A partner that blends taste with robust engineering.',
    avatar: 'https://images.unsplash.com/photo-1544005313-7b17f45d6a3a?q=80&w=200&auto=format&fit=crop',
  },
  {
    name: 'Marcus Lee',
    role: 'CEO',
    quote:
      'Outcome-focused and professional. The project stayed on track and exceeded our expectations on quality.',
    avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=200&auto=format&fit=crop',
  },
  {
    name: 'Priya Patel',
    role: 'CIO',
    quote:
      'Strong governance and security practices. They handle complexity gracefully and minimize operational risk.',
    avatar: 'https://images.unsplash.com/photo-1544005318-36ea8e3b88f7?q=80&w=200&auto=format&fit=crop',
  },
]

export default function Testimonials() {
  const [page, setPage] = useState(0)
  const pageSize = 3
  const totalPages = Math.ceil(data.length / pageSize)
  const start = page * pageSize
  const visible = data.slice(start, start + pageSize)

  return (
    <section className="container-xl py-16">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {visible.map((t, i) => (
          <Reveal key={t.name} delay={i * 80}>
            <div className="relative rounded-[22px] overflow-visible border border-neutral-200 text-black shadow-soft">
              <div className="absolute inset-0 opacity-30"  />
              <div className="relative p-6">
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 z-10 h-16 w-16 rounded-full ring-4 ring-brand-600/70 bg-black shadow-soft">
                  <img src={t.avatar} alt={t.name} className="h-full w-full object-cover rounded-full" />
                </div>
                <p className="mt-10 text-sm leading-relaxed text-neutral-700">
                  {t.quote}
                </p>
                <div className="mt-4">
                  <p className="font-semibold text-brand-700">{t.name}</p>
                  <p className="text-xs text-neutral-700">{t.role}</p>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          aria-label="Previous"
          onClick={() => setPage((p) => (p - 1 + totalPages) % totalPages)}
          className="h-10 w-10 px-2 rounded-full bg-white text-neutral-900 border border-neutral-200 shadow-soft hover:bg-neutral-100"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          aria-label="Next"
          onClick={() => setPage((p) => (p + 1) % totalPages)}
          className="h-10 w-10 px-2.5 rounded-full bg-white text-neutral-900 border border-neutral-200 shadow-soft hover:bg-neutral-100"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </section>
  )
}