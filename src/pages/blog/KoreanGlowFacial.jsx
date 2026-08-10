import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import HeroPhoto from '../../components/HeroPhoto'

function H2({ children }) {
  return (
    <h2 className="font-serif text-2xl font-bold text-espresso mt-12 mb-3">{children}</h2>
  )
}

function Pullquote({ children }) {
  return (
    <blockquote
      className="my-8 pl-5 font-serif text-lg text-espresso italic leading-relaxed"
      style={{ borderLeft: '3px solid #d9542c' }}
    >
      "{children}"
    </blockquote>
  )
}

function P({ children }) {
  return <p className="text-espresso-600 leading-relaxed mb-4">{children}</p>
}

export default function KoreanGlowFacial() {
  return (
    <div className="bg-white">
      <HeroPhoto
        eyebrow="The Treatment Editorial Blog"
        title={<>The Korean Glow Facial</>}
        subtitle="And what it actually does for your skin."
        gradient="from-espresso-800 via-spa-800 to-espresso-700"
        gradientDir="to-br"
        radialPos="top_right"
      />

      {/* Article */}
      <section className="py-20 px-6 bg-cream-100">
        <div className="max-w-2xl mx-auto">

          {/* Category tag */}
          <div className="mb-10">
            <span
              className="inline-block text-[9px] font-semibold tracking-widest uppercase px-4 py-2 rounded-full text-cream-100"
              style={{ backgroundColor: '#d9542c' }}
            >
              Skin
            </span>
          </div>

          <P>If you've been hearing about the Korean Glow Facial and wondering what makes it different from a traditional facial, the answer is simple: it's all about the layers.</P>
          <P>At Advanced Med Spa, our Korean Glow Facial is designed around the Korean approach to skincare — thorough cleansing, intensive hydration, carefully layered skincare, and a focus on creating that smooth, luminous, glass-skin appearance.</P>

          <H2>What Makes Our Korean Glow Facial Special?</H2>
          <P>Our Korean Glow Facial isn't simply a facial with a Korean name.</P>
          <P>We use medical-grade Korean skincare products shipped directly from Korea — a country and beauty culture renowned worldwide for its advanced approach to skincare and aesthetics.</P>
          <P>The treatment is built around triple cleansing, gentle exfoliation, multiple layers of targeted serums, and a double-mask system to give your skin an intensive hydration and radiance boost.</P>

          <Pullquote>The best results come from treatments matched to your specific skin, goals, and lifestyle — not from following a trend.</Pullquote>

          <H2>Is a Korean Glow Facial the Same as a Regular Facial?</H2>
          <P>Not exactly.</P>
          <P>While a traditional facial may focus on cleansing, exfoliation, extractions, and relaxation, our Korean Glow Facial puts a much stronger emphasis on layered hydration, intensive skincare, and achieving a luminous complexion.</P>
          <P>The treatment is inspired by the Korean philosophy that beautiful skin starts with excellent skin care. The multi-step approach is what gives the Korean Glow Facial its signature fresh, dewy appearance.</P>

          <H2>Why Korean Skincare?</H2>
          <P>Korean skincare has become globally recognized for its emphasis on consistency, hydration, prevention, innovation, and detailed skincare routines.</P>
          <P>Rather than relying on one miracle product, the Korean approach often focuses on giving the skin what it needs through multiple carefully selected steps.</P>
          <P>That's the philosophy behind our Korean Glow Facial. We wanted to bring that experience into Advanced Med Spa using professional, medical-grade Korean products shipped from Korea and a treatment protocol designed to give your skin the ultimate hydration and glow experience.</P>

          <H2>Who Is a Korean Glow Facial Good For?</H2>
          <P>Our Korean Glow Facial can be a great option if your skin is looking:</P>
          <ul className="space-y-2 mb-6 pl-1">
            {['Dull', 'Dry or dehydrated', 'Rough', 'Tired', 'Lacking radiance', 'Uneven in texture'].map((item) => (
              <li key={item} className="flex items-center gap-3 text-espresso-600 text-sm">
                <div className="w-1.5 h-1.5 rounded-full flex-shrink-0 bg-spa" />
                {item}
              </li>
            ))}
          </ul>
          <P>It's also perfect when you simply want your skin to look fresh, smooth, hydrated, and glowing.</P>

          <H2>How Often Should You Get a Korean Glow Facial?</H2>
          <P>For the best ongoing results, we recommend getting your Korean Glow Facial approximately once every three weeks. If that schedule doesn't work for you, we recommend getting one at least once a month.</P>
          <P>Your skin is constantly going through its natural renewal process. A consistent professional skincare routine can help you stay ahead of dryness, buildup, dullness, and dehydration — rather than waiting until your skin looks tired before treating it.</P>

          <Pullquote>Think of it as maintenance for your glow. One facial can give your skin an immediate refresh — but consistent treatments are where the real skincare routine comes in.</Pullquote>

          <H2>What Can You Expect After Your Treatment?</H2>
          <P>One of the best things about the Korean Glow Facial is that you can see and feel a difference in your skin immediately afterward.</P>
          <P>That signature glow — thanks to our perfect formulation of triple cleansing, multiple layers of hydration, double masking, and Korean skincare technology.</P>
          <P>That's the Advanced Med Spa approach to the Korean Glow.</P>

          {/* Back to blog */}
          <div className="mt-16 pt-10 border-t border-cream-300">
            <Link
              to="/treatment-edit"
              className="inline-flex items-center gap-2 text-sm font-medium text-espresso-500 hover:text-espresso transition-colors"
            >
              <ArrowRight className="w-4 h-4 rotate-180" />
              Back to The Treatment Editorial Blog
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Card */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="rounded-2xl px-10 py-12 text-center" style={{ backgroundColor: '#2D4A3E' }}>
            <h2 className="font-serif text-2xl font-bold text-cream-100 mb-4">Ready to see for yourself?</h2>
            <p className="text-cream-300 leading-relaxed mb-8">
              Book a consultation and get a plan built around your goals — not a generic package.
            </p>
            <a
              href="https://advancedmedspaofficial.janeapp.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-cream-100 text-[10px] tracking-widest uppercase font-semibold px-8 py-4 transition-all duration-300 hover:opacity-90"
              style={{ backgroundColor: '#d9542c' }}
            >
              Book a Consultation <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
