import { Link } from 'react-router-dom'
import { CheckCircle, ArrowRight, FlaskConical } from 'lucide-react'
import SectionHeader from '../../components/SectionHeader'

const bloodPanelMarkers = [
  { category: 'Hormones', markers: ['Total Testosterone', 'Free Testosterone', 'Estradiol (E2)', 'DHEA-S', 'Progesterone', 'Cortisol', 'SHBG'] },
  { category: 'Thyroid', markers: ['TSH', 'Free T3', 'Free T4', 'Reverse T3', 'Thyroid Antibodies (TPO, TgAb)'] },
  { category: 'Metabolic Panel', markers: ['Fasting Glucose', 'Insulin', 'HbA1c', 'Comprehensive Metabolic Panel (CMP)', 'Lipid Panel', 'Triglycerides'] },
  { category: 'Complete Blood Count', markers: ['RBC', 'WBC', 'Hemoglobin', 'Hematocrit', 'Platelets', 'Differential'] },
  { category: 'Inflammation Markers', markers: ['CRP (High Sensitivity)', 'Homocysteine', 'ESR', 'IL-6', 'Fibrinogen'] },
  { category: 'Vitamins & Nutrients', markers: ['Vitamin D (25-OH)', 'Vitamin B12', 'Folate', 'Ferritin & Iron Panel', 'Magnesium', 'Zinc'] },
]

const longevityServices = [
  {
    emoji: '⚡',
    name: 'NAD+ Infusions',
    desc: 'NAD+ is a critical coenzyme that declines with age — fueling cellular energy (ATP), DNA repair, and sirtuin activation. IV NAD+ therapy dramatically raises cellular NAD+ levels, supporting mitochondrial function, mental clarity, metabolic health, and longevity pathways that oral supplements cannot match.',
  },
  {
    emoji: '🧬',
    name: 'Hormone Optimization',
    desc: 'Declining hormones are among the most powerful drivers of aging — affecting energy, body composition, cognition, libido, mood, and disease risk. Our evidence-based hormone optimization protocols restore levels to youthful ranges using bioidentical hormones, guided entirely by your lab data.',
  },
  {
    emoji: '🌿',
    name: 'Anti-Aging Peptide Protocols',
    desc: 'Targeted peptide therapies including sermorelin, ipamorelin, epithalon, and thymosin beta-4 support growth hormone release, cellular senescence control, immune modulation, and tissue regeneration — addressing aging at the molecular level.',
  },
  {
    emoji: '🔬',
    name: 'Telomere & Methylation Testing',
    desc: 'Advanced biomarkers beyond standard blood work — including telomere length assessment and epigenetic methylation testing — provide a biological age estimate and identify the fastest-aging systems in your body so we can target interventions most precisely.',
  },
]

export default function BloodTestsLongevity() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative bg-gray-900 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gold-950 opacity-95" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <p className="text-gold-400 text-xs font-bold tracking-[0.3em] uppercase mb-4">Precision Wellness &amp; Longevity</p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold leading-tight mb-6">
            Blood Tests &amp; <span className="text-gold-400">Longevity</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            You can't optimize what you don't measure. Our comprehensive blood panels reveal the full picture of your health — then we build a precision wellness protocol around exactly what your body needs.
          </p>
          <Link
            to="/book"
            className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Book a Longevity Consultation <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Blood Panel Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Comprehensive Diagnostics"
            title="🔬 What's In Our Blood Panel"
            subtitle="Our comprehensive panel goes far beyond what your annual physical covers — testing 50+ biomarkers across six critical systems to build a complete, actionable picture of your health."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {bloodPanelMarkers.map((section) => (
              <div key={section.category} className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-gold-200 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3 mb-5">
                  <FlaskConical className="w-5 h-5 text-gold-500" />
                  <h4 className="font-serif font-bold text-gray-900 text-lg">{section.category}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {section.markers.map((marker) => (
                    <span key={marker} className="text-xs bg-white border border-gold-200 text-gray-700 px-3 py-1.5 rounded-full shadow-sm font-medium">{marker}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="bg-gradient-to-r from-gold-50 to-rose-50 rounded-2xl p-10 grid md:grid-cols-3 gap-8 text-center">
            {[
              { num: '50+', label: 'Biomarkers Tested', desc: 'Far beyond standard annual labs' },
              { num: '6', label: 'Body Systems Evaluated', desc: 'Hormones, thyroid, metabolic, blood, inflammation, nutrients' },
              { num: '72hrs', label: 'Results Turnaround', desc: 'Fast analysis with provider review included' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-serif text-5xl font-bold text-gold-500 mb-2">{stat.num}</div>
                <div className="font-semibold text-gray-900 mb-1">{stat.label}</div>
                <div className="text-gray-500 text-sm">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why These Tests Matter */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-10 text-white">
              <h3 className="font-serif text-2xl font-bold text-gold-400 mb-6">Why Standard Labs Aren't Enough</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                A standard annual physical typically includes a basic metabolic panel and CBC — missing hormones, thyroid subtypes, inflammation markers, vitamin levels, and dozens of other factors critical to how you feel and function.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                You can be told "your labs are normal" while living with chronic fatigue, brain fog, weight gain, and poor sleep — because the labs run were too narrow to identify your root causes.
              </p>
              <div className="space-y-3">
                {[
                  'Identify subclinical deficiencies before symptoms worsen',
                  'Discover hormonal imbalances affecting weight and energy',
                  'Catch early metabolic dysfunction and insulin resistance',
                  'Track your biological progress over time',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <SectionHeader eyebrow="Insight Drives Results" title="📊 What Your Results Tell Us" center={false} />
              <p className="text-gray-600 leading-relaxed mb-6">
                Every number in your panel tells a story. Low free testosterone explains fatigue and body composition struggles. Elevated reverse T3 reveals why your thyroid isn't functioning despite normal TSH. High hs-CRP points to systemic inflammation driving your symptoms.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Our clinical team reviews every result in context — not just comparing you to "normal ranges" but evaluating where your numbers should be for you to feel your absolute best. We call this optimal versus reference range medicine.
              </p>
              <div className="space-y-3">
                {[
                  'Provider reviews all results with you personally',
                  'Full written report with plain-English explanations',
                  'Optimal ranges vs. reference ranges discussed',
                  'Root-cause analysis of abnormal findings',
                  'Clear, prioritized action plan provided',
                ].map((b, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700 list-none">
                    <CheckCircle className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                    {b}
                  </li>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personalized Protocols */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Your Custom Blueprint"
            title="📋 Personalized Wellness Protocols"
            subtitle="Your lab results are the foundation. What comes next is the transformative part — a comprehensive, individualized wellness plan built around exactly what your biology needs."
          />
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <p className="text-gray-600 leading-relaxed mb-6">
                After your results are reviewed, our clinical team — including medical providers, nutritionists, and wellness coaches — collaborate to create your personalized wellness protocol. This is not a generic plan. It is built specifically for you, informed by your actual biomarker data.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Your protocol may include targeted supplementation to correct specific deficiencies, hormone optimization if indicated, dietary and lifestyle modifications based on your metabolic profile, IV nutritional therapy to rapidly correct depleted nutrients, and follow-up testing timelines to track your progress.
              </p>
              <ul className="space-y-3">
                {[
                  'Targeted nutraceutical and supplement recommendations',
                  'Hormone therapy if clinically indicated',
                  'Dietary modifications based on metabolic data',
                  'IV therapy to rapidly address critical deficiencies',
                  'Exercise and recovery protocol recommendations',
                  'Follow-up labs schedule to track progress',
                ].map((b, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700 list-none">
                    <CheckCircle className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-gold-50 to-rose-50 rounded-2xl p-10">
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-6">The Protocol Process</h3>
              <div className="space-y-6">
                {[
                  { n: '1', t: 'Lab Draw & Analysis', d: 'Comprehensive 50+ biomarker panel collected and analyzed at a CLIA-certified laboratory.' },
                  { n: '2', t: 'Provider Review Session', d: '45-minute consultation to review every result, explain findings, and answer all your questions.' },
                  { n: '3', t: 'Protocol Creation', d: 'Your personalized wellness plan is written and delivered — specific, prioritized, and actionable.' },
                  { n: '4', t: 'Implementation & Monitoring', d: 'We guide your implementation and schedule follow-up labs at 60–90 days to measure progress.' },
                ].map((step) => (
                  <div key={step.n} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-gold-500 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">{step.n}</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{step.t}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{step.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Longevity Services */}
      <section className="py-24 px-6 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Anti-Aging Medicine"
            title="⏳ Longevity Services"
            subtitle="Go beyond wellness maintenance — our longevity protocols target the biological mechanisms of aging to help you live longer and feel younger."
          />
          <div className="grid md:grid-cols-2 gap-8">
            {longevityServices.map((service) => (
              <div key={service.name} className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-gold-500/40 transition-all duration-300">
                <div className="text-4xl mb-4">{service.emoji}</div>
                <h4 className="font-serif font-bold text-xl text-white mb-3">{service.name}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 bg-gray-800 rounded-2xl p-10 border border-gold-500/20">
            <h3 className="font-serif text-2xl font-bold text-gold-400 mb-4 text-center">The Longevity Mindset</h3>
            <p className="text-gray-300 text-center max-w-3xl mx-auto leading-relaxed">
              Longevity medicine isn't about living forever — it's about extending your healthspan, the years of your life in which you feel vibrant, energized, sharp, and fully capable. Our protocols focus on the hallmarks of aging that science has identified as most modifiable: mitochondrial dysfunction, cellular senescence, hormone decline, inflammation, and nutrient depletion.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-gradient-to-br from-gold-500 to-gold-600 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Book a Consultation for Your Personalized Wellness Protocol
          </h2>
          <p className="text-gold-100 text-lg mb-10 leading-relaxed">
            Stop guessing. Start knowing. Comprehensive blood testing and expert analysis give you the data to transform your health with precision. Your protocol begins with a single consultation.
          </p>
          <Link
            to="/book"
            className="inline-flex items-center gap-2 bg-white text-gold-600 font-bold px-12 py-5 rounded-full hover:bg-gray-50 transition-all duration-300 shadow-xl text-lg"
          >
            Book Your Wellness Consultation <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
