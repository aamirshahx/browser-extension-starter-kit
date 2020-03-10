// const config = require('./build.config');

const path = require('path');
const webpack = require('webpack');
const DefinePlugin = webpack.DefinePlugin;
const ProgressPlugin = require('webpack/lib/ProgressPlugin');
const MergeJsonWebpackPlugin = require('merge-jsons-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin;

const env = (process.env.NODE_ENV || 'production').toLowerCase();
const target = (process.env.TARGET || 'chrome').toLowerCase();

const prod = env === 'production';
const outDir = path.join(__dirname, 'dist');

module.exports = {
  mode: prod ? 'production' : 'development',
  devtool: prod ? false : 'source-map',
  cache: true,
  context: __dirname,
  stats: {
    colors: true,
    reasons: true
  },
  entry: {
    background: ['./src/communication/channel'],
    // popup: ['./src/app/popup/']
  },
  output: {
    path: outDir,
    filename: "[name].js",
    sourceMapFilename: "[name].js.map",
    chunkFilename: "[name].chunk.js"
  },
  resolve: {
    extensions: ['.js', '.ts', '.json'],
    modules: ['./node_modules'],
  },
  resolveLoader: {
    modules: ['./node_modules']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ]
  },
  plugins: [
    new ProgressPlugin(),
    new CleanWebpackPlugin(),
    new DefinePlugin({
      'process.env.NODE_ENV': env,
      'process.env.TARGET_ENV': target
    }),
    new MergeJsonWebpackPlugin({
      "files": [
        `./src/manifest/base.manifest.json`,
        `./src/manifest/${target}.manifest.json`
      ],
      "output": {
        fileName: "./manifest.json"
      }
    })
  ].concat(
    prod ? [/* ... prod-only pluginss*/] : [
        // ... dev-only plugins
        // new BundleAnalyzerPlugin(),
      ]
  ),
  node: {
    crypto: false,
    __filename: true
  }
}
