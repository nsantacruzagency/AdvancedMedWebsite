import { useState } from 'react'

/**
 * Hero component for protocol/service pages.
 *
 * Props:
 *   eyebrow            — small all-caps label above the logo
 *   protocolLogo       — path to PNG logo, e.g. /images/protocol-logos/slimlifelogo.png
 *   fallbackTitle      — text heading shown if the PNG fails to load or is not provided
 *   protocolDescription — one-sentence body copy below the logo
 */
export default function ProtocolHero({
  eyebrow,
  protocolLogo,
  fallbackTitle,
  protocolDescription,
}) {
  const [imgFailed, setImgFailed] = useState(false)
  const showLogo = protocolLogo && !imgFailed

  return (
    <section className="bg-cream-200 border-b border-cream-300">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-12 py-20 md:py-28 text-center">

        {/* Eyebrow */}
        {eyebrow && (
          <p
            className="text-spa text-[10px] font-medium uppercase mb-8 tracking-[0.28em]"
          >
            {eyebrow}
          </p>
        )}

        {/* Protocol logo — PNG if available, serif text fallback otherwise */}
        {showLogo ? (
          <img
            src={protocolLogo}
            alt={fallbackTitle || eyebrow || 'Protocol'}
            onError={() => setImgFailed(true)}
            className="mx-auto max-h-56 md:max-h-72 w-auto object-contain mb-8"
          />
        ) : (
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-espresso leading-[1.05] mb-8">
            {fallbackTitle}
          </h1>
        )}

        {/* Divider */}
        <div className="w-12 h-px bg-spa mx-auto mb-8" />

        {/* Description */}
        {protocolDescription && (
          <p className="text-espresso-500 text-[15px] font-light leading-relaxed max-w-2xl mx-auto">
            {protocolDescription}
          </p>
        )}
      </div>
    </section>
  )
}
