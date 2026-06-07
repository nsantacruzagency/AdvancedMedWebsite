import { Link } from 'react-router-dom'
import { ArrowRight, Heart, Sparkles, ShieldCheck, Award } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'

const team = [
  {
    name: 'Dr. Elena Rivera, MD',
    role: 'Medical Director & Lead Aesthetician',
    bio: 'Board-certified in Internal Medicine with over 12 years of aesthetic medicine experience. Dr. Rivera is renowned for her natural, patient-first approach to injectables and skin rejuvenation.',
    emoji: '👩‍⚕️',
    credentials: ['MD, University of Miami', 'Board Certified — Internal Medicine', '12+ Years Aesthetic Medicine'],
  },
  {
    name: 'Marcus Chen, RN, CANS',
    role: 'Senior Nurse Injector',
    bio: 'A certified aesthetic nurse specialist with a background in plastic surgery. Marcus specializes in neurotoxin placement, dermal fillers, and body contouring with a meticulous eye for symmetry.',
    emoji: '👨‍⚕️',
    credentials: ['RN, BSN', 'CANS Certified', 'Allergan & Galderma Certified Trainer'],
  },
  {
    name: 'Sofia Reyes, LE',
    role: 'Lead Medical Esthetician',
    bio: 'A licensed esthetician with specialized training in K-beauty protocols, chemical peels, and skin analysis. Sofia brings a holistic, skin-health-first philosophy to every facial treatment.',
    emoji: '👩‍💼',
    credentials: ['Licensed Esthetician', 'K-Beauty Certified Specialist', 'Chemical Peel Advanced Certification'],
  },
  {
    name: 'Dr. James Okonkwo, MD',
    role: 'Medical Weight Loss Specialist',
    bio: 'Board-certified in Obesity Medicine, Dr. Okonkwo leads our medical weight loss and metabolic health programs. He combines evidence-based medicine with compassionate, personalized care.',
    emoji: '👨‍⚕️',
    credentials: ['MD, FACP', 'Board Certified — Obesity Medicine', 'Diplomate, American Board of Internal Medicine'],
  },
]

const values = [
  {
    icon: <Heart className="text-gold-500" size={28} />,
    title: 'Client-First Care',
    desc: 'Every decision we make starts with your wellbeing, comfort, and goals. You are more than a treatment — you are our partner.',
  },
  {
    icon: <ShieldCheck className="text-gold-500" size={28} />,
    title: 'Medical Excellence',
    desc: 'We adhere to the highest standards of medical practice, ensuring every treatment is safe, evidence-based, and expertly delivered.',
  },
  {
    icon: <Sparkles className="text-gold-500" size={28} />,
    title: 'Natural Aesthetics',
    desc: 'Our philosophy is to enhance your natural beauty — not alter it. We aim for results that feel like a better version of you.',
  },
  {
    icon: <Award className="text-gold-500" size={28} />,
    title: 'Continuous Learning',
    desc: 'Our team trains with the world\'s leading aesthetic experts and stays current on the latest advances in aesthetic medicine.',
  },
]

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gold-400 text-xs font-bold tracking-[0.3em] uppercase mb-4">
            Our Story
          </p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-5">About Us</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            More than a medspa — a place where medical precision meets genuine,
            heartfelt care for every client who walks through our doors.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-gold-500 text-xs font-bold tracking-[0.3em] uppercase mb-4">
                How We Started
              </p>
              <h2 className="font-serif text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Born from a Passion for<br />Transformative Care
              </h2>
              <div className="space-y-5 text-gray-600 leading-relaxed">
                <p>
                  Advanced Med MedSpa Lounge was founded by Dr. Elena Rivera in 2014
                  with a singular vision: to create a medical aesthetic practice where
                  clinical expertise and genuine human connection are equally valued.
                </p>
                <p>
                  After years of witnessing how aesthetic treatments could restore not
                  just appearance but confidence and quality of life, Dr. Rivera built
                  a team of like-minded professionals dedicated to delivering
                  life-changing results in a warm, luxurious environment.
                </p>
                <p>
                  Today, Advanced Med serves thousands of clients across South Florida,
                  offering a comprehensive menu of medical weight loss, body contouring,
                  injectables, and advanced skincare treatments — all under one roof.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '5,000+', label: 'Clients Served', emoji: '👥' },
                { value: '10+', label: 'Years in Practice', emoji: '🏆' },
                { value: '15+', label: 'Treatments Offered', emoji: '💎' },
                { value: '4.9★', label: 'Average Rating', emoji: '⭐' },
              ].map((s) => (
                <div key={s.label} className="bg-gradient-to-br from-rose-50 to-amber-50 rounded-2xl p-6 text-center border border-gold-100">
                  <div className="text-3xl mb-2">{s.emoji}</div>
                  <div className="font-serif text-3xl font-bold text-gray-900">{s.value}</div>
                  <div className="text-sm text-gray-500 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="What Drives Us"
            title="Our Core Values"
            subtitle="These values guide every interaction, every treatment, and every decision we make."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm text-center">
                <div className="flex justify-center mb-4">{v.icon}</div>
                <h3 className="font-semibold text-gray-900 text-base mb-3">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="The Experts Behind Your Results"
            title="Meet Our Team"
            subtitle="Board-certified, compassionate, and relentlessly dedicated to your transformation."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((member) => (
              <div key={member.name} className="flex gap-6 p-8 rounded-2xl border border-gray-100 bg-gradient-to-br from-white to-gray-50 hover:shadow-md transition-shadow">
                <div className="text-5xl flex-shrink-0">{member.emoji}</div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-gray-900">{member.name}</h3>
                  <p className="text-gold-500 text-sm font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{member.bio}</p>
                  <div className="flex flex-wrap gap-2">
                    {member.credentials.map((c) => (
                      <span key={c} className="bg-gold-50 text-gold-700 text-xs px-3 py-1 rounded-full font-medium border border-gold-100">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinic Tour / Environment */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-rose-50 to-amber-50">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeader
            eyebrow="The Experience"
            title="A Sanctuary for Your Transformation"
            subtitle="From the moment you step inside, you'll feel the difference. Our spa is designed to be your escape — serene, immaculate, and entirely focused on you."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { emoji: '🛁', label: 'Private Treatment Suites' },
              { emoji: '🌿', label: 'Spa-Grade Ambiance' },
              { emoji: '☕', label: 'Complimentary Refreshments' },
            ].map((item) => (
              <div key={item.label} className="bg-white rounded-2xl p-8 border border-gold-100 text-center shadow-sm">
                <div className="text-4xl mb-3">{item.emoji}</div>
                <p className="font-medium text-gray-800 text-sm">{item.label}</p>
              </div>
            ))}
          </div>
          <Link
            to="/book"
            className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-white font-semibold px-10 py-4 rounded-full transition-colors shadow-lg text-base"
          >
            Experience It for Yourself <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  )
}
