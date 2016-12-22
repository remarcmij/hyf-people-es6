'use strict'
const path = require('path');

module.exports = {
    entry: [
        'babel-polyfill',
        './app/app.module.js'
    ],
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                include: __dirname + '/app',
                query: {
                    plugins: ['transform-runtime']
                }
            },
            {
                test: /\.html$/,
                loader: 'html'
            },
            {
                test: /\.css$/,
                loaders: ['style', 'css']
            }
        ]
    },
    devServer: {
        port: 8080,
        contentBase: __dirname,
        inline: true
    },
    debug: true
};