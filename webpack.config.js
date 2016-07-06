var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    entry : ['webpack/hot/dev-server',
      'webpack-dev-server/client?http://localhost:8080','./source/js/main.js'],
    output : {
        path : './build/',
        filename : 'main.js',
        //publicPath : './build/'  // 配置 scss 中 通过 url-loader 输出的文件路径
    },
    module : {
        loaders : [
            {test: /\.js$/, loader: 'jsx-loader?harmony' },
            {test: /\.css$/,loader: 'style!css'},
            {test: /\.scss$/,loader: ExtractTextPlugin.extract('style', 'css!sass')},
            {test: /\.(png|jpg)$/,loader: 'url-loader?limit=100000'}
        ]
    },
    resolve: {
        extensions: ['', '.js','.jsx', '.json', '.scss','.css']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin("styles.css")
    ]
}
