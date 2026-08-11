import { ArrowRight, CheckCircle } from 'lucide-react'
import SectionHeader from '../../components/SectionHeader'
import HeroPhoto from '../../components/HeroPhoto'
import FAQ from '../../components/FAQ'

const faqItems = [
  {
    q: 'When can I start post-operative massage?',
    a: 'Most clients begin post-operative massage as early as 72 hours after surgery, depending on the procedure and their surgeon\'s guidance. For BBL procedures, we wait until your surgeon clears you for massage — typically 2–4 weeks post-op. For liposuction and tummy tucks, earlier is almost always better. We coordinate with your surgical team when appropriate to ensure your protocol is perfectly timed.',
  },
  {
    q: 'Why is lymphatic drainage so important after surgery?',
    a: 'Surgery triggers a significant inflammatory response — the body floods the treated area with fluid, white blood cells, and repair proteins. Without proper drainage, this fluid accumulates, hardens into fibrotic tissue, and can permanently alter the texture and smoothness of your surgical results. Lymphatic drainage massage actively removes this fluid before it solidifies, preventing the hard lumps, waves, and uneven contours that can otherwise develop.',
  },
  {
    q: 'How many sessions will I need after my surgery?',
    a: 'The number of sessions depends on the procedure and your individual healing response. Most liposuction patients benefit from 6–12 sessions. BBL and tummy tuck patients typically need 8–15 sessions for optimal results. We generally recommend beginning weekly, transitioning to bi-weekly as swelling resolves. Your therapist will assess your healing at each visit and adjust accordingly.',
  },
  {
    q: 'Is post-operative massage painful?',
    a: 'Immediately after surgery, tissues are tender and we adapt our pressure and techniques accordingly. Our post-operative massage is not a deep-pressure treatment — it uses gentle, precise strokes specifically designed for healing tissue. Most clients find it relieving rather than uncomfortable, particularly as the reduction in swelling becomes noticeable during the session.',
  },
  {
    q: 'My surgeon is in another city. Can you still help me?',
    a: 'Absolutely. We work with patients whose surgeons are anywhere — including medical tourism procedures performed abroad. We simply ask that you bring your discharge instructions and any post-operative garments your surgeon provided. Our therapists are experienced with international surgical patients and will follow your surgeon\'s protocol while adding our expertise in lymphatic recovery.',
  },
  {
    q: 'Can post-operative massage fix uneven results?',
    a: 'Early intervention can significantly improve and smooth uneven post-surgical results, particularly lumps, bumps, and hardened areas caused by fibrosis. The earlier we begin, the more effectively we can guide fluid away and prevent permanent hardening. For more established fibrosis (several months post-op), our RF treatments combined with specialized massage can still produce meaningful improvement — though earlier is always better.',
  },
]

export default function PostOpMassages() {
  return (
    <div className="bg-white">
      <HeroPhoto
        eyebrow="Surgical Recovery"
        title={<>Post-Op<br />Massages</>}
        subtitle="Surgery is an investment. Our post-operative massage protocols protect and maximize that investment — reducing swelling, preventing fibrosis, and giving you the smoothest, fastest recovery possible in Deerfield Beach / Boca Raton"
        gradient="from-espresso-800 via-espresso-700 to-spa-800"
        gradientDir="to-b"
        radialPos="top"
      />

      {/* Why Post-Op Massage Matters */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Why It Matters"
            title="The Science of Surgical Recovery"
            subtitle="What happens in the weeks after surgery determines the quality of your final results just as much as the surgery itself."
          />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Prevents Fibrosis', desc: 'Post-surgical fluid, if left to stagnate, hardens into fibrotic tissue — creating lumps, waves, and irregular contours. Lymphatic drainage removes fluid before it can solidify, protecting the smoothness of your results.' },
              { title: 'Accelerates Healing', desc: 'By stimulating lymphatic flow, we clear inflammatory byproducts from surgical sites up to 50% faster than the body can manage alone. Less inflammation means faster tissue repair and a shorter, more comfortable recovery.' },
              { title: 'Maximizes Results', desc: 'Surgeons sculpt your body — post-operative massage sculpts your healing. Proper recovery care directly determines how close to your surgeon\'s vision your final results will be.' },
            ].map((b) => (
              <div key={b.title} className="bg-cream-100 p-8 border border-cream-300 hover:border-spa hover:shadow-lg transition-all duration-300">
                <div className="w-1 h-8 bg-spa mb-5" />
                <h4 className="font-serif font-bold text-espresso text-xl mb-3">{b.title}</h4>
                <p className="text-espresso-500 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BBL Section */}
      <section className="py-24 px-6 bg-cream-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-spa text-[10px] font-medium uppercase mb-3" style={{ letterSpacing: '0.28em' }}>Brazilian Butt Lift Recovery</p>
              <h2 className="font-serif text-4xl font-light text-espresso mb-6">BBL Post-Op Massage</h2>
              <p className="text-espresso-500 leading-relaxed mb-4">
                A Brazilian Butt Lift (BBL) transfers fat from donor sites — typically the abdomen, flanks, or thighs — to the buttocks. Both the donor areas and the recipient site require specialized post-operative care to heal properly and maintain the volume and shape your surgeon worked to create.
              </p>
              <p className="text-espresso-500 leading-relaxed mb-4">
                In the donor areas, lymphatic drainage prevents the formation of seromas (fluid pockets), fibrosis, and the hardened, lumpy texture that develops when post-liposuction fluid isn't properly cleared. In the buttocks, gentle techniques support healthy fat graft survival by optimizing circulation without compromising the newly transferred fat cells.
              </p>
              <p className="text-espresso-500 leading-relaxed mb-8">
                BBL massage timing is critical. We follow your surgeon's clearance protocol precisely — typically beginning donor site massage within the first week, and buttocks massage only once your surgeon has confirmed adequate graft survival, usually 3–4 weeks post-surgery.
              </p>
              <ul className="space-y-3">
                {[
                  'Donor site lymphatic drainage from day 3–5',
                  'Prevents seroma and fibrosis formation',
                  'Supports fat graft survival in transfer sites',
                  'Smooths liposuction contours',
                  'Reduces bruising and visible swelling faster',
                  'Surgeon-coordination available',
                ].map((b, i) => (
                  <li key={i} className="flex items-start gap-3 text-espresso-500">
                    <CheckCircle className="w-5 h-5 text-spa flex-shrink-0 mt-0.5" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-espresso p-10 text-cream-200">
              <h3 className="font-serif text-xl font-bold text-spa-300 mb-6">BBL Recovery Timeline</h3>
              <div className="space-y-6">
                {[
                  { week: 'Days 3–7', action: 'Begin donor site lymphatic drainage. Gentle techniques only. Follow all surgeon positioning restrictions for the buttocks.' },
                  { week: 'Weeks 1–3', action: 'Continue donor site drainage. Monitor for seromas. Begin softening fibrotic areas in liposuction zones.' },
                  { week: 'Weeks 3–4+', action: 'Surgeon clears buttocks for massage. Begin gentle glute lymphatic drainage and contouring when approved.' },
                  { week: 'Months 1–3', action: 'Full protocol including sculpting massage, RF treatments, and compression coordination for optimal final shaping.' },
                ].map((s) => (
                  <div key={s.week} className="flex gap-4">
                    <div className="w-20 flex-shrink-0 text-spa-300 text-[10px] font-bold tracking-widest uppercase pt-0.5">{s.week}</div>
                    <p className="text-cream-300 text-sm leading-relaxed">{s.action}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tummy Tuck Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="bg-espresso p-10 text-cream-200 order-2 md:order-1">
              <h3 className="font-serif text-xl font-bold text-spa-300 mb-6">What Happens Without Post-Op Massage</h3>
              <div className="space-y-4">
                {[
                  { issue: 'Fibrosis', desc: 'Hardened bands of scar tissue beneath the skin create permanent ripples, waves, and tight areas that distort your results.' },
                  { issue: 'Seroma', desc: 'Fluid pockets that can expand, become painful, and require medical drainage — sometimes repeatedly.' },
                  { issue: 'Prolonged Swelling', desc: 'Without lymphatic assistance, abdominal swelling after a tummy tuck can persist for 6–9 months instead of resolving in weeks.' },
                  { issue: 'Uneven Contours', desc: 'Asymmetric healing, irregular skin texture, and visible scar tissue that undermine your investment.' },
                ].map((item) => (
                  <div key={item.issue}>
                    <p className="text-spa-300 text-[10px] font-bold tracking-widest uppercase mb-1">{item.issue}</p>
                    <p className="text-cream-300 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 md:order-2">
              <p className="text-spa text-[10px] font-medium uppercase mb-3" style={{ letterSpacing: '0.28em' }}>Abdominoplasty Recovery</p>
              <h2 className="font-serif text-4xl font-light text-espresso mb-6">Tummy Tuck Post-Op Massage</h2>
              <p className="text-espresso-500 leading-relaxed mb-4">
                Abdominoplasty (tummy tuck) is one of the most transformative body contouring surgeries available — but it is also one of the most demanding on the lymphatic system. The procedure disrupts lymphatic vessels across a large portion of the abdomen, which dramatically slows natural fluid clearance and creates significant swelling that can persist for months without intervention.
              </p>
              <p className="text-espresso-500 leading-relaxed mb-4">
                Our tummy tuck recovery protocol begins as soon as your surgeon approves — typically within the first week. We use specialized gentle techniques adapted for post-abdominoplasty tissue: working above and around drains if still in place, carefully avoiding the incision line, and using directional strokes that guide fluid toward the intact lymphatic pathways above the incision.
              </p>
              <p className="text-espresso-500 leading-relaxed mb-8">
                As healing progresses, we introduce progressively deeper techniques to soften fibrotic tissue, improve scar mobility, and restore natural skin texture across the abdomen. Clients who complete a full post-op massage series consistently report dramatically smoother, more even results and a significantly shorter perceived recovery.
              </p>
              <ul className="space-y-3">
                {[
                  'Begin within days 3–7 post-surgery',
                  'Drain-safe protocols available',
                  'Prevents and resolves fibrotic tissue',
                  'Dramatically reduces swelling duration',
                  'Scar tissue mobility work',
                  'Restores sensation in numb areas over time',
                ].map((b, i) => (
                  <li key={i} className="flex items-start gap-3 text-espresso-500">
                    <CheckCircle className="w-5 h-5 text-spa flex-shrink-0 mt-0.5" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Liposuction Section */}
      <section className="py-24 px-6 bg-cream-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-spa text-[10px] font-medium uppercase mb-3" style={{ letterSpacing: '0.28em' }}>Liposuction Recovery</p>
              <h2 className="font-serif text-4xl font-light text-espresso mb-6">Liposuction Post-Op Massage</h2>
              <p className="text-espresso-500 leading-relaxed mb-4">
                Liposuction removes fat cells through mechanical disruption — a process that also disrupts lymphatic vessels, blood vessels, and connective tissue throughout the treated area. The body responds with significant inflammation and fluid accumulation, which, if not actively managed, leads to the fibrosis, hard lumps, and uneven skin texture that patients fear most.
              </p>
              <p className="text-espresso-500 leading-relaxed mb-4">
                Beginning lymphatic drainage massage within the first 72 hours (when approved) is one of the most impactful decisions a liposuction patient can make. At this early stage, fluid is still mobile and can be redirected before it hardens. Every day of delay makes the fluid progressively more difficult to move.
              </p>
              <p className="text-espresso-500 leading-relaxed mb-8">
                Our liposuction recovery protocol starts gently and deepens as healing progresses — addressing seromas, dissolving fibrotic tissue with RF treatments when needed, and sculpting the final contours to be as smooth and defined as possible. We treat every treated zone with targeted techniques, whether you had liposuction on the abdomen, flanks, arms, thighs, back, or chin.
              </p>
              <ul className="space-y-3">
                {[
                  'Begin as early as 72 hours post-surgery',
                  'All body zones treated',
                  'Prevents and softens fibrosis',
                  'Seroma prevention and management',
                  'RF therapy for established hardness',
                  'Compression garment coordination',
                ].map((b, i) => (
                  <li key={i} className="flex items-start gap-3 text-espresso-500">
                    <CheckCircle className="w-5 h-5 text-spa flex-shrink-0 mt-0.5" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <div className="bg-white p-8 border border-cream-300">
                <h3 className="font-serif text-xl font-bold text-espresso mb-4">The Most Common Post-Lipo Complications We Prevent</h3>
                <div className="space-y-4">
                  {[
                    { name: 'Fibrosis', desc: 'Hard, irregular bands of scar tissue that form when post-surgical fluid hardens. Treated early with lymphatic drainage; treated later with RF + massage.' },
                    { name: 'Seromas', desc: 'Fluid pockets that form in spaces left by removed fat. Preventable with early and consistent lymphatic drainage massage.' },
                    { name: 'Uneven Contours', desc: 'Waves, lumps, and asymmetry from uneven healing or fibrotic bands. Addressed through targeted deep tissue and sculpting work.' },
                    { name: 'Prolonged Swelling', desc: 'Lymphatic drainage can reduce the duration of post-lipo swelling from 6+ months to 6–8 weeks with consistent sessions.' },
                  ].map((c) => (
                    <div key={c.name} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-spa rounded-full flex-shrink-0 mt-2" />
                      <div>
                        <p className="font-semibold text-espresso text-sm mb-0.5">{c.name}</p>
                        <p className="text-espresso-500 text-sm leading-relaxed">{c.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-spa p-8 text-cream-100">
                <p className="font-serif text-lg font-bold mb-3">Start Within 72 Hours</p>
                <p className="text-cream-200 text-sm leading-relaxed">The first 72 hours after liposuction are the most critical window for lymphatic intervention. Fluid is still mobile, inflammation is at its peak, and drainage can prevent weeks of complications. Book your first session before your surgery so it's already scheduled for the right moment.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-espresso text-cream-200 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-spa-300 text-[10px] font-medium uppercase mb-5" style={{ letterSpacing: '0.28em' }}>Protect Your Investment</p>
          <h2 className="font-serif text-4xl font-bold mb-4">Heal Faster. Look Better. Feel Amazing.</h2>
          <p className="text-cream-300 text-lg mb-10 leading-relaxed">
            Book your post-operative consultation before your surgery date so your recovery protocol is ready from day one. Our therapists work with your surgical team to give you the smoothest, fastest healing possible.
          </p>
          <a
            href="https://advancedmedspaofficial.janeapp.com/" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-cream-100 hover:bg-white text-espresso text-[10px] tracking-widest uppercase font-medium px-10 py-4 transition-all duration-300"
          >
            Book Your Recovery Session <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      <FAQ items={faqItems} />
    </div>
  )
}
