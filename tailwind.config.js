module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        purple:{
          "1100": "#1e0132"
        }
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInDelay: {
          "0%, 50%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        moveBackground: {
          "0%": {
            backgroundPosition: "0% 50%",
          },
          "50%": {
            backgroundPosition: "100% 50%",
          },
          "100%": {
            backgroundPosition: "0% 50%",
          }
        },
      },
      animation: {
        fadeInShort: "fadeIn 1s ease-in",
        fadeInMed: "fadeInDelay 2s ease-in",
        fadeInLong: "fadeInDelay 4s ease-in",
        fadeInXL: "fadeInDelay 5s ease-in",
        horizontalBG: "moveBackground 10s ease-in-out infinite"
      },
    },
  },
  plugins: [],
};
