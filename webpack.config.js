var webpack = require('webpack');

module.exports = {
    context: __dirname,
    entry: {
        app: './src/_module.js'
    },
    output: {
        path: __dirname + '/dist',
        filename: 'media-events.js'
    },
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
    }
};
