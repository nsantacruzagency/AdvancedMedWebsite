import { CheckCircle, ArrowRight } from 'lucide-react'
import SectionHeader from '../../components/SectionHeader'
import HeroPhoto from '../../components/HeroPhoto'
import FAQ from '../../components/FAQ'
import BeforeAfter from '../../components/BeforeAfter'

const detoxBenefits = [
  'Accelerates metabolic rate and calorie burning',
  'Flushes toxins that disrupt fat metabolism',
  'Reduces bloating and improves digestion',
  'Enhances lymphatic circulation and drainage',
  'Balances gut microbiome for optimal absorption',
]

const faqItems = [
  {
    q: 'What is non-surgical lipo?',
    a: 'Non-surgical lipo refers to medical and aesthetic treatments that permanently destroy fat cells without surgery or downtime. At Advanced Med, this centers on Cryo Contour (fat freezing) — the same mechanism as surgical liposuction but achieved through controlled cooling rather than a cannula. We combine this with lymphatic drainage and metabolic support for comprehensive, lasting results.',
  },
  {
    q: 'How does fat freezing (Cryo Contour) work?',
    a: 'Cryo Contour uses a specialized applicator to deliver precisely controlled cooling to targeted fat deposits. Fat cells are uniquely vulnerable to cold — they crystallize and undergo natural cell death (apoptosis) while surrounding skin, nerves, and muscle remain completely unaffected. Your body then gradually flushes out the destroyed fat cells over 1–3 months through the lymphatic system.',
  },
  {
    q: 'How is this different from actual liposuction?',
    a: 'Traditional liposuction physically removes fat cells via suction through incisions under anesthesia. Cryo Contour achieves the same permanent fat cell destruction through controlled cooling — no incisions, no anesthesia, no recovery time. Results are comparable in targeted areas, with the tradeoff that they develop over 1–3 months rather than immediately. The benefit is zero surgical risk, zero downtime, and no compression garments required.',
  },
  {
    q: 'How many sessions will I need?',
    a: 'Many clients see meaningful results from a single Cryo Contour session per area, though 2–3 sessions are common for optimal outcomes. Your clinician will create a personalized timeline at your evaluation based on the areas treated and your body goals.',
  },
  {
    q: 'Is there any downtime?',
    a: 'No. After Cryo Contour you may experience temporary redness, tenderness, or mild swelling in the treated area for a few days — but you can return to normal activities immediately. There is no compression garment requirement and no restrictions on daily life.',
  },
  {
    q: 'Can I combine multiple treatments for better results?',
    a: 'Yes — combination protocols produce the most dramatic outcomes. Cryo Contour works exceptionally well with lymphatic drainage (which accelerates removal of destroyed fat cells) and metabolic support. Our clinical team designs multi-modal protocols that are safe, synergistic, and tailored to your biology.',
  },
]

export default function NonSurgicalLipo() {
  return (
    <div className="bg-white">
      <HeroPhoto
        eyebrow="Body Aesthetics"
        title={<>Non-Surgical<br />Lipo</>}
        subtitle="Permanent fat cell destruction — no surgery, no anesthesia, no downtime. The same results as traditional liposuction, achieved through precision technology and science."
        gradient="from-espresso-800 via-spa-800 to-espresso-700"
        gradientDir="to-br"
        radialPos="top_right"
      />

      {/* Cryo Contour — FIRST */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Precision Fat Reduction"
            title="Fat Freezing / Cryo Contour"
            subtitle="FDA-cleared technology that permanently destroys stubborn fat cells through controlled cooling — no needles, no surgery, no downtime."
          />
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { step: '01', title: 'How It Works', desc: 'A specialized applicator delivers precisely controlled cooling to freeze fat cells beneath the skin without harming surrounding tissue. Fat cells are uniquely vulnerable to cold — they crystallize and die while skin and muscle remain unaffected.' },
              { step: '02', title: 'What to Expect', desc: 'Each treatment session lasts 35–60 minutes per area. You\'ll feel initial cold and pressure, followed by numbness. Most clients read, work on their phones, or relax. Mild redness or tenderness may occur for a few days afterward.' },
              { step: '03', title: 'Results Timeline', desc: 'Your body naturally processes and eliminates the destroyed fat cells over 1–3 months. Most clients see visible results at 4–6 weeks with optimal results at 3 months. Many achieve their goals in 1–2 sessions.' },
            ].map((item) => (
              <div key={item.step} className="bg-cream-100 p-8 border border-cream-300 hover:border-spa hover:shadow-lg transition-all duration-300">
                <div className="font-serif text-5xl font-bold text-cream-400 mb-4">{item.step}</div>
                <h4 className="font-serif font-bold text-xl text-espresso mb-3">{item.title}</h4>
                <p className="text-espresso-500 leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'Permanently destroys up to 25% of treated fat cells',
              'FDA-cleared, clinically proven technology',
              'Visible results within 1–3 months',
              'No anesthesia, incisions, or downtime',
              'Smooth, natural-looking contour improvement',
              'Treat abdomen, flanks, thighs, arms & more',
            ].map((b, i) => (
              <div key={i} className="flex items-start gap-3 text-espresso-500 text-sm">
                <CheckCircle className="w-4 h-4 text-spa flex-shrink-0 mt-0.5" />
                {b}
              </div>
            ))}
          </div>
        </div>
      </section>

      <BeforeAfter
        heading="Slim Life Harmonization — Real Client Results"
        items={[
          { label: 'Weight Loss — 10 Weeks', result: '18 lbs lost. Significant reduction in abdominal circumference and improved energy levels.', beforeSrc: '/images/before-after/weight-loss-10-weeks-1/before.jpg', afterSrc: '/images/before-after/weight-loss-10-weeks-1/after.jpg', beforeAlt: 'Before weight loss treatment', afterAlt: 'After weight loss treatment' },
          { label: 'Fat Freezing — 8 Weeks', result: 'Visible reduction in flanks and lower abdomen following 2 Cryo Contour sessions.', beforeSrc: '/images/before-after/fat-freezing-8-weeks/before.jpg', afterSrc: '/images/before-after/fat-freezing-8-weeks/after.jpg', beforeAlt: 'Before fat freezing', afterAlt: 'After fat freezing' },
          { label: 'Weight Loss — 10 Weeks', result: 'Combination infrared therapy and lymphatic drainage — reduced bloating, improved digestion, and 11 lbs lost.', beforeSrc: '/images/before-after/weight-loss-10-weeks-2/before.jpg', afterSrc: '/images/before-after/weight-loss-10-weeks-2/after.jpg', beforeAlt: 'Before weight loss treatment', afterAlt: 'After weight loss treatment' },
        ]}
      />

      {/* Double Chin */}
      <section className="py-24 px-6 bg-cream-100">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeader eyebrow="Targeted Reduction" title="Double Chin & Neck Fat Reduction" />
          <p className="text-espresso-500 leading-relaxed mb-6">
            A double chin — also called submental fat — is one of the most frustrating areas to target through diet and exercise alone. Genetics, age, and weight fluctuations can all cause a double chin to form beneath the jawline, regardless of your overall body composition.
          </p>
          <p className="text-espresso-500 leading-relaxed mb-8">
            At Advanced Med, we use a combination of <strong className="text-espresso">Cryo Contour fat freezing</strong>, <strong className="text-espresso">radiofrequency skin tightening</strong>, and <strong className="text-espresso">ultrasound cavitation</strong> to permanently reduce double chin fat and tighten the surrounding skin — restoring a cleaner, more defined jawline without surgery, needles, or downtime.
          </p>
          <ul className="space-y-3 inline-flex flex-col items-start text-left mx-auto">
            {[
              'Permanently eliminates double chin fat',
              'Tightens loose neck and jawline skin after fat reduction',
              'No surgery, needles, or anesthesia required',
              'Visible double chin reduction within 3–6 weeks',
              'Protocols customized to your chin, neck, and skin laxity',
            ].map((b, i) => (
              <li key={i} className="flex items-start gap-3 text-espresso-500">
                <CheckCircle className="w-5 h-5 text-spa flex-shrink-0 mt-0.5" />
                {b}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <BeforeAfter
        heading="Double Chin Reduction — Real Client Results"
        items={[
          { label: 'Double Chin — 8 Weeks', result: 'Visible double chin reduction and improved jawline definition following eight sessions of our double chin protocol. Fine lines throughout the face also diminished and tightened.', beforeSrc: '/images/before-after/double-chin-8-weeks/before.jpg', afterSrc: '/images/before-after/double-chin-8-weeks/after.jpg', beforeAlt: 'Before double chin treatment', afterAlt: 'After double chin treatment' },
          { label: 'Double Chin — 6 Weeks', result: 'Full-face rejuvenation with visible improvement in skin laxity, tightening of the jawline and double chin area, and a significant reduction in the appearance of fine lines and wrinkles. 6 week protocol result.', beforeSrc: '/images/before-after/double-chin-6-weeks/before.jpg', afterSrc: '/images/before-after/double-chin-6-weeks/after.jpg', beforeAlt: 'Before double chin 6 weeks', afterAlt: 'After double chin 6 weeks' },
        ]}
      />

      {/* Detox & Metabolic Reset */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader eyebrow="Foundational Wellness" title="Detox & Metabolic Reset" center={false} />
              <p className="text-espresso-500 leading-relaxed mb-6">
                True fat reduction begins beneath the surface. Environmental toxins, processed foods, and chronic stress accumulate in the body's tissues, disrupting the enzymes and hormones responsible for fat metabolism. Our Detox &amp; Metabolic Reset protocols use evidence-based modalities to clear this burden and reawaken your body's natural fat-burning capacity.
              </p>
              <p className="text-espresso-500 leading-relaxed mb-8">
                <strong className="text-espresso">Infrared therapy</strong> penetrates deep into tissues, raising core temperature to mobilize stored toxins and boost mitochondrial energy production. <strong className="text-espresso">Lymphatic drainage</strong> accelerates the removal of metabolic waste. Combined with targeted <strong className="text-espresso">gut health support</strong>, these therapies restore the foundation your body needs.
              </p>
              <ul className="space-y-3">
                {detoxBenefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-3 text-espresso-500">
                    <CheckCircle className="w-5 h-5 text-spa flex-shrink-0 mt-0.5" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-cream-100 p-10 flex flex-col gap-6 border border-cream-300">
              {[
                { name: 'Infrared Sauna Therapy', desc: 'Deep tissue heating that mobilizes toxins, supports cellular energy, and promotes natural detoxification.' },
                { name: 'Lymphatic Drainage', desc: 'Manual and mechanical techniques to stimulate lymph flow, reduce water retention, and clear inflammatory waste.' },
                { name: 'Gut Health Optimization', desc: 'Targeted probiotic and nutritional protocols to restore microbiome balance and enhance nutrient absorption.' },
              ].map((item) => (
                <div key={item.name} className="bg-white p-5 shadow-sm border border-cream-300">
                  <h4 className="font-serif font-bold text-espresso mb-1">{item.name}</h4>
                  <p className="text-espresso-500 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-cream-200 text-center">
        <div className="max-w-2xl mx-auto">
          <img
            src="/images/protocol-logos/slimlifelogo.png"
            alt="SlimLife Body Harmonization"
            className="mx-auto max-h-28 md:max-h-36 w-auto object-contain mb-6"
          />
          <h2 className="font-serif text-4xl font-bold text-espresso mb-4">Ready to Transform Your Body?</h2>
          <p className="text-espresso-500 text-lg mb-10 leading-relaxed">
            Schedule your personalized evaluation today. Our clinical team will design a non-surgical lipo protocol built around your unique body, goals, and timeline.
          </p>
          <a
            href="https://advancedmedspaofficial.janeapp.com/" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-spa hover:bg-spa-600 text-cream-100 text-[10px] tracking-widest uppercase font-medium px-10 py-4 transition-all duration-300"
          >
            Book Now <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      <FAQ items={faqItems} />
    </div>
  )
}
