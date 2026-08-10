import { ArrowRight, CheckCircle } from 'lucide-react'
import SectionHeader from '../../components/SectionHeader'
import HeroPhoto from '../../components/HeroPhoto'
import BeforeAfter from '../../components/BeforeAfter'
import FAQ from '../../components/FAQ'

const faqItems = [
  {
    q: 'When can I start postpartum body treatments?',
    a: 'Most non-invasive treatments — including lymphatic drainage and infrared therapy — can begin as early as 6 weeks postpartum with vaginal delivery, or 8–12 weeks after a C-section, once cleared by your OB. Treatments that address diastasis recti should wait until the connective tissue has had adequate initial healing time. Your clinician will review your birth history and current recovery status at your evaluation before recommending a protocol.',
  },
  {
    q: 'What is diastasis recti and can it be treated without surgery?',
    a: 'Diastasis recti is a separation of the two vertical columns of the rectus abdominis (the "six-pack" muscles) at the linea alba — the connective tissue midline. It occurs in up to 60% of pregnancies and often persists postpartum. Mild to moderate diastasis can be significantly improved without surgery through targeted core rehabilitation, EMS (electrical muscle stimulation) to re-engage deep abdominal muscles, radiofrequency to tighten the overstretched connective tissue, and lymphatic drainage to reduce residual swelling. Severe cases may require surgical repair (abdominoplasty), which we can complement with pre- and post-op protocols.',
  },
  {
    q: 'Will these treatments help with C-section scar tissue?',
    a: 'Yes. Manual lymphatic drainage significantly reduces C-section scar swelling and helps prevent thick, adhered scar tissue from forming. Radiofrequency therapy can be applied around (and in some cases over) healed C-section scars to improve skin texture and tissue mobility. We recommend beginning lymphatic drainage as soon as you are cleared for treatment to minimize fibrosis and support optimal healing.',
  },
  {
    q: 'How is postpartum weight loss different from regular weight loss?',
    a: 'Postpartum bodies have unique challenges: hormonal shifts (especially declining estrogen and prolactin changes during breastfeeding), weakened core musculature, loosened connective tissue, lymphatic congestion from pregnancy-related fluid retention, and often chronic sleep deprivation that drives cortisol and insulin dysregulation. Our postpartum protocols address these root causes rather than treating it as standard weight loss — because the physiology is genuinely different.',
  },
  {
    q: 'Is it safe to do these treatments while breastfeeding?',
    a: 'Most treatments — including lymphatic drainage, infrared sauna, radiofrequency skin tightening, and non-invasive body contouring — are safe while breastfeeding. We avoid treatments that involve injectable compounds or aggressive detox protocols that could affect milk composition. Your clinician will review your breastfeeding status and design a protocol that is safe for both you and your baby.',
  },
  {
    q: 'How many sessions will I need?',
    a: 'Most postpartum clients begin with a series of 8–12 sessions over 8–12 weeks, combining two to three modalities per visit. Results vary based on how far postpartum you are, severity of diastasis recti, and your body goals. Your clinician will create a personalized timeline at your initial evaluation.',
  },
]

export default function PostpartumWeightLoss() {
  return (
    <div className="bg-white">
      <HeroPhoto
        eyebrow="Postpartum Recovery"
        title={<>Postpartum<br />Weight Loss</>}
        subtitle="Your body did something extraordinary. Now let's restore it — with science-backed treatments designed specifically for the postpartum physiology."
        gradient="from-spa-800 via-espresso-700 to-espresso-800"
        gradientDir="to-br"
        radialPos="top_right"
      />

      {/* Intro */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeader
            eyebrow="A Different Kind of Weight Loss"
            title="Designed for the Postpartum Body"
            center={true}
          />
          <p className="text-espresso-500 leading-relaxed mb-4">
            Pregnancy reshapes your body in ways that go far deeper than the scale. Hormonal shifts, loosened connective tissue, a weakened core, lymphatic congestion from months of redistributed fluid — these are not problems diet and exercise alone can solve.
          </p>
          <p className="text-espresso-500 leading-relaxed mb-4">
            At Advanced Med, our postpartum weight loss protocols are built around what's actually happening in your body after birth. We combine targeted fat reduction, skin tightening, core rehabilitation, and lymphatic support to restore your body with the care and specificity it deserves.
          </p>
          <p className="text-espresso-500 leading-relaxed mb-8">
            Whether you're 6 weeks postpartum or 2 years out, it's never too early or too late to start healing from the inside out.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-xl mx-auto">
            {[
              'Non-invasive & safe postpartum',
              'Diastasis recti support',
              'C-section scar therapy',
              'Lymphatic drainage',
              'Hormonal reset',
              'Skin tightening',
            ].map((tag) => (
              <div key={tag} className="flex items-center gap-2 text-espresso-500 text-sm justify-center">
                <CheckCircle className="w-4 h-4 text-spa flex-shrink-0" />
                {tag}
              </div>
            ))}
          </div>
        </div>
      </section>

      <BeforeAfter
        heading="Postpartum Weight Loss — Real Client Results"
        items={[
          { label: 'Postpartum — 10 Weeks', result: 'Significant reduction in abdominal circumference and improved skin tone following a 10-week postpartum protocol combining lymphatic drainage, infrared therapy, and targeted body contouring.', beforeSrc: '/images/before-after/postpartum-fat-loss-1/before.jpg', afterSrc: '/images/before-after/postpartum-fat-loss-1/after.jpg', beforeAlt: 'Before postpartum treatment', afterAlt: 'After postpartum treatment' },
          { label: 'Postpartum — 8 Weeks', result: 'Visible improvement in abdominal laxity and contour. Core reconnection protocol combined with radiofrequency skin tightening over 8 weeks.', beforeSrc: '/images/before-after/postpartum-fat-loss-2/before.jpg', afterSrc: '/images/before-after/postpartum-fat-loss-2/after.jpg', beforeAlt: 'Before postpartum treatment', afterAlt: 'After postpartum treatment' },
          { label: 'Postpartum — 12 Weeks', result: 'Full postpartum restoration protocol: lymphatic drainage, EMS core rehabilitation, fat freezing, and hormone optimization. 12-week result.', beforeSrc: '/images/before-after/postpartum-fat-loss-3/before.jpg', afterSrc: '/images/before-after/postpartum-fat-loss-3/after.jpg', beforeAlt: 'Before postpartum treatment', afterAlt: 'After postpartum treatment' },
        ]}
      />

      {/* Diastasis Recti */}
      <section className="py-24 px-6 bg-cream-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <SectionHeader eyebrow="Core Restoration" title="Diastasis Recti: What It Is and How We Treat It" center={false} />
              <p className="text-espresso-500 leading-relaxed mb-4">
                Diastasis recti is a separation of the rectus abdominis — the two parallel muscle columns that form the front wall of your abdomen — at the linea alba, the connective tissue running down the midline. During pregnancy, the expanding uterus places enormous sustained pressure on this tissue, stretching and thinning it to allow your belly to grow.
              </p>
              <p className="text-espresso-500 leading-relaxed mb-4">
                After delivery, this connective tissue often fails to fully rebound, leaving a gap between the muscles that ranges from a finger-width to several inches. The result is a weakened core that can't properly support the spine, a visible "pooch" that persists despite weight loss, lower back pain, poor posture, and sometimes a doming or coning of the abdomen when you sit up or engage your core.
              </p>
              <p className="text-espresso-500 leading-relaxed mb-6">
                Standard crunches and sit-ups — the instinctive fix — can actually worsen diastasis by increasing intra-abdominal pressure. Our approach is fundamentally different: we work with the deep stabilizing muscles and the connective tissue itself.
              </p>
              <ul className="space-y-3">
                {[
                  'Affects up to 60% of postpartum women',
                  'Causes persistent belly "pooch" despite weight loss',
                  'Leads to lower back pain and core instability',
                  'Traditional crunches can make it worse',
                  'Mild to moderate cases respond well to non-surgical treatment',
                ].map((b, i) => (
                  <li key={i} className="flex items-start gap-3 text-espresso-500">
                    <CheckCircle className="w-5 h-5 text-spa flex-shrink-0 mt-0.5" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-5">
              <div className="bg-espresso p-8 text-cream-200">
                <h3 className="font-serif text-xl font-bold text-spa-300 mb-4">How We Treat It</h3>
                <p className="text-cream-300 text-sm leading-relaxed mb-4">
                  Our diastasis recti protocol combines four synergistic modalities to re-engage the deep core, tighten the linea alba, reduce surrounding inflammation, and visibly flatten and firm the abdominal wall.
                </p>
                <div className="space-y-4 mt-4">
                  {[
                    { name: 'EMS Core Rehabilitation', desc: 'Electrical muscle stimulation precisely targets the transverse abdominis and deep stabilizers — the muscles responsible for closing the gap — without the harmful intra-abdominal pressure of conventional exercises.' },
                    { name: 'Radiofrequency Skin Tightening', desc: 'Controlled RF energy penetrates the linea alba and surrounding fascia, stimulating collagen remodeling and tightening the stretched connective tissue from within.' },
                    { name: 'Lymphatic Drainage', desc: 'Reduces residual swelling and fluid retention in the abdominal wall, improving tissue mobility and accelerating the healing environment for connective tissue repair.' },
                    { name: 'Infrared Therapy', desc: 'Deep tissue heat promotes circulation and cellular repair in the abdominal region, supporting faster remodeling of the weakened connective tissue and surrounding musculature.' },
                  ].map((item) => (
                    <div key={item.name} className="border-t border-white/10 pt-4">
                      <h4 className="font-serif font-bold text-cream-200 mb-1">{item.name}</h4>
                      <p className="text-cream-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Postpartum Protocol */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Our Approach"
            title="The Postpartum Restoration Protocol"
            subtitle="A comprehensive, multi-modal program designed around your postpartum body — not a generic weight loss plan."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Lymphatic Reset', desc: 'Pregnancy causes significant lymphatic congestion that lingers for months postpartum. Manual and mechanical lymphatic drainage reduces puffiness, improves circulation, and creates the physiological environment your body needs for effective fat metabolism and tissue repair.' },
              { step: '02', title: 'Core Reconnection', desc: 'EMS therapy and targeted rehabilitation re-engage the deep stabilizing muscles of the core — including the transverse abdominis, pelvic floor, and multifidus — to close diastasis, restore postural support, and rebuild a functional abdominal wall.' },
              { step: '03', title: 'Skin & Connective Tissue Tightening', desc: 'Radiofrequency energy and specialized body contouring technologies address the loose skin and overstretched connective tissue that form after pregnancy — tightening from within by stimulating collagen and elastin production.' },
              { step: '04', title: 'Hormone Rebalancing', desc: 'Postpartum hormonal shifts — especially in estrogen, cortisol, and thyroid — directly affect fat storage and energy. Our clinical team evaluates your hormonal profile and creates a targeted rebalancing protocol to restore your metabolic baseline.' },
              { step: '05', title: 'Fat Reduction', desc: 'Once the foundational layers are addressed, targeted fat reduction using Cryo Contour (fat freezing) precisely eliminates stubborn deposits in the abdomen, flanks, and thighs that resist diet and exercise during the postpartum period.' },
              { step: '06', title: 'Ongoing Support', desc: 'Postpartum recovery isn\'t linear. Your clinician monitors progress at every session and adjusts your protocol based on how your body is responding — ensuring treatments stay safe, effective, and synergistic with your recovery.' },
            ].map((item) => (
              <div key={item.step} className="bg-cream-100 p-8 border border-cream-300 hover:border-spa hover:shadow-lg transition-all duration-300">
                <div className="font-serif text-5xl font-bold text-cream-400 mb-4">{item.step}</div>
                <h4 className="font-serif font-bold text-xl text-espresso mb-3">{item.title}</h4>
                <p className="text-espresso-500 leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-espresso text-cream-200 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-4xl font-bold mb-4">You Deserve to Feel Like Yourself Again</h2>
          <p className="text-cream-300 text-lg mb-10 leading-relaxed">
            Schedule your postpartum evaluation today. Our clinical team will assess where your body is in its recovery and design a safe, personalized protocol to restore your strength, shape, and confidence.
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
