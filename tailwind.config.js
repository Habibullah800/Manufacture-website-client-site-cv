module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#F6E99D",

          "secondary": "#F89999",

          "accent": "#2000B9",

          "neutral": "#3D4451",

          "base-100": "#FFFFFF",

          "info": "#3ABFF8",

          "success": "#36D399",

          "warning": "#FBBD11",

          "error": "#eb3b5a",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
