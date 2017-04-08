const CopyPlugin = require('copy-webpack-plugin')
const HtmlPlugin = require('html-webpack-plugin')

module.exports = {
  entry: [
    './src/index.jsx'
  ],
  output: {
    path: __dirname + '/dist/',
    publicPath: '',
    filename: 'bundle.js'
  },
  module: {
    rules: [
        {
            test: /\.js?x$/,
            exclude: /(node_modules)/,
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: ['react', ['env', {modules: false}]],
                    plugins: [
                        'syntax-dynamic-import',
                        'transform-class-properties'
                    ]
                }
            }]
        },
        {
            test: /\.scss/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        },
        {
            test: /\.(png|jpeg|jpg|svg|ico)/,
            use: ['file-loader']
        }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: __dirname + '/dist/'
    },
  plugins: [
      new CopyPlugin([
          {from: __dirname + '/src/favicon.ico'}
      ]),
      new HtmlPlugin({
          template: __dirname + '/src/index.html'
      })
  ]
};
