import { Link } from 'react-router-dom'
import { ArrowRight, Heart, Sparkles, ShieldCheck, Award } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'
import HeroPhoto from '../components/HeroPhoto'
import FAQ from '../components/FAQ'

const team = [
  {
    name: 'Dr. Elena Rivera, MD',
    role: 'Medical Director & Lead Aesthetician',
    bio: 'Board-certified in Internal Medicine with over 12 years of aesthetic medicine experience. Dr. Rivera is renowned for her natural, patient-first approach to injectables and skin rejuvenation.',
    credentials: ['MD, University of Miami', 'Board Certified — Internal Medicine', '12+ Years Aesthetic Medicine'],
  },
  {
    name: 'Marcus Chen, RN, CANS',
    role: 'Senior Nurse Injector',
    bio: 'A certified aesthetic nurse specialist with a background in plastic surgery. Marcus specializes in neurotoxin placement, dermal fillers, and body contouring with a meticulous eye for symmetry.',
    credentials: ['RN, BSN', 'CANS Certified', 'Allergan & Galderma Certified Trainer'],
  },
  {
    name: 'Sofia Reyes, LE',
    role: 'Lead Medical Esthetician',
    bio: 'A licensed esthetician with specialized training in K-beauty protocols, chemical peels, and skin analysis. Sofia brings a holistic, skin-health-first philosophy to every facial treatment.',
    credentials: ['Licensed Esthetician', 'K-Beauty Certified Specialist', 'Chemical Peel Advanced Certification'],
  },
  {
    name: 'Dr. James Okonkwo, MD',
    role: 'Medical Weight Loss Specialist',
    bio: 'Board-certified in Obesity Medicine, Dr. Okonkwo leads our medical weight loss and metabolic health programs. He combines evidence-based medicine with compassionate, personalized care.',
    credentials: ['MD, FACP', 'Board Certified — Obesity Medicine', 'Diplomate, American Board of Internal Medicine'],
  },
]

const values = [
  {
    icon: <Heart className="text-spa" size={28} />,
    title: 'Client-First Care',
    desc: 'Every decision we make starts with your wellbeing, comfort, and goals. You are more than a treatment — you are our partner.',
  },
  {
    icon: <ShieldCheck className="text-spa" size={28} />,
    title: 'Medical Excellence',
    desc: 'We adhere to the highest standards of medical practice, ensuring every treatment is safe, evidence-based, and expertly delivered.',
  },
  {
    icon: <Sparkles className="text-spa" size={28} />,
    title: 'Natural Aesthetics',
    desc: 'Our philosophy is to enhance your natural beauty — not alter it. We aim for results that feel like a better version of you.',
  },
  {
    icon: <Award className="text-spa" size={28} />,
    title: 'Continuous Learning',
    desc: 'Our team trains with the world\'s leading aesthetic experts and stays current on the latest advances in aesthetic medicine.',
  },
]

const faqItems = [
  {
    q: 'Is Advanced Med a medical spa or a regular spa?',
    a: 'Advanced Med is a full-service medical spa (medspa), meaning our treatments are supervised by licensed medical professionals including board-certified physicians and registered nurses. We offer both clinical medical services — such as injectables, medical weight loss, and IV therapy — and luxury wellness experiences like facials, massages, and body treatments, all under one roof.',
  },
  {
    q: 'Do I need a referral to book an appointment?',
    a: 'No referral is needed. You are welcome to book directly through our website, by phone, or by walking in. For certain medical services such as peptide therapy, GLP-1 consultations, or comprehensive blood panels, an initial consultation with one of our providers is required before treatment begins.',
  },
  {
    q: 'Are your providers licensed and certified?',
    a: 'Absolutely. Every provider at Advanced Med holds active, current licensure in their respective field. Our medical staff includes board-certified physicians and registered nurses, and our estheticians are licensed and hold advanced certifications in their specialty areas. All credentials are available upon request.',
  },
  {
    q: 'Do you offer payment plans or financing?',
    a: 'Yes — we offer flexible financing options through third-party partners, allowing you to spread the cost of treatments over time. We also offer our membership plans as an affordable way to receive consistent care at a reduced monthly rate. Ask our team about current financing availability at your consultation.',
  },
  {
    q: 'What should I expect at my first visit?',
    a: 'Your first visit begins with a detailed consultation — we take time to understand your goals, review your health history, and assess your skin or body concern before recommending any treatment. There is never pressure to book on the spot. We want you to feel informed, comfortable, and genuinely excited about your plan before moving forward.',
  },
]

export default function About() {
  return (
    <>
      <HeroPhoto
        eyebrow="Our Story"
        title={"About\nAdvanced Med"}
        subtitle="Where medical precision meets genuine, heartfelt care for every client who walks through our doors."
        gradient="from-espresso-800 via-espresso-700 to-spa-800"
      />

      {/* Story */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-spa text-[10px] font-medium tracking-widest uppercase mb-4">
                How We Started
              </p>
              <h2 className="font-serif text-4xl font-bold text-espresso mb-6 leading-tight">
                Born from a Passion for<br />Transformative Care
              </h2>
              <div className="space-y-5 text-espresso-500 leading-relaxed">
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
                { value: '5,000+', label: 'Clients Served' },
                { value: '10+', label: 'Years in Practice' },
                { value: '15+', label: 'Treatments Offered' },
                { value: '4.9', label: 'Average Rating' },
              ].map((s) => (
                <div key={s.label} className="bg-cream-100 rounded-2xl p-6 text-center border border-cream-300">
                  <div className="font-serif text-3xl font-bold text-espresso">{s.value}</div>
                  <div className="text-sm text-espresso-500 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-cream-100">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="What Drives Us"
            title="Our Core Values"
            subtitle="These values guide every interaction, every treatment, and every decision we make."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-8 border border-cream-300 shadow-sm text-center">
                <div className="flex justify-center mb-4">{v.icon}</div>
                <h3 className="font-semibold text-espresso text-base mb-3">{v.title}</h3>
                <p className="text-espresso-500 text-sm leading-relaxed">{v.desc}</p>
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
              <div key={member.name} className="flex gap-6 p-8 rounded-2xl border border-cream-300 bg-cream-100 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 rounded-full bg-espresso flex-shrink-0 flex items-center justify-center">
                  <span className="font-serif text-cream-100 text-xl font-bold">{member.name.charAt(0)}</span>
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-espresso">{member.name}</h3>
                  <p className="text-spa text-sm font-semibold mb-3">{member.role}</p>
                  <p className="text-espresso-500 text-sm leading-relaxed mb-4">{member.bio}</p>
                  <div className="flex flex-wrap gap-2">
                    {member.credentials.map((c) => (
                      <span key={c} className="bg-cream-200 text-espresso-600 text-xs px-3 py-1 font-medium border border-cream-300">
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

      {/* Clinic Environment */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-cream-200">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeader
            eyebrow="The Experience"
            title="A Sanctuary for Your Transformation"
            subtitle="From the moment you step inside, you'll feel the difference. Our spa is designed to be your escape — serene, immaculate, and entirely focused on you."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { label: 'Private Treatment Suites' },
              { label: 'Spa-Grade Ambiance' },
              { label: 'Complimentary Refreshments' },
            ].map((item) => (
              <div key={item.label} className="bg-white rounded-2xl p-8 border border-cream-300 text-center shadow-sm">
                <p className="font-medium text-espresso text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ items={faqItems} />

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-cream-200 text-center border-t border-cream-300">
        <div className="max-w-2xl mx-auto">
          <Link
            to="/book"
            className="inline-flex items-center gap-2 bg-espresso hover:bg-espresso-600 text-cream-100 text-[10px] tracking-widest uppercase px-10 py-4 transition-colors"
          >
            Experience It for Yourself <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  )
}
