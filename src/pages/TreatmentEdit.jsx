import { ArrowRight } from 'lucide-react'
import HeroPhoto from '../components/HeroPhoto'

const posts = [
  { category: 'Fat Loss', title: 'What Is Cryo Contour and How Does It Actually Work?', date: 'Coming Soon' },
  { category: 'Skin', title: 'Why Your Skin Gets Loose After GLP-1 Weight Loss — And What To Do About It', date: 'Coming Soon' },
  { category: 'Wellness', title: 'The Cortisol–Belly Fat Connection Nobody Talks About', date: 'Coming Soon' },
  { category: 'Body', title: 'Lymphatic Drainage: The Treatment Everyone Needs But Nobody Knows About', date: 'Coming Soon' },
  { category: 'Recovery', title: 'Post-BBL Massage: Why It\'s Not Optional', date: 'Coming Soon' },
  { category: 'Skin', title: 'C-Section Scar Revision: When to Start and What to Expect', date: 'Coming Soon' },
  { category: 'Fat Loss', title: 'Double Chin Got You Down? Here\'s What We Can Actually Do About It', date: 'Coming Soon' },
  { category: 'Longevity', title: 'NAD+: The Anti-Aging Molecule Your Body Is Running Out Of', date: 'Coming Soon' },
  { category: 'Body', title: 'Lipedema vs. Regular Leg Swelling: How to Tell the Difference', date: 'Coming Soon' },
  { category: 'Skin', title: 'The Truth About Acne Scars — And Why Creams Won\'t Fix Them', date: 'Coming Soon' },
  { category: 'Recovery', title: 'Tummy Tuck Recovery: How Lymphatic Drainage Speeds Up Your Healing', date: 'Coming Soon' },
  { category: 'Fat Loss', title: 'Semaglutide vs. Fat Freezing: Which One Is Right for You?', date: 'Coming Soon' },
  { category: 'Longevity', title: 'What 50+ Biomarkers in a Blood Panel Can Tell You That Your Doctor Never Will', date: 'Coming Soon' },
  { category: 'Skin', title: 'Melasma, Hyperpigmentation, and Dark Spots — What\'s the Difference?', date: 'Coming Soon' },
  { category: 'Body', title: 'Brazilian Butt Enhancement Without Surgery: What\'s Possible', date: 'Coming Soon' },
  { category: 'Longevity', title: 'IV Therapy vs. Oral Supplements: Why Absorption Matters More Than Dosage', date: 'Coming Soon' },
  { category: 'Recovery', title: 'Liposuction Aftercare: The Massage Protocol That Changes Everything', date: 'Coming Soon' },
  { category: 'Skin', title: 'Stretch Marks During Pregnancy: The Best Time to Start Treatment', date: 'Coming Soon' },
  { category: 'Body', title: 'Cellulite Is Not a Fat Problem — It\'s a Structural Problem. Here\'s Why', date: 'Coming Soon' },
  { category: 'Longevity', title: 'Peptides 101: What They Are, What They Do, and Who Should Consider Them', date: 'Coming Soon' },
  { category: 'Skin', title: 'How Radiofrequency Rebuilds Your Skin From the Inside Out', date: 'Coming Soon' },
  { category: 'Fat Loss', title: 'Detox & Metabolic Reset: Why Machines Alone Won\'t Give You Lasting Results', date: 'Coming Soon' },
  { category: 'Skin', title: 'Hair Restoration With PRP: A Timeline of What to Expect Month by Month', date: 'Coming Soon' },
  { category: 'Wellness', title: 'Why Sleep Is Your Most Underrated Fat-Burning Tool', date: 'Coming Soon' },
]

// Bottom bar color by category
const barColors = {
  'Fat Loss':  '#d9542c',
  'Skin':      '#453730',
  'Wellness':  '#7A8C6E',
  'Body':      '#7A8C6E',
  'Recovery':  '#7A8C6E',
  'Longevity': '#2D4A3E',
}

// Diagonal accent triangle color (slightly darker cream per category family)
const triangleColors = {
  'Fat Loss':  '#e8d6c8',
  'Skin':      '#ddd4cc',
  'Wellness':  '#cdd4c8',
  'Body':      '#cdd4c8',
  'Recovery':  '#cdd4c8',
  'Longevity': '#c8d0cc',
}

export default function TreatmentEdit() {
  return (
    <div className="bg-white">
      <HeroPhoto
        eyebrow="The Blog"
        title={<>The Treatment<br />Editorial Blog</>}
        subtitle="Expert insight on aesthetics, wellness, and the science behind looking and feeling your best — written to help you make informed decisions about your body and your health."
        gradient="from-espresso-800 via-spa-800 to-espresso-700"
        gradientDir="to-br"
        radialPos="top_right"
      />

      {/* Blog Grid */}
      <section className="py-20 px-6 bg-cream-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {posts.map((post, i) => (
              <div
                key={i}
                className="group cursor-pointer flex flex-col overflow-hidden"
                style={{ backgroundColor: '#f5f0eb', position: 'relative' }}
              >
                {/* Diagonal triangle accent */}
                <div
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '55%',
                    height: '58%',
                    backgroundColor: triangleColors[post.category] || '#e0d8d0',
                    clipPath: 'polygon(35% 0%, 100% 0%, 100% 100%)',
                    pointerEvents: 'none',
                  }}
                />

                {/* Card body */}
                <div className="relative flex flex-col flex-1 p-6 pb-5" style={{ minHeight: '200px' }}>
                  {/* Category label */}
                  <div className="flex items-center gap-2 mb-5">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: barColors[post.category] || '#7A8C6E' }} />
                    <span className="text-[9px] font-semibold tracking-widest uppercase" style={{ color: '#6b5c52' }}>
                      {post.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-lg font-bold leading-snug flex-1" style={{ color: '#2e2420' }}>
                    {post.title}
                  </h3>
                </div>

                {/* Bottom bar */}
                <div
                  className="flex items-center justify-between px-6 py-4 transition-opacity duration-300"
                  style={{ backgroundColor: barColors[post.category] || '#7A8C6E' }}
                >
                  <span className="text-[9px] font-semibold tracking-widest uppercase text-white opacity-90">
                    {post.date}
                  </span>
                  <ArrowRight size={14} className="text-white group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-espresso text-cream-200 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-spa-300 text-[10px] font-medium tracking-widest uppercase mb-4">Stay In the Know</p>
          <h2 className="font-serif text-4xl font-bold mb-4">New Articles, Always</h2>
          <p className="text-cream-300 text-lg mb-10 leading-relaxed">
            The Treatment Editorial Blog is updated regularly with new guides, treatment breakdowns, and expert advice. Bookmark this page and check back often.
          </p>
          <a
            href="https://advancedmedspaofficial.janeapp.com/" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-cream-100 hover:bg-white text-espresso text-[10px] tracking-widest uppercase font-medium px-10 py-4 transition-all duration-300"
          >
            Book a Consultation <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  )
}
