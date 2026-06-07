import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'

const concerns = [
  {
    id: 'acne',
    emoji: '🔴',
    title: 'Acne & Breakouts',
    tagline: 'Clearer Skin Is Possible',
    description:
      'Acne is one of the most common — and most treatable — skin conditions. Whether you struggle with occasional breakouts, persistent hormonal acne, or cystic lesions, our clinically proven protocols target the root causes: excess oil production, bacteria, inflammation, and clogged pores. We customize every plan based on your skin type, lifestyle, and acne severity.',
    causes: [
      'Hormonal fluctuations',
      'Excess sebum (oil) production',
      'Bacterial overgrowth (P. acnes)',
      'Clogged hair follicles',
      'Diet, stress, and environmental factors',
    ],
    treatments: [
      { name: 'Chemical Peels', desc: 'Exfoliate dead skin cells and reduce oil buildup to prevent clogged pores.' },
      { name: 'Korean Facials', desc: 'Deep cleansing with antibacterial and anti-inflammatory serums.' },
      { name: 'LED Light Therapy', desc: 'Blue light kills acne-causing bacteria without damaging surrounding skin.' },
      { name: 'Medical-Grade Skincare', desc: 'Prescription-strength retinoids, niacinamide, and targeted spot treatments.' },
    ],
    color: 'from-red-50 to-rose-50',
    accent: 'text-red-600',
    border: 'border-red-100',
    tagColor: 'bg-red-100 text-red-700',
  },
  {
    id: 'aging',
    emoji: '⏳',
    title: 'Aging & Wrinkles',
    tagline: 'Age Beautifully, On Your Terms',
    description:
      'Aging is natural, but the signs of aging — fine lines, wrinkles, sagging skin, and loss of volume — are highly treatable. Our anti-aging approach combines neurotoxins, collagen stimulators, skin-tightening technologies, and medical-grade skincare to turn back the clock while maintaining a natural, refreshed look that is unmistakably you.',
    causes: [
      'Collagen and elastin breakdown over time',
      'Repetitive facial muscle movements',
      'UV damage and photoaging',
      'Volume loss and gravitational changes',
      'Dehydration and lifestyle factors',
    ],
    treatments: [
      { name: 'Botox & Neurotoxins', desc: 'Relax expression lines and prevent new wrinkles from forming.' },
      { name: 'Skin Tightening (RF/HIFU)', desc: 'Stimulate deep collagen production for a lifted, firm appearance.' },
      { name: 'Chemical Peels', desc: 'Resurface the skin to reduce fine lines and improve texture.' },
      { name: 'Korean Anti-Aging Facials', desc: 'Intensive peptide and growth factor treatments to restore youthful radiance.' },
    ],
    color: 'from-amber-50 to-yellow-50',
    accent: 'text-amber-700',
    border: 'border-amber-100',
    tagColor: 'bg-amber-100 text-amber-700',
  },
  {
    id: 'discoloration',
    emoji: '🌟',
    title: 'Discoloration & Dark Spots',
    tagline: 'Even, Luminous Skin Awaits',
    description:
      'Hyperpigmentation — including melasma, sun spots, post-inflammatory marks, and uneven skin tone — can significantly impact confidence. At Advanced Med, we combine brightening treatments, targeted peels, and advanced skincare to break down excess melanin, fade existing discoloration, and prevent new dark spots from forming.',
    causes: [
      'Sun exposure and UV damage (sunspots)',
      'Post-acne marks (PIH)',
      'Hormonal changes (melasma)',
      'Aging and oxidative stress',
      'Skin inflammation or injury',
    ],
    treatments: [
      { name: 'Chemical Peels', desc: 'Targeted acids like kojic acid, glycolic, and TCA fade pigmented areas.' },
      { name: 'Brightening Korean Facials', desc: 'Vitamin C serums and niacinamide-based protocols for an even complexion.' },
      { name: 'Skin Tightening with Phototherapy', desc: 'Light-based treatments target melanin and stimulate skin renewal.' },
      { name: 'Medical-Grade Brightening Skincare', desc: 'Take-home protocols with clinically proven brightening ingredients.' },
    ],
    color: 'from-yellow-50 to-orange-50',
    accent: 'text-yellow-700',
    border: 'border-yellow-100',
    tagColor: 'bg-yellow-100 text-yellow-800',
  },
]

export default function SkinConcerns() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-rose-50 via-white to-amber-50 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gold-500 text-xs font-bold tracking-[0.3em] uppercase mb-4">
            Targeted Solutions
          </p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-gray-900 mb-5">
            Skin Concerns
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Every skin tells a story. We listen, then create a personalized
            treatment plan to address your specific concerns with clinical precision
            and care.
          </p>
        </div>
      </section>

      {/* Concerns */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto space-y-16">
          {concerns.map((concern, idx) => (
            <div key={concern.id} id={concern.id}>
              <div className={`rounded-3xl border ${concern.border} bg-gradient-to-br ${concern.color} p-10 lg:p-14`}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div>
                    <div className="text-5xl mb-5">{concern.emoji}</div>
                    <p className={`text-xs font-bold tracking-[0.2em] uppercase mb-2 ${concern.accent}`}>
                      {concern.tagline}
                    </p>
                    <h2 className="font-serif text-3xl font-bold text-gray-900 mb-5">
                      {concern.title}
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-8">
                      {concern.description}
                    </p>
                    <div>
                      <h4 className="font-semibold text-gray-700 text-sm uppercase tracking-wider mb-4">
                        Common Causes
                      </h4>
                      <ul className="space-y-2">
                        {concern.causes.map((c) => (
                          <li key={c} className="flex items-center gap-2 text-gray-600 text-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-gold-400 flex-shrink-0" />
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700 text-sm uppercase tracking-wider mb-6">
                      Recommended Treatments
                    </h4>
                    <div className="space-y-4">
                      {concern.treatments.map((t) => (
                        <div key={t.name} className="bg-white/70 rounded-2xl p-5 border border-white">
                          <div className="flex items-start gap-3">
                            <CheckCircle size={17} className={`mt-0.5 flex-shrink-0 ${concern.accent}`} />
                            <div>
                              <h5 className="font-semibold text-gray-900 text-sm mb-1">{t.name}</h5>
                              <p className="text-gray-500 text-xs leading-relaxed">{t.desc}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <Link
                      to="/book"
                      className="mt-8 inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-white font-semibold px-6 py-3 rounded-full transition-colors text-sm"
                    >
                      Treat {concern.title.split(' ')[0]} <ArrowRight size={15} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quiz CTA */}
      <section className="py-20 px-4 bg-gray-900 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <div className="text-5xl mb-6">🔬</div>
          <h2 className="font-serif text-4xl font-bold mb-4">
            Not Sure Which Concern Fits?
          </h2>
          <p className="text-gray-300 text-base mb-8 leading-relaxed">
            Book a skin analysis consultation and our experts will evaluate your skin,
            diagnose your concerns, and design a targeted treatment plan.
          </p>
          <Link
            to="/book"
            className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-white font-semibold px-10 py-4 rounded-full transition-colors shadow-lg text-base"
          >
            Book a Skin Analysis <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  )
}
