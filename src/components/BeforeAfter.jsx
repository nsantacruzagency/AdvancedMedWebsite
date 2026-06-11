/**
 * Before & After photo grid.
 * Images are 4:5 portrait (1080 × 1350 px) — replace placeholder divs with <img>.
 *
 * Props:
 *   items — array of { label, result, beforeAlt, afterAlt }
 *   heading — optional section heading override
 */
export default function BeforeAfter({ items, heading = 'Client Results', logo = null, logoAlt = '' }) {
  return (
    <section className="py-20 px-5 sm:px-8 lg:px-12 bg-espresso">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-14 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <p
              className="text-spa-300 text-[10px] font-medium uppercase mb-3"
              style={{ letterSpacing: '0.28em' }}
            >
              Before &amp; After
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-cream-200 leading-tight">
              {heading}
            </h2>
          </div>
          {logo ? (
            <div className="bg-cream-200/60 backdrop-blur-sm px-3 py-2 rounded-lg">
              <img src={logo} alt={logoAlt} className="max-h-10 md:max-h-14 w-auto object-contain" />
            </div>
          ) : (
            <p className="text-cream-400 text-[12px] font-light max-w-xs leading-relaxed">
              Individual results may vary. Photos are of actual clients who consented to share their results.
            </p>
          )}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <div key={idx} className="space-y-4">
              {/* Label */}
              {item.label && (
                <p className="text-spa-300 text-[10px] uppercase tracking-widest font-medium">
                  {item.label}
                </p>
              )}

              {/* Photo pair */}
              <div className="grid grid-cols-2 gap-3">
                {/* Before */}
                <div className="space-y-2">
                  <div className="w-full bg-espresso-600 overflow-hidden relative" style={{ aspectRatio: '1080 / 1350' }}>
                    {item.beforeSrc ? (
                      <img src={item.beforeSrc} alt={item.beforeAlt} className="w-full h-full object-cover" />
                    ) : (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-br from-espresso-500 to-espresso-700" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center px-3">
                            <p className="text-cream-400 text-[10px] uppercase tracking-widest font-light">1080 × 1350</p>
                            <p className="text-cream-500 text-[9px] mt-1 font-light">Photo placeholder</p>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                  <p className="text-cream-500 text-[10px] uppercase tracking-widest font-medium text-center">Before</p>
                </div>

                {/* After */}
                <div className="space-y-2">
                  <div className="w-full bg-spa-700 overflow-hidden relative" style={{ aspectRatio: '1080 / 1350' }}>
                    {item.afterSrc ? (
                      <img src={item.afterSrc} alt={item.afterAlt} className="w-full h-full object-cover" />
                    ) : (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-br from-spa-600 to-spa-800" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center px-3">
                            <p className="text-spa-200 text-[10px] uppercase tracking-widest font-light">1080 × 1350</p>
                            <p className="text-spa-300 text-[9px] mt-1 font-light">Photo placeholder</p>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                  <p className="text-spa-300 text-[10px] uppercase tracking-widest font-medium text-center">After</p>
                </div>
              </div>

              {/* Result label */}
              {item.result && (
                <p className="text-cream-400 text-[12px] font-light leading-relaxed border-l-2 border-spa pl-3">
                  {item.result}
                </p>
              )}
            </div>
          ))}
        </div>

        <p className="text-espresso-400 text-[10px] font-light mt-10 text-center leading-relaxed max-w-2xl mx-auto">
          Results shown are for illustrative purposes. Advanced Med MedSpa Lounge does not guarantee identical outcomes. A personalized evaluation will determine realistic expectations for your unique goals.
        </p>
      </div>
    </section>
  )
}
