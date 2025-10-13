/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
   theme: {
    extend: {
      colors:{
        darkCream:"#FCF0C8",
        cream : "#FCF3DE",
        forest : "#124029",
        mint : "#E4FFCD",
        coral: "#E95D5C",
        gray : "#b3b6bf",
        text: "#1240299d"
      },
      fontSize :{
        '12' : "12px",
        '14' : "14px",
        '16' : "16px",
        '18' : "18px",
        '20' : "20px",
        '24' : "24px",
        '25' : "25px",
        '26' : "26px",
        '28' : "28px",
        '32' : "32px",
        '36' : "36px",
        '38' : "38px",
        '40' : "40px",
        '48' : "48px",
        '64' : "64px",
      }
    },
  },
  plugins: [],
}