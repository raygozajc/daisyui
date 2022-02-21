module.exports = {
  purge: {
    content: ["./src/**/*.{html,ts}"],
  },
  plugins: [require("daisyui")],

  daisyui: {
    styled: true,
    themes: ["fantasy"],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    darkTheme: "dark",
  },

};
