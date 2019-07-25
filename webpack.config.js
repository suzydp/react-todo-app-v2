// Load path module to specify output path
const path = require('path');

module.exports = {
  // Entry point for export
  entry: './src/index.jsx',
  // Output type
  mode: 'production',
  output: {
    // Specify filename and path for output
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  // Declare environment for devserver
  devServer: {
    contentBase: 'public',
    port: 8888,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(css|scss)$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.webpack.js', ' ', '.js', '.jsx']
  }
};