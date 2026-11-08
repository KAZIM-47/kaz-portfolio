import React from 'react';

interface RainDrop {
  id: number;
  size: number;
  color: string;
  opacity: number;
  left: string;
  duration: string;
  delay: string;
}

// 40 squares with random sizes (2-4px), colors (#7CFF6B / #6B6B66),
// opacities (0.15-0.4), durations (12-24s), and start delays (0-20s)
const RAIN_DROPS: RainDrop[] = Array.from({ length: 40 }, (_, i) => {
  const seed1 = Math.sin((i + 1) * 12.9898) * 43758.5453;
  const rand1 = seed1 - Math.floor(seed1);

  const seed2 = Math.sin((i + 1) * 78.233) * 43758.5453;
  const rand2 = seed2 - Math.floor(seed2);

  const seed3 = Math.sin((i + 1) * 45.164) * 43758.5453;
  const rand3 = seed3 - Math.floor(seed3);

  const seed4 = Math.sin((i + 1) * 91.827) * 43758.5453;
  const rand4 = seed4 - Math.floor(seed4);

  const seed5 = Math.sin((i + 1) * 33.415) * 43758.5453;
  const rand5 = seed5 - Math.floor(seed5);

  const size = 2 + Math.floor(rand1 * 3); // 2 to 4px
  const color = rand2 > 0.5 ? '#7CFF6B' : '#6B6B66'; // Existing palette only
  const opacity = +(0.15 + rand3 * 0.25).toFixed(2); // 0.15 to 0.40
  const left = +(rand4 * 100).toFixed(1) + '%'; // Horizontal position across viewport
  const duration = +(12 + rand5 * 12).toFixed(1) + 's'; // 12 to 24s fall duration
  const delay = +(rand1 * 20).toFixed(1) + 's'; // 0 to 20s start delay

  return { id: i, size, color, opacity, left, duration, delay };
});

export const PixelRain: React.FC = () => {
  return (
    <div
      className="pixel-rain-container fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden',
      }}
    >
      {RAIN_DROPS.map((drop) => (
        <div
          key={drop.id}
          className="pixel-rain-square"
          style={
            {
              left: drop.left,
              width: `${drop.size}px`,
              height: `${drop.size}px`,
              backgroundColor: drop.color,
              opacity: drop.opacity,
              '--duration': drop.duration,
              '--delay': drop.delay,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
};
