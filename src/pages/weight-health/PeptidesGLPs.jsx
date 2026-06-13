import { Link } from 'react-router-dom'
import { CheckCircle, ArrowRight, AlertCircle } from 'lucide-react'
import SectionHeader from '../../components/SectionHeader'
import HeroPhoto from '../../components/HeroPhoto'
import FAQ from '../../components/FAQ'

const benefits = [
  { title: 'Targeted Action', desc: 'Peptides and GLP-1s work on specific receptors and pathways — delivering results with precision and minimal systemic side effects.' },
  { title: 'Accelerated Results', desc: 'Clients typically lose 10–25% of body weight with GLP-1 therapy, far exceeding what diet and exercise alone can achieve.' },
  { title: 'Clinically Validated', desc: 'GLP-1 medications like semaglutide are backed by the largest clinical trials in weight loss history, with robust safety data.' },
  { title: 'Metabolic Reset', desc: 'These therapies address the underlying biology of obesity — not just willpower — creating sustainable change at the hormonal level.' },
]

const faqItems = [
  {
    q: 'What are peptides?',
    a: 'Peptides are short chains of amino acids — the building blocks of proteins — that act as highly specific biological messengers in the body. Unlike broad-spectrum hormones, peptides communicate with targeted receptors to trigger precise physiological responses such as stimulating growth hormone release, enhancing fat metabolism, reducing inflammation, and supporting cellular repair. Our clinicians prescribe pharmaceutical-grade peptides from licensed compounding pharmacies, customized to your labs and goals.',
  },
  {
    q: 'How are GLPs different from peptides?',
    a: 'While both are technically peptide-based molecules, GLP-1 receptor agonists (like semaglutide and tirzepatide) are a specific class of pharmaceutical medications that mimic the gut hormone GLP-1. They primarily work by slowing gastric emptying, signaling the brain\'s satiety centers to reduce hunger, and improving pancreatic insulin response. Therapeutic peptides such as sermorelin or BPC-157 serve different roles — supporting growth hormone production, tissue healing, or metabolic optimization. The two categories are often used together as part of a comprehensive weight loss protocol.',
  },
  {
    q: 'Who is a candidate for semaglutide?',
    a: 'Semaglutide is generally appropriate for adults with a BMI of 30 or higher, or a BMI of 27 or higher with at least one weight-related health condition such as type 2 diabetes, hypertension, high cholesterol, or sleep apnea. A full medical evaluation and lab work are required before prescribing. Individuals with a personal or family history of medullary thyroid carcinoma, MEN2, or pancreatitis are not candidates. Pregnant or breastfeeding women should also avoid GLP-1 medications.',
  },
  {
    q: 'Are there side effects from GLP-1 medications or peptides?',
    a: 'The most common side effects of GLP-1 medications are nausea, mild digestive discomfort, and reduced appetite — particularly when starting or increasing the dose. These are typically temporary and resolve as your body adjusts. We titrate doses slowly to minimize side effects. Therapeutic peptides are generally very well tolerated. Side effects vary by peptide but are typically mild and transient. Our clinical team monitors your response throughout treatment.',
  },
  {
    q: 'How quickly do GLP-1 medications work?',
    a: 'Most patients notice a significant reduction in appetite within the first 1–2 weeks of starting a GLP-1 medication. Meaningful weight loss is typically visible by 4–8 weeks, with optimal results occurring over 3–6 months of consistent treatment. Clinical trials show average weight loss of 15–22% of body weight over 68 weeks depending on the medication used. Results are further enhanced when combined with lifestyle modifications and supportive treatments.',
  },
  {
    q: 'Is a prescription required for peptides and GLP-1 medications?',
    a: 'Yes. Both therapeutic peptides and GLP-1 medications are prescription treatments available only through a licensed medical provider following a comprehensive evaluation. At Advanced Med, all prescriptions are issued by our licensed practitioners after a full health review, lab work, and individualized assessment. This ensures your safety and maximizes the effectiveness of your protocol.',
  },
]

export default function PeptidesGLPs() {
  return (
    <div className="bg-white">
      <HeroPhoto
        eyebrow="Weight & Metabolic Health"
        title={<>Peptides<br />+ GLPs</>}
        subtitle="Next-generation pharmaceutical-grade therapies that work with your biology to dramatically reduce appetite, accelerate fat loss, and optimize metabolic health — under full medical supervision."
        gradient="from-espresso-800 via-espresso-600 to-spa-800"
        gradientDir="to-br"
        radialPos="bottom_right"
      />

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
                <p className="text-espresso-500 text-sm leading-relaxed">Adults with a BMI of 30 or higher, or BMI of 27 or higher with at least one weight-related health condition (type 2 diabetes, hypertension, high cholesterol, sleep apnea). A full medical evaluation and labs are required before prescribing.</p>
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
            Schedule a medical evaluation today. Our providers will review your history, labs, and goals to determine if peptide therapy or GLP-1 medications are right for you.
          </p>
          <Link
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
