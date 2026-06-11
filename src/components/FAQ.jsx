import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

/**
 * FAQ accordion section.
 * Props:
 *   items — array of { q, a }
 *   eyebrow — optional label above heading
 *   heading — section heading (default "Frequently Asked Questions")
 *   dark — if true, renders on espresso background
 */
export default function FAQ({ items, eyebrow = 'FAQ', heading = 'Frequently Asked Questions', dark = false }) {
  const [open, setOpen] = useState(null)

  const bg    = dark ? 'bg-espresso'     : 'bg-spa'
  const text  = dark ? 'text-cream-200'  : 'text-cream-100'
  const sub   = dark ? 'text-spa-300'    : 'text-cream-200'
  const line  = dark ? 'border-espresso-500' : 'border-spa-600'
  const body  = dark ? 'text-cream-400'  : 'text-cream-200'
  const icon  = dark ? 'text-spa-300'    : 'text-cream-200'

  return (
    <section className={`${bg} py-20 px-5 sm:px-8 lg:px-12`}>
      <div className="max-w-4xl mx-auto">
        <p className={`${sub} text-[10px] font-medium uppercase mb-4`} style={{ letterSpacing: '0.28em' }}>
          {eyebrow}
        </p>
        <h2 className={`font-serif text-4xl md:text-5xl font-light ${text} mb-12 leading-tight`}>
          {heading}
        </h2>

        <div className={`divide-y ${line}`}>
          {items.map((item, i) => (
            <div key={i}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className={`w-full flex items-start justify-between gap-6 py-6 text-left ${text} hover:opacity-80 transition-opacity`}
              >
                <span className="font-serif text-[17px] font-light leading-snug">{item.q}</span>
                <span className={`flex-shrink-0 mt-0.5 ${icon}`}>
                  {open === i ? <Minus size={16} strokeWidth={1.5} /> : <Plus size={16} strokeWidth={1.5} />}
                </span>
              </button>
              {open === i && (
                <p className={`${body} text-[13px] font-light leading-relaxed pb-6`}>
                  {item.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
