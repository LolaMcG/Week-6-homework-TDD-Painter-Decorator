const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
    let dinosaur1;
    let dinosaur2;
    let dinosaur3;
    let dinosaur4;
    let dinosaurs;
    let park;

    beforeEach(function () {
        dinosaur1 = new Dinosaur('T-rex', 'steak', 500)
        dinosaur2 = new Dinosaur('Diplodocus', 'leaves', 250)
        dinosaur3 = new Dinosaur('Triceratops', 'leaves', 200)
        dinosaur4 = new Dinosaur('T-rex', 'broccoli', 300)
        dinosaurs = [dinosaur1, dinosaur2, dinosaur3, dinosaur4]
        park = new Park('Purassic Jark', 50)
    })

it('should have a name', function() {
    const actual = park.name
    const expected = 'Purassic Jark'
    assert.strictEqual(actual, expected)
});

it('should have a ticket price', function() {
    const actual = park.ticketPrice
    const expected = 50
    assert.strictEqual(actual, expected)
});

it('should have a collection of dinosaurs', function() {
    const actual = park.dinosaurCollection
    const expected = []
    assert.deepStrictEqual(actual, expected)
});

it('should be able to add a dinosaur to its collection', function() {
    park.addDino(dinosaur1)
    const actual = park.dinosaurCollection
    const expected = [dinosaur1]
    assert.deepStrictEqual(actual, expected)
});

it('should be able to remove a dinosaur from its collection', function() {
    park.addDino(dinosaur1)
    park.addDino(dinosaur2)
    park.removeDino(dinosaur2)
    const actual = park.dinosaurCollection
    const expected = [dinosaur1]
    assert.deepStrictEqual(actual, expected)
});

it('should be able to find the dinosaur that attracts the most visitors', function() {
    park.addDino(dinosaur1)
    park.addDino(dinosaur2)
    park.addDino(dinosaur3)
    park.addDino(dinosaur4)
    const actual = park.mostPopular()
    const expected = (dinosaur1)
    assert.deepStrictEqual(actual, expected)
});

it('should be able to find all dinosaurs of a particular species');

it('should be able to calculate the total number of visitors per day');

it('should be able to calculate the total number of visitors per year');

it('should be able to calculate total revenue for one year');

});