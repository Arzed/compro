'use client'
import SectionHeader from '../../components/SectionHeader'
import ProjectCard from '../../components/ProjectCard'
import { projects, Category } from '../../data/projects'
import { useState } from 'react'

export default function WorkPage() {
  const [filter, setFilter] = useState<Category>('All')
  const filtered = filter === 'All' ? projects : projects.filter((p) => p.category === filter)
  const categories: Category[] = ['All', 'Web', 'Mobile', 'AI', 'Cloud']

  return (
    <section className="container-xl py-16">
      <div className="reveal">
        <SectionHeader title="Our Work" subtitle="A selection of recent projects" />
      </div>
        <div className="flex items-center gap-3 mb-8">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-3 py-1.5 rounded-lg border text-sm ${filter === c ? 'bg-neutral-900 text-white border-neutral-900' : 'border-neutral-300 text-neutral-700 hover:bg-neutral-50'}`}
            >
              {c}
            </button>
          ))}
        </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((p, i) => (
          <div key={p.title} className="reveal" data-reveal-delay={`${i * 80}`}>
            <ProjectCard title={p.title} image={p.image} tags={p.tags} />
          </div>
        ))}
      </div>
    </section>
  )
}