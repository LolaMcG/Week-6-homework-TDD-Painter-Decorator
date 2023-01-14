const PaintCan = function (litresOfPaint) {
    this.litresOfPaint = litresOfPaint
};


PaintCan.prototype.isEmpty = function() {
    return this.litresOfPaint === 0
};

PaintCan.prototype.empty = function() {
    return this.litresOfPaint = 0
};

module.exports = PaintCan;