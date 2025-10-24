import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#00bfff',
          600: '#0099cc',
          700: '#0077aa',
          800: '#005588',
          900: '#003366',
        },
        accent: {
          50: '#ffffff',
          100: '#fafafa',
          200: '#f5f5f5',
          300: '#f0f0f0',
          400: '#e8e8e8',
          500: '#ffffff',
          600: '#f8f8f8',
          700: '#f0f0f0',
          800: '#e8e8e8',
          900: '#e0e0e0',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(135deg, #00bfff 0%, #ffffff 100%)',
        'gradient-sky-white': 'linear-gradient(135deg, #00bfff 0%, #ffffff 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'slide': 'slide 20s linear infinite',
        'fade-in': 'fadeIn 0.5s ease-in',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        slide: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
export default config

