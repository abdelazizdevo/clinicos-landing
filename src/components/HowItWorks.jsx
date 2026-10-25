import { useLang } from '../lib/i18n.jsx'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'

export default function HowItWorks() {
  const { steps } = useLang().t

  return (
    <section id="how-it-works" className="py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading eyebrow={steps.eyebrow} title={steps.title} />

        <div className="relative mt-16">
          {/* Connector line, hidden on mobile where the steps stack. */}
          <div
            className="absolute inset-x-[16%] top-7 hidden h-px bg-gradient-to-r from-transparent via-mint-400/40 to-transparent md:block"
            aria-hidden="true"
          />

          <ol className="relative grid gap-10 md:grid-cols-3">
            {steps.items.map((step, index) => (
              <Reveal key={step.title} delay={index * 110}>
                <li className="flex flex-col items-center text-center">
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-mint-400 to-aqua text-lg font-bold text-ink-900 shadow-glow">
                    {index + 1}
                  </span>
                  <h3 className="mt-5 text-base font-semibold text-white">{step.title}</h3>
                  <p className="mt-2 max-w-xs text-sm leading-relaxed text-slate-400">{step.body}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
