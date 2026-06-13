import { Link } from 'react-router-dom'
import { ArrowRight, Mail, ShoppingBag, Package, Truck } from 'lucide-react'
import HeroPhoto from '../components/HeroPhoto'
import SectionHeader from '../components/SectionHeader'

const categories = [
  {
    name: 'Cleansers & Exfoliants',
    desc: 'Gentle yet effective cleansers, enzyme exfoliants, and AHA/BHA formulas that prepare skin for treatment.',
    items: [
      { name: 'Balancing Gel Cleanser', size: '200ml', type: 'All skin types' },
      { name: 'Brightening Enzyme Polish', size: '75ml', type: 'Dull / uneven skin' },
      { name: 'Micellar Cleansing Water', size: '250ml', type: 'Sensitive skin' },
    ],
  },
  {
    name: 'Toners & Essences',
    desc: 'Hydrating, pH-balancing toners and lightweight essences formulated for maximum absorption layering.',
    items: [
      { name: 'Hyaluronic Toning Mist', size: '150ml', type: 'Dehydrated skin' },
      { name: 'Fermented Brightening Essence', size: '120ml', type: 'Hyperpigmentation' },
      { name: 'Centella Calming Essence', size: '120ml', type: 'Redness / reactive skin' },
    ],
  },
  {
    name: 'Serums & Actives',
    desc: 'Medical-grade serums with clinically proven concentrations of vitamin C, retinoids, peptides, and niacinamide.',
    items: [
      { name: '20% Vitamin C + Ferulic Serum', size: '30ml', type: 'Brightening / antioxidant' },
      { name: 'Advanced Retinol Complex 0.5%', size: '30ml', type: 'Anti-aging / cell renewal' },
      { name: 'Multi-Peptide Firming Serum', size: '30ml', type: 'Lifting / elasticity' },
      { name: '10% Niacinamide + Zinc Serum', size: '30ml', type: 'Pore care / oily skin' },
      { name: 'Tranexamic Acid Dark Spot Serum', size: '30ml', type: 'Hyperpigmentation' },
    ],
  },
  {
    name: 'Moisturizers & Barriers',
    desc: 'Barrier-strengthening creams, oil-free gels, and rich emollients to lock in hydration and protect skin integrity.',
    items: [
      { name: 'Ceramide Barrier Cream', size: '50ml', type: 'Dry / compromised skin' },
      { name: 'Oil-Free Hydra-Gel', size: '50ml', type: 'Oily / acne-prone skin' },
      { name: 'Overnight Repair Sleeping Mask', size: '80ml', type: 'All skin types' },
    ],
  },
  {
    name: 'SPF & Protection',
    desc: 'Broad-spectrum mineral and hybrid sunscreens — lightweight, no white cast, and makeup-friendly.',
    items: [
      { name: 'Invisible Shield SPF 50+ Mineral', size: '50ml', type: 'All skin types' },
      { name: 'Tinted Mineral Sunscreen SPF 50', size: '50ml', type: 'Light / medium coverage' },
    ],
  },
  {
    name: 'Treatments & Masks',
    desc: 'Professional-grade treatment masks, sheet masks, and targeted spot treatments for at-home use.',
    items: [
      { name: 'Clarifying Kaolin Clay Mask', size: '100ml', type: 'Oily / congested skin' },
      { name: 'Glass Skin Sheet Mask (Box of 10)', size: 'Universal', type: 'All skin types' },
      { name: 'AHA Resurfacing Peel Pad (30ct)', size: 'Universal', type: 'Texture / dullness' },
    ],
  },
]

export default function Products() {
  return (
    <>
      <HeroPhoto
        eyebrow="Advanced Med — Retail"
        title={<>Professional Skincare<br />for Home Use</>}
        subtitle="Medical-grade formulations and curated K-beauty essentials selected by our clinical team — available to order directly."
        gradient="from-spa-800 via-espresso-800 to-espresso-900"
        gradientDir="to-r"
        radialPos="top_right"
      />

      {/* ── INTRO ── */}
      <section className="py-16 px-5 sm:px-8 lg:px-12 bg-cream-100 border-b border-cream-300">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <ShoppingBag size={22} className="text-spa" />,
              title: 'Clinically Curated',
              desc: 'Every product is selected or formulated to complement our in-clinic treatments and support your results at home.',
            },
            {
              icon: <Package size={22} className="text-spa" />,
              title: 'Order by Email',
              desc: 'To purchase, email us with the products you\'d like and we\'ll confirm availability, pricing, and shipping details.',
            },
            {
              icon: <Truck size={22} className="text-spa" />,
              title: 'Shipped to You',
              desc: 'We ship throughout the continental United States. Local pickup is also available at our Miami location.',
            },
          ].map((item) => (
            <div key={item.title} className="flex items-start gap-4">
              <div className="mt-0.5 flex-shrink-0">{item.icon}</div>
              <div>
                <h3 className="font-serif text-lg font-light text-espresso mb-1.5">{item.title}</h3>
                <p className="text-espresso-500 text-[13px] font-light leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── HOW TO ORDER ── */}
      <section className="py-14 px-5 sm:px-8 lg:px-12 bg-espresso">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
          <div className="flex-1">
            <p className="text-spa-300 text-[10px] font-medium uppercase mb-3" style={{ letterSpacing: '0.28em' }}>
              How to Order
            </p>
            <h2 className="font-serif text-3xl font-light text-cream-200 mb-3">
              Ready to purchase? Email us.
            </h2>
            <p className="text-cream-400 text-[13px] font-light leading-relaxed max-w-lg">
              Our team will reply within one business day to confirm your order, share pricing, and arrange shipping or local pickup.
            </p>
          </div>
          <a
            href="mailto:hello@advancedmedspaofficial.com?subject=Product Order Inquiry"
            className="flex-shrink-0 inline-flex items-center gap-3 bg-spa text-white text-[10px] font-medium tracking-widest uppercase px-8 py-4 hover:bg-spa-500 transition-colors"
          >
            <Mail size={14} />
            hello@advancedmedspaofficial.com
          </a>
        </div>
      </section>

      {/* ── PRODUCT CATALOG ── */}
      <section className="py-20 px-5 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="Our Retail Collection"
            title="Shop by Category"
            subtitle="Browse our full selection below. Email us to order — we'll handle the rest."
          />

          <div className="space-y-16">
            {categories.map((cat) => (
              <div key={cat.name}>
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 mb-6 pb-4 border-b border-cream-300">
                  <div>
                    <h3 className="font-serif text-2xl font-light text-espresso">{cat.name}</h3>
                    <p className="text-espresso-400 text-[12px] font-light mt-1">{cat.desc}</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {cat.items.map((item) => (
                    <div
                      key={item.name}
                      className="bg-cream-100 border border-cream-300 p-6 hover:border-spa transition-colors group"
                    >
                      {/* Product image placeholder */}
                      <div className="w-full aspect-square bg-cream-300 mb-5 flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-cream-200 to-cream-400" />
                        <div className="relative text-center">
                          <p className="text-espresso-400 text-[10px] uppercase tracking-widest font-light">Product</p>
                          <p className="text-espresso-300 text-[9px] mt-1 font-light">Photo</p>
                        </div>
                      </div>
                      <h4 className="font-serif text-[16px] font-light text-espresso leading-snug mb-1 group-hover:text-spa transition-colors">
                        {item.name}
                      </h4>
                      <p className="text-espresso-400 text-[11px] font-light">{item.size}</p>
                      <p className="text-spa text-[10px] uppercase tracking-wide font-medium mt-2">{item.type}</p>
                      <a
                        href="mailto:hello@advancedmedspaofficial.com?subject=Product Order Inquiry"
                        className="mt-5 inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-widest text-espresso border-b border-cream-400 pb-0.5 hover:border-spa hover:text-spa transition-colors"
                      >
                        Inquire to Order <ArrowRight size={11} />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT TO ORDER CTA ── */}
      <section className="py-20 px-5 sm:px-8 lg:px-12 bg-cream-200 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-spa text-[10px] font-medium uppercase mb-5" style={{ letterSpacing: '0.28em' }}>
            Order Today
          </p>
          <h2 className="font-serif text-4xl font-light text-espresso mb-5 leading-tight">
            Questions About a Product?
          </h2>
          <p className="text-espresso-500 text-[14px] font-light leading-relaxed mb-8 max-w-xl mx-auto">
            Our licensed estheticians are happy to recommend the right products for your skin type and goals. Email us or book an evaluation and we'll build your personalized home care regimen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:hello@advancedmedspaofficial.com?subject=Product Recommendation Request"
              className="inline-flex items-center justify-center gap-3 bg-spa text-cream-100 text-[10px] font-medium tracking-widest uppercase px-9 py-4 hover:bg-spa-600 transition-colors"
            >
              <Mail size={13} /> Email Us to Order
            </a>
            <Link
              href="https://advancedmedspaofficial.janeapp.com/" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 border border-espresso-300 text-espresso text-[10px] font-medium tracking-widest uppercase px-9 py-4 hover:border-espresso hover:bg-cream-300 transition-colors"
            >
              Book a Skin Evaluation <ArrowRight size={13} />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
