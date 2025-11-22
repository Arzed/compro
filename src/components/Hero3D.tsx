export default function Hero3D() {
  return (
    <section className="relative overflow-hidden">
      <div className="container-xl py-24 sm:py-32 soft-3d">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fadeInUp">
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight mb-6">
              Premium Software for Ambitious Teams
            </h1>
            <p className="text-neutral-600 text-lg mb-8">
              We design, build, and scale secure products with a refined, minimalist aesthetic.
            </p>
            <div className="flex items-center gap-4">
              <a href="/contact" className="px-6 py-3 rounded-xl bg-brand-600 text-white font-semibold shadow-soft">
                Start a project
              </a>
              <a href="/work" className="px-6 py-3 rounded-xl bg-neutral-100 text-neutral-900 font-semibold">
                View work
              </a>
            </div>
          </div>
          <div className="relative h-72 sm:h-96">
            <div className="hero-shape h-56 w-56 -left-10 top-6 animate-float" />
            <div className="hero-shape h-72 w-72 right-0 -top-10 animate-float" />
            <div className="hero-shape h-40 w-40 left-24 bottom-0 animate-float" />
            <div className="absolute inset-0 rounded-3xl glass" />
          </div>
        </div>
      </div>
    </section>
  )
}