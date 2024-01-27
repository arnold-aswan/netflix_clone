/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        netflixred: "#E50914",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
