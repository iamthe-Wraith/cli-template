const { resolve } = require('path');
const { BannerPlugin } = require('webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  mode: 'none',
  output: {
    path: resolve(__dirname, 'bin'),
    filename: '{{projectName}}'
  },
  target: 'node',
  entry: ['@babel/polyfill', './src/index.ts'],
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.tsx?$/,
        exclude: '/node_modules/',
        use: 'ts-loader'
      }
    ]
  },
  plugins: [
    new BannerPlugin({
      banner: '#!/usr/bin/env node\n',
      raw: true
    })
  ],
  resolve: {
    extensions: ['*', '.ts', '.tsx', 'js']
  }
};
