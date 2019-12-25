class Board {
    constructor(row, column) {
        this.board = [];
        this.initBoard(row, column);
    }

    initBoard = (row, column) => {
        const board = [];
        for (let i = 0; i < column; i++) {
            let rows = [];
            for (let j = 0; j < row; j++) {
                rows.push(0);
            }
            board.push(rows);
        }
        this.board = board;
    }

    move = (colIndex, color) => {
        for(let i=this.board.length-1;i>=0;i--){
             if(this.board[i][colIndex]==0){
                this.board[i][colIndex]=color;
                return true;
             }
             
        }
        return false
        console.log(this.board) 
        // return Boolean 
    };

    checkWin = () => { return Boolean };
    getBoard=()=>{
        return this.board;
    }
}
export {Board};