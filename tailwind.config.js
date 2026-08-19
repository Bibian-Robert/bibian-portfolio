/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#2E2E2E',
        secondary: '#6E6E6E',
        paper: '#F9F8F5',
        surface: '#EFE8DF',
        accent: '#97737A',
        accentDark: '#7A6656',
        hairline: 'rgba(46,46,46,0.12)',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      maxWidth: {
        wrap: '1280px',
      },
    },
  },
  plugins: [],
};
