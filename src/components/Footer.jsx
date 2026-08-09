import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin } from 'lucide-react'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="bg-espresso text-cream-300">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">

          {/* Brand column */}
          <div className="md:col-span-4">
            <Logo variant="horizontal" dark />
            <p className="mt-6 text-[13px] text-cream-400 leading-relaxed max-w-xs font-light">
              Where medical science meets luxury care. Advanced treatments designed to restore confidence, vitality, and radiance.
            </p>
          </div>

          {/* Services */}
          <div className="md:col-span-3">
            <h4 className="text-cream-200 text-[10px] font-medium tracking-widest uppercase mb-5">
              Treatments
            </h4>
            <ul className="space-y-2.5">
              {[
                ['Non-Invasive Weight Loss', '/non-invasive-weight-loss'],
                ['Body Contouring',          '/cellulite-skin-tightening'],
                ['Massages',                 '/body-contouring-massages'],
                ['Peptides + GLPs',          '/peptides-glps'],
                ['IVs + IM Shots',           '/ivs-intramuscular-shots'],
                ['Hair Restoration',         '/hair-restoration-stem-cells'],
                ['Blood Tests & Longevity',  '/what-do-blood-tests-tell-us'],
              ].map(([label, path]) => (
                <li key={path}>
                  <Link to={path} className="text-[12px] text-cream-400 hover:text-spa transition-colors font-light">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div className="md:col-span-2">
            <h4 className="text-cream-200 text-[10px] font-medium tracking-widest uppercase mb-5">
              Navigate
            </h4>
            <ul className="space-y-2.5">
              {[
                ['Home',         '/'],
                ['Skin Concerns','/skin-concerns/acne'],
                ['About Us',     '/about'],
                ['Testimonials', '/testimonials'],
                ['Memberships',  '/memberships'],
                ['Shop Products', '/products'],
              ].map(([label, path]) => (
                <li key={path}>
                  <Link to={path} className="text-[12px] text-cream-400 hover:text-spa transition-colors font-light">
                    {label}
                  </Link>
                </li>
              ))}
              <li>
                <a href="https://advancedmedspaofficial.janeapp.com/" target="_blank" rel="noopener noreferrer" className="text-[12px] text-cream-400 hover:text-spa transition-colors font-light">
                  Book Now
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h4 className="text-cream-200 text-[10px] font-medium tracking-widest uppercase mb-5">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={13} className="mt-0.5 text-spa flex-shrink-0" />
                <span className="text-[12px] text-cream-400 font-light leading-relaxed">
                  44 Northeast 2nd Avenue<br />Deerfield Beach, FL 33441
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={13} className="text-spa flex-shrink-0" />
                <a href="tel:+15613320225" className="text-[12px] text-cream-400 hover:text-spa transition-colors font-light">
                  561-332-0225
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={13} className="text-spa flex-shrink-0" />
                <a href="mailto:info@advmedspa.com" className="text-[12px] text-cream-400 hover:text-spa transition-colors font-light">
                  info@advmedspa.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-spa flex-shrink-0">
                  <rect x="2" y="2" width="20" height="20" rx="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
                <a href="https://www.instagram.com/advancedmedspaofficial/" target="_blank" rel="noopener noreferrer" className="text-[12px] text-cream-400 hover:text-spa transition-colors font-light">
                  @advancedmedspaofficial
                </a>
              </li>
            </ul>
            <div className="mt-6 text-[11px] text-espresso-400 space-y-1">
              <p>Mon &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; By Appointment</p>
              <p>Tue – Fri &nbsp;&nbsp; 10:00 AM – 8:00 PM</p>
              <p>Saturday &nbsp; 8:00 AM – 4:00 PM</p>
              <p>Sunday &nbsp;&nbsp;&nbsp; By Appointment</p>
            </div>
          </div>
        </div>

        <div className="border-t border-espresso-600 mt-14 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-[11px] text-espresso-400">
            &copy; {new Date().getFullYear()} Advanced Med MedSpa Lounge. All rights reserved.
          </p>
          <p className="text-[11px] text-espresso-400">
            Miami, Florida
          </p>
        </div>
      </div>
    </footer>
  )
}
