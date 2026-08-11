import { ArrowRight, CheckCircle } from 'lucide-react'
import SectionHeader from '../../components/SectionHeader'
import HeroPhoto from '../../components/HeroPhoto'
import BeforeAfter from '../../components/BeforeAfter'
import FAQ from '../../components/FAQ'

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
    q: 'How is this different from a regular massage?',
    a: 'A standard relaxation massage works primarily on muscle tissue to relieve tension and stress. The Brazilian 3-in-1 is a clinical technique with three specific therapeutic goals: lymphatic decongestion, deep tissue work, and active body contouring. The strokes, pressure, and sequencing are fundamentally different — designed to move fluid, reshape tissue, and produce visible changes in body composition and skin quality over a treatment series.',
  },
  {
    q: 'How many sessions do I need to see results?',
    a: 'Most clients notice visible reduction in puffiness and improved skin tone after their first session. For meaningful body contouring and cellulite reduction, a series of 6–10 sessions spaced weekly is recommended. Results compound with each treatment as the lymphatic system becomes progressively less congested and tissue quality improves.',
  },
  {
    q: 'Who is this treatment best for?',
    a: 'The Brazilian 3-in-1 is ideal for clients preparing for or recovering from cosmetic procedures, brides wanting to look their absolute best, anyone experiencing fluid retention or puffiness, clients seeking non-surgical body contouring, and those wanting to enhance and accelerate the results of their other Advanced Med treatments.',
  },
  {
    q: 'Can I combine this with other treatments at Advanced Med?',
    a: 'Absolutely — the Brazilian 3-in-1 pairs exceptionally well with body contouring technology like EMS and radiofrequency, with our non-invasive weight loss protocols, and as a maintenance treatment alongside GLP-1 therapy. Many clients schedule it as a weekly add-on to their primary treatment plan for dramatically enhanced results.',
  },
]

export default function Massages() {
  return (
    <div className="bg-white">
      <HeroPhoto
        eyebrow="Body Contouring"
        title={<>Brazilian Lymphatic<br />Drainage Massage</>}
        subtitle="Born in Brazil. Perfected through decades of clinical application. The most effective non-surgical body contouring massage in the world — and it's our signature in Deerfield Beach / Boca Raton"
        gradient="from-spa-800 via-espresso-800 to-espresso-700"
        gradientDir="to-tr"
        radialPos="bottom_left"
      />

      {/* What Is It */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeader eyebrow="A Combination Protocol" title="Our Signature Special" center={true} />
          <p className="text-espresso-500 leading-relaxed mb-4">
            Born in Brazil and refined by decades of clinical application, the 3-in-1 lymphatic drainage massage is a revolutionary technique that simultaneously addresses lymphatic congestion, deep muscle tension, and surface-level body contouring — all in a single session.
          </p>
          <p className="text-espresso-500 leading-relaxed mb-4">
            The lymphatic system is the body's drainage network — responsible for removing waste, toxins, and excess fluid from every tissue. When it becomes sluggish from sedentary habits, poor diet, stress, or inflammation, fluid accumulates in tissues, creating the puffiness, heaviness, and bloating that no amount of diet or exercise seems to fix. This massage corrects that at its source.
          </p>
          <p className="text-espresso-500 leading-relaxed mb-8">
            Using a combination of rhythmic pumping strokes, deep petrissage, and specialized sculpting movements, our therapists guide excess fluid out of tissues, stimulate fat metabolism at the cellular level, and leave your skin visibly smoother and more toned. This treatment is especially popular pre- and post-cosmetic procedure, for brides preparing for their wedding, and for clients seeking accelerated results alongside their body contouring treatments.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-xl mx-auto">
            {['Reduces fluid retention', 'Smooths cellulite', 'Slims and sculpts', 'Boosts immunity', 'Pre/post-surgery safe', 'Deeply relaxing'].map((tag) => (
              <div key={tag} className="flex items-center gap-2 text-espresso-500 text-sm justify-center">
                <CheckCircle className="w-4 h-4 text-spa flex-shrink-0" />
                {tag}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Three Components */}
      <section className="py-24 px-6 bg-cream-100">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Three Disciplines. One Session."
            title="How the 3-in-1 Works"
            subtitle="Each component targets a different layer of tissue — together they produce results no single massage technique can achieve."
          />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                number: '01',
                name: 'Manual Lymphatic Drainage',
                desc: 'Precise, rhythmic pumping strokes map the lymphatic vessels beneath the skin, activating sluggish nodes and directing accumulated fluid toward active drainage pathways. The result is an immediate reduction in puffiness, improved immune response, and a visible slimming effect as excess fluid is eliminated.',
              },
              {
                number: '02',
                name: 'Deep Petrissage',
                desc: 'Firm kneading and compression techniques target the deeper layers of subcutaneous fat and connective tissue. This breaks up fibrotic bands that cause cellulite, improves tissue oxygenation, and restores elasticity to skin that has become dense and stiff from fluid accumulation or inflammation.',
              },
              {
                number: '03',
                name: 'Body Sculpting Strokes',
                desc: 'The contouring component of the protocol uses directional pressure and specialized movements to physically reshape soft tissue — defining the waist, smoothing the hips and thighs, and lifting the buttocks. Over a series of sessions, these sculpting techniques produce measurable changes in circumference and body shape.',
              },
            ].map((step) => (
              <div key={step.number} className="bg-white p-8 border border-cream-300 hover:border-spa hover:shadow-lg transition-all duration-300">
                <div className="text-spa text-[10px] font-bold tracking-widest uppercase mb-4">{step.number}</div>
                <h4 className="font-serif font-bold text-espresso text-xl mb-3">{step.name}</h4>
                <p className="text-espresso-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BeforeAfter
        heading="3-in-1 Brazilian Contouring Lymphatic Drainage — Real Client Results"
        logo="/images/protocol-logos/3in1logo.png"
        logoAlt="3-in-1 Body Contouring"
        items={[
          { label: 'Lymphatic Drainage — 1', result: '', beforeSrc: '/images/before-after/lymphatic-drainage-1/before.jpg', afterSrc: '/images/before-after/lymphatic-drainage-1/after.jpg', beforeAlt: 'Before lymphatic drainage', afterAlt: 'After lymphatic drainage' },
          { label: 'Lymphatic Drainage — 2', result: '', beforeSrc: '/images/before-after/lymphatic-drainage-2/before.jpg', afterSrc: '/images/before-after/lymphatic-drainage-2/after.jpg', beforeAlt: 'Before lymphatic drainage', afterAlt: 'After lymphatic drainage' },
          { label: 'Lymphatic Drainage — 3', result: '', beforeSrc: '/images/before-after/lymphatic-drainage-3/before.jpg', afterSrc: '/images/before-after/lymphatic-drainage-3/after.jpg', beforeAlt: 'Before lymphatic drainage', afterAlt: 'After lymphatic drainage' },
        ]}
      />

      {/* CTA */}
      <section className="py-24 px-6 bg-espresso text-cream-200 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-4xl font-bold mb-4">Give Your Body the Care It Deserves</h2>
          <p className="text-cream-300 text-lg mb-10 leading-relaxed">
            Book your Brazilian 3-in-1 session today. Our therapists will customize every session to your body goals, comfort level, and treatment history.
          </p>
          <a
            href="https://advancedmedspaofficial.janeapp.com/" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-cream-100 hover:bg-white text-espresso text-[10px] tracking-widest uppercase font-medium px-10 py-4 transition-all duration-300"
          >
            Book Now <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      <FAQ items={faqItems} />
    </div>
  )
}
