import { ArrowRight, CheckCircle } from 'lucide-react'
import SectionHeader from '../../components/SectionHeader'
import HeroPhoto from '../../components/HeroPhoto'
import BeforeAfter from '../../components/BeforeAfter'
import FAQ from '../../components/FAQ'

const faqItems = [
  {
    q: 'Why does rapid weight loss cause loose skin?',
    a: 'When fat cells shrink quickly — as happens with GLP-1 medications like semaglutide and tirzepatide — the overlying skin doesn\'t have time to contract at the same rate. Collagen and elastin fibers, which give skin its structure and snap, become overstretched and lose their integrity. The result is loose, crepey, or sagging tissue that doesn\'t reflect the transformation underneath.',
  },
  {
    q: 'How does radiofrequency skin tightening work?',
    a: 'Radiofrequency (RF) energy heats the dermis — the deeper structural layer of skin — to a precise therapeutic temperature. This heat causes immediate contraction of existing collagen fibers while triggering a wound-healing response that stimulates new collagen and elastin production over the following weeks and months. The result is progressively firmer, denser, more youthful-looking skin from the inside out.',
  },
  {
    q: 'When should I start skin tightening treatments alongside GLP-1 therapy?',
    a: 'Ideally, we begin skin tightening treatments proactively — as soon as you start your GLP-1 protocol. Treating the skin while it\'s still losing ground (rather than after significant laxity has developed) produces the best long-term results. We can absolutely begin treatments after weight loss as well, but earlier intervention generally means tighter outcomes.',
  },
  {
    q: 'How many sessions will I need?',
    a: 'Most clients begin to see meaningful improvement in skin firmness and texture after 4–6 sessions spaced 1–2 weeks apart. For significant laxity following major weight loss, an initial series of 8–12 treatments is common. We reassess your results at each visit and adjust the protocol accordingly. Maintenance sessions every 1–3 months help sustain and build on your results over time.',
  },
  {
    q: 'Can skin tightening treatments be combined with other services?',
    a: 'Absolutely — and combination protocols typically produce the best outcomes. We frequently pair RF skin tightening with EMS body sculpting to simultaneously tighten skin and build underlying muscle definition, lymphatic drainage to reduce fluid retention and improve tissue quality, and body contouring massages to smooth contours and enhance results.',
  },
]

export default function PostGLPSkinTightening() {
  return (
    <div className="bg-white">
      <HeroPhoto
        eyebrow="Body Aesthetics"
        title={<>Post-GLP-1<br />Skin Tightening</>}
        subtitle="GLP-1 medications can deliver dramatic weight loss — but rapid fat reduction often leaves behind loose, sagging skin. We specialize in restoring firmness, elasticity, and confident body composition after significant weight loss."
        gradient="from-espresso-800 via-spa-700 to-espresso-700"
        gradientDir="to-bl"
        radialPos="top_right"
      />

      {/* Why GLP-1 Users Need This */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="For GLP-1 Users & Beyond"
            title="When the Weight Comes Off, the Skin Stays Behind"
            subtitle="Semaglutide and tirzepatide are remarkable — but the skin has its own timeline. Our protocols bridge that gap."
          />
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="bg-cream-100 p-8 border border-cream-300 h-full">
              <h4 className="font-serif text-xl font-bold text-espresso mb-5">Why GLP-1 Users Need Skin Tightening</h4>
              <ul className="space-y-5">
                {[
                  { title: 'Rapid fat loss', body: 'GLP-1 medications drive fast, significant weight loss — but the skin doesn\'t always keep pace with the fat beneath it.' },
                  { title: 'Skin laxity follows', body: 'The result is loose, crepey, or sagging tissue — especially on the abdomen, arms, thighs, and neck — that doesn\'t reflect the transformation underneath.' },
                  { title: 'Our solution', body: 'We work alongside your GLP-1 protocol to proactively tighten skin as you lose weight, stimulating collagen remodeling and rebuilding the dermis from within.' },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-spa flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-espresso text-sm mb-1">{item.title}</p>
                      <p className="text-espresso-500 text-sm leading-relaxed">{item.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-cream-100 p-8 border border-cream-300 hover:border-spa hover:shadow-lg transition-all duration-300 h-full">
              <h4 className="font-serif font-bold text-xl text-espresso mb-3">Radiofrequency (RF) Skin Tightening</h4>
              <p className="text-espresso-500 text-sm leading-relaxed mb-6">Delivers controlled heat energy deep into the dermis to stimulate new collagen and elastin production — the structural proteins responsible for firm, youthful skin. Ideal for the abdomen, arms, thighs, and neck after weight loss.</p>
              <ul className="space-y-2">
                {['Firms and lifts loose skin', 'Rebuilds collagen from within', 'Improves skin texture and elasticity', 'No downtime, no surgery', 'Cumulative results with each session', 'Safe for all skin types'].map((b, i) => (
                  <li key={i} className="flex items-start gap-2 text-espresso-500 text-sm">
                    <CheckCircle className="w-4 h-4 text-spa flex-shrink-0 mt-0.5" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment modalities */}
      <section className="py-24 px-6 bg-cream-100">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Our Technology"
            title="How We Tighten & Restore"
            subtitle="A multi-modal approach targeting skin laxity at every layer — from the dermis to the muscle beneath."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Radiofrequency (RF)', desc: 'Heats the dermis to stimulate collagen production and tighten loose skin. The most effective non-surgical skin tightening modality available, with decades of clinical data.' },
              { name: 'EMS Muscle Sculpting', desc: 'Electromagnetic muscle stimulation builds the underlying muscle mass that supports and lifts loose skin from beneath — creating definition and structure where fat loss has left a void.' },
              { name: 'Lymphatic Drainage', desc: 'Accelerates the removal of metabolic waste, excess fluid, and inflammatory byproducts from treated tissue — improving skin quality, reducing puffiness, and enhancing all other treatment results.' },
            ].map((t) => (
              <div key={t.name} className="bg-white p-8 border border-cream-300 hover:border-spa hover:shadow-lg transition-all duration-300">
                <div className="w-1 h-8 bg-spa mb-5" />
                <h4 className="font-serif font-bold text-espresso text-lg mb-3">{t.name}</h4>
                <p className="text-espresso-500 text-sm leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BeforeAfter
        heading="Post-GLP-1 Skin Tightening — Real Client Results"
        items={[
          { label: 'Skin Tightening — 1', result: 'Visible abdominal firming and improved skin texture after a combined RF and EMS protocol alongside active GLP-1 therapy.', beforeSrc: '/images/before-after/skin-tightening-laxity-1/before.jpg', afterSrc: '/images/before-after/skin-tightening-laxity-1/after.jpg', beforeAlt: 'Before skin tightening', afterAlt: 'After skin tightening' },
          { label: 'Skin Tightening — 2', result: '', beforeSrc: '/images/before-after/skin-tightening-laxity-2/before.jpg', afterSrc: '/images/before-after/skin-tightening-laxity-2/after.jpg', beforeAlt: 'Before skin tightening', afterAlt: 'After skin tightening' },
          { label: 'Skin Tightening — 3', result: '', beforeSrc: '/images/before-after/skin-tightening-laxity-3/before.jpg', afterSrc: '/images/before-after/skin-tightening-laxity-3/after.jpg', beforeAlt: 'Before skin tightening', afterAlt: 'After skin tightening' },
        ]}
      />

      {/* CTA */}
      <section className="py-24 px-6 bg-espresso text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-spa-300 text-[10px] font-medium uppercase mb-5" style={{ letterSpacing: '0.28em' }}>Start Today</p>
          <h2 className="font-serif text-4xl font-bold text-cream-100 mb-4">Your Transformation Deserves to Show</h2>
          <p className="text-cream-300 text-lg mb-10 leading-relaxed">
            Book a body assessment and we'll design a skin tightening protocol that works alongside your GLP-1 journey for results that match the effort you've put in.
          </p>
          <a
            href="https://advancedmedspaofficial.janeapp.com/" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-cream-100 hover:bg-white text-espresso text-[10px] tracking-widest uppercase font-medium px-10 py-4 transition-all duration-300"
          >
            Book Your Assessment <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      <FAQ items={faqItems} />
    </div>
  )
}
