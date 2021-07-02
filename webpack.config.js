const HtmlWebpackPlugin = require('html-webpack-plugin'); // Require  html-webpack-plugin plugin
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path');
module.exports = {
  //mode: 'development',
  entry: ['./src/app/init.js',
  './src/style/app.scss', 
  './src/app/index.js',
  watch: true],
  output: {
  //  path:  path.resolve(__dirname, 'out'), //path.join(__dirname, 'dist'),
  //  publicPath: '/out/',
    filename: "./js/bundle.js",
  //  chunkFilename: '[name].js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      include: [
        path.resolve(__dirname , 'src/app/js')
      ],
      exclude: [
        path.resolve(__dirname, 'node_modules')
      ],
      use: {
        loader: 'babel-loader',
        options: {
          presets: 'env'
        }
      }
 //     loader: 'babel-loader',
 //     query: {        presets: [          ["@babel/env", {          "targets": {              "browsers": "last 2 chrome versions"            }
          }]
        ]
      }
    },
    {
      test: /\.(sass|scss)$/,
      include: path.resolve(__dirname, 'src/scss'),
      use: ExtractTextPlugin.extract({
        use: [{
            loader: "css-loader",
            options: {
              sourceMap: true,
              minimize: true,
              url: false
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      })
    },]
  },
  plugins: [  // Array of plugins to apply to build chunk
    new HtmlWebpackPlugin({
        template: "./public/index.html",
        inject: 'body'
    }),
    new ExtractTextPlugin({
      filename: './css/style.bundle.css',
      allChunks: true,
    }),
	]
//	  plugins: [    new ExtractTextPlugin({      filename: './css/style.bundle.css',      allChunks: true,    }),    ...  ]
 /* resolve: {
    extensions: ['.json', '.js', '.jsx']
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, './src/public'),
    inline: true,
    host: 'localhost',
    port: 8080,
  }*/
};