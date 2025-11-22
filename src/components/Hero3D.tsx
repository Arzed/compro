import Link from 'next/link'
import { ArrowRight, Play } from 'lucide-react'

export default function Hero3D() {
  const avatarSvgs = [
    "<svg xmlns='http://www.w3.org/2000/svg' width='56' height='56'><defs><linearGradient id='g' x1='0' x2='1'><stop stop-color='#8FABD4'/><stop offset='1' stop-color='#536dff'/></linearGradient></defs><circle cx='28' cy='28' r='28' fill='url(#g)'/></svg>",
    "<svg xmlns='http://www.w3.org/2000/svg' width='56' height='56'><defs><linearGradient id='g' x1='0' x2='1'><stop stop-color='#a7bdff'/><stop offset='1' stop-color='#7a93ff'/></linearGradient></defs><circle cx='28' cy='28' r='28' fill='url(#g)'/></svg>",
    "<svg xmlns='http://www.w3.org/2000/svg' width='56' height='56'><defs><linearGradient id='g' x1='0' x2='1'><stop stop-color='#cddcff'/><stop offset='1' stop-color='#536dff'/></linearGradient></defs><circle cx='28' cy='28' r='28' fill='url(#g)'/></svg>",
    "<svg xmlns='http://www.w3.org/2000/svg' width='56' height='56'><defs><linearGradient id='g' x1='0' x2='1'><stop stop-color='#94a3b8'/><stop offset='1' stop-color='#7a93ff'/></linearGradient></defs><circle cx='28' cy='28' r='28' fill='url(#g)'/></svg>"
  ]
  const avatars = avatarSvgs.map((s) => `data:image/svg+xml;utf8,${encodeURIComponent(s)}`)
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FFFFFF] to-[#FAFAFA]">
      <div className="container-xl py-24 sm:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <div className="hero-gradient" />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 border border-neutral-200 shadow-soft backdrop-blur mb-6">
            <span className="text-sm">✨ Video Editor and Analytics, Multichannel Publishing — all in one.</span>
          </div>
          <h1 className="text-neutral-900 font-extrabold tracking-tight leading-[1.02] text-5xl sm:text-7xl md:text-[5.5rem]">
            A <span className="highlight-word text-brand-600">CREATIVE</span> VIDEO CREATION AGENCY
            <br />
            THAT DRIVES ENGAGEMENT
          </h1>
          <p className="mt-6 text-neutral-600 text-[1.05rem]">
            We enhances businesses' ability to boost customer engagement through the integration of personalized and interactive elements into their videos.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <div className="avatar-stack">
              {avatars.map((src, i) => (
                <img key={i} src={src} alt="avatar" />
              ))}
            </div>
            <span className="text-sm text-brand-700 font-semibold">We are trusted by Fortune 500 Companies</span>
          </div>
          <div className="mt-8 flex items-center justify-center gap-3">
            <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-brand-600 to-brand-500 text-white font-semibold shadow-soft">
              Request a demo <ArrowRight size={18} />
            </Link>
            <Link href="/work" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-neutral-300 bg-white text-neutral-900 font-semibold hover:bg-neutral-50">
              <Play size={16} /> Create your own
            </Link>
          </div>
          <div className="mt-12">
            <p className="text-sm text-neutral-600 mb-3">Companies who trust us <span className="inline-block align-middle">→</span></p>
            <div className="grid grid-cols-2 sm:grid-cols-5 items-center gap-6 text-neutral-700">
              <div className="text-center font-extrabold">NETFLIX</div>
              <div className="text-center font-extrabold text-brand-600">stripe</div>
              <div className="text-center font-extrabold">Google</div>
              <div className="text-center font-extrabold">X</div>
              <div className="text-center font-extrabold">ZARA</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}