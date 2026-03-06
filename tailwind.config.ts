import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Paleta principal de INVACA
        primary: {
          DEFAULT: '#19354C', // Dark Blue - Color principal
          50: '#f0f2f5', // Light Gray/Off-White
          100: '#e8ebef',
          200: '#d1d6df',
          300: '#bac2cf',
          400: '#a3aebf',
          500: '#8c9aaf',
          600: '#5BA8D0', // Sky Blue - Acento secundario
          700: '#314759', // Slate Blue - Color secundario
          800: '#19354C', // Dark Blue
          900: '#0f2330',
        },
        accent: {
          DEFAULT: '#FF7D52', // Vibrant Coral - Acento principal
          50: '#fff5f3',
          100: '#ffe5e0',
          200: '#ffcbc1',
          300: '#ffb1a2',
          400: '#ff9783',
          500: '#FF7D52', // Vibrant Coral
          600: '#e66a3a',
          700: '#cc5722',
          800: '#b3440a',
          900: '#993100',
        },
        sky: {
          DEFAULT: '#5BA8D0', // Sky Blue
          50: '#e8f4f9',
          100: '#d1e9f3',
          200: '#a3d3e7',
          300: '#75bddb',
          400: '#5BA8D0',
          500: '#4a8bb0',
          600: '#396e90',
          700: '#285170',
          800: '#173450',
          900: '#061730',
        },
        dark: {
          DEFAULT: '#19354C', // Dark Blue
          50: '#f0f2f5',
          100: '#e8ebef',
          200: '#d1d6df',
          300: '#bac2cf',
          400: '#a3aebf',
          500: '#8c9aaf',
          600: '#5BA8D0',
          700: '#314759',
          800: '#19354C',
          900: '#0f2330',
        },
        slate: {
          DEFAULT: '#314759', // Slate Blue
          50: '#f0f2f5',
          100: '#e8ebef',
          200: '#d1d6df',
          300: '#bac2cf',
          400: '#a3aebf',
          500: '#8c9aaf',
          600: '#5BA8D0',
          700: '#314759',
          800: '#19354C',
          900: '#0f2330',
        },
        neutral: {
          DEFAULT: '#F0F2F5', // Light Gray/Off-White
          50: '#fafbfc',
          100: '#F0F2F5',
          200: '#e8ebef',
          300: '#d1d6df',
          400: '#bac2cf',
          500: '#a3aebf',
          600: '#8c9aaf',
          700: '#5BA8D0',
          800: '#314759',
          900: '#19354C',
        },
        cream: {
          DEFAULT: '#FAF6ED',
          50: '#FDFCF9',
          100: '#FAF6ED',
          200: '#F3EBD9',
          300: '#E9DCC0',
          400: '#DBC89F',
          500: '#C9B07D',
          600: '#A58B5D',
          700: '#7B6846',
          800: '#52452F',
          900: '#292318',
        },
      },
      fontFamily: {
        display: ['var(--font-dm-serif)', 'sans-serif'],
        body: ['var(--font-manrope)', 'sans-serif'],
      },
      fontSize: {
        'h1': ['3.5rem', { lineHeight: '1.1', fontWeight: '700' }],
        'h2': ['2.5rem', { lineHeight: '1.2', fontWeight: '600' }],
        'h3': ['2rem', { lineHeight: '1.3', fontWeight: '600' }],
        'h4': ['1.5rem', { lineHeight: '1.4', fontWeight: '600' }],
        'h5': ['1.25rem', { lineHeight: '1.5', fontWeight: '600' }],
        'body-lg': ['1.125rem', { lineHeight: '1.75' }],
        'body': ['1rem', { lineHeight: '1.5' }],
        'body-md': ['0.9375rem', { lineHeight: '1.6' }],
        'body-sm': ['0.875rem', { lineHeight: '1.6' }],
        'caption': ['0.75rem', { lineHeight: '1.5' }],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config
