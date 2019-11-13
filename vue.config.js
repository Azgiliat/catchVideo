const path = require('path');

module.exports = {
  publicPath: './',
  outputDir: path.resolve(__dirname, 'docs'),
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "./src/assets/scss/style.scss";`
      },
    }
  },
};
