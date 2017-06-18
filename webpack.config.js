const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'static/js/app.bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      { test:/\.js$/, use: 'babel-loader' , exclude: /node_modules/ },
     
      {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
              use: ["css-loader"]
          })
      },

      {
          test: /\.scss$/,
          use: ExtractTextPlugin.extract({
              use: ["css-loader", "sass-loader"]
          })
      }
  
    ]
  },
  plugins: [
    new ExtractTextPlugin("static/css/globals.css"),
    new CopyWebpackPlugin([
          { from: 'index.html' },
        //   { from: 'src/static/icons' , to: 'static/icons'},
        //   { from: 'src/static/images' , to: 'static/images'},
      ])
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 3000,
    stats:"minimal",
    open:true
  },
  devtool:"source-map"
};
