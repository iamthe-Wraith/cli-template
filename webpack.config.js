const { resolve } = require('path');
const { BannerPlugin } = require('webpack');
const nodeExternals = require('webpack-node-externals');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

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
    }),
    new CleanWebpackPlugin()
  ],
  resolve: {
    extensions: ['*', '.ts', '.tsx', 'js'],
    alias: {
      apis: resolve(__dirname, 'src', 'apis'),
      commands: resolve(__dirname, 'src', 'commands'),
      lib: resolve(__dirname, 'src', 'lib'),
      root: resolve(__dirname),
      src: resolve(__dirname, 'src'),
      types: resolve(__dirname, 'src', 'types'),
      utils: resolve(__dirname, 'src', 'utils')
    }
  }
};
