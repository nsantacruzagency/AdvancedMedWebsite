import { ArrowRight, Star } from 'lucide-react'
import HeroPhoto from '../components/HeroPhoto'

const featured = [
  {
    name: 'Daniela Arango',
    rating: 5,
    text: 'This place is amazing, they do it all! They have helped me lose the weight after having my second baby and heal my core. Highly recommend Giselle and Alyne for massages, they are excellent! The entire team is very friendly and accommodating. Giovanna is very passionate about what she does and really does put her all into every one of her clients. 10/10 recommend.',
  },
  {
    name: null,
    rating: 5,
    text: 'I absolutely love seeing Renata for my beauty shots, amino acid injections, and CryoSlim sessions! She\'s incredibly gentle, informative, and genuinely cares about her clients\' results. Renata takes her time to explain every step, which makes the experience feel comfortable and personalized. I\'ve noticed a real difference in my energy levels, skin tone, and overall body contour since starting with her. She\'s the best — highly recommend booking with Renata if you want visible results and an amazing bedside manner!',
  },
  {
    name: 'Angela Serrano',
    rating: 5,
    text: 'Absolutely incredible experience. Stefania has a true gift — not just in technique, but in intuition. Every movement felt intentional and deeply restorative. Her understanding of the body\'s pressure points was exceptional. I walked in tense and left feeling lighter, balanced, and genuinely renewed. Highly recommended for anyone looking for more than just a massage — this is healing, skill, and artistry combined.',
  },
  {
    name: 'Marlena Fialho',
    rating: 5,
    text: 'Giovanna and her team are truly the best! I came in for post-surgery fibrosis treatment, and I\'ve been blown away by how knowledgeable and professional Giovanna is — it\'s been such an educational experience! Brenda has been fantastic with the massage sessions — super skilled and attentive. I\'m already planning to come back for detox treatments and Pilates. Highly recommend this place to anyone looking for expert care in a welcoming, supportive environment!',
  },
]

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
          {featured.map((r, i) => (
            <div key={i} className="bg-white border border-cream-300 p-10 md:p-14">
              <p className="text-spa text-[10px] font-medium tracking-widest uppercase mb-4">Featured Review</p>
              <Stars count={r.rating} />
              <blockquote className="font-serif text-xl md:text-2xl text-espresso leading-relaxed mt-6 mb-8 italic">
                "{r.text}"
              </blockquote>
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
