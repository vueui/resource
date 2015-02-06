var path = require('path');

module.exports = {
	entry: path.join(__dirname, "app.js"),
	output: {
		path: __dirname,
		filename: "build.js"
	},

	module: {
		loaders: [
			{ test: /\.jade$/, loader: 'html!jade' },
			{ test: /\.css$/, loader: 'style!css' }
		]
	}
};