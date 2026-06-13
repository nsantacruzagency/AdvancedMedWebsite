import { Link } from 'react-router-dom'
import { CheckCircle, ArrowRight, Zap, Shield, Star, TrendingUp } from 'lucide-react'
import SectionHeader from '../../components/SectionHeader'
import HeroPhoto from '../../components/HeroPhoto'
import FAQ from '../../components/FAQ'
import BeforeAfter from '../../components/BeforeAfter'

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

const faqItems = [
  {
    q: 'What is body contouring?',
    a: 'Body contouring refers to a range of non-surgical treatments designed to reshape and refine the body\'s silhouette by reducing localized fat, tightening skin, reducing cellulite, building muscle tone, and managing conditions like lipedema. At Advanced Med, we use a combination of radiofrequency, ultrasound cavitation, electromagnetic muscle stimulation, and lymphatic techniques to achieve comprehensive, natural-looking results.',
  },
  {
    q: 'Is body contouring painful?',
    a: 'Most body contouring treatments are well tolerated. Radiofrequency and ultrasound cavitation feel warm and slightly intense but are not painful. EMS treatments create strong muscle contractions that can feel unfamiliar at first but are not typically described as painful. Acoustic wave therapy may cause mild discomfort over very fibrous areas. We always adjust intensity to your comfort level.',
  },
  {
    q: 'What is lipedema, and how is it different from regular fat?',
    a: 'Lipedema is a chronic medical condition — primarily affecting women — characterized by disproportionate, painful fat accumulation in the legs, hips, and sometimes arms. Unlike regular fat, lipedema fat does not respond to diet or exercise, is often painful or tender to the touch, and is driven by hormonal and structural factors rather than caloric intake. It affects an estimated 11% of women and is frequently misdiagnosed.',
  },
  {
    q: 'How many sessions are needed to see results for cellulite?',
    a: 'Most clients notice initial improvements in skin texture and firmness after 3–4 sessions. For optimal cellulite reduction, we typically recommend a series of 6–10 treatments spaced 1–2 weeks apart, followed by periodic maintenance. The number of sessions varies based on cellulite grade, skin laxity, and individual response to treatment.',
  },
  {
    q: 'Can I target specific areas of my body?',
    a: 'Yes. Body contouring treatments are highly targeted — applicators and devices are placed precisely over areas of concern such as the abdomen, flanks, thighs, buttocks, arms, or back. Your treatment plan is fully customized to your specific body goals, and multiple areas can often be addressed in a single session.',
  },
  {
    q: 'What kind of results can I expect from EMS treatments?',
    a: 'Clinical studies on electromagnetic muscle stimulation show an average increase in muscle mass of approximately 16% and a reduction in local fat of approximately 19% after a series of 4 sessions. Results are visible as increased muscle definition, improved tone, and reduced circumference measurements. EMS is ideal for the abdomen, glutes, thighs, and arms, and results continue to develop for several weeks after treatment.',
  },
]

export default function BodyContouring() {
  return (
    <div className="bg-white">
      <HeroPhoto
        eyebrow="Body Aesthetics"
        title={<>Skin Tightening<br />& Cellulite</>}
        subtitle="Advanced, non-surgical treatments for skin tightening and cellulite — sculpting the silhouette you've worked toward with precision technology and compassionate care."
        gradient="from-espresso-800 via-spa-800 to-espresso-700"
      />

      {/* Skin Laxity & Tightening */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="For GLP-1 Users & Beyond"
            title="Post GLP-1 Skin Laxity & Tightening"
            subtitle="Rapid fat loss from GLP-1 medications like semaglutide can leave behind loose, sagging skin. We specialize in restoring firmness, elasticity, and body composition after significant weight loss."
          />
          <div className="bg-cream-100 p-8 border border-cream-300 mb-10">
            <p className="text-espresso-500 leading-relaxed mb-4">
              GLP-1 receptor agonists (semaglutide, tirzepatide) are remarkably effective at driving rapid weight loss — but the faster the fat disappears, the less time the skin has to adapt. The result is skin laxity: loose, crepey, or sagging tissue that doesn't reflect the transformation underneath.
            </p>
            <p className="text-espresso-500 leading-relaxed">
              At Advanced Med, we work alongside your GLP-1 protocol to proactively tighten skin as you lose weight — and to restore firmness and definition after your goal weight is reached. Our combination approach stimulates collagen remodeling, rebuilds the dermis from within, and significantly improves body composition without surgery.
            </p>
          </div>
          <div className="max-w-md mx-auto">
            <div className="bg-cream-100 p-8 border border-cream-300 hover:border-spa hover:shadow-lg transition-all duration-300">
              <h4 className="font-serif font-bold text-xl text-espresso mb-3">Radiofrequency (RF) Skin Tightening</h4>
              <p className="text-espresso-500 text-sm leading-relaxed mb-6">Delivers controlled heat energy deep into the dermis to stimulate new collagen and elastin production — the structural proteins responsible for firm, youthful skin. Ideal for the abdomen, arms, thighs, and neck after weight loss.</p>
              <ul className="space-y-2">
                {['Firms and lifts loose skin', 'Rebuilds collagen from within', 'Improves skin texture and elasticity', 'Cumulative results with each session'].map((b, i) => (
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

      <BeforeAfter
        heading="Skin Tightening and Laxity — Real Client Results"
        items={[
          { label: 'Skin Tightening — Session 1', result: 'Visible abdominal definition and glute lifting achieved with electromagnetic muscle stimulation. No downtime throughout the series.', beforeSrc: '/images/before-after/skin-tightening-laxity-3/before.png', afterSrc: '/images/before-after/skin-tightening-laxity-3/after.png', beforeAlt: 'Before skin tightening', afterAlt: 'After skin tightening' },
          { label: 'Skin Tightening — Session 2', result: '', beforeSrc: '/images/before-after/skin-tightening-laxity-2/before.png', afterSrc: '/images/before-after/skin-tightening-laxity-2/after.png', beforeAlt: 'Before skin tightening', afterAlt: 'After skin tightening' },
          { label: 'Skin Tightening — Session 3', result: '', beforeSrc: '/images/before-after/skin-tightening-laxity-3/before.png', afterSrc: '/images/before-after/skin-tightening-laxity-3/after.png', beforeAlt: 'Before skin tightening', afterAlt: 'After skin tightening' },
        ]}
      />

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
                {['Grade 1–4 cellulite treated effectively', 'Improves skin elasticity and firmness', 'Boosts local circulation and lymphatic flow', 'Stimulates new collagen synthesis', 'Personalized approach to reduce skin texture'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-espresso-500">
                    <CheckCircle className="w-5 h-5 text-spa flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <BeforeAfter
        heading="Body in Shape Protocol — Real Client Results"
        items={[
          { label: 'Cellulite Reduction — 8 Sessions', result: 'Significant smoothing of thigh and hip cellulite. Visible improvement in skin texture and firmness after a combined RF and acoustic wave protocol.', beforeSrc: '/images/before-after/body-in-shape-1/before.jpg', afterSrc: '/images/before-after/body-in-shape-1/after.jpg', beforeAlt: 'Before cellulite treatment', afterAlt: 'After cellulite treatment' },
          { label: 'Muscle Definition — 4 EMS Sessions', result: 'Visible abdominal definition and glute lifting achieved with electromagnetic muscle stimulation. No downtime throughout the series.', beforeSrc: '/images/before-after/body-in-shape-2/before.jpg', afterSrc: '/images/before-after/body-in-shape-2/after.jpg', beforeAlt: 'Before EMS muscle toning', afterAlt: 'After EMS muscle toning' },
          { label: 'Sagging Skin Tightening', result: 'Visible firming and lift of loose, sagging skin following a combined radiofrequency and HIFU protocol. Improved skin texture and elasticity throughout the treated area.', beforeSrc: '/images/before-after/body-in-shape-3/before.jpg', afterSrc: '/images/before-after/body-in-shape-3/after.jpg', beforeAlt: 'Before skin tightening treatment', afterAlt: 'After skin tightening treatment' },
        ]}
      />

      {/* Lipedema */}
      <section className="py-24 px-6 bg-cream-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader eyebrow="Compassionate Care" title="Lipedema" center={false} />
              <p className="text-espresso-500 leading-relaxed mb-4">
                Lipedema is a chronic, often misunderstood condition affecting primarily women — characterized by disproportionate, painful fat accumulation in the legs, hips, buttocks, and sometimes arms. It is <em>not</em> caused by lifestyle choices, and it does not respond to diet or exercise alone.
              </p>
              <p className="text-espresso-500 leading-relaxed mb-4">
                If you've been dismissed by healthcare providers, told to "just lose weight," or felt frustrated that your efforts aren't working — you may be living with lipedema. We see you, and we understand.
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
                Lipedema affects an estimated 11% of women worldwide — yet it remains chronically underdiagnosed. Many women spend years or decades without a proper diagnosis, blaming themselves for a medical condition that has a physiological basis.
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

      <BeforeAfter
        heading="Lipedema LymphON Protocol — Real Client Results"
        items={[
          { label: 'Lipedema Stage II — 16 Weeks', result: 'Marked reduction in leg circumference and tenderness following a combined manual lymphatic drainage and RF series. Client reported significant pain relief and improved daily mobility.', beforeSrc: '/images/before-after/lipedema/before.jpg', afterSrc: '/images/before-after/lipedema/after.jpg', beforeAlt: 'Before lipedema stage II treatment', afterAlt: 'After lipedema stage II treatment' },
          { label: 'Lipedema — Session 2', result: '', beforeSrc: '/images/before-after/lipedema-2/before.jpg', afterSrc: '/images/before-after/lipedema-2/after.jpg', beforeAlt: 'Before lipedema treatment', afterAlt: 'After lipedema treatment' },
        ]}
      />

      {/* CTA */}
      <section className="py-24 px-6 bg-cream-200 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-4xl font-bold text-espresso mb-4">Start Your Body Contouring Journey</h2>
          <p className="text-espresso-500 text-lg mb-10 leading-relaxed">
            Book a complimentary body assessment. Our specialists will recommend the ideal combination of treatments for your goals, timeline, and budget.
          </p>
          <Link
            to="/book"
            className="inline-flex items-center gap-2 bg-spa hover:bg-spa-600 text-cream-100 text-[10px] tracking-widest uppercase font-medium px-10 py-4 transition-all duration-300"
          >
            Book Now <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <FAQ items={faqItems} />
    </div>
  )
}
