import { Link } from 'react-router-dom'
import { CheckCircle, ArrowRight, Snowflake, Activity, Heart, Zap } from 'lucide-react'
import SectionHeader from '../../components/SectionHeader'

const benefits = [
  { icon: Snowflake, title: 'Zero Downtime', desc: 'Non-surgical procedures mean no recovery time — return to your day immediately.' },
  { icon: Activity, title: 'Lasting Results', desc: 'Targeted fat cells are permanently eliminated and naturally expelled by your body.' },
  { icon: Heart, title: 'Whole-Body Approach', desc: 'We address root causes — hormones, toxins, and metabolism — not just symptoms.' },
  { icon: Zap, title: 'Personalized Plans', desc: 'Every protocol is tailored to your unique biology, goals, and lifestyle.' },
]

const detoxBenefits = [
  'Accelerates metabolic rate and calorie burning',
  'Flushes toxins that disrupt fat metabolism',
  'Reduces bloating and improves digestion',
  'Enhances lymphatic circulation and drainage',
  'Balances gut microbiome for optimal absorption',
]

const hormoneBenefits = [
  'Reduces cortisol-driven belly fat accumulation',
  'Restores thyroid function and metabolism',
  'Balances estrogen and testosterone ratios',
  'Improves insulin sensitivity and blood sugar',
  'Enhances sleep quality for hormonal recovery',
]

const cryoBenefits = [
  'Permanently destroys up to 25% of treated fat cells',
  'FDA-cleared, clinically proven technology',
  'Visible results within 1–3 months',
  'No anesthesia, incisions, or downtime',
  'Smooth, natural-looking contour improvement',
]

export default function NonInvasiveWeightLoss() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative bg-gray-900 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gold-900 opacity-95" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <p className="text-gold-400 text-xs font-bold tracking-[0.3em] uppercase mb-4">Weight Health &amp; Body Wellness</p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold leading-tight mb-6">
            Non-Invasive <span className="text-gold-400">Weight Loss</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            Science-backed, surgery-free solutions targeting the root causes of stubborn weight — detox, hormones, and precision fat reduction through cryolipolysis.
          </p>
          <Link
            to="/book"
            className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Book Your Consultation <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Detox & Metabolic Reset */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader eyebrow="Foundational Wellness" title="🌿 Detox & Metabolic Reset" center={false} />
              <p className="text-gray-600 leading-relaxed mb-6">
                True weight loss begins beneath the surface. Environmental toxins, processed foods, and chronic stress accumulate in the body's tissues, disrupting the enzymes and hormones responsible for fat metabolism. Our Detox &amp; Metabolic Reset protocols use evidence-based modalities to clear this burden and reawaken your body's natural fat-burning capacity.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                <strong className="text-gray-800">Infrared therapy</strong> penetrates deep into tissues, raising core temperature to mobilize stored toxins and boost mitochondrial energy production. <strong className="text-gray-800">Lymphatic drainage</strong> accelerates the removal of metabolic waste and inflammatory byproducts. Combined with targeted <strong className="text-gray-800">gut health support</strong>, these therapies restore the digestive foundation your body needs to shed excess weight.
              </p>
              <ul className="space-y-3">
                {detoxBenefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-gold-50 to-rose-50 p-10 flex flex-col gap-6">
              {[
                { emoji: '☀️', name: 'Infrared Sauna Therapy', desc: 'Deep tissue heating that mobilizes toxins, supports cellular energy, and promotes natural detoxification.' },
                { emoji: '💧', name: 'Lymphatic Drainage', desc: 'Manual and mechanical techniques to stimulate lymph flow, reduce water retention, and clear inflammatory waste.' },
                { emoji: '🌱', name: 'Gut Health Optimization', desc: 'Targeted probiotic and nutritional protocols to restore microbiome balance and enhance nutrient absorption.' },
              ].map((item) => (
                <div key={item.name} className="bg-white rounded-xl p-5 shadow-sm border border-gold-100">
                  <div className="text-2xl mb-2">{item.emoji}</div>
                  <h4 className="font-serif font-bold text-gray-900 mb-1">{item.name}</h4>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Hormones & Cortisol */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 p-10 text-white">
              <h3 className="font-serif text-2xl font-bold mb-6 text-gold-400">The Cortisol–Fat Connection</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                When cortisol stays chronically elevated, it signals the body to store fat preferentially in the abdomen, triggers cravings for high-calorie foods, suppresses thyroid function, and promotes insulin resistance.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                Our hormone balancing protocols use bioidentical hormone therapy, adrenal support nutrients, and lifestyle coaching to lower cortisol, restore thyroid output, and shift your body from fat-storage to fat-burning mode.
              </p>
              <div className="grid grid-cols-2 gap-3 mt-6">
                {['Cortisol Reduction', 'Thyroid Support', 'Estrogen Balance', 'Insulin Sensitivity'].map((tag) => (
                  <span key={tag} className="text-xs font-semibold bg-gold-500/20 text-gold-300 px-3 py-2 rounded-full text-center">{tag}</span>
                ))}
              </div>
            </div>
            <div className="order-1 md:order-2">
              <SectionHeader eyebrow="Hormonal Balance" title="⚖️ Hormones & Cortisol" center={false} />
              <p className="text-gray-600 leading-relaxed mb-6">
                Hormones are the master regulators of your metabolism, and even subtle imbalances can make weight loss feel impossible despite perfect diet and exercise. Our clinical team evaluates a comprehensive hormone panel to pinpoint the specific imbalances holding you back.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Whether it's elevated cortisol from chronic stress, a sluggish thyroid, estrogen dominance, or declining testosterone, we create a targeted balancing protocol that addresses your unique hormonal landscape — helping your body work with you, not against you.
              </p>
              <ul className="space-y-3">
                {hormoneBenefits.map((b, i) => (
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

      {/* Cryolipolysis */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Precision Fat Reduction"
            title="❄️ Fat Freezing / Cryolipolysis"
            subtitle="FDA-cleared technology that permanently destroys stubborn fat cells through controlled cooling — no needles, no surgery, no downtime."
          />
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { step: '01', title: 'How It Works', desc: 'A specialized applicator delivers precisely controlled cooling to freeze fat cells beneath the skin without harming surrounding tissue. Fat cells are uniquely vulnerable to cold — they crystallize and die while skin and muscle remain unaffected.' },
              { step: '02', title: 'What to Expect', desc: 'Each treatment session lasts 35–60 minutes per area. You\'ll feel initial cold and pressure, followed by numbness. Most clients read, work on their phones, or relax. Mild redness or tenderness may occur for a few days afterward.' },
              { step: '03', title: 'Results Timeline', desc: 'Your body naturally processes and eliminates the destroyed fat cells over 1–3 months. Most clients see visible results at 4–6 weeks with optimal results at 3 months. Many achieve their goals in 1–2 sessions.' },
            ].map((item) => (
              <div key={item.step} className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-gold-200 hover:shadow-lg transition-all duration-300">
                <div className="font-serif text-5xl font-bold text-gold-200 mb-4">{item.step}</div>
                <h4 className="font-serif font-bold text-xl text-gray-900 mb-3">{item.title}</h4>
                <p className="text-gray-600 leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="bg-gradient-to-r from-gold-50 to-rose-50 rounded-2xl p-10">
            <h3 className="font-serif text-2xl font-bold text-gray-900 mb-6 text-center">Why Clients Choose Cryolipolysis</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {cryoBenefits.map((b, i) => (
                <div key={i} className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm">
                  <CheckCircle className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">{b}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Why Choose Us"
            title="The Advanced Med Difference"
            subtitle="We combine cutting-edge technology with root-cause medicine to deliver results that last."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
            {benefits.map((b) => {
              const Icon = b.icon
              return (
                <div key={b.title} className="bg-gray-800 rounded-2xl p-8 text-center border border-gray-700 hover:border-gold-500/40 transition-all duration-300">
                  <div className="flex justify-center mb-4"><Icon className="w-8 h-8 text-gold-500" /></div>
                  <h4 className="font-serif font-bold text-white text-lg mb-3">{b.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{b.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-gradient-to-br from-gold-500 to-gold-600 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-4xl font-bold mb-4">Ready to Transform Your Body?</h2>
          <p className="text-gold-100 text-lg mb-10 leading-relaxed">
            Schedule your personalized consultation today. Our clinical team will evaluate your unique needs and design a non-invasive weight loss protocol just for you.
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
