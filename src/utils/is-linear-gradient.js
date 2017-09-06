module.exports = function(str) {
    return /linear-gradient\s*\(/i.test(str);
};