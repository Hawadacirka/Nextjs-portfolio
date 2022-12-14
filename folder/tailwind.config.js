/** @type {import('tailwindcss').Config} */
module.exports = { lightMode: "class",
  content: ["./app/**/*.{js,ts,jsx,tsx}",
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        Rubik: ["Rubik Bubbles", "cursive"],
      },
    },
  },
  plugins: [],
};
