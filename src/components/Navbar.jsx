import { useEffect, useState } from 'react'
import { Languages, Menu, X } from 'lucide-react'
import { useLang } from '../lib/i18n.jsx'

function Logo() {
  return (
    <a href="#top" className="flex items-center gap-2.5" aria-label="ClinicOS">
      <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-mint-400 to-aqua text-base font-bold text-ink-900">
        C
      </span>
      <span className="text-lg font-semibold text-white">
        Clinic<span className="text-mint-400">OS</span>
      </span>
    </a>
  )
}

export default function Navbar() {
  const { t, toggle } = useLang()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Keep the mobile sheet from scrolling the page behind it.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition duration-300 ${
        scrolled ? 'border-b border-white/5 bg-ink-900/85 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="container-page flex h-20 items-center justify-between gap-6">
        <Logo />

        <ul className="hidden items-center gap-7 lg:flex">
          {t.nav.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="text-sm text-slate-300 transition hover:text-mint-400"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggle}
            className="hidden items-center gap-1.5 rounded-full px-3 py-2 text-sm text-slate-300 transition hover:text-mint-400 sm:inline-flex"
            aria-label={`Switch language to ${t.langLabel}`}
          >
            <Languages className="h-4 w-4" strokeWidth={1.8} aria-hidden="true" />
            {t.langLabel}
          </button>

          <a href="#pricing" className="btn-primary hidden sm:inline-flex">
            {t.cta.demo}
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-white lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div id="mobile-nav" className="border-t border-white/5 bg-ink-900/95 backdrop-blur-md lg:hidden">
          <ul className="container-page space-y-1 py-4">
            {t.nav.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-base text-slate-200 transition hover:bg-white/5 hover:text-mint-400"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="flex flex-col gap-3 pt-3">
              <button type="button" onClick={toggle} className="btn-ghost w-full">
                <Languages className="h-4 w-4" aria-hidden="true" />
                {t.langLabel}
              </button>
              <a href="#pricing" onClick={() => setOpen(false)} className="btn-primary w-full">
                {t.cta.demo}
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  )
}
