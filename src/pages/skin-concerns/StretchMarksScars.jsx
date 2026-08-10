import { ArrowRight, CheckCircle, AlertCircle, Layers, Zap } from 'lucide-react'
import SectionHeader from '../../components/SectionHeader'
import HeroPhoto from '../../components/HeroPhoto'
import FAQ from '../../components/FAQ'
import BeforeAfter from '../../components/BeforeAfter'

const surgicalScarSections = [
  {
    title: 'C-Section Scars',
    eyebrow: 'Post-Cesarean',
    desc: 'C-section scars sit low on the abdomen along the bikini line and are among the most common surgical scars we treat. They can become raised, thickened, hyperpigmented, or tethered to the underlying tissue — causing not just a cosmetic concern but sometimes discomfort or numbness around the scar.',
    detail: 'Early intervention matters: beginning treatment once the incision is fully closed (typically 6–8 weeks post-delivery) significantly improves outcomes. Our protocols focus on breaking down fibrous scar tissue, reducing hyperpigmentation, flattening any raised edges, and restoring skin texture so the scar blends naturally with surrounding skin.',
    benefits: [
      'Softens and flattens raised or thickened scar tissue',
      'Reduces hyperpigmentation and color difference',
      'Breaks adhesions that cause tightness or pulling',
      'Improves numbness and sensation in the scar area',
      'Safe to begin 6–8 weeks post-delivery',
    ],
  },
  {
    title: 'Tummy Tuck Scars',
    eyebrow: 'Post-Abdominoplasty',
    desc: 'Abdominoplasty creates a long horizontal scar that spans hip to hip. Despite surgeons\' best efforts, this scar can thicken, spread, hyperpigment, or develop an uneven texture — particularly in areas of higher skin tension.',
    detail: 'We specialize in post-abdominoplasty scar care as a complement to the surgical result. Treatment focuses on smoothing the scar surface, reducing widening and discoloration, and improving the overall finish so the scar fades rather than remaining a visible reminder of the procedure. Lymphatic drainage is also highly recommended post-abdominoplasty to reduce swelling, improve healing, and minimize fibrous scar formation before it sets.',
    benefits: [
      'Flattens and refines the long horizontal scar line',
      'Reduces widening or spreading of the scar over time',
      'Corrects hyperpigmentation from UV exposure or healing',
      'Pairs with post-op lymphatic drainage for best results',
      'Best started at 6–8 weeks post-surgery',
    ],
  },
  {
    title: 'Breast Reduction & Augmentation Scars',
    eyebrow: 'Post-Breast Surgery',
    desc: 'Breast surgeries leave incision scars in locations that vary by technique — around the areola, beneath the breast in the inframammary fold, or along the vertical line between the two. These areas are prone to thickening and discoloration because of skin tension during healing.',
    detail: 'Our scar revision protocols treat the different incision patterns from breast surgery — anchor scars, lollipop scars, periareolar scars, and inframammary incisions. We tailor the treatment approach to the location, depth, and pigmentation behavior of each scar type, using a combination of microneedling, radiofrequency, and resurfacing to smooth and fade each line.',
    benefits: [
      'Treats all breast surgery incision patterns',
      'Reduces darkening around the areola incision line',
      'Softens raised or hypertrophic scar tissue',
      'Improves texture along the inframammary fold',
      'Non-invasive with no disruption to breast tissue',
    ],
  },
  {
    title: 'Other Surgical Scars',
    eyebrow: 'General Surgery & Body Procedures',
    desc: 'Surgical scars appear across many areas of the body — from liposuction port sites and BBL incisions to laparoscopic scars, hip replacements, shoulder surgeries, knee procedures, and more. Each location presents its own healing characteristics and aesthetic challenges.',
    detail: 'We treat surgical scars wherever they appear on the body. Scars over joints (knees, shoulders, elbows) can become thick and restricted from repeated movement during healing. Scars on high-tension areas like the chest or upper back are prone to spreading. Scars on the back, flanks, or thighs from liposuction or BBL can be subtle but bothersome. We assess each scar individually and design a protocol for its specific location, age, and tissue behavior.',
    benefits: [
      'Liposuction and BBL port site scars',
      'Laparoscopic and abdominal surgery scars',
      'Joint surgery scars — knees, shoulders, hips',
      'Back and flank scars from body procedures',
      'Any post-surgical scar on any body area',
    ],
  },
]

const treatments = [
  {
    name: 'Microneedling (Collagen Induction Therapy)',
    subtitle: 'FDA-Cleared Skin Needling',
    desc: 'Precise micro-channels created in the dermis stimulate collagen production and allow topical growth factors to penetrate deeply. Highly effective for both depressed and raised scars as well as stretch marks. A series of 4–6 sessions spaced 4 weeks apart delivers progressive improvement.',
    results: '4–6 sessions for optimal results',
    badge: 'Gold Standard',
  },
  {
    name: 'RF Skin Tightening',
    subtitle: 'Radiofrequency Collagen Stimulation',
    desc: 'Radiofrequency energy heats the deep dermis to stimulate collagen remodeling without surface damage. Excellent for softening raised surgical scars, improving stretch marks on the abdomen, thighs, and arms, and tightening surrounding skin.',
    results: 'Progressive improvement over 3–6 months',
    badge: 'No Downtime',
  },
  {
    name: 'Chemical Peels',
    subtitle: 'TCA, Lactic & Glycolic Formulas',
    desc: 'Medium-depth peels resurface the top layers of skin, blending color differences between scars and healthy tissue while promoting new cell turnover. Particularly effective for post-inflammatory hyperpigmentation and surface-level scarring.',
    results: '3–5 days downtime for medium peels',
    badge: 'Resurfacing',
  },
  {
    name: 'Medical Body Facials',
    subtitle: 'Body Treatment Protocol',
    desc: 'Our specialized body facial combines enzymatic exfoliation, brightening serums, and targeted massage to hydrate, soften, and improve the appearance of stretch marks and scars across the body — relaxing yet results-driven.',
    results: 'Immediate softening; cumulative with series',
    badge: 'Relaxing & Effective',
  },
]

const faqItems = [
  {
    q: 'When is the right time to start treating a surgical scar?',
    a: 'The incision must be fully closed and the wound in the remodeling phase before we begin treatment. For most surgical scars — including C-sections, tummy tucks, and breast surgeries — this means waiting 6–8 weeks post-surgery and receiving clearance from your surgeon. Starting treatment during the active remodeling window (before the scar fully matures at 12–18 months) produces significantly better outcomes than waiting.',
  },
  {
    q: 'Can you treat a scar that is years or even decades old?',
    a: 'Yes — mature scars can still be improved, though results are typically more gradual than with newer scars. Mature scar tissue has already completed its remodeling phase, so treatment essentially restarts the regenerative process. Microneedling and radiofrequency are particularly effective at reactivating collagen production even in older scars. Most clients see meaningful improvement even with scars that are several years old.',
  },
  {
    q: 'What types of scars respond best to treatment?',
    a: 'Atrophic scars (depressed, sunken), post-surgical scars, and hypertrophic scars (raised but contained within the wound boundary) all respond very well to our protocols. Acne scars — rolling, boxcar, and icepick types — also improve significantly. Keloid scars require individual assessment before treatment, as not all modalities are appropriate for keloids.',
  },
  {
    q: 'Is microneedling painful on surgical scars?',
    a: 'We apply topical numbing cream before every microneedling session. Most clients describe the sensation as mild pressure or a slight buzzing. Scar tissue can sometimes feel more sensitive than surrounding skin — we adjust intensity accordingly. Treated areas may appear red for 24–48 hours post-treatment, similar to a mild sunburn.',
  },
  {
    q: 'Can stretch marks be significantly improved?',
    a: 'Yes — significant improvement in color, texture, and overall appearance is achievable, though complete elimination is not currently possible non-surgically. Newer stretch marks (red or purple) respond much better than mature white or silver ones. Most clients see 40–70% improvement with a consistent treatment series.',
  },
  {
    q: 'How many sessions will I need?',
    a: 'Most scar treatment protocols consist of 4–6 microneedling sessions spaced 4 weeks apart. Chemical peels are typically done in a series of 3–4. We often combine modalities for the best possible outcome. Stretch marks on the body generally require 6–8 sessions. Your clinician will give you a personalized estimate at your evaluation based on scar type, location, and age.',
  },
  {
    q: 'Are results permanent?',
    a: 'The collagen remodeling triggered by treatment is long-lasting. Surgical scars and stretch marks that have been treated do not revert. However, the natural aging process continues, and maintenance sessions every 6–12 months help preserve and build on your initial improvements. Consistent home care — SPF, retinoids, and hydration — extends outcomes between visits.',
  },
]

export default function StretchMarksScars() {
  return (
    <div className="bg-white">
      <HeroPhoto
        eyebrow="Skin Concerns"
        title={<>Surgical<br />Scars</>}
        subtitle="Clinical scar revision for post-surgical scars, acne scars, and stretch marks — precision treatments that soften, flatten, and fade the marks surgery and life leave behind."
        gradient="from-espresso-800 via-spa-800 to-espresso-700"
        gradientDir="to-tr"
        radialPos="bottom_left"
      />

      {/* Intro */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeader
            eyebrow="What We Treat"
            title="Every Scar Has a Story. We Can Improve the Ending."
            center={true}
          />
          <p className="text-espresso-500 leading-relaxed mb-4">
            Surgical scars, acne scars, and stretch marks are among the most common cosmetic concerns — and among the most undertreated. Most people assume these are permanent. They're not. With the right clinical protocols applied at the right time, scar tissue can be significantly softened, flattened, and blended into the surrounding skin.
          </p>
          <p className="text-espresso-500 leading-relaxed mb-8">
            At Advanced Med, we specialize in scar revision for post-surgical clients — C-sections, tummy tucks, breast surgeries, and body procedures — as well as acne scarring and stretch marks. Every case is assessed individually and treated with a protocol matched to your specific scar type, location, and stage of healing.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-xl mx-auto">
            {['Surgical scars', 'C-section & tummy tuck', 'Breast surgery scars', 'Acne scars', 'Stretch marks', 'Body procedure scars'].map((tag) => (
              <div key={tag} className="flex items-center gap-2 text-espresso-500 text-sm justify-center">
                <CheckCircle className="w-4 h-4 text-spa flex-shrink-0" />
                {tag}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Surgical Scars — detailed sections */}
      <section className="py-20 px-6 bg-cream-100">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Post-Surgical Scar Revision"
            title="Surgical Scars — By Procedure"
            subtitle="Different surgeries leave different scars in different locations — each with unique healing behavior. Here's how we approach the most common ones."
          />
          <div className="space-y-8">
            {surgicalScarSections.map((section, idx) => (
              <div key={section.title} className={`grid md:grid-cols-2 gap-10 items-start p-10 border border-cream-300 ${idx % 2 === 0 ? 'bg-white' : 'bg-cream-200'}`}>
                <div>
                  <p className="text-spa text-[10px] font-medium tracking-widest uppercase mb-2">{section.eyebrow}</p>
                  <h3 className="font-serif text-2xl font-bold text-espresso mb-4">{section.title}</h3>
                  <p className="text-espresso-500 leading-relaxed mb-4">{section.desc}</p>
                  <p className="text-espresso-500 leading-relaxed">{section.detail}</p>
                </div>
                <div>
                  <p className="text-espresso font-semibold text-sm mb-4">What we address:</p>
                  <ul className="space-y-3">
                    {section.benefits.map((b, i) => (
                      <li key={i} className="flex items-start gap-3 text-espresso-500">
                        <CheckCircle className="w-5 h-5 text-spa flex-shrink-0 mt-0.5" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BeforeAfter
        heading="Surgical Scars & Skin — Real Client Results"
        items={[
          { label: 'Surgical Scar — 16 Weeks', result: 'Flattened, lightened scar following RF resurfacing and microneedling protocol.', beforeSrc: '/images/before-after/stretch-marks-2/before.jpg', afterSrc: '/images/before-after/stretch-marks-2/after.jpg', beforeAlt: 'Surgical scar before treatment', afterAlt: 'Surgical scar after 16 weeks of treatment' },
          { label: 'Acne Scars — 20 Weeks', result: 'Rolling and boxcar acne scars significantly smoother after microneedling and chemical peel combination.', beforeSrc: '/images/before-after/stretch-marks-3/before.jpg', afterSrc: '/images/before-after/stretch-marks-3/after.jpg', beforeAlt: 'Acne scars before treatment', afterAlt: 'Acne scars after 20 weeks of treatment' },
          { label: 'Stretch Marks — 12 Weeks', result: 'Color normalization and texture improvement following collagen induction therapy series.', beforeSrc: '/images/before-after/stretch-marks-1/before.jpg', afterSrc: '/images/before-after/stretch-marks-1/after.jpg', beforeAlt: 'Stretch marks before treatment', afterAlt: 'Stretch marks after 12 weeks of collagen induction therapy' },
        ]}
      />

      {/* Acne Scars */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <SectionHeader eyebrow="Skin Texture & Scarring" title="Acne Scars" center={false} />
              <p className="text-espresso-500 leading-relaxed mb-4">
                Acne scars form when a breakout penetrates deep into the skin and damages the tissue beneath. As the acne clears, the body attempts to repair the damage — but the collagen produced doesn't always perfectly match the surrounding skin, leaving textural irregularities that persist long after the acne itself is gone.
              </p>
              <p className="text-espresso-500 leading-relaxed mb-6">
                There are several types of acne scarring, each with different treatment approaches. Rolling scars have smooth, wave-like edges and respond well to microneedling. Boxcar scars have sharp vertical edges and benefit from collagen induction combined with resurfacing. Icepick scars are deep and narrow and typically require deeper treatment with TCA peels or RF microneedling. Hypertrophic scars are raised above the skin surface and respond to RF remodeling.
              </p>
              <ul className="space-y-3">
                {[
                  'Rolling scars — broad depressions with sloped edges',
                  'Boxcar scars — sharp-edged oval or round depressions',
                  'Icepick scars — deep, narrow puncture-like scars',
                  'Hypertrophic scars — raised, firm post-acne tissue',
                  'Post-inflammatory hyperpigmentation (PIH)',
                ].map((b, i) => (
                  <li key={i} className="flex items-start gap-3 text-espresso-500">
                    <CheckCircle className="w-5 h-5 text-spa flex-shrink-0 mt-0.5" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-cream-100 p-10 border border-cream-300">
              <h3 className="font-serif text-xl font-bold text-espresso mb-6">Our Acne Scar Protocol</h3>
              <div className="space-y-5">
                {[
                  { step: '1', title: 'Assessment', desc: 'We map your scar types and depths to determine the right combination of treatments for your specific pattern.' },
                  { step: '2', title: 'Microneedling Series', desc: 'Collagen induction therapy targets the dermis, stimulating new collagen to fill in depressions and improve skin texture from within.' },
                  { step: '3', title: 'Chemical Peels', desc: 'Strategic resurfacing removes discolored surface layers, reduces PIH, and smooths shallow textural irregularities.' },
                  { step: '4', title: 'RF Microneedling', desc: 'For deeper scars, radiofrequency energy combined with microneedling delivers remodeling signals deeper into the dermis for more significant improvement.' },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="w-8 h-8 bg-espresso text-cream-100 flex items-center justify-center font-bold text-sm flex-shrink-0">{item.step}</div>
                    <div>
                      <h4 className="font-semibold text-espresso mb-1 text-sm">{item.title}</h4>
                      <p className="text-espresso-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stretch Marks */}
      <section className="py-20 px-6 bg-cream-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="bg-espresso p-10 text-cream-200 order-2 md:order-1">
              <h3 className="font-serif text-2xl font-bold text-spa-300 mb-6">New vs. Mature Stretch Marks</h3>
              <p className="text-cream-300 leading-relaxed mb-4">
                Red or purple stretch marks are newly formed — the blood vessels are still active in the tissue, making this the optimal window for treatment. These respond dramatically to microneedling and RF therapy, with color normalization and texture improvement often visible within 4–6 weeks.
              </p>
              <p className="text-cream-300 leading-relaxed mb-6">
                White or silver stretch marks are mature — the vessels have faded and the tissue has fully scarred. These still improve significantly with treatment, but require more sessions and realistic expectations. Collagen induction can narrow and flatten the streaks, and resurfacing can reduce the color contrast, but they will not return to fully unmarked skin.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {['Pregnancy', 'Rapid weight gain', 'Puberty growth spurts', 'Muscle building', 'Weight loss skin', 'Post-surgery skin'].map((tag) => (
                  <span key={tag} className="text-xs bg-white/10 text-cream-300 px-3 py-2 text-center">{tag}</span>
                ))}
              </div>
            </div>
            <div className="order-1 md:order-2">
              <SectionHeader eyebrow="Skin & Body" title="Stretch Marks" center={false} />
              <p className="text-espresso-500 leading-relaxed mb-4">
                Stretch marks (striae) form when the skin is pulled beyond its elastic capacity too quickly — most commonly during pregnancy, puberty, rapid weight changes, or intense muscle growth. The dermis tears internally, leaving streaks of discolored, textured skin that resist improvement from creams and moisturizers alone.
              </p>
              <p className="text-espresso-500 leading-relaxed mb-6">
                Clinical treatment works differently than topical products because it reaches the dermal layer where stretch marks actually form. Microneedling, RF energy, and chemical resurfacing all stimulate the body's own collagen repair response in the affected tissue — producing real structural improvement, not just surface hydration.
              </p>
              <ul className="space-y-3">
                {[
                  'Abdomen — pregnancy, weight changes',
                  'Thighs, hips, and buttocks',
                  'Breasts — pregnancy and augmentation',
                  'Upper arms and shoulders',
                  'Back and flanks',
                  'Anywhere rapid skin stretching occurred',
                ].map((b, i) => (
                  <li key={i} className="flex items-start gap-3 text-espresso-500">
                    <CheckCircle className="w-5 h-5 text-spa flex-shrink-0 mt-0.5" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Options */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Our Protocols"
            title="Treatment Options"
            subtitle="All treatments are performed by licensed professionals. We frequently combine modalities for the most comprehensive outcome."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            {treatments.map((t) => (
              <div key={t.name} className="bg-cream-100 border border-cream-300 p-6 hover:shadow-md transition hover:border-spa">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-serif text-xl font-bold text-espresso">{t.name}</h3>
                  <span className="bg-cream-200 text-espresso-600 text-[10px] font-bold px-3 py-1 tracking-widest uppercase border border-cream-300 flex-shrink-0">{t.badge}</span>
                </div>
                <p className="text-spa text-[10px] font-medium uppercase tracking-wide mb-3">{t.subtitle}</p>
                <p className="text-espresso-500 text-sm leading-relaxed mb-4">{t.desc}</p>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-spa flex-shrink-0" />
                  <span className="text-espresso-500 text-sm font-medium">{t.results}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-6 bg-cream-100">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            eyebrow="Honest Timeline"
            title="Realistic Expectations"
            subtitle="We believe in transparency. Scars and stretch marks improve significantly with treatment — results take time as your skin rebuilds from within."
          />
          <div className="mt-8 space-y-4">
            {[
              { phase: 'Months 1–2', note: 'Initial improvements in texture and color begin to emerge. Inflammation subsides; skin starts producing new collagen in response to treatment.' },
              { phase: 'Months 3–4', note: 'Visible reduction in scar depth and stretch mark width. Skin tone in the treated area becomes more uniform and blends better with surrounding skin.' },
              { phase: 'Months 5–6', note: 'Collagen remodeling matures. Most clients see 40–70% improvement in texture and appearance. Surgical scars and stretch marks become significantly less noticeable.' },
              { phase: 'Ongoing', note: 'Maintenance sessions every 3–6 months preserve results. Combined home care with retinoids and peptides extends and deepens outcomes between visits.' },
            ].map((row) => (
              <div key={row.phase} className="flex gap-4 items-start bg-white border border-cream-300 p-5 shadow-sm">
                <span className="text-espresso font-bold text-sm w-28 flex-shrink-0">{row.phase}</span>
                <p className="text-espresso-500 text-sm leading-relaxed">{row.note}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-cream-200 border border-cream-300 p-5 flex gap-4 items-start">
            <AlertCircle className="w-5 h-5 text-espresso-500 flex-shrink-0 mt-0.5" />
            <p className="text-espresso-500 text-sm leading-relaxed">
              <strong className="text-espresso">Important:</strong> Results vary based on scar type, age, depth, skin tone, and individual healing response. We will provide an honest, personalized assessment at your evaluation — including what improvements are realistic for your specific situation.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-espresso text-cream-200 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-4xl font-bold mb-4">Reclaim Your Confidence</h2>
          <p className="text-cream-300 text-lg mb-8 leading-relaxed">
            Whether it's a C-section scar, a tummy tuck line, acne scarring, or stretch marks — we'll create a treatment plan designed around your body, your skin, and your goals.
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
