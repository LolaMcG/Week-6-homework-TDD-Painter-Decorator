const Park = function (name, ticketPrice) {
    this.name = name
    this.ticketPrice = ticketPrice
    this.dinosaurCollection = []
}

Park.prototype.addDino = function(dinosaur) {
    this.dinosaurCollection.push(dinosaur)
}

Park.prototype.removeDino = function(dinosaur) {
    const dinoIndex = this.dinosaurCollection.indexOf(dinosaur)
    if (dinoIndex >= 0){
        this.dinosaurCollection.splice(dinoIndex, 1)
    }
}

Park.prototype.mostPopular = function() {
    const orderOfVisitors = this.dinosaurCollection.sort((dinoX, dinoY) => dinoY.guestsAttractedPerDay - dinoX.guestsAttractedPerDay)

    return orderOfVisitors[0]
}


module.exports = Park;