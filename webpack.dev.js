const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = merge(common, {
  mode: "development",
  watch: true,
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dev"),
  },
  watchOptions: {
    ignored: /node_modules/,
  },
  // plugins: [
  //   new CleanWebpackPlugin(),
  // ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
});
