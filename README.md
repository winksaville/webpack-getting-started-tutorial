#  [Webpack getting started tutorial](https://webpack.github.io/docs/tutorials/getting-started/)

package.json:
```
{
  "name": "webpack-getting-started-tutorial",
  "version": "0.1.0",
  "description": "Webpack getting stated tutorial",
  "author": "Wink Saville",
  "license": "Unlicense",
  "repository": {
    "type": "git",
    "url": "https://github.com/winksaville/webpack-getting-started-tutorial"
  },
  "devDependencies": {
    "css-loader": "^3.0.0",
    "style-loader": "^0.23.1",
    "webpack": "^4.35.0",
    "webpack-dev-server": "^3.7.0"
  },
  "dependencies": {},
  "scripts": {
    "client": "google-chrome-stable http://localhost:8080/index.html",
    "server": "npm run build ; webpack-dev-server --config config/webpack.config.js --hot --inline",
    "build": "webpack --config ./config/webpack.config.js"
  },
  "standard": {
    "globals": []
  }
}
```

# Prerequistes
```
node.js
npm
google-chrome-stable
```

Building from the command line:
```
git clone https://github.com/winksaville/webpack-getting-started-tutorial
cd webpack-getting-started-tutorial
npm install
npm run build
google-chrome-stable ./index.html
```

To use webpack-dev-server execute it in a new terminal window:
```
npm run server
```

And then in a different window run:
```
npm run client
```

You can now edit content.js and when saving it the
browser window will be update automatically.
