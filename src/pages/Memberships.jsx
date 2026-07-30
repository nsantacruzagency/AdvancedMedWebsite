import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Star, Sparkles, Shield } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'
import HeroPhoto from '../components/HeroPhoto'
import FAQ from '../components/FAQ'

const services = [
  {
    name: '3-in-1 Massage',
    desc: 'Relax, restore, and recharge with our signature 3-in-1 massage.',
    tagline: 'Relax deeper. Feel better.',
  },
  {
    name: 'IV Therapy Bag',
    desc: 'Stay hydrated, energized, and supported with IV therapy. (Premium bags excluded)',
    tagline: 'Fuel your body. Elevate your health.',
  },
  {
    name: 'Detox Session',
    desc: 'Support your body\'s natural detoxification and feel lighter, leaner, more vibrant.',
    tagline: 'Detox. Refresh. Reset.',
  },
  {
    name: 'Body In Shape Session',
    desc: 'Tone, tighten, and sculpt your body with advanced technology.',
    tagline: 'Sculpt your body. Love your results.',
  },
  {
    name: 'WonderTouch SkinTIGHT Session',
    desc: 'Non-invasive contouring to reduce inches and enhance your natural shape.',
    tagline: 'Non-invasive. High-impact.',
  },
  {
    name: 'WonderTouch FaceLIFT Session',
    desc: 'Lift, tone, and rejuvenate your skin for a youthful, radiant glow.',
    tagline: 'Lift. Glow. Be radiant.',
  },
  {
    name: 'Breeze Korean Glow Facial',
    desc: 'Deep cleansing, hydration, and glow for healthier, more radiant skin.',
    tagline: 'Your glow, on repeat.',
  },
]

const steps = [
  {
    number: '01',
    title: 'Choose Your Plan',
    desc: 'Sign up for the Advance Membership and lock in your $149/month rate with a 6-month commitment. Not sure? Book a free evaluation first.',
    icon: <Star className="w-8 h-8 text-spa-300" />,
  },
  {
    number: '02',
    title: 'Book Anytime',
    desc: 'Use your app, call us, or walk in. Members get priority scheduling so you always get your preferred time.',
    icon: <Shield className="w-8 h-8 text-spa-300" />,
  },
  {
    number: '03',
    title: 'Look & Feel Amazing',
    desc: 'Show up, be pampered, and leave transformed. Consistent care delivers the long-term results you deserve.',
    icon: <Sparkles className="w-8 h-8 text-spa-300" />,
  },
]

const faqItems = [
  {
    q: 'What is the commitment for the Advance Membership?',
    a: 'The Advance Membership requires a 6-month minimum commitment. After the initial 6 months, your membership continues month-to-month with no long-term obligation. You may cancel at any time after the initial period with 30 days\' written notice.',
  },
  {
    q: 'Which services count as my 1 free service per month?',
    a: 'Your free monthly service can be any of the following: 3-in-1 Massage, IV Therapy Bag (premium bags excluded), Detox Session, Body In Shape Session, WonderTouch SkinTIGHT Session, WonderTouch FaceLIFT Session, or Breeze Korean Glow Facial.',
  },
  {
    q: 'Can I pause my membership?',
    a: 'Yes. Members may pause their membership with advance notice. Simply contact our team to initiate a pause. Paused months do not count toward treatment credits.',
  },
  {
    q: 'Can I share my membership with a family member?',
    a: 'Memberships are individual and non-transferable. However, referred family members receive a discount off their first month when they sign up under your name. Ask us about our Refer a Friend perks.',
  },
  {
    q: 'Do unused treatments roll over to the next month?',
    a: 'Monthly treatment credits do not roll over — they are a use-it-or-love-it benefit. We send a reminder notification before your billing cycle ends so you never miss a session.',
  },
  {
    q: 'Does the 15% discount apply to all services?',
    a: 'Yes — as a member you receive 15% off all additional services beyond your monthly free service, every visit. This discount applies to services only and cannot be combined with other promotional offers.',
  },
]

export default function Memberships() {
  return (
    <div className="bg-white">
      <HeroPhoto
        eyebrow="Exclusive Access"
        title={"The Advance\nMembership"}
        subtitle="More than self-care. It's your plan for long-term results."
        gradient="from-espresso-800 via-espresso-700 to-spa-700"
        gradientDir="to-bl"
        radialPos="top_left"
      />

      {/* Main membership card */}
      <section className="py-20 px-6 bg-cream-100">
        <div className="max-w-4xl mx-auto">

          {/* Header */}
          <div className="text-center mb-14">
            <p className="text-spa text-[10px] font-medium uppercase mb-6" style={{ letterSpacing: '0.28em' }}>
              Membership That Pays You Back — In Results &amp; Savings
            </p>
            <div className="flex items-center justify-center gap-6 mb-3">
              <div className="h-px bg-cream-300 flex-1 max-w-[80px]" />
              <div>
                <span className="font-serif text-8xl font-light text-espresso leading-none">$149</span>
              </div>
              <div className="h-px bg-cream-300 flex-1 max-w-[80px]" />
            </div>
            <p className="text-espresso-400 text-sm font-light tracking-widest uppercase mb-1">per month</p>
            <p className="text-spa text-[10px] font-medium tracking-widest uppercase" style={{ letterSpacing: '0.22em' }}>6-Month Commitment</p>
          </div>

          {/* Top perks */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            <div className="bg-spa p-6 flex items-start gap-4">
              <CheckCircle className="w-5 h-5 text-cream-100 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-serif text-lg font-bold text-cream-100 mb-1">1 Free Service Every Month</h4>
                <p className="text-cream-200 text-sm">Your choice of premium services to help you look and feel your best.</p>
                <p className="text-cream-300 text-[10px] font-medium uppercase tracking-widest mt-2">Because you deserve it.</p>
              </div>
            </div>
            <div className="bg-spa p-6 flex items-start gap-4">
              <CheckCircle className="w-5 h-5 text-cream-100 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-serif text-lg font-bold text-cream-100 mb-1">15% Off All Additional Services</h4>
                <p className="text-cream-200 text-sm">Enjoy 15% savings on every service, every visit.</p>
                <p className="text-cream-300 text-[10px] font-medium uppercase tracking-widest mt-2">More results. More value.</p>
              </div>
            </div>
          </div>

          {/* Services list */}
          <div className="bg-white border border-cream-300 p-8 md:p-10">
            <h3 className="font-serif text-2xl font-light text-espresso text-center mb-2">✦ Your Membership Includes ✦</h3>
            <p className="text-espresso-400 text-sm text-center mb-8">Choose one of these services as your free monthly session</p>
            <div className="space-y-5">
              {services.map((s) => (
                <div key={s.name} className="flex items-start justify-between gap-6 border-b border-cream-200 pb-5 last:border-0 last:pb-0">
                  <div className="flex items-start gap-4">
                    <div className="w-1.5 h-1.5 bg-spa rounded-full flex-shrink-0 mt-2" />
                    <div>
                      <h4 className="font-serif font-bold text-espresso mb-0.5">{s.name}</h4>
                      <p className="text-espresso-500 text-sm">{s.desc}</p>
                    </div>
                  </div>
                  <p className="text-spa text-[11px] font-medium italic text-right flex-shrink-0 hidden sm:block">{s.tagline}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10 text-center">
            <a
              href="https://advancedmedspaofficial.janeapp.com/" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-spa hover:bg-spa-600 text-cream-100 text-[10px] tracking-widest uppercase font-medium px-12 py-5 transition-all duration-300"
            >
              Join Today — $149/Month <ArrowRight className="w-4 h-4" />
            </a>
            <p className="text-espresso-400 text-xs mt-4">6-month commitment. This is more than a membership — it's your transformation partnership.</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 bg-espresso text-cream-200">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            eyebrow="Simple Process"
            title="How It Works"
            subtitle="Getting started with your membership is effortless. Here's exactly what to expect."
            light={true}
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
            {steps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/5 border border-white/10 mb-5">
                  {step.icon}
                </div>
                <div className="text-spa-300 font-bold text-[10px] tracking-widest uppercase mb-2">{step.number}</div>
                <h3 className="font-serif text-xl font-bold text-cream-100 mb-3">{step.title}</h3>
                <p className="text-cream-300 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <a
              href="https://advancedmedspaofficial.janeapp.com/" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-cream-100 hover:bg-white text-espresso text-[10px] tracking-widest uppercase font-medium px-10 py-4 transition-all duration-300"
            >
              Start My Membership <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Terms */}
      <section className="py-8 px-6 bg-cream-100 border-t border-cream-300">
        <div className="max-w-4xl mx-auto">
          <p className="text-espresso-400 text-xs leading-relaxed text-center">
            <strong className="text-espresso-500">Membership Terms:</strong> The Advance Membership requires a 6-month minimum commitment. Membership auto-renews monthly after the initial period. Members may cancel with 30 days' written notice after the commitment period. Monthly treatment credits are non-transferable and expire at the end of each billing cycle. The 15% discount applies to services only and cannot be combined with other promotional offers or gift certificates. Advanced Med reserves the right to modify membership benefits with 30 days' notice to active members.
          </p>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 px-6 bg-espresso text-cream-200 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-spa-300 text-[10px] font-medium uppercase mb-4" style={{ letterSpacing: '0.28em' }}>Consistent Care. Exclusive Savings.</p>
          <h2 className="font-serif text-4xl font-bold mb-4">Unstoppable Results.</h2>
          <p className="text-cream-300 text-lg mb-8 leading-relaxed">
            The best version of you isn't a destination — it's a practice. Let us be your partner in that journey, month after month.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://advancedmedspaofficial.janeapp.com/" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-cream-100 hover:bg-white text-espresso text-[10px] tracking-widest uppercase font-medium px-10 py-4 transition-all duration-300"
            >
              Join Today <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              to="/personalized-evaluation"
              className="inline-flex items-center justify-center gap-2 border border-cream-300/40 text-cream-200 text-[10px] tracking-widest uppercase font-medium px-8 py-4 hover:border-cream-300 transition-all duration-300"
            >
              Book a Free Evaluation
            </Link>
          </div>
        </div>
      </section>

      <FAQ items={faqItems} />
    </div>
  )
}
