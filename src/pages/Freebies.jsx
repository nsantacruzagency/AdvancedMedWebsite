import { ArrowRight, CheckCircle, Gift, Calendar } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'
import HeroPhoto from '../components/HeroPhoto'
import FAQ from '../components/FAQ'

const faqItems = [
  {
    q: 'How do I obtain my freebie?',
    a: 'To claim your freebie, you must call the spa directly and lock in the specific time you will be coming in to receive the treatment. Freebies are not automatically reserved — you must call to secure your spot. Freebie spots are limited, and each offer can only be claimed within its active time frame: weekly freebies must be redeemed that week, and monthly freebies must be redeemed that month. Any requests made outside of the stated time frame will not be honored, no exceptions.',
  },
]

const weeklySpecials = [
  {
    title: 'Free Korean Glow Facial + Free Skin Analysis',
    desc: 'Book any service this week and receive a complimentary Korean Glow Facial and a personalized skin analysis — on us.',
    expires: 'Aug 10 – 16',
  },
  {
    title: '🔒 Locked — Revealed Sunday Morning',
    desc: 'Check back Sunday morning to see what\'s coming for this week. First come, first served.',
    expires: 'Aug 17 – 23',
    locked: true,
  },
  {
    title: '🔒 Locked — Revealed Sunday Morning',
    desc: 'Check back Sunday morning to see what\'s coming for this week. First come, first served.',
    expires: 'Aug 24 – 30',
    locked: true,
  },
]

const monthlySpecials = [
  // Add monthly specials here — e.g.:
  // { title: 'Free Lymphatic Drainage Session', desc: 'One free session for new clients booking a 5-session package.', expires: 'This month only' },
]

export default function Freebies() {
  return (
    <div className="bg-white">
      <HeroPhoto
        eyebrow="Specials & Freebies"
        title={<>Advanced MedSpa<br />Freebies</>}
        subtitle="Weekly or Monthly Specials. Come back and keep checking to see what's new."
        gradient="from-spa-800 via-espresso-700 to-espresso-800"
        gradientDir="to-br"
        radialPos="top_right"
      />

      {/* Intro */}
      <section className="py-16 px-6 bg-cream-100">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-spa text-cream-100 text-[10px] font-medium tracking-widest uppercase px-5 py-2.5 mb-8">
            <Gift className="w-4 h-4" />
            Always rotating — bookmark this page
          </div>
          <p className="text-espresso-500 leading-relaxed">
            We regularly surprise our community with free treatments, add-ons, and limited-time specials. This is the place to check. Specials rotate weekly and monthly — first come, first served.
          </p>
        </div>
      </section>

      {/* Weekly Specials */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-10">
            <Calendar className="w-6 h-6 text-spa" />
            <h2 className="font-serif text-3xl font-bold text-espresso">This Week's Specials</h2>
          </div>
          {weeklySpecials.length > 0 ? (
            <div className="space-y-5">
              {weeklySpecials.map((s, i) => (
                <div key={i} className={`border p-8 flex flex-col sm:flex-row sm:items-center gap-4 ${s.locked ? 'bg-white border-cream-300 border-dashed opacity-70' : 'bg-cream-100 border-cream-300'}`}>
                  <div className="flex-1">
                    <h3 className={`font-serif text-xl font-bold mb-1 ${s.locked ? 'text-espresso-400' : 'text-espresso'}`}>{s.title}</h3>
                    <p className="text-espresso-500 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                  <div className="flex-shrink-0 text-center">
                    <span className={`inline-block text-[10px] font-semibold tracking-widest uppercase px-4 py-2 ${s.locked ? 'bg-cream-300 text-espresso-400' : 'bg-spa text-cream-100'}`}>{s.expires}</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-cream-100 border border-cream-300 border-dashed p-16 text-center">
              <Gift className="w-8 h-8 text-cream-400 mx-auto mb-4" />
              <p className="text-espresso-400 font-medium mb-1">No weekly specials at the moment</p>
              <p className="text-espresso-500 text-sm">Check back soon — something is always coming.</p>
            </div>
          )}
        </div>
      </section>

      {/* Monthly Specials */}
      <section className="py-20 px-6 bg-cream-100">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-10">
            <Calendar className="w-6 h-6 text-spa" />
            <h2 className="font-serif text-3xl font-bold text-espresso">This Month's Specials</h2>
          </div>
          {monthlySpecials.length > 0 ? (
            <div className="space-y-5">
              {monthlySpecials.map((s, i) => (
                <div key={i} className="bg-white border border-cream-300 p-8 flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="flex-1">
                    <h3 className="font-serif text-xl font-bold text-espresso mb-1">{s.title}</h3>
                    <p className="text-espresso-500 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                  <div className="flex-shrink-0 text-center">
                    <span className="inline-block bg-espresso text-cream-100 text-[10px] font-semibold tracking-widest uppercase px-4 py-2">{s.expires}</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white border border-cream-300 border-dashed p-16 text-center">
              <Gift className="w-8 h-8 text-cream-400 mx-auto mb-4" />
              <p className="text-espresso-400 font-medium mb-1">No monthly specials at the moment</p>
              <p className="text-espresso-500 text-sm">Check back soon — something is always coming.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-espresso text-cream-200 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-4xl font-bold mb-4">Don't Miss Out</h2>
          <p className="text-cream-300 text-lg mb-10 leading-relaxed">
            Specials fill up fast. Book now to lock in your spot before the offer expires.
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
