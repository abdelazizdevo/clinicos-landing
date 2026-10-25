import { Check } from 'lucide-react'
import { useLang } from '../lib/i18n.jsx'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'

export default function Pricing() {
  const { pricing } = useLang().t

  return (
    <section id="pricing" className="py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading eyebrow={pricing.eyebrow} title={pricing.title} />

        {/* pt-6 reserves room for the "Most popular" badge, which otherwise
            clips against the grid's top edge (the bug in the Arabic mock-up). */}
        <div className="mt-14 grid items-stretch gap-6 pt-6 md:grid-cols-3">
          {pricing.plans.map((plan, index) => (
            <Reveal key={plan.name} delay={index * 90} className="h-full">
              <article
                className={`relative flex h-full flex-col rounded-2xl border p-7 transition ${
                  plan.popular
                    ? 'border-mint-400/40 bg-mint-400/[0.06] shadow-glow'
                    : 'surface surface-hover'
                }`}
              >
                {plan.popular ? (
                  <span className="absolute -top-3 start-7 rounded-full bg-gradient-to-r from-mint-500 to-aqua px-3 py-1 text-[11px] font-semibold text-ink-900">
                    {pricing.badge}
                  </span>
                ) : null}

                <h3 className="text-lg font-semibold text-white">{plan.name}</h3>
                <p className="mt-1 text-xs font-medium text-mint-400">{pricing.launchLabel}</p>

                <p className="mt-5 flex flex-wrap items-baseline gap-2">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-sm text-slate-400">{pricing.perMonth}</span>
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  {pricing.regularLabel} <s>{plan.regular}</s>
                </p>

                <ul className="mt-7 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm text-slate-200">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-mint-400" strokeWidth={2.2} aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="#faq"
                  className={`mt-8 w-full ${plan.popular ? 'btn-primary' : 'btn-ghost'}`}
                >
                  {pricing.cta}
                </a>
              </article>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-slate-500">{pricing.note}</p>
      </div>
    </section>
  )
}
