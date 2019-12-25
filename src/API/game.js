import {Player} from './player.js';
import {ComputerPlayer} from './player.js';
import {Board} from './board.js';
class Game {
    constructor() {
        this.board = [];
        this.player1 = null;
        this.player2 = null;
        this.currentPlayer = null;
    }

    setPlayers = (numOfPlayers) => { 
        if(numOfPlayers==1){
            this.player1=new Player('red');
            this.player2=new ComputerPlayer('yellow');
        }else{
            this.player1=new Player('red');
            this.player2=new Player('yellow');
        }
        console.log(this.player1,this.player2);
        this.currentPlayer=this.player1;
    };
    
    initBoard = (row=6, column=7) => { 
        // row=parseInt(prompt('Please Insert Number of Rows'));
        // column=parseInt(prompt('Please Inser Number of Columns'));
        this.board=new Board(row,column);
        console.log(this.board.board)
    };
    ;
    insertion = (colIndex) => {
        const successfullMove = this.board.move(colIndex,this.currentPlayer.color);
        if(!successfullMove){
            //html alert that there is not possible move at this column 
        }
        
    };

}
export default Game;
const game=new Game();
game.setPlayers(2);
// game.initBoard(parseInt(prompt('Please Insert Number of Rows')),parseInt(prompt('Please Insert Number of Columns')))
game.initBoard(6,7)
game.insertion(1);
game.insertion(1);
game.insertion(1);
game.insertion(1);
game.insertion(1);
game.insertion(1);
game.insertion(1);
game.insertion(1);
game.insertion(1);


