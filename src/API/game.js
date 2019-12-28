import { Player } from './player.js';
import { ComputerPlayer } from './player.js';
import { Board } from './board.js';

class Game {
    constructor() {
        this.board = [];
        this.player1 = null;
        this.player2 = null;
        this.currentPlayer = null;
    }

    setPlayers = (numOfPlayers) => {
        if (numOfPlayers == 1) {
            this.player1 = new Player('red');
            this.player2 = new ComputerPlayer('yellow');
        } else {
            this.player1 = new Player('red');
            this.player2 = new Player('yellow');
        }
        console.log(this.player1, this.player2);
        this.currentPlayer = this.player1;
    };

    initBoard = (row = 7, column = 6) => {
        this.board = new Board(column, row);
        return this.board.board;
    };

    insertion = (colIndex) => {
        console.log("ColIndex in game.js: ", colIndex)
        const successfullInsertRow = this.board.move(colIndex, 1);
        if (successfullInsertRow) {
            const isWinStr = this.board.checkForWin();
            if (isWinStr != "SORRY") {
                this.winning(isWinStr);
            }
            this.currentPlayer = this.currentPlayer == this.player1 ? this.player2 : this.player1;
            return true;
        }
        return false;

    };

    winning = (msg) => { };

}
export default Game;

// const game = new Game();
// game.setPlayers(2);
// // game.initBoard(parseInt(prompt('Please Insert Number of Rows')),parseInt(prompt('Please Insert Number of Columns')))
// game.initBoard(6, 7)
// game.insertion(1);
// game.insertion(1);
// game.insertion(1);
// game.insertion(1);
// game.insertion(1);
// game.insertion(1);
// game.insertion(1);
// game.insertion(1);
// game.insertion(1);


