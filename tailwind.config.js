/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#001AA4',
        secondary: '#fffff', // This seems incorrect, possibly should be '#ffffff'
      },
      spacing: {
        '18rem': '18rem',
        '3.25rem': '3.25rem',
      },
      height: {
        '40vh': '40vh',
        '73vh': '73vh',
      },
      fontSize: {
        'xs': '0.75rem',
        'sm': '0.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '3.75rem',
        '7xl': '4.5rem',
      },
    },
  },
  
  plugins: [],
}

