const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: [
        path.resolve(__dirname, 'src/main.js'),
        path.resolve(__dirname, 'dist/index.html')
    ],
    devtool: 'inline-source-map',
    mode: 'development',
    module: {
        rules: [
            {
                test: /.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                },
                exclude: /(node_modules|bower_components)/
            },
            {
                test: /.(html|css)$/i,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]'
                }
            }
        ]
    },
    resolve: {
        modules: [
            path.resolve('./node_modules'),
            
          ],
          extensions: ['.js', '.jsx'],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        sourceMapFilename: 'bundle.map'
    },
    node: {
        fs: 'empty',
    },
    plugins: [
        new webpack.IgnorePlugin({resourceRegExp: new RegExp("secret.js")}),
        new webpack.IgnorePlugin({resourceRegExp: new RegExp("keys.js")}),
    ],
};
