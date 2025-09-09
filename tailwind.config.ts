import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    container: { center: true, padding: { DEFAULT: '1rem', lg: '2rem' } },
    extend: {
      colors: {
        amn: { primary: '#1e40af', secondary: '#f59e0b', dark: '#0b1220' },
      },
      boxShadow: { 'amn-lg': '0 20px 45px -12px rgba(2,6,23,.25)' },
      fontFamily: {
        sans: ['var(--font-amnyar)', 'Tahoma', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial'],
      },
    },
  },
  plugins: [],
}

export default config
