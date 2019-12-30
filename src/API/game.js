import { Player } from './player.js';
import { ComputerPlayer } from './player.js';
import { Board } from './board.js';

class Game {
    constructor() {
        this.board = null;
        this.player1 = null;
        this.player2 = null;
        this.currentPlayer = null;
    }

    setPlayers = (numOfPlayers) => {
        if (numOfPlayers === 1) {
            this.player1 = new Player(1);
            this.player2 = new ComputerPlayer(2);
        } else {
            this.player1 = new Player(1);
            this.player2 = new Player(2);
        }
        this.currentPlayer = this.player1;
        console.log(this.currentPlayer)
    };

    initBoard = (row, column) => {
        this.board = new Board(row, column);
        return this.board.board;
    };

    computerPlay = (winEvent) => {
        const randomColInx = Math.floor(Math.random() * (this.board.board[0].length - 1));

        setTimeout(this.insertion(randomColInx, winEvent), 1000)
    }

    insertion = (colIndex, winEvent) => {
        let playerKey = this.currentPlayer.key;
        const successfullInsertRow = this.board.move(colIndex, playerKey);
        if (successfullInsertRow) {
            const isWinStr = this.board.checkForWin(playerKey);
            if (isWinStr) {
                winEvent(this.currentPlayer);
            } else {
                this.currentPlayer = this.currentPlayer === this.player1 ? this.player2 : this.player1;
                if (this.currentPlayer instanceof ComputerPlayer) {
                    this.computerPlay(winEvent);
                }
            }
            return true;
        }
        return false;

    };

    resetGame = () => {
        this.initBoard(this.board.rowNum, this.board.colNum)
        this.currentPlayer = this.player1;

    }


}
export default Game;



