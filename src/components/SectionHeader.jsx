export default function SectionHeader({ eyebrow, title, subtitle, center = true, light = false }) {
  return (
    <div className={`${center ? 'text-center' : ''} mb-14`}>
      {eyebrow && (
        <p className={`text-[10px] font-medium tracking-widest uppercase mb-4 ${light ? 'text-spa-300' : 'text-spa'}`}
           style={{ letterSpacing: '0.22em' }}>
          {eyebrow}
        </p>
      )}
      <h2 className={`font-serif text-4xl md:text-5xl font-light leading-tight ${light ? 'text-cream-200' : 'text-espresso'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-5 text-[14px] leading-relaxed font-light max-w-2xl ${center ? 'mx-auto' : ''} ${light ? 'text-cream-400' : 'text-espresso-500'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
