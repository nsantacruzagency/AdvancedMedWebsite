import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle } from 'lucide-react'
import HeroPhoto from '../../components/HeroPhoto'
import SectionHeader from '../../components/SectionHeader'
import FAQ from '../../components/FAQ'

const steps = [
  {
    number: '01',
    title: 'Double Cleanse',
    desc: 'Begin every evening with an oil-based cleanser to dissolve makeup and sunscreen, followed by a gentle water-based cleanser to purify the skin. This two-step process ensures a completely clean canvas without stripping the moisture barrier.',
  },
  {
    number: '02',
    title: 'pH-Balancing Toner',
    desc: 'A hydrating, alcohol-free toner preps skin to receive actives more effectively. In Korean skincare, the toner is often patted on in multiple layers to begin building hydration from within.',
  },
  {
    number: '03',
    title: 'Essence & Serums',
    desc: 'Lightweight essences flood the skin with moisture and peptides. Layered serums address specific concerns — brightening, anti-aging, or barrier repair — in a specific sequence from thinnest to thickest consistency.',
  },
  {
    number: '04',
    title: 'Sheet Masking',
    desc: 'The signature Korean step: a sheet mask soaked in concentrated essence is left on for 15–20 minutes. It occludes the skin, forcing active ingredients deeper into the dermal layers for maximum absorption.',
  },
  {
    number: '05',
    title: 'Moisturize & Lock',
    desc: 'A rich emulsion or cream seals in all the previous layers, reinforcing the skin barrier and preventing transepidermal water loss throughout the day or night.',
  },
  {
    number: '06',
    title: 'SPF (Daytime Only)',
    desc: 'The non-negotiable final step in any morning routine. Broad-spectrum SPF 50+ is the single most effective anti-aging tool — protecting against UV-driven collagen breakdown, hyperpigmentation, and photoaging.',
  },
]

const glassSteps = [
  'Thorough double cleansing',
  'Multi-layer toning',
  'Essence application',
  'Targeted serums',
  'Hydrating sheet mask',
  'Emulsion or moisturizer',
  'Eye cream',
  'SPF protection (AM)',
]

const breezeFeatures = [
  'Needle-free — no pain, no downtime, no risk of bruising',
  'Delivers active serums at precise depths into the epidermis and upper dermis',
  'Increases serum absorption by up to 90% compared to topical application alone',
  'Compatible with hyaluronic acid, peptides, growth factors, vitamin C, and retinoids',
  'Suitable for all skin types, including sensitive and reactive skin',
  'Pair with any skin concern treatment for dramatically enhanced results',
]

const faqItems = [
  {
    q: 'How often should I come in for a Korean facial to maintain results?',
    a: 'For maintenance, we recommend a Korean facial every 4–6 weeks. This aligns with the skin\'s natural cell turnover cycle (~28 days), allowing you to consistently clear, hydrate, and treat the skin at the optimal moment. If you\'re addressing a specific concern like acne or hyperpigmentation, your provider may recommend more frequent sessions initially.',
  },
  {
    q: 'What is the Breeze machine and how does it work?',
    a: 'The Breeze is a needle-free transdermal delivery device that uses controlled pneumatic pressure to push concentrated serums through the skin\'s surface without needles. It creates a micro-jet stream that temporarily opens channels in the stratum corneum, allowing active ingredients to penetrate far deeper than standard topical application — without any pain or downtime.',
  },
  {
    q: 'Can I use Korean skincare products at home between sessions?',
    a: 'Absolutely — and we encourage it. We carry curated medical-grade and K-beauty aligned retail products that complement your in-clinic treatments. Our estheticians will recommend a home care routine tailored to your skin type and treatment plan. Consistent at-home care is what transforms good results into exceptional ones.',
  },
  {
    q: 'How long do the results from a Korean facial last?',
    a: 'The immediate glow and plumping effect from a Korean facial typically lasts 7–14 days, depending on your skin type and lifestyle. With consistent monthly sessions and a solid home care routine, cumulative improvements to skin texture, tone, and hydration build over time and become the new baseline for your skin.',
  },
  {
    q: 'Is the Breeze treatment suitable for sensitive skin?',
    a: 'Yes. Because the Breeze requires no needles and creates no thermal energy, it is exceptionally well-tolerated by even the most reactive skin types. We select serums specifically formulated for sensitive skin and can customize the intensity of the treatment based on your skin\'s needs on the day of your visit.',
  },
  {
    q: 'Do I need to follow any aftercare instructions?',
    a: 'Your skin will be in a heightened absorption state for 4–6 hours following a Breeze treatment or Korean facial. We recommend avoiding heavy makeup during this window, applying only the products recommended by your esthetician, drinking plenty of water, and staying out of direct sun. SPF is mandatory the following morning.',
  },
]

export default function MaintainResults() {
  return (
    <>
      <HeroPhoto
        eyebrow="Skin Concerns — Maintenance"
        title={<>How to Maintain<br />Your Results</>}
        subtitle="Glass skin is not an event. It is a practice — built on the right protocols, the right products, and the right professional support."
        gradient="from-spa-800 via-espresso-700 to-espresso-800"
        gradientDir="to-b"
        radialPos="top_right"
      />

      {/* ── KOREAN GLASS SKIN INTRO ── */}
      <section className="py-20 px-5 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-spa text-[10px] font-medium uppercase mb-5" style={{ letterSpacing: '0.28em' }}>
              The Korean Beauty Philosophy
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-espresso leading-tight mb-6">
              What Is Glass Skin — and Why Did Korea Change Everything?
            </h2>
            <div className="space-y-5 text-espresso-500 text-[13px] font-light leading-relaxed">
              <p>
                "Glass skin" is the Korean beauty ideal of skin so deeply hydrated, clear, and luminous that it appears translucent — smooth as polished glass, with a subtle inner radiance that no highlighter can replicate. It is not about a product. It is about a relationship between your skin and your skincare.
              </p>
              <p>
                Korean beauty culture elevated skincare to an art form. Where Western routines historically relied on heavy coverage and one or two product steps, Korean women developed meticulous multi-step protocols — some spanning ten or more steps — focused on one principle above all: skin that functions so well it barely needs anything on top.
              </p>
              <p>
                The global skincare industry took notice. Ingredients now considered essential everywhere — hyaluronic acid, centella asiatica, snail mucin, fermented actives, and layered hydration techniques — all entered mainstream consciousness through Korean beauty innovation. The philosophy spread because it worked: deeply hydrated, barrier-strong skin heals faster, ages more slowly, and responds better to every treatment performed on it.
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-cream-200 p-8 border-l-4 border-spa">
              <h3 className="font-serif text-xl font-light text-espresso mb-4">The Glass Skin Routine</h3>
              <ul className="space-y-2.5">
                {glassSteps.map((s, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="text-[10px] font-medium text-spa w-5 text-right flex-shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="text-[13px] text-espresso-500 font-light">{s}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-espresso-400 text-[11px] font-light italic px-2">
              The right routine for your skin type will be prescribed at your evaluation.
            </p>
          </div>
        </div>
      </section>

      {/* ── 6-STEP PROTOCOL DEEP DIVE ── */}
      <section className="py-20 px-5 sm:px-8 lg:px-12 bg-cream-100">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="The Multi-Step Method"
            title="Understanding the Korean Skincare Protocol"
            subtitle="Each step serves a distinct biological purpose. Layering is not indulgence — it is strategy."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-cream-300">
            {steps.map((s) => (
              <div key={s.number} className="bg-white p-9">
                <span className="font-serif text-4xl font-light text-cream-400">{s.number}</span>
                <h3 className="font-serif text-xl font-light text-espresso mt-3 mb-3">{s.title}</h3>
                <p className="text-[13px] text-espresso-500 font-light leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BREEZE MACHINE ── */}
      <section className="py-20 px-5 sm:px-8 lg:px-12 bg-espresso">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Breeze Machine photo */}
          <div
            className="w-full bg-espresso-600 relative overflow-hidden"
            style={{ aspectRatio: '4/3' }}
          >
            <img
              src="/images/breeze-machine.jpeg"
              alt="Breeze Machine — Serum Without Needles"
              className="absolute inset-0 w-full h-full object-cover object-bottom"
              onError={e => { e.currentTarget.style.display = 'none' }}
            />
          </div>

          <div>
            <p className="text-spa-300 text-[10px] font-medium uppercase mb-5" style={{ letterSpacing: '0.28em' }}>
              Our Innovation
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-cream-200 leading-tight mb-6">
              The Breeze Machine:<br />
              <span className="italic text-spa-300">Serums Without Needles</span>
            </h2>
            <div className="space-y-4 text-cream-400 text-[13px] font-light leading-relaxed mb-8">
              <p>
                At Advanced Med MedSpa Lounge, we have elevated the Korean facial experience by incorporating the Breeze — a state-of-the-art needle-free transdermal delivery device that redefines how active serums enter the skin.
              </p>
              <p>
                Traditional topical application leaves most active ingredients sitting on the skin's surface, where they must fight their way through the stratum corneum before they can do any real work. The Breeze changes this entirely.
              </p>
              <p>
                Using precisely calibrated pneumatic pressure, the Breeze propels concentrated serums through the skin's surface in a micro-jet that temporarily opens delivery channels — pushing hyaluronic acid, vitamin C, peptides, growth factors, and brightening actives directly to the layers where they create change. No needles. No pain. No downtime.
              </p>
            </div>
            <ul className="space-y-3 mb-10">
              {breezeFeatures.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <CheckCircle size={15} className="text-spa-300 mt-0.5 flex-shrink-0" />
                  <span className="text-cream-400 text-[13px] font-light">{f}</span>
                </li>
              ))}
            </ul>
            <Link
              href="https://advancedmedspaofficial.janeapp.com/" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-spa text-white text-[10px] font-medium tracking-widest uppercase px-8 py-4 hover:bg-spa-500 transition-colors"
            >
              Book a Breeze Facial <ArrowRight size={13} />
            </a>
          </div>
        </div>
      </section>

      {/* ── RETAIL / PRODUCTS CTA ── */}
      <section className="py-20 px-5 sm:px-8 lg:px-12 bg-cream-200">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-spa text-[10px] font-medium uppercase mb-5" style={{ letterSpacing: '0.28em' }}>
            Continue at Home
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-espresso leading-tight mb-5">
            Professional Products to Extend Your Results
          </h2>
          <p className="text-espresso-500 text-[14px] font-light leading-relaxed max-w-2xl mx-auto mb-10">
            The treatments we perform in our clinic are only half the equation. Our curated selection of medical-grade and K-beauty aligned skincare products ensures your skin continues to thrive between appointments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/products"
              className="inline-flex items-center justify-center gap-3 bg-spa text-cream-100 text-[10px] font-medium tracking-widest uppercase px-9 py-4 hover:bg-spa-600 transition-colors"
            >
              Shop Skincare Products <ArrowRight size={13} />
            </a>
            <Link
              href="https://advancedmedspaofficial.janeapp.com/" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 border border-espresso-300 text-espresso text-[10px] font-medium tracking-widest uppercase px-9 py-4 hover:border-espresso hover:bg-cream-300 transition-colors"
            >
              Book a Facial
            </a>
          </div>
        </div>
      </section>

      <FAQ items={faqItems} />
    </>
  )
}
