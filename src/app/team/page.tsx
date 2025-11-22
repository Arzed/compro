import SectionHeader from '../../components/SectionHeader'
import TeamCarousel from '../../components/TeamCarousel'

export default function TeamPage() {
  return (
    <section className="container-xl py-16">
      <div className="reveal">
        <SectionHeader title="Team" subtitle="Experienced, diverse, and quality-obsessed" />
      </div>
      <div className="reveal" data-reveal-delay="60">
        <TeamCarousel />
      </div>
    </section>
  )
}