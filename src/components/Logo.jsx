import { Link } from 'react-router-dom'

// Logomark: two interlocking S-shaped figure-8s forming 4 rounded lobes (2×2 grid)
function LogoMark({ size = 36, color = '#453730', bg = '#ffffff' }) {
  const sw = 2.2
  return (
    <svg width={size} height={size} viewBox="0 0 56 56" fill="none" aria-hidden="true">
      {/* 4 rounded-square lobes */}
      <rect x="2"  y="2"  width="22" height="22" rx="6.5" stroke={color} strokeWidth={sw} fill="none"/>
      <rect x="32" y="2"  width="22" height="22" rx="6.5" stroke={color} strokeWidth={sw} fill="none"/>
      <rect x="2"  y="32" width="22" height="22" rx="6.5" stroke={color} strokeWidth={sw} fill="none"/>
      <rect x="32" y="32" width="22" height="22" rx="6.5" stroke={color} strokeWidth={sw} fill="none"/>
      {/* Connector A: TR bottom-left → BL top-right (goes "under") */}
      <path d="M 32 24 C 29 27, 27 29, 24 32" stroke={color} strokeWidth={sw} strokeLinecap="round" fill="none"/>
      {/* Gap on connector B to create over/under illusion */}
      <path d="M 24 24 C 27 27, 29 29, 32 32" stroke={bg} strokeWidth={sw + 2} strokeLinecap="round" fill="none"/>
      {/* Connector B: TL bottom-right → BR top-left (goes "over") */}
      <path d="M 24 24 C 27 27, 29 29, 32 32" stroke={color} strokeWidth={sw} strokeLinecap="round" fill="none"/>
    </svg>
  )
}

export default function Logo({ variant = 'horizontal', dark = false, linkTo = '/' }) {
  const brownColor = dark ? '#F1EBE6' : '#453730'
  const tealColor  = dark ? '#a5bfbb' : '#738985'
  const bgColor    = dark ? '#453730' : '#ffffff'

  const textBlock = (
    <div className="flex flex-col leading-none select-none">
      <span
        style={{
          fontFamily: '"DM Sans", system-ui, sans-serif',
          color: brownColor,
          fontSize: variant === 'horizontal' ? '15px' : '17px',
          fontWeight: 300,
          letterSpacing: '0.22em',
          lineHeight: 1.1,
        }}
      >
        ADVANCED MED
      </span>
      <span
        style={{
          fontFamily: '"DM Sans", system-ui, sans-serif',
          color: tealColor,
          fontSize: variant === 'horizontal' ? '9px' : '10px',
          fontWeight: 400,
          letterSpacing: '0.28em',
          lineHeight: 1.6,
        }}
      >
        MEDSPA LOUNGE
      </span>
    </div>
  )

  const mark = (
    <LogoMark size={variant === 'horizontal' ? 36 : 42} color={brownColor} bg={bgColor} />
  )

  return (
    <Link to={linkTo} className="inline-flex items-center gap-2.5 no-underline">
      {mark}
      {textBlock}
    </Link>
  )
}
