class Board {
    constructor(row, column) {
        this.board = [];
        this.initBoard(row, column);
        this.winRow = false;
        this.winColumn = false;
        this.winDiagonal = false;
        this.row = row;
        this.column = column;
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
        for (let i = this.board.length - 1; i >= 0; i--) {
            if (this.board[i][colIndex] == 0) {
                this.board[i][colIndex] = color;
                this.row = i;
                this.column = colIndex;
                return true;
            }
        }
        return false
    };


    getBoard = () => {
        return this.board;
    }



    checkForWin = (rowInx, colInx, playerKey) => {
        console.log(this.checkRow(this.row, playerKey), this.checkColumn(this.column, playerKey), playerKey)
        if (this.checkRow(this.row, playerKey) || this.checkColumn(this.column, playerKey)) {
            return true
        }
        return false
    }

    checkRow = (rowInx, playerKey) => {
        let currentCounter = 0;
        console.log(this.board[rowInx])

        this.board[rowInx].map(cell => {
            console.log(cell)
            if (cell == playerKey) {
                currentCounter++;
            } else {
                currentCounter = 0;
            }
        })
        if (currentCounter >= 4) {
            return true;
        }
        return false;
    }

    checkColumn = (colInx, playerKey) => {
        let currentCounter = 0;

        this.board.map(row => {
            if (row[colInx] == playerKey) {
                currentCounter++;
            } else {
                currentCounter = 0;
            }
        })
        if (currentCounter >= 4) {
            return true;
        }
        return false;
    }

    checkDiagonals = () => {
        //four in a diagonal
        //bottom left to top right diagonals
        //idea: search from start points for these diagonals. start points are the fields in the bottom left 4*4 square
        return this.checkBLTRdiagonals() || this.checkTLBRdiagonals()


        //top left to bottom right diagonals
        //idea: search from start points for these diagonals. start points are the fields in the top left 4*4 square

    }

    checkBLTRdiagonals = () => {
        for (var j = 0; j < 4; j++) {
            for (var i = 0; i < 4; i++) {
                var currentCount = 1;
                var currentToken = this.board[i][j];
                for (var step = 1; step < 4; step++) {
                    if (currentToken === this.board[i + step][j + step]) {
                        currentCount++;
                    } else {
                        break;
                    }
                    if (currentCount === 4) {
                        return true;
                    }
                }
            }
        }
    }

    checkTLBRdiagonals = () => {
        for (var j = 4; j < 7; j++) {
            for (var i = 0; i < 4; i++) {
                var currentCount = 1;
                var currentToken = this.board[i][j];
                for (var step = 1; step < 4; step++) {
                    if (currentToken === this.board[i + step][j - step]) {
                        currentCount++;
                    } else {
                        break;
                    }
                    if (currentCount === 4) {
                        return true;
                    }
                }
            }
        }
    }
}
export { Board };