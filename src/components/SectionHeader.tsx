interface Props {
  title: string
  subtitle?: string
}

export default function SectionHeader({ title, subtitle }: Props) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-12">
      <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3 gradient-text">{title}</h2>
      {subtitle && <p className="text-neutral-600 text-lg">{subtitle}</p>}
    </div>
  )
}