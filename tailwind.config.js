/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        13: '3.25rem',
        25: '6.25rem',
        26: '6.5rem',
        36.5: '9.125rem',
        40.5: '10.125rem',
        55: '13.75rem',
        112.25: '28.0625rem',
        "90dvh": '90dvh',
      },
      colors: {
        primary: '#64eebc',
        black: '#242424',
        white: '#FFFFFF',
      },
      fontSize: {
        '19': '4.75rem',
        '30': '7.5rem'
      },
      letterSpacing: {
        'big': '0.15rem',
        'wide': '0.3rem',
        'wider': '0.5rem',
        'widest': '1rem'
      },
      lineHeight: {
        19.5: '4.875rem',
        25: '6.25rem'
      }
    },
  },
  plugins: [],
}

