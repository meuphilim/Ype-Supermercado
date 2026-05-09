/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // === Ype Brand Colors (from logo) ===
        'ype-green': '#4DB848',
        'ype-green-dark': '#2E7D32',
        'ype-green-mid': '#388E3C',
        'ype-green-light': '#C8E6C9',
        'ype-green-pale': '#E8F5E9',
        'ype-brown': '#5D3A1A',
        'ype-brown-light': '#8D5524',
        'ype-brown-pale': '#FFF3E0',
        // === Accent ===
        'fresh-orange': '#F57C00',
        'fresh-orange-light': '#FFE0B2',
        'fresh-orange-dark': '#E65100',
        // === Surfaces ===
        'canvas-cream': '#FAFAF7',
        'canvas-white': '#FFFFFF',
        'concrete-light': '#F1F5F1',
        // === Neutrals ===
        'steel': '#6B7A8D',
        'hairline': '#DDE5DD',
        'hairline-soft': '#EEF2EE',
        // === Semantic ===
        'success': '#2E7D32',
        'success-soft': '#E8F5E9',
        'warning': '#F57C00',
        'error': '#C53030',
      },
      fontFamily: {
        sans: ['"DM Sans"', '"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
        serif: ['"DM Serif Display"', '"Georgia"', 'serif'],
        mono: ['"DM Mono"', '"Courier New"', 'monospace'],
      },
      fontSize: {
        'display-hero': ['56px', { lineHeight: '1.05', letterSpacing: '-0.02em', fontWeight: '300' }],
        'display-dept': ['40px', { lineHeight: '1.1', letterSpacing: '-0.01em', fontWeight: '300' }],
        'heading-xl': ['32px', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '700' }],
        'heading-lg': ['24px', { lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: '700' }],
        'heading-md': ['20px', { lineHeight: '1.4', fontWeight: '600' }],
        'heading-sm': ['16px', { lineHeight: '1.5', fontWeight: '600' }],
        'body-lg': ['18px', { lineHeight: '1.7', letterSpacing: '-0.005em' }],
        'body-md': ['16px', { lineHeight: '1.6', letterSpacing: '-0.005em' }],
        'body-sm': ['14px', { lineHeight: '1.5' }],
        'label-utility': ['11px', { lineHeight: '1.5', fontWeight: '700', letterSpacing: '0.08em' }],
        'caption': ['12px', { lineHeight: '1.5' }],
      },
      borderRadius: {
        'pill': '32px',
        'card': '16px',
        'card-sm': '12px',
        'chip': '32px',
      },
      boxShadow: {
        'lift': '0 1px 2px rgba(0,0,0,0.08), 0 2px 6px rgba(0,0,0,0.10)',
        'float': '0 4px 16px rgba(0,0,0,0.14)',
        'navbar': '0 1px 4px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.06)',
        'megamenu': '0 8px 24px rgba(0,0,0,0.12)',
        'fab-whatsapp': '0 6px 16px rgba(37,211,102,0.40)',
        'btn-primary': '0 2px 8px rgba(77,184,72,0.32)',
        'card-store': '0 2px 8px rgba(0,0,0,0.10)',
      },
      maxWidth: {
        'container': '1360px',
      },
      transitionDuration: {
        '180': '180ms',
        '220': '220ms',
        '280': '280ms',
        '300': '300ms',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in-left': {
          '0%': { opacity: '0', transform: 'translateX(-24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-carousel': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'pulse-badge': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.3s ease-out',
        'slide-in-left': 'slide-in-left 0.4s ease-out',
        'pulse-badge': 'pulse-badge 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
