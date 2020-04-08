    var path = require('path');

    module.exports = {
    entry: './dev/js/index.js',
    resolve: {
    extensions: ['.webpack.js', '.web.js', '.ts', '.js']
    },
    module: {
    rules: [
    { test: /\.js$|jsx/, loader: 'ts-loader' }
    ]
    },
    output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
    }
};