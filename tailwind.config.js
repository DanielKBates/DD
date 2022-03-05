module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInDelay: {
          "0%, 50%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        fadeInShort: "fadeIn 1s ease-in",
        fadeInMed: "fadeInDelay 2s ease-in",
        fadeInLong: "fadeInDelay 4s ease-in",
        fadeInXL: "fadeInDelay 6s ease-in"
      },
    },
  },
  plugins: [],
};
