export default function Footer() {
  return (
    <footer className="border-t border-neutral-200">
      <div className="container-xl py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-neutral-600">© {new Date().getFullYear()} AuroraSoft. All rights reserved.</p>
        <div className="flex items-center gap-6 text-neutral-600">
          <a href="#" aria-label="LinkedIn" className="hover:text-neutral-900">LinkedIn</a>
          <a href="#" aria-label="Twitter" className="hover:text-neutral-900">Twitter/X</a>
          <a href="#" aria-label="GitHub" className="hover:text-neutral-900">GitHub</a>
          <a href="#" className="hover:text-neutral-900">Privacy</a>
          <a href="#" className="hover:text-neutral-900">Terms</a>
        </div>
      </div>
    </footer>
  )
}