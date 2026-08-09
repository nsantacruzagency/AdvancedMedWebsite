import { ArrowRight, CheckCircle } from 'lucide-react'
import SectionHeader from '../../components/SectionHeader'
import HeroPhoto from '../../components/HeroPhoto'
import BeforeAfter from '../../components/BeforeAfter'
import FAQ from '../../components/FAQ'

const faqItems = [
  {
    q: 'What is lipedema?',
    a: 'Lipedema is a chronic medical condition — primarily affecting women — characterized by disproportionate, painful fat accumulation in the legs, hips, buttocks, and sometimes arms. Unlike regular fat, lipedema fat does not respond to diet or exercise, is often painful or tender to the touch, and is driven by hormonal and structural factors rather than caloric intake. It affects an estimated 11% of women worldwide and is frequently misdiagnosed.',
  },
  {
    q: 'How is lipedema different from regular fat or lymphedema?',
    a: 'Lipedema fat is structurally different from regular adipose tissue — it is hormonally influenced, painful to the touch, and completely resistant to caloric restriction or exercise. Lymphedema is swelling caused by lymphatic system damage or obstruction, often affecting one limb. Lipedema is bilateral (affects both legs equally), is not caused by injury, and involves a specific type of disordered fat tissue. Many women with lipedema also develop secondary lymphedema as the condition progresses.',
  },
  {
    q: 'What causes lipedema?',
    a: 'The exact cause is not fully understood, but lipedema appears to be hormonal and genetic in origin. It most commonly appears or worsens during hormonal transitions — puberty, pregnancy, menopause, or after gynecological surgery. It runs in families and disproportionately affects women. It is not caused by overeating, inactivity, or lifestyle factors, though these can influence its progression.',
  },
  {
    q: 'What treatments do you offer for lipedema?',
    a: 'Our LymphON Protocol combines manual lymphatic drainage (MLD), radiofrequency therapy to soften fibrotic tissue, compression support, and anti-inflammatory nutritional guidance. These treatments reduce swelling, heaviness, and pain; improve lymphatic circulation; and help manage the condition\'s progression compassionately and effectively.',
  },
  {
    q: 'Can lipedema be cured?',
    a: 'There is currently no cure for lipedema, but it is very manageable with consistent, appropriate care. Our goal is to reduce symptoms, slow progression, improve quality of life, and help you feel more comfortable in your body. Many clients experience significant reductions in pain, heaviness, and circumference with our treatment protocols.',
  },
  {
    q: 'How many sessions will I need?',
    a: 'Treatment frequency and duration depend on the stage and severity of your lipedema, as well as your individual response. Most clients benefit from weekly sessions initially, transitioning to bi-weekly or monthly maintenance. Your provider will design a personalized protocol after your evaluation and reassess regularly based on your progress.',
  },
]

export default function Lipedema() {
  return (
    <div className="bg-white">
      <HeroPhoto
        eyebrow="Compassionate Care"
        title={<>Lipedema<br />LymphON Protocol</>}
        subtitle="A chronic condition that diet and exercise cannot fix — but the right care can meaningfully manage. We see you, we understand, and we're here to help."
        gradient="from-espresso-800 via-spa-800 to-espresso-700"
        gradientDir="to-tr"
        radialPos="bottom_left"
      />

      {/* What Is Lipedema */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader eyebrow="Understanding Lipedema" title="It's Not Your Fault" center={false} />
              <p className="text-espresso-500 leading-relaxed mb-4">
                Lipedema is a chronic, often misunderstood condition affecting primarily women — characterized by disproportionate, painful fat accumulation in the legs, hips, buttocks, and sometimes arms. It is <em>not</em> caused by lifestyle choices, and it does not respond to diet or exercise alone.
              </p>
              <p className="text-espresso-500 leading-relaxed mb-4">
                If you've been dismissed by healthcare providers, told to "just lose weight," or felt frustrated that your efforts aren't working — you may be living with lipedema. We see you, and we understand.
              </p>
              <p className="text-espresso-500 leading-relaxed mb-8">
                Lipedema affects an estimated 11% of women worldwide — yet it remains chronically underdiagnosed. Many women spend years or decades without a proper diagnosis, blaming themselves for a medical condition that has a clear physiological basis.
              </p>
              <ul className="space-y-3">
                {[
                  'Disproportionate leg or hip size despite healthy weight',
                  'Pain or tenderness to the touch',
                  'Feeling of heaviness, especially in the legs',
                  'Easy bruising without injury',
                  'Swelling that worsens throughout the day',
                  'No improvement with diet or exercise',
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
              <p className="text-cream-300 leading-relaxed mb-8">
                For too long, women with lipedema have been told their bodies are the problem. The truth is that lipedema is a medical condition — one that deserves medical attention, compassion, and a structured plan.
              </p>
              <div className="space-y-6">
                {[
                  { label: 'Common Symptoms', items: ['Disproportionate leg/hip size', 'Pain or tenderness to touch', 'Easy bruising', 'Feeling of heaviness', 'Swelling that worsens daily'] },
                  { label: 'Our Treatments', items: ['Manual Lymphatic Drainage', 'Radiofrequency Therapy', 'Compression Support', 'Anti-Inflammatory Protocols'] },
                ].map((group) => (
                  <div key={group.label}>
                    <p className="text-spa-300 text-[10px] font-bold tracking-widest uppercase mb-3">{group.label}</p>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span key={item} className="text-xs bg-white/10 text-cream-200 px-3 py-1.5">{item}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LymphON Protocol */}
      <section className="py-24 px-6 bg-cream-100">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Our Approach"
            title="The LymphON Protocol"
            subtitle="A comprehensive, multi-modal treatment plan built around the unique physiology of lipedema — reducing pain, improving mobility, and slowing progression."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Manual Lymphatic Drainage', desc: 'Gentle, specialized massage techniques that stimulate the lymphatic system, reduce swelling, and move stagnant fluid out of congested tissues.' },
              { name: 'Radiofrequency Therapy', desc: 'Controlled heat energy softens fibrotic tissue, improves circulation, and helps remodel the dense fat deposits characteristic of lipedema.' },
              { name: 'Compression Support', desc: 'Medical-grade compression guidance to reduce swelling between sessions and prevent fluid re-accumulation in treated areas.' },
              { name: 'Anti-Inflammatory Protocols', desc: 'Nutritional and lifestyle guidance targeting systemic inflammation — a key driver of lipedema pain, progression, and tissue damage.' },
            ].map((t) => (
              <div key={t.name} className="bg-white p-8 border border-cream-300 hover:border-spa hover:shadow-lg transition-all duration-300">
                <div className="w-1 h-8 bg-spa mb-5" />
                <h4 className="font-serif font-bold text-espresso text-lg mb-3">{t.name}</h4>
                <p className="text-espresso-500 text-sm leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 grid md:grid-cols-5 gap-4 text-center bg-espresso p-10">
            {[
              { num: 'Reduces', label: 'Swelling & Heaviness' },
              { num: 'Improves', label: 'Lymphatic Circulation' },
              { num: 'Softens', label: 'Fibrotic Tissue' },
              { num: 'Supports', label: 'Mental Wellbeing' },
              { num: 'Personalized', label: 'Non-Judgmental Care' },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-serif text-2xl font-bold text-spa-300 mb-1">{s.num}</div>
                <div className="text-cream-300 text-xs uppercase tracking-widest">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BeforeAfter
        heading="Lipedema LymphON Protocol — Real Client Results"
        items={[
          { label: 'Lipedema', result: 'Marked reduction in leg circumference and tenderness following a combined manual lymphatic drainage and RF series. Client reported significant pain relief and improved daily mobility.', beforeSrc: '/images/before-after/lipedema/before.jpg', afterSrc: '/images/before-after/lipedema/after.jpg', beforeAlt: 'Before lipedema treatment', afterAlt: 'After lipedema treatment' },
          { label: 'Lipedema', result: '', beforeSrc: '/images/before-after/lipedema-2/before.jpg', afterSrc: '/images/before-after/lipedema-2/after.jpg', beforeAlt: 'Before lipedema treatment', afterAlt: 'After lipedema treatment' },
        ]}
      />

      {/* CTA */}
      <section className="py-24 px-6 bg-espresso text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-spa-300 text-[10px] font-medium uppercase mb-5" style={{ letterSpacing: '0.28em' }}>Take the First Step</p>
          <h2 className="font-serif text-4xl font-bold text-cream-100 mb-4">You Don't Have to Keep Living With This</h2>
          <p className="text-cream-300 text-lg mb-10 leading-relaxed">
            Book a compassionate evaluation. We'll assess your symptoms, explain your options, and build a personalized LymphON protocol around your needs.
          </p>
          <a
            href="https://advancedmedspaofficial.janeapp.com/" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-cream-100 hover:bg-white text-espresso text-[10px] tracking-widest uppercase font-medium px-10 py-4 transition-all duration-300"
          >
            Book Your Evaluation <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      <FAQ items={faqItems} />
    </div>
  )
}
