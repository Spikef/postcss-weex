var isLength = require('./is-length');
var isFontWeight = require('./is-font-weight');

module.exports = function(str) {
    return !isFontWeight(str) && isLength(str);
};