module.exports = function(str) {
    return /^(auto|[+\-]?\d+(\.\d+?)?(em|ex|%|px|cm|mm|in|pt|pc|ch|rem|vh|vw|vmin|vmax|wx)?)$/.test(str);
};
