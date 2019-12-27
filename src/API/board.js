class Board {
    constructor(row, column) {
        this.board = [];
        this.initBoard(row, column);
        this.winRow = false;
        this.winColumn = false;
        this.winDiagonal = false;
        this.row=row;
        this.column=column;
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
                return i;
            }
        }
        return false
        console.log(this.board)
        // return Boolean 
    };


    getBoard = () => {
        return this.board;
    }



    checkForWin = () => {
        this.checkRows(this.row);
        this.checkColumns(this.column);
        this.checkDiagonals();
        if (this.winRow || this.winColumn || this.winDiagonal) {
            if (this.winRow && !this.winColumn && !this.winDiagonal) {
                return "WIN BY ROW";
            }
            if (!this.winRow && this.winColumn && !this.winDiagonal) {
                return "WIN BY COLUMN";
            }
            if (!this.winRow && !this.winColumn && this.winDiagonal) {
                return "WIN BY DIAGONAL";
            }
            if (this.winRow && this.winColumn && !this.winDiagonal) {
                return "WIN BY ROW AND COLUMN";
            }
            if (this.winRow && !this.winColumn && this.winDiagonal) {
                return "WIN BY ROW AND DIAGONAL";
            }
            if (!this.winRow && this.winColumn && this.winDiagonal) {
                return "WIN BY COLUMN AND DIAGONAL";
            }
            if (this.winRow && this.winColumn && this.winDiagonal) {
                return "WIN BY ROW, COLUMN AND DIAGONAL";
            }
            return "SORRY"
        }
    }

    checkRows = () => {
        //four in a row
        for (var j = 0; j < 7; j++) {
            var currentCount = 1;
            var currentToken = this.board.getBoard[0][j];
            for (var i = 1; i < 7; i++) {
                if (currentToken === this.board.getBoard[i][j]) {
                    currentCount++;
                    if (currentCount === 4) {
                        this.winRow = true;
                        break;
                    }
                } else {
                    currentToken = this.board.getBoard[i][j];
                    currentCount = 1;
                }
            }
        }
    }

    checkColumns = () => {
        //four in a column
        for (var i = 0; i < 7; i++) {
            var currentCount = 1;
            var currentToken = this.board.getBoard[i][0];
            for (var j = 1; j < 7; j++) {
                if (currentToken === this.board.getBoard[i][j]) {
                    currentCount++;
                    if (currentCount === 4) {
                        this.winColumn = true;
                        break;
                    }
                } else {
                    currentToken = this.board.getBoard[i][j];
                    currentCount = 1;
                }
            }
        }
    }

    checkDiagonals = () => {
        //four in a diagonal
        //bottom left to top right diagonals
        //idea: search from start points for these diagonals. start points are the fields in the bottom left 4*4 square
        this.checkBLTRdiagonals();
        //top left to bottom right diagonals
        //idea: search from start points for these diagonals. start points are the fields in the top left 4*4 square
        this.checkTLBRdiagonals();
    }

    checkBLTRdiagonals = () => {
        for (var j = 0; j < 4; j++) {
            for (var i = 0; i < 4; i++) {
                var currentCount = 1;
                var currentToken = this.board.getBoard[i][j];
                for (var step = 1; step < 4; step++) {
                    if (currentToken === this.board.getBoard[i + step][j + step]) {
                        currentCount++;
                    } else {
                        break;
                    }
                    if (currentCount === 4) {
                        this.winDiagonal = true;
                    }
                }
            }
        }
    }

    checkTLBRdiagonals = () => {
        for (var j = 4; j < 7; j++) {
            for (var i = 0; i < 4; i++) {
                var currentCount = 1;
                var currentToken = this.board.getBoard[i][j];
                for (var step = 1; step < 4; step++) {
                    if (currentToken === this.board.getBoard[i + step][j - step]) {
                        currentCount++;
                    } else {
                        break;
                    }
                    if (currentCount === 4) {
                        this.winDiagonal = true;
                    }
                }
            }
        }
    }
}
export { Board };