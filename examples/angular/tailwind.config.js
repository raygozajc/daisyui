module.exports = {
  purge: {
    content: ["./src/**/*.{html,ts}"],
  },
  plugins: [require("daisyui")],

  daisyui: {
    styled: true,
    themes: ["corporate"], 
  base: true,
    utils: true,
    logs: true,
    rtl: false,
    darkTheme: "business",
  },

};


// themes: ["light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"],
  


// module.exports = {
//   //...

//   // add daisyUI plugin
//   plugins: [require("daisyui")],

//   // daisyUI config (optional)
//   daisyui: {
//     styled: true,
//     themes: true,
//     base: true,
//     utils: true,
//     logs: true,
//     rtl: false,
//     prefix: "",
//     darkTheme: "dark",
//   },
// }