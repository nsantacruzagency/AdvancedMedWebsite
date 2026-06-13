import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, AlertCircle, Layers, Zap, Sparkles, Shield } from 'lucide-react'
import SectionHeader from '../../components/SectionHeader'
import HeroPhoto from '../../components/HeroPhoto'
import FAQ from '../../components/FAQ'
import BeforeAfter from '../../components/BeforeAfter'

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
    desc: 'Overgrown scar tissue that extends beyond the original wound boundary. Keloids require a careful evaluation before treatment — not all modalities are appropriate. We assess each case individually.',
    responsive: 'Evaluation required — not all keloids are candidates',
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

const beforeAfterItems = [
  {
    label: 'Pregnancy Stretch Marks — 12 Weeks',
    result: 'Color normalization and texture improvement following collagen induction therapy series.',
    beforeSrc: '/images/before-after/stretch-marks-pregnancy-12-weeks/before.jpg',
    afterSrc: '/images/before-after/stretch-marks-pregnancy-12-weeks/after.jpg',
    beforeAlt: 'Pregnancy stretch marks before treatment',
    afterAlt: 'Pregnancy stretch marks after 12 weeks of collagen induction therapy',
  },
  {
    label: 'Surgical Scar — 16 Weeks',
    result: 'Flattened, lightened scar following RF resurfacing and medical-grade silicone protocol.',
    beforeSrc: '/images/before-after/scars-surgical-16-weeks/before.jpg',
    afterSrc: '/images/before-after/scars-surgical-16-weeks/after.jpg',
    beforeAlt: 'Surgical scar before treatment',
    afterAlt: 'Surgical scar after 16 weeks of RF resurfacing',
  },
  {
    label: 'Acne Scars — 20 Weeks',
    result: 'Rolling and boxcar acne scars significantly smoother after microneedling and chemical peel combination.',
    beforeSrc: '/images/before-after/scars-acne-20-weeks/before.jpg',
    afterSrc: '/images/before-after/scars-acne-20-weeks/after.jpg',
    beforeAlt: 'Acne scars before treatment',
    afterAlt: 'Acne scars after 20 weeks of microneedling and chemical peel',
  },
]

const faqItems = [
  {
    q: 'Can stretch marks be completely removed?',
    a: 'Complete removal of stretch marks is not currently possible with any non-surgical treatment. However, significant improvement in color, texture, and overall appearance is achievable. Newer stretch marks (red or purple) respond much better than mature white or silver ones. Most clients see 40–70% improvement with a consistent treatment series.',
  },
  {
    q: 'What types of scars respond best to treatment?',
    a: 'Atrophic scars — including rolling, boxcar, and icepick acne scars — and post-surgical scars respond very well to our protocols. Hypertrophic scars also improve with treatment. Keloid scars require a careful individual assessment before any treatment is recommended, as not all modalities are appropriate.',
  },
  {
    q: 'Is microneedling painful?',
    a: 'We apply a topical numbing cream before every microneedling session to ensure your comfort. Most clients describe the sensation as mild pressure or a slight buzzing feeling. Treated areas may appear red for 24–48 hours afterward, similar to a mild sunburn, which resolves quickly.',
  },
  {
    q: 'How many sessions are needed for scars?',
    a: 'The number of sessions varies by scar type, depth, age, and your individual healing response. Most scar treatment protocols consist of 4–6 sessions spaced 4 weeks apart for microneedling, and 3–4 sessions for chemical peels. We often combine modalities for the most comprehensive outcome.',
  },
  {
    q: 'Can keloid scars be treated?',
    a: 'Keloids require careful assessment before any treatment, as certain modalities can stimulate further growth. We evaluate each keloid individually and only recommend treatments with a favorable risk profile for your specific case. Some keloids do respond well to carefully managed protocols — we will be fully transparent about what is realistic for your situation.',
  },
  {
    q: 'Are results permanent?',
    a: 'The collagen remodeling triggered by treatment is long-lasting, but it does not stop the natural aging process. Results can last several years with proper home care including SPF, retinoids, and hydration. Maintenance sessions every 6–12 months help preserve and build upon initial improvements.',
  },
]

export default function StretchMarksScars() {
  return (
    <div className="bg-white">
      <HeroPhoto
        eyebrow="Skin Concerns"
        title={"Stretch Marks\n& Scars"}
        subtitle="Visible reminders of your story — treated with clinical precision and compassionate care."
        gradient="from-espresso-800 via-spa-800 to-espresso-700"
        gradientDir="to-tr"
        radialPos="bottom_left"
      />

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

      <BeforeAfter heading="Real Client Results" items={beforeAfterItems} />

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
              <strong className="text-espresso">Important:</strong> Results vary based on scar type, age, depth, skin tone, and individual healing response. We will provide an honest, personalized assessment at your evaluation — including what improvements are realistic for your specific situation.
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

      <FAQ items={faqItems} />
    </div>
  )
}
