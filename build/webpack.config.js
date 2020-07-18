/*
 * @Author: your name
 * @Date: 2020-07-18 09:56:31
 * @LastEditTime: 2020-07-18 10:43:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /study-vue/build/webpack.config.js
 */ 
const HTMLWebpackPlugin = require('html-webpack-plugin')
 
module.exports = {
    entry: './src/index.ts',
    output:{
        filename: 'app.js'
    },
    resolve:{
        //将来模块导入扩展名处理
        extensions:['.js','.ts','.tsx']
    },
    devtool: 'cheap-module-eval-source-map',//可以生成source-map，而且很快
    module: {
        rules: [
            {
                test :/\.tsx?$/i, //以tsx结尾，x可有可无
                use:[{
                    loader: 'ts-loader'
                }],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        // 插件选项
        new HTMLWebpackPlugin({
            //指定宿主元素在哪里
            template: './public/index.html'
        })
    ]
}