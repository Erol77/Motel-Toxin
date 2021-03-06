const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
//const pug = require('pug');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const PATHS = {
  source: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'out')
};
const config = {
  entry:  {
    'index': PATHS.source + '/index.js'
    //'scss': PATHS.source + './scss/style.scss',
    //'pug': PATHS.source + './pug/index.pug',
  },
  output: {
    path: PATHS.build,
    //filename: '[name].js',
    //publicPath: '/out/',
    filename: "bundle.js",
    chunkFilename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
         //include: PATHS.source + '/src/scss/style.scss',
        use: [MiniCssExtractPlugin.loader,
          //'style-loader',
          'css-loader',
          'sass-loader'
        ],

      },
      {
        test: /\.pug$/,
        loader: 'url-loader',
        options: {
              pretty: true,
        }
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.svg$/,
        use: 'file-loader'
      },
      {
        test: /\.png$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              mimetype: 'image/png'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      //     appMountId: 'app',
            filename: 'index.html',
      chunks: ['index'],
      template: PATHS.source + '/pug/index.html'
    }),/*
     new HtmlWebpackPlugin({
        template: PATHS.source + '/pug/index.pug',
        inject: 'body'
    }),*/
   // new LodashModuleReplacementPlugin
   new MiniCssExtractPlugin({
           //filename: PATHS.source + '/scss/style.scss',
 //     linkType: 'text/css',
    })
  ]
};

module.exports = config;