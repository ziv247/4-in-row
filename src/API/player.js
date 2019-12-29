class Player {
    constructor(key) {
        this.name = `Player${key}`
        this.key = key;
        this.turnCounter = 0;
    }
    insertToken = (colIndex) => { return Boolean };
}

class ComputerPlayer extends Player {

    insertToken = () => { return Boolean };
}

export { Player, ComputerPlayer }