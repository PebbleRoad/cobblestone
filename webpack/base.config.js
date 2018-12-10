const pkg = require("../package.json");
const path = require("path");
const webpack = require("webpack");
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");
const SimpleProgressWebpackPlugin = require("simple-progress-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const DuplicatePackageCheckerPlugin = require("duplicate-package-checker-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ScriptExtHtmlWebpackPlugin = require("script-ext-html-webpack-plugin");
const WebappWebpackPlugin = require("webapp-webpack-plugin");

const DEV_MODE = process.env.NODE_ENV !== "production";

module.exports = {
  entry: {
    babelPolyfill: "@babel/polyfill",
    customEventPolyfill: "custom-event-polyfill",
    lazysizes: "lazysizes",
    app: path.resolve(__dirname, "../src/app/index.js"),
    scripts: path.resolve(__dirname, "../src/scripts/index.js"),
    carapace: path.resolve(__dirname, "../src/styles/carapace.scss"),
  },
  output: {
    filename: DEV_MODE
      ? "[name].bundle.[hash].js"
      : "[name].bundle.[hash].min.js",
    chunkFilename: DEV_MODE
      ? "[name].bundle.[chunkhash].js"
      : "[name].bundle.[chunkhash].min.js",
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/",
  },
  module: {
    rules: [
      ///
      // .vue files
      // ==========
      ///
      {
        test: /\.vue$/,
        use: {
          loader: "vue-loader",
          options: {
            compilerOptions: {
              preserveWhitespace: false,
            },
          },
        },
      },

      ///
      // .js files
      // =========
      ///
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },

      ///
      // .css, .scss, .sass files
      // ========================
      ///
      {
        test: /\.(c|sc|sa)ss$/,
        use: [
          {
            loader: DEV_MODE ? "vue-style-loader" : MiniCssExtractPlugin.loader,
            options: DEV_MODE
              ? {}
              : {
                  publicPath: path.resolve(
                    __dirname,
                    "../dist/~assets/stylesheets"
                  ),
                },
          },
          "css-loader",
          "postcss-loader",
          {
            loader: "sass-loader",

            ///
            // `node-sass-glob-importer` seems to be incompatible with
            // Storybook, so it has been temporarily removed from Cobblestone
            ///

            // options: {
            //   importer: require('node-sass-glob-importer')(),
            // },
          },
          {
            loader: "sass-resources-loader",
            options: {
              resources: [
                path.resolve(__dirname, "../src/styles/tokens/_.scss"),
              ],
            },
          },
        ],
        include: path.resolve(__dirname, "../"),
      },

      ///
      // .svg files
      // ==========
      ///
      {
        test: /\.svg$/,
        use: "svg-inline-loader?removeSVGTagAttrs=false",
      },

      ///
      // Webfont files
      // =============
      ///
      {
        test: /\.(woff|woff2|eot|ttf)$/,
        use: "url-loader?limit=100000",
      },
    ],
  },
  resolve: {
    alias: {
      vue$: "vue/dist/vue.esm.js",
      "~App": path.resolve(__dirname, "../src/app"),
      "~Data": path.resolve(__dirname, "../src/data"),
      "~Styles": path.resolve(__dirname, "../src/styles"),
      "~Scripts": path.resolve(__dirname, "../src/scripts"),
      "~Assets": path.resolve(__dirname, "../src/assets"),
      "~Components": path.resolve(__dirname, "../src/components"),
      "~Views": path.resolve(__dirname, "../src/app/views"),
    },
  },
  plugins: [
    ///
    // Add friendly Webpack errors
    // =======================
    ///
    new FriendlyErrorsWebpackPlugin(),

    ///
    // Add better progress reporting
    // =============================
    ///
    new SimpleProgressWebpackPlugin({
      format: DEV_MODE ? "compact" : "expanded",
    }),

    ///
    // Delete build folder
    // ===================
    ///
    new CleanWebpackPlugin([path.resolve(__dirname, "../dist/*")], {
      allowExternal: true,
    }),

    ///
    // Add Vue SFC support
    // ===================
    ///
    new VueLoaderPlugin(),

    ///
    // Inject assets into HTML
    // =======================
    ///
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../src/html/index.html"),
      filename: path.resolve(__dirname, "../dist/index.html"),
      inject: "head",
      minify: {
        collapseWhitespace: true,
        useShortDoctype: true,
        minifyCSS: true,
        minifyJS: true,
      },
    }),

    ///
    // Configure script extensions
    // ===========================
    ///
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: "defer",
      async: ["carapace"],
    }),

    ///
    // Copy assets to build folder
    // ===========================
    ///
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, "../src/public"),
        to: path.resolve(__dirname, "../dist"),
      },
      {
        from: path.resolve(__dirname, "../src/assets/images"),
        to: path.resolve(__dirname, "../dist/_assets/images"),
      },
      {
        from: path.resolve(__dirname, "../src/assets/fonts"),
        to: path.resolve(__dirname, "../dist/_assets/fonts"),
      },
    ]),

    ///
    // Generate favicons
    // =================
    ///
    new WebappWebpackPlugin({
      title: pkg.config.project.name,
      appDescription: pkg.config.project.description,
      background: pkg.config.project.bgColor,
      logo: path.resolve(__dirname, "../src/assets/favicon.png"),
      prefix: "_assets/favicon/",
      cache: true,
      inject: true,
      favicons: {
        appName: pkg.config.project.name,
        appDescription: pkg.config.project.description,
        version: pkg.version,
        developerName: null,
        developerUrl: null,
        background: pkg.config.project.bgColor,
        theme_color: pkg.config.project.themeColor,
      },
    }),

    ///
    // Check for duplicate packages
    // ============================
    ///
    new DuplicatePackageCheckerPlugin({
      verbose: true,
      showHelp: true,
      strict: true,
    }),
  ],
};
