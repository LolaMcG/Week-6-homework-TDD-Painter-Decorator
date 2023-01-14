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
    
})

