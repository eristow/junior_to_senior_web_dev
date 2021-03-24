const path = require('path');

module.exports = {
  // entry point of the code
  entry: ['./src/index.js'],
  output: {
    // where webpack should output bundled code
    path: path.join(__dirname, '/dist'),
    // path relative to index.html
    publicPath: '/',
    // name for bundled js file
    filename: 'bundle.js',
  },
  devServer: {
    // tells dev-server where to serve content from
    contentBase: './dist',
  },
  module: {
    // any .js or .jsx files, run babel-loader on it
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['eslint-loader'],
      },
    ],
  },
  // assume file imports at top of .js files are .js or .jsx by default
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
