const path = require('path');

module.exports = {
    entry: './src/main.js',
    mode: 'development',
    output: {
        filename: 'main.js',
        path: path.resolve(_dirname, 'dist'),
    },
    devServer: {
        contentBase: path.join(_dirname, 'dist'),
        compress: true,
        port: 9000,
        watchContentBase: true,
        progress: true
    },
    watch: true,
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader'
                }
            },
        ],
    },
};