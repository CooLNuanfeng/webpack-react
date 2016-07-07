var ExtractTextPlugin = require("extract-text-webpack-plugin"); // 将css单独打包
module.exports = {
    entry : './source/js/main.js',
    output : {
        path : './build/',
        filename : 'main.js',
        publicPath : '/assets/'  // 配置 输出的文件路径 网站运行时的路径 与 index.html 中的 http://localhost:8080/assets/对应
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
        new ExtractTextPlugin("styles.css")
    ]
}
