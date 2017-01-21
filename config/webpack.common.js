const webpack = require("webpack")
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")
const autoprefixer = require("autoprefixer")
const path = require("path")
const paths = require("./paths")

module.exports = {
  output: {
    publicPath: "/",
    path: paths.appBuild,
    filename: "[name]-[hash:8].bundle.js",
    chunkFilename: "[id]-[hash:8].chunk.js",
  },
  plugins: [
    new ExtractTextPlugin(
      "[name].css"
    ),
    new CopyWebpackPlugin([
      {
        from: paths.appPublic,
        to: paths.appBuild,
      },
    ]),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      "process.env.PORT": JSON.stringify(process.env.PORT),
      "process.env.DEBUG": JSON.stringify(process.env.DEBUG),
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
    }),
  ],
  resolve: {
    root: path.resolve(__dirname),
    extensions: [
      "",
      ".js",
      ".scss",
      ".json",
    ],
    alias: {
      "babel-runtime/regenerator": require.resolve("babel-runtime/regenerator"),
    },
  },
  resolveLoader: {
    root: paths.ownNodeModules,
    moduleTemplates: [
      "*-loader",
    ],
  },
  postcss: [
    autoprefixer({
      browsers: [
        "last 2 versions",
      ],
    }),
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: [
          "babel",
        ],
        exclude: /node_modules/,
        include: paths.appSrc,
      },
      {
        test: /\.json$/,
        include: [
          paths.appSrc,
          paths.appNodeModules,
        ],
        loader: "json",
      },
      {
        test: /\.(png)(\?.*)?$/,
        include: [
          paths.appSrc,
          paths.appPublic,
          paths.appNodeModules,
        ],
        loader: "file",
        query: {
          name: "[name].[ext]",
        },
      },
    ],
  },
}
