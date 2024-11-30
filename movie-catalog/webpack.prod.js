const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  modu: 'production',
  devtool: 'source-map',
  module:{
    rules:[
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader', //mendukung syntak ES6 di ES5 supaya tetap terbaca di browser lama
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        ],
      },
    ],
  },
});