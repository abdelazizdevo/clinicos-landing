import { useEffect, useState } from 'react'
import { useLang } from '../lib/i18n.jsx'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'

export default function ProductTour() {
  const { t, isRtl } = useLang()
  const { tour } = t
  const [active, setActive] = useState(tour.tabs[0].id)

  // Tab ids are stable across locales, but guard against content edits.
  useEffect(() => {
    if (!tour.tabs.some((tab) => tab.id === active)) setActive(tour.tabs[0].id)
  }, [tour, active])

  const current = tour.tabs.find((tab) => tab.id === active) ?? tour.tabs[0]

  const onKeyDown = (event) => {
    const keys = ['ArrowRight', 'ArrowLeft']
    if (!keys.includes(event.key)) return
    event.preventDefault()
    const forward = isRtl ? event.key === 'ArrowLeft' : event.key === 'ArrowRight'
    const index = tour.tabs.findIndex((tab) => tab.id === active)
    const next = (index + (forward ? 1 : -1) + tour.tabs.length) % tour.tabs.length
    setActive(tour.tabs[next].id)
  }

  return (
    <section id="product" className="py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading eyebrow={tour.eyebrow} title={tour.title} />

        <Reveal delay={100}>
          <div className="mt-14 rounded-3xl border border-white/8 bg-white/[0.02] p-3 shadow-glow sm:p-4">
            <div
              role="tablist"
              aria-label={tour.title}
              onKeyDown={onKeyDown}
              className="grid grid-cols-2 gap-2 rounded-2xl bg-ink-800/60 p-2 sm:grid-cols-4"
            >
              {tour.tabs.map((tab) => {
                const selected = tab.id === active
                return (
                  <button
                    key={tab.id}
                    role="tab"
                    id={`tab-${tab.id}`}
                    aria-selected={selected}
                    aria-controls={`panel-${tab.id}`}
                    tabIndex={selected ? 0 : -1}
                    type="button"
                    onClick={() => setActive(tab.id)}
                    className={`rounded-xl px-4 py-2.5 text-sm font-medium transition ${
                      selected
                        ? 'bg-gradient-to-r from-mint-500 to-aqua text-ink-900 shadow-glow'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {tab.label}
                  </button>
                )
              })}
            </div>

            <div
              role="tabpanel"
              id={`panel-${current.id}`}
              aria-labelledby={`tab-${current.id}`}
              className="mt-3 rounded-2xl border border-white/5 bg-ink-800/40 p-5 sm:p-6"
            >
              <h3 className="text-sm font-semibold text-white">{current.heading}</h3>

              <ul className="mt-4 divide-y divide-white/5">
                {current.rows.map((row) => (
                  <li key={row.name} className="flex items-center justify-between gap-4 py-3.5">
                    <span className="flex min-w-0 items-center gap-3">
                      <span
                        className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-mint-400/10 text-xs font-semibold text-mint-400"
                        aria-hidden="true"
                      >
                        {[...row.name][0]}
                      </span>
                      <span className="truncate text-sm text-slate-200">{row.name}</span>
                    </span>
                    <span className="shrink-0 rounded-full border border-white/10 px-3 py-1 text-xs text-slate-400">
                      {row.tag}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="mt-5 text-center text-xs text-slate-500">{tour.disclaimer}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
