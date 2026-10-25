import { useState } from 'react'
import { Minus, Plus } from 'lucide-react'
import { useLang } from '../lib/i18n.jsx'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'

export default function FAQ() {
  const { faq } = useLang().t
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className="py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading eyebrow={faq.eyebrow} title={faq.title} />

        <div className="mx-auto mt-12 max-w-2xl space-y-3">
          {faq.items.map((item, index) => {
            const expanded = open === index
            return (
              <Reveal key={item.q} delay={index * 60}>
                <div
                  className={`overflow-hidden rounded-xl border transition ${
                    expanded ? 'border-mint-400/30 bg-mint-400/[0.04]' : 'border-white/8 bg-white/[0.02]'
                  }`}
                >
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpen(expanded ? -1 : index)}
                      aria-expanded={expanded}
                      aria-controls={`faq-panel-${index}`}
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-start"
                    >
                      <span className="text-sm font-semibold text-white">{item.q}</span>
                      <span className="shrink-0 text-mint-400" aria-hidden="true">
                        {expanded ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                      </span>
                    </button>
                  </h3>

                  <div
                    id={`faq-panel-${index}`}
                    hidden={!expanded}
                    className="px-5 pb-4 text-sm leading-relaxed text-slate-400"
                  >
                    {item.a}
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
