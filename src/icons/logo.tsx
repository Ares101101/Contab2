import React from 'react';
const Logo: React.FC<React.SVGProps<SVGSVGElement>> = (props:{className?: string}) =>{
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="380 196 260 260"
      fill="currentColor"
      {...props}
    >
      <g>
        <polygon
          fill="#007acc"
          points="524.2,280.9 449.6,289.4 449.6,351 449.6,407 626.8,441 626.8,269.3"
        />
        <polygon
          fill="#4caf50"
          points="514.6,282 514.6,208.7 394.7,241.9 394.7,340.5 449.6,341.7 449.6,289.4"
        />

        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="455.6786"
          y1="361.0527"
          x2="509.3297"
          y2="318.5748"
          gradientTransform="matrix(1 0 0 -1 0 652)"
        >
          <stop offset="0.1017" style={{ color: '#99582A' }} />
          <stop offset="0.1848" style={{ color: '#99582A' }} />
          <stop offset="0.2734" style={{ color: '#99582A' }} />
          <stop offset="0.4795" style={{ color: '#99582A' }} />
          <stop offset="0.6883" style={{ color: '#99582A' }} />
          <stop offset="0.9024" style={{ color: '#99582A' }} />
        </linearGradient>
      </g>
    </svg>
  )
}

export default Logo
