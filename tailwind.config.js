/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        green: "hsl(75 94% 57%)",
        gold: "hsl(45 97% 50%)",
        blue: "hsl(201 100% 35%)",
        red: "	hsl(0 100% 50%)",
        "sky-blue": "hsl(189 50% 61%)",
        grey: "hsl(0 0% 20%)",
        "dark-grey": "hsl(0 0% 12%)",
        "off-black": "hsl(0 0% 8%)",
      },
      fontFamily: {
        Inter: "Inter, sans-serif",
      },
    },
  },
  plugins: [],
};
