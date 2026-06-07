import { Link } from 'react-router-dom'
import { CheckCircle, ArrowRight, Zap, Shield, Star, TrendingUp } from 'lucide-react'
import SectionHeader from '../../components/SectionHeader'

const treatmentBenefits = [
  { icon: Zap, title: 'Visible in Weeks', desc: 'See measurable improvements in skin texture, firmness, and contour within the first few sessions.' },
  { icon: Shield, title: 'Non-Surgical & Safe', desc: 'All treatments are FDA-cleared and performed by trained clinical professionals.' },
  { icon: Star, title: 'Customized Protocols', desc: 'We combine modalities for your unique concerns — no one-size-fits-all approach.' },
  { icon: TrendingUp, title: 'Progressive Results', desc: 'Results improve over time as collagen remodels and muscle tone builds.' },
]

const celluliteTreatments = [
  { name: 'Radiofrequency (RF)', desc: 'Heats the dermis to stimulate collagen production and tighten loose skin, visibly reducing the dimpled appearance of cellulite.' },
  { name: 'Acoustic Wave Therapy', desc: 'Sound waves break up fibrous bands tethering the skin, releasing the "orange peel" texture from within.' },
  { name: 'Mechanical Massage / Endermologie', desc: 'Motorized rollers and suction mobilize fat, boost circulation, and smooth skin surface.' },
  { name: 'Ultrasound Cavitation', desc: 'Low-frequency ultrasound creates micro-bubbles that rupture fat cell membranes, releasing their contents for natural elimination.' },
]

export default function BodyContouring() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative bg-espresso text-cream-200 py-32 overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <p className="text-spa text-[10px] font-medium tracking-widest uppercase mb-4">Weight Health &amp; Body Wellness</p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold leading-tight mb-6">
            Body Contouring
          </h1>
          <p className="text-cream-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            Advanced, non-surgical treatments for cellulite, lipoedema, and muscle definition — sculpting the silhouette you've worked toward with precision technology and compassionate care.
          </p>
          <Link
            to="/book"
            className="inline-flex items-center gap-2 bg-cream-100 hover:bg-white text-espresso text-[10px] tracking-widest uppercase font-medium px-8 py-4 transition-all duration-300"
          >
            Book a Consultation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Cellulite Treatment */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Skin Smoothing"
            title="Cellulite Treatment"
            subtitle="Cellulite affects up to 90% of women — and it has nothing to do with fitness level or body weight. We target the structural causes, not just the surface."
          />
          <div className="grid md:grid-cols-2 gap-8 mb-12">
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
                {['Grade 1–4 cellulite treated effectively', 'Improves skin elasticity and firmness', 'Boosts local circulation and lymphatic flow', 'Stimulates new collagen synthesis', 'Recommended 6–10 sessions for optimal results'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-espresso-500">
                    <CheckCircle className="w-5 h-5 text-spa flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {celluliteTreatments.map((t) => (
              <div key={t.name} className="bg-white border border-cream-300 p-6 hover:border-spa hover:shadow-lg transition-all duration-300">
                <h4 className="font-serif font-bold text-espresso mb-3 text-lg">{t.name}</h4>
                <p className="text-espresso-500 text-sm leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lipoedema */}
      <section className="py-24 px-6 bg-cream-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader eyebrow="Compassionate Care" title="Lipoedema" center={false} />
              <p className="text-espresso-500 leading-relaxed mb-4">
                Lipoedema is a chronic, often misunderstood condition affecting primarily women — characterized by disproportionate, painful fat accumulation in the legs, hips, buttocks, and sometimes arms. It is <em>not</em> caused by lifestyle choices, and it does not respond to diet or exercise alone.
              </p>
              <p className="text-espresso-500 leading-relaxed mb-4">
                If you've been dismissed by healthcare providers, told to "just lose weight," or felt frustrated that your efforts aren't working — you may be living with lipoedema. We see you, and we understand.
              </p>
              <p className="text-espresso-500 leading-relaxed mb-8">
                Our approach combines manual lymphatic drainage, compression therapy, RF treatments, and anti-inflammatory nutritional support to reduce pain, improve mobility, and manage progression compassionately and effectively.
              </p>
              <ul className="space-y-3">
                {[
                  'Reduces swelling, heaviness, and pain',
                  'Improves lymphatic circulation and drainage',
                  'Softens fibrotic tissue over time',
                  'Supports mental and emotional wellbeing',
                  'Personalized, non-judgmental care protocols',
                ].map((b, i) => (
                  <li key={i} className="flex items-start gap-3 text-espresso-500">
                    <CheckCircle className="w-5 h-5 text-spa flex-shrink-0 mt-0.5" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-espresso p-10 text-cream-200">
              <h3 className="font-serif text-2xl font-bold text-spa-300 mb-6">You Deserve Answers</h3>
              <p className="text-cream-300 leading-relaxed mb-6">
                Lipoedema affects an estimated 11% of women worldwide — yet it remains chronically underdiagnosed. Many women spend years or decades without a proper diagnosis, blaming themselves for a medical condition that has a physiological basis.
              </p>
              <div className="space-y-4">
                {[
                  { label: 'Common Symptoms', items: ['Disproportionate leg/hip size', 'Pain or tenderness to touch', 'Easy bruising', 'Feeling of heaviness'] },
                  { label: 'Our Treatments', items: ['Manual Lymphatic Drainage', 'Radiofrequency Therapy', 'Compression Support', 'Anti-Inflammatory Protocols'] },
                ].map((group) => (
                  <div key={group.label}>
                    <p className="text-spa-300 text-[10px] font-bold tracking-widest uppercase mb-2">{group.label}</p>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span key={item} className="text-xs bg-white/10 text-cream-200 px-3 py-1">{item}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Muscle Definition & Toning */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Body Sculpting"
            title="Muscle Definition & Toning"
            subtitle="Build visible muscle definition and tone without hours in the gym — our technologies stimulate supramaximal muscle contractions that exercise alone cannot replicate."
          />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'EMS (Electromagnetic Muscle Stimulation)',
                desc: 'Induces 20,000+ muscle contractions per session — equivalent to thousands of crunches or squats. Builds muscle while simultaneously burning fat in the treated area. Ideal for abs, glutes, thighs, and arms.',
                benefits: ['Increases muscle mass by ~16%', 'Reduces fat by ~19%', 'No downtime required', 'Results in 4 sessions'],
              },
              {
                name: 'HIFU Body (High-Intensity Focused Ultrasound)',
                desc: 'Targets deeper subcutaneous fat and tightens fibromuscular layers using focused ultrasound energy. Provides structural lift and contour improvement in areas resistant to other treatments.',
                benefits: ['Tightens skin and fascia', 'Reduces stubborn fat deposits', 'Stimulates collagen remodeling', 'Long-lasting results'],
              },
              {
                name: 'Body Sculpting Wraps & RF Toning',
                desc: 'Combines RF energy with targeted body wraps to firm loose skin, improve tissue quality, and enhance the definition created by other treatments. Perfect as a maintenance or finishing treatment.',
                benefits: ['Firms and tightens skin', 'Improves skin texture', 'Reduces circumference measurements', 'Relaxing and comfortable'],
              },
            ].map((item) => (
              <div key={item.name} className="bg-cream-100 p-8 border border-cream-300 hover:border-spa hover:shadow-lg transition-all duration-300">
                <h4 className="font-serif font-bold text-xl text-espresso mb-3">{item.name}</h4>
                <p className="text-espresso-500 text-sm leading-relaxed mb-6">{item.desc}</p>
                <ul className="space-y-2">
                  {item.benefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-2 text-espresso-500 text-sm">
                      <CheckCircle className="w-4 h-4 text-spa flex-shrink-0 mt-0.5" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Benefits Grid */}
      <section className="py-20 px-6 bg-espresso">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Our Promise"
            title="Why Choose Our Body Contouring"
            subtitle="Expert technology, personalized protocols, and a team that truly cares about your results."
            light={true}
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {treatmentBenefits.map((b) => {
              const Icon = b.icon
              return (
                <div key={b.title} className="bg-white/5 p-8 text-center border border-white/10 hover:border-spa/40 transition-all duration-300">
                  <div className="flex justify-center mb-4"><Icon className="w-8 h-8 text-spa-300" /></div>
                  <h4 className="font-serif font-bold text-cream-100 text-lg mb-3">{b.title}</h4>
                  <p className="text-cream-300 text-sm leading-relaxed">{b.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-cream-200 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-4xl font-bold text-espresso mb-4">Start Your Body Contouring Journey</h2>
          <p className="text-espresso-500 text-lg mb-10 leading-relaxed">
            Book a complimentary body assessment. Our specialists will recommend the ideal combination of treatments for your goals, timeline, and budget.
          </p>
          <Link
            to="/book"
            className="inline-flex items-center gap-2 bg-espresso hover:bg-espresso-600 text-cream-100 text-[10px] tracking-widest uppercase font-medium px-10 py-4 transition-all duration-300"
          >
            Book Now <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
