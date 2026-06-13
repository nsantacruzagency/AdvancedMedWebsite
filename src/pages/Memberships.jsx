import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Star, Sparkles, Crown, Shield } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'
import HeroPhoto from '../components/HeroPhoto'
import FAQ from '../components/FAQ'

const tiers = [
  {
    id: 'silver',
    name: 'Silver Glow',
    price: 99,
    tagline: 'Begin your glow journey',
    icon: <Star className="w-7 h-7" />,
    color: 'border-cream-300',
    badgeColor: 'bg-cream-200 text-espresso-600',
    accentColor: 'text-espresso-500',
    buttonClass: 'bg-spa hover:bg-spa-600 text-cream-100 text-[10px] tracking-widest uppercase',
    popular: false,
    perks: [
      '1 facial treatment per month (your choice)',
      '10% off all additional services',
      'Priority booking access',
      'Monthly member newsletter & exclusive offers',
      'Complimentary skin evaluation at sign-up',
    ],
  },
  {
    id: 'gold',
    name: 'Gold Radiance',
    price: 199,
    tagline: 'Our most popular plan',
    icon: <Sparkles className="w-7 h-7" />,
    color: 'border-spa ring-2 ring-spa ring-offset-2',
    badgeColor: 'bg-espresso text-cream-100',
    accentColor: 'text-spa-500',
    buttonClass: 'bg-spa hover:bg-spa-600 text-cream-100 text-[10px] tracking-widest uppercase',
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
    color: 'border-espresso-600',
    badgeColor: 'bg-espresso text-cream-100',
    accentColor: 'text-espresso-600',
    buttonClass: 'bg-spa hover:bg-spa-600 text-cream-100 text-[10px] tracking-widest uppercase',
    popular: false,
    perks: [
      '3 treatments per month (any service)',
      'Unlimited provider evaluations',
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

const faqItems = [
  {
    q: 'Can I pause my membership?',
    a: 'Yes. Members may pause their membership once per calendar year for up to 60 days with 7 days\' advance notice. Paused months do not count toward treatment credits. Simply contact your care coordinator or call us to initiate a pause.',
  },
  {
    q: 'Can I share my membership with a family member?',
    a: 'Memberships are individual and non-transferable. However, referred family members receive 20% off their first month when they sign up under your name. Ask us about our Refer a Friend perks.',
  },
  {
    q: 'What counts as a treatment each month?',
    a: 'Any service from our treatment menu qualifies — facials, chemical peels, massages, body treatments, IV drips, LED therapy, skin tightening, and more. Injectables (Botox, fillers) and medical procedures require a separate evaluation and are not included in the monthly treatment credit, but do receive the membership discount.',
  },
  {
    q: 'How do I cancel my membership?',
    a: 'You may cancel with 30 days\' written notice before your next billing date. There are no cancellation fees after the initial 3-month commitment period. We simply ask that you give us the chance to address any concerns before you go — your satisfaction truly matters to us.',
  },
  {
    q: 'Do unused treatments roll over to the next month?',
    a: 'Monthly treatment credits do not roll over — they are a use-it-or-love-it benefit. We send a reminder notification 5 days before your billing cycle ends so you never miss a session. We encourage you to schedule in advance to always get your full value.',
  },
  {
    q: 'Is there a contract?',
    a: 'There is a 3-month minimum commitment when you first sign up — after that, your membership continues month-to-month with no long-term obligation. You may cancel at any time after the initial period with 30 days\' written notice and no cancellation fees.',
  },
]

const steps = [
  {
    number: '01',
    title: 'Choose Your Plan',
    desc: 'Select the membership tier that fits your lifestyle and wellness goals. Not sure? Book a free evaluation and we\'ll recommend the best fit.',
    icon: <Star className="w-8 h-8 text-spa-300" />,
  },
  {
    number: '02',
    title: 'Book Anytime',
    desc: 'Use your app, call us, or walk in. Members get priority scheduling and exclusive booking windows so you always get your preferred time.',
    icon: <Shield className="w-8 h-8 text-spa-300" />,
  },
  {
    number: '03',
    title: 'Look & Feel Amazing',
    desc: 'Show up, be pampered, and leave transformed. Our team tracks your progress and adjusts your treatments each visit for continuous improvement.',
    icon: <Sparkles className="w-8 h-8 text-spa-300" />,
  },
]

export default function Memberships() {
  return (
    <div className="bg-white">
      <HeroPhoto
        eyebrow="Exclusive Access"
        title={"Membership\nPlans"}
        subtitle="Priority care, monthly treatments, and meaningful savings — delivered with the consistency your skin deserves."
        gradient="from-espresso-800 via-espresso-700 to-spa-700"
        gradientDir="to-bl"
        radialPos="top_left"
      />

      {/* Membership Tiers */}
      <section className="py-20 px-6 bg-cream-100">
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
                className={`relative bg-white border-2 ${tier.color} p-8 flex flex-col transition-all duration-200 hover:shadow-xl`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-spa text-white text-[10px] font-bold px-5 py-1.5 tracking-widest uppercase shadow-md whitespace-nowrap">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className={`inline-flex items-center gap-2 self-start mb-5 px-3 py-1.5 text-sm font-bold ${tier.badgeColor}`}>
                  {tier.icon}
                  {tier.name}
                </div>
                <div className="mb-2">
                  <span className="text-4xl font-bold text-espresso">${tier.price}</span>
                  <span className="text-espresso-400 text-sm">/month</span>
                </div>
                <p className={`text-sm font-semibold mb-6 ${tier.accentColor}`}>{tier.tagline}</p>
                <ul className="space-y-3 mb-8 flex-1">
                  {tier.perks.map((perk) => (
                    <li key={perk} className="flex items-start gap-3 text-sm text-espresso-500">
                      <CheckCircle className="w-4 h-4 text-spa flex-shrink-0 mt-0.5" />
                      {perk}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/book"
                  className={`w-full text-center font-bold py-3.5 transition-all duration-200 ${tier.buttonClass}`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
          <p className="text-center text-espresso-400 text-xs mt-6">
            All plans billed monthly. A 3-month minimum commitment applies at sign-up. Prices subject to change with 30 days notice to active members.
          </p>
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
            <Link
              to="/book"
              className="inline-flex items-center gap-2 bg-cream-100 hover:bg-white text-espresso text-[10px] tracking-widest uppercase font-medium px-10 py-4 transition-all duration-300"
            >
              Start My Membership <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Terms Note */}
      <section className="py-8 px-6 bg-cream-100 border-t border-cream-300">
        <div className="max-w-4xl mx-auto">
          <p className="text-espresso-400 text-xs leading-relaxed text-center">
            <strong className="text-espresso-500">Membership Terms:</strong> All memberships auto-renew monthly after the initial 3-month commitment period. Members may cancel with 30 days' written notice. Monthly treatment credits are non-transferable and expire at the end of each billing cycle. Membership discounts apply to services only and cannot be combined with other promotional offers or gift certificates. Advanced Med MedSpa Lounge reserves the right to modify membership benefits with 30 days' notice to active members. Medical procedures and injectable treatments are not included in monthly credits but receive the applicable membership discount rate.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-espresso text-cream-200 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-4xl font-bold mb-4">Invest in Yourself, Every Month</h2>
          <p className="text-cream-300 text-lg mb-8 leading-relaxed">
            The best version of you isn't a destination — it's a practice. Let us be your partner in that journey, month after month.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/book"
              className="inline-flex items-center justify-center gap-2 bg-cream-100 hover:bg-white text-espresso text-[10px] tracking-widest uppercase font-medium px-10 py-4 transition-all duration-300"
            >
              Join Today <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 border border-cream-300/40 text-cream-200 text-[10px] tracking-widest uppercase font-medium px-8 py-4 hover:border-cream-300 transition-all duration-300"
            >
              Ask Us a Question
            </Link>
          </div>
        </div>
      </section>

      <FAQ items={faqItems} />
    </div>
  )
}
