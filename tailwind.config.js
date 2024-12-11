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
        "screen-height": '100dvh',
        "screen-width": '100dvw',
        25: '6.25rem',
        26: '6.5rem',
        40.5: '10.125rem',
      },
      colors: {
        primary: '#64eebc',
        black: '#242424',
        white: '#FFFFFF',
      },
      fontSize: {
        '8.5xl': '7.5rem'
      },
      letterSpacing: {
        'wide': '0.3rem',
        'wider': '0.5rem',
        'widest': '1rem'
      },
      lineHeight: {
        25: '6.25rem'
      }
    },
  },
  plugins: [],
}

