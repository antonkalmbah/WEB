const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
// const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');


module.exports = {
    entry: './src/new.ts', // абсолютный путь, файл начала, нужен обязательно
    mode: 'development', // режим разработчика. По-умолчанию он всегда production
    output: {
        filename: 'main.js'
    },
    devServer: {
        // contentBase: './dist',   // при включеннии именно этой строки, происходит ошибка
        port: 3030,  // указываем в ручную номер порта
        open: true,  // автоматически открывается страничку в браузере
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.pug',
            filename: 'index.html',
            title: 'Development',
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
            },
            {
                test: /\.ts$/,
                use: 'ts-loader'
            }
        ]
    },
};