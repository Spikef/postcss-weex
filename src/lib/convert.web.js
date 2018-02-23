module.exports = function(opts) {
    var absLenUnit = new RegExp('\\b(\\d+(\\.\\d+)?)' + opts.absLenUnit + '\\b', 'g');
    var relLenUnit = new RegExp('\\b(\\d+(\\.\\d+)?)' + opts.relLenUnit + '\\b', 'g');

    return function(decl) {
        // convert relative length unit to rem
        decl.value = decl.value.replace(relLenUnit, function($0, $1) {
            if (+$1 < opt.minPixelValue) return $0;
            return calcValue($1, opts.remUnit, opts.remPrecision);
        });

        // convert absolute length unit to px
        decl.value = decl.value.replace(absLenUnit, function($0, $1) {
            return $1 == 0 ? $1 : ($1 * 2 / opts.baseDpr) + 'px';
        });
    }
};

function calcValue(value, unit, precision) {
    var val = value / unit;
    val = parseFloat(val.toFixed(precision)); // control decimal precision of the calculated value
    return val == 0 ? val : val + 'rem';
}
