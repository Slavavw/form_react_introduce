var path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const mode = (process.env.NODE_ENV === 'production') ? "production" : "development";
console.log(mode);
console.log(path.resolve(__dirname, 'index.js'));
module.exports = {
  mode: mode,
  devtool: mode === 'development' ? "inline-source-map" : "none",
  devtool: "source-map",
  entry: path.resolve(__dirname, 'index.js'),
  output: { filename: 'boundle.js', path: path.resolve(__dirname, "dist") },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /\.(sa|sc|c)ss$/i, use: [mode === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'] },
    ]
  },
  plugins: [
    new htmlWebpackPlugin({ template: "index.html", filename: path.join(__dirname, "dist", "index.html") }), ////подключили сборку webpack html файла можно задать шаблон страницы      
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }), //настройка чтобы каждый раз удалялась папка dist                       
    new MiniCssExtractPlugin(),
  ],
  devServer: {
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 8081,
    open: true
  },
};
