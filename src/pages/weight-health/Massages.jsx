import { Link } from 'react-router-dom'
import { CheckCircle, ArrowRight } from 'lucide-react'
import SectionHeader from '../../components/SectionHeader'

const massageTypes = [
  {
    emoji: '🌊',
    name: 'Brazilian 3-in-1 Lymphatic Drainage',
    tagline: 'Detox, Sculpt & Slim',
    description: 'A powerful combination of lymphatic drainage, deep tissue work, and body contouring massage originating from Brazil — widely used post-surgery and for body sculpting.',
    benefits: ['Reduces post-surgical swelling', 'Eliminates toxins and fluid retention', 'Smooths skin texture and cellulite', 'Supports immune function'],
  },
  {
    emoji: '💆',
    name: 'Deep Tissue Massage',
    tagline: 'Release. Restore. Recover.',
    description: 'Targets the deeper layers of muscle and connective tissue using firm, sustained pressure to release chronic tension, adhesions, and muscle knots.',
    benefits: ['Relieves chronic muscle tension', 'Breaks up scar tissue and adhesions', 'Improves posture and range of motion', 'Reduces pain and inflammation'],
  },
  {
    emoji: '🏥',
    name: 'Post-Operative Massage',
    tagline: 'Heal Faster. Feel Better.',
    description: 'Specially designed for clients recovering from cosmetic or medical surgery. Gentle, targeted techniques accelerate healing, reduce bruising, and smooth results.',
    benefits: ['Accelerates post-op healing', 'Prevents fibrosis and hardening', 'Reduces bruising and swelling', 'Optimizes surgical results'],
  },
  {
    emoji: '🤰',
    name: 'Prenatal Massage',
    tagline: 'Nurturing Care for Two',
    description: 'A safe, soothing massage specifically designed for pregnant women — addressing the unique physical challenges of pregnancy with gentle, evidence-based techniques.',
    benefits: ['Relieves back, hip & sciatic pain', 'Reduces swelling in legs and feet', 'Eases anxiety and improves sleep', 'Safe throughout all trimesters'],
  },
]

export default function Massages() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative bg-gray-900 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-rose-950 opacity-95" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <p className="text-gold-400 text-xs font-bold tracking-[0.3em] uppercase mb-4">Therapeutic Body Services</p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold leading-tight mb-6">
            Massage <span className="text-gold-400">Therapy</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            From detoxifying lymphatic drainage to healing post-operative care — our expert massage therapists deliver therapeutic touch that transforms how you look and feel.
          </p>
          <Link
            to="/book"
            className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Book a Session <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Service Cards Grid */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Our Services"
            title="Expert Massage Therapies"
            subtitle="Each service is performed by our highly trained, certified massage therapists in a serene, luxurious environment designed for deep relaxation and results."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {massageTypes.map((m) => (
              <div key={m.name} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:border-gold-300 hover:shadow-xl transition-all duration-300 flex flex-col">
                <div className="text-4xl mb-4">{m.emoji}</div>
                <h3 className="font-serif font-bold text-xl text-gray-900 mb-1">{m.name}</h3>
                <p className="text-gold-600 text-xs font-bold tracking-widest uppercase mb-4">{m.tagline}</p>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1">{m.description}</p>
                <ul className="space-y-2">
                  {m.benefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                      <CheckCircle className="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brazilian 3-in-1 Deep Dive */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader eyebrow="Signature Service" title="🌊 Brazilian 3-in-1 Lymphatic Drainage" center={false} />
              <p className="text-gray-600 leading-relaxed mb-4">
                Born in Brazil and refined by decades of clinical application, the 3-in-1 lymphatic drainage massage is a revolutionary technique that simultaneously addresses lymphatic congestion, deep muscle tension, and surface-level body contouring — all in a single session.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Using a combination of rhythmic pumping strokes, deep petrissage, and specialized sculpting movements, our therapists guide excess fluid out of tissues, stimulate fat metabolism at the cellular level, and leave your skin visibly smoother and more toned.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                This treatment is especially popular pre- and post-cosmetic procedure, for brides preparing for their wedding, and for clients seeking accelerated results alongside their body contouring treatments.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {['Reduces fluid retention', 'Smooths cellulite', 'Slims and sculpts', 'Boosts immunity', 'Pre/post-surgery safe', 'Deeply relaxing'].map((tag) => (
                  <div key={tag} className="flex items-center gap-2 text-gray-700 text-sm">
                    <CheckCircle className="w-4 h-4 text-gold-500" />
                    {tag}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-gold-50 to-rose-50 rounded-2xl p-10">
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-6">What to Expect</h3>
              <div className="space-y-6">
                {[
                  { step: '1', title: 'Consultation', desc: 'We review your health history, current goals, and any post-surgical considerations to customize your session.' },
                  { step: '2', title: 'Treatment', desc: 'Using specialized strokes, your therapist works from extremities inward, following lymphatic pathways to decongest and sculpt.' },
                  { step: '3', title: 'Compression & Results', desc: 'Sessions conclude with light compression garment guidance. You may notice visible slimming after just one treatment.' },
                ].map((s) => (
                  <div key={s.step} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-gold-500 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">{s.step}</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{s.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Tissue */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-10 text-white order-2 md:order-1">
              <h3 className="font-serif text-2xl font-bold text-gold-400 mb-6">When Deep Work Is Needed</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Chronic pain, poor posture, athletic training, or physical stress at work can create deep layers of muscular tension that surface-level massage cannot reach. Deep tissue work accesses the sub-layer of musculature and connective tissue to deliver lasting relief.
              </p>
              <div className="space-y-3">
                {['Neck and shoulder tension', 'Lower back pain', 'Repetitive strain injuries', 'Athletic recovery', 'Postural imbalances', 'Fibromyalgia support'].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-gold-400 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 md:order-2">
              <SectionHeader eyebrow="Therapeutic Relief" title="💆 Deep Tissue Massage" center={false} />
              <p className="text-gray-600 leading-relaxed mb-6">
                Our certified deep tissue therapists use slow, deliberate strokes and firm pressure to break up scar tissue, release muscle adhesions, and restore proper movement patterns. This is not a comfort massage — it's a clinical treatment with measurable results.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                You may experience some soreness 24–48 hours after your session as your body processes released toxins and adjusts to restored muscle alignment — this is completely normal and typically followed by significant pain relief and increased mobility.
              </p>
              <div className="bg-gold-50 rounded-xl p-6 border border-gold-100">
                <p className="text-sm font-semibold text-gold-700 mb-2">Recommended For:</p>
                <p className="text-gray-600 text-sm">Chronic pain conditions, athletes, office workers, anyone with recurring muscle tension or postural problems.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Post-Op & Prenatal */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Post-Op */}
            <div className="bg-gray-50 rounded-2xl p-10 border border-gray-100">
              <div className="text-4xl mb-4">🏥</div>
              <h2 className="font-serif text-3xl font-bold text-gray-900 mb-2">Post-Operative Massage</h2>
              <p className="text-gold-600 text-xs font-bold tracking-widest uppercase mb-6">Heal Faster. Feel Better.</p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Following cosmetic procedures such as liposuction, tummy tucks, BBL, implants, or any surgical intervention, the body generates significant inflammation and fibrotic tissue as it heals. Without intervention, this can lead to hard lumps, uneven results, and prolonged recovery.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Our post-operative massage protocol, recommended by surgeons across South Florida, uses gentle but precise techniques to prevent fibrosis, guide fluid away from surgical sites, smooth contours, and significantly reduce recovery time.
              </p>
              <ul className="space-y-3">
                {['Begin as early as 72 hours post-surgery', 'Surgeon coordination available', 'Reduces scar tissue formation', 'Maximizes your surgical investment', 'Comfortable, clinical environment'].map((b, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700 text-sm">
                    <CheckCircle className="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            {/* Prenatal */}
            <div className="bg-rose-50 rounded-2xl p-10 border border-rose-100">
              <div className="text-4xl mb-4">🤰</div>
              <h2 className="font-serif text-3xl font-bold text-gray-900 mb-2">Prenatal Massage</h2>
              <p className="text-gold-600 text-xs font-bold tracking-widest uppercase mb-6">Nurturing Care for Two</p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Pregnancy brings beautiful changes — and significant physical challenges. Lower back pain, hip discomfort, sciatica, swollen ankles, and disrupted sleep are common complaints that prenatal massage can meaningfully address.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Our certified prenatal therapists use specially designed positioning with pregnancy pillows to ensure your comfort and safety throughout every trimester. We avoid contraindicated pressure points and use only pregnancy-safe oils and techniques.
              </p>
              <ul className="space-y-3">
                {['Safe in all trimesters', 'Reduces sciatic nerve pain', 'Improves circulation and reduces swelling', 'Lowers stress hormones (cortisol)', 'Improves labor outcomes and mood'].map((b, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700 text-sm">
                    <CheckCircle className="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-gradient-to-br from-gold-500 to-gold-600 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-4xl font-bold mb-4">Give Your Body the Care It Deserves</h2>
          <p className="text-gold-100 text-lg mb-10 leading-relaxed">
            Book your massage session today. Our therapists will customize every session to your needs, comfort level, and wellness goals.
          </p>
          <Link
            to="/book"
            className="inline-flex items-center gap-2 bg-white text-gold-600 font-bold px-10 py-4 rounded-full hover:bg-gray-50 transition-all duration-300 shadow-xl text-lg"
          >
            Book Now <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
