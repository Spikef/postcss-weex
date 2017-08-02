module.exports = function(str) {
    return /^solid|dashed|dotted|double|groove|ridge|inset|outset|none$/i.test(str);
};