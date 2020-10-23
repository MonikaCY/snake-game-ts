const merge = require('webpack-merge')
const commonConfig = require('./webpack.common.js')

let config = merge(commonConfig, {

})

module.exports = config