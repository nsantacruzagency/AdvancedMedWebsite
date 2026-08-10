import { ArrowRight, CheckCircle } from 'lucide-react'
import SectionHeader from '../../components/SectionHeader'
import HeroPhoto from '../../components/HeroPhoto'
import BeforeAfter from '../../components/BeforeAfter'
import FAQ from '../../components/FAQ'

const faqItems = [
  {
    q: 'What causes cellulite?',
    a: 'Cellulite forms when fibrous bands (septae) connecting skin to underlying muscle pull downward on the skin while fat pushes upward — creating the characteristic dimpled, "orange peel" texture. Hormones, genetics, circulation, and collagen integrity all play a role. It affects up to 90% of women regardless of body weight or fitness level.',
  },
  {
    q: 'Can cellulite really be reduced without surgery?',
    a: 'Yes — significantly. Modern non-surgical cellulite treatments work by addressing the structural causes: breaking up fibrous bands, stimulating new collagen, improving lymphatic flow, and targeting the fat cells that push against the skin. Our multi-modal approach combines several of these mechanisms simultaneously for results that single-treatment approaches cannot achieve.',
  },
  {
    q: 'How many sessions do I need to see results?',
    a: 'Most clients notice initial improvements in skin texture and firmness after 3–4 sessions. For optimal cellulite reduction, we typically recommend a series of 6–10 treatments spaced 1–2 weeks apart, followed by periodic maintenance. The number of sessions varies based on cellulite grade, skin laxity, and individual response to treatment.',
  },
  {
    q: 'Which body areas can be treated?',
    a: 'Cellulite treatment can be applied to the thighs, hips, buttocks, abdomen, upper arms, and knees. Multiple areas can often be addressed in a single session. Your provider will assess each area and recommend the most appropriate combination of modalities based on the grade and distribution of cellulite.',
  },
  {
    q: 'How long do results last?',
    a: 'Results from a complete cellulite treatment series typically last 6–12 months before maintenance is needed. Staying hydrated, maintaining a healthy lifestyle, and scheduling quarterly maintenance sessions significantly extend your results. Cellulite is a structural condition, not a one-time problem — ongoing care produces the most lasting outcomes.',
  },
]

export default function CelluliteTreatment() {
  return (
    <div className="bg-white">
      <HeroPhoto
        eyebrow="Body Aesthetics"
        title={<>Cellulite<br />Treatment</>}
        subtitle="Cellulite affects up to 90% of women — and it has nothing to do with fitness level or body weight. We target the structural causes, not just the surface, for results that last."
        gradient="from-espresso-700 via-spa-800 to-espresso-800"
        gradientDir="to-r"
        radialPos="top_left"
      />

      {/* What Causes It */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-cream-100 p-8 border border-cream-300">
              <h3 className="font-serif text-xl font-bold text-espresso mb-4">What Causes Cellulite?</h3>
              <p className="text-espresso-500 leading-relaxed mb-4">
                Cellulite forms when fibrous bands (septae) connecting skin to underlying muscle pull downward on the skin while fat pushes upward — creating the characteristic dimpled texture. Hormones, genetics, circulation, and collagen integrity all play a role.
              </p>
              <p className="text-espresso-500 leading-relaxed">
                Our multi-modal approach addresses each of these factors simultaneously, delivering significantly smoother skin texture that single-modality treatments cannot achieve alone.
              </p>
            </div>
            <div className="bg-cream-200 p-8 border border-cream-300">
              <h3 className="font-serif text-xl font-bold text-espresso mb-4">Our Treatment Approach</h3>
              <ul className="space-y-3">
                {[
                  'Grade 1–4 cellulite treated effectively',
                  'Improves skin elasticity and firmness',
                  'Boosts local circulation and lymphatic flow',
                  'Stimulates new collagen synthesis',
                  'Softens and releases fibrous bands',
                  'Personalized protocol per skin grade',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-espresso-500">
                    <CheckCircle className="w-5 h-5 text-spa flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Treatment modalities */}
          <SectionHeader
            eyebrow="Our Technology"
            title="How the Body In Shape Protocol Works"
            subtitle="We combine multiple modalities in each session to target cellulite from every structural angle."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Radiofrequency (RF)', desc: 'Heats the dermis to stimulate collagen production and tighten loose skin, visibly reducing the dimpled appearance of cellulite.' },
              { name: 'Acoustic Wave Therapy', desc: 'Sound waves break up the fibrous bands tethering the skin, releasing the "orange peel" texture from within.' },
              { name: 'Mechanical Massage', desc: 'Motorized rollers and suction mobilize fat, boost circulation, and smooth skin surface for visible texture improvement.' },
              { name: 'Ultrasound Cavitation', desc: 'Low-frequency ultrasound creates micro-bubbles that rupture fat cell membranes, releasing their contents for natural elimination.' },
            ].map((t) => (
              <div key={t.name} className="bg-cream-100 p-8 border border-cream-300 hover:border-spa hover:shadow-lg transition-all duration-300">
                <div className="w-1 h-8 bg-spa mb-5" />
                <h4 className="font-serif font-bold text-espresso text-lg mb-3">{t.name}</h4>
                <p className="text-espresso-500 text-sm leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BeforeAfter
        heading="Body In Shape Cellulite Protocol — Real Client Results"
        items={[
          { label: 'Cellulite Reduction — 8 Sessions', result: 'Significant smoothing of thigh and hip cellulite. Visible improvement in skin texture and firmness after a combined RF and acoustic wave protocol.', beforeSrc: '/images/before-after/body-in-shape-1/before.jpg', afterSrc: '/images/before-after/body-in-shape-1/after.jpg', beforeAlt: 'Before cellulite treatment', afterAlt: 'After cellulite treatment' },
          { label: 'Sagging Skin Tightening', result: 'Visible firming and lift following a combined radiofrequency and HIFU protocol. Improved skin texture and elasticity throughout the treated area.', beforeSrc: '/images/before-after/body-in-shape-3/before.jpg', afterSrc: '/images/before-after/body-in-shape-3/after.jpg', beforeAlt: 'Before skin tightening', afterAlt: 'After skin tightening' },
          { label: 'Muscle Definition — 4 EMS Sessions', result: 'Visible abdominal definition and glute lifting achieved with electromagnetic muscle stimulation. No downtime throughout the series.', beforeSrc: '/images/before-after/body-in-shape-2/before.jpg', afterSrc: '/images/before-after/body-in-shape-2/after.jpg', beforeAlt: 'Before EMS toning', afterAlt: 'After EMS toning' },
        ]}
      />

      {/* CTA */}
      <section className="py-24 px-6 bg-cream-200 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-4xl font-bold text-espresso mb-4">Smoother Skin Starts Here</h2>
          <p className="text-espresso-500 text-lg mb-10 leading-relaxed">
            Book a complimentary body assessment. Our specialists will grade your cellulite, recommend the ideal combination of treatments, and build a protocol around your goals and timeline.
          </p>
          <a
            href="https://advancedmedspaofficial.janeapp.com/" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-spa hover:bg-spa-600 text-cream-100 text-[10px] tracking-widest uppercase font-medium px-10 py-4 transition-all duration-300"
          >
            Book Now <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      <FAQ items={faqItems} />
    </div>
  )
}
