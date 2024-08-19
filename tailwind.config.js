/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      extend: {
        colors: {
         primary: '#001AA4', // Example custom color
         secondary: '#fffff', // Example custom color
        },
        spacing: {
          '18rem': '18rem', // Custom width for buttons
          '3.25rem': '3.25rem', // Custom height for buttons
        },
        height: {
          '40vh': '40vh', // Custom height for sections
          '73vh': '73vh', // Custom height for sections
        },
        fontSize: {
          'xs': '0.75rem',   // 12px
          'sm': '0.875rem',  // 14px
          'base': '1rem',    // 16px
          'lg': '1.125rem',  // 18px
          'xl': '1.25rem',   // 20px
          '2xl': '1.5rem',   // 24px
          '3xl': '1.875rem', // 30px
          '4xl': '2.25rem',  // 36px
          '5xl': '3rem',     // 48px
          '6xl': '3.75rem',  // 60px
          '7xl': '4.5rem',   // 72px
        },
      },
    },
    variants: {
      extend: {
        backgroundColor: ['active'], // Example: enable active variant for background color
        textColor: ['active'], // Example: enable active variant for text color
      },
    },
  },
  plugins: [],
}

