const path = require('path');

module.exports = {
  context: __dirname,
  entry: ['whatwg-fetch', './src/client/client.jsx'],
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/', // relative path for github pages
    filename: 'bundle.js', // no hash in main.js because index.html is a static page
  },
  module: {
    preLoaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'eslint-loader' },
    ],
    loaders: [
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader', query: { presets: ['react', 'es2015'] } },
      { test: /\.png$/, loader: 'url-loader?prefix=img/&limit=5000' },
      { test: /\.jpg$/, loader: 'url-loader?prefix=img/&limit=5000' },
    ],
  },
  resolve: {
    modulesDirectories: [
      'src',
      'node_modules',
    ],
    extensions: ['', '.json', '.js', '.jsx'],
  },
};
