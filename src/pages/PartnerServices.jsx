import { ArrowRight, Instagram } from 'lucide-react'
import HeroPhoto from '../components/HeroPhoto'
import SectionHeader from '../components/SectionHeader'

const partners = [
  {
    name: 'Melissa',
    photo: '/images/partners/melissa.jpg',
    tagline: 'Waxing & Lash Artist',
    description: 'Melissa is our trusted partner for waxing and eyelash services. Whether you\'re looking for a clean, precise wax or gorgeous lash extensions, Melissa delivers flawless results with a gentle, professional touch.',
    services: [
      'Face Waxing',
      'Body Waxing',
      'Eyelash Extensions',
    ],
    instagram: 'https://www.instagram.com/advancedmedspaofficial/',
  },
  {
    name: 'Gre',
    photo: '/images/partners/gre.jpg',
    tagline: 'Permanent Makeup & Beauty Courses',
    description: 'Gre is our trusted partner for permanent makeup artistry and professional beauty education. With a meticulous eye for natural-looking results, Gre specializes in enhancing your features with lasting precision.',
    services: [
      'Eyebrow Microblading & Ombre Powder Brows',
      'Eyelash Extensions & Lifts',
      'Lip Blush',
      'Scalp Micropigmentation',
      'Professional Beauty Courses',
    ],
    instagram: 'https://www.instagram.com/advancedmedspaofficial/',
  },
]


export default function PartnerServices() {
  return (
    <div className="bg-white">
      <HeroPhoto
        eyebrow="Advanced Med"
        title={<>Our Partner<br />Services</>}
        subtitle="Trusted specialists we collaborate with to offer you a complete beauty and wellness experience under one roof."
        gradient="from-espresso-800 via-spa-800 to-espresso-700"
        gradientDir="to-bl"
        radialPos="bottom_right"
      />

      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            eyebrow="Trusted Partners"
            title="Services Available Through Our Network"
            subtitle="While these services are offered by independent specialists, they are available through Advanced Med and held to the same standard of excellence we bring to every treatment."
          />

          <div className="mt-12 space-y-10">
            {partners.map((partner) => (
              <div key={partner.name} className="bg-cream-100 border border-cream-300 p-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                  {/* Photo */}
                  <div className="w-full overflow-hidden bg-cream-200" style={{ aspectRatio: '4/5' }}>
                    <img
                      src={partner.photo}
                      alt={`${partner.name} — Partner Specialist`}
                      className="w-full h-full object-cover"
                      onError={e => { e.currentTarget.style.display = 'none' }}
                    />
                  </div>
                  {/* Info */}
                  <div>
                    <p className="text-spa text-[10px] font-medium uppercase mb-2" style={{ letterSpacing: '0.28em' }}>
                      Partner Specialist
                    </p>
                    <h2 className="font-serif text-4xl font-light text-espresso mb-2">{partner.name}</h2>
                    <p className="text-espresso-400 text-sm font-medium uppercase tracking-widest mb-6">{partner.tagline}</p>
                    <p className="text-espresso-500 leading-relaxed mb-8">{partner.description}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {partner.services.map((service) => (
                        <div key={service} className="flex items-center gap-3 text-espresso-500 text-sm">
                          <div className="w-1.5 h-1.5 bg-spa rounded-full flex-shrink-0" />
                          {service}
                        </div>
                      ))}
                    </div>
                    {partner.instagram && (
                      <a
                        href={partner.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mt-8 text-sm font-medium text-espresso-500 hover:text-espresso transition-colors group"
                      >
                        <Instagram className="w-4 h-4 text-spa group-hover:text-espresso transition-colors" />
                        See {partner.name}'s work on Instagram
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-espresso text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-4xl font-bold text-cream-100 mb-4">Interested in a Partner Service?</h2>
          <p className="text-cream-300 text-lg mb-10 leading-relaxed">
            Contact us and we'll connect you with the right specialist for your needs.
          </p>
          <a
            href="https://advancedmedspaofficial.janeapp.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-cream-100 hover:bg-white text-espresso text-[10px] tracking-widest uppercase font-medium px-10 py-4 transition-all duration-300"
          >
            Get in Touch <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  )
}
