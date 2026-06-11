import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, User, Heart, Leaf, Sparkles } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'
import HeroPhoto from '../components/HeroPhoto'
import FAQ from '../components/FAQ'

const pillars = [
  {
    icon: User,
    title: 'Your Lifestyle',
    desc: 'We learn how you actually live — your schedule, stress levels, daily activity, sleep, and habits — so every recommendation is something you can realistically sustain.',
  },
  {
    icon: Heart,
    title: 'Your Goals',
    desc: 'Whether you want to lose weight, clear your skin, restore hair, or simply feel better in your body — we listen first, then build a protocol around what matters most to you.',
  },
  {
    icon: Sparkles,
    title: 'Your Timeline',
    desc: 'We set honest, personalized expectations for when you\'ll see results — and design a pacing that works for your schedule and budget, not a one-size-fits-all series.',
  },
  {
    icon: Leaf,
    title: 'Your Budget',
    desc: 'No forced packages. We build protocols that maximize your results within what you can invest — and adjust as you progress.',
  },
]

const weightFactors = [
  'Your current eating habits and meal patterns',
  'Whether your diet includes inflammatory foods',
  'Cortisol and insulin levels (stress & blood sugar)',
  'What your bloodwork is revealing internally',
  'How much daily movement and activity you can do',
  'Whether you are weightlifting or doing resistance training',
  'Sleep quality and its impact on fat storage hormones',
  'Gut health and how it affects metabolism and absorption',
]

const skinFactors = [
  'Whether you\'re eating skin-inflammatory foods (dairy, sugar, seed oils)',
  'Your current skincare routine — what\'s working and what isn\'t',
  'A review of your actual products for clean, effective ingredients',
  'Whether your serums are targeting your specific concerns',
  'Hormonal factors affecting skin clarity and aging',
  'Sun exposure habits and SPF compliance',
  'Hydration, sleep, and lifestyle factors affecting your complexion',
  'Sensitivity, skin tone, and Fitzpatrick type for safe treatment selection',
]

const faqItems = [
  {
    q: 'What happens during a Personalized Evaluation?',
    a: 'Your evaluation is a one-on-one clinical conversation — not a sales pitch. We review your health history, goals, lifestyle, and budget. We may review your bloodwork, current skincare products, or dietary habits depending on your concerns. From there, our clinician builds a tailored protocol and walks you through exactly what to expect, when, and why.',
  },
  {
    q: 'Do I have to commit to a package at my evaluation?',
    a: 'Never. We don\'t sell packages — we design protocols. You leave your evaluation with a clear, personalized plan and the freedom to start whenever you\'re ready. There is no pressure, no upselling, and no bundled treatments you don\'t need.',
  },
  {
    q: 'Can I bring in my current skincare products for review?',
    a: 'Absolutely — and we encourage it. Many clients are unknowingly using products with inflammatory ingredients, incompatible actives, or formulas that don\'t address their actual concerns. We\'ll review your products at your evaluation and give you an honest assessment of what to keep, what to replace, and what to add.',
  },
  {
    q: 'What if I have multiple concerns — weight, skin, and hair?',
    a: 'We treat the whole person, not just the symptom. Many of our clients come in with overlapping concerns, and we design multi-modal protocols that address root causes shared across them — like hormonal imbalances, inflammation, and gut health — so your treatments work synergistically rather than in isolation.',
  },
  {
    q: 'How is this different from a regular medspa evaluation?',
    a: 'Most medspas walk you through a menu and recommend their most popular treatments. We do the opposite — we start with your biology, your lifestyle, and your goals, then select the tools that fit. Nothing is recommended that isn\'t appropriate for your unique situation.',
  },
  {
    q: 'How long does the evaluation take?',
    a: 'Most evaluations take 30–45 minutes. We never rush this process — it\'s the foundation of everything we do. If you have extensive bloodwork or multiple concerns to review, we allow additional time. Your evaluation is not a formality; it is the most important appointment you\'ll have with us.',
  },
]

export default function PersonalizedEvaluation() {
  return (
    <div className="bg-white">
      <HeroPhoto
        eyebrow="Our Approach"
        title={<>How Our Personalized<br />Protocols Work</>}
        subtitle="No packages. No guesswork. Every protocol we create is built from scratch — around your biology, your goals, your timeline, and your life."
        gradient="from-espresso-800 via-espresso-700 to-spa-700"
      />

      {/* Philosophy Statement */}
      <section className="py-20 px-6 bg-cream-100">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[10px] font-medium tracking-widest uppercase text-spa mb-4">Our Philosophy</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-espresso mb-6 leading-tight">
            Cookie-cutter packages don't work.<br />Your body isn't cookie-cutter.
          </h2>
          <p className="text-espresso-500 text-lg leading-relaxed mb-6">
            We don't believe in pre-made solutions. Every client who walks through our doors has a unique biology, a unique history, and a unique life. The only way to get real, lasting results is to start by truly understanding you — not by fitting you into a pre-existing box.
          </p>
          <p className="text-espresso-500 text-lg leading-relaxed">
            That's why every protocol at Advanced Med begins with an in-depth one-on-one evaluation. We listen before we prescribe. We assess before we treat. And we build every plan from the ground up — for you, and only you.
          </p>
        </div>
      </section>

      {/* Four Pillars */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="What We Consider"
            title="The Four Pillars of Your Protocol"
            subtitle="Every recommendation we make is filtered through four lenses — because a protocol that ignores any one of them isn't truly personalized."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
            {pillars.map((p) => {
              const Icon = p.icon
              return (
                <div key={p.title} className="bg-cream-100 p-8 border border-cream-300 hover:border-spa hover:shadow-lg transition-all duration-300 text-center">
                  <div className="flex justify-center mb-4">
                    <Icon className="w-8 h-8 text-spa" />
                  </div>
                  <h4 className="font-serif font-bold text-espresso text-lg mb-3">{p.title}</h4>
                  <p className="text-espresso-500 text-sm leading-relaxed">{p.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Weight Loss Deep Dive */}
      <section className="py-24 px-6 bg-espresso">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[10px] font-medium tracking-widest uppercase text-spa-300 mb-3">Example: Weight Loss</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-cream-100 mb-6 leading-tight">
                Weight loss isn't just about calories.<br />It's about your whole picture.
              </h2>
              <p className="text-cream-300 leading-relaxed mb-6">
                Before we recommend a single treatment, we want to understand what's actually driving your weight — because the same number on a scale can have a dozen different root causes. Hormones, inflammation, gut health, sleep, and stress all play a role that diet and exercise alone can't address.
              </p>
              <p className="text-cream-300 leading-relaxed">
                Your protocol might combine Cryo Contour for localized fat reduction, hormone balancing to reset your metabolism, lymphatic drainage to accelerate results, and targeted nutritional guidance — or it might be something completely different. We don't know until we know <em>you</em>.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 p-8">
              <h3 className="font-serif text-xl font-bold text-spa-300 mb-6">What We Evaluate for Weight</h3>
              <ul className="space-y-3">
                {weightFactors.map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-cream-300 text-sm">
                    <CheckCircle className="w-4 h-4 text-spa-300 flex-shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skin Care Deep Dive */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="bg-cream-100 border border-cream-300 p-8 order-2 md:order-1">
              <h3 className="font-serif text-xl font-bold text-espresso mb-6">What We Evaluate for Skin</h3>
              <ul className="space-y-3">
                {skinFactors.map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-espresso-500 text-sm">
                    <CheckCircle className="w-4 h-4 text-spa flex-shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-1 md:order-2">
              <p className="text-[10px] font-medium tracking-widest uppercase text-spa mb-3">Example: Skin Care</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-espresso mb-6 leading-tight">
                Bring in your skincare.<br />We'll tell you the truth.
              </h2>
              <p className="text-espresso-500 leading-relaxed mb-6">
                Most people are using products that either don't address their actual concerns, contain inflammatory ingredients that worsen the problem, or conflict with each other. A good skincare routine isn't about more products — it's about the right ones.
              </p>
              <p className="text-espresso-500 leading-relaxed mb-6">
                At your evaluation, you're welcome to bring in your full skincare lineup. We'll review every product for clean ingredients, ingredient compatibility, and whether the actives are actually targeting what you want to change.
              </p>
              <p className="text-espresso-500 leading-relaxed">
                We also assess whether your diet is contributing to skin inflammation — dairy, high-glycemic foods, and seed oils are common drivers of acne and accelerated aging that no topical can fully overcome.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* No Packages Banner */}
      <section className="py-16 px-6 bg-cream-200 border-y border-cream-300">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-espresso mb-4">
            One-on-One. Always.
          </h2>
          <p className="text-espresso-500 text-base leading-relaxed mb-2">
            We don't sell packages. We don't have a standard protocol for "weight loss" or "anti-aging." Every single plan is built from scratch at your evaluation — then refined as you progress and your body responds.
          </p>
          <p className="text-spa font-semibold text-sm mt-4">
            The most personalized medspa experience in South Florida.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-espresso text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-4xl font-bold text-cream-100 mb-4">Ready for a Plan Built for You?</h2>
          <p className="text-cream-300 text-lg mb-10 leading-relaxed">
            Book your free personalized evaluation today. No pressure, no packages — just an honest conversation about what your body needs and what we can do together.
          </p>
          <Link
            to="/book"
            className="inline-flex items-center gap-2 bg-cream-100 hover:bg-white text-espresso text-[10px] tracking-widest uppercase font-medium px-10 py-4 transition-all duration-300"
          >
            Book a Free Evaluation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <FAQ items={faqItems} />
    </div>
  )
}
