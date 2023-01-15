const assert = require('assert');
const Decorator = require('../decorator.js');
const PaintCan = require('../paint_can.js');
const Room = require('../room.js');

describe('Decorator', function() {

    let paintCan1;
    let paintCan2;
    let paintCan3;
    let paintCan4;
    let room;
    let decorator;

    beforeEach(function() {
        paintCan1 = new PaintCan(15);
        paintCan2 = new PaintCan(20);
        paintCan3 = new PaintCan(30);
        paintCan4 = new PaintCan(50);
        room = new Room(100);
        decorator = new Decorator ()
    })

    //start with an empty paint stock
    //use deepStrictEqual to check that stock is currently an empty list
    it('should start with an empty paint stock', function() {
        const actual = decorator.stock
        expected = []
        assert.deepStrictEqual(actual, expected)
    })

    // be able to add a can of paint to paint stock
    //will need an add function. Call that function and see if it has worked by using deepStrictEqual to compare the two lists
    it('should be able to add a can of paint to stock', function() {
        decorator.addCanToStock(paintCan1)
        const actual = decorator.stock
        const expected = [paintCan1]
        assert.deepStrictEqual(actual, expected)
    })


    // be able to calculate total litres paint it has in stock
    //needs a 'total stock' function
    //will need to first add cans, then calculate their total litreage
    it('should be able to calculate total litres of paint in stock', function() {
        decorator.addCanToStock(paintCan1)
        decorator.addCanToStock(paintCan2)
        decorator.addCanToStock(paintCan3)
        decorator.addCanToStock(paintCan4)
        const actual = decorator.totalLitresInStock()
        const expected = 115
        assert.deepStrictEqual(actual, expected)
    })

    // be able to calculate whether is has enough paint to paint a room
    //add cans of paint to stock first
    //needs a canPaintRoom function
    it('should be able to calculate whether enough paint in stock to do a room', function() {
        decorator.addCanToStock(paintCan3)
        decorator.addCanToStock(paintCan4)
        const actual = decorator.canPaintRoom(room)
        const expected = false
        assert.deepStrictEqual(actual, expected)
    })

    // be able to paint room if has enough paint in stock
    //add cans to stock
    //needs a roomPainted function
    it('should be able to paint room if enough stock present', function() {
        decorator.addCanToStock(paintCan2)
        decorator.addCanToStock(paintCan3)
        decorator.addCanToStock(paintCan4)
        const actual = decorator.hasPainted(room)
        const expected = true
        assert.deepStrictEqual(actual, expected)
    })


    // should be able to decrease amount of paint in stock when painting a room
    //add a bunch of paint
    //call decrease stock function
    it('should be able to decrease paint in stock after painting', function() {
        decorator.addCanToStock(paintCan1)
        decorator.addCanToStock(paintCan2)
        decorator.addCanToStock(paintCan3)
        decorator.addCanToStock(paintCan4)
        const actual = decorator.decreaseStock(stockList, room)
        const expected = 15
        assert.deepStrictEqual(actual, expected)
    })


    // should be able to remove empty paint cans from stock
})

