const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const publicPath = 'dist';

module.exports = () => {
  

  return {
    entry: ['babel-polyfill', `./src/index.js`],
    output: {
      filename: 'bundle.js',
      path: path.resolve(`./dist`),
    },
    devServer: {
      port: 3000,
      host: 'localhost',
      contentBase: path.join(__dirname, publicPath),
    },
    module: {
      rules: [
        {
          test: /\.js|.jsx?$/,
          exclude: /(node_modules)/,
          use: [
            {
              loader: 'babel-loader'
            },
          ],
        },
        {
          test: /\.css$/,
          loaders: ['style-loader', 'css-loader'],
        },
        { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './index.html',
      })
    ]
  };
};
