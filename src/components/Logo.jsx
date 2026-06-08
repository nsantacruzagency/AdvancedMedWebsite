import { Link } from 'react-router-dom'

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
