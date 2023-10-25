/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        relative: ["Relative"],
      },
      fontWeight: {
        bold: "bold",
        normal: "normal",
        medium: 500,
      },
      keyframes: {
        "slide-in": {
          from: {
            transform:
              "translate3d(0px, 50vh, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
            opacity: 0,
          },
          to: {
            transform:
              "translate3d(0px, 0vh, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
            opacity: 1,
          },
        },
        "up-down": {
          "0%, 100%": {
            transform:
              "translate3d(0px, 0rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
          },
          "50%": {
            transform:
              "translate3d(0px, 2.5rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
          },
        },
      },
      animation: {
        "slide-in": "slide-in 2s ease forwards",
        "up-down": "up-down 9s ease-in-out infinite",
      },
      cursor: {
        custom: "url(/cursor.svg), auto",

      },
    },
  },
  plugins: [],
};
