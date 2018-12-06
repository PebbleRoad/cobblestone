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
    clientLogLevel: "none",
    compress: true,
    contentBase: path.resolve(__dirname, "../dist"),
    disableHostCheck: true,
    historyApiFallback: true,
    host: "0.0.0.0",
    port: 3000,
    noInfo: true,
    overlay: true,
    watchContentBase: true,
  },
});
