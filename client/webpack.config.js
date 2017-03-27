const webpack = require('webpack');
const path = require('path');
process.noDeprecation = true;

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                include: [
                    path.resolve(__dirname, 'src')
                ],
                loader: 'babel-loader',
                options: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.html$/,
                use: [
                    'htmllint-loader',
                    {
                        loader: 'html-loader'
                    }
                ]
            },
            {
                test: /\.css$/,
                include: [
                    path.resolve(__dirname, 'node_modules')
                ],
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/,
                loader: 'file-loader'
            }
        ]
    },
    devServer: {
        proxy: {
            '/user': 'http://localhost:3000',
            '/test': 'http://localhost:3000'
        },
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        historyApiFallback: true,
        host: true, 
        https: false,
        noInfo: true,
        port: 9000,
        host: '0.0.0.0'
    },
    plugins: [

    ]
};