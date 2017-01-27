var path = require('path');
var prjPath = path.resolve();
var srcPath = path.resolve("src");
var libPath = path.resolve("lib");
var distPath = prjPath;
var modulePath = "node_modules";


module.exports = {
  entry: path.join(srcPath, "entry.js"),
  output: {
    path: distPath,
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
