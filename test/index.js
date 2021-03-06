var fs = require('fs');
var path = require('path');
var postcss = require('postcss');
var weexcss = require('../src');

var resolve = function() {
    var args = [].slice.call(arguments);
    args.unshift(__dirname);
    return path.resolve.apply(path, args);
};

fs.readFile(resolve('source.css'), function(err, css) {
    postcss([weexcss({env: 'weex'})])
        .process(css, { from: resolve('source.css'), to: resolve('target.css') })
        .then(function(result) {
            fs.writeFileSync(resolve('target.css'), result.css);
            if ( result.map ) fs.writeFileSync(resolve('target.css.map'), result.map);
        });
});