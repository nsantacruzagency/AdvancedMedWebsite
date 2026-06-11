import { CheckCircle, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionHeader from '../../components/SectionHeader'
import HeroPhoto from '../../components/HeroPhoto'
import FAQ from '../../components/FAQ'

const conditions = [
  { name: 'Osteoarthritis', desc: 'Degenerative joint disease causing cartilage breakdown, bone-on-bone friction, pain, stiffness, and reduced range of motion in the knees, hips, shoulders, and hands.' },
  { name: 'Knee Pain & Cartilage Damage', desc: 'Cartilage has no direct blood supply and cannot self-repair. Stem cell therapy introduces regenerative cells directly into the joint to promote new cartilage formation and reduce inflammation.' },
  { name: 'Hip Joint Degeneration', desc: 'Progressive loss of hip cartilage leads to chronic pain, limited mobility, and difficulty with basic activities. Stem cells target the inflamed joint environment to slow degeneration and restore function.' },
  { name: 'Shoulder Injuries', desc: 'Rotator cuff tears, labral damage, and glenohumeral arthritis respond well to regenerative injections — reducing pain and improving strength without surgery.' },
  { name: 'Spine & Disc Pain', desc: 'Degenerative disc disease and facet arthropathy cause chronic back pain. Mesenchymal stem cells have demonstrated the ability to reduce disc inflammation and support structural repair.' },
  { name: 'Ankle & Foot Joints', desc: 'Chronic ankle instability, talus cartilage defects, and subtalar arthritis are difficult to treat surgically. Regenerative injections offer a non-surgical path to pain reduction and improved stability.' },
]

const mechanism = [
  {
    title: 'Anti-Inflammatory Signaling',
    desc: 'Mesenchymal stem cells (MSCs) release cytokines and growth factors that actively suppress the chronic inflammatory environment inside an arthritic joint — breaking the cycle of pain and tissue damage.',
  },
  {
    title: 'Cartilage Regeneration',
    desc: 'MSCs can differentiate into chondrocytes — the cells responsible for producing and maintaining cartilage. When injected into a damaged joint, they migrate to areas of cartilage loss and begin rebuilding the extracellular matrix.',
  },
  {
    title: 'Paracrine Effect',
    desc: 'Even beyond direct differentiation, stem cells communicate with surrounding native cells through secreted molecules (the "secretome"), stimulating the joint\'s own repair mechanisms and recruiting other regenerative cells to the site.',
  },
  {
    title: 'Synovial Environment Restoration',
    desc: 'The synovial membrane lining the joint produces lubricating fluid. Chronic arthritis damages this membrane. Stem cell therapy helps restore healthy synovial tissue and fluid production, reducing friction and pain.',
  },
]

const cellSources = [
  {
    source: 'Bone Marrow Aspirate Concentrate (BMAC)',
    desc: 'Harvested from the patient\'s own iliac crest (hip bone), BMAC contains a concentrated mixture of mesenchymal stem cells, growth factors, and platelets. Autologous (from your own body) — no rejection risk.',
    pros: ['Autologous — zero rejection risk', 'Rich in growth factors and platelets', 'Well-established clinical record', 'Single-session harvest and injection'],
  },
  {
    source: 'Wharton\'s Jelly (Umbilical Cord MSCs)',
    desc: 'Mesenchymal stem cells derived from the Wharton\'s jelly of donated umbilical cords. Allogenic (donor-sourced), these are young, highly potent cells with superior proliferative capacity compared to adult autologous sources.',
    pros: ['High cell potency and proliferation rate', 'Immune-privileged — no HLA matching required', 'No harvest procedure needed', 'Consistent, standardized cell quality'],
  },
  {
    source: 'Adipose-Derived Stem Cells (SVF)',
    desc: 'Extracted from the patient\'s own fat tissue via a minimally invasive aspiration. The stromal vascular fraction (SVF) contains a high density of mesenchymal stem cells, pericytes, and growth factors with strong anti-inflammatory properties.',
    pros: ['Autologous — no rejection risk', 'High MSC yield from fat tissue', 'Minimally invasive harvest', 'Strong anti-inflammatory profile'],
  },
]

const protocol = [
  {
    step: '01',
    title: 'Comprehensive Evaluation',
    desc: 'Your clinician reviews your imaging (X-ray, MRI), joint history, pain patterns, activity level, and overall health. We determine which joints are appropriate candidates for regenerative therapy and which cell source and protocol best match your case.',
  },
  {
    step: '02',
    title: 'Cell Source Preparation',
    desc: 'Depending on your protocol, cells are either harvested from your own body (BMAC or adipose) or sourced from a licensed, FDA-regulated tissue bank (Wharton\'s Jelly MSCs). All processing follows strict sterility and viability standards.',
  },
  {
    step: '03',
    title: 'Image-Guided Injection',
    desc: 'The stem cell preparation is injected directly into the target joint under ultrasound or fluoroscopic guidance — ensuring precise placement at the site of cartilage damage or inflammation. This is an outpatient procedure.',
  },
  {
    step: '04',
    title: 'Post-Injection Protocol',
    desc: 'The days and weeks following injection are critical. We provide a structured post-injection protocol covering activity modification, anti-inflammatory nutrition, and any supporting therapies (PRP follow-up, physical therapy recommendations) to maximize the regenerative environment.',
  },
  {
    step: '05',
    title: 'Progressive Monitoring',
    desc: 'Regenerative results develop over 3–6 months as cells engraft and the repair process unfolds. We schedule follow-up evaluations to track your progress and determine whether additional treatments would accelerate or maintain your results.',
  },
]

const science = [
  {
    title: 'MSCs and Osteoarthritis — Clinical Evidence',
    body: 'Multiple published clinical trials have demonstrated that intra-articular injections of mesenchymal stem cells significantly reduce pain scores (VAS, WOMAC) and improve functional outcomes in knee osteoarthritis compared to hyaluronic acid and corticosteroid controls. Studies show MRI-confirmed cartilage volume preservation and in some cases measurable new cartilage formation at 12–24 months post-injection.',
  },
  {
    title: 'The Secretome: How MSCs Communicate',
    body: 'MSCs do not act alone. The majority of their therapeutic effect occurs through paracrine signaling — the release of bioactive molecules including TGF-β, IGF-1, HGF, VEGF, and IL-1 receptor antagonists. These molecules suppress pro-inflammatory cytokines (TNF-α, IL-1β, IL-6) that drive cartilage breakdown, while simultaneously promoting tissue repair and angiogenesis.',
  },
  {
    title: 'Immune Privilege of Allogeneic MSCs',
    body: 'Unlike organ transplants, mesenchymal stem cells express low levels of MHC class II antigens and lack the co-stimulatory molecules required to trigger a T-cell immune response. This "immune privilege" allows allogeneic (donor) MSCs — including Wharton\'s Jelly-derived cells — to be administered without HLA matching or immunosuppression, while still exerting their full regenerative effect.',
  },
  {
    title: 'Platelet-Rich Plasma (PRP) as an Adjunct',
    body: 'PRP is frequently used in conjunction with stem cell therapy to amplify results. The concentrated growth factors in PRP (PDGF, TGF-β, EGF, VEGF) create a bioactive scaffold that supports MSC survival, migration, and differentiation within the joint. Sequential PRP injections at 4–8 weeks post-stem cell treatment have been shown to extend and deepen the regenerative response.',
  },
]

const faqItems = [
  {
    q: 'How is stem cell therapy different from cortisone injections?',
    a: 'Cortisone injections are anti-inflammatory — they temporarily suppress pain and swelling but do not address the underlying structural damage. With repeated use, corticosteroids have been shown to accelerate cartilage breakdown. Stem cell therapy is regenerative — it aims to repair damaged tissue, reduce inflammation through cellular mechanisms, and slow or reverse the degenerative process rather than simply masking symptoms.',
  },
  {
    q: 'Am I a candidate for joint stem cell therapy?',
    a: 'Ideal candidates have mild-to-moderate joint degeneration with intact joint space visible on imaging, chronic pain that has not fully resolved with conservative care (physical therapy, NSAIDs, injections), and no active joint infection or inflammatory arthritis requiring systemic treatment. Severely bone-on-bone joints may have limited regenerative capacity and may be better served by surgical consultation. We evaluate each case individually.',
  },
  {
    q: 'How long does it take to see results?',
    a: 'Stem cell therapy is not an immediate pain blocker. Most patients notice initial improvements in inflammation and comfort within 4–8 weeks. The deeper regenerative effects — cartilage remodeling, structural repair — continue to develop over 3–6 months. Full results are typically assessed at 6 months post-injection, with many patients continuing to improve through 12 months.',
  },
  {
    q: 'How many treatments are needed?',
    a: 'Many patients see significant improvement from a single treatment series. For moderate-to-advanced degeneration, a second injection — or a PRP follow-up at 6–8 weeks — may be recommended to deepen and extend results. Your protocol is designed individually at your evaluation based on joint severity, your cell source, and your response to the initial treatment.',
  },
  {
    q: 'Is there any downtime after the procedure?',
    a: 'Stem cell joint injections are outpatient procedures with minimal downtime. Most patients are advised to rest the treated joint for 24–48 hours and avoid high-impact activity for 2–4 weeks to allow the cells to engraft. Normal daily activities including light walking can typically resume within 1–2 days. A structured post-injection protocol guides your activity and supports optimal healing.',
  },
  {
    q: 'What is the difference between BMAC, adipose-derived cells, and Wharton\'s Jelly MSCs?',
    a: 'BMAC and adipose SVF are autologous — harvested from your own body, eliminating rejection risk. They contain your own MSCs along with platelets and growth factors. Wharton\'s Jelly MSCs are allogeneic (donor-sourced) — they come from younger, more potent cells with higher proliferative capacity and do not require a harvest procedure. The best choice depends on your joint severity, age, and overall health. We discuss all options at your evaluation.',
  },
]

export default function JointPainStemCells() {
  return (
    <div className="bg-white">
      <HeroPhoto
        eyebrow="Stem Cells & Wellness"
        title={<>Joint Pain<br />Stem Cell Therapy</>}
        subtitle="Regenerative medicine for chronic joint pain, cartilage damage, and osteoarthritis — using the body's own repair mechanisms to restore function without surgery."
        gradient="from-espresso-800 via-espresso-700 to-spa-700"
      />

      {/* Intro */}
      <section className="py-20 px-6 bg-cream-100">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[10px] font-medium tracking-widest uppercase text-spa mb-4">Regenerative Medicine</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-espresso mb-6 leading-tight">
            Joints wear down. The question is whether they can be rebuilt.
          </h2>
          <p className="text-espresso-500 text-lg leading-relaxed mb-5">
            Conventional joint care manages symptoms. Regenerative medicine targets the source — cartilage loss, chronic inflammation, and synovial damage — using mesenchymal stem cells to trigger the body's own repair processes.
          </p>
          <p className="text-espresso-500 text-lg leading-relaxed">
            Stem cell therapy does not eliminate all joint damage. What it does is create a biological environment that promotes healing, reduces inflammatory destruction, and in many cases, preserves or rebuilds cartilage tissue that conventional treatments cannot touch.
          </p>
        </div>
      </section>

      {/* Conditions */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="What We Treat"
            title="Conditions Addressed with Stem Cell Therapy"
            subtitle="Regenerative joint injections are appropriate for a range of degenerative and inflammatory conditions affecting cartilage, synovial tissue, and joint structure."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            {conditions.map((c) => (
              <div key={c.name} className="bg-cream-100 p-6 border border-cream-300 hover:border-spa hover:shadow-md transition-all duration-300">
                <h4 className="font-serif font-bold text-espresso text-lg mb-3">{c.name}</h4>
                <p className="text-espresso-500 text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-6 bg-espresso">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="The Science"
            title="How Stem Cells Repair Joints"
            subtitle="Mesenchymal stem cells work through four distinct biological mechanisms — each targeting a different aspect of joint degeneration."
            light={true}
          />
          <div className="grid md:grid-cols-2 gap-8 mt-4">
            {mechanism.map((m) => (
              <div key={m.title} className="bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-all duration-300">
                <h4 className="font-serif font-bold text-cream-100 text-xl mb-4">{m.title}</h4>
                <p className="text-cream-300 leading-relaxed text-sm">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cell Sources */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Cell Sources"
            title="Types of Stem Cells Used"
            subtitle="Not all stem cell preparations are the same. We use three clinically validated sources — each with distinct advantages depending on your case."
          />
          <div className="grid md:grid-cols-3 gap-8 mt-4">
            {cellSources.map((cs) => (
              <div key={cs.source} className="bg-cream-100 border border-cream-300 p-8 hover:border-spa hover:shadow-lg transition-all duration-300">
                <h4 className="font-serif font-bold text-espresso text-lg mb-3">{cs.source}</h4>
                <p className="text-espresso-500 text-sm leading-relaxed mb-5">{cs.desc}</p>
                <ul className="space-y-2">
                  {cs.pros.map((p, i) => (
                    <li key={i} className="flex items-start gap-2 text-espresso-500 text-sm">
                      <CheckCircle className="w-4 h-4 text-spa flex-shrink-0 mt-0.5" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Protocol */}
      <section className="py-24 px-6 bg-cream-100">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Your Treatment Journey"
            title="The Treatment Protocol"
            subtitle="From evaluation to follow-up — what the stem cell joint therapy process looks like at Advanced Med."
          />
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 mt-4">
            {protocol.map((p) => (
              <div key={p.step} className="bg-white p-6 border border-cream-300 hover:border-spa hover:shadow-md transition-all duration-300">
                <div className="font-serif text-4xl font-bold text-cream-400 mb-4">{p.step}</div>
                <h4 className="font-serif font-bold text-espresso mb-3">{p.title}</h4>
                <p className="text-espresso-500 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deep Science */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Clinical Research"
            title="The Evidence Behind Regenerative Joint Care"
            subtitle="Stem cell therapy for joints is an active, growing field with a substantial body of clinical literature."
          />
          <div className="grid md:grid-cols-2 gap-8 mt-4">
            {science.map((s) => (
              <div key={s.title} className="bg-cream-100 p-8 border border-cream-300 hover:border-spa transition-all duration-300">
                <h4 className="font-serif font-bold text-espresso text-lg mb-4">{s.title}</h4>
                <p className="text-espresso-500 leading-relaxed text-sm">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Post-Injection Info */}
      <section className="py-16 px-6 bg-cream-200 border-y border-cream-300">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-espresso mb-6 text-center">Post-Injection Protocol</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { phase: 'Days 1–3', title: 'Rest & Protection', items: ['Avoid weight-bearing stress on the injected joint', 'Ice intermittently to manage any procedure-related swelling', 'No NSAIDs — anti-inflammatory drugs suppress the cellular response', 'Light walking permitted as tolerated'] },
              { phase: 'Weeks 1–4', title: 'Gentle Reactivation', items: ['Begin range-of-motion exercises as recommended', 'Avoid high-impact activity (running, heavy lifting, pivoting)', 'Anti-inflammatory diet strongly encouraged', 'PRP follow-up injection may be scheduled at week 4–6'] },
              { phase: 'Months 2–6', title: 'Progressive Loading', items: ['Gradual return to normal activity as pain allows', 'Physical therapy or guided exercise to rebuild joint support', 'Progress evaluation to assess cellular response', 'Most patients experience peak improvement at 4–6 months'] },
            ].map((phase) => (
              <div key={phase.phase} className="bg-white p-6 border border-cream-300">
                <p className="text-spa text-[10px] font-bold tracking-widest uppercase mb-1">{phase.phase}</p>
                <h4 className="font-serif font-bold text-espresso mb-4">{phase.title}</h4>
                <ul className="space-y-2">
                  {phase.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-espresso-500 text-sm">
                      <CheckCircle className="w-4 h-4 text-spa flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ items={faqItems} />

      {/* CTA */}
      <section className="py-24 px-6 bg-espresso text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-4xl font-bold text-cream-100 mb-4">Is Regenerative Joint Therapy Right for You?</h2>
          <p className="text-cream-300 text-lg mb-10 leading-relaxed">
            Book a free evaluation with our clinical team. We'll review your imaging, joint history, and goals — and give you an honest assessment of whether stem cell therapy is the right path forward.
          </p>
          <Link
            to="/book"
            className="inline-flex items-center gap-2 bg-cream-100 hover:bg-white text-espresso text-[10px] tracking-widest uppercase font-medium px-10 py-4 transition-all duration-300"
          >
            Book a Free Evaluation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
