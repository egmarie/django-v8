const path = require('path')
const currentTask = process.env.npm_lifecycle_event
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const { WebpackManifestPlugin } = require("webpack-manifest-plugin")

const config = {
   entry: './src/index.js',
   output: {
       filename: 'bundle.[hash].js',
       path: path.join(__dirname, 'public'), 
   },
   plugins: [new HtmlWebpackPlugin({template: './src/index.html'})],
   mode: 'development',
   devServer: {
    port: 3000,
    static: path.join(__dirname, 'public'),
    hot: true,
   },
   module: {
    rules: [
        {
            test: /\.scss$/,
            use: ["style-loader", "css-loader", "sass-loader"]
          },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        enforce: "pre",
        use: [
          {
          loader: 'babel-loader', 
          options: {
            presets: [["@babel/preset-env", { "useBuiltIns": "usage", "corejs": 3, "targets": "defaults" }], "@babel/preset-react"]
          }
          },
          {
            loader: 'source-map-loader', 
            options: {
              filterSourceMappingUrl: (url, resourcePath) => {
                if (/broker-source-map-url\.js$/i.test(url)) {
                  return false;
                }

                if (/keep-source-mapping-url\.js$/i.test(resourcePath)) {
                  return "skip";
                }

                return true;
              },
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ]
  },
}
if (currentTask == "build") {
    config.mode = "production"
    config.module.rules[0].use[0] = _loader
    config.plugins.push(new MiniCssExtractPlugin({ filename: "main.[hash].css" }), new CleanWebpackPlugin(), new WebpackManifestPlugin())
  }

module.exports = config