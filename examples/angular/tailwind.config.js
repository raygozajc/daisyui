// module.exports = {
//   purge: {
//     content: ["./src/**/*.{html,ts}"],
//   },
//   plugins: [require("daisyui")],

//   daisyui: {
//     styled: true,
//     themes: ["fantasy"], 
//     base: true,
//     utils: true,
//     logs: true,
//     rtl: false,
//     darkTheme: "dark",
//   },

// };

module.exports = {
  //...

  // add daisyUI plugin
  plugins: [require("daisyui")],

  // daisyUI config (optional)
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
}