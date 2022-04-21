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
    devServer: {
        // contentBase: './dist',   // при включеннии именно этой строки, происходит ошибка
        port: 3030,  // указываем в ручную номер порта
        open: true,  // автоматически открывается страничку в браузере
        hot: true
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
            },
            {
                'body-leading-blank': [2, 'always'],
                'footer-leading-blank': [2, 'always'],
                'header-max-length': [2, 'always', 72],
                'scope-case': [2, 'always', 'lower-case'],
                'subject-empty': [2, 'never'],
                'subject-full-stop': [2, 'never', '.'],
                'type-case': [2, 'always', 'lower-case'],
                'type-empty': [2, 'never'],
                'type-enum': [
                    2,
                    'always',
                    [
                        'feat',
                        'fix',
                    ],
                ],
            },
        ]
    },
};