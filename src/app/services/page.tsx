import SectionHeader from '../../components/SectionHeader'
import ServiceCard from '../../components/ServiceCard'
import { HiOutlineCog, HiOutlineSparkles, HiOutlineShieldCheck } from 'react-icons/hi'
import { FiCloud, FiServer, FiSmartphone } from 'react-icons/fi'
import Reveal from '../../components/Reveal'

export default function ServicesPage() {
  return (
    <Reveal>
      <section className="container-xl py-16">
        <Reveal>
          <SectionHeader title="Services" subtitle="Minimal, focused, outcome-driven" />
        </Reveal>
        <Reveal delay={60}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { t: 'Engineering', d: 'TypeScript-first stacks, cloud-native deployments, and resilient systems.', i: <HiOutlineCog size={22} /> },
            { t: 'Design', d: 'Clean UI, accessible typography, and purposeful interactions.', i: <HiOutlineSparkles size={22} /> },
            { t: 'Security', d: 'Threat modeling, security reviews, and governance baked-in.', i: <HiOutlineShieldCheck size={22} /> },
            { t: 'Cloud & DevOps', d: 'IaC, observability, CI/CD pipelines, and SRE best practices.', i: <FiCloud size={22} /> },
            { t: 'Backend & Infra', d: 'Event-driven systems, APIs, and scalable infrastructure layers.', i: <FiServer size={22} /> },
            { t: 'Mobile Apps', d: 'Polished native and cross-platform experiences for iOS/Android.', i: <FiSmartphone size={22} /> },
          ].map((s, i) => (
            <Reveal key={s.t} delay={i * 80}>
              <ServiceCard title={s.t} description={s.d} icon={s.i} />
            </Reveal>
          ))}
          </div>
        </Reveal>
      </section>
    </Reveal>
  )
}