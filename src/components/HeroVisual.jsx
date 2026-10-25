/**
 * Stand-in for the hero photograph: an SVG of a clinic reception at dusk.
 * Swap it for a real image by replacing the <svg> with
 * <img src="/hero.jpg" alt={alt} className="h-full w-full object-cover" />.
 */
export default function HeroVisual({ alt }) {
  return (
    <svg
      viewBox="0 0 640 420"
      role="img"
      aria-label={alt}
      className="h-full w-full"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0b2a3a" />
          <stop offset="55%" stopColor="#1d3b4a" />
          <stop offset="100%" stopColor="#d98b5a" />
        </linearGradient>
        <linearGradient id="desk" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#0d9bb0" />
          <stop offset="50%" stopColor="#2ee6d0" />
          <stop offset="100%" stopColor="#0e7f99" />
        </linearGradient>
        <linearGradient id="floor" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#08201f" />
          <stop offset="100%" stopColor="#040f10" />
        </linearGradient>
        <radialGradient id="deskGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#2ee6d0" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#2ee6d0" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="640" height="420" fill="#061a1c" />
      {/* Window wall with the city at dusk */}
      <rect x="18" y="18" width="286" height="300" fill="url(#sky)" />
      <g opacity="0.35" fill="#04171f">
        <rect x="30" y="150" width="46" height="168" />
        <rect x="96" y="120" width="38" height="198" />
        <rect x="152" y="168" width="54" height="150" />
        <rect x="222" y="138" width="42" height="180" />
      </g>
      <g stroke="#0a2730" strokeWidth="6">
        <line x1="115" y1="18" x2="115" y2="318" />
        <line x1="210" y1="18" x2="210" y2="318" />
      </g>

      {/* Interior wall */}
      <rect x="304" y="0" width="336" height="330" fill="#07272b" />
      <rect x="470" y="60" width="120" height="86" rx="6" fill="#0b3a3f" />
      <circle cx="530" cy="103" r="22" fill="#0d4a4f" />

      {/* Ceiling light ring */}
      <ellipse cx="470" cy="56" rx="86" ry="13" fill="none" stroke="#f0c98a" strokeWidth="3" opacity="0.65" />

      {/* Clinician */}
      <g>
        <rect x="392" y="118" width="46" height="96" rx="20" fill="#e8eef0" />
        <circle cx="415" cy="104" r="19" fill="#caa98c" />
        <path d="M396 94a19 19 0 0 1 38 0z" fill="#2b2320" />
        <rect x="430" y="158" width="34" height="24" rx="4" fill="#0f3f47" />
      </g>

      {/* Reception desk with light strip */}
      <ellipse cx="400" cy="300" rx="260" ry="80" fill="url(#deskGlow)" />
      <rect x="150" y="268" width="470" height="62" rx="10" fill="#0a3034" />
      <rect x="150" y="268" width="470" height="14" rx="7" fill="url(#desk)" />
      <rect x="166" y="300" width="438" height="6" rx="3" fill="#2ee6d0" opacity="0.5" />

      {/* Floor reflection */}
      <rect x="0" y="330" width="640" height="90" fill="url(#floor)" />
      <rect x="150" y="332" width="470" height="30" rx="8" fill="#2ee6d0" opacity="0.12" />
      <rect x="18" y="332" width="286" height="40" fill="#d98b5a" opacity="0.1" />

      {/* Plant */}
      <g transform="translate(596 236)">
        <rect x="-14" y="38" width="28" height="30" rx="5" fill="#0e3a33" />
        <path d="M0 38c-16-6-22-22-20-38 14 4 22 18 20 38z" fill="#156b53" />
        <path d="M0 38c16-8 20-24 16-40-14 6-20 20-16 40z" fill="#1a8a67" />
      </g>
    </svg>
  )
}
