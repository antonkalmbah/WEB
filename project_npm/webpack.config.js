const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
// const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');


module.exports = {
    entry: './src/index.js', // абсолютный путь, файл начала, нужен обязательно
    mode: 'development', // режим разработчика. По-умолчанию он всегда production
    output: {
        filename: 'main.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.pug',
            filename: 'index.html',
        }),
        new MiniCssExtractPlugin(),
        new TerserWebpackPlugin(),
        // new OptimizeCssAssetsWebpackPlugin(),
    ],
    // optimization:{
    //     minimize:true,
    //     minimizer: [new TerserWebpackPlugin(), new OptimizeCssAssetsWebpackPlugin()]
    // },
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