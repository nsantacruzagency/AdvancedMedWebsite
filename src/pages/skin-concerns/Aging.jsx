import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Sun, Layers, Droplets, Heart } from 'lucide-react'
import SectionHeader from '../../components/SectionHeader'

const agingFactors = [
  {
    icon: <Layers className="w-7 h-7 text-gold-500" />,
    title: 'Collagen & Elastin Loss',
    desc: 'After 25, collagen production drops roughly 1% per year. Less collagen means thinner skin, fine lines, and sagging — especially around the eyes and mouth.',
  },
  {
    icon: <Sun className="w-7 h-7 text-gold-500" />,
    title: 'UV Damage (Photoaging)',
    desc: 'Up to 80% of visible aging is caused by cumulative UV exposure — breaking down collagen, causing pigmentation, and degrading skin\'s structural proteins.',
  },
  {
    icon: <Droplets className="w-7 h-7 text-gold-500" />,
    title: 'Volume & Fat Loss',
    desc: 'Facial fat pads diminish with age, causing hollowing under the eyes, flattening of cheeks, and deepening of nasolabial folds.',
  },
]

const treatments = [
  {
    name: 'Botox & Neurotoxins',
    areas: ['Forehead lines', 'Crow\'s feet', 'Frown lines (11s)', 'Brow lift', 'Lip flip', 'Neck bands'],
    desc: 'Precise injections of botulinum toxin relax the muscles responsible for dynamic wrinkles, resulting in a smoother, more refreshed appearance — without looking "frozen."',
    expect: 'Results visible in 3–7 days, lasting 3–4 months',
    badge: 'Most Popular',
  },
  {
    name: 'Skin Tightening (RF/HIFU)',
    areas: ['Jowls & jawline', 'Neck laxity', 'Brow & eyelid area', 'Décolletage'],
    desc: 'Radiofrequency and High-Intensity Focused Ultrasound (HIFU) deliver controlled heat deep into the dermis, stimulating new collagen and firming loose skin non-surgically.',
    expect: 'Progressive improvement over 3–6 months',
    badge: 'No Downtime',
  },
  {
    name: 'Anti-Aging Korean Facial',
    areas: ['Full face', 'Neck & décolletage', 'Eye area', 'Lip lines'],
    desc: 'Our signature anti-aging facial combines gua sha sculpting, hyaluronic acid infusion, peptide ampoules, and LED red light therapy to plump and brighten in one session.',
    expect: 'Instant radiance, cumulative lifting with a series',
    badge: 'Our Signature',
  },
  {
    name: 'Chemical Peels',
    areas: ['Fine lines', 'Texture', 'Dullness', 'Sun damage'],
    desc: 'Medium-depth peels using TCA, lactic, and glycolic acids accelerate cellular turnover, resurface the top layers of skin, and reveal fresher, younger-looking skin beneath.',
    expect: '3–5 days downtime for medium peels',
    badge: 'Resurfacing',
  },
  {
    name: 'Medical-Grade Retinoids',
    areas: ['Fine lines', 'Skin texture', 'Pigmentation', 'Firmness'],
    desc: 'Prescription-strength retinoids (tretinoin) are the gold standard in anti-aging — clinically proven to increase collagen, speed cell turnover, and fade discoloration.',
    expect: 'Consistent use required for 12+ weeks',
    badge: 'Science-Backed',
  },
]

const philosophy = [
  'We believe in enhancement, not alteration — you should look like yourself, only refreshed.',
  'Every treatment plan is individualized. There is no one-size-fits-all approach to aging.',
  'We use conservative dosing and precise placement to preserve natural movement and expression.',
  'We combine treatments strategically for synergistic results — often less is more.',
  'Education is part of every visit. You\'ll always understand what we\'re doing and why.',
]

export default function Aging() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-gray-950 via-gray-900 to-stone-900 text-white py-28 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-gold-400 to-transparent pointer-events-none" />
        <div className="relative max-w-4xl mx-auto text-center">
          <p className="text-gold-400 text-xs font-bold tracking-[0.3em] uppercase mb-4">Skin Concern</p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold leading-tight mb-6">
            Aging &amp; Wrinkles
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Age gracefully on your own terms. Our advanced anti-aging protocols help you look as vibrant as you feel — naturally, not frozen.
          </p>
          <Link
            to="/book"
            className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-gold-500/30 hover:scale-105"
          >
            Book Anti-Aging Consultation <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* How Skin Ages */}
      <section className="py-20 px-6 bg-gold-50">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Understanding Aging"
            title="How Your Skin Changes Over Time"
            subtitle="Aging is a natural process — but understanding its mechanisms allows us to slow, reverse, and prevent many of its visible signs."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
            {agingFactors.map((f) => (
              <div key={f.title} className="bg-white rounded-2xl p-8 shadow-sm border border-gold-100 hover:shadow-md transition">
                <div className="mb-4">{f.icon}</div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-3">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Menu */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Treatment Options"
            title="Our Anti-Aging Treatment Menu"
            subtitle="A curated selection of proven modalities — each chosen for its clinical efficacy, safety profile, and aesthetic results."
          />
          <div className="space-y-6 mt-6">
            {treatments.map((t) => (
              <div key={t.name} className="bg-gray-50 border border-gray-100 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-serif text-2xl font-bold text-gray-900">{t.name}</h3>
                    <span className="bg-gold-100 text-gold-700 text-xs font-bold px-3 py-1 rounded-full">{t.badge}</span>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{t.desc}</p>
                  <p className="text-gold-600 text-sm font-semibold">{t.expect}</p>
                </div>
                <div className="md:w-56 flex-shrink-0">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Treatment Areas</p>
                  <ul className="space-y-1">
                    {t.areas.map((a) => (
                      <li key={a} className="flex items-center gap-2 text-gray-600 text-sm">
                        <CheckCircle className="w-4 h-4 text-gold-500 flex-shrink-0" /> {a}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-900 to-gray-950 text-white">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            eyebrow="Our Philosophy"
            title="Natural, Not Frozen"
            subtitle="We believe the best anti-aging results are the ones nobody can quite put their finger on — you just look well-rested and radiant."
          />
          <div className="mt-8 space-y-4">
            {philosophy.map((p) => (
              <div key={p} className="flex gap-4 items-start bg-white/5 border border-white/10 rounded-xl p-5">
                <Heart className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                <p className="text-gray-300 text-sm leading-relaxed">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-r from-gold-500 to-gold-600 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-4xl font-bold mb-4">Begin Your Anti-Aging Journey</h2>
          <p className="text-white/85 text-lg mb-8 leading-relaxed">
            Schedule a consultation with our aesthetic experts and discover which combination of treatments will give you your most confident look yet.
          </p>
          <Link
            to="/book"
            className="inline-flex items-center gap-2 bg-white text-gold-600 font-bold px-10 py-4 rounded-full hover:bg-gold-50 transition-all duration-300 shadow-lg hover:scale-105"
          >
            Book Now <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
