// const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const pug = require('pug');
// const {CleanWebpackPlugin} = ('del-cli');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const PATHS = {
  source: path.join(__dirname, 'barberchop/src'),//'src'
  build: path.join(__dirname, 'barberchop/out') //'out'
};
const config = {
  entry:  {
    //'index': PATHS.source + '/uiKit/index.js'
    //'scss': PATHS.source + './scss/style.scss',
    //'pug': PATHS.source + './pug/index.pug',
	'index': PATHS.source + '/index.js'
  },
  output: {
    path: PATHS.build,
    //filename: '[name].js',
    //publicPath: '/out/',
    filename: "[name].bundle.js",
    chunkFilename: '[name].js'
  },
  module: {
    rules: [
      {
	          test: /\.(sass|scss)$/,
        use: [MiniCssExtractPlugin.loader ,//"css-loader",
		{
            loader: "css-loader",
            options: {
              sourceMap: true,
              //minimize: true,
              //url: false
            }
          },
		          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          }
        ],

      },
      {
        test: /\.pug$/,
        loader: 'pug-loader',
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
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
type: "asset/resource"
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
            
    //  new CleanWebpackPlugin(),
    
    // new HtmlWebpackPlugin({
    //    template: PATHS.source + '/uiKit/index.pug',
     //   filename: '[name].html',
        // inject: 'body'
    //}),
	     new HtmlWebpackPlugin({
        template: PATHS.source + '/index.pug',
        filename: '[name].html',
        // inject: 'body'
    }),
    //      new HtmlWebpackPlugin({
    //     template: PATHS.source + '/uiKit/landing/landing.pug',
    //     filename: 'landing.html',
    // }),
    //          new HtmlWebpackPlugin({
    //     template: PATHS.source + '/uiKit/landing/registration.pug',
    //     filename: 'registration.html',
    // }),
    //              new HtmlWebpackPlugin({
    //     template: PATHS.source + '/uiKit/landing/signIn.pug',
    //     filename: 'signIn.html',
    // }),
    //                  new HtmlWebpackPlugin({
    //     template: PATHS.source + '/uiKit/landing/searhRoom.pug',
    //     filename: 'searhRoom.html',
    // }),
   // new LodashModuleReplacementPlugin
   new MiniCssExtractPlugin({
     filename: '[name].css'
           //filename: PATHS.source + '/scss/style.scss',
 //     linkType: 'text/css',
    })
  ]
};

module.exports = config;