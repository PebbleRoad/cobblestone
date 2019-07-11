const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const prodConfig = require("./prod.config.js");

module.exports = merge(prodConfig, {
  plugins: [new BundleAnalyzerPlugin()],
});
