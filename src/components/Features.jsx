import { useLang } from '../lib/i18n.jsx'
import { Icon } from '../lib/icons.jsx'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'

export default function Features() {
  const { t } = useLang()
  const { features } = t

  return (
    <section id="features" className="py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading eyebrow={features.eyebrow} title={features.title} />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.items.map((item, index) => (
            <Reveal key={item.title} delay={index * 70}>
              <article className="surface surface-hover h-full p-6">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-mint-400/10 text-mint-400">
                  <Icon name={item.icon} />
                </span>
                <h3 className="mt-5 text-base font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{item.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
