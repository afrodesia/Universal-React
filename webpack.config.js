const webpack = require('webpack')

const browserConfig = {
  entry: "./src/browser/index.js",
  output:{
    path: __dirname,
    filename: "./public/bundle.js"
  },
  devtool: "cheap-module-source-map",
  module:{
    rules:[]
  }
}

const serverConfig = {
  entry: "./src/server/index.js",
  target: "node",
  output: {
    path: __dirname,
    filename: "server.js",
    libraryTarget: "commonjs2"
  },
  devtool: "cheap-module-source-map",
  module: {
    rules:[]
  }
}

module.exports = [browserConfig, serverConfig]