/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        // Inter for body/UI (Next/font applies Inter; this aligns Tailwind's font-sans)
        sans: ['Inter', 'system-ui', 'sans-serif'],
        // Serif for special headings
        serif: ['"Times New Roman"', 'serif'],
      },
      fontSize: {
        xs: ['10px', { lineHeight: '14px' }],
        sm: ['12px', { lineHeight: '16px' }],
        base: ['14px', { lineHeight: '20px' }],
        lg: ['16px', { lineHeight: '22px' }],
        xl: ['20px', { lineHeight: '28px' }],
        '2xl': ['24px', { lineHeight: '32px' }],
      },
      colors: {
        border: 'hsl(var(--border))',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require("tailwindcss-animate"),
    function({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          /* IE and Edge */
          '-ms-overflow-style': 'none',
          /* Firefox */
          'scrollbar-width': 'none',
          /* Safari and Chrome */
          '&::-webkit-scrollbar': {
            display: 'none'
          }
        }
      })
    }
  ],
}