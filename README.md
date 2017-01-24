#  [Webpack getting started tutorial](https://webpack.github.io/docs/tutorials/getting-started/)

Initial package.json:
```
{
  "name": "webpack-getting-started-tutorial",
  "version": "0.1.0",
  "description": "Webpack getting stated tutorial",
  "author": "Wink Saville",
  "license": "Unlicense",
  "devDependencies": {},
  "dependencies": {},
  "scripts": {
    "test": "echo \"Error: no test script\" && exit 1",
    "start": "echo \"Error: no start script\" && exit 1",
    "build": "echo \"Error: no build script\" && exit 1"
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
webpack 2
```

Building from the command line:
```
git clone https://github.com/winksaville/webpack-getting-started-tutorial
cd webpack-getting-started-tutorial
npm install
webpack
chromium ./index.html
```
