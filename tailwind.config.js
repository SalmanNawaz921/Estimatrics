/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        boxColor: "red",
        gold: {
          50: "#f8f5eb",  // Very light tint of gold-500
          100: "#f1ebd6", // Light tint
          200: "#e8ddb8", // Lighter base
          300: "#dfcf99", // Light version
          400: "#DBC981", // Your original gold-500 (now at 400)
          500: "#c9b45e", // Slightly darker
          600: "#b39a4a", // Medium dark
          700: "#8a7739", // Darker
          800: "#615428", // Very dark
          900: "#383117", // Near-black with gold undertone
        },
        dark: {
          900: "#0a0a0a",
          800: "#1a1a1a",
          700: "#2a2a2a",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [],
};