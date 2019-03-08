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
      },
        {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              fallback: 'responsive-loader'
            }
          }
        ]
      }
     
    ]
  }
}