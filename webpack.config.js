const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')

process.env.NODE_ENV = 'development'

module.exports = {
  mode: 'development',
  target: 'web',
  entry: './src/main.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'js/bundle.js',
    publicPath: '/' //output, devServer的pubicPath 必须一样
  },
  resolve: {
    extensions: ['*','.js','.json','.vue','.scss'],
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  stats:{
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3001/',
        // target: 'http://119.45.62.78:3001/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        },
        secure: false
      },
    },
    hot: true,
    port: 8080,
    historyApiFallback: true,  // spa必须加
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.scss$/,
        include: path.resolve(__dirname, 'src/styles/variables'),
        use: [
          { loader: MiniCssExtractPlugin.loader},
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: '[local]__[hash:base64:5]'
              }
            }
          },
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.scss$/,
        exclude: path.resolve(__dirname, 'src/styles/variables'),
        use: [
          { loader: MiniCssExtractPlugin.loader},
          "css-loader",
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader},
          'css-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        loader: 'url-loader',
        options: {
          limit: 8 * 1024,
          esModule: false,
          name: 'img/[name].[hash:10].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/, // 字体
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10240,
              fallback: {
                loader: 'file-loader',
                options: {
                  name: 'fonts/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      {
        test: /\.svg$/,
        include: path.resolve(__dirname, 'src/icons'),
        loader: 'svg-sprite-loader',
        options: {
          symbolId: 'icon-[name]'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devtool: 'eval-source-map'
}
