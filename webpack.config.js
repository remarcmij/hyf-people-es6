'use strict'
const path = require('path');

module.exports = {
    entry: [
        'babel-polyfill',
        './app/app.module.js'
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    presets: [
                        'babel-preset-es2015',
                        'babel-preset-stage-0'
                    ].map(require.resolve),
                    plugins: ['transform-runtime']
                },
            },
            {
                test: /\.html$/,
                loader: 'raw'
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