
// webpack配置
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}

//跨域api
const VUE_APP_BASE_API = process.env.VUE_APP_BASE_API;

module.exports = {
    // publicPath: '/',
    // outputDir: 'dist',
    // assertsDir: 'static',
    lintOnSave: false,
    runtimeCompiler: false,
    // indexPath: 'index.html',
    devServer: {
        host: "0.0.0.0",
        port: 4451, // 端口号
        https: false, // https:{type:Boolean}
        hotOnly: false,  //热部署
        open: true, //配置自动启动浏览器  
        proxy: {
            //设置代理
            '/api': {
                // target: `${VUE_APP_BASE_API}`,
                target: 'http://localhost:8088',
                changeOrigin: true,
                ws: true,
                // secure: false, //如果是http接口，需要配置该参数
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },


    // css: {
    //     //是否使用css分离插件ExtractTextPlugin
    //     extract: true,

    // },

    // 是一个函数，会接收一个基于 webpack-chain 的 ChainableConfig 实例。允许对内部的 
    // webpack 配置进行更细粒度的修改。
    chainWebpack: config => {
        // 添加别名
        config.resolve.alias
            .set("@", resolve("src"))
            .set("assets", resolve("src/assets"))
            .set("components", resolve("src/components"))
            .set("utils", resolve("src/utils"))
            .set("api", resolve("src/api"));
    },


}