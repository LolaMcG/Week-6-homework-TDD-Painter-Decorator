const Decorator = function (stock) {
    this.stock = [];
};


Decorator.prototype.addCanToStock = function(paintCan) {
    this.stock.push(paintCan)
}

//don't need to pass anything in as there's already a stock list built in
//total litreage will need to be a variable, starting at zero
//loop through the stock list and check the litresOfPaint property for each PaintCan, then add them all together
Decorator.prototype.totalLitresInStock = function() {
    let totalLitres = 0
    for (const paintCan of this.stock){
        totalLitres += paintCan.litresOfPaint;
    }
    return totalLitres
}

//need to pass a room in, as we're trying to figure whether or not a ROOM can be painted. A room comes with a sqMetres property.
//need to know 1. the area of the room, 2. how much paint is in stock
//subtract area from how many litres in stock. If the answer is greater than or equal to zero, you've got enough paint.
Decorator.prototype.canPaintRoom = function(room) {
    const area = room.areaInSqMetres
    const totalLitres = this.totalLitresInStock()
    return totalLitres - area >= 0
}


//check if the room can be painted
//if true, call the paint function.
//Put the value of what is returned when the paint function is called into a variable
//return the variable
Decorator.prototype.hasBeenPainted = function(room) {
    if (this.canPaintRoom(room) === true) {
        hasPainted = room.paint()
        return hasPainted
    } else {
        return false
    }
}

// will need to pass in a room - don't need stockList as it comes with a decorator
// we are assuming the room can be painted, as this will already have been checked
// need total litres in stock, and the area of the room
// once a room has been painted, subtract the area of the room (paint used) from the total litres in stock
// return the value of the total litres remaining
Decorator.prototype.decreaseStock = function (room) {
    total = this.totalLitresInStock()
    const paintUsed = room.areaInSqMetres
    return total - paintUsed
}

module.exports = Decorator;