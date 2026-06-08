import { Link } from 'react-router-dom'

/**
 * BrandMark — SVG symbol used as watermark / standalone icon
 */
export function BrandMark({ size = 40, color = '#453730', opacity = 1 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 110" fill="none" aria-hidden="true" style={{ opacity }}>
      <path
        d="M 58 48 C 56 38, 50 24, 38 18 C 26 12, 14 18, 13 30 C 12 42, 22 50, 36 52 C 48 54, 60 54, 58 62 C 56 70, 46 82, 34 84 C 22 86, 14 78, 16 67 C 18 56, 32 54, 44 56 C 56 58, 62 56, 58 48 Z"
        stroke={color} strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" fill="none"
      />
      <path
        d="M 42 48 C 44 38, 50 24, 62 18 C 74 12, 86 18, 87 30 C 88 42, 78 50, 64 52 C 52 54, 40 54, 42 62 C 44 70, 54 82, 66 84 C 78 86, 86 78, 84 67 C 82 56, 68 54, 56 56 C 44 58, 38 56, 42 48 Z"
        stroke={color} strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" fill="none"
      />
    </svg>
  )
}

/**
 * Logo — displays uploaded image logo (public/images/logo.png).
 * Falls back to text wordmark if the image is missing.
 * Used in Navbar (dark=false) and Footer (dark=true).
 */
export default function Logo({ variant = 'horizontal', dark = false, linkTo = '/' }) {
  const brownColor = dark ? '#E8DFD8' : '#453730'
  const tealColor  = dark ? '#9dbdb8' : '#738985'

  const imgHeight = variant === 'horizontal' ? 50 : 60

  return (
    <Link to={linkTo} className="inline-flex items-center no-underline select-none">
      <img
        src="/images/logo.png"
        alt="Advanced Med MedSpa Lounge"
        style={{ height: imgHeight, width: 'auto', display: 'block' }}
        onError={(e) => {
          // Fallback to text wordmark if image fails to load
          e.currentTarget.style.display = 'none'
          e.currentTarget.nextSibling.style.display = 'flex'
        }}
      />
      {/* Text fallback — hidden when image loads successfully */}
      <span className="flex-col leading-none" style={{ display: 'none' }}>
        <span style={{ fontFamily: '"DM Sans", system-ui, sans-serif', color: brownColor, fontSize: variant === 'horizontal' ? '18px' : '22px', fontWeight: 200, letterSpacing: '0.28em', lineHeight: 1.15 }}>
          ADVANCED MED
        </span>
        <span style={{ fontFamily: '"DM Sans", system-ui, sans-serif', color: tealColor, fontSize: variant === 'horizontal' ? '9.5px' : '11px', fontWeight: 400, letterSpacing: '0.32em', lineHeight: 1.6 }}>
          MEDSPA LOUNGE
        </span>
      </span>
    </Link>
  )
}
