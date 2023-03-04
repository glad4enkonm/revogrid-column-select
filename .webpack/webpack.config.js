const path = require('path');

let libraryName = 'RevoGridColumnSelect';
module.exports = {
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js',
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  devtool: 'source-map',
  externals: {
    '@revolist/revogrid': '@revolist/revogrid',
    '@revolist/revogrid/loader': '@revolist/revogrid/loader',
    '@revolist/revo-dropdown': '@revolist/revo-dropdown',
    '@revolist/revo-dropdown/loader': '@revolist/revo-dropdown/loader'
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,

      },
    ],
  },
};
