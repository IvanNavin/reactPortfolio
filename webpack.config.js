const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

const NODE_ENV = process.env.NODE_ENV;

const babelOptions = preset => {
  const opts = {
    presets: [
      '@babel/preset-env'
    ],
    plugins: [
      '@babel/plugin-proposal-class-properties'
    ]
  }

  return opts
}


const jsLoaders = () => {
  const loaders = [{
    loader: 'babel-loader',
    options: babelOptions()
  }]

  return loaders
}

module.exports = {
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },
    mode: NODE_ENV || 'development',
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [/node_modules/, path.resolve(__dirname, 'src/server.js')],
                use: jsLoaders(),
              },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
              test: /\.svg$/,
              use: ['@svgr/webpack', 'url-loader'],
            },
            {
              test: /\.(png|jpe?g|gif|jp2|webp)$/,
              use: ['url-loader'],
            }, 
            {
              test: /\.mp4$/,
              use: 'file-loader?name=videos/[name].[ext]',
            },
            {
              test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
              use: [
                {
                  loader: 'file-loader',
                  options: {
                    name: '[name].[ext]',
                    outputPath: 'fonts/',
                  },
                },
              ],
            },
        ],
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, 'public/index.html')
        }),

    ],
    devServer: {
        port: 3080,
        open: true,
        hot: true,
        historyApiFallback: true,
    },
    devtool: 'source-map',
}