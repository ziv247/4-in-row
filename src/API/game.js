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
            this.player1 = new Player(1);
            this.player2 = new ComputerPlayer(2);
        } else {
            this.player1 = new Player(1);
            this.player2 = new Player(2);
        }
        console.log(this.player1, this.player2);
        this.currentPlayer = this.player1;
    };

    initBoard = (row, column) => {
        this.board = new Board(column, row);
        return this.board.board;
    };

    insertion = (rowIndex, colIndex,winEvent) => {
        console.log(this.currentPlayer)
        const playerKey = this.currentPlayer.key;
        const successfullInsertRow = this.board.move(colIndex, playerKey);
        if (successfullInsertRow) {
            const isWinStr = this.board.checkForWin(playerKey);
            console.log(isWinStr);
            if (isWinStr) {
                winEvent(this.currentPlayer)
                // alert("Victory!");
            }
            this.currentPlayer = this.currentPlayer == this.player1 ? this.player2 : this.player1;
            return true;
        }
        return false;

    };


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


