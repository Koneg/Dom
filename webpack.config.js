// подключаем модуль path

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const WebpackDevServer = require("webpack-dev-server");
// exporting modules
module.exports = {
  entry: "./src/index.js",
  //exit file
  output: {
    // file name
    filename: "bundle.js",
    //path to save
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,
    port: 9000,
  },
  // connect modules
  module: {
    rules: [
      {
        // type of files for which we write the rules
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates style nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};
