import { useLang } from '../lib/i18n.jsx'
import { Icon } from '../lib/icons.jsx'
import Reveal from './Reveal.jsx'

export default function Solutions() {
  const { t } = useLang()
  const { solutions } = t

  return (
    <section id="solutions" className="py-20 sm:py-28">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left column carries the copy, so the row never renders half-empty. */}
        <Reveal className="text-start">
          <p className="eyebrow">{solutions.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-white sm:text-4xl">{solutions.title}</h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-slate-400">{solutions.body}</p>

          <dl className="mt-9 flex flex-wrap gap-4">
            {solutions.stats.map((stat) => (
              <div key={stat.label} className="surface px-5 py-4">
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block text-2xl font-bold text-mint-400">{stat.value}</span>
                  <span className="mt-1 block text-xs text-slate-400">{stat.label}</span>
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <div className="space-y-4">
          {solutions.items.map((item, index) => (
            <Reveal key={item.title} delay={index * 90}>
              <article className="surface surface-hover flex items-start gap-4 p-5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-mint-400/10 text-mint-400">
                  <Icon name={item.icon} />
                </span>
                <div>
                  <h3 className="text-base font-semibold text-white">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{item.body}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
