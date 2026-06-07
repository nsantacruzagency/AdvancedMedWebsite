import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Star, ArrowRight } from 'lucide-react'

const all = [
  { name: 'Maria L.', treatment: 'Korean Facial', category: 'Skin Care', rating: 5, date: 'March 2025', text: 'Absolutely love this place! My Korean facial left my skin glowing for weeks. The staff is so professional and caring — I felt like royalty from start to finish. I am already booked for my next session!' },
  { name: 'Jessica R.', treatment: 'Medical Weight Loss', category: 'Weight Loss', rating: 5, date: 'January 2025', text: 'I lost 28 pounds with their medical weight loss program. Dr. Okonkwo was incredibly supportive and the team kept me motivated every step of the way. This is not just a spa — it is a life-changing experience.' },
  { name: 'Sofia M.', treatment: 'Botox', category: 'Injectables', rating: 5, date: 'February 2025', text: 'Best Botox I have ever had — so natural looking. Marcus has a true gift for aesthetics. My forehead is smooth but I still look like myself, just refreshed. I will never go anywhere else.' },
  { name: 'Carmen T.', treatment: 'Chemical Peel', category: 'Skin Care', rating: 5, date: 'April 2025', text: 'My skin has never looked better. After just one medium-depth peel, my dark spots faded dramatically and my texture is so smooth. Sofia explained everything and made me feel completely comfortable.' },
  { name: 'Diana W.', treatment: 'Body Contouring', category: 'Weight Loss', rating: 5, date: 'December 2024', text: 'I had been struggling with stubborn fat on my flanks for years. After a series of body contouring treatments, those inches are gone! The team is knowledgeable and the results speak for themselves.' },
  { name: 'Rachel H.', treatment: 'Brazilian Lymphatic Drainage', category: 'Massages', rating: 5, date: 'May 2025', text: 'This massage is incredible. I went in feeling bloated and sluggish, and walked out feeling lighter, energized, and completely relaxed. My therapist was so skilled. I go monthly now — it is non-negotiable self-care.' },
  { name: 'Ashley B.', treatment: 'Myers Cocktail IV Drip', category: 'Injectables', rating: 5, date: 'March 2025', text: 'I started getting IV drips monthly and the difference in my energy levels is unreal. No more afternoon crashes, my skin looks amazing, and I feel like I am in my 20s again. Worth every penny.' },
  { name: 'Monica G.', treatment: 'PRP Hair Restoration', category: 'Weight Loss', rating: 4, date: 'February 2025', text: 'I was skeptical at first, but after 4 PRP sessions my hair is noticeably thicker and I have seen new growth along my hairline. The team was patient and answered all my questions. Wish I had started sooner!' },
  { name: 'Tiffany L.', treatment: 'Blood Tests & Longevity', category: 'Weight Loss', rating: 5, date: 'January 2025', text: 'Getting a full blood panel here was eye-opening. I found out my vitamin D, iron, and thyroid were all off. With their personalized protocol I have more energy, better sleep, and I finally feel like myself again.' },
  { name: 'Priya S.', treatment: 'Prenatal Massage', category: 'Massages', rating: 5, date: 'April 2025', text: 'As a pregnant mama in my third trimester, this prenatal massage was pure heaven. The therapist was so gentle and knew exactly how to position me for comfort. I cried happy tears — it was that good.' },
  { name: 'Elena V.', treatment: 'RF Skin Tightening', category: 'Skin Care', rating: 5, date: 'November 2024', text: 'My jaw and neck area were really bothering me but I did not want surgery. After 6 skin tightening sessions the difference is remarkable — lifted, firm, and natural. My friends keep asking what I have done!' },
  { name: 'Keisha M.', treatment: 'Acne Treatment Facial', category: 'Skin Care', rating: 5, date: 'May 2025', text: 'I have had cystic acne for 10 years and nothing worked. After a customized acne protocol here, my skin is clearer than it has ever been. The team is patient, knowledgeable, and genuinely invested in my results.' },
]

const categories = ['All', 'Weight Loss', 'Skin Care', 'Massages', 'Injectables']

const featured = {
  name: 'Jessica R.',
  treatment: 'Medical Weight Loss + Body Contouring',
  text: 'I came to Advanced Med at my lowest point — 50 pounds overweight, exhausted, and convinced nothing would work. Dr. Okonkwo sat with me for a full hour during my consultation and made me feel truly seen, not judged. We started with a blood panel that revealed my cortisol was through the roof and my thyroid was struggling. With their medical weight loss program, peptide support, and a series of body contouring sessions, I have lost 38 pounds in 7 months. But more than the number on the scale — I have my energy back, my confidence back, and I feel like myself for the first time in years. This team changed my life.',
  rating: 5,
  date: 'April 2025',
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
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? all : all.filter((t) => t.category === active)

  return (
    <>
      <section className="bg-espresso text-cream-200 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-spa text-[10px] font-medium tracking-widest uppercase mb-4">Client Love</p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-5">What Our Clients Say</h1>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="flex">{[...Array(5)].map((_, i) => <Star key={i} size={22} className="text-spa fill-spa" />)}</div>
            <span className="text-2xl font-bold">4.9</span>
            <span className="text-cream-400 text-sm">· 500+ Reviews</span>
          </div>
          <p className="text-cream-300 text-base">Real clients. Real results. Real transformations.</p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Filters */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map((cat) => (
              <button key={cat} onClick={() => setActive(cat)}
                className={`px-5 py-2 text-sm font-medium transition-colors border ${active === cat ? 'bg-espresso text-cream-100 border-espresso' : 'border-cream-300 bg-white text-espresso-500 hover:border-spa hover:text-espresso'}`}>
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {filtered.map((t) => (
              <div key={t.name + t.treatment} className="bg-white p-7 border border-cream-300 shadow-sm hover:shadow-md transition-shadow flex flex-col hover:border-spa">
                <Stars count={t.rating} />
                <p className="text-espresso-500 text-sm leading-relaxed my-4 italic flex-1">"{t.text}"</p>
                <div className="border-t border-cream-300 pt-4">
                  <p className="font-semibold text-espresso text-sm">{t.name}</p>
                  <p className="text-spa text-xs font-medium mt-0.5">{t.treatment}</p>
                  <p className="text-espresso-400 text-xs mt-0.5">{t.date}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Featured Story */}
          <div className="bg-cream-200 p-10 md:p-14 border border-cream-300">
            <p className="text-spa text-[10px] font-medium tracking-widest uppercase mb-4">Featured Story</p>
            <Stars count={featured.rating} />
            <blockquote className="font-serif text-xl md:text-2xl text-espresso leading-relaxed mt-6 mb-8 italic">
              "{featured.text}"
            </blockquote>
            <div>
              <p className="font-bold text-espresso">{featured.name}</p>
              <p className="text-spa text-sm font-medium">{featured.treatment}</p>
              <p className="text-espresso-400 text-sm">{featured.date}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-cream-100">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-spa text-[10px] font-medium tracking-widest uppercase mb-3">@AdvancedMedMiami</p>
          <h2 className="font-serif text-3xl font-bold text-espresso mb-8">See More on Instagram</h2>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-8">
            {['bg-spa-100', 'bg-cream-300', 'bg-spa-200', 'bg-cream-200', 'bg-spa-100', 'bg-cream-300'].map((bg, i) => (
              <div key={i} className={`${bg} aspect-square flex items-center justify-center cursor-pointer hover:scale-105 transition-transform border border-cream-300`} />
            ))}
          </div>
          <a href="#" className="inline-flex items-center gap-2 border border-cream-300 hover:border-spa text-espresso-500 hover:text-espresso font-medium px-6 py-2.5 transition-colors text-sm text-[10px] tracking-widest uppercase">
            Follow Us on Instagram <ArrowRight size={15} />
          </a>
        </div>
      </section>

      <section className="py-20 px-4 bg-espresso text-cream-200 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl font-bold mb-4">Ready to Write Your Own Story?</h2>
          <p className="text-cream-300 mb-8">Join thousands of clients who have transformed their health and confidence at Advanced Med MedSpa Lounge.</p>
          <Link to="/book" className="inline-flex items-center gap-2 bg-cream-100 hover:bg-white text-espresso text-[10px] tracking-widest uppercase font-medium px-10 py-4 transition-colors">
            Book Your First Appointment <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  )
}
