import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, ChevronDown, ChevronUp, Star, Sparkles, Crown, Shield } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'

const tiers = [
  {
    id: 'silver',
    name: 'Silver Glow',
    price: 99,
    tagline: 'Begin your glow journey',
    icon: <Star className="w-7 h-7" />,
    color: 'border-gray-200',
    badgeColor: 'bg-gray-100 text-gray-600',
    accentColor: 'text-gray-500',
    buttonClass: 'bg-gray-800 hover:bg-gray-900 text-white',
    popular: false,
    perks: [
      '1 facial treatment per month (your choice)',
      '10% off all additional services',
      'Priority booking access',
      'Monthly member newsletter & exclusive offers',
      'Complimentary skin consultation at sign-up',
    ],
  },
  {
    id: 'gold',
    name: 'Gold Radiance',
    price: 199,
    tagline: 'Our most popular plan',
    icon: <Sparkles className="w-7 h-7" />,
    color: 'border-gold-400 ring-2 ring-gold-400 ring-offset-2',
    badgeColor: 'bg-gold-500 text-white',
    accentColor: 'text-gold-600',
    buttonClass: 'bg-gold-500 hover:bg-gold-600 text-white shadow-lg shadow-gold-500/30',
    popular: true,
    perks: [
      '2 treatments per month (choose from any menu)',
      '20% off all additional services',
      'Free monthly B12 or immunity IV shot',
      'Priority booking access',
      'Birthday bonus treatment (complimentary)',
      'Complimentary skin analysis every 3 months',
      'Early access to new services & promotions',
    ],
  },
  {
    id: 'platinum',
    name: 'Platinum Elite',
    price: 349,
    tagline: 'The ultimate VIP experience',
    icon: <Crown className="w-7 h-7" />,
    color: 'border-gray-700',
    badgeColor: 'bg-gray-900 text-gold-400',
    accentColor: 'text-gray-700',
    buttonClass: 'bg-gray-900 hover:bg-gray-800 text-white',
    popular: false,
    perks: [
      '3 treatments per month (any service)',
      'Unlimited provider consultations',
      '30% off all additional services',
      'Free monthly Myers Cocktail IV drip (full)',
      'Complimentary comprehensive blood panel annually',
      'Dedicated care coordinator assigned to you',
      'VIP invite to exclusive member events & launches',
      '24-hour advance booking window',
      'Birthday month: 2 complimentary treatments',
    ],
  },
]

const faqs = [
  {
    q: 'Can I pause my membership?',
    a: 'Yes. Members may pause their membership once per calendar year for up to 60 days with 7 days\' advance notice. Paused months do not count toward treatment credits. Simply contact your care coordinator or call us to initiate a pause.',
  },
  {
    q: 'Can I share my membership with a family member?',
    a: 'Memberships are individual and non-transferable. However, referred family members receive 20% off their first month when they sign up under your name. Ask us about our Refer a Friend perks.',
  },
  {
    q: 'What counts as a "treatment" each month?',
    a: 'Any service from our treatment menu qualifies — facials, chemical peels, massages, body treatments, IV drips, LED therapy, skin tightening, and more. Injectables (Botox, fillers) and medical procedures require a separate consultation and are not included in the monthly treatment credit, but do receive the membership discount.',
  },
  {
    q: 'Do unused treatments roll over to the next month?',
    a: 'Monthly treatment credits do not roll over — they are a use-it-or-love-it benefit. We send a reminder notification 5 days before your billing cycle ends so you never miss a session. We encourage you to schedule in advance to always get your full value.',
  },
  {
    q: 'How do I cancel my membership?',
    a: 'You may cancel with 30 days\' written notice before your next billing date. There are no cancellation fees after the initial 3-month commitment period. We simply ask that you give us the chance to address any concerns before you go — your satisfaction truly matters to us.',
  },
]

const steps = [
  {
    number: '01',
    title: 'Choose Your Plan',
    desc: 'Select the membership tier that fits your lifestyle and wellness goals. Not sure? Book a free consultation and we\'ll recommend the best fit.',
    icon: <Star className="w-8 h-8 text-gold-400" />,
  },
  {
    number: '02',
    title: 'Book Anytime',
    desc: 'Use your app, call us, or walk in. Members get priority scheduling and exclusive booking windows so you always get your preferred time.',
    icon: <Shield className="w-8 h-8 text-gold-400" />,
  },
  {
    number: '03',
    title: 'Look & Feel Amazing',
    desc: 'Show up, be pampered, and leave transformed. Our team tracks your progress and adjusts your treatments each visit for continuous improvement.',
    icon: <Sparkles className="w-8 h-8 text-gold-400" />,
  },
]

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left bg-white hover:bg-gray-50 transition"
      >
        <span className="font-semibold text-gray-900 text-sm md:text-base pr-4">{q}</span>
        {open ? (
          <ChevronUp className="w-5 h-5 text-gold-500 flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
        )}
      </button>
      {open && (
        <div className="px-6 pb-5 bg-white border-t border-gray-100">
          <p className="text-gray-500 text-sm leading-relaxed pt-3">{a}</p>
        </div>
      )}
    </div>
  )
}

export default function Memberships() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-gray-950 via-gray-900 to-stone-900 text-white py-28 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-gold-400 to-transparent pointer-events-none" />
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-gold-300 to-transparent pointer-events-none" />
        <div className="relative max-w-4xl mx-auto text-center">
          <p className="text-gold-400 text-xs font-bold tracking-[0.3em] uppercase mb-4">Exclusive Plans</p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold leading-tight mb-6">
            Exclusive Membership Plans
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-4 leading-relaxed">
            Investing in yourself is the most powerful decision you'll ever make. Our membership plans make luxury wellness a consistent, affordable part of your life — not a rare occasion.
          </p>
          <p className="text-gold-400 text-sm font-semibold">
            No contracts after the first 3 months · Cancel anytime with 30 days notice
          </p>
        </div>
      </section>

      {/* Membership Tiers */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Our Plans"
            title="Choose Your Level of Luxury"
            subtitle="Every tier includes priority booking, member-only pricing, and the full Advanced Med MedSpa Lounge experience."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4 items-stretch">
            {tiers.map((tier) => (
              <div
                key={tier.id}
                className={`relative bg-white rounded-3xl border-2 ${tier.color} p-8 flex flex-col transition-all duration-200 hover:shadow-xl`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-gold-500 text-white text-xs font-bold px-5 py-1.5 rounded-full shadow-md shadow-gold-500/30 whitespace-nowrap">
                      ★ Most Popular
                    </span>
                  </div>
                )}
                <div className={`inline-flex items-center gap-2 self-start mb-5 px-3 py-1.5 rounded-full text-sm font-bold ${tier.badgeColor}`}>
                  {tier.icon}
                  {tier.name}
                </div>
                <div className="mb-2">
                  <span className="text-4xl font-bold text-gray-900">${tier.price}</span>
                  <span className="text-gray-400 text-sm">/month</span>
                </div>
                <p className={`text-sm font-semibold mb-6 ${tier.accentColor}`}>{tier.tagline}</p>
                <ul className="space-y-3 mb-8 flex-1">
                  {tier.perks.map((perk) => (
                    <li key={perk} className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" />
                      {perk}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/book"
                  className={`w-full text-center font-bold py-3.5 rounded-xl transition-all duration-200 ${tier.buttonClass}`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-400 text-xs mt-6">
            All plans billed monthly. A 3-month minimum commitment applies at sign-up. Prices subject to change with 30 days notice to active members.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-900 to-gray-950 text-white">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            eyebrow="Simple Process"
            title="How It Works"
            subtitle="Getting started with your membership is effortless. Here's exactly what to expect."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
            {steps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/5 border border-white/10 mb-5">
                  {step.icon}
                </div>
                <div className="text-gold-400 font-bold text-xs tracking-[0.2em] uppercase mb-2">{step.number}</div>
                <h3 className="font-serif text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/book"
              className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-white font-bold px-10 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-gold-500/30 hover:scale-105"
            >
              Start My Membership <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <SectionHeader
            eyebrow="FAQ"
            title="Membership Questions Answered"
            subtitle="Everything you need to know before you join — and we're always happy to answer more in person."
          />
          <div className="mt-4 space-y-3">
            {faqs.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* Terms Note */}
      <section className="py-8 px-6 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-400 text-xs leading-relaxed text-center">
            <strong className="text-gray-500">Membership Terms:</strong> All memberships auto-renew monthly after the initial 3-month commitment period. Members may cancel with 30 days' written notice. Monthly treatment credits are non-transferable and expire at the end of each billing cycle. Membership discounts apply to services only and cannot be combined with other promotional offers or gift certificates. Advanced Med MedSpa Lounge reserves the right to modify membership benefits with 30 days' notice to active members. Medical procedures and injectable treatments are not included in monthly credits but receive the applicable membership discount rate.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-r from-gold-500 to-gold-600 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-4xl font-bold mb-4">Invest in Yourself, Every Month</h2>
          <p className="text-white/85 text-lg mb-8 leading-relaxed">
            The best version of you isn't a destination — it's a practice. Let us be your partner in that journey, month after month.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/book"
              className="inline-flex items-center justify-center gap-2 bg-white text-gold-600 font-bold px-10 py-4 rounded-full hover:bg-gold-50 transition-all duration-300 shadow-lg hover:scale-105"
            >
              Join Today <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white/60 text-white font-semibold px-8 py-4 rounded-full hover:border-white hover:bg-white/10 transition-all duration-300"
            >
              Ask Us a Question
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
