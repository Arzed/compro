interface ProjectCardProps {
  title: string
  image: string
  tags: string[]
}

export default function ProjectCard({ title, image, tags }: ProjectCardProps) {
  return (
    <div className="group rounded-xl overflow-hidden border border-neutral-200 bg-white shadow-soft">
      <div className="aspect-[16/10] overflow-hidden">
        <img src={image} alt={title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((t) => (
            <span key={t} className="px-2 py-1 text-xs rounded-full bg-neutral-100 text-neutral-700">{t}</span>
          ))}
        </div>
      </div>
    </div>
  )
}