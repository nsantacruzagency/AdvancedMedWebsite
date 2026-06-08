import { Link } from 'react-router-dom'

/**
 * BrandMark — traces the exact Advanced Med logo symbol:
 * two ribbon S-paths crossing through the center, each forming
 * two rounded lobes (TL+BL for the left ribbon, TR+BR for the right).
 */
export function BrandMark({ size = 40, color = '#453730', opacity = 1 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 110" fill="none" aria-hidden="true" style={{ opacity }}>
      {/* Left ribbon: TL lobe (upper-left) → S through center → BL lobe (lower-left) */}
      <path
        d="M 58 48
           C 56 38, 50 24, 38 18
           C 26 12, 14 18, 13 30
           C 12 42, 22 50, 36 52
           C 48 54, 60 54, 58 62
           C 56 70, 46 82, 34 84
           C 22 86, 14 78, 16 67
           C 18 56, 32 54, 44 56
           C 56 58, 62 56, 58 48
           Z"
        stroke={color}
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Right ribbon: TR lobe (upper-right) → S through center → BR lobe (lower-right) — mirror */}
      <path
        d="M 42 48
           C 44 38, 50 24, 62 18
           C 74 12, 86 18, 87 30
           C 88 42, 78 50, 64 52
           C 52 54, 40 54, 42 62
           C 44 70, 54 82, 66 84
           C 78 86, 86 78, 84 67
           C 82 56, 68 54, 56 56
           C 44 58, 38 56, 42 48
           Z"
        stroke={color}
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  )
}

export default function Logo({ variant = 'horizontal', dark = false, linkTo = '/' }) {
  const brownColor = dark ? '#E8DFD8' : '#453730'
  const tealColor  = dark ? '#9dbdb8' : '#738985'

  return (
    <Link to={linkTo} className="inline-flex flex-col leading-none select-none no-underline">
      <span
        style={{
          fontFamily: '"DM Sans", system-ui, sans-serif',
          color: brownColor,
          fontSize: variant === 'horizontal' ? '18px' : '22px',
          fontWeight: 200,
          letterSpacing: '0.28em',
          lineHeight: 1.15,
        }}
      >
        ADVANCED MED
      </span>
      <span
        style={{
          fontFamily: '"DM Sans", system-ui, sans-serif',
          color: tealColor,
          fontSize: variant === 'horizontal' ? '9.5px' : '11px',
          fontWeight: 400,
          letterSpacing: '0.32em',
          lineHeight: 1.6,
        }}
      >
        MEDSPA LOUNGE
      </span>
    </Link>
  )
}
