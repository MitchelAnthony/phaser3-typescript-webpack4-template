const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = merge(common, {
	devtool: 'source-map',
	mode: 'production',
	optimization: {
		splitChunks: {
			chunks: 'all'
		},
		minimizer: [
			new UglifyJSPlugin({
				sourceMap: true
			}),
			new OptimizeCSSAssetsPlugin({})
		]
	},
    module: {
		rules: [{
			test: /\.css$/,
			use: [
				MiniCssExtractPlugin.loader,
				'css-loader'
			]
		},
		{
			test: /\.scss$/,
			use: [
				MiniCssExtractPlugin.loader,
				"css-loader",
				"sass-loader"
			]
        }]
    },
    plugins: [
		new MiniCssExtractPlugin({
			filename: "[name].css",
			chunkFilename: "[id].css"
		})
    ]
})
