var web = require('./convert.web');
var weex = require('./convert.weex');

module.exports = function(opts) {
    if (opts.env === 'weex') {
        return weex(opts);
    } else {
        return web(opts);
    }
};