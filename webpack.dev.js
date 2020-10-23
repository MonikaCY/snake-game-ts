const {
    merge
} = require('webpack-merge')
const commonConfig = require('./webpack.common.js')

let configs = merge(commonConfig, {
    devServer: {
        contentBase: './dist'
    },
    mode: 'development'
})

module.exports = configs