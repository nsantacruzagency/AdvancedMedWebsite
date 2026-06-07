import { Link } from 'react-router-dom'
import { CheckCircle, ArrowRight, AlertCircle } from 'lucide-react'
import SectionHeader from '../../components/SectionHeader'

const faqs = [
  {
    q: 'How quickly will I see results on GLP-1 medications?',
    a: 'Most patients begin noticing reduced appetite within the first 1–2 weeks. Significant weight loss is typically visible at 4–8 weeks, with optimal results occurring over 3–6 months of consistent treatment combined with lifestyle guidance.',
  },
  {
    q: 'Are peptides the same as steroids?',
    a: 'No. Peptides are short chains of amino acids — naturally occurring signaling molecules. They are not anabolic steroids and do not cause the side effects associated with steroids. They work by supporting and optimizing your body\'s own systems.',
  },
  {
    q: 'Do I need to stay on GLP-1s forever?',
    a: 'Not necessarily. Many patients use GLP-1s as a tool to establish new eating patterns and reach their goal weight, then transition off with lifestyle support. Our team creates individualized tapering plans when appropriate.',
  },
  {
    q: 'What are the most common side effects of GLP-1 medications?',
    a: 'The most common side effects are nausea and digestive discomfort, particularly when starting or increasing dose. These are typically mild and resolve as your body adjusts. We titrate doses slowly to minimize side effects.',
  },
  {
    q: 'Who is NOT a candidate for GLP-1 medications?',
    a: 'GLP-1s are not appropriate for individuals with a personal or family history of medullary thyroid carcinoma, MEN2, or pancreatitis. Pregnant or breastfeeding women should also avoid these medications. A full medical evaluation is always completed before prescribing.',
  },
]

const benefits = [
  { emoji: '🎯', title: 'Targeted Action', desc: 'Peptides and GLP-1s work on specific receptors and pathways — delivering results with precision and minimal systemic side effects.' },
  { emoji: '⚡', title: 'Accelerated Results', desc: 'Clients typically lose 10–25% of body weight with GLP-1 therapy, far exceeding what diet and exercise alone can achieve.' },
  { emoji: '🧬', title: 'Clinically Validated', desc: 'GLP-1 medications like semaglutide are backed by the largest clinical trials in weight loss history, with robust safety data.' },
  { emoji: '🔄', title: 'Metabolic Reset', desc: 'These therapies address the underlying biology of obesity — not just willpower — creating sustainable change at the hormonal level.' },
]

export default function PeptidesGLPs() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative bg-gray-900 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-gold-950 opacity-95" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <p className="text-gold-400 text-xs font-bold tracking-[0.3em] uppercase mb-4">Advanced Medical Weight Loss</p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold leading-tight mb-6">
            Peptides <span className="text-gold-400">&amp; GLP-1s</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            Next-generation pharmaceutical-grade therapies that work with your biology to dramatically reduce appetite, accelerate fat loss, and optimize metabolic health — under full medical supervision.
          </p>
          <Link
            to="/book"
            className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Book a Medical Consultation <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Peptides Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader eyebrow="The Science of Peptides" title="🧬 What Are Peptides?" center={false} />
              <p className="text-gray-600 leading-relaxed mb-6">
                Peptides are short chains of amino acids — the building blocks of proteins — that act as highly specific biological messengers in the body. Unlike broad-spectrum hormones, peptides communicate with targeted receptors to trigger precise physiological responses.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                In the context of weight loss and wellness, therapeutic peptides can stimulate growth hormone release, enhance fat metabolism, reduce inflammation, improve insulin sensitivity, and promote cellular repair — all without the broad side-effect profiles of conventional medications.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Our clinicians prescribe pharmaceutical-grade peptides from licensed compounding pharmacies, with dosing and cycling protocols customized to your labs, symptoms, and goals.
              </p>
              <ul className="space-y-3">
                {[
                  'Stimulate natural growth hormone production',
                  'Enhance fat burning and body composition',
                  'Reduce systemic inflammation',
                  'Improve sleep quality and recovery',
                  'Support immune function and cellular repair',
                  'No synthetic hormones introduced',
                ].map((b, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              {[
                { name: 'Sermorelin / Ipamorelin', category: 'Growth Hormone Peptides', desc: 'Stimulate the pituitary gland to produce more growth hormone, improving body composition, energy, sleep, and recovery in a physiologically natural way.' },
                { name: 'CJC-1295', category: 'Metabolic Optimization', desc: 'Extends the half-life of growth hormone pulses, producing sustained anabolic and fat-burning effects when combined with Ipamorelin.' },
                { name: 'BPC-157', category: 'Healing & Recovery', desc: 'A body-protection compound that accelerates tissue healing, reduces gut inflammation, and supports joint and tendon repair.' },
                { name: 'AOD-9604', category: 'Fat Metabolism', desc: 'A fragment of human growth hormone that specifically targets fat cells, stimulating lipolysis (fat breakdown) without affecting blood sugar or growth.' },
              ].map((p) => (
                <div key={p.name} className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:border-gold-200 transition-all duration-300">
                  <p className="text-gold-600 text-xs font-bold tracking-widest uppercase mb-1">{p.category}</p>
                  <h4 className="font-serif font-bold text-gray-900 text-lg mb-2">{p.name}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GLP-1 Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Medical Weight Loss"
            title="💉 GLP-1 Medications"
            subtitle="Semaglutide and tirzepatide represent a paradigm shift in obesity treatment — delivering weight loss results that were previously only achievable through bariatric surgery."
          />
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-white rounded-2xl p-10 shadow-sm border border-gray-100">
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">How GLP-1s Work</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                GLP-1 (glucagon-like peptide-1) receptor agonists mimic a natural gut hormone that is released after eating. They work through three primary mechanisms: slowing gastric emptying (food stays in your stomach longer, so you feel full sooner and longer), signaling the brain's satiety centers to reduce hunger and cravings, and improving pancreatic insulin response to stabilize blood sugar.
              </p>
              <p className="text-gray-600 leading-relaxed">
                The result is a dramatic, sustainable reduction in caloric intake without willpower — because the biological drive to eat is genuinely reduced at the neurological level.
              </p>
            </div>
            <div className="space-y-6">
              {[
                {
                  name: 'Semaglutide (Ozempic / Wegovy)',
                  desc: 'The original GLP-1 breakthrough. Clinical trials show average weight loss of 15–17% of body weight over 68 weeks. Weekly subcutaneous injection. Excellent safety profile with extensive real-world data.',
                  badge: 'Gold Standard',
                },
                {
                  name: 'Tirzepatide (Mounjaro / Zepbound)',
                  desc: 'A dual GLP-1 / GIP receptor agonist — the latest advancement showing average weight loss of 20–22% in trials, making it the most effective pharmaceutical weight loss agent ever studied. Weekly injection.',
                  badge: 'Most Effective',
                },
              ].map((med) => (
                <div key={med.name} className="bg-white rounded-2xl p-8 border border-gold-100 shadow-sm">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="font-serif font-bold text-xl text-gray-900">{med.name}</h4>
                    <span className="text-xs font-bold bg-gold-500 text-white px-3 py-1 rounded-full ml-2 whitespace-nowrap">{med.badge}</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{med.desc}</p>
                </div>
              ))}
              <div className="bg-gold-50 rounded-xl p-6 border border-gold-200">
                <h4 className="font-semibold text-gray-900 mb-2">Who Is a Candidate?</h4>
                <p className="text-gray-600 text-sm leading-relaxed">Adults with a BMI ≥30, or BMI ≥27 with at least one weight-related health condition (type 2 diabetes, hypertension, high cholesterol, sleep apnea). A full medical consultation and labs are required before prescribing.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeader eyebrow="Why It Works" title="The Science-Backed Advantage" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="bg-gray-50 rounded-2xl p-8 text-center border border-gray-100 hover:border-gold-200 hover:shadow-lg transition-all duration-300">
                <div className="text-4xl mb-4">{b.emoji}</div>
                <h4 className="font-serif font-bold text-gray-900 text-lg mb-3">{b.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <SectionHeader eyebrow="Common Questions" title="Frequently Asked Questions" />
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h4 className="font-serif font-bold text-gray-900 text-lg mb-3">Q: {faq.q}</h4>
                <p className="text-gray-600 leading-relaxed">A: {faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex gap-4 bg-amber-50 border border-amber-200 rounded-2xl p-6">
            <AlertCircle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-amber-800 mb-1">Medical Supervision Required</p>
              <p className="text-amber-700 text-sm leading-relaxed">
                Peptide therapy and GLP-1 medications are prescription treatments available only through a licensed medical provider after a comprehensive evaluation. All prescriptions at Advanced Med are issued by our licensed practitioners following a full health review, lab work, and individualized assessment. These treatments are not appropriate for all individuals. Results vary. This page is for informational purposes only and does not constitute medical advice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-gradient-to-br from-gold-500 to-gold-600 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-4xl font-bold mb-4">Start Your Medical Weight Loss Journey</h2>
          <p className="text-gold-100 text-lg mb-10 leading-relaxed">
            Schedule a medical consultation today. Our providers will review your history, labs, and goals to determine if peptide therapy or GLP-1 medications are right for you.
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
