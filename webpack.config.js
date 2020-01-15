let path = require('path');

module.exports = {
    entry: "./src/App/main.js",
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};