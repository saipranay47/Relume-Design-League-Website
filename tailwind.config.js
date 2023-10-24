/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "slide-in": {
          from: {
            transform:
              "translate3d(0px, 50vh, 0px) scale3 rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
            opacity: 0,
          },
          to: {
            transform:
              "translate3d(0px, 0vh, 0px) scale3 rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
            opacity: 1,
          },
        },
      },
      animation: {
        "slide-in": "slide-in 3s ease forwards",
      },
    },
  },
  plugins: [],
};
