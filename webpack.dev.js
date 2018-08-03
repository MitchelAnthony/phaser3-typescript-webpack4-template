const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    devtool: 'inline-source-map',
	mode: 'development',
	devServer: {
		contentBase: './dist',
		historyApiFallback: {
			index: '/'
		}
	},
    module: {
		rules: [{
			test: /\.css$/,
			use: [
				'style-loader',
				'css-loader'
			]
		},
		{
			test: /\.scss$/,
			use: [
				'style-loader',
				"css-loader",
				"sass-loader"
			]
        }]
    }
})
