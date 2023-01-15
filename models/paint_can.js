const PaintCan = function (litresOfPaint) {
    this.litresOfPaint = litresOfPaint
};


PaintCan.prototype.isEmpty = function() {
    return this.litresOfPaint === 0
};

PaintCan.prototype.empty = function() {
    return this.litresOfPaint = 0
};

PaintCan.prototype.decreasePaint = function(litres) {
        if (this.litresOfPaint < litres) {
            this.empty()
        } else {
            return this.litresOfPaint -= litres
        }
        // return this.litresOfPaint
    }

module.exports = PaintCan;