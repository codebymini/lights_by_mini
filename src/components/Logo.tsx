import React from "react";

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "h-12 w-auto" }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 200 160"
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
      </defs>

      {/* Light beam triangles */}
      <g className="opacity-25">
        {/* Left triangle beams */}
        <path
          d="M30 120 L60 30 L90 120 Z"
          fill="url(#gradient1)"
          className="drop-shadow-sm"
        />

        {/* Right triangle beams */}
        <path
          d="M110 120 L140 30 L170 120 Z"
          fill="url(#gradient3)"
          className="drop-shadow-sm"
        />
      </g>

      {/* First segment */}
      <path
        d="M20 120 L60 20 L100 120"
        fill="none"
        stroke="url(#gradient1)"
        strokeWidth="20"
        className="drop-shadow-lg"
      />

      {/* Last segment */}
      <path
        d="M100 120 L140 20 L180 120"
        fill="none"
        stroke="url(#gradient3)"
        strokeWidth="20"
        className="drop-shadow-lg"
      />
    </svg>
  );
};

export default Logo;
