const {
    resolve
} = require("path")
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

let configs = {
    entry: {
        app: './src/app.ts'
    },
    output: {
        filename: '[name].bundle.js',
        path: resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader'
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin({
            path: 'dist'
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            title: 'sname game'
        })
    ],
}

module.exports = configs