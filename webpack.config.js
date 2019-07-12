var path = require('path');
    module.exports = {
      mode: 'development',
      watch: true,
      entry: path.resolve(__dirname, 'client/index.js'),
      output: {
        path: path.resolve(__dirname,'public'),
        filename: 'bundle.js'
      },
      module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            use: ['babel-loader'],
            exclude: /node_modules/,
          },
          {
            test: /\.css$/,
            use: [{
              loader: 'style-loader',
            },
            {
              loader: 'css-loader',
              options: {
                modules: {
                  localIdentName: '[local]',
                },
              },
            }],
          },
          
        ]
      },
      resolve: {
        extensions: ['*','.js','.jsx']
      }
    }