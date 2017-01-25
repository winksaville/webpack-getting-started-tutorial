var path = require('path');
var prjPath = path.resolve();
var srcPath = path.resolve("src");
var libPath = path.resolve("lib");
var modulePath = path.resolve("node_modules");

module.exports = {
  entry: path.join(srcPath, "entry.js"),
  output: {
    path: path.join(prjPath, "dist"),
    filename: "bundle.js"
  },
  resolve: {
    modules: [
      srcPath, libPath, modulePath
    ],
    extensions: [
      ".js", ".json"
    ]
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" }
    ]
  }
};
