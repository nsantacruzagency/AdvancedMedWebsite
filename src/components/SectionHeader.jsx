export default function SectionHeader({ eyebrow, title, subtitle, center = true }) {
  return (
    <div className={center ? 'text-center mb-12' : 'mb-10'}>
      {eyebrow && (
        <p className="text-gold-500 text-xs font-bold tracking-[0.25em] uppercase mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-base leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}
