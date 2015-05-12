/**
 * main lib of lark
 */
var Application = require('./lib/application')

/**
 * lark interfaces
 */
var promisify = require('./lib/promisify');

Application.promisify = promisify.promisify;
Application.promisifyAll = promisify.promisifyAll;
Application.http = promisify.http;
Application.mvc = require('lark-mvc');
Application.router = require('lark-router');
Application.logging = require('lark-log');

module.exports = Application;
