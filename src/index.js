var postcss = require('postcss');
var convert = require('./lib/convert');

var defaultOptions = {
    env: 'weex',            // weex or vue/web whatever
    relLenUnit: 'px',       // relative length unit
    absLenUnit: 'pt',       // absolute length unit
    baseDpr: 2,             // base device pixel ratio (default: 2) !! Not used yet
    remUnit: 75,            // rem unit value (default: 75)
    remPrecision: 6,        // rem value precision (default: 6)
    checkStyle: true,       // check the styles allowed in weex
    checkLevel: 'warn'      // warn or error
};

module.exports = postcss.plugin('postcss-weex', function(opts) {
    opts = shadowCopy(defaultOptions, opts);

    return function(css) {
        css.walkRules(function(rule) {
            rule.walkDecls(convert(opts));
        });
    };
});

function shadowCopy(source, target) {
    var obj = {};

    if (source) {
        for (var i in source) {
            if (!source.hasOwnProperty(i)) continue;
            obj[i] = source[i];
        }
    }

    if (target) {
        for (var j in target) {
            if (!target.hasOwnProperty(j)) continue;
            obj[j] = target[j];
        }
    }

    return obj;
}