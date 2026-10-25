import { useLang } from '../lib/i18n.jsx'

export default function Footer() {
  const { footer } = useLang().t

  return (
    <footer className="border-t border-white/5 py-10">
      <div className="container-page flex flex-col items-center gap-5 text-center md:flex-row md:justify-between md:text-start">
        <div className="flex items-center gap-2.5">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-mint-400 to-aqua text-base font-bold text-ink-900">
            C
          </span>
          <span className="text-lg font-semibold text-white">
            Clinic<span className="text-mint-400">OS</span>
          </span>
        </div>

        <p className="text-sm text-slate-400">{footer.tagline}</p>
        <p className="text-sm text-slate-500">{footer.rights}</p>
      </div>
    </footer>
  )
}
