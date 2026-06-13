export default function HeroPhoto({
  eyebrow,
  title,
  subtitle,
  height = 'min-h-[54vh]',
  align = 'left',
  gradient = 'from-espresso-800 via-spa-800 to-espresso-700',
  gradientDir = 'to-br',
  radialPos = 'top_right',
  imageSrc = null,
}) {
  const isCenter = align === 'center'
  const radialMap = {
    top_right:   'bg-[radial-gradient(ellipse_at_top_right,rgba(115,137,133,0.3),transparent_60%)]',
    top_left:    'bg-[radial-gradient(ellipse_at_top_left,rgba(115,137,133,0.3),transparent_60%)]',
    bottom_right:'bg-[radial-gradient(ellipse_at_bottom_right,rgba(115,137,133,0.3),transparent_60%)]',
    bottom_left: 'bg-[radial-gradient(ellipse_at_bottom_left,rgba(115,137,133,0.3),transparent_60%)]',
    center:      'bg-[radial-gradient(ellipse_at_center,rgba(115,137,133,0.25),transparent_65%)]',
    top:         'bg-[radial-gradient(ellipse_at_top,rgba(115,137,133,0.3),transparent_60%)]',
  }
  const radialClass = radialMap[radialPos] || radialMap.top_right

  return (
    <section className={`relative ${height} flex items-end overflow-hidden`}>
      <div className="absolute inset-0">
        {imageSrc ? (
          <img src={imageSrc} alt="" className="w-full h-full object-cover object-center" />
        ) : (
          <>
            <div className={`w-full h-full bg-gradient-${gradientDir} ${gradient}`} />
            <div className={`absolute inset-0 ${radialClass}`} />
          </>
        )}
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
