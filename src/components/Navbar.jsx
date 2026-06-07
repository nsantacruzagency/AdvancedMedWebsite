import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'

const navLinks = [
  { label: 'Home', path: '/' },
  {
    label: 'Services',
    path: '/services',
    dropdown: [
      'Weight Loss',
      'Body Contouring',
      'Skin Tightening',
      'Botox',
      'Korean Facials',
      'Chemical Peels',
      'Massages',
    ],
  },
  { label: 'Skin Concerns', path: '/skin-concerns' },
  { label: 'About Us', path: '/about' },
  { label: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex flex-col leading-tight">
            <span className="font-serif text-xl font-bold text-gray-900 tracking-wide">
              ADVANCED MED
            </span>
            <span className="text-xs tracking-[0.2em] text-gold-600 uppercase font-semibold">
              MedSpa Lounge
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <Link
                    to={link.path}
                    className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                      isActive(link.path)
                        ? 'text-gold-600'
                        : 'text-gray-700 hover:text-gold-600'
                    }`}
                  >
                    {link.label}
                    <ChevronDown size={14} />
                  </Link>
                  {dropdownOpen && (
                    <div className="absolute top-full left-0 mt-1 w-52 bg-white border border-gray-100 rounded-lg shadow-lg py-2 z-50">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item}
                          to={`/services#${item.toLowerCase().replace(/\s+/g, '-')}`}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-rose-50 hover:text-gold-600 transition-colors"
                          onClick={() => setDropdownOpen(false)}
                        >
                          {item}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.label}
                  to={link.path}
                  className={`text-sm font-medium transition-colors ${
                    isActive(link.path)
                      ? 'text-gold-600'
                      : 'text-gray-700 hover:text-gold-600'
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
            <Link
              to="/book"
              className="ml-2 bg-gold-500 hover:bg-gold-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors shadow-sm"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-6 pt-4 space-y-3">
          {navLinks.map((link) => (
            <div key={link.label}>
              <Link
                to={link.path}
                className={`block py-2 text-sm font-medium ${
                  isActive(link.path) ? 'text-gold-600' : 'text-gray-700'
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
              {link.dropdown && (
                <div className="pl-4 space-y-1 mt-1">
                  {link.dropdown.map((item) => (
                    <Link
                      key={item}
                      to={`/services#${item.toLowerCase().replace(/\s+/g, '-')}`}
                      className="block py-1.5 text-sm text-gray-500 hover:text-gold-600"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link
            to="/book"
            className="block w-full text-center bg-gold-500 hover:bg-gold-600 text-white text-sm font-semibold px-5 py-3 rounded-full transition-colors mt-4"
            onClick={() => setMobileOpen(false)}
          >
            Book Now
          </Link>
        </div>
      )}
    </nav>
  )
}
