import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, AlertCircle, Layers, Zap, Sparkles, Shield } from 'lucide-react'
import SectionHeader from '../../components/SectionHeader'

const types = [
  {
    name: 'Stretch Marks (Striae)',
    desc: 'Caused by rapid stretching of the skin during pregnancy, puberty, weight fluctuations, or muscle building. New (red/purple) stretch marks respond faster than mature (white/silver) ones.',
    responsive: 'Highly treatable when addressed early',
    icon: <Layers className="w-6 h-6 text-spa" />,
  },
  {
    name: 'Surgical Scars',
    desc: 'Post-operative scars from C-sections, cosmetic surgery, or medical procedures. With the right timing and protocol, these can be significantly softened, flattened, and blended into surrounding skin.',
    responsive: 'Best treated after full wound closure (6+ weeks post-surgery)',
    icon: <Shield className="w-6 h-6 text-spa" />,
  },
  {
    name: 'Acne Scars',
    desc: 'Textural depressions (icepick, boxcar, rolling) and raised scars (hypertrophic) left after severe or picked breakouts. Multiple modalities are often combined for comprehensive resurfacing.',
    responsive: 'Texture and depth improve significantly with a treatment series',
    icon: <Sparkles className="w-6 h-6 text-spa" />,
  },
  {
    name: 'Keloids',
    desc: 'Overgrown scar tissue that extends beyond the original wound boundary. Keloids require a careful consultation before treatment — not all modalities are appropriate. We assess each case individually.',
    responsive: 'Consultation required — not all keloids are candidates',
    icon: <AlertCircle className="w-6 h-6 text-espresso-400" />,
    isWarning: true,
  },
]

const howItWorks = [
  {
    title: 'Collagen Induction & Remodeling',
    desc: 'Controlled micro-injuries (via microneedling or RF energy) trigger the skin\'s natural wound-healing cascade — releasing growth factors and stimulating new collagen and elastin synthesis. Over weeks and months, this fresh collagen fills in depressions, softens texture, and strengthens the skin matrix.',
    icon: <Zap className="w-8 h-8 text-spa-300" />,
  },
  {
    title: 'Skin Resurfacing',
    desc: 'Chemical peels and exfoliation treatments remove damaged, discolored surface layers of skin, encouraging healthy new cells to emerge. This improves both the color and texture of scarred tissue and reduces the contrast between scars and surrounding skin.',
    icon: <Layers className="w-8 h-8 text-spa-300" />,
  },
]

const treatments = [
  {
    name: 'Microneedling (Collagen Induction Therapy)',
    subtitle: 'FDA-Cleared Skin Needling',
    desc: 'Precise micro-channels created in the dermis stimulate collagen production and allow topical growth factors to penetrate deeply. Effective for both stretch marks and depressed scars. A series of 4–6 sessions spaced 4 weeks apart delivers progressive improvement.',
    results: '4–6 sessions for optimal results',
    badge: 'Gold Standard',
  },
  {
    name: 'Chemical Peels',
    subtitle: 'TCA, Lactic & Glycolic Formulas',
    desc: 'Medium-depth peels resurface the top layers of skin, blending the color difference between scars and healthy skin while promoting new cell turnover. Particularly effective for post-inflammatory marks and surface-level scarring.',
    results: '3–5 days downtime for medium peels',
    badge: 'Resurfacing',
  },
  {
    name: 'RF Skin Tightening',
    subtitle: 'Radiofrequency Collagen Stimulation',
    desc: 'Radiofrequency energy heats the deep dermis to stimulate collagen remodeling without surface damage. Excellent for stretch marks on the abdomen, thighs, arms, and buttocks — tightens surrounding skin while improving texture.',
    results: 'Progressive tightening over 3–6 months',
    badge: 'No Downtime',
  },
  {
    name: 'Medical Body Facials',
    subtitle: 'Body Treatment Protocol',
    desc: 'Our specialized body facial combines enzymatic exfoliation, brightening serums, and targeted massage to hydrate, soften, and improve the appearance of stretch marks and scars on the body — a relaxing yet results-driven treatment.',
    results: 'Immediate softening; cumulative with series',
    badge: 'Relaxing & Effective',
  },
]

const expectations = [
  {
    phase: 'Months 1–2',
    note: 'Initial improvements in texture and color begin to emerge. Inflammation subsides; skin starts producing new collagen in response to treatment.',
  },
  {
    phase: 'Months 3–4',
    note: 'Visible reduction in scar depth and stretch mark width. Skin tone in the treated area becomes more uniform and blends better with surrounding skin.',
  },
  {
    phase: 'Months 5–6',
    note: 'Collagen remodeling matures. Most clients see 40–70% improvement in texture and appearance. Stretch marks become significantly less noticeable.',
  },
  {
    phase: 'Ongoing',
    note: 'Maintenance sessions every 3–6 months preserve results. Combined home-care with retinoids and peptides extends and deepens outcomes between visits.',
  },
]

export default function StretchMarksScars() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative bg-espresso text-cream-200 py-28 px-6 overflow-hidden">
        <div className="relative max-w-4xl mx-auto text-center">
          <p className="text-spa text-[10px] font-medium tracking-widest uppercase mb-4">Skin Concern</p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold leading-tight mb-6">
            Stretch Marks<br />&amp; Scars
          </h1>
          <p className="text-cream-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Your skin tells your story — but you get to decide how that story is written. Our advanced resurfacing and collagen-stimulating treatments help fade stretch marks and scars so you feel confident in every inch of your skin.
          </p>
          <Link
            to="/book"
            className="inline-flex items-center gap-2 bg-cream-100 hover:bg-white text-espresso text-[10px] tracking-widest uppercase font-medium px-8 py-4 transition-all duration-300"
          >
            Book a Skin Consultation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Types We Treat */}
      <section className="py-20 px-6 bg-cream-100">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="What We Treat"
            title="Types of Scars & Stretch Marks"
            subtitle="Each type of scarring has its own biology and requires a tailored approach. Our team assesses your specific concern before recommending any protocol."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            {types.map((t) => (
              <div
                key={t.name}
                className={`bg-white p-6 shadow-sm border transition hover:shadow-md ${t.isWarning ? 'border-espresso-400/40' : 'border-cream-300 hover:border-spa'}`}
              >
                <div className="flex items-center gap-3 mb-3">
                  {t.icon}
                  <h3 className="font-serif text-lg font-bold text-espresso">{t.name}</h3>
                </div>
                <p className="text-espresso-500 text-sm leading-relaxed mb-3">{t.desc}</p>
                <div className={`flex items-center gap-2 text-xs font-semibold ${t.isWarning ? 'text-espresso-500' : 'text-spa-500'}`}>
                  {t.isWarning
                    ? <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    : <CheckCircle className="w-4 h-4 flex-shrink-0" />}
                  {t.responsive}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Our Treatments Work */}
      <section className="py-20 px-6 bg-espresso text-cream-200">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            eyebrow="The Science"
            title="How Our Treatments Work"
            subtitle="We use two primary mechanisms to improve the appearance of stretch marks and scars — each targeting a different layer and aspect of skin structure."
            light={true}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
            {howItWorks.map((item) => (
              <div key={item.title} className="bg-white/5 border border-white/10 p-8">
                <div className="bg-spa/10 w-14 h-14 flex items-center justify-center mb-5">
                  {item.icon}
                </div>
                <h3 className="font-serif text-xl font-bold text-cream-100 mb-3">{item.title}</h3>
                <p className="text-cream-300 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Options */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Our Protocols"
            title="Treatment Options"
            subtitle="All treatments are performed by licensed professionals. We often combine modalities for the best possible outcome."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            {treatments.map((t) => (
              <div key={t.name} className="bg-cream-100 border border-cream-300 p-6 hover:shadow-md transition hover:border-spa">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-serif text-xl font-bold text-espresso">{t.name}</h3>
                  <span className="bg-cream-200 text-espresso-600 text-[10px] font-bold px-3 py-1 tracking-widest uppercase border border-cream-300 flex-shrink-0">{t.badge}</span>
                </div>
                <p className="text-spa text-[10px] font-medium uppercase tracking-wide mb-3">{t.subtitle}</p>
                <p className="text-espresso-500 text-sm leading-relaxed mb-4">{t.desc}</p>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-spa flex-shrink-0" />
                  <span className="text-espresso-500 text-sm font-medium">{t.results}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Realistic Expectations */}
      <section className="py-20 px-6 bg-cream-100">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            eyebrow="Honest Timeline"
            title="Realistic Expectations"
            subtitle="We believe in transparency. Scars and stretch marks improve significantly with treatment — but results take time as your skin rebuilds from within."
          />
          <div className="mt-8 space-y-4">
            {expectations.map((row) => (
              <div key={row.phase} className="flex gap-4 items-start bg-white border border-cream-300 p-5 shadow-sm">
                <span className="text-espresso font-bold text-sm w-28 flex-shrink-0">{row.phase}</span>
                <p className="text-espresso-500 text-sm leading-relaxed">{row.note}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-cream-200 border border-cream-300 p-5 flex gap-4 items-start">
            <AlertCircle className="w-5 h-5 text-espresso-500 flex-shrink-0 mt-0.5" />
            <p className="text-espresso-500 text-sm leading-relaxed">
              <strong className="text-espresso">Important:</strong> Results vary based on scar type, age, depth, skin tone, and individual healing response. We will provide an honest, personalized assessment at your consultation — including what improvements are realistic for your specific situation.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-espresso text-cream-200 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-4xl font-bold mb-4">Reclaim Your Confidence</h2>
          <p className="text-cream-300 text-lg mb-8 leading-relaxed">
            Whether it's stretch marks from pregnancy or scars from your past, we'll create a treatment plan designed around your body, your skin, and your goals.
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
