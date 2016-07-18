'use strict';

var path    = require('path');
var webpack = require('webpack');

module.exports = {
    context: process.cwd(),
    entry: {
        app: './src/_module.js'
    },
    output: {
        libraryTarget: 'umd',
        path: path.join(process.cwd(), '/dist'),
        filename: 'media-events.js'
    },
    plugins: [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurrenceOrderPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel', // 'babel-loader' is also a legal name to reference
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    devtool: 'source-map'
};
