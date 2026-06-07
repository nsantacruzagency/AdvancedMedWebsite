import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'

const services = [
  {
    id: 'weight-loss',
    emoji: '⚖️',
    title: 'Medical Weight Loss',
    tagline: 'Clinically Supervised. Lasting Results.',
    description:
      'Our medical weight loss program combines advanced diagnostics, FDA-approved medications, and personalized nutrition coaching to help you achieve and maintain a healthy weight. Unlike fad diets, our approach addresses the root causes of weight gain with a full medical team supporting your journey.',
    benefits: [
      'Personalized meal and exercise planning',
      'Hormone & metabolic testing',
      'Prescription weight loss medications when appropriate',
      'Ongoing coaching and accountability',
      'Body composition analysis',
    ],
    color: 'from-emerald-50 to-teal-50',
    accent: 'text-emerald-600',
    border: 'border-emerald-100',
  },
  {
    id: 'body-contouring',
    emoji: '✨',
    title: 'Body Contouring',
    tagline: 'Sculpt. Shape. Reveal.',
    description:
      'Say goodbye to stubborn fat that diet and exercise cannot eliminate. Our non-invasive body contouring treatments use advanced technologies like cryolipolysis, radiofrequency, and HIFU to destroy fat cells and sculpt your ideal figure — all with zero downtime.',
    benefits: [
      'Non-surgical, no downtime',
      'Targets love handles, abdomen, thighs, and arms',
      'Visible results in as few as 2–4 sessions',
      'Combines fat reduction and skin tightening',
      'Safe for all skin types and body shapes',
    ],
    color: 'from-violet-50 to-purple-50',
    accent: 'text-violet-600',
    border: 'border-violet-100',
  },
  {
    id: 'skin-tightening',
    emoji: '🌸',
    title: 'Skin Tightening',
    tagline: 'Firm. Lifted. Rejuvenated.',
    description:
      'Restore your skin\'s youthful elasticity with our advanced skin tightening treatments. Using radiofrequency (RF), ultrasound (HIFU), and collagen induction therapies, we stimulate your body\'s natural collagen production to visibly firm and lift sagging skin on the face, neck, abdomen, and body.',
    benefits: [
      'Tightens loose skin on face, neck & body',
      'Stimulates collagen production naturally',
      'Non-invasive alternative to surgery',
      'Progressive improvement over weeks',
      'Suitable for all skin tones',
    ],
    color: 'from-pink-50 to-rose-50',
    accent: 'text-pink-600',
    border: 'border-pink-100',
  },
  {
    id: 'botox',
    emoji: '💉',
    title: 'Botox & Neurotoxins',
    tagline: 'Smooth. Natural. Refreshed.',
    description:
      'Our expert injectors use Botox, Dysport, and Xeomin to relax the muscles responsible for expression lines — delivering a refreshed, natural appearance without looking "frozen." Whether it\'s forehead lines, crow\'s feet, or a brow lift, our precision technique produces beautiful, subtle results.',
    benefits: [
      'Forehead lines & frown lines',
      'Crow\'s feet & under-eye wrinkles',
      'Brow lifting',
      'Lip flip & gummy smile correction',
      'Excessive sweating (hyperhidrosis)',
    ],
    color: 'from-blue-50 to-indigo-50',
    accent: 'text-blue-600',
    border: 'border-blue-100',
  },
  {
    id: 'korean-facials',
    emoji: '🌿',
    title: 'Korean Facials',
    tagline: 'Glass Skin. K-Beauty Ritual.',
    description:
      'Inspired by the multi-step K-beauty philosophy, our signature Korean facials combine deep cleansing, essence layering, sheet masking, and targeted serums to deliver intense hydration, luminosity, and a coveted glass-skin effect. Perfect for all skin types and a true sensory indulgence.',
    benefits: [
      'Deep hydration with hyaluronic acid serums',
      'Brightening and tone-evening',
      'Pore cleansing and minimizing',
      'Anti-aging peptide infusion',
      'Glass skin glow finish',
    ],
    color: 'from-green-50 to-emerald-50',
    accent: 'text-green-700',
    border: 'border-green-100',
  },
  {
    id: 'chemical-peels',
    emoji: '🍋',
    title: 'Chemical Peels',
    tagline: 'Resurface. Renew. Reveal.',
    description:
      'Chemical peels use carefully selected acids to exfoliate damaged outer layers of skin, stimulating cell turnover and revealing fresh, healthy skin beneath. From gentle lunchtime peels to deeper resurfacing treatments, we customize the peel strength and formula to your specific skin goals.',
    benefits: [
      'Reduces fine lines and wrinkles',
      'Fades dark spots and hyperpigmentation',
      'Minimizes acne scarring',
      'Smooths skin texture',
      'Enhances absorption of skincare products',
    ],
    color: 'from-yellow-50 to-amber-50',
    accent: 'text-amber-700',
    border: 'border-amber-100',
  },
  {
    id: 'massages',
    emoji: '🪷',
    title: 'Therapeutic Massages',
    tagline: 'Relax. Restore. Recharge.',
    description:
      'Our skilled therapists offer a range of massage modalities — from deep tissue and Swedish to lymphatic drainage and hot stone — to relieve tension, improve circulation, reduce inflammation, and promote total body wellness. The perfect complement to any aesthetic treatment.',
    benefits: [
      'Swedish & deep tissue massage',
      'Lymphatic drainage for detox & contouring',
      'Hot stone therapy',
      'Sports recovery massage',
      'Pre & post-treatment relaxation',
    ],
    color: 'from-orange-50 to-rose-50',
    accent: 'text-orange-700',
    border: 'border-orange-100',
  },
]

export default function Services() {
  return (
    <>
      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gold-400 text-xs font-bold tracking-[0.3em] uppercase mb-4">
            Our Treatments
          </p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-5">
            Services
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Medically advanced, luxury aesthetic treatments designed to transform
            how you look and feel — inside and out.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto space-y-10">
          {services.map((svc, idx) => (
            <div
              key={svc.id}
              id={svc.id}
              className={`rounded-3xl border ${svc.border} bg-gradient-to-br ${svc.color} overflow-hidden`}
            >
              <div className={`grid grid-cols-1 lg:grid-cols-2 ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="p-10 lg:p-14">
                  <div className="text-5xl mb-5">{svc.emoji}</div>
                  <p className={`text-xs font-bold tracking-[0.2em] uppercase mb-2 ${svc.accent}`}>
                    {svc.tagline}
                  </p>
                  <h2 className="font-serif text-3xl font-bold text-gray-900 mb-4">
                    {svc.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-8">{svc.description}</p>
                  <Link
                    to="/book"
                    className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-white font-semibold px-6 py-3 rounded-full transition-colors text-sm shadow-sm"
                  >
                    Book This Treatment <ArrowRight size={15} />
                  </Link>
                </div>
                <div className="p-10 lg:p-14 lg:border-l border-white/60">
                  <h4 className="font-semibold text-gray-800 mb-5 text-sm uppercase tracking-wider">
                    What's Included
                  </h4>
                  <ul className="space-y-3">
                    {svc.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-3">
                        <CheckCircle size={17} className={`mt-0.5 flex-shrink-0 ${svc.accent}`} />
                        <span className="text-gray-700 text-sm">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-gold-500 to-gold-600 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl font-bold mb-4">
            Not Sure Where to Start?
          </h2>
          <p className="text-gold-100 text-base mb-8 leading-relaxed">
            Book a complimentary consultation and our specialists will design a
            personalized treatment plan just for you.
          </p>
          <Link
            to="/book"
            className="inline-flex items-center gap-2 bg-white text-gold-600 hover:bg-gold-50 font-semibold px-10 py-4 rounded-full transition-colors shadow-lg text-base"
          >
            Get Your Free Consultation <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  )
}
