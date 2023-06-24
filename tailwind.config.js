/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bgColor: "#0a192f",
        customHighlight: "#4717f6",
        // customHighlight: "#d81b60",
        myTextColor: "#9CA3AF",
        lightBgColor: "#9CA3AF",
      },
    },
  },
  plugins: [],
};
