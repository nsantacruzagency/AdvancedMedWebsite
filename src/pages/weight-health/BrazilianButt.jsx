import { Link } from 'react-router-dom'
import { CheckCircle, ArrowRight, Zap, Shield, Star, TrendingUp } from 'lucide-react'
import SectionHeader from '../../components/SectionHeader'
import HeroPhoto from '../../components/HeroPhoto'
import FAQ from '../../components/FAQ'
import BeforeAfter from '../../components/BeforeAfter'

const benefits = [
  { icon: Zap, title: 'No Implants', desc: 'All enhancement is achieved through non-surgical techniques — zero foreign material, zero implant risk.' },
  { icon: Shield, title: 'Safe & Proven', desc: 'FDA-cleared technologies performed by trained clinical professionals in a safe, sterile environment.' },
  { icon: Star, title: 'Natural Results', desc: 'We sculpt and lift using your body\'s own responses — collagen, muscle tone, and tissue remodeling.' },
  { icon: TrendingUp, title: 'Progressive Improvement', desc: 'Results build over your treatment series and continue to develop for weeks after your final session.' },
]

const treatments = [
  {
    name: 'EMS Glute Sculpting',
    subtitle: 'Electromagnetic Muscle Stimulation',
    desc: 'Induces thousands of supramaximal muscle contractions per session — far beyond what any workout can achieve. Builds and lifts the glute muscles for a rounder, firmer shape. Clinical studies show an average 16% increase in muscle mass after a series of 4 sessions.',
    results: ['Visible lift and rounding', 'Increases muscle volume', 'Reduces local fat simultaneously', 'No downtime — return to daily life immediately'],
  },
  {
    name: 'Radiofrequency (RF) Skin Tightening',
    subtitle: 'Collagen Remodeling & Firming',
    desc: 'Delivers controlled heat energy deep into the dermis to stimulate new collagen and elastin production. Tightens loose or dimpled skin on the buttocks and upper thighs, improving texture and firmness over time.',
    results: ['Firms and tightens skin', 'Reduces cellulite appearance', 'Smooths texture and surface', 'Cumulative results with each session'],
  },
  {
    name: 'Amino Acids',
    subtitle: 'Cellular Repair & Tissue Nourishment',
    desc: 'Essential amino acids are the building blocks your body uses to repair tissue, synthesize collagen, and maintain healthy muscle. Applied as part of your protocol, targeted amino acid therapy supports glute muscle recovery after EMS, accelerates tissue regeneration, and helps the body produce the proteins needed for a firmer, more sculpted result.',
    results: ['Supports muscle repair and growth after EMS', 'Accelerates tissue regeneration', 'Promotes natural collagen synthesis', 'Enhances and prolongs treatment results'],
  },
  {
    name: 'Collagen Bio-Stimulators',
    subtitle: 'Natural Volume & Long-Lasting Lift',
    desc: 'Unlike traditional fillers, collagen bio-stimulators work by triggering your body\'s own collagen production from within — creating gradual, natural-looking volume that develops over weeks and lasts significantly longer. For the glutes, this means a rounder, fuller shape that feels completely natural because it\'s built from your own biology, not injected material.',
    results: ['Stimulates your own collagen — not synthetic filler', 'Builds natural volume over 4–8 weeks', 'Results last 18–24 months with maintenance', 'Fuller, rounder shape with no foreign material'],
  },
]

const faqItems = [
  {
    q: 'Is this a surgical BBL?',
    a: 'No. Our Brazilian Butt program is entirely non-surgical. We use a combination of electromagnetic muscle stimulation (EMS), radiofrequency skin tightening, ultrasound cavitation, and lymphatic massage to lift, firm, and contour the glutes — without fat transfer, implants, anesthesia, or downtime.',
  },
  {
    q: 'How does EMS actually lift the glutes?',
    a: 'EMS (electromagnetic muscle stimulation) induces supramaximal muscle contractions — the kind your body cannot produce voluntarily through exercise. Each session triggers thousands of contractions, which cause muscle hypertrophy (growth) in the glutes just as resistance training does, but far more intensely and in a targeted, hands-free way. The result is a fuller, rounder, more lifted appearance.',
  },
  {
    q: 'How many sessions will I need?',
    a: 'Most clients see meaningful results after a series of 4–6 EMS sessions combined with RF and massage treatments. The exact number depends on your starting point and goals. We design your protocol at your free evaluation based on your unique anatomy and desired outcome.',
  },
  {
    q: 'Is there any downtime?',
    a: 'None. All of our non-surgical butt enhancement treatments require zero downtime. You may feel mild muscle soreness after EMS sessions — similar to a hard workout — which typically resolves within 24–48 hours. RF and massage treatments have no recovery period at all.',
  },
  {
    q: 'Can I combine this with other body contouring treatments?',
    a: 'Absolutely — and combination therapy delivers the best results. EMS builds the muscle volume and lift, RF tightens and smooths the overlying skin, cavitation reduces surrounding fat for definition, and lymphatic massage accelerates the body\'s natural elimination process. We design multi-modal protocols tailored to your goals.',
  },
  {
    q: 'How long do results last?',
    a: 'With periodic maintenance sessions, results can be long-lasting. The muscle-building effects of EMS are sustained similarly to gym training — the more consistent you are, the better your results hold. RF collagen remodeling continues to improve for up to 3–6 months after treatment and is maintained with follow-up sessions.',
  },
]

export default function BrazilianButt() {
  return (
    <div className="bg-white">
      <HeroPhoto
        eyebrow="Weight & Metabolic Health"
        title={<>Brazilian Butt<br />Boost</>}
        subtitle="A rounder, firmer silhouette using bio-stimulator — not filler — to naturally stimulate your body's own collagen and volume. No implants, no surgery, no downtime."
        gradient="from-espresso-800 via-spa-800 to-espresso-700"
        gradientDir="to-b"
        radialPos="center"
      />

      {/* Treatments */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Our Techniques"
            title="How We Lift & Sculpt"
            subtitle="We combine four proven modalities to build muscle, tighten skin, reduce surrounding fat, and smooth cellulite — all without surgery."
          />
          <div className="grid md:grid-cols-2 gap-8 mt-4">
            {treatments.map((t) => (
              <div key={t.name} className="bg-cream-100 p-8 border border-cream-300 hover:border-spa hover:shadow-lg transition-all duration-300">
                <h3 className="font-serif text-xl font-bold text-espresso mb-1">{t.name}</h3>
                <p className="text-spa text-[10px] font-medium tracking-widest uppercase mb-4">{t.subtitle}</p>
                <p className="text-espresso-500 text-sm leading-relaxed mb-5">{t.desc}</p>
                <ul className="space-y-2">
                  {t.results.map((r, i) => (
                    <li key={i} className="flex items-start gap-2 text-espresso-500 text-sm">
                      <CheckCircle className="w-4 h-4 text-spa flex-shrink-0 mt-0.5" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BeforeAfter
        heading="Real Client Results"
        items={[
          { label: 'BBB — 1', result: '', beforeSrc: '/images/before-after/BBB1/before.jpg', afterSrc: '/images/before-after/BBB1/after.jpg', beforeAlt: 'Before Brazilian butt enhancement', afterAlt: 'After Brazilian butt enhancement' },
          { label: 'BBB — 2', result: '', beforeSrc: '/images/before-after/BBB2/before.jpg', afterSrc: '/images/before-after/BBB2/after.jpg', beforeAlt: 'Before Brazilian butt enhancement', afterAlt: 'After Brazilian butt enhancement' },
          { label: 'BBB — 3', result: '', beforeSrc: '/images/before-after/BBB3/before.jpg', afterSrc: '/images/before-after/BBB3/after.jpg', beforeAlt: 'Before Brazilian butt enhancement', afterAlt: 'After Brazilian butt enhancement' },
        ]}
      />

      {/* Benefits Grid */}
      <section className="py-20 px-6 bg-espresso">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Why Choose Us"
            title="The Advanced Med Difference"
            subtitle="Surgery-free enhancement built around your goals, your body, and your lifestyle."
            light={true}
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
            {benefits.map((b) => {
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

      {/* What to Expect */}
      <section className="py-24 px-6 bg-cream-100">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Your Journey"
            title="What to Expect"
            subtitle="From your free evaluation to your final session — here's how your non-surgical BBL protocol unfolds."
          />
          <div className="grid md:grid-cols-3 gap-8 mt-4">
            {[
              { step: '01', title: 'Free Evaluation', desc: 'We assess your anatomy, skin quality, muscle tone, and goals. Your clinician designs a personalized combination protocol and walks you through your expected timeline and results.' },
              { step: '02', title: 'Your Treatment Series', desc: 'Sessions are typically scheduled 1–2 weeks apart. EMS, RF, cavitation, and massage are combined in the sequence that best serves your protocol. Each session builds on the last.' },
              { step: '03', title: 'Progressive Results', desc: 'Muscle development from EMS continues for 4–6 weeks after your last session. RF collagen remodeling improves for up to 3 months. Maintenance sessions preserve and enhance your results long term.' },
            ].map((item) => (
              <div key={item.step} className="bg-white p-8 border border-cream-300 hover:border-spa hover:shadow-lg transition-all duration-300">
                <div className="font-serif text-5xl font-bold text-cream-400 mb-4">{item.step}</div>
                <h4 className="font-serif font-bold text-xl text-espresso mb-3">{item.title}</h4>
                <p className="text-espresso-500 leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-cream-200 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-4xl font-bold text-espresso mb-4">Ready to Lift & Sculpt?</h2>
          <p className="text-espresso-500 text-lg mb-10 leading-relaxed">
            Book your free evaluation today. Our specialists will design a personalized non-surgical BBL protocol tailored to your anatomy, goals, and timeline.
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
