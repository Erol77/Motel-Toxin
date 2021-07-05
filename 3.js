const path = require('path');
const { ExtractTextPlugin } = require("extract-text-webpack-plugin");
//const CopyWebpackPlugin = require('copy-webpack-plugin');
const { HtmlWebpackPlugin } = require('html-webpack-plugin');
const fs = require('fs');
/*
function generateHtmlPlugins(templateDir) {
  const templateFiles = fs.readdirSync(path.resolve(__dirname, templateDir));
  return templateFiles.map(item => {
    const parts = item.split('.');
    const name = parts[0];
    const extension = parts[1];
    return new HtmlWebpackPlugin({
      filename: `${name}.html`,
      template: path.resolve(__dirname, `${templateDir}/${name}.${extension}`),
      inject: false,
    })
  })
}
*/
//const htmlPlugins = generateHtmlPlugins('./src/include');

module.exports = {
  entry: [
   // './src/app/index.js',
    './src/app/init.js',
    './src/style/app.scss'
  ],
  output: {
    filename:// './js/bundle.js'
    './js/1bundle.js'
  },
  devtool: "source-map",
  module: {
    rules: [{
        test: /\.js$/,
        include: path.resolve(__dirname, 'src/app'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: 'env'
          }
        }
      },
      {
        test: /\.(sass|scss)$/,
        include: path.resolve(__dirname, 'src/style'),
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
      },
      {
        test: /\.html$/,
        include: path.resolve(__dirname, 'src/include'),
        use: ['raw-loader']
      },
    ]
  },
  plugins: [
   // new HtmlWebpackPlugin(), // Generates default index.html
    new HtmlWebpackPlugin({  // Also generate a test.html
      filename: 'index1.html',
      template: 'src/public/index1.html'
  /*  new HtmlWebpackPlugin({
        template: "./public/index.html",
        inject: 'body'*/
    }),
/*    new ExtractTextPlugin({
      filename: './css/style.bundle.css',
      allChunks: true,
    }),/*
/*    new CopyWebpackPlugin([{
        from: './src/fonts',
        to: './fonts'
      },
      {
        from: './src/favicon',
        to: './favicon'
      },
      {
        from: './src/img',
        to: './img'
      },
      {
        from: './src/uploads',
        to: './uploads'
      }
    ]),*/
  ]//.concat(htmlPlugins)
};