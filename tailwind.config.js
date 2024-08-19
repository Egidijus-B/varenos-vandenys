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

