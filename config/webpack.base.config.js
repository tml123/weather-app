const CopyWebpackPlugin = require('copy-webpack-plugin'); 

const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const fs = require('fs');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const path = require('path');

let templates = [];
let dir = 'src/templates';
let files = fs.readdirSync(dir);

const APP_DIR = path.resolve(__dirname, '../src');

module.exports = env => {
    const { PLATFORM, VERSION } = env;
    return merge([ {
        entry: ['@babel/polyfill', APP_DIR],
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader'
                    }
                },
                {
                    test: /\.css$/,
                    use: [
                        PLATFORM === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
                        'css-loader'
                    ]
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/index.html',
                filename: './index.html'
            }),
            new webpack.DefinePlugin({
                'process.env.VERSION': JSON.stringify(env.VERSION),
                'process.env.PLATFORM': JSON.stringify(env.PLATFORM),
                'process.env.WEATHER_API_KEY': JSON.stringify(env.WEATHER_API_KEY)
            }),
            new CopyWebpackPlugin([ { from: 'src/static' } ])
        ]
        }
    ])
}