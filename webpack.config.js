const path = require('path')
const webpack = require('webpack');
const cssnext = require('postcss-cssnext');

module.exports = {
  devtool: 'eval-source-map',
  entry: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client',
    './src/index'
  ],
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: [path.resolve('src')],
        loaders: ['babel']
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!postcss-loader'
      },
      {
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader'
      }
    ]
  },
  postcss: function () {
        return [cssnext];
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),

  ]
}
