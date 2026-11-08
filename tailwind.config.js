/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      desktop: '721px',
    },
    extend: {
      colors: {
        bg: 'var(--bg)',
        panel: 'var(--panel)',
        text: 'var(--text)',
        muted: 'var(--muted)',
        line: 'var(--line)',
        accent: 'var(--accent)',
      },
      fontFamily: {
        pixel: ['"Press Start 2P"', 'monospace'],
        body: ['"VT323"', 'monospace'],
      },
      boxShadow: {
        pixel: '4px 4px 0 var(--line)',
        'pixel-accent': '4px 4px 0 var(--accent)',
      },
      transitionTimingFunction: {
        'step-1': 'steps(1)',
        'step-2': 'steps(2)',
        'step-4': 'steps(4)',
      },
    },
  },
  plugins: [],
}
