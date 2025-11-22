import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-neutral-200">
      <div className="container-xl flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-brand-500" />
          <span className="font-extrabold tracking-tight text-lg">AuroraSoft</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {[
            { to: '/work', label: 'Work' },
            { to: '/services', label: 'Services' },
            { to: '/team', label: 'Team' },
            { to: '/contact', label: 'Contact' },
          ].map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm font-semibold ${isActive ? 'text-brand-700' : 'text-neutral-600 hover:text-neutral-900'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <Link to="/contact" className="px-4 py-2 rounded-lg bg-neutral-900 text-white font-semibold text-sm">
          Get in touch
        </Link>
      </div>
    </header>
  )
}