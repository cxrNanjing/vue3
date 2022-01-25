// const path = require('path')
module.exports = {
  // 1、是vue-cli提供的属性
  outputDir: './build',
  // 2、合并到webpack 和webapck的属性完全一致
  configureWebpack: {
    resolve: {
      alias: {
        components: '@/components'
      }
    }
  }
  // configureWebpack: (config)=> {
  //     config.resolve.alias = {
  //         '#': path.resolve(__dirname, 'src'),
  //         components: '#/components'
  //     }
  // }
  // 3、配置方式三：
  // chainWebpack: (config) => {
  //     config.resolve.alias.set('#',path.resolve(__dirname, 'src')).set('components', '#/components')
  // }
}
