const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: {
		logic: './src/js/index.ts'
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [{
			test: /\.(png|svg|jpg|gif)$/,
			use: [
				'file-loader'
			]
		},
		{
			test: /\.ts$/,
			use: [
				'ts-loader'
			]
		}]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			inject: 'body'
		}),
		new CleanWebpackPlugin(['dist']),
		new CopyWebpackPlugin([
			{
				from: path.resolve(__dirname, 'src/images'),
				to: path.resolve(__dirname, 'dist/images')
			}
		])
	]
};
