import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'

const weightHealthLinks = [
  { label: 'Non-Invasive Weight Loss', path: '/weight-health/non-invasive-weight-loss' },
  { label: 'Body Contouring', path: '/weight-health/body-contouring' },
  { label: 'Massages', path: '/weight-health/massages' },
  { label: 'Peptides + GLPs', path: '/weight-health/peptides-glps' },
  { label: 'IVs + Intramuscular Shots', path: '/weight-health/ivs-shots' },
  { label: 'Hair Restoration', path: '/weight-health/hair-restoration' },
  { label: 'Blood Tests & Longevity', path: '/weight-health/blood-tests-longevity' },
]

const skinConcernLinks = [
  { label: 'Acne & Breakouts', path: '/skin-concerns/acne' },
  { label: 'Aging & Wrinkles', path: '/skin-concerns/aging' },
  { label: 'Hyperpigmentation & Dark Spots', path: '/skin-concerns/hyperpigmentation' },
  { label: 'Stretch Marks & Scars', path: '/skin-concerns/stretch-marks-scars' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const location = useLocation()

  const isActive = (path) => location.pathname.startsWith(path)

  const handleDropdownEnter = (key) => setOpenDropdown(key)
  const handleDropdownLeave = () => setOpenDropdown(null)

  const DropdownMenu = ({ links, id }) =>
    openDropdown === id ? (
      <div className="absolute top-full left-0 mt-1 w-64 bg-white border border-gray-100 rounded-xl shadow-xl py-2 z-50">
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`block px-4 py-2.5 text-sm transition-colors ${
              location.pathname === link.path
                ? 'text-gold-600 bg-gold-50 font-semibold'
                : 'text-gray-700 hover:bg-rose-50 hover:text-gold-600'
            }`}
            onClick={() => setOpenDropdown(null)}
          >
            {link.label}
          </Link>
        ))}
      </div>
    ) : null

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex flex-col leading-tight flex-shrink-0">
            <span className="font-serif text-lg font-bold text-gray-900 tracking-wide">
              ADVANCED MED
            </span>
            <span className="text-[10px] tracking-[0.2em] text-gold-600 uppercase font-semibold">
              MedSpa Lounge
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-5">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors ${
                location.pathname === '/' ? 'text-gold-600' : 'text-gray-700 hover:text-gold-600'
              }`}
            >
              Home
            </Link>

            {/* Weight & Metabolic Health */}
            <div
              className="relative"
              onMouseEnter={() => handleDropdownEnter('weight')}
              onMouseLeave={handleDropdownLeave}
            >
              <button
                className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                  isActive('/weight-health') ? 'text-gold-600' : 'text-gray-700 hover:text-gold-600'
                }`}
              >
                Weight & Metabolic Health
                <ChevronDown size={13} />
              </button>
              <DropdownMenu links={weightHealthLinks} id="weight" />
            </div>

            {/* Skin Concerns */}
            <div
              className="relative"
              onMouseEnter={() => handleDropdownEnter('skin')}
              onMouseLeave={handleDropdownLeave}
            >
              <button
                className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                  isActive('/skin-concerns') ? 'text-gold-600' : 'text-gray-700 hover:text-gold-600'
                }`}
              >
                Skin Concerns
                <ChevronDown size={13} />
              </button>
              <DropdownMenu links={skinConcernLinks} id="skin" />
            </div>

            <Link
              to="/about"
              className={`text-sm font-medium transition-colors ${
                location.pathname === '/about' ? 'text-gold-600' : 'text-gray-700 hover:text-gold-600'
              }`}
            >
              About Us
            </Link>

            <Link
              to="/testimonials"
              className={`text-sm font-medium transition-colors ${
                location.pathname === '/testimonials' ? 'text-gold-600' : 'text-gray-700 hover:text-gold-600'
              }`}
            >
              Testimonials
            </Link>

            <Link
              to="/memberships"
              className={`text-sm font-medium transition-colors ${
                location.pathname === '/memberships' ? 'text-gold-600' : 'text-gray-700 hover:text-gold-600'
              }`}
            >
              Memberships
            </Link>

            <Link
              to="/book"
              className="ml-1 bg-gold-500 hover:bg-gold-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors shadow-sm whitespace-nowrap"
            >
              Contact / Book Now
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-gray-700"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 pb-6 pt-4 space-y-1 max-h-[80vh] overflow-y-auto">
          <Link
            to="/"
            className="block py-2.5 text-sm font-medium text-gray-700"
            onClick={() => setMobileOpen(false)}
          >
            Home
          </Link>

          <div className="py-1">
            <p className="text-xs font-bold text-gold-500 uppercase tracking-wider py-2">
              Weight & Metabolic Health
            </p>
            {weightHealthLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block py-2 pl-3 text-sm text-gray-600 hover:text-gold-600"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="py-1">
            <p className="text-xs font-bold text-gold-500 uppercase tracking-wider py-2">
              Skin Concerns
            </p>
            {skinConcernLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block py-2 pl-3 text-sm text-gray-600 hover:text-gold-600"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {[
            { label: 'About Us', path: '/about' },
            { label: 'Testimonials', path: '/testimonials' },
            { label: 'Memberships', path: '/memberships' },
          ].map((l) => (
            <Link
              key={l.path}
              to={l.path}
              className="block py-2.5 text-sm font-medium text-gray-700"
              onClick={() => setMobileOpen(false)}
            >
              {l.label}
            </Link>
          ))}

          <Link
            to="/book"
            className="block w-full text-center bg-gold-500 hover:bg-gold-600 text-white text-sm font-semibold px-5 py-3 rounded-full transition-colors mt-3"
            onClick={() => setMobileOpen(false)}
          >
            Contact / Book Now
          </Link>
        </div>
      )}
    </nav>
  )
}
