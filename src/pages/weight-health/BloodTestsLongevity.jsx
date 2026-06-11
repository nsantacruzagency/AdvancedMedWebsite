import { Link } from 'react-router-dom'
import { CheckCircle, ArrowRight, FlaskConical } from 'lucide-react'
import SectionHeader from '../../components/SectionHeader'
import HeroPhoto from '../../components/HeroPhoto'
import FAQ from '../../components/FAQ'

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
    name: 'NAD+ Infusions',
    desc: 'NAD+ is a critical coenzyme that declines with age — fueling cellular energy (ATP), DNA repair, and sirtuin activation. IV NAD+ therapy dramatically raises cellular NAD+ levels, supporting mitochondrial function, mental clarity, metabolic health, and longevity pathways that oral supplements cannot match.',
  },
  {
    name: 'Hormone Optimization',
    desc: 'Declining hormones are among the most powerful drivers of aging — affecting energy, body composition, cognition, libido, mood, and disease risk. Our evidence-based hormone optimization protocols restore levels to youthful ranges using bioidentical hormones, guided entirely by your lab data.',
  },
  {
    name: 'Anti-Aging Peptide Protocols',
    desc: 'Targeted peptide therapies including sermorelin, ipamorelin, epithalon, and thymosin beta-4 support growth hormone release, cellular senescence control, immune modulation, and tissue regeneration — addressing aging at the molecular level.',
  },
  {
    name: 'Telomere & Methylation Testing',
    desc: 'Advanced biomarkers beyond standard blood work — including telomere length assessment and epigenetic methylation testing — provide a biological age estimate and identify the fastest-aging systems in your body so we can target interventions most precisely.',
  },
]

const faqItems = [
  {
    q: 'What is included in the Advanced Med blood panel?',
    a: 'Our comprehensive panel tests 50+ biomarkers across six critical body systems: hormones (including testosterone, estradiol, DHEA, cortisol, and SHBG), thyroid function (TSH, Free T3, Free T4, Reverse T3, and thyroid antibodies), a full metabolic panel (glucose, insulin, HbA1c, lipids), complete blood count, inflammation markers (hs-CRP, homocysteine, fibrinogen), and key vitamins and nutrients (Vitamin D, B12, iron panel, magnesium, zinc). This goes far beyond what standard annual physicals include.',
  },
  {
    q: 'How long does it take to receive my results?',
    a: 'Results are typically returned within 72 hours of your blood draw from our CLIA-certified laboratory partner. Once your results are received, our clinical team reviews every value in context before your provider review session. We do not simply send you a raw lab report — we analyze your results and prepare a clear, plain-English explanation of every finding before discussing them with you.',
  },
  {
    q: 'Do I need to fast before my blood draw?',
    a: 'Yes — fasting for 10–12 hours before your blood draw is required for accurate results on several key markers, including fasting glucose, insulin, lipid panel, and triglycerides. Water is permitted and encouraged during the fasting period. Please avoid alcohol for 24 hours before your draw. We offer early morning appointment slots to make fasting as convenient as possible.',
  },
  {
    q: 'What happens after I receive my results?',
    a: 'After your results are ready, you will meet with your provider for a 45-minute review session. Your provider will walk through every significant finding, explain what each marker means in practical terms, and answer all of your questions. Following the review, you will receive a written wellness protocol — a specific, prioritized, actionable plan tailored to your biomarker profile. This may include targeted supplements, hormone therapy, IV nutritional therapy, dietary adjustments, and a follow-up testing schedule.',
  },
  {
    q: 'How often should I get blood testing done?',
    a: 'For clients starting a new wellness or hormone protocol, we recommend repeat testing at 60–90 days to assess your response and make any necessary adjustments. For maintenance, most clients test every 6 months to monitor progress and catch any emerging changes early. Annual comprehensive panels are appropriate for clients who are optimized and stable. Your provider will recommend a testing cadence based on your specific situation and goals.',
  },
  {
    q: 'Is comprehensive blood testing covered by insurance?',
    a: 'Some components of our blood panel may be covered by insurance, particularly if ordered in response to a documented medical condition or symptom. However, our comprehensive wellness panel — which includes many markers not typically ordered in standard care — is often not fully covered. We provide detailed receipts and lab documentation to support any applicable insurance claims. Our team can discuss out-of-pocket costs and any available payment options during your consultation.',
  },
]

export default function BloodTestsLongevity() {
  return (
    <div className="bg-white">
      <HeroPhoto
        eyebrow="Stem Cells & Wellness"
        title={<>What Do Blood<br />Tests Tell Us?</>}
        subtitle="You can't optimize what you don't measure. Our comprehensive blood panels reveal the full picture of your health — then we build a precision wellness protocol around exactly what your body needs."
        gradient="from-espresso-800 via-espresso-700 to-spa-800"
      />

      {/* Blood Panel Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Comprehensive Diagnostics"
            title="What's In Our Blood Panel"
            subtitle="Our comprehensive panel goes far beyond what your annual physical covers — testing 50+ biomarkers across six critical systems to build a complete, actionable picture of your health."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {bloodPanelMarkers.map((section) => (
              <div key={section.category} className="bg-cream-100 p-8 border border-cream-300 hover:border-spa hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3 mb-5">
                  <FlaskConical className="w-5 h-5 text-spa" />
                  <h4 className="font-serif font-bold text-espresso text-lg">{section.category}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {section.markers.map((marker) => (
                    <span key={marker} className="text-xs bg-white border border-cream-300 text-espresso-500 px-3 py-1.5 shadow-sm font-medium">{marker}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="bg-cream-200 p-10 grid md:grid-cols-3 gap-8 text-center border border-cream-300">
            {[
              { num: '50+', label: 'Biomarkers Tested', desc: 'Far beyond standard annual labs' },
              { num: '6', label: 'Body Systems Evaluated', desc: 'Hormones, thyroid, metabolic, blood, inflammation, nutrients' },
              { num: '72hrs', label: 'Results Turnaround', desc: 'Fast analysis with provider review included' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-serif text-5xl font-bold text-espresso mb-2">{stat.num}</div>
                <div className="font-semibold text-espresso mb-1">{stat.label}</div>
                <div className="text-espresso-500 text-sm">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why These Tests Matter */}
      <section className="py-24 px-6 bg-cream-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="bg-espresso p-10 text-cream-200">
              <h3 className="font-serif text-2xl font-bold text-spa-300 mb-6">Why Standard Labs Aren't Enough</h3>
              <p className="text-cream-300 leading-relaxed mb-6">
                A standard annual physical typically includes a basic metabolic panel and CBC — missing hormones, thyroid subtypes, inflammation markers, vitamin levels, and dozens of other factors critical to how you feel and function.
              </p>
              <p className="text-cream-300 leading-relaxed mb-6">
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
                    <CheckCircle className="w-4 h-4 text-spa-300 flex-shrink-0 mt-0.5" />
                    <span className="text-cream-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <SectionHeader eyebrow="Insight Drives Results" title="What Your Results Tell Us" center={false} />
              <p className="text-espresso-500 leading-relaxed mb-6">
                Every number in your panel tells a story. Low free testosterone explains fatigue and body composition struggles. Elevated reverse T3 reveals why your thyroid isn't functioning despite normal TSH. High hs-CRP points to systemic inflammation driving your symptoms.
              </p>
              <p className="text-espresso-500 leading-relaxed mb-8">
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
                  <li key={i} className="flex items-start gap-3 text-espresso-500 list-none">
                    <CheckCircle className="w-5 h-5 text-spa flex-shrink-0 mt-0.5" />
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
            title="Personalized Wellness Protocols"
            subtitle="Your lab results are the foundation. What comes next is the transformative part — a comprehensive, individualized wellness plan built around exactly what your biology needs."
          />
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <p className="text-espresso-500 leading-relaxed mb-6">
                After your results are reviewed, our clinical team — including medical providers, nutritionists, and wellness coaches — collaborate to create your personalized wellness protocol. This is not a generic plan. It is built specifically for you, informed by your actual biomarker data.
              </p>
              <p className="text-espresso-500 leading-relaxed mb-8">
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
                  <li key={i} className="flex items-start gap-3 text-espresso-500 list-none">
                    <CheckCircle className="w-5 h-5 text-spa flex-shrink-0 mt-0.5" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-cream-100 p-10 border border-cream-300">
              <h3 className="font-serif text-xl font-bold text-espresso mb-6">The Protocol Process</h3>
              <div className="space-y-6">
                {[
                  { n: '1', t: 'Lab Draw & Analysis', d: 'Comprehensive 50+ biomarker panel collected and analyzed at a CLIA-certified laboratory.' },
                  { n: '2', t: 'Provider Review Session', d: '45-minute consultation to review every result, explain findings, and answer all your questions.' },
                  { n: '3', t: 'Protocol Creation', d: 'Your personalized wellness plan is written and delivered — specific, prioritized, and actionable.' },
                  { n: '4', t: 'Implementation & Monitoring', d: 'We guide your implementation and schedule follow-up labs at 60–90 days to measure progress.' },
                ].map((step) => (
                  <div key={step.n} className="flex gap-4">
                    <div className="w-8 h-8 bg-espresso text-cream-100 flex items-center justify-center font-bold text-sm flex-shrink-0">{step.n}</div>
                    <div>
                      <h4 className="font-semibold text-espresso mb-1">{step.t}</h4>
                      <p className="text-espresso-500 text-sm leading-relaxed">{step.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Longevity Services */}
      <section className="py-24 px-6 bg-espresso text-cream-200">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Anti-Aging Medicine"
            title="Longevity Services"
            subtitle="Go beyond wellness maintenance — our longevity protocols target the biological mechanisms of aging to help you live longer and feel younger."
            light={true}
          />
          <div className="grid md:grid-cols-2 gap-8">
            {longevityServices.map((service) => (
              <div key={service.name} className="bg-white/5 p-8 border border-white/10 hover:border-spa/40 transition-all duration-300">
                <h4 className="font-serif font-bold text-xl text-cream-100 mb-3">{service.name}</h4>
                <p className="text-cream-300 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 bg-white/5 p-10 border border-spa/20">
            <h3 className="font-serif text-2xl font-bold text-spa-300 mb-4 text-center">The Longevity Mindset</h3>
            <p className="text-cream-300 text-center max-w-3xl mx-auto leading-relaxed">
              Longevity medicine isn't about living forever — it's about extending your healthspan, the years of your life in which you feel vibrant, energized, sharp, and fully capable. Our protocols focus on the hallmarks of aging that science has identified as most modifiable: mitochondrial dysfunction, cellular senescence, hormone decline, inflammation, and nutrient depletion.
            </p>
          </div>
        </div>
      </section>

      <FAQ items={faqItems} />

      {/* CTA */}
      <section className="py-24 px-6 bg-cream-200 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-espresso mb-6 leading-tight">
            Book a Consultation for Your Personalized Wellness Protocol
          </h2>
          <p className="text-espresso-500 text-lg mb-10 leading-relaxed">
            Stop guessing. Start knowing. Comprehensive blood testing and expert analysis give you the data to transform your health with precision. Your protocol begins with a single consultation.
          </p>
          <Link
            to="/book"
            className="inline-flex items-center gap-2 bg-espresso hover:bg-espresso-600 text-cream-100 text-[10px] tracking-widest uppercase font-medium px-12 py-5 transition-all duration-300"
          >
            Book Your Wellness Consultation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
