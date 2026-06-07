import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Zap, Droplets, Wind, Apple, Star } from 'lucide-react'
import SectionHeader from '../../components/SectionHeader'
import HeroPhoto from '../../components/HeroPhoto'
import FAQ from '../../components/FAQ'
import BeforeAfter from '../../components/BeforeAfter'

const causes = [
  {
    icon: <Zap className="w-7 h-7 text-spa" />,
    title: 'Hormonal Fluctuations',
    desc: 'Androgens trigger excess sebum production, especially during puberty, menstrual cycles, pregnancy, and PCOS.',
  },
  {
    icon: <Droplets className="w-7 h-7 text-spa" />,
    title: 'Excess Oil (Sebum)',
    desc: 'Overactive sebaceous glands clog pores and create the ideal environment for bacterial growth.',
  },
  {
    icon: <Wind className="w-7 h-7 text-spa" />,
    title: 'Bacteria (C. acnes)',
    desc: 'Cutibacterium acnes proliferates inside blocked follicles, triggering inflammation and breakouts.',
  },
  {
    icon: <Apple className="w-7 h-7 text-spa" />,
    title: 'Diet & Lifestyle',
    desc: 'High-glycemic foods, dairy, stress, and poor sleep can spike insulin and cortisol — both acne triggers.',
  },
]

const acneTypes = [
  {
    name: 'Comedonal Acne',
    desc: 'Whiteheads and blackheads caused by clogged pores. Usually non-inflammatory and highly responsive to exfoliation treatments.',
  },
  {
    name: 'Hormonal Acne',
    desc: 'Deep, painful cysts along the jawline and chin tied to hormonal shifts. Often cyclical and requires a targeted protocol.',
  },
  {
    name: 'Cystic Acne',
    desc: 'Severe, nodular breakouts that sit deep under the skin. Requires medical-grade intervention to prevent permanent scarring.',
  },
  {
    name: 'Post-Acne Scarring',
    desc: 'Hyperpigmentation, icepick, boxcar, and rolling scars left behind after breakouts heal. We treat both texture and discoloration.',
  },
]

const treatments = [
  {
    name: 'Chemical Peels',
    subtitle: 'Salicylic, Glycolic & Mandelic Acids',
    desc: 'Medical-grade peels dissolve dead skin cells, unclog pores, and reduce inflammation. Great for all acne types.',
    results: '4–6 sessions recommended',
  },
  {
    name: 'Korean Clarifying Facial',
    subtitle: 'Our Signature Acne Protocol',
    desc: 'A multi-step Korean beauty facial combining deep cleansing, enzyme exfoliation, extraction, LED therapy, and calming ampoules.',
    results: 'Visible clarity after first session',
  },
  {
    name: 'LED Blue Light Therapy',
    subtitle: '415nm Wavelength',
    desc: 'Blue light penetrates pores and destroys acne-causing bacteria without irritation — perfect for sensitive, inflamed skin.',
    results: 'No downtime, gentle & effective',
  },
  {
    name: 'Medical-Grade Skincare',
    subtitle: 'Prescription-Strength Formulas',
    desc: 'We curate personalized home-care regimens featuring retinoids, azelaic acid, niacinamide, and benzoyl peroxide at therapeutic concentrations.',
    results: 'Ongoing prevention & maintenance',
  },
  {
    name: 'Professional Extractions',
    subtitle: 'Safe & Sterile Technique',
    desc: 'Our licensed estheticians perform sterile comedone extractions to clear clogged pores without trauma or scarring.',
    results: 'Included in most facial treatments',
  },
]

const tips = [
  'Double cleanse every evening to remove sunscreen, makeup, and sebum.',
  'Use a non-comedogenic moisturizer — even oily skin needs hydration.',
  'Apply SPF 30+ daily; UV exposure worsens post-acne marks.',
  'Avoid picking or popping — it drives bacteria deeper and causes scars.',
  'Change pillowcases 2–3x per week to minimize bacterial transfer.',
  'Stay consistent with your prescribed regimen for at least 8–12 weeks.',
]

export default function Acne() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative bg-espresso text-cream-200 py-28 px-6 overflow-hidden">
        <div className="relative max-w-4xl mx-auto text-center">
          <p className="text-spa text-[10px] font-medium tracking-widest uppercase mb-4">Skin Concern</p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold leading-tight mb-6">
            Acne &amp; Breakouts
          </h1>
          <p className="text-cream-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Clear, confident skin is possible at any age. Our science-backed acne protocols target breakouts at the root — not just on the surface.
          </p>
          <Link
            to="/book"
            className="inline-flex items-center gap-2 bg-cream-100 hover:bg-white text-espresso text-[10px] tracking-widest uppercase font-medium px-8 py-4 transition-all duration-300"
          >
            Book a Skin Consultation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* What Causes Acne */}
      <section className="py-20 px-6 bg-cream-100">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Root Causes"
            title="Why Acne Happens"
            subtitle="Acne is a multifactorial condition. Effective treatment means understanding and addressing every contributing factor."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
            {causes.map((c) => (
              <div key={c.title} className="bg-white p-6 shadow-sm border border-cream-300 hover:shadow-md transition hover:border-spa">
                <div className="mb-4">{c.icon}</div>
                <h3 className="font-serif text-lg font-bold text-espresso mb-2">{c.title}</h3>
                <p className="text-espresso-500 text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Types of Acne */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="What We Treat"
            title="Types of Acne We Address"
            subtitle="No two breakouts are alike. We diagnose your specific acne type and build a personalized treatment plan."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            {acneTypes.map((t) => (
              <div key={t.name} className="flex gap-4 bg-cream-100 p-6 border border-cream-300">
                <CheckCircle className="w-6 h-6 text-spa flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-serif text-lg font-bold text-espresso mb-1">{t.name}</h3>
                  <p className="text-espresso-500 text-sm leading-relaxed">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Cards */}
      <section className="py-20 px-6 bg-espresso">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Our Protocols"
            title="Acne Treatments We Offer"
            subtitle="Every treatment is performed by licensed professionals using medical-grade technology and formulations."
            light={true}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            {treatments.map((t) => (
              <div key={t.name} className="bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition">
                <h3 className="font-serif text-xl font-bold text-cream-100 mb-1">{t.name}</h3>
                <p className="text-spa-300 text-[10px] font-medium tracking-widest uppercase mb-3">{t.subtitle}</p>
                <p className="text-cream-300 text-sm leading-relaxed mb-4">{t.desc}</p>
                <span className="inline-block bg-spa/20 text-spa-300 text-[10px] font-medium px-3 py-1 tracking-widest uppercase">
                  {t.results}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Expectations */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            eyebrow="Realistic Expectations"
            title="What to Expect on Your Journey"
            subtitle="Acne treatment is a process, not an overnight fix. Here's a general timeline based on our clinical experience."
          />
          <div className="mt-8 space-y-4">
            {[
              { week: 'Week 1–2', note: 'Initial purging may occur as treatments bring congestion to the surface — this is normal and temporary.' },
              { week: 'Week 3–4', note: 'Active breakouts begin to subside. Skin texture starts to improve and pores appear smaller.' },
              { week: 'Week 6–8', note: 'Significant reduction in breakout frequency and severity. Post-inflammatory marks begin fading.' },
              { week: 'Month 3+', note: 'Maintained results with ongoing home care. Many clients achieve near-clear to clear skin with consistent treatment.' },
            ].map((row) => (
              <div key={row.week} className="flex gap-4 items-start bg-cream-100 border border-cream-300 p-5">
                <span className="text-espresso font-bold text-sm w-24 flex-shrink-0">{row.week}</span>
                <p className="text-espresso-500 text-sm leading-relaxed">{row.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Home Care Tips */}
      <section className="py-20 px-6 bg-cream-100">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            eyebrow="Home Care"
            title="Tips to Maintain Clear Skin Between Visits"
          />
          <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            {tips.map((tip) => (
              <li key={tip} className="flex gap-3 items-start bg-white p-4 shadow-sm border border-cream-300">
                <Star className="w-5 h-5 text-spa flex-shrink-0 mt-0.5" />
                <p className="text-espresso-500 text-sm leading-relaxed">{tip}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-espresso text-cream-200 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-4xl font-bold mb-4">Ready for Clear Skin?</h2>
          <p className="text-cream-300 text-lg mb-8 leading-relaxed">
            Book a personalized skin consultation and let our experts design an acne protocol that works for your unique skin.
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
