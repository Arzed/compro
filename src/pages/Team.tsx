import SectionHeader from '../components/SectionHeader'
import TeamCarousel from '../components/TeamCarousel'

export default function Team() {
  return (
    <section className="container-xl py-16">
      <SectionHeader title="Team" subtitle="Experienced, diverse, and quality-obsessed" />
      <TeamCarousel />
    </section>
  )
}