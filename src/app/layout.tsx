import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Script from 'next/script'

export const metadata = {
  title: 'AuroraSoft — Premium Tech',
  description: 'Minimalist, professional, tech-forward software house website',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-neutral-900 min-h-screen flex flex-col">
        <Navbar />
        <Script id="scroll-reveal-init" strategy="lazyOnload">
          {`
            (function(){
              const io = new IntersectionObserver((entries) => {
                entries.forEach((e) => {
                  const el = e.target;
                  if (e.isIntersecting) {
                    el.classList.add('in-view');
                  } else {
                    el.classList.remove('in-view');
                  }
                });
              }, { threshold: 0.1, root: null, rootMargin: '0px 0px -5% 0px' });

              document.querySelectorAll('.reveal').forEach((el) => {
                const delay = el.getAttribute('data-reveal-delay');
                if (delay) {
                  el.style.transitionDelay = delay + 'ms';
                }
                io.observe(el);
              });
            })();
          `}
        </Script>
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}