const assert = require('assert');
const Room = require('../room.js')

describe('Room', function () {

    let room;

    beforeEach(function () {
        room = new Room (250);
    })

    //Compare the expected area of the room with the actual area
    it('should have an area in square metres', function() {
        const actual = room.areaInSqMetres;
        const expected = 250;
        assert.strictEqual(actual, expected)
    })

    it('should start not painted', function() {
        const actual = room.isPainted;
        const expected = false;
        assert.strictEqual(actual, expected)
    })

    //Room needs a function that allows it to be painted. When this function is called, isPainted will equal 'true'.
    it('should be able to be painted', function() {
        const actual = room.paint()
        const expected = true;
        assert.strictEqual(actual, expected);
    })


})