/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Industrial Dark Palette - Szaro-niebieski
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',  // Stalowy niebieski - główny akcent
          500: '#3b82f6',  // Niebieski akcent
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        gray: {
          50: '#f9fafb',
          100: '#e6edf3',   // Jasny tekst
          200: '#c9d1d9',   // Tekst secondary
          300: '#8b949e',   // Tekst muted
          400: '#6e7681',
          500: '#484f58',
          600: '#30363d',
          700: '#21262d',   // Obramowania/borders
          800: '#161b22',   // Karty/containers
          850: '#0f1419',   // Tło sekcji ciemniejsze
          900: '#0d1117',   // Tło główne
          950: '#010409',   // Najciemniejsze (footer)
        },
        steel: {
          // Dodatkowe metaliczne akcenty
          100: '#e1e7ef',
          200: '#c5d1de',
          300: '#a9bbce',
          400: '#8da5be',
          500: '#6b8caf',
          600: '#527193',
          700: '#3d5670',
          800: '#2a3f54',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-metal': 'linear-gradient(135deg, #161b22 0%, #0d1117 50%, #161b22 100%)',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(59, 130, 246, 0.3)',
        'glow-lg': '0 0 30px rgba(59, 130, 246, 0.4)',
      }
    },
  },
  plugins: [],
}
