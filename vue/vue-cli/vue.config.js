module.exports = {
  publicPath: "./",
  filenameHashing: false,
  pages: {
    "howto-tile": {
      entry: "./src/pages/howto-tile/main.js",
      template: "public/index.html",
      filename: "howto-tile.html",
      title: "howto-tile",
      chunks: ["chunk-vendors", "chunk-common", "howto-tile"]
    }
  }
};
