const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
        { 
            test: /\.(js|jsx)$/, 
            loader: 'babel-loader', 
            exclude: /node_modules/,
            options: {
                presets: ['@babel/preset-env', '@babel/preset-react']
            } 
        },
        {
            test: /\.css$/,
            use: [ 'style-loader', 'css-loader' ]
        }
    ]
},
devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    // proxy: {
    //     '/': 'http://localhost:3000/'
    // }
           }
};