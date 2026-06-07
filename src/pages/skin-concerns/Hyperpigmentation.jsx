import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Sun, Shield, Sparkles, Droplets } from 'lucide-react'
import SectionHeader from '../../components/SectionHeader'

const types = [
  {
    name: 'Melasma',
    icon: <Sun className="w-6 h-6 text-spa" />,
    desc: 'Symmetrical brown or grayish patches triggered by hormonal changes (pregnancy, birth control) combined with UV exposure. Requires a multi-modal approach for lasting results.',
    note: 'Prone to recurrence without strict sun protection',
  },
  {
    name: 'Sunspots (Solar Lentigines)',
    icon: <Sun className="w-6 h-6 text-spa" />,
    desc: 'Flat brown spots caused by years of cumulative UV exposure. They commonly appear on the face, hands, shoulders, and décolletage. Highly treatable with professional protocols.',
    note: 'Often respond well after just 1–2 treatments',
  },
  {
    name: 'Post-Inflammatory Hyperpigmentation (PIH)',
    icon: <Droplets className="w-6 h-6 text-spa" />,
    desc: 'Dark marks left behind after acne, rashes, insect bites, or any skin trauma. More common and more intense in deeper skin tones due to higher melanocyte activity.',
    note: 'Fades progressively with targeted brightening treatments',
  },
  {
    name: 'Freckles & Ephelides',
    icon: <Sparkles className="w-6 h-6 text-spa" />,
    desc: 'Genetically influenced small brown spots that darken with sun exposure. While many clients embrace them, we offer gentle lightening protocols for those who prefer a more even tone.',
    note: 'Highly responsive to brightening peels',
  },
]

const treatments = [
  {
    name: 'Chemical Peels',
    subtitle: 'Lactic, Kojic & Tranexamic Acid Formulas',
    desc: 'Medical-grade brightening peels exfoliate pigmented skin cells, inhibit melanin production, and reveal a more uniform complexion. We select peel depth based on skin tone and concern type.',
    results: '4–6 sessions recommended',
    icon: <Sparkles className="w-8 h-8 text-spa-300" />,
  },
  {
    name: 'Brightening Korean Facial',
    subtitle: 'Our Signature Luminosity Protocol',
    desc: 'A luxurious multi-step facial combining enzyme exfoliation, vitamin C infusion, brightening ampoules, and LED yellow light therapy — crafted to target dark spots while delivering a healthy, lit-from-within glow.',
    results: 'Visible brightening after first session',
    icon: <Sun className="w-8 h-8 text-spa-300" />,
  },
  {
    name: 'Vitamin C IV Drip',
    subtitle: 'High-Dose Intravenous Brightening',
    desc: 'IV-administered vitamin C reaches concentrations impossible to achieve topically. It neutralizes free radicals, suppresses melanin synthesis, and supports collagen production for a radiant, even complexion from the inside out.',
    results: 'Systemic brightening, cumulative benefits',
    icon: <Droplets className="w-8 h-8 text-spa-300" />,
  },
  {
    name: 'Topical Brighteners & Home Care',
    subtitle: 'Medical-Grade Prescribed Regimens',
    desc: 'We curate personalized home-care protocols using prescription-strength and cosmeceutical brighteners — including azelaic acid, tretinoin, tranexamic acid, and custom compounded formulas.',
    results: 'Daily maintenance between visits',
    icon: <Shield className="w-8 h-8 text-spa-300" />,
  },
]

const ingredients = [
  { name: 'Kojic Acid', desc: 'Inhibits tyrosinase enzyme to reduce melanin synthesis' },
  { name: 'Niacinamide', desc: 'Blocks melanosome transfer from melanocytes to skin cells' },
  { name: 'Azelaic Acid', desc: 'Selectively targets overactive melanocytes; anti-inflammatory' },
  { name: 'Vitamin C (L-Ascorbic)', desc: 'Antioxidant that neutralizes free radicals and fades spots' },
  { name: 'Alpha Arbutin', desc: 'Slow-release hydroquinone alternative; safe for all skin tones' },
  { name: 'Tranexamic Acid', desc: 'Disrupts UV-induced pigmentation pathways; great for melasma' },
  { name: 'Retinoids (Tretinoin)', desc: 'Accelerates cell turnover to shed pigmented surface cells faster' },
  { name: 'Licorice Root Extract', desc: 'Natural melanin inhibitor; gentle and soothing on sensitive skin' },
]

export default function Hyperpigmentation() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative bg-espresso text-cream-200 py-28 px-6 overflow-hidden">
        <div className="relative max-w-4xl mx-auto text-center">
          <p className="text-spa text-[10px] font-medium tracking-widest uppercase mb-4">Skin Concern</p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold leading-tight mb-6">
            Hyperpigmentation<br />&amp; Dark Spots
          </h1>
          <p className="text-cream-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Uneven skin tone doesn't have to be permanent. Our brightening protocols are designed to fade dark spots, correct discoloration, and restore a luminous, even complexion.
          </p>
          <Link
            to="/book"
            className="inline-flex items-center gap-2 bg-cream-100 hover:bg-white text-espresso text-[10px] tracking-widest uppercase font-medium px-8 py-4 transition-all duration-300"
          >
            Book a Brightening Consultation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Types of Hyperpigmentation */}
      <section className="py-20 px-6 bg-cream-100">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Understanding Pigmentation"
            title="Types of Hyperpigmentation We Treat"
            subtitle="Not all dark spots are created equal. Identifying the type of pigmentation is the first step toward choosing the right treatment approach."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            {types.map((t) => (
              <div key={t.name} className="bg-white p-6 shadow-sm border border-cream-300 hover:shadow-md transition hover:border-spa">
                <div className="flex items-center gap-3 mb-3">
                  {t.icon}
                  <h3 className="font-serif text-lg font-bold text-espresso">{t.name}</h3>
                </div>
                <p className="text-espresso-500 text-sm leading-relaxed mb-3">{t.desc}</p>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-spa flex-shrink-0" />
                  <p className="text-spa-500 text-xs font-semibold">{t.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Protocol Cards */}
      <section className="py-20 px-6 bg-espresso">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Our Protocols"
            title="Brightening Treatments We Offer"
            subtitle="Each treatment is selected based on your pigmentation type, skin tone, and lifestyle for the safest, most effective outcome."
            light={true}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            {treatments.map((t) => (
              <div key={t.name} className="bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition flex flex-col gap-4">
                <div className="flex items-start gap-4">
                  <div className="bg-spa/10 p-3 flex-shrink-0">{t.icon}</div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-cream-100 mb-1">{t.name}</h3>
                    <p className="text-spa-300 text-[10px] font-medium tracking-widest uppercase">{t.subtitle}</p>
                  </div>
                </div>
                <p className="text-cream-300 text-sm leading-relaxed">{t.desc}</p>
                <span className="inline-block self-start bg-spa/20 text-spa-300 text-[10px] font-medium px-3 py-1 tracking-widest uppercase">
                  {t.results}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ingredients That Work */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            eyebrow="Key Actives"
            title="Ingredients That Actually Work"
            subtitle="Our brightening protocols are built around clinically validated ingredients — each with a distinct mechanism for reducing and preventing pigmentation."
          />
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {ingredients.map((ing) => (
              <div
                key={ing.name}
                className="group relative bg-cream-100 border border-cream-300 text-espresso-600 text-sm font-semibold px-4 py-2 cursor-default hover:bg-espresso hover:text-cream-100 hover:border-espresso transition-all duration-200"
                title={ing.desc}
              >
                {ing.name}
                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-56 bg-espresso text-cream-100 text-xs px-3 py-2 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 z-10 text-center leading-snug">
                  {ing.desc}
                </span>
              </div>
            ))}
          </div>
          <p className="text-center text-espresso-400 text-xs mt-5">Hover over each ingredient to learn how it targets pigmentation.</p>
        </div>
      </section>

      {/* Sun Protection Message */}
      <section className="py-16 px-6 bg-cream-200 border-y border-cream-300">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-cream-300 mb-5">
            <Sun className="w-7 h-7 text-espresso" />
          </div>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-espresso mb-4">
            Sun Protection Is Non-Negotiable
          </h2>
          <p className="text-espresso-500 text-base leading-relaxed mb-4">
            No brightening treatment works in isolation. UV exposure is the single biggest trigger for melanin overproduction — and undoes even the most advanced professional treatments. We require all pigmentation clients to use a broad-spectrum SPF 50 daily, rain or shine, indoors or outdoors.
          </p>
          <p className="text-spa font-semibold text-sm">
            We'll recommend the best medical-grade SPF for your skin type at your consultation.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-espresso text-cream-200 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-4xl font-bold mb-4">Reveal Your Most Even Skin</h2>
          <p className="text-cream-300 text-lg mb-8 leading-relaxed">
            Book a pigmentation consultation and let our experts design a personalized brightening protocol tailored to your skin tone, lifestyle, and goals.
          </p>
          <Link
            to="/book"
            className="inline-flex items-center gap-2 bg-cream-100 hover:bg-white text-espresso text-[10px] tracking-widest uppercase font-medium px-10 py-4 transition-all duration-300"
          >
            Book Now <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
