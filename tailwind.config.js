/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#76a99a",
          DEFAULT: "#518581",
          dark: "#3a635c",
        },
        secondary: {
          light: "#ffd567",
          DEFAULT: "#ffb23f",
          dark: "#cc8f31",
        },
        neutral: {
          DEFAULT: "#151411",
          textParagraph: "#afadb5",
          background: "#ffffff",
          border: "#f3f3f3",
          mixBackground: "#15141199",
        },
      },
    },
    boxShadow: {
      "home-custom-input": "0px 4px 80px 0px #AFADB533", // Custom shadow
      "home-service-box": " 0px 4px 100px 0px #AFADB51A",
    },
    fontFamily: {
      sans: ["Euxodos Sans", "sans-serif"],
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
