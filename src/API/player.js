class Player {
    constructor(key) {
        this.name = `Player${key}`
        this.key = key;
        this.turnCounter = 0;
    }
}

class ComputerPlayer extends Player {

}

export { Player, ComputerPlayer }