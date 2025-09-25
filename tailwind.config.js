/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  extend: {
    colors: {
      primary: "#1A73E8",   // from your Figma brand color
      secondary: "#FF5722",
    },
    fontFamily: {
      heading: ["Poppins", "sans-serif"], // match your figma font
      body: ["Inter", "sans-serif"],
    },
    boxShadow: {
      card: "0 4px 20px rgba(0,0,0,0.1)", // same shadow as figma
    },
  },
},

  plugins: [],
};
