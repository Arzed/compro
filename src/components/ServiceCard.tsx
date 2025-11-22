interface ServiceCardProps {
  title: string
  description: string
  icon: React.ReactNode
}

export default function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <div className="rounded-2xl p-6 bg-white border border-neutral-200 shadow-soft transition-transform hover:-translate-y-0.5">
      <div className="h-12 w-12 rounded-xl bg-brand-50 flex items-center justify-center text-brand-600 mb-4">
        {icon}
      </div>
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-neutral-600">{description}</p>
    </div>
  )
}