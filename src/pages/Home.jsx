import { Link } from 'react-router-dom'
import { ArrowRight, Star, ShieldCheck, Sparkles, Award, Users, Clock } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'

const services = [
  {
    icon: '⚖️',
    title: 'Weight Loss',
    desc: 'Medical weight management programs with proven results using advanced treatments and professional guidance.',
    href: '/services#weight-loss',
  },
  {
    icon: '✨',
    title: 'Body Contouring',
    desc: 'Non-surgical body sculpting to target stubborn fat and reshape your silhouette without downtime.',
    href: '/services#body-contouring',
  },
  {
    icon: '🌸',
    title: 'Skin Tightening',
    desc: 'Restore firmness and elasticity with cutting-edge radiofrequency and ultrasound technologies.',
    href: '/services#skin-tightening',
  },
  {
    icon: '💉',
    title: 'Botox',
    desc: 'Expertly administered Botox treatments to smooth fine lines and prevent new wrinkles from forming.',
    href: '/services#botox',
  },
  {
    icon: '🌿',
    title: 'Korean Facials',
    desc: 'Multi-step K-beauty inspired facials for deep hydration, brightening, and a glass-skin glow.',
    href: '/services#korean-facials',
  },
  {
    icon: '🍋',
    title: 'Chemical Peels',
    desc: 'Customized chemical peels that exfoliate, resurface, and reveal smoother, more radiant skin.',
    href: '/services#chemical-peels',
  },
]

const stats = [
  { icon: <Users size={28} />, value: '5,000+', label: 'Happy Clients' },
  { icon: <Award size={28} />, value: '10+', label: 'Years Experience' },
  { icon: <ShieldCheck size={28} />, value: '100%', label: 'Board Certified' },
  { icon: <Clock size={28} />, value: '15+', label: 'Treatments Offered' },
]

const testimonials = [
  {
    name: 'Maria L.',
    rating: 5,
    text: 'Absolutely love this place! My Korean facial left my skin glowing for weeks. The staff is so professional and caring.',
  },
  {
    name: 'Jessica R.',
    rating: 5,
    text: 'I lost 20 pounds with their weight loss program. The team keeps you motivated and the results are incredible.',
  },
  {
    name: 'Sofia M.',
    rating: 5,
    text: 'Best Botox I have ever had — so natural looking. Dr. Rivera has a true gift for aesthetics. Highly recommend!',
  },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-rose-50 via-white to-amber-50 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-20 w-72 h-72 bg-gold-100 rounded-full blur-3xl opacity-50" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-rose-100 rounded-full blur-3xl opacity-40" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <p className="text-gold-500 text-xs font-bold tracking-[0.3em] uppercase mb-5">
              Luxury Medical Aesthetics
            </p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.1] mb-6">
              Reveal Your
              <span className="text-gold-500 block">Most Radiant</span>
              Self
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed mb-10 max-w-xl">
              Advanced Med MedSpa Lounge blends medical expertise with luxury
              care — offering transformative treatments in a serene, welcoming
              environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/book"
                className="inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-600 text-white font-semibold px-8 py-4 rounded-full transition-colors shadow-lg shadow-gold-200 text-base"
              >
                Book Your Consultation
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 border-2 border-gray-300 hover:border-gold-400 text-gray-700 hover:text-gold-600 font-semibold px-8 py-4 rounded-full transition-colors text-base"
              >
                Explore Services
              </Link>
            </div>
            <div className="flex items-center gap-2 mt-8">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={16} className="text-gold-400 fill-gold-400" />
                ))}
              </div>
              <span className="text-sm text-gray-500">
                5.0 · Over 500 five-star reviews
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gray-900 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center text-white">
                <div className="flex justify-center mb-3 text-gold-400">{s.icon}</div>
                <div className="text-3xl font-bold font-serif">{s.value}</div>
                <div className="text-sm text-gray-400 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="What We Offer"
            title="Treatments Designed for You"
            subtitle="From medical weight loss to luxury skincare, every treatment at Advanced Med is personalized for your unique goals."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc) => (
              <Link
                key={svc.title}
                to={svc.href}
                className="group p-7 rounded-2xl border border-gray-100 hover:border-gold-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white"
              >
                <div className="text-4xl mb-4">{svc.icon}</div>
                <h3 className="font-serif text-lg font-bold text-gray-900 mb-2 group-hover:text-gold-600 transition-colors">
                  {svc.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{svc.desc}</p>
                <div className="mt-4 flex items-center gap-1 text-gold-500 text-sm font-semibold">
                  Learn more <ArrowRight size={14} />
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 border-2 border-gold-400 text-gold-600 hover:bg-gold-500 hover:text-white font-semibold px-8 py-3 rounded-full transition-colors"
            >
              View All Services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-rose-50 to-amber-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader
                eyebrow="Why Advanced Med"
                title="The Gold Standard in Medical Aesthetics"
                center={false}
              />
              <div className="space-y-6">
                {[
                  {
                    icon: <ShieldCheck className="text-gold-500" size={22} />,
                    title: 'Board-Certified Professionals',
                    desc: 'Every treatment is administered or supervised by licensed medical professionals with years of specialized training.',
                  },
                  {
                    icon: <Sparkles className="text-gold-500" size={22} />,
                    title: 'Personalized Treatment Plans',
                    desc: 'We create customized protocols based on your unique skin type, health goals, and aesthetic vision.',
                  },
                  {
                    icon: <Award className="text-gold-500" size={22} />,
                    title: 'FDA-Approved Technologies',
                    desc: 'We invest in the latest, FDA-cleared equipment and products to deliver safe, effective results.',
                  },
                  {
                    icon: <Star className="text-gold-500" size={22} />,
                    title: 'Luxury Spa Experience',
                    desc: 'Our serene, upscale environment ensures you feel pampered and relaxed from the moment you arrive.',
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="mt-0.5 flex-shrink-0">{item.icon}</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-gold-100 to-rose-100 rounded-3xl p-10 text-center">
                <div className="text-6xl mb-6">🌸</div>
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-3">
                  Your Journey Starts Here
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Schedule a complimentary consultation with one of our aesthetic
                  specialists and discover the perfect treatment plan for you.
                </p>
                <Link
                  to="/book"
                  className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-white font-semibold px-7 py-3 rounded-full transition-colors"
                >
                  Free Consultation <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skin Concerns Teaser */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="Skin Concerns"
            title="We Treat What Bothers You Most"
            subtitle="Whether it's acne, signs of aging, or uneven skin tone — we have clinically proven solutions."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                emoji: '🔴',
                title: 'Acne & Breakouts',
                desc: 'From hormonal acne to cystic breakouts, our targeted treatments clear skin and prevent future flare-ups.',
                color: 'bg-red-50 border-red-100',
              },
              {
                emoji: '⏳',
                title: 'Aging & Wrinkles',
                desc: 'Reverse the clock with advanced anti-aging treatments that restore volume, lift, and smooth fine lines.',
                color: 'bg-amber-50 border-amber-100',
              },
              {
                emoji: '🌟',
                title: 'Discoloration & Dark Spots',
                desc: 'Fade hyperpigmentation, sun spots, and melasma with our brightening and resurfacing protocols.',
                color: 'bg-yellow-50 border-yellow-100',
              },
            ].map((c) => (
              <div key={c.title} className={`rounded-2xl border p-8 ${c.color}`}>
                <div className="text-4xl mb-4">{c.emoji}</div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-3">{c.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">{c.desc}</p>
                <Link
                  to="/skin-concerns"
                  className="text-gold-600 text-sm font-semibold hover:underline flex items-center gap-1"
                >
                  Explore Solutions <ArrowRight size={13} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="Client Love"
            title="Real Results, Real Stories"
            subtitle="Hear from the clients who trust us with their most important asset — their confidence."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="flex mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={15} className="text-gold-400 fill-gold-400" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-5 italic">
                  "{t.text}"
                </p>
                <p className="font-semibold text-gray-900 text-sm">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-900 to-gray-800 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-gold-400 text-xs font-bold tracking-[0.3em] uppercase mb-4">
            Limited Availability
          </p>
          <h2 className="font-serif text-4xl font-bold mb-5">
            Ready to Start Your Transformation?
          </h2>
          <p className="text-gray-300 text-base mb-8 leading-relaxed">
            Book your complimentary consultation today and take the first step toward
            the confident, radiant you.
          </p>
          <Link
            to="/book"
            className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-white font-semibold px-10 py-4 rounded-full transition-colors shadow-lg text-base"
          >
            Schedule Now <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  )
}
