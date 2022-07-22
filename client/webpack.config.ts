import * as path from 'path';
import * as webpack from 'webpack';
import HTMLWebpackPlugin from 'html-webpack-plugin';

const config: webpack.Configuration = {
	output: {
		path: path.join(__dirname, '/build'), // the bundle output path
		filename: 'bundle.js', // the name of the bundle
	},
	entry: ['./src/index.tsx'],
	resolve: {
		extensions: ['.js', '.ts', '.jsx', '.tsx', '.css', '.png', '.svg', '.ttf'],
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					{ loader: 'style-loader' },
					{ loader: 'css-loader' },
					{ loader: 'postcss-loader' },
				],
			},
			{
				test: /\.tsx?$/,
				exclude: /(node_modules|\.webpack)/,
				use: {
					loader: 'ts-loader',
					options: {
						transpileOnly: true,
					},
				},
			},
			{
				test: /\.(png|ttf|svg)$/, // to import images and fonts
				loader: 'url-loader',
				options: { limit: false },
			},
		],
	},
	plugins: [
		new HTMLWebpackPlugin({
			template: 'public/index.html', // to import index.html file inside index.js
		}),
	],
};

export default config;
