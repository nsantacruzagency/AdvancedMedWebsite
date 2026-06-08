import { Link } from 'react-router-dom'

// Logomark: two interlocking S-curves forming 4 rounded lobes
function LogoMark({ size = 32, color = '#453730' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Vertical S-curve — top lobe curves right, bottom lobe curves left */}
      <path
        d="M30 6
           C 42 6, 50 13, 50 22
           C 50 31, 38 34, 30 34
           C 22 34, 10 37, 10 46
           C 10 55, 18 58, 30 58"
        stroke={color}
        strokeWidth="2.6"
        strokeLinecap="round"
        fill="none"
      />
      {/* Horizontal S-curve — left lobe curves down, right lobe curves up */}
      <path
        d="M6 30
           C 6 18, 13 10, 22 10
           C 31 10, 34 22, 34 30
           C 34 38, 37 50, 46 50
           C 55 50, 58 42, 58 30"
        stroke={color}
        strokeWidth="2.6"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  )
}

export default function Logo({ variant = 'horizontal', dark = false, linkTo = '/' }) {
  const brownColor = dark ? '#F1EBE6' : '#453730'
  const tealColor  = dark ? '#a5bfbb' : '#738985'

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
    <LogoMark size={variant === 'horizontal' ? 32 : 38} color={brownColor} />
  )

  return (
    <Link to={linkTo} className="inline-flex items-center gap-2.5 no-underline">
      {mark}
      {textBlock}
    </Link>
  )
}
