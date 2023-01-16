const assert = require('assert');
const PaintCan = require('../paint_can.js');

describe('PaintCan', function() {

    let paintCan;


    beforeEach (function () {
        paintCan = new PaintCan(10);
    })


    //have a number of litres of paint
    it('should have a number of litres of paint', function() {
        const actual = paintCan.litresOfPaint;
        const expected = 10;
        assert.strictEqual(actual, expected);
    })

    // be able to check if it is empty
    it('should be able to check if it is empty', function() {
        const actual = paintCan.isEmpty();
        expected = false;
        assert.strictEqual(actual, expected);
    })

    // be able to empty itself of paint. Will need an 'empty' function
    it('should be able to empty itself of paint', function() {
        const actual = paintCan.empty();
        const expected = 0;
        assert.strictEqual(actual, expected)
    })

    it('should be able to decrease the amount of paint in a paint can', function() {
        amountToDecrease = 8
        const actual = paintCan.decreasePaint(amountToDecrease)
        const expected = 2
        assert.strictEqual(actual, expected)
        })
})

