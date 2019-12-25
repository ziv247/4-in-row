class Player {
    constructor(color) {
        this.color = color;
        this.turnCounter = 0;
    }
    insertToken = (colIndex) => { return Boolean };
}

class ComputerPlayer extends Player{
    constructor(color){
       super(color);
    }
    insertToken = () =>{return Boolean};
}

export {Player,ComputerPlayer}