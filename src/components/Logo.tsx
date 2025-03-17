import React from "react";

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "h-12 w-auto" }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 240 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Gradient definitions */}
      <defs>
        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: "#FF6B6B", stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: "#FFB347", stopOpacity: 1 }}
          />
        </linearGradient>
        <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: "#4ECDC4", stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: "#2BAE66", stopOpacity: 1 }}
          />
        </linearGradient>
        <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: "#45B8AC", stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: "#2C3E50", stopOpacity: 1 }}
          />
        </linearGradient>
        <clipPath id="cut">
          <path d="M0 0 L240 0 L240 130 L220 130 L20 130 L0 130 Z" />
        </clipPath>
      </defs>

      <g clipPath="url(#cut)">
        {/* Light beam triangles */}
        <g className="opacity-25">
          {/* Left triangle beams */}
          <path
            d="M35 140 L70 35 L105 140 Z"
            fill="url(#gradient1)"
            className="drop-shadow-sm"
          />

          {/* Right triangle beams */}
          <path
            d="M135 140 L170 35 L205 140 Z"
            fill="url(#gradient3)"
            className="drop-shadow-sm"
          />
        </g>

        {/* First segment */}
        <path
          d="M20 140 L70 20 L120 140"
          fill="none"
          stroke="url(#gradient1)"
          strokeWidth="24"
          className="drop-shadow-lg"
        />

        {/* Last segment */}
        <path
          d="M120 140 L170 20 L220 140"
          fill="none"
          stroke="url(#gradient3)"
          strokeWidth="24"
          className="drop-shadow-lg"
        />
      </g>
    </svg>
  );
};

export default Logo;
