const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PLUGINS = [
	new HtmlWebpackPlugin({
		template: path.resolve(__dirname, 'src', 'index.html')
	})
];

const LOADERS = [
	{
		test: /\.js$/,
		exclude: /node_modules/,
		use: ['babel-loader']
	},
	{
		test: /\.css$/,
		use: ['style-loader', 'css-loader']
	}
];

module.exports = {
	entry: {
		index: path.resolve(__dirname, 'src', 'index.js')
	},
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: "main.js"
	},
	mode: 'development',
	plugins: PLUGINS,
	module: {
		rules: LOADERS
	},
	devServer: {
		historyApiFallback: true,
		contentBase: '/',
		port: 3000,
		open: true,
		hot: true
	}
};
