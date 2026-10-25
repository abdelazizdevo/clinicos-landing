import { ArrowRight, CalendarCheck, CheckCircle2, FileText } from 'lucide-react'
import { useLang } from '../lib/i18n.jsx'
import HeroVisual from './HeroVisual.jsx'
import Reveal from './Reveal.jsx'

function Chip({ icon: IconComponent, children, className = '' }) {
  return (
    <div
      className={`flex items-center gap-2 rounded-xl border border-white/10 bg-ink-800/90 px-3 py-2 text-xs font-medium text-white shadow-card backdrop-blur ${className}`}
    >
      <IconComponent className="h-4 w-4 shrink-0 text-mint-400" strokeWidth={1.8} aria-hidden="true" />
      {children}
    </div>
  )
}

export default function Hero() {
  const { t } = useLang()
  const { hero, cta } = t

  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-36 lg:pb-28">
      <div className="pointer-events-none absolute inset-0 glow-radial" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-24 start-1/2 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-mint-500/10 blur-3xl rtl:translate-x-1/2"
        aria-hidden="true"
      />

      <div className="container-page relative grid items-center gap-14 lg:grid-cols-2">
        <Reveal>
          <span className="inline-flex rounded-full border border-mint-400/25 bg-mint-400/10 px-4 py-1.5 text-xs font-medium text-mint-400">
            {hero.badge}
          </span>

          {/* Arabic glyphs need more leading, and the gradient-clipped span needs
              bottom padding or descenders get cut off by the text clip. */}
          <h1 className="mt-6 text-4xl font-bold leading-[1.15] text-white rtl:leading-[1.45] sm:text-5xl lg:text-[3.4rem]">
            {hero.titleTop}
            <span className="mt-1 block bg-gradient-to-r from-mint-400 to-aqua bg-clip-text pb-2 text-transparent">
              {hero.titleAccent}
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-400">{hero.body}</p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#pricing" className="btn-primary">
              {cta.demo}
              <ArrowRight className="h-4 w-4 flip-rtl" aria-hidden="true" />
            </a>
            <a href="#product" className="btn-ghost">
              {cta.explore}
            </a>
          </div>
        </Reveal>

        <Reveal delay={120}>
          {/* The chips sit outside the clipped frame so they are never cut off. */}
          <div className="relative mx-auto w-full max-w-xl px-4 pb-10 pt-6 sm:px-10">
            <div
              className="absolute -top-2 start-8 h-16 w-16 rounded-2xl border border-mint-400/30 bg-mint-400/10 animate-float"
              aria-hidden="true"
            />
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 shadow-glow">
              <HeroVisual alt={hero.imageAlt} />
            </div>

            <Chip icon={CheckCircle2} className="absolute -top-1 end-0 animate-float">
              {hero.chips.invoice}
            </Chip>

            <Chip icon={FileText} className="absolute bottom-24 end-2 sm:end-6">
              {hero.chips.record}
            </Chip>

            <div className="absolute bottom-0 start-0 flex items-center gap-3 rounded-xl border border-white/10 bg-ink-800/90 px-4 py-3 shadow-card backdrop-blur">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-mint-400/15 text-mint-400">
                <CalendarCheck className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
              </span>
              <span className="text-start">
                <span className="block text-sm font-semibold text-white">{hero.chips.appointmentTitle}</span>
                <span className="block text-xs text-slate-400">{hero.chips.appointmentTime}</span>
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
