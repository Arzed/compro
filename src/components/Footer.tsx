import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="relative bg-gradient-to-b from-white to-neutral-50 border-t border-neutral-200">
      <div className="container-xl py-14">
        <div className="grid lg:grid-cols-4 gap-10">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2">
              <span className="text-xl font-extrabold">AuroraSoft</span>
            </div>
            <p className="text-neutral-600">We build secure, cloud‑native products with TypeScript‑first engineering and design‑led UX.</p>
            {/* <div className="flex items-center gap-2">
              <input type="email" placeholder="Enter your email" className="flex-1 rounded-xl border border-neutral-300 px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-brand-300" />
              <button className="px-4 py-2 rounded-xl bg-neutral-900 text-white font-semibold">Subscribe</button>
            </div> */}
          </div>
          <div>
            <p className="text-sm font-semibold text-neutral-900 mb-4">Services</p>
            <ul className="space-y-3 text-neutral-600">
              <li><Link href="/services">Product Engineering</Link></li>
              <li><Link href="/services">Cloud & DevOps</Link></li>
              <li><Link href="/services">AI & Data</Link></li>
              <li><Link href="/services">UX Design</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-neutral-900 mb-4">Company</p>
            <ul className="space-y-3 text-neutral-600">
              <li><Link href="/work">Work</Link></li>
              <li><Link href="/team">Team</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-neutral-900 mb-4">Resources</p>
            <ul className="space-y-3 text-neutral-600">
              <li><a href="#">Blog</a></li>
              <li><a href="#">Case Studies</a></li>
              <li><a href="#">Security</a></li>
              <li><a href="#">Support</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-neutral-200 pt-6">
          <p className="text-sm text-neutral-600">© {year} AuroraSoft. All rights reserved.</p>
          <div className="flex items-center gap-6 text-neutral-600">
            <a href="#" aria-label="LinkedIn" className="hover:text-neutral-900">LinkedIn</a>
            <a href="#" aria-label="Twitter" className="hover:text-neutral-900">Twitter/X</a>
            <a href="#" aria-label="GitHub" className="hover:text-neutral-900">GitHub</a>
            <a href="#" className="hover:text-neutral-900">Privacy</a>
            <a href="#" className="hover:text-neutral-900">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}