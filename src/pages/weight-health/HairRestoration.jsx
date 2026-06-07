import { Link } from 'react-router-dom'
import { CheckCircle, ArrowRight, Clock } from 'lucide-react'
import SectionHeader from '../../components/SectionHeader'

const candidates = [
  'Men or women experiencing hair thinning or early-stage hair loss',
  'Those with androgenetic alopecia (male or female pattern baldness)',
  'Clients with diffuse thinning across the scalp',
  'Individuals who have completed chemotherapy and seek regrowth support',
  'Those wanting to enhance hair density before visible thinning worsens',
  'Clients seeking a non-surgical alternative to hair transplants',
]

const timeline = [
  { month: 'Month 1–2', desc: 'Reduced shedding is often the first sign — your hair is stabilizing. Some clients notice early scalp tingling and increased circulation.' },
  { month: 'Month 3–4', desc: 'Fine, new hairs begin emerging. Existing hairs may appear thicker and stronger. Hair texture often improves noticeably.' },
  { month: 'Month 5–6', desc: 'Significant density increase becomes visible. Hairline may begin to fill in. Most clients reach peak early results at this stage.' },
  { month: 'Month 9–12', desc: 'Full treatment results are realized. Hair is visibly fuller, healthier, and stronger. Maintenance treatments recommended every 3–6 months.' },
]

export default function HairRestoration() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative bg-gray-900 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gold-950 opacity-95" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <p className="text-gold-400 text-xs font-bold tracking-[0.3em] uppercase mb-4">Non-Surgical Hair Treatments</p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold leading-tight mb-6">
            Hair <span className="text-gold-400">Restoration</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            Clinically proven, non-surgical treatments to restore hair density, reawaken dormant follicles, and reclaim your confidence — using your body's own regenerative biology.
          </p>
          <Link
            to="/book"
            className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Book a Hair Consultation <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* PRP Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader eyebrow="Regenerative Medicine" title="🩸 PRP Hair Restoration" center={false} />
              <p className="text-gray-600 leading-relaxed mb-6">
                Platelet-Rich Plasma (PRP) therapy is one of the most scientifically validated non-surgical hair restoration treatments available. It harnesses the regenerative power of your own blood's growth factors to reactivate dormant follicles and strengthen active ones.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                The process begins with a simple blood draw. Your blood is then spun in a centrifuge to concentrate the platelets — tiny cells packed with over 30 growth factors including PDGF, VEGF, IGF, and TGF-β. This concentrated plasma is then micro-injected directly into the scalp at the level of the hair follicles.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                These growth factors stimulate follicular stem cells, increase blood supply to follicles, extend the active growth phase (anagen), and signal dormant follicles to re-enter the growth cycle — producing denser, thicker, healthier hair over 3–6 months.
              </p>
              <ul className="space-y-3">
                {[
                  'Uses your own blood — no foreign substances',
                  'Clinically studied in peer-reviewed research',
                  'Effective for both male and female hair loss',
                  'No downtime — return to normal activity same day',
                  'Results compound with each treatment session',
                ].map((b, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-rose-50 to-gold-50 rounded-2xl p-8 border border-gold-100">
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">The PRP Process</h3>
                <div className="space-y-5">
                  {[
                    { n: '1', t: 'Blood Draw', d: 'A small vial of your blood is collected — less than a standard lab draw.' },
                    { n: '2', t: 'Centrifugation', d: 'Spun at high speed to separate and concentrate the platelet-rich layer from red cells.' },
                    { n: '3', t: 'Activation', d: 'The PRP is activated with calcium to prime the growth factors for release.' },
                    { n: '4', t: 'Scalp Injection', d: 'Micro-injected across treatment areas using fine needles. Numbing cream is applied beforehand for comfort.' },
                  ].map((step) => (
                    <div key={step.n} className="flex gap-4">
                      <div className="w-7 h-7 rounded-full bg-gold-500 text-white flex items-center justify-center font-bold text-xs flex-shrink-0">{step.n}</div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm mb-0.5">{step.t}</h4>
                        <p className="text-gray-500 text-sm">{step.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gray-900 rounded-2xl p-8 text-white">
                <h3 className="font-serif font-bold text-gold-400 mb-3">Recommended Protocol</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">Initial series of 3 treatments spaced 4–6 weeks apart, followed by maintenance treatments every 3–6 months.</p>
                <div className="grid grid-cols-3 gap-3 text-center">
                  {[['3', 'Initial Sessions'], ['4–6', 'Weeks Apart'], ['3–6mo', 'Maintenance']].map(([val, label]) => (
                    <div key={label} className="bg-gray-800 rounded-xl p-3">
                      <div className="text-gold-400 font-bold text-xl font-serif">{val}</div>
                      <div className="text-gray-400 text-xs mt-1">{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exosome Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-10 text-white order-2 md:order-1">
              <h3 className="font-serif text-2xl font-bold text-gold-400 mb-6">The Next Generation of Regeneration</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Exosomes are nano-sized extracellular vesicles that act as intercellular messengers — carrying genetic information, proteins, and signaling molecules between cells. Derived from stem cells, they contain over 1,000 growth factors and regulatory signals.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                When applied to the scalp, exosomes communicate directly with follicular stem cells, delivering instructions to regenerate and proliferate. They produce significantly higher concentrations of regenerative signals than PRP — making them ideal for more advanced hair loss or as a supercharged complement to PRP therapy.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {['1000+ Growth Factors', 'Stem Cell Derived', 'Superior to PRP alone', 'Anti-inflammatory', 'No blood draw needed', 'Premium results'].map((tag) => (
                  <span key={tag} className="text-xs bg-white/10 text-gray-200 px-3 py-2 rounded-full text-center">{tag}</span>
                ))}
              </div>
            </div>
            <div className="order-1 md:order-2">
              <SectionHeader eyebrow="Cutting-Edge Therapy" title="🔬 Exosome Hair Therapy" center={false} />
              <p className="text-gray-600 leading-relaxed mb-6">
                Exosome hair therapy represents the frontier of regenerative medicine for hair restoration. While PRP uses your own platelet-derived growth factors, exosome therapy delivers a vastly richer concentration of regenerative signals derived from carefully sourced, rigorously tested stem cell lines.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Exosomes are applied topically or injected into the scalp following microneedling to maximize absorption. The results are often faster and more pronounced than PRP alone, making this an excellent option for clients with moderate to advanced hair thinning, or those who want to maximize results.
              </p>
              <ul className="space-y-3">
                {[
                  'Faster results than PRP — often visible by month 2',
                  'Ideal for moderate to advanced hair loss',
                  'Can be combined with PRP for superior outcomes',
                  'Reduces scalp inflammation and creates optimal growing environment',
                  'No blood draw required',
                ].map((b, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Scalp Health */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="The Foundation"
            title="🌱 Scalp Health & Treatments"
            subtitle="Healthy hair starts with a healthy scalp. An inflamed, congested, or nutritionally depleted scalp environment actively suppresses hair growth — and no regenerative therapy works optimally without addressing it."
          />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                emoji: '💆',
                name: 'Scalp Analysis & Assessment',
                desc: 'Using advanced trichoscopy, we examine your scalp at the cellular level — identifying inflammation, sebum buildup, follicle miniaturization, and scalp conditions that impact growth.',
                items: ['Digital trichoscopy imaging', 'Follicle density mapping', 'Inflammation assessment', 'Personalized diagnosis'],
              },
              {
                emoji: '🧪',
                name: 'Medical Scalp Treatments',
                desc: 'Clinical-grade treatments addressing dandruff, seborrheic dermatitis, psoriasis, and folliculitis — conditions that directly impair follicle function and hair growth.',
                items: ['Medicated scalp protocols', 'Anti-inflammatory treatments', 'Microbiome-balancing therapy', 'pH optimization'],
              },
              {
                emoji: '💉',
                name: 'Microneedling & Growth Serums',
                desc: 'Collagen Induction Therapy (CIT) on the scalp creates micro-channels that enhance absorption of growth serums by up to 80% while stimulating scalp circulation and collagen.',
                items: ['Biotin & peptide serums', 'Minoxidil delivery enhancement', 'Collagen stimulation', 'Circulation boosting'],
              },
            ].map((item) => (
              <div key={item.name} className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-gold-200 hover:shadow-lg transition-all duration-300">
                <div className="text-4xl mb-4">{item.emoji}</div>
                <h4 className="font-serif font-bold text-xl text-gray-900 mb-3">{item.name}</h4>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">{item.desc}</p>
                <ul className="space-y-2">
                  {item.items.map((b, i) => (
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

      {/* Candidates */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <SectionHeader eyebrow="Is This Right for You?" title="👤 Who Is a Candidate?" center={false} />
              <p className="text-gray-600 leading-relaxed mb-8">
                Our hair restoration treatments are appropriate for a wide range of hair loss patterns and causes. The most important factor is that some viable follicles remain — these therapies revitalize existing follicles rather than create new ones. A comprehensive consultation will determine which protocol is best for your specific situation.
              </p>
              <ul className="space-y-3">
                {candidates.map((c, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8">
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">Not Ideal Candidates</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                These treatments work best when follicles are still present but dormant. If hair loss has been complete in an area for many years and follicles are fully scarred, regenerative therapies may have limited effect. A consultation helps us set realistic expectations.
              </p>
              <ul className="space-y-3">
                {['Advanced alopecia totalis or universalis', 'Complete follicle destruction from scarring', 'Active scalp infections (until treated)', 'Certain autoimmune conditions (case by case)'].map((c, i) => (
                  <li key={i} className="flex items-start gap-3 text-amber-800 text-sm">
                    <span className="w-4 h-4 rounded-full border-2 border-amber-400 flex-shrink-0 mt-0.5" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 px-6 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="What to Expect"
            title="Results Timeline"
            subtitle="Hair growth is a gradual biological process. Here's a realistic view of what to expect over your treatment journey."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {timeline.map((t, i) => (
              <div key={t.month} className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-gold-500/40 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-5 h-5 text-gold-500" />
                  <span className="text-gold-400 font-bold text-sm">{t.month}</span>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-gradient-to-br from-gold-500 to-gold-600 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-4xl font-bold mb-4">Reclaim Your Hair. Reclaim Your Confidence.</h2>
          <p className="text-gold-100 text-lg mb-10 leading-relaxed">
            Book a hair restoration consultation today. We'll assess your scalp, review your history, and design a personalized protocol to deliver the best possible results.
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
