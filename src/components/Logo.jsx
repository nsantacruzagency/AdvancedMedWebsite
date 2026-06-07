import { Link } from 'react-router-dom'

// Logomark SVG approximating the Advanced Med flowing knot symbol
function LogoMark({ size = 32, color = '#453730' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Flowing interlocking loops approximating the Advanced Med mark */}
      <path
        d="M32 12
           C 24 12, 18 17, 18 24
           C 18 29, 22 33, 28 34
           C 34 35, 40 32, 42 27
           C 44 22, 41 16, 36 13
           C 33 11.5, 30 11.5, 27 13
           C 22 15, 18 21, 20 27
           C 22 33, 28 37, 34 37
           C 40 37, 46 33, 46 27
           C 46 21, 42 16, 36 14"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M32 52
           C 40 52, 46 47, 46 40
           C 46 35, 42 31, 36 30
           C 30 29, 24 32, 22 37
           C 20 42, 23 48, 28 51
           C 31 52.5, 34 52.5, 37 51
           C 42 49, 46 43, 44 37
           C 42 31, 36 27, 30 27
           C 24 27, 18 31, 18 37
           C 18 43, 22 48, 28 50"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  )
}

// Inline SVG logo derived from actual brand images
function BrandMark({ size = 36, color = '#453730' }) {
  const s = size
  return (
    <svg width={s} height={s} viewBox="0 0 80 80" fill="none" aria-hidden="true">
      {/* Top loop */}
      <path d="M40 8 C28 8 20 16 20 26 C20 34 26 40 34 42 C38 43 42 43 46 41" stroke={color} strokeWidth="3" strokeLinecap="round" fill="none"/>
      {/* Right loop */}
      <path d="M72 40 C72 28 64 20 54 20 C46 20 40 26 38 34 C37 38 37 42 39 46" stroke={color} strokeWidth="3" strokeLinecap="round" fill="none"/>
      {/* Bottom loop */}
      <path d="M40 72 C52 72 60 64 60 54 C60 46 54 40 46 38 C42 37 38 37 34 39" stroke={color} strokeWidth="3" strokeLinecap="round" fill="none"/>
      {/* Left loop */}
      <path d="M8 40 C8 52 16 60 26 60 C34 60 40 54 42 46 C43 42 43 38 41 34" stroke={color} strokeWidth="3" strokeLinecap="round" fill="none"/>
      {/* Center crossings */}
      <path d="M46 41 C50 43 54 43 58 41 C62 39 64 35 62 31 C60 27 56 25 52 26 C48 27 44 31 42 35 C40 39 40 44 42 48 C44 52 48 54 52 54 C56 54 60 52 62 49" stroke={color} strokeWidth="3" strokeLinecap="round" fill="none"/>
      <path d="M34 39 C30 37 26 37 22 39 C18 41 16 45 18 49 C20 53 24 55 28 54 C32 53 36 49 38 45 C40 41 40 36 38 32 C36 28 32 26 28 26 C24 26 20 28 18 31" stroke={color} strokeWidth="3" strokeLinecap="round" fill="none"/>
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
    <LogoMark size={variant === 'horizontal' ? 30 : 36} color={brownColor} />
  )

  return (
    <Link to={linkTo} className="inline-flex items-center gap-2.5 no-underline">
      {mark}
      {textBlock}
    </Link>
  )
}
