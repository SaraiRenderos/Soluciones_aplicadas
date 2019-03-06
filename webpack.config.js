const path = require('path');
module.exports = {
    entry: path.resolve(__dirname,'index.js'),
    output: {
    	path: path.resolve(__dirname,'js'),
        filename: 'bundle.js'
    },
     module: {
    rules: [
       {
        test: /\.css$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'postcss-loader'
        ]
      }
     
    ]
  }
}