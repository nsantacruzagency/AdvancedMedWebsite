import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Sun, Layers, Droplets, Heart } from 'lucide-react'
import SectionHeader from '../../components/SectionHeader'
import HeroPhoto from '../../components/HeroPhoto'
import FAQ from '../../components/FAQ'
import BeforeAfter from '../../components/BeforeAfter'

const agingFactors = [
  {
    icon: <Layers className="w-7 h-7 text-spa" />,
    title: 'Collagen & Elastin Loss',
    desc: 'After 25, collagen production drops roughly 1% per year. Less collagen means thinner skin, fine lines, and sagging — especially around the eyes and mouth.',
  },
  {
    icon: <Sun className="w-7 h-7 text-spa" />,
    title: 'UV Damage (Photoaging)',
    desc: 'Up to 80% of visible aging is caused by cumulative UV exposure — breaking down collagen, causing pigmentation, and degrading skin\'s structural proteins.',
  },
  {
    icon: <Droplets className="w-7 h-7 text-spa" />,
    title: 'Volume & Fat Loss',
    desc: 'Facial fat pads diminish with age, causing hollowing under the eyes, flattening of cheeks, and deepening of nasolabial folds.',
  },
]

const treatments = [
  {
    name: 'Botox & Neurotoxins',
    areas: ['Forehead lines', 'Crow\'s feet', 'Frown lines (11s)', 'Brow lift', 'Lip flip', 'Neck bands'],
    desc: 'Precise injections of botulinum toxin relax the muscles responsible for dynamic wrinkles, resulting in a smoother, more refreshed appearance — without looking "frozen."',
    expect: 'Results visible in 3–7 days, lasting 3–4 months',
    badge: 'Most Popular',
  },
  {
    name: 'Skin Tightening (RF/HIFU)',
    areas: ['Jowls & jawline', 'Neck laxity', 'Brow & eyelid area', 'Décolletage'],
    desc: 'Radiofrequency and High-Intensity Focused Ultrasound (HIFU) deliver controlled heat deep into the dermis, stimulating new collagen and firming loose skin non-surgically.',
    expect: 'Progressive improvement over 3–6 months',
    badge: 'No Downtime',
  },
  {
    name: 'Anti-Aging Korean Facial',
    areas: ['Full face', 'Neck & décolletage', 'Eye area', 'Lip lines'],
    desc: 'Our signature anti-aging facial combines gua sha sculpting, hyaluronic acid infusion, peptide ampoules, and LED red light therapy to plump and brighten in one session.',
    expect: 'Instant radiance, cumulative lifting with a series',
    badge: 'Our Signature',
  },
  {
    name: 'Chemical Peels',
    areas: ['Fine lines', 'Texture', 'Dullness', 'Sun damage'],
    desc: 'Medium-depth peels using TCA, lactic, and glycolic acids accelerate cellular turnover, resurface the top layers of skin, and reveal fresher, younger-looking skin beneath.',
    expect: '3–5 days downtime for medium peels',
    badge: 'Resurfacing',
  },
  {
    name: 'Medical-Grade Retinoids',
    areas: ['Fine lines', 'Skin texture', 'Pigmentation', 'Firmness'],
    desc: 'Prescription-strength retinoids (tretinoin) are the gold standard in anti-aging — clinically proven to increase collagen, speed cell turnover, and fade discoloration.',
    expect: 'Consistent use required for 12+ weeks',
    badge: 'Science-Backed',
  },
]

const philosophy = [
  'We believe in enhancement, not alteration — you should look like yourself, only refreshed.',
  'Every treatment plan is individualized. There is no one-size-fits-all approach to aging.',
  'We use conservative dosing and precise placement to preserve natural movement and expression.',
  'We combine treatments strategically for synergistic results — often less is more.',
  'Education is part of every visit. You\'ll always understand what we\'re doing and why.',
]

const beforeAfterItems = [
  {
    label: 'Forehead Lines — 2 Weeks Post Treatment',
    result: 'Smooth forehead and elevated brow position following precise neurotoxin placement.',
    beforeAlt: 'Forehead lines before neurotoxin treatment',
    afterAlt: 'Forehead lines 2 weeks after neurotoxin treatment',
  },
  {
    label: 'Skin Tightening — 3 Months',
    result: 'Noticeable lift and firmness along the jawline and neck following RF treatment series.',
    beforeAlt: 'Jawline laxity before RF skin tightening',
    afterAlt: 'Jawline after 3 months of RF skin tightening',
  },
  {
    label: 'Full Anti-Aging Protocol — 6 Months',
    result: 'Combined skin tightening, chemical peel, and anti-aging facial series — dramatic improvement in overall skin quality.',
    beforeAlt: 'Skin before full anti-aging protocol',
    afterAlt: 'Skin after 6-month full anti-aging protocol',
  },
]

const faqItems = [
  {
    q: 'What age should I start anti-aging treatments?',
    a: 'Prevention is always easier than correction. Many clients begin with light treatments — such as regular facials, SPF habits, and topical retinoids — in their late 20s to early 30s. Neurotoxins and skin tightening are commonly introduced in the mid-30s. There is truly no "too early" or "too late" — the best time to start is when you are ready.',
  },
  {
    q: 'Will Botox make me look frozen?',
    a: 'Not when administered by a skilled injector. Frozen results are caused by over-injection or incorrect placement — both of which we actively avoid. Our philosophy is conservative dosing with precise placement, preserving your natural expression while softening the lines that concern you.',
  },
  {
    q: 'How long does skin tightening last?',
    a: 'Results from RF and HIFU skin tightening typically last 12–18 months, as the collagen remodeling process continues for several months post-treatment. Maintenance sessions once or twice a year help sustain and build upon initial results.',
  },
  {
    q: 'Can I combine Botox with facials?',
    a: 'Yes — in fact, combining neurotoxins with regular facials is one of the most effective anti-aging strategies. We typically recommend waiting 48–72 hours after Botox before receiving a facial, and we will coordinate your treatment schedule to maximize results and minimize any interference.',
  },
  {
    q: 'What is the best anti-aging ingredient?',
    a: 'Retinoids (tretinoin) have the most robust clinical evidence for anti-aging — they increase collagen, accelerate cell turnover, and fade pigmentation. Beyond that, vitamin C for antioxidant protection, niacinamide for barrier support, and SPF for prevention are the foundations of every effective anti-aging regimen.',
  },
  {
    q: 'How does RF skin tightening work?',
    a: 'Radiofrequency energy delivers controlled heat into the deep dermis, causing immediate contraction of existing collagen fibers and stimulating the production of new collagen over the following weeks and months. The result is progressive skin tightening and lifting with no downtime.',
  },
]

export default function Aging() {
  return (
    <div className="bg-white">
      <HeroPhoto
        eyebrow="Skin Concerns"
        title={"Aging &\nWrinkles"}
        subtitle="Natural aging is inevitable. Visible aging is increasingly optional."
        gradient="from-espresso-700 via-espresso-800 to-spa-700"
      />

      {/* How Skin Ages */}
      <section className="py-20 px-6 bg-cream-100">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Understanding Aging"
            title="How Your Skin Changes Over Time"
            subtitle="Aging is a natural process — but understanding its mechanisms allows us to slow, reverse, and prevent many of its visible signs."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
            {agingFactors.map((f) => (
              <div key={f.title} className="bg-white p-8 shadow-sm border border-cream-300 hover:shadow-md transition hover:border-spa">
                <div className="mb-4">{f.icon}</div>
                <h3 className="font-serif text-xl font-bold text-espresso mb-3">{f.title}</h3>
                <p className="text-espresso-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Menu */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Treatment Options"
            title="Our Anti-Aging Treatment Menu"
            subtitle="A curated selection of proven modalities — each chosen for its clinical efficacy, safety profile, and aesthetic results."
          />
          <div className="space-y-6 mt-6">
            {treatments.map((t) => (
              <div key={t.name} className="bg-cream-100 border border-cream-300 p-6 md:p-8 flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-serif text-2xl font-bold text-espresso">{t.name}</h3>
                    <span className="bg-cream-200 text-espresso-600 text-[10px] font-bold px-3 py-1 tracking-widest uppercase border border-cream-300">{t.badge}</span>
                  </div>
                  <p className="text-espresso-500 text-sm leading-relaxed mb-4">{t.desc}</p>
                  <p className="text-spa text-sm font-semibold">{t.expect}</p>
                </div>
                <div className="md:w-56 flex-shrink-0">
                  <p className="text-[10px] font-bold text-espresso-400 uppercase tracking-widest mb-3">Treatment Areas</p>
                  <ul className="space-y-1">
                    {t.areas.map((a) => (
                      <li key={a} className="flex items-center gap-2 text-espresso-500 text-sm">
                        <CheckCircle className="w-4 h-4 text-spa flex-shrink-0" /> {a}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 px-6 bg-espresso text-cream-200">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            eyebrow="Our Philosophy"
            title="Natural, Not Frozen"
            subtitle="We believe the best anti-aging results are the ones nobody can quite put their finger on — you just look well-rested and radiant."
            light={true}
          />
          <div className="mt-8 space-y-4">
            {philosophy.map((p) => (
              <div key={p} className="flex gap-4 items-start bg-white/5 border border-white/10 p-5">
                <Heart className="w-5 h-5 text-spa-300 flex-shrink-0 mt-0.5" />
                <p className="text-cream-300 text-sm leading-relaxed">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BeforeAfter
        heading="Client Results"
        items={beforeAfterItems}
      />

      <FAQ items={faqItems} />

      {/* CTA */}
      <section className="py-20 px-6 bg-cream-200 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-4xl font-bold text-espresso mb-4">Begin Your Anti-Aging Journey</h2>
          <p className="text-espresso-500 text-lg mb-8 leading-relaxed">
            Schedule a consultation with our aesthetic experts and discover which combination of treatments will give you your most confident look yet.
          </p>
          <Link
            to="/book"
            className="inline-flex items-center gap-2 bg-espresso hover:bg-espresso-600 text-cream-100 text-[10px] tracking-widest uppercase font-medium px-10 py-4 transition-all duration-300"
          >
            Book Now <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
