const { defineConfig } = require('@vue/cli-service')
const path = require('path')
module.exports = defineConfig({
  lintOnSave:false,
  transpileDependencies: true,

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.join(__dirname, "./src/styles/var.less"),
        path.join(__dirname, "./src/styles/mixin.less"),
        path.join(__dirname, "./src/styles/reset.less"),
        path.join(__dirname, "./src/styles/index.less"),
      ]
    }
  }
})
