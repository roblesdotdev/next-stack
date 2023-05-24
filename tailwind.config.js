/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: '#0e0616',
          muted: '#1d1b25',
        },
        fg: {
          DEFAULT: '#d7d7db',
          emphasis: '#fdfdfd',
          // muted: '#868589',
          muted: 'rgb(145 151 158 / <alpha-value>)',
        },
      },
    },
  },
  plugins: [],
}
