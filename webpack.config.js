const HtmlWebpackPlugin = require('html-webpack-plugin'); // Require  html-webpack-plugin plugin
const path = require('path');
module.exports = {
  mode: 'development',
  entry: ['./src/app/init.js',
  watch: true],
  output: {
    path:  path.resolve(__dirname, 'out'), //path.join(__dirname, 'dist'),
    publicPath: '/out/',
    filename: "bundle.js",
    chunkFilename: '[name].js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      include: [
        path.resolve(__dirname , './src/app/init.js')
      ],
      exclude: [
        path.resolve(__dirname, 'node_modules')
      ],
      loader: 'babel-loader',
      query: {
        presets: [
          ["@babel/env", {
            "targets": {
              "browsers": "last 2 chrome versions"
            }
          }]
        ]
      }
    }]
  },
  plugins: [  // Array of plugins to apply to build chunk
    new HtmlWebpackPlugin({
        template: "./src/public/index.html",
        inject: 'body'
    }),
	]
//	  plugins: [    new ExtractTextPlugin({      filename: './css/style.bundle.css',      allChunks: true,    }),    ...  ]
  resolve: {
    extensions: ['.json', '.js', '.jsx']
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, './src/public'),
    inline: true,
    host: 'localhost',
    port: 8080,
  }
};