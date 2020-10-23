const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");

module.exports = {
	entry: {
		main: path.resolve(__dirname, "./src/index.js"),
	},
	output: {
		path: path.resolve(__dirname, "./dist"),
		filename: "[name].bundle.js",
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ["babel-loader"],
			},
			{
				test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
				type: "asset/resource",
			},
			{
				test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
				type: "asset/inline",
			},
			{
				test: /\.(scss|css)$/,
				use: [
					"style-loader",
					"css-loader",
					"postcss-loader",
					"sass-loader",
				],
			},
		],
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			title: "React Modern Tooling",
			filename: "index.html",
			template: path.resolve(__dirname, "./src/template.html"),
		}),
		// Only update what has changed on hot reload
		new webpack.HotModuleReplacementPlugin(),
	],
	mode: "development",
	devServer: {
		historyApiFallback: true,
		contentBase: path.resolve(__dirname, "./dist"),
		open: true,
		compress: true,
		hot: true,
		port: 8080,
	},
};
