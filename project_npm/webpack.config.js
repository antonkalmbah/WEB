const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js', // абсолютный путь, файл начала, нужен обязательно
    output: {
        filename: 'main.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.pug',
            filename: 'index.html',
        }),
        new MiniCssExtractPlugin(),
    ],
    module: {
        rules: [
            {
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    // option: {
                    //     esModule: true,
                    // },
                }, 'css-loader'],
                test: /\.css&/
            },
            {
                test: /\.pug$/,
                loader: 'pug-loader',
                // option: {
                //     pretty: true
                // }
            }
        ]
    },
};