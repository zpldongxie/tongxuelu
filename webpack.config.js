/*
 * @Description: webpack.config
 * @Author: zpl
 * @Date: 2019-09-18 21:45:22
 * @LastEditTime: 2019-09-26 12:10:50
 * @LastEditors: zpl
 */
const path = require('path');
const webpack = require('webpack')
const HtmlWebPackPlugin = require('html-webpack-plugin');

// 全局路径
const dirs = {
    src: path.join(__dirname, './src'),
    imgDir: path.join(__dirname, './src/images'),
    docDir: path.join(__dirname, './src/doc')
};

const htmlPlugin = new HtmlWebPackPlugin({
    template: './index.html',
    filename: path.resolve(__dirname, 'dist/index.html')
});

// 开发虚拟服务器，支持热更新
const devServer = {
    hot: true, // 热替换
    contentBase: path.join(__dirname, 'dist'), // server文件的根目录
    compress: true, // 开启gzip
    host: 'localhost',
    port: 8080, // 端口
    publicPath: '/',
    historyApiFallback: true
};
// HMR允许在运行时更新各种模块，而无需进行完全刷新
const hotModulePlugin = new webpack.HotModuleReplacementPlugin();

module.exports = {
    entry: './app.js', // 入口文件
    output: {
        path: path.resolve(__dirname, 'dist'), // 定义输出目录
        filename: 'tong-xue-lu.bundle.js', // 定义输出文件名称
        publicPath: './'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js|jsx$/, // 匹配.js文件
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.png|jpeg|jpg|mp3$/,
                use: ['file-loader']
            }
        ]
    },
    devServer: devServer,
    plugins: [
        hotModulePlugin,
        htmlPlugin
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.json'], // 表示，这几个文件的后缀名，可以省略不写
        alias: {
            '@': dirs.src,
            'Image': dirs.imgDir,
            'Doc': dirs.docDir
        }
    }
};