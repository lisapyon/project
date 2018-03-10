module.exports = {
  entry: './src/app.tsx',
  output: {
    path: './dist',
    filename: 'bundle.js'
  },
  devtool: 'inline-source-map',
  module: {
    loaders: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
};
