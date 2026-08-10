import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'

const treatments = [
  {
    title: 'Non-Surgical Lipo',
    subtitle: 'Fat Freezing · Detox · Metabolic Reset',
    path: '/non-surgical-lipo',
  },
  {
    title: 'Cellulite Treatment',
    subtitle: 'Body In Shape · RF · EMS',
    path: '/cellulite-treatment',
  },
  {
    title: 'Lymphatic Drainage Massage',
    subtitle: 'Brazilian 3-in-1 · Sculpting · Drainage',
    path: '/body-contouring-massages',
  },
  {
    title: 'Lipedema',
    subtitle: 'LymphON Protocol · MLD · Compression',
    path: '/lipedema',
  },
  {
    title: 'Brazilian Butt',
    subtitle: 'Non-Surgical BBL · Lifting · Contouring',
    path: '/brazilian-butt',
  },
  {
    title: 'Skin Concerns',
    subtitle: 'Acne · Aging · Hyperpigmentation',
    path: '/skin-concerns/acne',
  },
  {
    title: 'Post-Op Massages',
    subtitle: 'BBL · Tummy Tuck · Liposuction Recovery',
    path: '/post-op-massages',
  },
  {
    title: 'Peptides + GLPs',
    subtitle: 'Medical Weight Management',
    path: '/peptides-glps',
  },
]

const skinConcerns = [
  { title: 'Acne & Breakouts',               path: '/skin-concerns/acne' },
  { title: 'Aging & Wrinkles',               path: '/skin-concerns/aging' },
  { title: 'Hyperpigmentation & Dark Spots', path: '/skin-concerns/hyperpigmentation' },
  { title: 'Stretch Marks & Scars',          path: '/skin-concerns/stretch-marks-scars' },
]

const testimonials = [
  {
    quote: 'The lymphatic drainage massages have completely transformed how my body feels. I notice less bloating and so much more energy after every session.',
    name: 'Maria L.',
    treatment: 'Brazilian Lymphatic Massage',
  },
  {
    quote: 'I lost 22 pounds on their medically supervised weight loss program. The team is genuinely invested in your success — it shows.',
    name: 'Jessica R.',
    treatment: 'Medical Weight Loss',
  },
  {
    quote: 'The skin tightening results exceeded my expectations. My skin looks firmer and I feel years younger. Truly professional care.',
    name: 'Sofia M.',
    treatment: 'Skin Tightening',
  },
]

const beforeAfterSlides = [
  { label: 'Body Contouring', before: 'from-espresso-600 to-spa-800', after: 'from-spa-700 to-espresso-500' },
  { label: 'Acne Treatment',  before: 'from-espresso-700 to-espresso-500', after: 'from-spa-600 to-spa-800' },
  { label: 'Hair Restoration', before: 'from-spa-800 to-espresso-600', after: 'from-espresso-500 to-spa-600' },
]

function BeforeAfterCarousel() {
  const [current, setCurrent] = useState(0)
  const total = beforeAfterSlides.length
  const slide = beforeAfterSlides[current]

  return (
    <div className="flex flex-col gap-4">
      {/* Photos */}
      <div className="grid grid-cols-2 gap-4">
        <div className="relative">
          <div className={`aspect-[3/4] bg-gradient-to-br ${slide.before} relative overflow-hidden`}>
            <div className="absolute inset-0 bg-espresso/20" />
            {/* swap for <img src={slide.beforeSrc} alt="Before" className="w-full h-full object-cover" /> */}
          </div>
          <span className="absolute bottom-3 left-3 text-[9px] font-medium tracking-widest uppercase text-cream-300 bg-espresso/60 px-2 py-1">Before</span>
        </div>
        <div className="relative mt-8">
          <div className={`aspect-[3/4] bg-gradient-to-br ${slide.after} relative overflow-hidden`}>
            <div className="absolute inset-0 bg-espresso/20" />
            {/* swap for <img src={slide.afterSrc} alt="After" className="w-full h-full object-cover" /> */}
          </div>
          <span className="absolute bottom-3 left-3 text-[9px] font-medium tracking-widest uppercase text-cream-300 bg-espresso/60 px-2 py-1">After</span>
        </div>
      </div>

      {/* Label + controls */}
      <div className="flex items-center justify-between px-1">
        <span className="text-[11px] font-medium tracking-widest uppercase text-spa-300">{slide.label}</span>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setCurrent((c) => (c - 1 + total) % total)}
            className="w-8 h-8 border border-espresso-500 flex items-center justify-center text-cream-400 hover:border-spa hover:text-spa transition-colors"
            aria-label="Previous"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M7.5 2L3.5 6L7.5 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          <span className="text-[10px] text-espresso-500 tabular-nums">{current + 1} / {total}</span>
          <button
            onClick={() => setCurrent((c) => (c + 1) % total)}
            className="w-8 h-8 border border-espresso-500 flex items-center justify-center text-cream-400 hover:border-spa hover:text-spa transition-colors"
            aria-label="Next"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M4.5 2L8.5 6L4.5 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>
      </div>

      {/* Dot indicators */}
      <div className="flex gap-2 px-1">
        {beforeAfterSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-px transition-all duration-300 ${i === current ? 'bg-spa w-8' : 'bg-espresso-500 w-4'}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────── */}
      <section className="relative bg-cream-200 min-h-[92vh] flex flex-col justify-center overflow-hidden">
        {/* Mobile background image with heavy cream overlay */}
        <div className="absolute inset-0 lg:hidden">
          <img
            src="/images/homepage-hero.jpeg"
            alt=""
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-cream-200/60" />
        </div>

        {/* Decorative side line */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-cream-400 opacity-60" />
        <div className="absolute right-0 top-0 bottom-0 w-px bg-cream-400 opacity-60" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — Text */}
          <div className="lg:bg-transparent lg:backdrop-blur-none lg:p-0 lg:rounded-none bg-cream-200/60 backdrop-blur-sm rounded-sm px-6 py-8 sm:px-8">
            <p className="text-[10px] font-medium tracking-widest uppercase text-spa mb-8" style={{ letterSpacing: '0.28em' }}>
              Advanced Med MedSpa Lounge
            </p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-espresso leading-[1.0] mb-8 [text-shadow:0_1px_12px_rgba(241,235,230,0.8)] lg:[text-shadow:none]">
              Where Beauty<br />
              <span className="italic text-spa">Meets</span> Wellness &amp; Longevity Science
            </h1>
            <p className="text-[14px] text-espresso-500 leading-relaxed font-light max-w-md mb-10">
              Medical aesthetic treatments and wellness therapies delivered with precision, compassion, and the luxury you deserve.
            </p>

            {/* Trust indicators — first on mobile, last on desktop */}
            <div className="flex items-center gap-8 mb-10 pb-10 border-b border-cream-400 lg:hidden">
              {[
                { value: '5,000+', label: 'Clients Served' },
                { value: '10+',    label: 'Years of Excellence' },
                { value: '100%',   label: 'Board Certified' },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-serif text-3xl font-light text-espresso">{s.value}</div>
                  <div className="text-[10px] tracking-widest uppercase text-espresso-400 mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://advancedmedspaofficial.janeapp.com/" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-spa text-cream-100 text-[10px] font-medium tracking-widest uppercase px-9 py-4 hover:bg-spa-600 transition-colors"
              >
                Book a Evaluation
                <ArrowRight size={13} />
              </a>
              <Link
                to="/non-invasive-weight-loss"
                className="inline-flex items-center justify-center gap-3 border border-espresso-300 text-espresso text-[10px] font-medium tracking-widest uppercase px-9 py-4 hover:border-espresso hover:bg-cream-300 transition-colors"
              >
                Explore Treatments
              </Link>
            </div>

            {/* Trust indicators — desktop only (after CTAs) */}
            <div className="hidden lg:flex items-center gap-8 mt-12 pt-10 border-t border-cream-400">
              {[
                { value: '5,000+', label: 'Clients Served' },
                { value: '10+',    label: 'Years of Excellence' },
                { value: '100%',   label: 'Board Certified' },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-serif text-3xl font-light text-espresso">{s.value}</div>
                  <div className="text-[10px] tracking-widest uppercase text-espresso-400 mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — hero image (desktop only) */}
          <div className="relative hidden lg:block">
            <div className="aspect-[3/4] bg-espresso-100 relative overflow-hidden">
              <img
                src="/images/homepage-hero.jpeg"
                alt="Advanced Med MedSpa Lounge"
                className="w-full h-full object-cover object-center"
              />
            </div>
            {/* Floating accent card */}
            <div className="absolute -bottom-6 -left-8 bg-white px-7 py-5 border border-cream-300 shadow-sm">
              <p className="font-serif text-3xl font-light text-espresso">4.9</p>
              <p className="text-[10px] tracking-widest uppercase text-spa mt-0.5">Avg Rating</p>
              <p className="text-[10px] text-espresso-400 mt-0.5">500+ reviews</p>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span className="text-[9px] tracking-widest uppercase text-espresso">Scroll</span>
          <div className="w-px h-8 bg-espresso animate-pulse" />
        </div>
      </section>

      {/* ── TREATMENTS GRID ───────────────────────────── */}
      <section className="bg-white py-24 px-5 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="Our Specialties"
            title="Treatments Designed for Your Goals"
            subtitle="Each service at Advanced Med is medically designed, expertly administered, and tailored to your unique needs."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-cream-300">
            {treatments.map((t) => (
              <Link
                key={t.path}
                to={t.path}
                className="group bg-white p-8 flex flex-col justify-between min-h-[200px] hover:bg-cream-100 transition-colors"
              >
                <div>
                  <h3 className="font-serif text-xl font-light text-espresso mb-2 group-hover:text-spa transition-colors leading-snug">
                    {t.title}
                  </h3>
                  <p className="text-[11px] tracking-wide text-espresso-400 font-light">{t.subtitle}</p>
                </div>
                <ArrowRight size={14} className="text-spa mt-6 group-hover:translate-x-1 transition-transform" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT STRIP ─────────────────────────────── */}
      <section className="bg-espresso py-24 px-5 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <p className="text-[10px] font-medium tracking-widest uppercase text-spa mb-6" style={{ letterSpacing: '0.28em' }}>
              Our Philosophy
            </p>
            <h2 className="font-serif text-5xl font-light text-cream-200 leading-tight mb-7">
              Precision Care.<br />
              <span className="italic text-spa-300">Lasting Results.</span>
            </h2>
            <p className="text-[14px] text-cream-400 font-light leading-relaxed mb-10 max-w-lg">
              At Advanced Med MedSpa Lounge, every treatment begins with a thorough evaluation and ends with a personalized plan. We combine medical expertise with a genuine commitment to your wellbeing.
            </p>
            <div className="space-y-4">
              {[
                'Board-certified medical professionals on every treatment',
                'FDA-approved technologies and medical-grade products',
                'Personalized protocols based on your unique biology',
                'A serene, private environment built for your comfort',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle size={15} className="text-spa mt-0.5 flex-shrink-0" />
                  <span className="text-[13px] text-cream-400 font-light">{item}</span>
                </div>
              ))}
            </div>
            <Link
              to="/about"
              className="inline-flex items-center gap-3 mt-10 text-cream-200 text-[10px] font-medium tracking-widest uppercase border-b border-spa pb-0.5 hover:text-spa transition-colors"
            >
              Learn Our Story <ArrowRight size={12} />
            </Link>
          </div>

          {/* Spa Photos — overlapping */}
          <div className="relative w-full h-80 lg:h-96">
            {/* Back photo — offset top-left */}
            <div className="absolute top-0 left-0 w-4/5 aspect-[4/3] overflow-hidden shadow-lg">
              <img
                src="/images/spa-front-1.jpg"
                alt="Advanced Med MedSpa front desk"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Front photo — offset bottom-right, overlapping */}
            <div className="absolute bottom-0 right-0 w-4/5 aspect-[4/3] overflow-hidden shadow-xl border-4 border-espresso">
              <img
                src="/images/spa-front-2.jpg"
                alt="Advanced Med MedSpa reception"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── SKIN CONCERNS ───────────────────────────── */}
      <section className="bg-cream-100 py-24 px-5 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="Skin Health"
            title="Address Your Skin Concerns"
            subtitle="Clinically targeted treatments for every concern — delivered with the precision of medical expertise and the care of a luxury experience."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skinConcerns.map((c) => (
              <Link
                key={c.path}
                to={c.path}
                className="group bg-white border border-cream-300 p-8 hover:border-spa hover:shadow-[0_4px_24px_rgba(115,137,133,0.12)] transition-all"
              >
                <div className="w-8 h-px bg-spa mb-6 group-hover:w-14 transition-all duration-300" />
                <h3 className="font-serif text-xl font-light text-espresso mb-3 leading-snug group-hover:text-spa transition-colors">
                  {c.title}
                </h3>
                <ArrowRight size={13} className="text-spa mt-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ────────────────────────────── */}
      <section className="bg-white py-24 px-5 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="Client Stories"
            title="Real Results. Real People."
            subtitle="Our clients' transformations speak louder than any treatment list."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="border border-cream-300 p-9">
                <div className="flex gap-0.5 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="#738985" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
                <p className="font-serif text-[16px] font-light text-espresso leading-relaxed italic mb-7">
                  "{t.quote}"
                </p>
                <div className="border-t border-cream-300 pt-5">
                  <p className="text-[12px] font-medium tracking-wide text-espresso">{t.name}</p>
                  <p className="text-[11px] text-spa tracking-wide mt-0.5">{t.treatment}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/testimonials"
              className="inline-flex items-center gap-3 text-espresso text-[10px] font-medium tracking-widest uppercase border-b border-spa pb-0.5 hover:text-spa transition-colors"
            >
              Read All Reviews <ArrowRight size={12} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── MEMBERSHIPS TEASER ─────────────────────── */}
      <section className="bg-cream-200 py-24 px-5 sm:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-[10px] font-medium tracking-widest uppercase text-spa mb-5" style={{ letterSpacing: '0.28em' }}>
            Exclusive Access
          </p>
          <h2 className="font-serif text-5xl font-light text-espresso leading-tight mb-6">
            Join Our Membership Program
          </h2>
          <p className="text-[14px] text-espresso-500 font-light leading-relaxed max-w-xl mx-auto mb-10">
            Unlock priority booking, discounts on all services, complimentary treatments, and a dedicated care experience — every single month.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/memberships"
              className="inline-flex items-center justify-center gap-3 bg-spa text-cream-100 text-[10px] font-medium tracking-widest uppercase px-9 py-4 hover:bg-spa-600 transition-colors"
            >
              View Membership Plans <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────── */}
      <section className="bg-spa py-20 px-5 sm:px-8 lg:px-12 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-[10px] font-medium tracking-widest uppercase text-spa-100 mb-5" style={{ letterSpacing: '0.28em' }}>
            Begin Your Journey
          </p>
          <h2 className="font-serif text-5xl font-light text-white leading-tight mb-6">
            Your Transformation Starts Here
          </h2>
          <p className="text-[14px] text-spa-200 font-light leading-relaxed mb-10">
            Book a complimentary evaluation with our specialists and discover the personalized plan that will help you look and feel your absolute best.
          </p>
          <Link
            to="/personalized-evaluation"
            className="inline-flex items-center justify-center gap-3 bg-white text-espresso text-[10px] font-medium tracking-widest uppercase px-10 py-4 hover:bg-cream-100 transition-colors"
          >
            Free Evaluations <ArrowRight size={13} />
          </Link>
        </div>
      </section>
    </>
  )
}
