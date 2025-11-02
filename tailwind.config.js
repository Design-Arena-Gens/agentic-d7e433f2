/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
      },
      colors: {
        background: "hsl(0 0% 3%)",
        foreground: "hsl(0 0% 98%)",
        muted: "hsl(0 0% 15%)",
      },
      animation: {
        'slow-spin': 'spin 12s linear infinite',
        'blob': 'blob 8s infinite',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
};
