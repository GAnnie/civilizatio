/**
 * Created by tdzl2_000 on 2015-09-26.
 */

//	http://webpack.github.io/
var webpack = require('webpack');
var path = require('path');

var argv = require('minimist')(process.argv.slice(2));
var DEBUG = !argv['release'];

var GLOBALS = {
    'process.env.NODE_ENV': JSON.stringify(DEBUG?'development':'production'),
    '__DEV__': DEBUG,
}

var ExtractTextPlugin = require("extract-text-webpack-plugin");

var config = {
    entry: path.join(__dirname, 'src/app.js'),
    output: {
        filename: 'app.js',
        path: path.join(__dirname, DEBUG? 'build-debug/':'build-release/'),
        sourcePrefix: '   '
    },
    plugins: ([
        new webpack.DefinePlugin(GLOBALS),
        new ExtractTextPlugin('styles.css')
    ].concat(DEBUG? []: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.optimize.DedupePlugin(),
    ])),
    cache: DEBUG,
    debug: DEBUG,
    devtool: DEBUG?'#inline-source-map':false,

    resolveLoader: {
        root: path.join(__dirname, 'node_modules'),
        extensions: ['', '.loader.js', '.js', '.jsx']
    },

    module: {
        loaders: [
            {
                test: /(\.eot)|(\.woff2?)|(\.tff)$/,
                loader: 'file-loader'
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader')
            },
            {
                test: /\.gif/,
                loader: 'url-loader?limit=10000&mimetype=image/gif'
            },
            {
                test: /\.jpg/,
                loader: 'url-loader?limit=10000&mimetype=image/jpg'
            },
            {
                test: /\.png/,
                loader: 'url-loader?limit=10000&mimetype=image/png'
            },
            {
                test: /\.svg/,
                loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
            },
            {
                test: /\.jsx?$/,
                exclude: 'node_modules',
                loader: 'babel-loader'
            }
        ]
    }
}

module.exports = config;