import SectionHeader from '../../components/SectionHeader'
import Reveal from '../../components/Reveal'

export default function ContactPage() {
  return (
    <section className="container-xl py-16">
      <SectionHeader title="Contact" subtitle="Tell us about your project" />
      <div className="grid lg:grid-cols-2 gap-10 items-start">
        <Reveal>
          <form className="rounded-2xl p-6 border border-neutral-200 bg-white shadow-soft space-y-4">
            <div>
              <label className="block text-sm font-semibold mb-1">Name</label>
              <input type="text" className="w-full rounded-lg border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-300" />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Email</label>
              <input type="email" className="w-full rounded-lg border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-300" />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Message</label>
              <textarea className="w-full min-h-32 rounded-lg border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-300" />
            </div>
            <button type="submit" className="px-5 py-2.5 rounded-lg bg-neutral-900 text-white font-semibold">Send</button>
          </form>
        </Reveal>
        <div className="space-y-6">
          <Reveal>
            <div className="rounded-2xl overflow-hidden border border-neutral-200 bg-white shadow-soft">
              <iframe
                title="Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.843106493477!2d144.96305831531696!3d-37.81627937975153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577cf4fba6d25b!2sVictoria!5e0!3m2!1sen!2sau!4v1611814091364!5m2!1sen!2sau"
                width="100%"
                height="320"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="rounded-2xl p-6 border border-neutral-200 bg-white shadow-soft">
              <p className="font-semibold mb-3">Social</p>
              <div className="flex items-center gap-4 text-neutral-600">
                <a href="#" className="hover:text-neutral-900">LinkedIn</a>
                <a href="#" className="hover:text-neutral-900">Twitter/X</a>
                <a href="#" className="hover:text-neutral-900">GitHub</a>
              </div>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-6">
            <Reveal>
              <div className="rounded-2xl p-6 border border-neutral-200 bg-white shadow-soft">
                <p className="font-semibold mb-2">HQ</p>
                <p className="text-neutral-600">120 Market St, Suite 500<br/>San Francisco, CA</p>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="rounded-2xl p-6 border border-neutral-200 bg-white shadow-soft">
                <p className="font-semibold mb-2">Contact</p>
                <p className="text-neutral-600">hello@aurorasoft.io<br/>+1 (415) 555 0132</p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}