// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const tailwindcss = require("tailwindcss")

module.exports = {
  siteName: 'Lubby Lab',
  siteUrl: 'lubbylab.com',
  trailingSlash: true,
  pathPrefix: "",
  version: "0.7.13",
  catchLinks: true,
  titleTemplate: "%s - Lubby Lab",
  plugins: [],
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          tailwindcss
        ],
      },
    },
  }
}