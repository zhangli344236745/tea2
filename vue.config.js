const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  outputDir: "dist",
  configureWebpack: (config) => {
    let plugins = [
      new CopyPlugin([
        {
          from: path.resolve(__dirname, "./src/assets"),
          to: path.resolve(__dirname, "./dist/assets"),
        },
      ]),
    ];
    config.plugins = [...config.plugins, ...plugins];
  },
  publicPath: process.env.NODE_ENV === "production" ? "/tea2/" : "/",
};
