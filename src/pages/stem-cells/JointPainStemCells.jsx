import { CheckCircle, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionHeader from '../../components/SectionHeader'
import HeroPhoto from '../../components/HeroPhoto'
import FAQ from '../../components/FAQ'

const conditions = [
  {
    tag: 'Most Common',
    name: 'Knee Pain & Osteoarthritis',
    desc: 'Knee osteoarthritis is one of the most common causes of chronic pain — and one of the conditions most successfully treated with MSC exosome therapy. By injecting concentrated regenerative biologics directly into the knee joint under ultrasound guidance, we reduce inflammation, stimulate cartilage repair, and restore pain-free mobility.',
    benefits: [
      'Rebuilds degraded cartilage over 4–6 months',
      'Reduces swelling and stiffness rapidly',
      'Avoid or significantly delay knee replacement',
      'Same-day return to activity',
    ],
  },
  {
    tag: null,
    name: 'Hip Pain & Arthritis',
    desc: 'Hip degeneration, labral tears, and chronic arthritis can severely limit movement and quality of life. Our MSC exosome injections target the hip joint directly — reducing inflammation, supporting labral tissue repair, and improving range of motion without surgery or extended downtime.',
    benefits: [
      'Addresses osteoarthritis, bursitis, and labral damage',
      'Non-surgical alternative to hip replacement',
      'Precision-guided injection for accurate delivery',
      'Results in 4–8 weeks with continued improvement',
    ],
  },
  {
    tag: null,
    name: 'Shoulder Pain & Rotator Cuff',
    desc: 'Rotator cuff tears, labral damage, impingement, and chronic shoulder arthritis respond well to regenerative injection therapy. We deliver MSC exosomes directly into the shoulder joint and surrounding tissues, promoting collagen synthesis and reducing the chronic inflammation that keeps shoulders painful and stiff.',
    benefits: [
      'Treats rotator cuff tears and labral injuries',
      'Reduces chronic inflammation and impingement',
      'Restores overhead range of motion',
      'Minimally invasive — no anesthesia required',
    ],
  },
  {
    tag: null,
    name: 'Tendonitis & Bursitis',
    desc: 'Chronic inflammation in the tendons and bursae can severely restrict mobility and cause sharp, debilitating pain. Our targeted stem cell exosome therapies effectively calm local inflammation and repair micro-tears in soft tissue, allowing you to return to sports and daily activities without corticosteroid injections or surgery.',
    benefits: [
      'Targets Achilles, patellar, and elbow tendonitis',
      'Resolves chronic bursitis inflammation',
      'Repairs micro-tears in soft tissue',
      'Safe alternative to repeated steroid shots',
    ],
  },
  {
    tag: null,
    name: 'Back & Spine Pain',
    desc: 'Degenerative disc disease, facet joint arthritis, and spinal stenosis are among the most difficult pain conditions to treat conservatively. MSC exosome therapy delivers powerful anti-inflammatory and regenerative signals directly to the affected spinal structures — reducing nerve compression symptoms and supporting disc tissue health.',
    benefits: [
      'Addresses degenerative disc disease and facet arthritis',
      'Reduces nerve compression and radiating pain',
      'Fluoroscopy-guided for precise spinal delivery',
      'Non-surgical alternative to fusion or discectomy',
    ],
  },
  {
    tag: null,
    name: 'Sports Injuries',
    desc: 'Ligament tears, tendinopathy, cartilage damage, and overuse injuries can sideline athletes for months. Regenerative injection therapy accelerates healing at the tissue level — delivering concentrated growth factors and anti-inflammatory exosomes directly to the injury site for faster, more complete recovery.',
    benefits: [
      'ACL, MCL, and tendon tears treated non-surgically',
      'Accelerates natural healing by 40–60%',
      'Reduces scar tissue formation',
      'Return to sport faster than traditional rehab alone',
    ],
  },
  {
    tag: null,
    name: 'Generalized Arthritis',
    desc: 'Rheumatoid arthritis, psoriatic arthritis, and multi-joint osteoarthritis involve systemic inflammation that local injections alone can\'t fully address. Our IV MSC exosome infusion therapy delivers regenerative signals throughout the body — modulating immune response, reducing systemic inflammation, and improving joint function across multiple sites simultaneously.',
    benefits: [
      'IV infusion reaches multiple joints at once',
      'Modulates overactive immune response',
      'Reduces systemic inflammation markers',
      'Complements local joint injections for full-body relief',
    ],
  },
]

const protocol = [
  {
    step: '01',
    title: 'Evaluation & Imaging Review',
    desc: 'Clinical review of your X-rays or MRI, pain history, activity level, and candidacy assessment with our medical team. We determine which joints are appropriate candidates and which protocol best fits your case.',
  },
  {
    step: '02',
    title: 'Precision-Guided Injection',
    desc: 'Ultrasound or fluoroscopy-guided injection of concentrated MSC exosomes directly into the target joint. The procedure takes approximately 30 minutes. Same-day return to normal activity.',
  },
  {
    step: '03',
    title: 'Anti-Inflammatory Response (Weeks 1–4)',
    desc: 'Exosomes signal local cells to reduce inflammation and halt further cartilage degradation. Pain relief often begins during this window as the inflammatory environment in the joint normalizes.',
  },
  {
    step: '04',
    title: 'Tissue Regeneration (Weeks 4–16)',
    desc: 'Growth factors stimulate chondrocyte activity and collagen production. Progressive improvement in mobility and pain reduction continues over 4–6 months as cartilage and soft tissue rebuild.',
  },
]

const comparison = [
  { feature: 'Addresses Root Cause', traditional: 'No — masks pain only', regenerative: 'Yes — regenerates tissue' },
  { feature: 'Cartilage Rebuilding', traditional: 'None', regenerative: 'Active stimulation' },
  { feature: 'Recovery Downtime', traditional: 'Weeks to months', regenerative: 'Same-day return' },
  { feature: 'Long-Term Relief', traditional: 'Temporary / requires repeat', regenerative: 'Progressive and lasting' },
  { feature: 'Biologics Compliance', traditional: 'N/A', regenerative: 'AATB / cGMP certified' },
  { feature: 'Surgical Risk', traditional: 'Significant', regenerative: 'Non-surgical' },
]

const faqItems = [
  {
    q: 'What are MSC exosomes?',
    a: 'Mesenchymal stem cell (MSC) exosomes are nano-sized vesicles secreted by stem cells that carry growth factors, signaling proteins, and genetic material. Rather than using whole stem cells, exosome therapy delivers the concentrated "communication signals" that drive tissue repair — triggering the same regenerative responses with a more standardized, stable, and scalable biological product. They reduce inflammation, stimulate cell proliferation, and promote extracellular matrix repair in damaged joints.',
  },
  {
    q: 'Is this the same as a cortisone shot?',
    a: 'No — they work in completely opposite ways. Cortisone is a corticosteroid that suppresses inflammation temporarily but does nothing to repair the underlying damage. With repeated use, cortisone has been shown to accelerate cartilage breakdown. MSC exosome therapy is regenerative — it signals the joint to repair damaged tissue, rebuild cartilage, and restore normal cellular function. The goal is lasting improvement, not temporary symptom masking.',
  },
  {
    q: 'How long until I feel relief?',
    a: 'Most patients begin to notice reduced inflammation and improved comfort within 2–4 weeks of treatment. The deeper regenerative effects — cartilage remodeling and structural repair — continue developing over 4–6 months. Full results are typically assessed at 6 months, with many patients continuing to improve through 12 months post-injection.',
  },
  {
    q: 'Do I need surgery after this?',
    a: 'The goal of regenerative therapy is to reduce or eliminate the need for surgery. Many patients with moderate joint degeneration achieve sufficient improvement that surgery is no longer necessary or can be significantly delayed. For severely bone-on-bone joints, regenerative therapy may reduce pain and improve function even if it cannot fully reverse the structural damage. We provide an honest candidacy assessment at your evaluation.',
  },
  {
    q: 'Who is a good candidate?',
    a: 'Ideal candidates have mild-to-moderate joint degeneration with some joint space remaining on imaging, chronic pain that hasn\'t fully resolved with conservative care (physical therapy, NSAIDs, steroid injections), and no active joint infection or uncontrolled inflammatory arthritis. Athletes with soft tissue injuries and patients looking to delay or avoid joint replacement are also excellent candidates. We evaluate each case individually.',
  },
  {
    q: 'Is the injection painful?',
    a: 'Patients typically report minimal discomfort during the procedure. A local anesthetic is applied before injection, and the procedure is performed under ultrasound or fluoroscopic guidance to ensure precision. Some patients experience mild soreness in the treated joint for 24–72 hours after the procedure — a normal response as the biologics begin working. Most return to normal activity the same day.',
  },
  {
    q: 'Is this treatment FDA-approved?',
    a: 'MSC exosome therapy for joint conditions is regulated but not yet FDA-approved as a specific indication — similar to how many PRP and biologic therapies are administered under physician oversight. We use AATB-certified, cGMP-compliant biologics sourced from ethically screened donors, with a full Certificate of Analysis for every vial. All treatments are performed under physician supervision with full informed consent.',
  },
  {
    q: 'How does this differ from PRP?',
    a: 'PRP (platelet-rich plasma) concentrates growth factors from your own blood to stimulate healing. It is effective for many soft-tissue injuries but has limited cartilage-rebuilding capacity. MSC exosome therapy carries a broader spectrum of regenerative signals including anti-inflammatory cytokines, microRNAs, and chondrogenic growth factors — making it more potent for significant cartilage damage, osteoarthritis, and conditions where PRP alone is insufficient. The two therapies are often used together for synergistic effect.',
  },
]

export default function JointPainStemCells() {
  return (
    <div className="bg-white">
      <HeroPhoto
        eyebrow="Stem Cells & Wellness"
        title={<>Stem Cell<br />Joint Therapy</>}
        subtitle="Our stem cell joint regeneration protocol delivers concentrated MSC exosomes directly into damaged tissue — reducing inflammation, rebuilding cartilage, and restoring mobility without surgery."
        gradient="from-espresso-800 via-espresso-700 to-spa-700"
        gradientDir="to-b"
        radialPos="top_left"
      />

      {/* Intro pillars */}
      <section className="py-16 px-6 bg-cream-100 border-b border-cream-300">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { title: 'Non-Surgical', desc: 'No incisions. No general anesthesia. No hospital stay. Same-day return to activity.' },
              { title: 'Targets the Root Cause', desc: 'We treat the cartilage, inflammation, and tissue damage — not just the symptom of pain.' },
              { title: 'AATB / cGMP Certified Biologics', desc: 'Every vial comes with a full Certificate of Analysis. Ethically sourced, rigorously tested.' },
            ].map((p) => (
              <div key={p.title} className="flex flex-col items-center gap-3">
                <CheckCircle className="w-6 h-6 text-spa" />
                <h4 className="font-serif font-bold text-espresso text-lg">{p.title}</h4>
                <p className="text-espresso-500 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What are MSC exosomes */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[10px] font-medium tracking-widest uppercase text-spa mb-4">The Science</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-espresso mb-6 leading-tight">
            What Are MSC Exosomes?
          </h2>
          <p className="text-espresso-500 text-lg leading-relaxed mb-5">
            Mesenchymal stem cell (MSC) exosomes are nano-sized signaling vesicles that carry growth factors, anti-inflammatory proteins, and regenerative microRNA directly to damaged tissue. Rather than injecting whole cells, exosome therapy delivers the concentrated biological signals that drive repair — stimulating your body's own chondrocytes, reducing destructive inflammation, and rebuilding the extracellular matrix in damaged cartilage.
          </p>
          <p className="text-espresso-500 text-lg leading-relaxed">
            Exosomes derived from Wharton's Jelly MSCs (umbilical cord tissue) are among the most potent available — sourced from young, immune-privileged cells with superior signaling capacity. They do not require HLA matching and carry no rejection risk.
          </p>
        </div>
      </section>

      {/* Conditions */}
      <section className="py-20 px-6 bg-cream-100">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Conditions We Treat"
            title="What Kind of Pain?"
            subtitle="From knee and hip pain to spinal conditions and soft tissue injuries, our regenerative protocols address the root cause — not just the symptoms."
          />
          <div className="grid md:grid-cols-2 gap-8 mt-4">
            {conditions.map((c) => (
              <div key={c.name} className="bg-white p-8 border border-cream-300 hover:border-spa hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <h4 className="font-serif font-bold text-espresso text-xl">{c.name}</h4>
                  {c.tag && (
                    <span className="text-[9px] font-bold tracking-widest uppercase bg-spa/10 text-spa px-2 py-1 flex-shrink-0">{c.tag}</span>
                  )}
                </div>
                <p className="text-espresso-500 text-sm leading-relaxed mb-5">{c.desc}</p>
                <ul className="space-y-2">
                  {c.benefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-2 text-espresso-500 text-sm">
                      <CheckCircle className="w-4 h-4 text-spa flex-shrink-0 mt-0.5" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tendonitis & Bursitis Deep Dive */}
      <section className="py-24 px-6 bg-espresso">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[10px] font-medium tracking-widest uppercase text-spa-300 mb-3">Soft-Tissue Inflammation</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-cream-100 mb-6 leading-tight">
                PRP & MSC Therapy for Tendonitis and Bursitis
              </h2>
              <p className="text-cream-300 leading-relaxed mb-5">
                Tendonitis and bursitis are two of the most common — and most stubborn — soft-tissue conditions we see. When tendons become inflamed from overuse, sports, or repetitive strain, and when the small fluid sacs (bursae) cushioning your joints get irritated, the pain can linger for months and resist rest, ice, and anti-inflammatory medication.
              </p>
              <p className="text-cream-300 leading-relaxed">
                Our regenerative protocols use platelet-rich plasma (PRP) and MSC exosomes to interrupt the chronic inflammation cycle and stimulate true soft-tissue repair. Treatment is performed in-office under ultrasound guidance, takes less than an hour, and requires no surgery, no steroid injections, and minimal downtime.
              </p>
            </div>
            <div className="space-y-4">
              {[
                'PRP and MSC injections delivered under ultrasound guidance',
                'Treats rotator cuff tendonitis, tennis & golfer\'s elbow, Achilles, patellar tendonitis',
                'Treats hip and shoulder bursitis',
                'Targets root inflammation instead of masking pain with steroids',
                'In-office procedure — no surgery, no general anesthesia',
                'Minimal downtime — most patients return to activity same day',
                'Most patients feel meaningful relief within 4–8 weeks',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 text-cream-300 text-sm">
                  <CheckCircle className="w-4 h-4 text-spa-300 flex-shrink-0 mt-0.5" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Protocol */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Our Protocol"
            title="A Non-Surgical Path to Joint Recovery"
            subtitle="Most pain clinics offer cortisone injections or push surgery. We use next-generation MSC exosome therapy to initiate real tissue regeneration — from the inside out."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
            {protocol.map((p) => (
              <div key={p.step} className="bg-cream-100 p-8 border border-cream-300 hover:border-spa hover:shadow-md transition-all duration-300">
                <div className="font-serif text-5xl font-bold text-cream-400 mb-4">{p.step}</div>
                <h4 className="font-serif font-bold text-espresso mb-3">{p.title}</h4>
                <p className="text-espresso-500 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 px-6 bg-cream-100">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            eyebrow="Why We're Different"
            title="Stem Cell Therapy vs. Traditional Pain Treatments"
            subtitle="See how regenerative exosome therapy compares to the conventional approaches."
          />
          <div className="mt-8 overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-espresso text-cream-100">
                  <th className="text-left px-6 py-4 text-[11px] font-medium tracking-widest uppercase">Feature</th>
                  <th className="text-center px-6 py-4 text-[11px] font-medium tracking-widest uppercase">Cortisone / Surgery</th>
                  <th className="text-center px-6 py-4 text-[11px] font-medium tracking-widest uppercase text-spa-300">Stem Cell Therapy</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 0 ? 'bg-white' : 'bg-cream-200'}>
                    <td className="px-6 py-4 text-sm font-semibold text-espresso">{row.feature}</td>
                    <td className="px-6 py-4 text-sm text-espresso-400 text-center">{row.traditional}</td>
                    <td className="px-6 py-4 text-sm text-spa font-medium text-center">{row.regenerative}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Safety & Compliance */}
      <section className="py-16 px-6 bg-white border-y border-cream-300">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[10px] font-medium tracking-widest uppercase text-spa mb-4">Safety & Regulatory Compliance</p>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-espresso mb-5">
            Ethically Sourced. Rigorously Tested. Physician Supervised.
          </h2>
          <p className="text-espresso-500 leading-relaxed mb-5 max-w-2xl mx-auto">
            We use AATB-certified, cGMP-compliant biologics sourced from ethically screened Wharton's Jelly donors. Every vial is accompanied by a full Certificate of Analysis confirming cell viability, sterility, and potency. All treatments are performed under physician oversight with full written informed consent.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {[
              { label: 'AATB Certified', desc: 'American Association of Tissue Banks' },
              { label: 'cGMP Biologics', desc: 'Current Good Manufacturing Practice' },
              { label: 'Physician Supervised', desc: 'Medical oversight on every case' },
              { label: 'Certificate of Analysis', desc: 'Provided for every vial administered' },
            ].map((item) => (
              <div key={item.label} className="bg-cream-100 p-5 border border-cream-300 text-center">
                <p className="font-semibold text-espresso text-sm mb-1">{item.label}</p>
                <p className="text-espresso-400 text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-espresso text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-4xl font-bold text-cream-100 mb-4">Ready to Move Without Pain?</h2>
          <p className="text-cream-300 text-lg mb-10 leading-relaxed">
            Book a free evaluation with our clinical team. We'll review your imaging, joint history, and goals — and give you an honest assessment of whether regenerative stem cell therapy is the right path forward for you.
          </p>
          <Link
            href="https://advancedmedspaofficial.janeapp.com/" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-cream-100 hover:bg-white text-espresso text-[10px] tracking-widest uppercase font-medium px-10 py-4 transition-all duration-300"
          >
            Book a Free Evaluation <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      <FAQ items={faqItems} />
    </div>
  )
}
