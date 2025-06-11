// module.exports = {
//   content: ["./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {
//       colors: {
//         boxColor: "#112240",
//         gold: {
//           50: "#fff9e6",
//           100: "#ffefb3",
//           200: "#ffe680",
//           300: "#ffdc4d",
//           400: "#ffd31a",
//           500: "#e6b800", // Primary gold
//           600: "#b38f00",
//           700: "#806600",
//           800: "#4d3d00",
//           900: "#1a1400",
//         },
//         dark: {
//           900: "#0a0a0a",
//           800: "#1a1a1a",
//           700: "#2a2a2a",
//         },
//       },
//       fontFamily: {
//         sans: ["Inter", "sans-serif"],
//         serif: ["Playfair Display", "serif"],
//       },
//     },
//   },
//   plugins: [],
// };

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        boxColor: "red",
        gold: {
          50: "#fff9e6",
          100: "#ffefb3",
          200: "#ffe680",
          300: "#ffdc4d",
          400: "#ffd31a",
          500: "#e6b800", // Primary gold
          600: "#b38f00",
          700: "#806600",
          800: "#4d3d00",
          900: "#1a1400",
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
