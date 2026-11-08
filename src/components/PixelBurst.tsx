import React from 'react';

export interface PixelBurstProps {
  index?: number;
}

interface Particle {
  style: React.CSSProperties;
}

export const PixelBurst: React.FC<PixelBurstProps> = ({ index = 0 }) => {
  // Deterministic variations based on card index so cards are asymmetrical
  const seed = (index + 1) * 1.618;
  const jitter = (val: number, range: number) => {
    const s = Math.sin(val * seed);
    return (s - Math.floor(s)) * range;
  };

  // 8 squares of 4x4px spread around the perimeter (2 top, 2 right, 2 bottom, 2 left)
  // Each moves outward by 16px to 32px on hover
  const particles: Particle[] = [
    // Top border (2 squares moving upward)
    {
      style: {
        top: '-2px',
        left: `${20 + jitter(1, 15)}%`,
        '--tx': `${Math.round(-8 + jitter(2, 6))}px`,
        '--ty': `${Math.round(-20 - jitter(3, 7))}px`,
      } as React.CSSProperties,
    },
    {
      style: {
        top: '-2px',
        left: `${65 + jitter(4, 15)}%`,
        '--tx': `${Math.round(6 + jitter(5, 6))}px`,
        '--ty': `${Math.round(-20 - jitter(6, 7))}px`,
      } as React.CSSProperties,
    },
    // Right border (2 squares moving rightward)
    {
      style: {
        right: '-2px',
        top: `${22 + jitter(7, 15)}%`,
        '--tx': `${Math.round(20 + jitter(8, 7))}px`,
        '--ty': `${Math.round(-6 + jitter(9, 6))}px`,
      } as React.CSSProperties,
    },
    {
      style: {
        right: '-2px',
        top: `${68 + jitter(10, 15)}%`,
        '--tx': `${Math.round(20 + jitter(11, 7))}px`,
        '--ty': `${Math.round(6 + jitter(12, 6))}px`,
      } as React.CSSProperties,
    },
    // Bottom border (2 squares moving downward)
    {
      style: {
        bottom: '-2px',
        left: `${75 + jitter(13, 15)}%`,
        '--tx': `${Math.round(6 + jitter(14, 6))}px`,
        '--ty': `${Math.round(20 + jitter(15, 7))}px`,
      } as React.CSSProperties,
    },
    {
      style: {
        bottom: '-2px',
        left: `${25 + jitter(16, 15)}%`,
        '--tx': `${Math.round(-6 - jitter(17, 6))}px`,
        '--ty': `${Math.round(20 + jitter(18, 7))}px`,
      } as React.CSSProperties,
    },
    // Left border (2 squares moving leftward)
    {
      style: {
        left: '-2px',
        top: `${70 + jitter(19, 15)}%`,
        '--tx': `${Math.round(-20 - jitter(20, 7))}px`,
        '--ty': `${Math.round(6 + jitter(21, 6))}px`,
      } as React.CSSProperties,
    },
    {
      style: {
        left: '-2px',
        top: `${25 + jitter(22, 15)}%`,
        '--tx': `${Math.round(-20 - jitter(23, 7))}px`,
        '--ty': `${Math.round(-6 - jitter(24, 6))}px`,
      } as React.CSSProperties,
    },
  ];

  return (
    <div
      className="pixel-burst-container pointer-events-none absolute inset-0 z-20 overflow-visible"
      aria-hidden="true"
    >
      {particles.map((p, i) => (
        <span
          key={i}
          className="pixel-burst-particle"
          style={p.style}
        />
      ))}
    </div>
  );
};

