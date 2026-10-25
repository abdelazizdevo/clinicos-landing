import Reveal from './Reveal.jsx'

export default function SectionHeading({ eyebrow, title, align = 'center' }) {
  const alignment = align === 'start' ? 'text-start' : 'text-center'
  return (
    <Reveal className={alignment}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className={`section-title mt-3 ${align === 'start' ? 'mx-0' : ''}`}>{title}</h2>
    </Reveal>
  )
}
