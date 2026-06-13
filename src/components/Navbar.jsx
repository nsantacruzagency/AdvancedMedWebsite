import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import Logo from './Logo'

const aboutLinks = [
  { label: 'Memberships',        path: '/memberships' },
  { label: 'Partner Services',   path: '/partner-services' },
  { label: 'Testimonials',       path: '/testimonials' },
  { label: 'The Lounge + Team',  path: '/about' },
]

const bodyAestheticsLinks = [
  { label: 'Non-Invasive Weight Loss',       path: '/non-invasive-weight-loss' },
  { label: 'Skin Tightening & Cellulite',    path: '/cellulite-skin-tightening' },
  { label: 'Contour & Post-Op Massages',     path: '/body-contouring-massages' },
  { label: 'Brazilian Butt',                 path: '/brazilian-butt' },
]

const stemCellsWellnessLinks = [
  { label: 'Joint Pain Stem Cells',          path: '/joint-pain-stem-cells' },
  { label: 'Hair Restoration Stem Cells',    path: '/hair-restoration-stem-cells' },
  { label: 'Peptides + GLPs',                path: '/peptides-glps' },
  { label: 'IVs + Intramuscular Shots',      path: '/ivs-intramuscular-shots' },
  { label: 'What Do Blood Tests Tell Us?',   path: '/what-do-blood-tests-tell-us' },
]

const skinLinks = [
  { label: 'Acne & Breakouts',               path: '/skin-concerns/acne' },
  { label: 'Aging & Wrinkles',               path: '/skin-concerns/aging' },
  { label: 'Hyperpigmentation & Dark Spots', path: '/skin-concerns/hyperpigmentation' },
  { label: 'Stretch Marks & Scars',          path: '/skin-concerns/stretch-marks-scars' },
  { label: 'How to Maintain Results',        path: '/skin-concerns/maintain-results' },
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

            {/* Free Personalized Evaluation */}
            <Link
              to="/personalized-evaluation"
              className={`text-[11px] font-medium tracking-widest uppercase transition-colors ${
                location.pathname === '/personalized-evaluation'
                  ? 'text-spa'
                  : 'text-espresso-600 hover:text-espresso'
              }`}
            >
              Free Personalized Evaluation
            </Link>

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

            {/* Body Aesthetics */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown('body')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                className={`flex items-center gap-1 text-[11px] font-medium tracking-widest uppercase transition-colors ${
                  ['/non-invasive-weight-loss','/cellulite-skin-tightening','/body-contouring-massages','/brazilian-butt'].includes(location.pathname)
                    ? 'text-spa'
                    : 'text-espresso-600 hover:text-espresso'
                }`}
              >
                The Perfect Body
                <ChevronDown size={11} strokeWidth={1.5} />
              </button>
              <Dropdown links={bodyAestheticsLinks} isOpen={openDropdown === 'body'} />
            </div>

            {/* Stem Cells & Wellness */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown('stem')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                className={`flex items-center gap-1 text-[11px] font-medium tracking-widest uppercase transition-colors ${
                  ['/joint-pain-stem-cells','/hair-restoration-stem-cells','/peptides-glps','/ivs-intramuscular-shots','/what-do-blood-tests-tell-us'].includes(location.pathname)
                    ? 'text-spa'
                    : 'text-espresso-600 hover:text-espresso'
                }`}
              >
                Stem Cells &amp; Wellness
                <ChevronDown size={11} strokeWidth={1.5} />
              </button>
              <Dropdown links={stemCellsWellnessLinks} isOpen={openDropdown === 'stem'} />
            </div>

            {/* About Us */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown('about')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                className={`flex items-center gap-1 text-[11px] font-medium tracking-widest uppercase transition-colors ${
                  ['/about', '/testimonials', '/memberships'].includes(location.pathname)
                    ? 'text-spa'
                    : 'text-espresso-600 hover:text-espresso'
                }`}
              >
                About Us
                <ChevronDown size={11} strokeWidth={1.5} />
              </button>
              <Dropdown links={aboutLinks} isOpen={openDropdown === 'about'} />
            </div>

            <a
              href="https://advancedmedspaofficial.janeapp.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 inline-block bg-spa text-cream-100 text-[10px] font-medium tracking-widest uppercase px-6 py-3 hover:bg-spa-600 transition-colors"
            >
              Book Now
            </a>
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

            <Link
              to="/personalized-evaluation"
              className="block py-2 text-xs tracking-widest uppercase font-medium text-espresso-600 hover:text-espresso pb-3 border-b border-cream-300 mb-2"
              onClick={() => setMobileOpen(false)}
            >
              Free Personalized Evaluation
            </Link>

            <p className="text-[9px] font-medium tracking-widest uppercase text-spa pt-3 pb-1">
              Skin Concerns
            </p>
            {skinLinks.map((l) => (
              <Link key={l.path} to={l.path}
                className="block py-2 text-xs tracking-wide text-espresso-600 hover:text-espresso"
                onClick={() => setMobileOpen(false)}>
                {l.label}
              </Link>
            ))}

            <p className="text-[9px] font-medium tracking-widest uppercase text-spa pt-4 pb-1">
              The Perfect Body
            </p>
            {bodyAestheticsLinks.map((l) => (
              <Link key={l.path} to={l.path}
                className="block py-2 text-xs tracking-wide text-espresso-600 hover:text-espresso"
                onClick={() => setMobileOpen(false)}>
                {l.label}
              </Link>
            ))}

            <p className="text-[9px] font-medium tracking-widest uppercase text-spa pt-4 pb-1">
              Stem Cells &amp; Wellness
            </p>
            {stemCellsWellnessLinks.map((l) => (
              <Link key={l.path} to={l.path}
                className="block py-2 text-xs tracking-wide text-espresso-600 hover:text-espresso"
                onClick={() => setMobileOpen(false)}>
                {l.label}
              </Link>
            ))}

            <div className="border-t border-cream-300 pt-4 mt-3 space-y-1">
              <p className="text-[9px] font-medium tracking-widest uppercase text-spa pb-1">About Us</p>
              {aboutLinks.map((l) => (
                <Link key={l.path} to={l.path}
                  className="block py-2 text-xs tracking-wide text-espresso-600 hover:text-espresso"
                  onClick={() => setMobileOpen(false)}>
                  {l.label}
                </Link>
              ))}
            </div>

            <a
              href="https://advancedmedspaofficial.janeapp.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center mt-5 bg-spa text-cream-100 text-[10px] font-medium tracking-widest uppercase px-6 py-3.5 hover:bg-spa-600 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Book Now
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
