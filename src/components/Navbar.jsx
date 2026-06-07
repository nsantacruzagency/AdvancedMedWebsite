import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import Logo from './Logo'

const weightHealthLinks = [
  { label: 'Non-Invasive Weight Loss',   path: '/weight-health/non-invasive-weight-loss' },
  { label: 'Body Contouring',             path: '/weight-health/body-contouring' },
  { label: 'Massages',                    path: '/weight-health/massages' },
  { label: 'Peptides + GLPs',             path: '/weight-health/peptides-glps' },
  { label: 'IVs + Intramuscular Shots',   path: '/weight-health/ivs-shots' },
  { label: 'Hair Restoration',            path: '/weight-health/hair-restoration' },
  { label: 'Blood Tests & Longevity',     path: '/weight-health/blood-tests-longevity' },
]

const skinLinks = [
  { label: 'Acne & Breakouts',               path: '/skin-concerns/acne' },
  { label: 'Aging & Wrinkles',               path: '/skin-concerns/aging' },
  { label: 'Hyperpigmentation & Dark Spots', path: '/skin-concerns/hyperpigmentation' },
  { label: 'Stretch Marks & Scars',          path: '/skin-concerns/stretch-marks-scars' },
]

function Dropdown({ links, isOpen }) {
  if (!isOpen) return null
  return (
    <div className="absolute top-full left-0 mt-px w-64 bg-white border border-cream-300 shadow-lg z-50 py-2">
      {links.map((link) => (
        <Link
          key={link.path}
          to={link.path}
          className="block px-5 py-2.5 text-xs font-medium tracking-wide text-espresso-600 hover:text-espresso hover:bg-cream-100 transition-colors uppercase"
          style={{ letterSpacing: '0.08em' }}
        >
          {link.label}
        </Link>
      ))}
    </div>
  )
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setOpenDropdown(null)
  }, [location.pathname])

  const isUnder = (prefix) => location.pathname.startsWith(prefix)

  return (
    <nav
      className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? 'shadow-[0_1px_12px_rgba(69,55,48,0.1)]' : 'border-b border-cream-300'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Logo variant="horizontal" />

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-7">
            {/* Weight & Metabolic Health */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown('weight')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                className={`flex items-center gap-1 text-[11px] font-medium tracking-widest uppercase transition-colors ${
                  isUnder('/weight-health')
                    ? 'text-spa'
                    : 'text-espresso-600 hover:text-espresso'
                }`}
              >
                Weight &amp; Metabolic Health
                <ChevronDown size={11} strokeWidth={1.5} />
              </button>
              <Dropdown links={weightHealthLinks} isOpen={openDropdown === 'weight'} />
            </div>

            {/* Skin Concerns */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown('skin')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                className={`flex items-center gap-1 text-[11px] font-medium tracking-widest uppercase transition-colors ${
                  isUnder('/skin-concerns')
                    ? 'text-spa'
                    : 'text-espresso-600 hover:text-espresso'
                }`}
              >
                Skin Concerns
                <ChevronDown size={11} strokeWidth={1.5} />
              </button>
              <Dropdown links={skinLinks} isOpen={openDropdown === 'skin'} />
            </div>

            {[
              { label: 'About Us',     path: '/about' },
              { label: 'Testimonials', path: '/testimonials' },
              { label: 'Memberships',  path: '/memberships' },
            ].map((l) => (
              <Link
                key={l.path}
                to={l.path}
                className={`text-[11px] font-medium tracking-widest uppercase transition-colors ${
                  location.pathname === l.path
                    ? 'text-spa'
                    : 'text-espresso-600 hover:text-espresso'
                }`}
              >
                {l.label}
              </Link>
            ))}

            <Link
              to="/book"
              className="ml-2 inline-block bg-espresso text-cream-100 text-[10px] font-medium tracking-widest uppercase px-6 py-3 hover:bg-espresso-600 transition-colors"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-espresso"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-cream-300 px-5 pb-8 pt-4 max-h-[80vh] overflow-y-auto">
          <div className="space-y-1">
            <p className="text-[9px] font-medium tracking-widest uppercase text-spa pt-3 pb-1">
              Weight &amp; Metabolic Health
            </p>
            {weightHealthLinks.map((l) => (
              <Link key={l.path} to={l.path}
                className="block py-2 text-xs tracking-wide text-espresso-600 hover:text-espresso"
                onClick={() => setMobileOpen(false)}>
                {l.label}
              </Link>
            ))}

            <p className="text-[9px] font-medium tracking-widest uppercase text-spa pt-4 pb-1">
              Skin Concerns
            </p>
            {skinLinks.map((l) => (
              <Link key={l.path} to={l.path}
                className="block py-2 text-xs tracking-wide text-espresso-600 hover:text-espresso"
                onClick={() => setMobileOpen(false)}>
                {l.label}
              </Link>
            ))}

            <div className="border-t border-cream-300 pt-4 mt-3 space-y-1">
              {[
                { label: 'About Us',     path: '/about' },
                { label: 'Testimonials', path: '/testimonials' },
                { label: 'Memberships',  path: '/memberships' },
              ].map((l) => (
                <Link key={l.path} to={l.path}
                  className="block py-2 text-xs tracking-widest uppercase font-medium text-espresso-600 hover:text-espresso"
                  onClick={() => setMobileOpen(false)}>
                  {l.label}
                </Link>
              ))}
            </div>

            <Link
              to="/book"
              className="block w-full text-center mt-5 bg-espresso text-cream-100 text-[10px] font-medium tracking-widest uppercase px-6 py-3.5 hover:bg-espresso-600 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
