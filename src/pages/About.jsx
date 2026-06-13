import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import HeroPhoto from '../components/HeroPhoto'
import FAQ from '../components/FAQ'

const team = [
  {
    name: 'Dr. Gavin Ajami, MD',
    role: 'Medical Director & Lead Aesthetician',
    bio: 'Board-certified in Internal Medicine with over 12 years of aesthetic medicine experience. Dr. Ajami is renowned for his natural, patient-first approach to injectables and skin rejuvenation.',
    credentials: ['MD, University of Miami', 'Board Certified — Internal Medicine', '12+ Years Aesthetic Medicine'],
  },
  {
    name: 'Dr. James Okonkwo, MD',
    role: 'Medical Weight Loss Specialist',
    bio: 'Board-certified in Obesity Medicine, Dr. Okonkwo leads our medical weight loss and metabolic health programs. He combines evidence-based medicine with compassionate, personalized care.',
    credentials: ['MD, FACP', 'Board Certified — Obesity Medicine', 'Diplomate, American Board of Internal Medicine'],
  },
  {
    name: 'Sofia Reyes, LE',
    role: 'Lead Nurse',
    bio: 'A licensed esthetician with specialized training in K-beauty protocols, chemical peels, and skin analysis. Sofia brings a holistic, skin-health-first philosophy to every facial treatment.',
    credentials: ['Licensed Esthetician', 'K-Beauty Certified Specialist', 'Chemical Peel Advanced Certification'],
  },
  {
    name: 'Marcus Chen, RN, CANS',
    role: 'Senior Nurse Injector',
    bio: 'A certified aesthetic nurse specialist with a background in plastic surgery. Marcus specializes in neurotoxin placement, dermal fillers, and body contouring with a meticulous eye for symmetry.',
    credentials: ['RN, BSN', 'CANS Certified', 'Allergan & Galderma Certified Trainer'],
  },
  {
    name: 'Alyne',
    role: 'Medical Assistant',
    bio: 'Alyne supports our clinical team with warmth and precision, ensuring every client feels comfortable and cared for throughout their visit.',
    credentials: ['Medical Assistant Certified'],
  },
  {
    name: 'Stefania',
    role: 'Massage Therapist',
    bio: 'Stefania specializes in therapeutic and body contouring massage techniques, including lymphatic drainage and post-operative care protocols.',
    credentials: ['Licensed Massage Therapist', 'Lymphatic Drainage Certified'],
  },
]

const loungeAmenities = [
  {
    title: 'Complimentary Snacks & Beverages',
    desc: 'Sip on herbal teas, infused water, and light refreshments before and after your session. We want every visit to feel like a full retreat.',
  },
  {
    title: 'Plush Robes & Slippers',
    desc: 'Slip into a soft robe and slippers the moment you arrive. Comfort is not a perk here — it is the standard.',
  },
  {
    title: 'Lush Greenery & Candlelight',
    desc: 'Our lounge is filled with living plants, warm ambient lighting, and softly scented candles — designed to slow your pace and quiet your mind.',
  },
  {
    title: 'Peaceful Seating & Couches',
    desc: 'Sink into deep, cushioned couches surrounded by natural textures. Stay as long as you like — before your treatment, after it, or simply because you need a moment.',
  },
]

const faqItems = [
  {
    q: 'Is Advanced Med a medical spa or a regular spa?',
    a: 'Advanced Med is a full-service medical spa (medspa), meaning our treatments are supervised by licensed medical professionals including board-certified physicians and registered nurses. We offer both clinical medical services — such as injectables, medical weight loss, and IV therapy — and luxury wellness experiences like facials, massages, and body treatments, all under one roof.',
  },
  {
    q: 'Do I need a referral to book an appointment?',
    a: 'No referral is needed. You are welcome to book directly through our website, by phone, or by walking in. For certain medical services such as peptide therapy, GLP-1 evaluations, or comprehensive blood panels, an initial evaluation with one of our providers is required before treatment begins.',
  },
  {
    q: 'Are your providers licensed and certified?',
    a: 'Absolutely. Every provider at Advanced Med holds active, current licensure in their respective field. Our medical staff includes board-certified physicians and registered nurses, and our estheticians are licensed and hold advanced certifications in their specialty areas. All credentials are available upon request.',
  },
  {
    q: 'Do you offer payment plans or financing?',
    a: 'Yes — we offer flexible financing options through third-party partners, allowing you to spread the cost of treatments over time. We also offer our membership plans as an affordable way to receive consistent care at a reduced monthly rate. Ask our team about current financing availability at your evaluation.',
  },
  {
    q: 'What should I expect at my first visit?',
    a: 'Your first visit begins with a detailed evaluation — we take time to understand your goals, review your health history, and assess your skin or body concern before recommending any treatment. There is never pressure to book on the spot. We want you to feel informed, comfortable, and genuinely excited about your plan before moving forward.',
  },
]

export default function About() {
  return (
    <>
      <HeroPhoto
        eyebrow="Advanced Med MedSpa Lounge"
        title={<>Welcome<br />to the Lounge.</>}
        subtitle="The perfect waiting room of relaxation."
        gradient="from-espresso-800 via-espresso-700 to-spa-800"
        gradientDir="to-r"
        radialPos="center"
      />

      {/* ── WELCOME TO THE LOUNGE ── */}
      <section className="py-20 px-5 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">

          {/* Two-column: photo + description */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">

            {/* Lounge photo placeholder — replace with real photography */}
            <div className="relative">
              <div
                className="w-full bg-cream-200 relative overflow-hidden"
                style={{ aspectRatio: '4/5' }}
              >
                {/*
                  Replace this block with:
                  <img src="/images/lounge.jpg" alt="Advanced Med MedSpa Lounge" className="w-full h-full object-cover" />
                */}
                <div className="absolute inset-0 bg-cream-200" />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                  <p className="font-serif text-2xl font-light text-espresso-400 italic">Coming Soon</p>
                </div>
              </div>
            </div>

            {/* Lounge copy */}
            <div className="pt-4">
              <div className="mb-10">
                <p className="text-spa text-[10px] font-medium uppercase mb-4" style={{ letterSpacing: '0.28em' }}>
                  The Lounge Experience
                </p>
                <p className="text-espresso-500 text-[14px] font-light leading-relaxed">
                  Your time here does not begin and end with your treatment. At Advanced Med, the
                  experience starts the moment you walk through our doors — and we have designed
                  every detail of our lounge to make sure that moment feels like an exhale.
                </p>
              </div>

              {/* Amenities list */}
              <div className="space-y-5">
                {loungeAmenities.map((a) => (
                  <div key={a.title} className="flex items-start gap-4 border-b border-cream-300 pb-5 last:border-0 last:pb-0">
                    <div className="w-1 h-full flex-shrink-0 pt-1">
                      <div className="w-1 h-8 bg-spa" />
                    </div>
                    <div>
                      <h4 className="font-serif text-[16px] font-light text-espresso mb-1">{a.title}</h4>
                      <p className="text-espresso-500 text-[12px] font-light leading-relaxed">{a.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Second lounge photo — wide panoramic placeholder */}
          <div
            className="w-full bg-cream-200 relative overflow-hidden flex items-center justify-center"
            style={{ aspectRatio: '21/9' }}
          >
            <p className="font-serif text-2xl font-light text-espresso-400 italic">Coming Soon</p>
          </div>

        </div>
      </section>

      {/* ── MEET THE TEAM ── */}
      <section className="py-20 px-5 sm:px-8 lg:px-12 bg-espresso">
        <div className="max-w-7xl mx-auto">

          {/* Stats bar */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-espresso-500 mb-16">
            {[
              { value: '5,000+', label: 'Clients Served' },
              { value: '6+',     label: 'Years in Practice' },
              { value: '25+',    label: 'Treatments Offered' },
              { value: '4.9',    label: 'Average Rating' },
            ].map((s) => (
              <div key={s.label} className="bg-espresso py-10 px-8 text-center">
                <div className="font-serif text-4xl font-light text-cream-200">{s.value}</div>
                <div className="text-[10px] tracking-widest uppercase text-spa-300 mt-2 font-light">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Team header */}
          <div className="mb-12">
            <p className="text-spa-300 text-[10px] font-medium uppercase mb-4" style={{ letterSpacing: '0.28em' }}>
              The Experts Behind Your Results
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-cream-200 leading-tight">
              Meet Our Team
            </h2>
            <p className="text-cream-400 text-[13px] font-light mt-4 max-w-xl leading-relaxed">
              Board-certified, compassionate, and relentlessly dedicated to your transformation.
            </p>
          </div>

          {/* Team grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {team.map((member) => (
              <div
                key={member.name}
                className="border border-espresso-500 p-8 hover:border-spa transition-colors group"
              >
                <div className="flex gap-5 items-start">
                  {/* Monogram avatar */}
                  <div className="w-14 h-14 bg-spa flex-shrink-0 flex items-center justify-center">
                    <span className="font-serif text-white text-xl font-light">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-xl font-light text-cream-200 group-hover:text-spa transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-spa-300 text-[11px] tracking-wide uppercase font-medium mb-4 mt-1">
                      {member.role}
                    </p>
                    <p className="text-cream-400 text-[12px] font-light leading-relaxed mb-5">
                      {member.bio}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {member.credentials.map((c) => (
                        <span
                          key={c}
                          className="border border-espresso-500 text-cream-500 text-[10px] px-3 py-1 font-light tracking-wide"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-5 sm:px-8 lg:px-12 bg-cream-200 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-spa text-[10px] font-medium uppercase mb-5" style={{ letterSpacing: '0.28em' }}>
            Come See Us
          </p>
          <h2 className="font-serif text-4xl font-light text-espresso mb-6">
            Experience the Lounge for Yourself
          </h2>
          <p className="text-espresso-500 text-[13px] font-light leading-relaxed mb-8">
            Book your first appointment and discover what it feels like when medical
            expertise meets genuine luxury care.
          </p>
          <Link
            to="/book"
            className="inline-flex items-center gap-3 bg-spa hover:bg-spa-600 text-cream-100 text-[10px] tracking-widest uppercase px-10 py-4 transition-colors"
          >
            Book Your Visit <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      <FAQ items={faqItems} />
    </>
  )
}
