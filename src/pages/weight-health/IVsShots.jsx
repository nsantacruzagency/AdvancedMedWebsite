import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle } from 'lucide-react'
import SectionHeader from '../../components/SectionHeader'
import HeroPhoto from '../../components/HeroPhoto'
import FAQ from '../../components/FAQ'

const ivDrips = [
  { name: "Myers' Cocktail", desc: 'The gold standard IV — magnesium, B vitamins, vitamin C, and calcium to boost energy, immunity, and overall wellness.', time: '30–45 min' },
  { name: 'Mega Vitamin C', desc: 'High-dose vitamin C for immune defense, collagen synthesis, skin brightening, and antioxidant protection.', time: '45–60 min' },
  { name: 'NAD+', desc: 'Nicotinamide adenine dinucleotide — supports cellular energy, brain function, metabolism, and anti-aging at the cellular level.', time: '2–4 hrs' },
  { name: 'Weight Loss Drip', desc: 'Lipo-B complex, methionine, inositol, and choline to accelerate fat metabolism and enhance your weight loss program.', time: '45 min' },
  { name: 'Hydration & Recovery', desc: 'Pure saline with electrolytes and B12 to rapidly rehydrate, reduce fatigue, and restore peak performance after workouts or illness.', time: '30 min' },
  { name: 'Immunity Boost', desc: 'Zinc, high-dose vitamin C, glutathione, and B complex to rapidly strengthen your immune response.', time: '45 min' },
  { name: 'Beauty Drip', desc: 'Glutathione, biotin, vitamin C, and collagen-boosting nutrients for radiant skin, strong nails, and lustrous hair.', time: '45 min' },
  { name: 'Energy & Performance', desc: 'B12, B complex, amino acids, and magnesium to power through fatigue and optimize athletic performance.', time: '30–45 min' },
]

const shots = [
  { name: 'Vitamin B12', desc: 'Boost energy, support neurological function, and improve mood — essential for those with deficiencies or fatigue.' },
  { name: 'Lipo-C (MIC) Shot', desc: 'Methionine, Inositol, Choline + B12 — a powerful fat-burning cocktail that accelerates metabolism and targets stored fat.' },
  { name: 'Glutathione', desc: "The body's master antioxidant — reduces oxidative stress, brightens skin, supports liver detox, and boosts immunity." },
  { name: 'Vitamin D3', desc: 'Critical for bone health, immune function, mood regulation, and hormonal balance — most adults are deficient.' },
  { name: 'Toradol (Anti-Inflammatory)', desc: 'Fast-acting pain and inflammation relief — ideal for post-workout soreness, headaches, or post-procedure recovery.' },
  { name: 'Biotin', desc: 'Supports hair growth, nail strength, and skin health from within.' },
]

const faqItems = [
  {
    q: 'How long does an IV therapy session take?',
    a: 'Session length varies by drip. Most of our IV drips take between 30 and 60 minutes. Our NAD+ infusion is the exception — it is administered slowly over 2–4 hours to maximize absorption and minimize side effects. You can relax, work on a laptop, or watch content during your session in our comfortable treatment suite.',
  },
  {
    q: 'What is the difference between IV therapy and intramuscular (IM) shots?',
    a: 'IV therapy delivers nutrients directly into a vein, allowing for higher doses and immediate systemic distribution. It is ideal for rehydration, complex nutrient blends, and treatments like NAD+ that require gradual infusion. Intramuscular shots are injected into muscle tissue, where nutrients are absorbed over 1–2 hours. IM shots are faster to administer (under 5 minutes), require no IV line, and are well-suited for targeted nutrients like B12, glutathione, and Lipo-C.',
  },
  {
    q: 'How often can I receive IV therapy?',
    a: 'For general wellness and energy support, most clients receive IV therapy once or twice per month. Clients using IV therapy for intensive recovery, immune support during illness, or as part of a weight loss program may benefit from weekly sessions during an initial period. NAD+ infusions are typically scheduled as a series of 4–10 sessions over 2–4 weeks, then maintained monthly. Your provider will recommend a frequency based on your goals.',
  },
  {
    q: 'What is NAD+ and why is it given by IV?',
    a: 'NAD+ (nicotinamide adenine dinucleotide) is a critical coenzyme found in every cell of the body. It plays a central role in cellular energy production (ATP), DNA repair, sirtuin activation (longevity pathways), and mitochondrial function. NAD+ levels decline significantly with age. IV administration bypasses oral absorption limitations and delivers NAD+ directly to cells at concentrations that oral supplements cannot achieve, producing meaningful improvements in energy, mental clarity, metabolism, and cellular health.',
  },
  {
    q: 'Does the IV needle hurt?',
    a: 'Most clients experience only a brief pinch during IV catheter insertion — similar to a standard blood draw. Once the IV is in place, the infusion itself is completely painless. Our registered nurses are highly skilled at placement and use the smallest appropriate gauge catheter to maximize your comfort. If you are anxious about needles, let us know and we will take extra time to ensure you feel relaxed and prepared.',
  },
  {
    q: 'Can I combine IV therapy with other treatments at Advanced Med?',
    a: 'Yes — IV therapy pairs very well with many of our other services. Combining a weight loss IV drip with cryolipolysis or lymphatic drainage can accelerate results. NAD+ infusions complement peptide therapy and hormone optimization protocols. A Beauty Drip pairs beautifully with facial treatments. Our team will help you sequence treatments effectively during your consultation.',
  },
]

export default function IVsShots() {
  return (
    <>
      <HeroPhoto
        eyebrow="Weight & Metabolic Health"
        title={<>IVs + Intramuscular<br />Shots</>}
        subtitle="Deliver essential nutrients directly into your bloodstream for 100% absorption — maximum results, minimum wait. Our IV drips and IM shots support weight loss, energy, immunity, beauty, and recovery."
        gradient="from-spa-800 via-espresso-700 to-espresso-800"
      />

      {/* Why IV */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-spa text-[10px] font-medium tracking-widest uppercase mb-3">Why IV Therapy?</p>
              <h2 className="font-serif text-4xl font-bold text-espresso mb-5">100% Bioavailability. Zero Guesswork.</h2>
              <p className="text-espresso-500 leading-relaxed mb-6">When you take oral supplements, your digestive system absorbs only 20–50% of the nutrients. IV therapy bypasses digestion entirely, delivering vitamins, minerals, and amino acids directly into your bloodstream for immediate, full absorption.</p>
              <div className="space-y-3">
                {['Instant energy and hydration', 'Superior absorption vs. oral supplements', 'Customized to your specific needs', 'Administered by registered nurses', 'Results felt within hours'].map((b) => (
                  <div key={b} className="flex items-center gap-3">
                    <CheckCircle size={16} className="text-spa flex-shrink-0" />
                    <span className="text-espresso-500 text-sm">{b}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[{ label: 'Energy Boost', val: 'Felt in hours' }, { label: 'Absorption Rate', val: '100% vs 20–50%' }, { label: 'Session Time', val: '30–60 min' }, { label: 'Administered By', val: 'Registered Nurses' }].map((s) => (
                <div key={s.label} className="bg-cream-100 p-5 text-center border border-cream-300">
                  <div className="font-bold text-espresso text-sm">{s.val}</div>
                  <div className="text-espresso-500 text-xs mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* IV Drips */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-cream-100">
        <div className="max-w-7xl mx-auto">
          <SectionHeader eyebrow="IV Drip Menu" title="Our IV Therapy Menu" subtitle="Each drip is prepared fresh and customized to your health goals by our medical team." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {ivDrips.map((drip) => (
              <div key={drip.name} className="bg-white p-6 border border-cream-300 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all hover:border-spa">
                <h3 className="font-serif font-bold text-espresso mb-2 text-sm">{drip.name}</h3>
                <p className="text-espresso-500 text-xs leading-relaxed mb-3">{drip.desc}</p>
                <span className="text-[10px] text-spa font-semibold bg-spa-100 px-2 py-1 tracking-widest uppercase">{drip.time}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IM Shots */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader eyebrow="Intramuscular Shots" title="Quick-Hit IM Shots" subtitle="Fast, effective, and affordable — our IM shots deliver targeted nutrients in under 5 minutes with no appointment wait." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {shots.map((shot) => (
              <div key={shot.name} className="bg-cream-200 p-6 border border-cream-300">
                <h3 className="font-serif font-bold text-espresso mb-2">{shot.name}</h3>
                <p className="text-espresso-500 text-sm leading-relaxed">{shot.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ items={faqItems} />

      <section className="py-20 px-4 bg-espresso text-cream-200 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl font-bold mb-4">Ready to Recharge?</h2>
          <p className="text-cream-300 mb-8">Walk-ins welcome for most IM shots. IV drips are by appointment — book yours today.</p>
          <Link to="/book" className="inline-flex items-center gap-2 bg-cream-100 hover:bg-white text-espresso text-[10px] tracking-widest uppercase font-medium px-10 py-4 transition-colors">
            Book Your IV Session <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  )
}
