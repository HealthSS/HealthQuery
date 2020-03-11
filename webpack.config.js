const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
        { 
            test: /\.jsx?$/, 
            loader: 'babel-loader', 
            exclude: /node_modules/ 
        },
        {
            test: /\.css$/,
            use: [ 'style-loader', 'css-loader' ]
        }
    ]
},
devServer: {
    contentBase: path.resolve(__dirname, "dist")
           }
};