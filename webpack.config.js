const path = require('path');
module.exports = {
  mode: 'development',
  entry: path.join(__dirname + '/src/app/init.js'),
  watch: true,
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: "bundle.js",
    chunkFilename: '[name].js'
  },
  module: {
    rules: [{
      test: /.jsx?$/,
      include: [
        path.resolve(__dirname, 'app', '/app/init.js')
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
        template: __dirname + "/src/public/init.js",
        inject: 'body'
    }),
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