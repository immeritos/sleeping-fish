/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class", "media"],  // Support both manual toggle and system preference
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
        // Outfit for body/UI - modern geometric feel
        sans: ['var(--font-outfit)', 'Inter', 'system-ui', 'sans-serif'],
        // Fraunces for display headings - editorial/magazine style
        serif: ['var(--font-fraunces)', 'Georgia', 'serif'],
        // Inter as fallback for specific use cases
        inter: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.15em',
        'extra-wide': '0.2em',
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
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        'hero-container': 'var(--hero-container-bg)',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'var(--card-foreground)'
        },
        popover: {
          DEFAULT: 'var(--popover)',
          foreground: 'var(--popover-foreground)'
        },
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)'
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)'
        },
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)'
        },
        accent: {
          DEFAULT: 'var(--accent)',
          foreground: 'var(--accent-foreground)'
        },
        destructive: {
          DEFAULT: 'var(--destructive)',
          foreground: 'var(--destructive-foreground)'
        },
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
        },
        // Fraunces SOFT axis (柔和度: 0-100)
        '.font-soft-0': {
          'font-variation-settings': '"SOFT" 0, "WONK" 0'
        },
        '.font-soft-50': {
          'font-variation-settings': '"SOFT" 50, "WONK" 0'
        },
        '.font-soft-100': {
          'font-variation-settings': '"SOFT" 100, "WONK" 0'
        },
        // Fraunces WONK axis (倾斜度: 0-1)
        '.font-wonk-0': {
          'font-variation-settings': '"SOFT" 0, "WONK" 0'
        },
        '.font-wonk-1': {
          'font-variation-settings': '"SOFT" 0, "WONK" 1'
        },
        // 组合使用
        '.font-soft-wonk': {
          'font-variation-settings': '"SOFT" 100, "WONK" 1'
        },
      })
    }
  ],
}