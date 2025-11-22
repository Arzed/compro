import Hero3D from '../components/Hero3D'
import SectionHeader from '../components/SectionHeader'
import Reveal from '../components/Reveal'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'
import { Code2, Palette, Cpu, Smartphone, Cloud, Layers, Sparkles, ShieldCheck } from 'lucide-react'


export default function Home() {
  return (
    <div>
      <Hero3D />

      <section className="container-xl py-16">
        <SectionHeader title="Expertise" subtitle="Full-stack capabilities with robust delivery" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: 'Product Engineering', icon: <Code2 size={22} />, desc: 'Kami membangun aplikasi cloud-native dengan arsitektur modular, kualitas kode terjaga, observabilitas, dan praktik keamanan sejak desain.' },
            { title: 'UI/UX Design', icon: <Palette size={22} />, desc: 'Antarmuka bersih, aksesibel, tipografi kuat, dan interaksi bermakna yang mendorong outcome bisnis.' },
            { title: 'AI & Data', icon: <Cpu size={22} />, desc: 'Penerapan ML yang pragmatis, pipeline data yang andal, dan MLOps untuk siklus model yang sehat.' },
            { title: 'Mobile', icon: <Smartphone size={22} />, desc: 'Aplikasi native dan cross-platform dengan performa tinggi, standar platform, dan pengalaman halus.' },
            { title: 'Cloud & DevOps', icon: <Cloud size={22} />, desc: 'Infrastruktur sebagai kode, monitoring/alerting, CI/CD tersusun rapi, serta SRE untuk reliabilitas.' },
            { title: 'Consulting', icon: <Layers size={22} />, desc: 'Review arsitektur, audit keamanan, dan strategi platform untuk skalabilitas jangka panjang.' },
          ].map((e, i) => (
            <Reveal key={e.title} delay={i * 80}>
              <div className="rounded-2xl p-6 border border-neutral-200 bg-white shadow-soft">
                <div className="h-12 w-12 rounded-xl bg-brand-50 flex items-center justify-center text-brand-600 mb-4">{e.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{e.title}</h3>
                <p className="text-neutral-600">{e.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-xl py-16">
        <SectionHeader title="Featured Work" subtitle="Selected projects delivered with precision" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.slice(0, 3).map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <ProjectCard title={p.title} image={p.image} tags={p.tags} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-xl py-16">
        <SectionHeader title="Why choose us" subtitle="Trusted by teams that value quality" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: 'Premium Design', icon: <Sparkles size={22} />, desc: 'Visual elegan dengan tata letak seimbang dan interaksi halus yang meningkatkan trust dan kredibilitas brand.' },
            { title: 'Engineering Excellence', icon: <Code2 size={22} />, desc: 'Codebase type-safe, pengujian menyeluruh, dan pipeline CI/CD disiplin untuk delivery yang dapat diprediksi.' },
            { title: 'Security First', icon: <ShieldCheck size={22} />, desc: 'Praktik keamanan default, review berkala, dan perlindungan data sebagai prioritas di setiap fase.' },
          ].map((e, i) => (
            <Reveal key={e.title} delay={i * 80}>
              <div className="rounded-2xl p-6 border border-neutral-200 bg-white shadow-soft">
                <div className="h-12 w-12 rounded-xl bg-brand-50 flex items-center justify-center text-brand-600 mb-4">{e.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{e.title}</h3>
                <p className="text-neutral-600">{e.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-xl py-16">
        <SectionHeader title="Clients" subtitle="Trusted by leading enterprises and startups" />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {['Helios', 'NorthPeak', 'Finova', 'Cloudia', 'Volt Labs', 'Orion'].map((c, i) => (
            <Reveal key={c} delay={i * 50}>
              <div className="rounded-xl border border-neutral-200 bg-white shadow-soft px-4 py-3 text-center text-neutral-700 font-semibold">
                {c}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-xl py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: 'Years', value: '8+' },
            { label: 'Projects', value: '120+' },
            { label: 'NPS', value: '72' },
            { label: 'Uptime', value: '99.95%' },
          ].map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <div className="rounded-2xl p-6 border border-neutral-200 bg-white shadow-soft text-center">
                <p className="text-4xl font-extrabold mb-2">{s.value}</p>
                <p className="text-neutral-600">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-xl py-16">
        <SectionHeader title="Testimonials" subtitle="What our clients say" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              quote: 'AuroraSoft shipped our platform ahead of schedule with exceptional quality.',
              name: 'Elena Wright, VP Eng — Helios',
            },
            {
              quote: 'Their design discipline and engineering rigor are second to none.',
              name: 'Marcus Lee, CEO — NorthPeak',
            },
            {
              quote: 'Security-first mindset and flawless delivery. Highly recommended.',
              name: 'Priya Patel, CIO — Finova',
            },
          ].map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <div className="rounded-2xl p-6 border border-neutral-200 bg-white shadow-soft">
                <p className="text-neutral-900 text-lg mb-4">“{t.quote}”</p>
                <p className="text-sm text-neutral-600">{t.name}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  )
}