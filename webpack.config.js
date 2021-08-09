// const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const pug = require('pug');
// const {CleanWebpackPlugin} = ('del-cli');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const PATHS = {
  source: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'out')
};
const config = {
  entry:  {
    'index': PATHS.source + '/uiKit/index.js'
    //'scss': PATHS.source + './scss/style.scss',
    //'pug': PATHS.source + './pug/index.pug',
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
    
     new HtmlWebpackPlugin({
        template: PATHS.source + '/uiKit/index.pug',
        filename: '[name].html',
        // inject: 'body'
    }),
         new HtmlWebpackPlugin({
        template: PATHS.source + '/uiKit/landing/landing.pug',
        filename: 'landing.html',
        // inject: 'body'
    }),
             new HtmlWebpackPlugin({
        template: PATHS.source + '/uiKit/landing/registration.pug',
        filename: 'registration.html',
        // inject: 'body'
    }),
                 new HtmlWebpackPlugin({
        template: PATHS.source + '/uiKit/landing/signIn.pug',
        filename: 'signIn.html',
        // inject: 'body'
    }),
                     new HtmlWebpackPlugin({
        template: PATHS.source + '/uiKit/landing/searhRoom.pug',
        filename: 'searhRoom.html',
        // inject: 'body'
    }),
   // new LodashModuleReplacementPlugin
   new MiniCssExtractPlugin({
     filename: '[name].css'
           //filename: PATHS.source + '/scss/style.scss',
 //     linkType: 'text/css',
    })
  ]
};

module.exports = config;