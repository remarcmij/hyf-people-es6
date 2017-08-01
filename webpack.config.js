'use strict'
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry: [
        'babel-polyfill',
        './app/app.js'
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: __dirname + '/app',
                query: {
                    plugins: ['transform-runtime']
                }
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    loader: 'css-loader'
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('style.css')
    ]
    // devServer: {
    //     port: 8080,
    //     contentBase: __dirname,
    //     inline: true
    // }
}