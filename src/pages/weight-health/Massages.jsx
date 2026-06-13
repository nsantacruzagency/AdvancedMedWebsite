import { Link } from 'react-router-dom'
import { CheckCircle, ArrowRight } from 'lucide-react'
import SectionHeader from '../../components/SectionHeader'
import HeroPhoto from '../../components/HeroPhoto'
import FAQ from '../../components/FAQ'
import BeforeAfter from '../../components/BeforeAfter'

const massageTypes = [
  {
    name: 'Brazilian 3-in-1 Lymphatic Drainage',
    tagline: 'Detox, Sculpt & Slim',
    description: 'A powerful combination of lymphatic drainage, deep tissue work, and body contouring massage originating from Brazil — widely used post-surgery and for body sculpting.',
    benefits: ['Reduces post-surgical swelling', 'Eliminates toxins and fluid retention', 'Smooths skin texture and cellulite', 'Supports immune function'],
  },
  {
    name: 'Deep Tissue Massage',
    tagline: 'Release. Restore. Recover.',
    description: 'Targets the deeper layers of muscle and connective tissue using firm, sustained pressure to release chronic tension, adhesions, and muscle knots.',
    benefits: ['Relieves chronic muscle tension', 'Breaks up scar tissue and adhesions', 'Improves posture and range of motion', 'Reduces pain and inflammation'],
  },
  {
    name: 'Post-Operative Massage',
    tagline: 'Heal Faster. Feel Better.',
    description: 'Specially designed for clients recovering from cosmetic or medical surgery. Gentle, targeted techniques accelerate healing, reduce bruising, and smooth results.',
    benefits: ['Accelerates post-op healing', 'Prevents fibrosis and hardening', 'Reduces bruising and swelling', 'Optimizes surgical results'],
  },
  {
    name: 'Prenatal Massage',
    tagline: 'Nurturing Care for Two',
    description: 'A safe, soothing massage specifically designed for pregnant women — addressing the unique physical challenges of pregnancy with gentle, evidence-based techniques.',
    benefits: ['Relieves back, hip & sciatic pain', 'Reduces swelling in legs and feet', 'Eases anxiety and improves sleep', 'Safe throughout all trimesters'],
  },
]

const faqItems = [
  {
    q: 'What is the Brazilian 3-in-1 lymphatic drainage massage?',
    a: 'The Brazilian 3-in-1 is a signature technique that combines three disciplines in a single session: manual lymphatic drainage to decongest the lymphatic system and eliminate excess fluid, deep petrissage to address muscle tension and improve tissue quality, and sculpting massage movements to contour the body and smooth the skin. It is widely used both as a standalone treatment and as a complement to cosmetic procedures.',
  },
  {
    q: 'What does lymphatic drainage actually do for the body?',
    a: 'Lymphatic drainage stimulates the flow of lymph — a fluid that carries immune cells, metabolic waste, and excess proteins through a network of vessels throughout the body. When this system becomes sluggish due to inactivity, surgery, illness, or stress, fluid accumulates in tissues causing swelling, puffiness, and reduced immunity. Lymphatic drainage massage gently accelerates lymph flow, reducing fluid retention, removing toxins, and supporting immune function.',
  },
  {
    q: 'Is post-operative massage safe, and when can I start?',
    a: 'Yes — post-operative massage is not only safe but is often recommended by surgeons as an essential part of recovery. Most clients begin as early as 72 hours after surgery, depending on the procedure and their surgeon\'s guidance. Early intervention prevents fibrosis, reduces bruising and swelling, and significantly improves the smoothness and quality of final surgical results. We coordinate with your surgeon when appropriate.',
  },
  {
    q: 'When during pregnancy can I receive a prenatal massage?',
    a: 'Prenatal massage is safe in all three trimesters when performed by a certified prenatal therapist. We use specially designed pregnancy positioning pillows to ensure your comfort and safety, avoid contraindicated pressure points, and use only pregnancy-safe techniques and oils. Many clients find the most benefit beginning in the second trimester when discomfort from back pain, hip tightness, and swelling often peaks.',
  },
  {
    q: 'How often do I need massage sessions to see lasting results?',
    a: 'For general wellness and relaxation, monthly sessions are effective for most clients. For specific goals such as post-surgical recovery, lymphedema management, or cellulite reduction, we typically recommend weekly sessions during an initial series of 4–8 treatments, followed by bi-weekly or monthly maintenance. Your therapist will recommend a frequency tailored to your goals and response to treatment.',
  },
  {
    q: 'Does insurance cover therapeutic massage at Advanced Med?',
    a: 'Coverage varies by insurance plan. Some plans cover massage therapy when prescribed by a physician for a documented medical condition such as chronic pain, post-surgical recovery, or lymphedema. We recommend contacting your insurance provider directly. We provide detailed receipts and documentation to support any applicable claims. Our team can also assist with letters of medical necessity when appropriate.',
  },
]

export default function Massages() {
  return (
    <div className="bg-white">
      <HeroPhoto
        eyebrow="Weight & Metabolic Health"
        title={<>Signature Contouring &<br />Post-Operation Massages</>}
        subtitle="From detoxifying lymphatic drainage to healing post-operative care — our expert massage therapists deliver therapeutic touch that transforms how you look and feel."
        gradient="from-spa-800 via-espresso-800 to-espresso-700"
      />

      <BeforeAfter
        heading="Brazilian 3in1 Lymphatic Drainage Massage — Client Results"
        logo="/images/protocol-logos/3in1logo.png"
        logoAlt="3-in-1 Body Contouring"
        items={[
          { label: 'Lymphatic Drainage — 6 Sessions', result: 'Significant reduction in lower leg swelling and heaviness. Improved lymphatic circulation and reduced fluid retention visible within the first 3 sessions.', beforeSrc: '/images/before-after/lymphatic-drainage-6-sessions/before.jpg', afterSrc: '/images/before-after/lymphatic-drainage-6-sessions/after.jpg', beforeAlt: 'Before lymphatic drainage treatment', afterAlt: 'After lymphatic drainage treatment' },
          { label: 'Post-Op Recovery — 8 Sessions', result: 'Accelerated healing following liposuction procedure. Reduced bruising, prevention of fibrosis, and noticeably smoother contour result achieved through targeted post-op massage.', beforeSrc: '/images/before-after/post-op-recovery-8-sessions/before.jpg', afterSrc: '/images/before-after/post-op-recovery-8-sessions/after.jpg', beforeAlt: 'Before post-operative massage', afterAlt: 'After post-operative massage' },
          { label: 'Prenatal Massage — Third Trimester', result: 'Relief from sciatic nerve pain, significant reduction in ankle and foot swelling, and improved sleep quality reported throughout 6-week prenatal massage series.', beforeSrc: '/images/before-after/prenatal-massage-third-trimester/before.jpg', afterSrc: '/images/before-after/prenatal-massage-third-trimester/after.jpg', beforeAlt: 'Before prenatal massage series', afterAlt: 'After prenatal massage series' },
        ]}
      />

      {/* Brazilian 3-in-1 Deep Dive */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader eyebrow="Signature Service" title="Brazilian 3-in-1 Lymphatic Drainage" center={false} />
              <p className="text-espresso-500 leading-relaxed mb-4">
                Born in Brazil and refined by decades of clinical application, the 3-in-1 lymphatic drainage massage is a revolutionary technique that simultaneously addresses lymphatic congestion, deep muscle tension, and surface-level body contouring — all in a single session.
              </p>
              <p className="text-espresso-500 leading-relaxed mb-4">
                Using a combination of rhythmic pumping strokes, deep petrissage, and specialized sculpting movements, our therapists guide excess fluid out of tissues, stimulate fat metabolism at the cellular level, and leave your skin visibly smoother and more toned.
              </p>
              <p className="text-espresso-500 leading-relaxed mb-8">
                This treatment is especially popular pre- and post-cosmetic procedure, for brides preparing for their wedding, and for clients seeking accelerated results alongside their body contouring treatments.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {['Reduces fluid retention', 'Smooths cellulite', 'Slims and sculpts', 'Boosts immunity', 'Pre/post-surgery safe', 'Deeply relaxing'].map((tag) => (
                  <div key={tag} className="flex items-center gap-2 text-espresso-500 text-sm">
                    <CheckCircle className="w-4 h-4 text-spa" />
                    {tag}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-cream-100 p-10 border border-cream-300">
              <h3 className="font-serif text-xl font-bold text-espresso mb-6">What to Expect</h3>
              <div className="space-y-6">
                {[
                  { step: '1', title: 'Evaluation', desc: 'We review your health history, current goals, and any post-surgical considerations to customize your session.' },
                  { step: '2', title: 'Treatment', desc: 'Using specialized strokes, your therapist works from extremities inward, following lymphatic pathways to decongest and sculpt.' },
                  { step: '3', title: 'Compression & Results', desc: 'Sessions conclude with light compression garment guidance. You may notice visible slimming after just one treatment.' },
                ].map((s) => (
                  <div key={s.step} className="flex gap-4">
                    <div className="w-8 h-8 bg-espresso text-cream-100 flex items-center justify-center font-bold text-sm flex-shrink-0">{s.step}</div>
                    <div>
                      <h4 className="font-semibold text-espresso mb-1">{s.title}</h4>
                      <p className="text-espresso-500 text-sm leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                ))}
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
            <div className="bg-cream-100 p-10 border border-cream-300">
              <h2 className="font-serif text-3xl font-bold text-espresso mb-2">Post-Operative Massage</h2>
              <p className="text-spa text-[10px] font-medium tracking-widest uppercase mb-6">Heal Faster. Feel Better.</p>
              <p className="text-espresso-500 leading-relaxed mb-6">
                Following cosmetic procedures such as liposuction, tummy tucks, BBL, implants, or any surgical intervention, the body generates significant inflammation and fibrotic tissue as it heals. Without intervention, this can lead to hard lumps, uneven results, and prolonged recovery.
              </p>
              <p className="text-espresso-500 leading-relaxed mb-8">
                Our post-operative massage protocol, recommended by surgeons across South Florida, uses gentle but precise techniques to prevent fibrosis, guide fluid away from surgical sites, smooth contours, and significantly reduce recovery time.
              </p>
              <ul className="space-y-3">
                {['Begin as early as 72 hours post-surgery', 'Surgeon coordination available', 'Reduces scar tissue formation', 'Maximizes your surgical investment', 'Comfortable, clinical environment'].map((b, i) => (
                  <li key={i} className="flex items-start gap-3 text-espresso-500 text-sm">
                    <CheckCircle className="w-4 h-4 text-spa flex-shrink-0 mt-0.5" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            {/* Prenatal */}
            <div className="bg-cream-200 p-10 border border-cream-300">
              <h2 className="font-serif text-3xl font-bold text-espresso mb-2">Prenatal Massage</h2>
              <p className="text-spa text-[10px] font-medium tracking-widest uppercase mb-6">Nurturing Care for Two</p>
              <p className="text-espresso-500 leading-relaxed mb-6">
                Pregnancy brings beautiful changes — and significant physical challenges. Lower back pain, hip discomfort, sciatica, swollen ankles, and disrupted sleep are common complaints that prenatal massage can meaningfully address.
              </p>
              <p className="text-espresso-500 leading-relaxed mb-8">
                Our certified prenatal therapists use specially designed positioning with pregnancy pillows to ensure your comfort and safety throughout every trimester. We avoid contraindicated pressure points and use only pregnancy-safe oils and techniques.
              </p>
              <ul className="space-y-3">
                {['Safe in all trimesters', 'Reduces sciatic nerve pain', 'Improves circulation and reduces swelling', 'Lowers stress hormones (cortisol)', 'Improves labor outcomes and mood'].map((b, i) => (
                  <li key={i} className="flex items-start gap-3 text-espresso-500 text-sm">
                    <CheckCircle className="w-4 h-4 text-spa flex-shrink-0 mt-0.5" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Tissue */}
      <section className="py-24 px-6 bg-cream-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="bg-espresso p-10 text-cream-200 order-2 md:order-1">
              <h3 className="font-serif text-2xl font-bold text-spa-300 mb-6">When Deep Work Is Needed</h3>
              <p className="text-cream-300 leading-relaxed mb-6">
                Chronic pain, poor posture, athletic training, or physical stress at work can create deep layers of muscular tension that surface-level massage cannot reach. Deep tissue work accesses the sub-layer of musculature and connective tissue to deliver lasting relief.
              </p>
              <div className="space-y-3">
                {['Neck and shoulder tension', 'Lower back pain', 'Repetitive strain injuries', 'Athletic recovery', 'Postural imbalances', 'Fibromyalgia support'].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-spa-300 flex-shrink-0" />
                    <span className="text-cream-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 md:order-2">
              <SectionHeader eyebrow="Therapeutic Relief" title="Deep Tissue Massage" center={false} />
              <p className="text-espresso-500 leading-relaxed mb-6">
                Our certified deep tissue therapists use slow, deliberate strokes and firm pressure to break up scar tissue, release muscle adhesions, and restore proper movement patterns. This is not a comfort massage — it's a clinical treatment with measurable results.
              </p>
              <p className="text-espresso-500 leading-relaxed mb-8">
                You may experience some soreness 24–48 hours after your session as your body processes released toxins and adjusts to restored muscle alignment — this is completely normal and typically followed by significant pain relief and increased mobility.
              </p>
              <div className="bg-cream-200 p-6 border border-cream-300">
                <p className="text-sm font-semibold text-espresso mb-2">Recommended For:</p>
                <p className="text-espresso-500 text-sm">Chronic pain conditions, athletes, office workers, anyone with recurring muscle tension or postural problems.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-espresso text-cream-200 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-4xl font-bold mb-4">Give Your Body the Care It Deserves</h2>
          <p className="text-cream-300 text-lg mb-10 leading-relaxed">
            Book your massage session today. Our therapists will customize every session to your needs, comfort level, and wellness goals.
          </p>
          <Link
            to="/book"
            className="inline-flex items-center gap-2 bg-cream-100 hover:bg-white text-espresso text-[10px] tracking-widest uppercase font-medium px-10 py-4 transition-all duration-300"
          >
            Book Now <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <FAQ items={faqItems} />
    </div>
  )
}
