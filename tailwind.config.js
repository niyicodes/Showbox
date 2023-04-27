/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xs: "240px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
     },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'san-marino': {
          '50': '#f4f5fb',
          '100': '#e8eaf6',
          '200': '#cdd3ea',
          '300': '#a1add8',
          '400': '#6e82c2',
          '500': '#485ea3',
          '600': '#394b90',
          '700': '#2f3d75',
          '800': '#2a3562',
          '900': '#283052',
          '950': '#1a1e37',
      },
      
      }
    },
  },
  plugins: [],
}
