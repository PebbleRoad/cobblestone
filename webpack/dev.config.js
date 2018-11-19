const path = require("path");
const webpack = require("webpack");
// const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const merge = require("webpack-merge");

const baseConfig = require("./base.config.js");

module.exports = merge(baseConfig, {
  mode: "development",
  devtool: "cheap-module-eval-source-map",
  plugins: [
    ///
    // Speed up concurrent dev builds
    // ==============================
    // Currently broken: https://github.com/mzgoddard/hard-source-webpack-plugin/issues/455
    ///
    // new HardSourceWebpackPlugin(),
  ],
  devServer: {
    historyApiFallback: true,
    clientLogLevel: "none",
    compress: true,
    noInfo: true,
    port: 3000,
    disableHostCheck: true,
    contentBase: path.resolve(__dirname, "../dist"),
    watchContentBase: true,
    overlay: true,
  },
});
