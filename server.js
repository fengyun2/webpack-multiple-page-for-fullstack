/*
* @Author: baby
* @Date:   2016-05-06 21:58:36
* @Last Modified by:   baby
* @Last Modified time: 2016-05-06 22:03:28
*/

'use strict';

var fs = require('fs');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

var serverPort = 54999,
    devPort = 8082;

var exec = require('child_process').exec;
/*var cmdStr = 'PORT=' + serverPort + ' supervisor ./bin/www';
exec(cmdStr);*/


for (var i in config.entry) {
    config.entry[i].unshift('webpack-dev-server/client?http://localhost:' + devPort, "webpack/hot/dev-server")
}
config.plugins.push(new webpack.HotModuleReplacementPlugin());


var proxy = {
    "*": "http://localhost:" + serverPort
};
//启动服务
var app = new WebpackDevServer(webpack(config), {
    publicPath: '/dist/',
    hot: true,
    proxy: proxy
});
app.listen(devPort, function() {
    console.log('dev server on http://0.0.0.0:' + devPort+'\n');
});
