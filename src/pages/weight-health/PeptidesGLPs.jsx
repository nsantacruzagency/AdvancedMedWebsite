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
  { title: 'Targeted Action', desc: 'Peptides and GLP-1s work on specific receptors and pathways — delivering results with precision and minimal systemic side effects.' },
  { title: 'Accelerated Results', desc: 'Clients typically lose 10–25% of body weight with GLP-1 therapy, far exceeding what diet and exercise alone can achieve.' },
  { title: 'Clinically Validated', desc: 'GLP-1 medications like semaglutide are backed by the largest clinical trials in weight loss history, with robust safety data.' },
  { title: 'Metabolic Reset', desc: 'These therapies address the underlying biology of obesity — not just willpower — creating sustainable change at the hormonal level.' },
]

export default function PeptidesGLPs() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative bg-espresso text-cream-200 py-32 overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <p className="text-spa text-[10px] font-medium tracking-widest uppercase mb-4">Advanced Medical Weight Loss</p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold leading-tight mb-6">
            Peptides &amp; GLP-1s
          </h1>
          <p className="text-cream-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            Next-generation pharmaceutical-grade therapies that work with your biology to dramatically reduce appetite, accelerate fat loss, and optimize metabolic health — under full medical supervision.
          </p>
          <Link
            to="/book"
            className="inline-flex items-center gap-2 bg-cream-100 hover:bg-white text-espresso text-[10px] tracking-widest uppercase font-medium px-8 py-4 transition-all duration-300"
          >
            Book a Medical Consultation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Peptides Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader eyebrow="The Science of Peptides" title="What Are Peptides?" center={false} />
              <p className="text-espresso-500 leading-relaxed mb-6">
                Peptides are short chains of amino acids — the building blocks of proteins — that act as highly specific biological messengers in the body. Unlike broad-spectrum hormones, peptides communicate with targeted receptors to trigger precise physiological responses.
              </p>
              <p className="text-espresso-500 leading-relaxed mb-6">
                In the context of weight loss and wellness, therapeutic peptides can stimulate growth hormone release, enhance fat metabolism, reduce inflammation, improve insulin sensitivity, and promote cellular repair — all without the broad side-effect profiles of conventional medications.
              </p>
              <p className="text-espresso-500 leading-relaxed mb-8">
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
                  <li key={i} className="flex items-start gap-3 text-espresso-500">
                    <CheckCircle className="w-5 h-5 text-spa flex-shrink-0 mt-0.5" />
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
                <div key={p.name} className="bg-cream-100 p-6 border border-cream-300 hover:border-spa transition-all duration-300">
                  <p className="text-spa text-[10px] font-medium tracking-widest uppercase mb-1">{p.category}</p>
                  <h4 className="font-serif font-bold text-espresso text-lg mb-2">{p.name}</h4>
                  <p className="text-espresso-500 text-sm leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GLP-1 Section */}
      <section className="py-24 px-6 bg-cream-100">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Medical Weight Loss"
            title="GLP-1 Medications"
            subtitle="Semaglutide and tirzepatide represent a paradigm shift in obesity treatment — delivering weight loss results that were previously only achievable through bariatric surgery."
          />
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-white p-10 shadow-sm border border-cream-300">
              <h3 className="font-serif text-2xl font-bold text-espresso mb-4">How GLP-1s Work</h3>
              <p className="text-espresso-500 leading-relaxed mb-4">
                GLP-1 (glucagon-like peptide-1) receptor agonists mimic a natural gut hormone that is released after eating. They work through three primary mechanisms: slowing gastric emptying (food stays in your stomach longer, so you feel full sooner and longer), signaling the brain's satiety centers to reduce hunger and cravings, and improving pancreatic insulin response to stabilize blood sugar.
              </p>
              <p className="text-espresso-500 leading-relaxed">
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
                <div key={med.name} className="bg-white p-8 border border-cream-300 shadow-sm">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="font-serif font-bold text-xl text-espresso">{med.name}</h4>
                    <span className="text-[10px] font-bold bg-espresso text-cream-100 px-3 py-1 ml-2 whitespace-nowrap tracking-widest uppercase">{med.badge}</span>
                  </div>
                  <p className="text-espresso-500 text-sm leading-relaxed">{med.desc}</p>
                </div>
              ))}
              <div className="bg-cream-200 p-6 border border-cream-300">
                <h4 className="font-semibold text-espresso mb-2">Who Is a Candidate?</h4>
                <p className="text-espresso-500 text-sm leading-relaxed">Adults with a BMI of 30 or higher, or BMI of 27 or higher with at least one weight-related health condition (type 2 diabetes, hypertension, high cholesterol, sleep apnea). A full medical consultation and labs are required before prescribing.</p>
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
              <div key={b.title} className="bg-cream-100 p-8 text-center border border-cream-300 hover:border-spa hover:shadow-lg transition-all duration-300">
                <h4 className="font-serif font-bold text-espresso text-lg mb-3">{b.title}</h4>
                <p className="text-espresso-500 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 bg-cream-100">
        <div className="max-w-4xl mx-auto">
          <SectionHeader eyebrow="Common Questions" title="Frequently Asked Questions" />
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white p-8 shadow-sm border border-cream-300">
                <h4 className="font-serif font-bold text-espresso text-lg mb-3">Q: {faq.q}</h4>
                <p className="text-espresso-500 leading-relaxed">A: {faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex gap-4 bg-cream-200 border border-cream-300 p-6">
            <AlertCircle className="w-6 h-6 text-espresso-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-espresso mb-1">Medical Supervision Required</p>
              <p className="text-espresso-500 text-sm leading-relaxed">
                Peptide therapy and GLP-1 medications are prescription treatments available only through a licensed medical provider after a comprehensive evaluation. All prescriptions at Advanced Med are issued by our licensed practitioners following a full health review, lab work, and individualized assessment. These treatments are not appropriate for all individuals. Results vary. This page is for informational purposes only and does not constitute medical advice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-espresso text-cream-200 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-4xl font-bold mb-4">Start Your Medical Weight Loss Journey</h2>
          <p className="text-cream-300 text-lg mb-10 leading-relaxed">
            Schedule a medical consultation today. Our providers will review your history, labs, and goals to determine if peptide therapy or GLP-1 medications are right for you.
          </p>
          <Link
            to="/book"
            className="inline-flex items-center gap-2 bg-cream-100 hover:bg-white text-espresso text-[10px] tracking-widest uppercase font-medium px-10 py-4 transition-all duration-300"
          >
            Book Now <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
