"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()
  const items = [
    { href: '/work', label: 'Work' },
    { href: '/services', label: 'Services' },
    { href: '/team', label: 'Team' },
    { href: '/contact', label: 'Contact' },
  ]
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-neutral-200">
      <div className="container-xl flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-brand-500" />
          <span className="font-extrabold tracking-tight text-lg">AuroraSoft</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {items.map((item) => {
            const active = pathname === item.href
            return (
              <Link key={item.href} href={item.href} className={`text-sm font-semibold ${active ? 'text-brand-700' : 'text-neutral-600 hover:text-neutral-900'}`}>
                {item.label}
              </Link>
            )
          })}
        </nav>
        <Link href="/contact" className="px-4 py-2 rounded-lg bg-neutral-900 text-white font-semibold text-sm">
          Get in touch
        </Link>
      </div>
    </header>
  )
}