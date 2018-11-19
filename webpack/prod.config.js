const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const ImageminPlugin = require("imagemin-webpack-plugin").default;
const CompressionPlugin = require("compression-webpack-plugin");
const OfflinePlugin = require("offline-plugin");
const PrerenderSPAPlugin = require("prerender-spa-plugin");
const PuppeteerRenderer = require("@prerenderer/renderer-puppeteer");
const baseConfig = require("./base.config.js");
const routes = require("../src/app/routes.js");

module.exports = merge(baseConfig, {
  mode: "production",
  plugins: [
    ///
    // Extract imported CSS to .css files
    // ==================================
    ///
    new MiniCssExtractPlugin({
      filename: "[name].[hash].min.css",
      chunkFilename: "[id].[hash].min.css",
    }),

    ///
    // Optimize images
    // ===============
    // Make sure that the plugin is after any plugins that add images
    ///
    new ImageminPlugin({
      test: /\.(jpe?g|png|gif|svg)$/i,
      jpegtran: {
        progressive: true,
      },
      optipng: {
        optimizationLevel: 5,
      },
      pngquant: {
        quality: "80",
      },
      gifsicle: {
        interlaced: true,
        optimizationLevel: 3,
      },
      svgo: {
        options: {
          cleanupAttrs: true,
          removeDoctype: true,
        },
      },
    }),

    ///
    // Pre-render the app
    // ==================
    ///
    new PrerenderSPAPlugin({
      // Path to the app to pre-render
      staticDir: path.join(__dirname, "../dist"),

      // Path to output the pre-rendered, static HTML
      outputDir: path.join(__dirname, "../dist"),

      // Location of index.html
      indexPath: path.join(__dirname, "../dist/index.html"),

      // Routes to render
      routes: ["/"],

      renderer: new PuppeteerRenderer({
        renderAfterDocumentEvent: "app.rendered",
        inject: {
          prerendered: true,
        },
        injectProperty: "__PRERENDER_INJECTED",
        headless: true,
      }),
    }),

    ///
    // Generate .gz version of files
    // =============================
    // TODO: Clean up the regexes here
    ///
    new CompressionPlugin({
      test: /\.js(\?.*)?$/i,
      cache: true,
    }),

    new CompressionPlugin({
      test: /\.css(\?.*)?$/i,
      cache: true,
    }),

    new CompressionPlugin({
      test: /\.svg(\?.*)?$/i,
      cache: true,
    }),

    new CompressionPlugin({
      test: /\.jpg(\?.*)?$/i,
      cache: true,
    }),

    new CompressionPlugin({
      test: /\.png(\?.*)?$/i,
      cache: true,
    }),

    new CompressionPlugin({
      test: /\.ico(\?.*)?$/i,
      cache: true,
    }),

    ///
    // Add offline service worker
    // ==========================
    // It's always better if OfflinePlugin is the last plugin added
    ///
    new OfflinePlugin(),
  ],
  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: true,
      }),
      new OptimizeCSSAssetsPlugin({}),
    ],
  },
});
