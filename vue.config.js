const vuxLoader = require('vux-loader')
module.exports = {
    // 基本路径
    //  baseUrl: process.env.NODE_ENV === 'production'
    // ? '/langya/'
    // : '/langya/',
    // vux 相关配置,使用vux-ui
    configureWebpack: config => {
        vuxLoader.merge(config, {
            options: {},
            plugins: ['vux-ui']
        })
    },
    devServer: {
        port: 8081,
        disableHostCheck: true, // 加这个就没事啦。
    },
    css: undefined,
    lintOnSave: false,
    outputDir: undefined,
    assetsDir: undefined,
    runtimeCompiler: true, //包含运行时编译器的 Vue 构建版本
    productionSourceMap: false,
    parallel: undefined
}