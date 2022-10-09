/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html", "./public/js*.js"],
  theme: {
    letterSpacing: {
      tiny: "5px",
      smallest: "10px",
      widest: '15px',
    },
    extend: {
      borderStyle: ['hover'],
      colors: {
        "dark-gray" : "var(--dark-gray)",
        "black" : "var(--black)",
        "white" : "var(--white)",
        "very-dark-gray" : "var(--very-dark-gray)"
      },
      fontFamily: {
        "League-Spartan" : ["League Spartan", "sans-serif"]
      }
    },
  },
  plugins: [],
}
