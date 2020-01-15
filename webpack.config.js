let path = require('path');

module.exports = {
    entry: "./src/App/main.js",
    output: {
        filename: 'editor.js',
        path: path.resolve(__dirname, 'dist')
    }
};