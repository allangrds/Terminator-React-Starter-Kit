const path              = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin    = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/app/index.js',
    output: {
        path: path.resolve(__dirname, "./public"),
        filename: 'bundle.js',
        publicPath: '/',
    },
    module: {
      loaders: [{
        test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
                presets: ['es2015', 'react']
            }
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader?modules=true&sourceMap=true&minimize=true&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
            'sass-loader',
            {
              loader: 'sass-resources-loader',
              options: {
                resources: './src/assets/css/**/*.scss'
              }
            }
          ]
        })
      },
      {
        test: /\.styl$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader?modules=true&sourceMap=true&minimize=true&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
            'stylus-loader',
            {
              loader: 'stylus-resources-loader',
              options: {
                resources: './src/assets/css/**/*.styl'
              }
            }
          ]
        })
      }]
    },
    devtool: 'source-map',
    plugins: [
      new HtmlWebpackPlugin({
          template: path.join(__dirname, './public/index.html'),
          filename: 'index.html',
          inject: 'body',
          cache: true,
          hash: true,
      }),
      new UglifyJSPlugin({
        compress: true,
        sourceMap: true,
        beautify: false,
        extractComments: false
      }),
      new ExtractTextPlugin({
        filename: './public/app.css',
        allChunks: true
      })
    ],
    devServer: {
        inline: true,
        contentBase: './public',
        port: 3000,
        historyApiFallback: true
    },
}
