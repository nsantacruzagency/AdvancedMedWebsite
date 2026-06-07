import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <span className="font-serif text-xl font-bold text-white block">
                ADVANCED MED
              </span>
              <span className="text-xs tracking-[0.2em] text-gold-400 uppercase font-semibold">
                MedSpa Lounge
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Where science meets beauty. Luxury medical aesthetic treatments
              tailored to reveal your best self.
            </p>
            <div className="flex gap-3 mt-5">
              <a href="#" aria-label="Instagram" className="p-2 bg-gray-800 rounded-full hover:bg-gold-500 transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="#" aria-label="Facebook" className="p-2 bg-gray-800 rounded-full hover:bg-gold-500 transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {[
                'Weight Loss',
                'Body Contouring',
                'Skin Tightening',
                'Botox',
                'Korean Facials',
                'Chemical Peels',
                'Massages',
              ].map((s) => (
                <li key={s}>
                  <Link
                    to="/services"
                    className="hover:text-gold-400 transition-colors"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {[
                { label: 'Home', path: '/' },
                { label: 'Skin Concerns', path: '/skin-concerns' },
                { label: 'About Us', path: '/about' },
                { label: 'Contact', path: '/contact' },
                { label: 'Book Now', path: '/book' },
              ].map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.path}
                    className="hover:text-gold-400 transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Contact Us
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <MapPin size={15} className="mt-0.5 text-gold-400 flex-shrink-0" />
                <span>123 Luxury Blvd, Suite 200<br />Miami, FL 33101</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={15} className="text-gold-400 flex-shrink-0" />
                <a href="tel:+13055550100" className="hover:text-gold-400 transition-colors">
                  (305) 555-0100
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={15} className="text-gold-400 flex-shrink-0" />
                <a href="mailto:hello@advancedmed.com" className="hover:text-gold-400 transition-colors">
                  hello@advancedmed.com
                </a>
              </li>
            </ul>
            <div className="mt-5 text-xs text-gray-500 space-y-1">
              <p>Mon–Fri: 9am – 7pm</p>
              <p>Saturday: 9am – 5pm</p>
              <p>Sunday: By Appointment</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Advanced Med MedSpa Lounge. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
