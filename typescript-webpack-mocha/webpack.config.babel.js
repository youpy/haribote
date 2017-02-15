import webpack from 'webpack';

const production = process.env.NODE_ENV === 'production';

export default {
  entry: ['babel-polyfill', './src/index.ts'],
  output: {
    filename: './dist/bundle.js'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.js']
  },
  plugins: [
      ...(production ? [new webpack.optimize.UglifyJsPlugin()] : [])
  ],
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          { loader: 'babel-loader' },
          { loader: 'ts-loader' }
        ]
      }
    ]
  }
};
