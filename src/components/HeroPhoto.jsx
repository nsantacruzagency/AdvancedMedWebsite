/**
 * Full-bleed hero section styled as a photo placeholder.
 * Replace the inner div with <img> when real photography is available.
 *
 * Props:
 *   eyebrow   — small all-caps label above title
 *   title     — main heading (JSX or string)
 *   subtitle  — body copy below title
 *   height    — Tailwind h-* class (default "min-h-[72vh]")
 *   align     — "left" | "center" (default "left")
 *   gradient  — override gradient classes
 */
export default function HeroPhoto({
  eyebrow,
  title,
  subtitle,
  height = 'min-h-[72vh]',
  align = 'left',
  gradient = 'from-espresso-800 via-espresso-700 to-spa-700',
}) {
  const isCenter = align === 'center'

  return (
    <section className={`relative ${height} flex items-end overflow-hidden`}>
      {/* ── Photo placeholder — swap this div for <img> ── */}
      <div className="absolute inset-0">
        <div className={`w-full h-full bg-gradient-to-br ${gradient}`} />
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(115,137,133,0.25),transparent_60%)]" />
      </div>

      {/* Dark scrim for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-espresso/30 to-transparent" />

      {/* Content */}
      <div className={`relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pb-16 md:pb-20 ${isCenter ? 'text-center' : ''}`}>
        {eyebrow && (
          <p
            className="text-spa-200 text-[10px] font-medium uppercase mb-5"
            style={{ letterSpacing: '0.28em' }}
          >
            {eyebrow}
          </p>
        )}
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-cream-100 leading-[1.05] mb-5">
          {title}
        </h1>
        {subtitle && (
          <p className={`text-cream-400 text-[14px] font-light leading-relaxed max-w-xl ${isCenter ? 'mx-auto' : ''}`}>
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
