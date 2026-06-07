import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Zap } from 'lucide-react'
import SectionHeader from '../../components/SectionHeader'

const ivDrips = [
  { emoji: '💧', name: "Myers' Cocktail", desc: 'The gold standard IV — magnesium, B vitamins, vitamin C, and calcium to boost energy, immunity, and overall wellness.', time: '30–45 min' },
  { emoji: '✨', name: 'Mega Vitamin C', desc: 'High-dose vitamin C for immune defense, collagen synthesis, skin brightening, and antioxidant protection.', time: '45–60 min' },
  { emoji: '🧠', name: 'NAD+', desc: 'Nicotinamide adenine dinucleotide — supports cellular energy, brain function, metabolism, and anti-aging at the cellular level.', time: '2–4 hrs' },
  { emoji: '⚖️', name: 'Weight Loss Drip', desc: 'Lipo-B complex, methionine, inositol, and choline to accelerate fat metabolism and enhance your weight loss program.', time: '45 min' },
  { emoji: '💦', name: 'Hydration & Recovery', desc: 'Pure saline with electrolytes and B12 to rapidly rehydrate, reduce fatigue, and restore peak performance after workouts or illness.', time: '30 min' },
  { emoji: '🛡️', name: 'Immunity Boost', desc: 'Zinc, high-dose vitamin C, glutathione, and B complex to rapidly strengthen your immune response.', time: '45 min' },
  { emoji: '💎', name: 'Beauty Drip', desc: 'Glutathione, biotin, vitamin C, and collagen-boosting nutrients for radiant skin, strong nails, and lustrous hair.', time: '45 min' },
  { emoji: '🔥', name: 'Energy & Performance', desc: 'B12, B complex, amino acids, and magnesium to power through fatigue and optimize athletic performance.', time: '30–45 min' },
]

const shots = [
  { emoji: '⚡', name: 'Vitamin B12', desc: 'Boost energy, support neurological function, and improve mood — essential for those with deficiencies or fatigue.' },
  { emoji: '🔥', name: 'Lipo-C (MIC) Shot', desc: 'Methionine, Inositol, Choline + B12 — a powerful fat-burning cocktail that accelerates metabolism and targets stored fat.' },
  { emoji: '✨', name: 'Glutathione', desc: "The body's master antioxidant — reduces oxidative stress, brightens skin, supports liver detox, and boosts immunity." },
  { emoji: '☀️', name: 'Vitamin D3', desc: 'Critical for bone health, immune function, mood regulation, and hormonal balance — most adults are deficient.' },
  { emoji: '💪', name: 'Toradol (Anti-Inflammatory)', desc: 'Fast-acting pain and inflammation relief — ideal for post-workout soreness, headaches, or post-procedure recovery.' },
  { emoji: '🧬', name: 'Biotin', desc: 'Supports hair growth, nail strength, and skin health from within.' },
]

export default function IVsShots() {
  return (
    <>
      <section className="bg-gradient-to-br from-gray-900 to-blue-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gold-400 text-xs font-bold tracking-[0.3em] uppercase mb-4">Weight & Metabolic Health</p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-5">IVs + Intramuscular Shots</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Deliver essential nutrients directly into your bloodstream for 100% absorption — maximum results, minimum wait. Our IV drips and IM shots support weight loss, energy, immunity, beauty, and recovery.
          </p>
        </div>
      </section>

      {/* Why IV */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-gold-500 text-xs font-bold tracking-[0.3em] uppercase mb-3">Why IV Therapy?</p>
              <h2 className="font-serif text-4xl font-bold text-gray-900 mb-5">100% Bioavailability. Zero Guesswork.</h2>
              <p className="text-gray-600 leading-relaxed mb-6">When you take oral supplements, your digestive system absorbs only 20–50% of the nutrients. IV therapy bypasses digestion entirely, delivering vitamins, minerals, and amino acids directly into your bloodstream for immediate, full absorption.</p>
              <div className="space-y-3">
                {['Instant energy and hydration', 'Superior absorption vs. oral supplements', 'Customized to your specific needs', 'Administered by registered nurses', 'Results felt within hours'].map((b) => (
                  <div key={b} className="flex items-center gap-3">
                    <CheckCircle size={16} className="text-gold-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{b}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[{ emoji: '⚡', label: 'Energy Boost', val: 'Felt in hours' }, { emoji: '💊', label: 'Absorption Rate', val: '100% vs 20–50%' }, { emoji: '⏱️', label: 'Session Time', val: '30–60 min' }, { emoji: '🏥', label: 'Administered By', val: 'Registered Nurses' }].map((s) => (
                <div key={s.label} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-5 text-center border border-blue-100">
                  <div className="text-3xl mb-2">{s.emoji}</div>
                  <div className="font-bold text-gray-900 text-sm">{s.val}</div>
                  <div className="text-gray-500 text-xs mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* IV Drips */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <SectionHeader eyebrow="IV Drip Menu" title="Our IV Therapy Menu" subtitle="Each drip is prepared fresh and customized to your health goals by our medical team." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {ivDrips.map((drip) => (
              <div key={drip.name} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
                <div className="text-3xl mb-3">{drip.emoji}</div>
                <h3 className="font-serif font-bold text-gray-900 mb-2 text-sm">{drip.name}</h3>
                <p className="text-gray-500 text-xs leading-relaxed mb-3">{drip.desc}</p>
                <span className="text-xs text-blue-600 font-semibold bg-blue-50 px-2 py-1 rounded-full">⏱ {drip.time}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IM Shots */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader eyebrow="Intramuscular Shots" title="Quick-Hit IM Shots" subtitle="Fast, effective, and affordable — our IM shots deliver targeted nutrients in under 5 minutes with no appointment wait." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {shots.map((shot) => (
              <div key={shot.name} className="bg-gradient-to-br from-gold-50 to-amber-50 rounded-2xl p-6 border border-gold-100">
                <div className="text-3xl mb-3">{shot.emoji}</div>
                <h3 className="font-serif font-bold text-gray-900 mb-2">{shot.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{shot.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-r from-blue-900 to-indigo-900 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <div className="text-5xl mb-5">💧</div>
          <h2 className="font-serif text-4xl font-bold mb-4">Ready to Recharge?</h2>
          <p className="text-blue-200 mb-8">Walk ins welcome for most IM shots. IV drips are by appointment — book yours today.</p>
          <Link to="/book" className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-white font-semibold px-10 py-4 rounded-full transition-colors shadow-lg">
            Book Your IV Session <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  )
}
