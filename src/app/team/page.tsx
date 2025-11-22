import SectionHeader from '../../components/SectionHeader'
import TeamCarousel from '../../components/TeamCarousel'
import Reveal from '../../components/Reveal'

export default function TeamPage() {
  return (
    <Reveal>
      <section className="container-xl py-16">
        <Reveal>
          <SectionHeader title="Team" subtitle="Experienced, diverse, and quality-obsessed" />
        </Reveal>
        <Reveal delay={60}>
          <TeamCarousel />
        </Reveal>
      </section>
    </Reveal>
  )
}