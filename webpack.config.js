var path = require('path');

module.exports = {
  entry: ['./app.js'],
  output: {
    filename: './app.bundle.js',
    path: path.join(__dirname, '/')
  },

  devServer: {
    inline: true,
    port: 3000,
    contentBase: path.join(__dirname, '/')
  },

  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style', 'css']
      },
      {
        test: /\.json$/,
        loaders: ['json']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel"
      }
    ]
  }
}
