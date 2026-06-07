import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Activity } from 'lucide-react'
import SectionHeader from '../../components/SectionHeader'

const panels = [
  'Complete Blood Count (CBC)', 'Comprehensive Metabolic Panel', 'Thyroid Panel (TSH, T3, T4)', 'Sex Hormones (Testosterone, Estrogen, Progesterone)', 'DHEA-S & Cortisol', 'Insulin & Fasting Glucose', 'HbA1c (3-Month Blood Sugar)', 'Lipid Panel (Cholesterol)', 'C-Reactive Protein (CRP)', 'Homocysteine', 'Vitamin D, B12 & Folate', 'Iron & Ferritin', 'Liver & Kidney Function', 'Omega-3 Index', 'Heavy Metal Screening (optional)',
]

const longevity = [
  { emoji: '🧬', title: 'NAD+ Therapy', desc: 'Replenish cellular energy currency that declines with age — supporting brain function, metabolism, DNA repair, and longevity.' },
  { emoji: '⚡', title: 'Hormone Optimization', desc: 'Using your lab results, we create a personalized hormone balancing protocol to restore vitality, mood, and body composition.' },
  { emoji: '🧘', title: 'Metabolic Optimization', desc: 'Tailored nutrition, supplementation, and lifestyle protocols based on your bloodwork to keep your metabolism firing at full capacity.' },
  { emoji: '💉', title: 'Peptide Protocols', desc: 'Select peptide therapies to support cellular repair, immune function, and anti-aging processes at the molecular level.' },
]

export default function BloodTestsLongevity() {
  return (
    <>
      <section className="bg-gradient-to-br from-gray-900 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gold-400 text-xs font-bold tracking-[0.3em] uppercase mb-4">Weight & Metabolic Health</p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-5">Blood Tests & Longevity</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            You cannot optimize what you haven't measured. Our comprehensive blood panels reveal exactly what's happening inside your body — so we can build a personalized wellness protocol that truly works for you.
          </p>
        </div>
      </section>

      {/* Blood Panel */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader eyebrow="Comprehensive Blood Analysis" title="What We Test" subtitle="Our advanced panel goes far beyond a standard physical. We look at over 60 biomarkers across every major system to build a complete picture of your health." />
          <div className="flex flex-wrap gap-3 justify-center mb-14">
            {panels.map((p) => (
              <span key={p} className="bg-slate-50 border border-slate-200 text-slate-700 text-sm px-4 py-2 rounded-full font-medium">
                {p}
              </span>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { emoji: '🔍', title: 'Detailed Review', desc: 'A board-certified physician reviews every marker with you in a 1-on-1 consultation — not just flagged values, but optimal ranges.' },
              { emoji: '📋', title: 'Custom Protocol', desc: 'Based on your results, we create a personalized plan covering nutrition, supplementation, hormones, and lifestyle.' },
              { emoji: '📈', title: 'Progress Tracking', desc: 'Repeat testing at 3–6 month intervals to measure your progress and refine your protocol over time.' },
            ].map((s) => (
              <div key={s.title} className="bg-gradient-to-br from-slate-50 to-gray-50 rounded-2xl p-8 border border-slate-100 text-center">
                <div className="text-4xl mb-4">{s.emoji}</div>
                <h3 className="font-serif text-lg font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Longevity */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <SectionHeader eyebrow="Longevity Services" title="Personalized Wellness Protocols" subtitle="After your blood analysis, our medical team builds a longevity-focused protocol designed around your unique biology." />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {longevity.map((l) => (
              <div key={l.title} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm flex gap-5">
                <div className="text-4xl flex-shrink-0">{l.emoji}</div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-gray-900 mb-2">{l.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{l.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-slate-900 to-gray-900 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <div className="text-5xl mb-5">🔬</div>
          <h2 className="font-serif text-4xl font-bold mb-4">Know Your Numbers. Own Your Health.</h2>
          <p className="text-gray-300 mb-3 leading-relaxed">Book a consultation and receive your personalized wellness protocol based on comprehensive blood analysis.</p>
          <p className="text-gold-400 text-sm font-semibold mb-8">Complimentary consultation included with every full blood panel.</p>
          <Link to="/book" className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-white font-semibold px-10 py-4 rounded-full transition-colors shadow-lg">
            Book Your Blood Panel Consultation <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  )
}
