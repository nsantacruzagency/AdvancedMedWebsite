import { ArrowRight } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'
import HeroPhoto from '../components/HeroPhoto'

const posts = [
  { category: 'Fat Loss', title: 'What Is Cryo Contour and How Does It Actually Work?', date: 'Coming Soon' },
  { category: 'Skin', title: 'Why Your Skin Gets Loose After GLP-1 Weight Loss — And What To Do About It', date: 'Coming Soon' },
  { category: 'Wellness', title: 'The Cortisol–Belly Fat Connection Nobody Talks About', date: 'Coming Soon' },
  { category: 'Body', title: 'Lymphatic Drainage: The Treatment Everyone Needs But Nobody Knows About', date: 'Coming Soon' },
  { category: 'Recovery', title: 'Post-BBL Massage: Why It\'s Not Optional', date: 'Coming Soon' },
  { category: 'Skin', title: 'C-Section Scar Revision: When to Start and What to Expect', date: 'Coming Soon' },
  { category: 'Fat Loss', title: 'Double Chin Got You Down? Here\'s What We Can Actually Do About It', date: 'Coming Soon' },
  { category: 'Wellness', title: 'NAD+: The Anti-Aging Molecule Your Body Is Running Out Of', date: 'Coming Soon' },
  { category: 'Body', title: 'Lipedema vs. Regular Leg Swelling: How to Tell the Difference', date: 'Coming Soon' },
  { category: 'Skin', title: 'The Truth About Acne Scars — And Why Creams Won\'t Fix Them', date: 'Coming Soon' },
  { category: 'Recovery', title: 'Tummy Tuck Recovery: How Lymphatic Drainage Speeds Up Your Healing', date: 'Coming Soon' },
  { category: 'Fat Loss', title: 'Semaglutide vs. Fat Freezing: Which One Is Right for You?', date: 'Coming Soon' },
  { category: 'Wellness', title: 'What 50+ Biomarkers in a Blood Panel Can Tell You That Your Doctor Never Will', date: 'Coming Soon' },
  { category: 'Skin', title: 'Melasma, Hyperpigmentation, and Dark Spots — What\'s the Difference?', date: 'Coming Soon' },
  { category: 'Body', title: 'Brazilian Butt Enhancement Without Surgery: What\'s Possible', date: 'Coming Soon' },
  { category: 'Wellness', title: 'IV Therapy vs. Oral Supplements: Why Absorption Matters More Than Dosage', date: 'Coming Soon' },
  { category: 'Recovery', title: 'Liposuction Aftercare: The Massage Protocol That Changes Everything', date: 'Coming Soon' },
  { category: 'Skin', title: 'Stretch Marks During Pregnancy: The Best Time to Start Treatment', date: 'Coming Soon' },
  { category: 'Body', title: 'Cellulite Is Not a Fat Problem — It\'s a Structural Problem. Here\'s Why', date: 'Coming Soon' },
  { category: 'Wellness', title: 'Peptides 101: What They Are, What They Do, and Who Should Consider Them', date: 'Coming Soon' },
  { category: 'Skin', title: 'How Radiofrequency Rebuilds Your Skin From the Inside Out', date: 'Coming Soon' },
  { category: 'Fat Loss', title: 'Detox & Metabolic Reset: Why Machines Alone Won\'t Give You Lasting Results', date: 'Coming Soon' },
  { category: 'Body', title: 'Hair Restoration With PRP: A Timeline of What to Expect Month by Month', date: 'Coming Soon' },
  { category: 'Wellness', title: 'Why Sleep Is Your Most Underrated Fat-Burning Tool', date: 'Coming Soon' },
]

const categoryColors = {
  'Fat Loss': 'bg-spa text-cream-100',
  'Skin': 'bg-espresso text-cream-200',
  'Wellness': 'bg-spa-700 text-cream-100',
  'Body': 'bg-espresso-700 text-cream-200',
  'Recovery': 'bg-spa-800 text-cream-100',
}

export default function TreatmentEdit() {
  return (
    <div className="bg-white">
      <HeroPhoto
        eyebrow="The Blog"
        title={<>The Treatment<br />Editorial Blog</>}
        subtitle="Expert insight on aesthetics, wellness, and the science behind looking and feeling your best."
        gradient="from-espresso-800 via-spa-800 to-espresso-700"
        gradientDir="to-br"
        radialPos="top_right"
      />

      {/* Blog Grid */}
      <section className="py-20 px-6 bg-cream-100">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="Articles & Guides"
            title="The Treatment Editorial Blog"
            subtitle="In-depth articles on the treatments, science, and lifestyle behind Advanced Med — written to help you make informed decisions about your body and health."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {posts.map((post, i) => (
              <div
                key={i}
                className="group bg-white border border-cream-300 hover:border-spa hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col"
              >
                {/* Placeholder image area */}
                <div className="aspect-[4/3] bg-cream-200 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-8 h-px bg-cream-400" />
                  </div>
                  <span className={`absolute top-3 left-3 text-[9px] font-bold tracking-widest uppercase px-2.5 py-1 ${categoryColors[post.category]}`}>
                    {post.category}
                  </span>
                </div>
                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-serif text-base font-bold text-espresso leading-snug mb-3 group-hover:text-spa transition-colors flex-1">
                    {post.title}
                  </h3>
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-cream-200">
                    <span className="text-[10px] text-espresso-400 tracking-wide font-medium">{post.date}</span>
                    <ArrowRight size={13} className="text-spa group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="py-20 px-6 bg-espresso text-cream-200 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-spa-300 text-[10px] font-medium tracking-widest uppercase mb-4">Stay In the Know</p>
          <h2 className="font-serif text-4xl font-bold mb-4">New Articles, Always</h2>
          <p className="text-cream-300 text-lg mb-10 leading-relaxed">
            The Treatment Edit is updated regularly with new guides, treatment breakdowns, and expert advice. Bookmark this page and check back often.
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
