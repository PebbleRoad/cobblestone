const path = require("path");
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");
const SimpleProgressWebpackPlugin = require("simple-progress-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const WriteFilePlugin = require("write-file-webpack-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.stories\.jsx?$/,
        loaders: [require.resolve("@storybook/addon-storysource/loader")],
        enforce: "pre",
      },
      {
        test: /\.svg$/,
        use: "svg-inline-loader?removeSVGTagAttrs=false",
      },
      {
        test: /\.(woff|woff2|eot|ttf)$/,
        use: "url-loader?limit=100000",
      },
      {
        test: /\.(c|sc|sa)ss$/,
        use: [
          {
            loader: "style-loader",
            options: {
              sourceMap: true,
            },
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
          },
          {
            loader: "postcss-loader",
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
          {
            loader: "sass-resources-loader",
            options: {
              resources: [path.join(__dirname, "../src/styles/tokens/_.scss")],
            },
          },
        ],
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
    new CleanWebpackPlugin([path.join(__dirname, "../.storybook/dist/*")]),
    new FriendlyErrorsWebpackPlugin(),
    new SimpleProgressWebpackPlugin({
      format: "compact",
    }),
    new CopyWebpackPlugin([
      {
        from: path.join(__dirname, "../src/assets/images"),
        to: path.join(__dirname, `../.storybook/dist/_assets/images`),
      },
      {
        from: path.join(__dirname, "../src/assets/fonts"),
        to: path.join(__dirname, `../.storybook/dist/_assets/fonts`),
      },
    ]),
    new WriteFilePlugin(),
  ],
};
