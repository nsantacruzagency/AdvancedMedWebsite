import { ArrowRight, Star } from 'lucide-react'
import HeroPhoto from '../components/HeroPhoto'

const categoryColors = {
  'Weight Loss': '#d9542c',
  'Lipedema':   '#7A8C6E',
  'Post-Op':    '#7A8C6E',
  'Massage':    '#7A8C6E',
}

const reviews = [
  // — Lipedema —
  {
    category: 'Lipedema',
    name: 'Juliana Mendonca',
    rating: 5,
    text: "I'm in my third week of the protocol. I'm looking forward to my appointment day; the clinic is a pleasant, clean, and organized place with integrated treatments. Today I was cared for by Gill, who spent over an hour with me on a lipedema treatment combined with lymphatic drainage. The care I receive from the entire team is wonderful. I recommend scheduling a consultation and learning about all the available protocols.",
  },
  {
    category: 'Lipedema',
    name: 'Debora Petermann',
    rating: 5,
    text: "Excellent clinic with super polite and helpful professionals. Giovana is wonderful, I loved it and I'm going back for my lipedema treatment. She gave me great instructions to treat myself from the inside out.",
  },
  // — Post-Op —
  {
    category: 'Post-Op',
    name: 'Marlena Fialho',
    rating: 5,
    text: "Giovanna and her team are truly the best! I came in for post-surgery fibrosis treatment, and I've been blown away by how knowledgeable and professional Giovanna is — it's been such an educational experience! Brenda has been fantastic with the massage sessions — super skilled and attentive. I'm already planning to come back for detox treatments and Pilates. Highly recommend this place to anyone looking for expert care in a welcoming, supportive environment!",
  },
  // — Weight Loss —
  {
    category: 'Weight Loss',
    name: 'Daniela Arango',
    rating: 5,
    text: "This place is amazing, they do it all! They have helped me lose the weight after having my second baby and heal my core. Highly recommend Giselle and Alyne for massages, they are excellent! The entire team is very friendly and accommodating. Giovanna is very passionate about what she does and really does put her all into every one of her clients. 10/10 recommend.\n\nI absolutely love seeing Renata for my beauty shots, amino acid injections, and CryoSlim sessions! She's incredibly gentle, informative, and genuinely cares about her clients' results. Renata takes her time to explain every step, which makes the experience feel comfortable and personalized. I've noticed a real difference in my energy levels, skin tone, and overall body contour since starting with her. She's the best — highly recommend booking with Renata if you want visible results and an amazing bedside manner!",
  },
  {
    category: 'Weight Loss',
    name: 'Sarah Lopes Mondini',
    rating: 5,
    text: "Excellent place, for those who want to transform their body in a healthy way — all excellent professionals, with a lot of knowledge in integrative aesthetics. I want to highlight Suzane who is always concerned about explaining the procedures and is dedicated to always doing her best. She accompanied me for most of my visits to the clinic, but all the professionals are great! Hanna at reception and Giovana who delivers so much knowledge and even tips for self-care! I highly recommend the place and these professionals!",
  },
  {
    category: 'Weight Loss',
    name: 'Liliana Kerner',
    rating: 5,
    text: "I love how Ariane is changing my whole body — looking skinnier, flat tummy and all my clothing fits better. This is my happy place!",
  },
  // — Massage —
  {
    category: 'Massage',
    name: 'Angela Serrano',
    rating: 5,
    text: "Absolutely incredible experience. Stefania has a true gift — not just in technique, but in intuition. Every movement felt intentional and deeply restorative. Her understanding of the body's pressure points was exceptional. I walked in tense and left feeling lighter, balanced, and genuinely renewed. Highly recommended for anyone looking for more than just a massage — this is healing, skill, and artistry combined.",
  },
]

function GoogleBadge() {
  return (
    <div className="flex items-center gap-1.5 flex-shrink-0">
      {/* Google G icon */}
      <svg width="32" height="32" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
      </svg>
      <div className="text-left">
        <p className="text-sm font-bold tracking-wide text-espresso-600 leading-none">Google</p>
        <p className="text-xs text-espresso-400 tracking-wide leading-none mt-1">Verified Review</p>
      </div>
    </div>
  )
}

function Stars({ count }) {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={14} className={i < count ? 'text-spa fill-spa' : 'text-cream-300 fill-cream-300'} />
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <>
      <HeroPhoto
        eyebrow="Client Stories"
        title={"What Our\nClients Say"}
        subtitle="Real results from real people who trusted us with their transformation."
        gradient="from-spa-800 via-espresso-800 to-espresso-700"
        gradientDir="to-br"
        radialPos="bottom_right"
      />

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-cream-100">
        <div className="max-w-4xl mx-auto space-y-8">
          {reviews.map((r, i) => (
            <div key={i} className="bg-white border border-cream-300 p-10 md:p-14">
              {/* Top row: category badge + Google badge */}
              <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: categoryColors[r.category] }} />
                <span className="text-[9px] font-semibold tracking-widest uppercase" style={{ color: categoryColors[r.category] }}>
                  {r.category}
                </span>
              </div>
                <GoogleBadge />
              </div>
              <p className="text-spa text-[10px] font-medium tracking-widest uppercase mb-4">Featured Review</p>
              <Stars count={r.rating} />
              <div className="mt-6 mb-8 space-y-4">
                {r.text.split('\n\n').map((para, j) => (
                  <p key={j} className="font-serif text-xl md:text-2xl text-espresso leading-relaxed italic">
                    "{para}"
                  </p>
                ))}
              </div>
              {r.name && (
                <p className="font-bold text-espresso">{r.name}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-4 bg-espresso text-cream-200 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl font-bold mb-4">Ready to Write Your Own Story?</h2>
          <p className="text-cream-300 mb-8">Join hundreds of clients who have transformed their health and confidence at Advanced Med MedSpa Lounge.</p>
          <a href="https://advancedmedspaofficial.janeapp.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-cream-100 hover:bg-white text-espresso text-[10px] tracking-widest uppercase font-medium px-10 py-4 transition-colors">
            Book Your First Appointment <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </>
  )
}
