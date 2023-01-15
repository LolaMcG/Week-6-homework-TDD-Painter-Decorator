const Room = function (areaInSqMetres){
    this.areaInSqMetres = areaInSqMetres;
    this.isPainted = false;
}

//Don't need to pass anything in as a parameter as the room comes with a default 'isPainted' value built in
//When this function is called, return isPainted as 'true'
Room.prototype.paint = function() {
    return this.isPainted = true;
}

module.exports = Room;