module.exports = {
    //不打包map文件
    productionSourceMap: process.env.NODE_ENV === 'production' ? false : true,
    //定制主题
    css: {
        loaderOptions: {
            less: {
                modifyVars: {
                    'primary-color': '#1DA57A',
                    'border-radius-base': '2px',
                },
                javascriptEnabled: true
            }
        }
    },
    //兼容ie
    chainWebpack: config => {
        config.entry('main').add('babel-polyfill') // main是入口js文件
    },
    //兼容polyfill在ie上不兼容 Set 未定义
    //transpileDependencies:['_ant-design-vue@1.4.3@ant-design-vue','ant-design-vue'],
    lintOnSave: false
}