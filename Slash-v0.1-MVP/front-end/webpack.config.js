var path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  entry: './src/main.js',
  output: { 
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader'
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },{
        test: /\.json$/,
        loader: 'json'
      }
      
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  
}


