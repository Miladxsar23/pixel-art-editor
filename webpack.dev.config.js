const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
module.exports = {
  entry: {
    app: "./src",
  },
  devtool: "inline-source-map",
  devServer: {
    static: "/static",
    hot: true,
    liveReload: false,
    compress: true,
    port: 9000,
  },
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      title: "a pixel art editor",
    }),
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname + "dist"),
    clean: true,
  },
  module: {
    rules: [
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      {
        test: /\.{jpg|png}$/,
        use: {
          loader: "url-loader",
        },
      },
    ],
  },
};
