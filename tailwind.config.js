/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        relative: ["Relative"], 
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
      },
      animation: {
        "slide-in": "slide-in 2s ease forwards",
      },
    },
  },
  plugins: [],
};
