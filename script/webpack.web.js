var path = require("path");
var webpack = require("webpack");

var WebpackDevServer = require("webpack-dev-server");
var HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin, default: loader } = require('vue-loader');


var config = {
  mode:"development",
  entry: [
    './site/index.js'
  ],
  resolve: {
    alias: {
      '@': path.resolve(process.cwd() , './site')
    },
    fallback: {
      path: require.resolve('path-browserify')
    },
    extensions: ['.ts', '.tsx', '.js', '.vue', '.json']
  },
  output: {
    // path: path.resolve(process.cwd() , './dist'),
    path: path.join(__dirname, "dist"),
    filename: 'index.js',
    publicPath: '/',
    environment: {
      arrowFunction: false
    }
  },
  module: {
    rules: [
      {
        test: /\.(jsx?)$/,
        loader: 'babel-loader',
        options: {
          plugins: [
            "@vue/babel-plugin-jsx"
          ]
        }
      },
      {
        test: /\.(tsx?)$/,
        loader: 'babel-loader',
        options:{
          presets: [
            [
              "@babel/preset-typescript",
              {
                allExtensions: true,
                isTSX: true
              }
            ]
          ],
          plugins: [
            "@vue/babel-plugin-jsx"
          ]
        }
      },
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
      {
        test: /\.md$/,
        use: [
          {
            loader: 'vue-loader',
            options: {
              compilerOptions: {
                preserveWhitespace: false,
              },
            },
          },
          {
            loader: path.resolve(__dirname, '../site/md-loader/index.js'),
          },
        ],
      },
      {
        test: /\.(scss|css)$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              url: false,
              // modules: {
              //   mode: "local",
              // }
              // modules: {
              //   localIdentName: '[name]__[local]--[hash:base64:5]',
              //   // exportGlobals: true
              // }
              // https://blog.csdn.net/weixin_41819731/article/details/118161507
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.(svg|otf|ttf|woff2?|eot|gif|png|jpe?g)(\?\S*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 30,
              name: path.posix.join("static", 'img/[name].[ext]'),
              esModule: false
            }
          },
          // {
          //   loader: 'file-loader',
          //   options: {
          //     limit: 10,
          //     name: path.posix.join("static", 'img/[name].[hash:7].[ext]'),
          //     esModule: false
          //   }
          // },
        ]
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html',
      favicon: './public/lixi-logo.png'
    }),
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      "process.env": { VUE_APP_BASE_API: `'http://localhost:8080'` }
    }),
  ]
}

var server = new WebpackDevServer(webpack(config),{
  contentBase: path.resolve(process.cwd() , './public'),
  proxy: {
    // detail: https://cli.vuejs.org/config/#devserver-proxy
    '/dev-api': {
      target: `http://121.5.123.5:8080`,
      changeOrigin: true,
      pathRewrite: {
        '^/dev-api': ''
      }
    }
  },
});

server.listen("8023",'0.0.0.0',(err)=>{
  if(!err){
    console.log('http://localhost:8023')
  } else {
    console.log('err', err);
  }
})