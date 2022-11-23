/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#F3AA4E",
          light: "#F3B05C",
          dark: "#F3A544",
        },
      },
      fontFamily: {
        inter: ["inter", "helvetica", "sans-serif"],
        poppins: ["Poppins", "Arial", "sans-serif"],
        nunito: ["nunito", "helvetica", "sans-serif"],
        righteuos: ["Righteous", "Arial", "sans-serif"],
        quicksand: ["quicksand", "inter", "verdana"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms"),require("@tailwindcss/typography"), require("daisyui")],

  daisyui: {
    themes: [
      {
        myTheme: {
          background: "#0F1418",
          primary: "#F3AA4E",
          secondary: "#6495ED",
          accent: "#4EF3AA",
          neutral: "#191D24",
          "base-100": "#2A303C",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",

          "primary-focus": "#ec9f3d",
          "secondary-focus": "#598ae3",
          "accent-focus": "#43e89f",
        },
      },
    ],
  },
};
