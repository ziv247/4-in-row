class Board {
    constructor(row, column) {
        this.board = [];
        this.rowNum = row;
        this.colNum = column;
        this.initBoard(row, column);
        this.row = row;
        this.column = column;
    }

    initBoard = (row, column) => {
        const board = [];
        for (let i = 0; i < row; i++) {
            let rows = [];
            for (let j = 0; j < column; j++) {
                rows.push(0);
            }
            board.push(rows);
        }
        this.board = board;
    }

    move = (colIndex, key) => {
        console.log("bla", colIndex, key)
        for (let i = this.board.length - 1; i >= 0; i--) {
            if (this.board[i][colIndex] === 0) {
                this.board[i][colIndex] = key;
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

    resetBoard = () => {
        this.initBoard(this.rowNum, this.colNum)
    }



    checkForWin = (playerKey) => {

        if (this.checkRow(this.row, playerKey) || this.checkColumn(this.column, playerKey) || this.checkDiagonals(playerKey)) {
            this.resetBoard()
            return true
        }
        return false
    }

    checkRow = (rowInx, playerKey) => {
        let currentCounter = 0;
        const row = this.board[rowInx];

        for (let i = 0; i < row.length; i++) {
            if (row[i] === playerKey) {
                currentCounter++;
                if (currentCounter >= 4) {
                    return true;
                }
            } else {
                currentCounter = 0;
            }
        }
        return false;
    }

    checkColumn = (colInx, playerKey) => {
        let currentCounter = 0;

        for (let i = 0; i < this.board.length; i++) {
            if (this.board[i][colInx] === playerKey) {
                currentCounter++;
                if (currentCounter >= 4) {
                    return true;
                }
            } else {
                currentCounter = 0;
            }
        }
        return false;
    }

    checkDiagonals = (playerKey) => {
        return this.checkBLTRdiagonals(playerKey) || this.checkTLBRdiagonals(playerKey)
    }

    checkBLTRdiagonals = (playerKey) => {
        let currRowInx = this.row;
        let currColInx = this.column;
        while (currRowInx > 0 && currColInx > 0) {

            currColInx--;
            currRowInx--;
        }
        let currentCounter = 0;
        let i = currRowInx;
        let j = currColInx;

        while (i < this.board.length && j < this.board[0].length) {
            if (this.board[i][j] === playerKey) {
                currentCounter++;
                if (currentCounter >= 4) {
                    return true;
                }
            } else {
                currentCounter = 0;
            }
            i++;
            j++;
        }

        return false;
    }


    checkTLBRdiagonals = (playerKey) => {
        let currRowInx = this.row;
        let currColInx = this.column;

        while (currRowInx < this.board.length - 1 && currColInx > 0) {
            currColInx--;
            currRowInx++;
        }
        let currentCounter = 0;
        let i = currRowInx;
        let j = currColInx;

        while (i >= 0 && j < this.board[i].length) {
            if (this.board[i][j] === playerKey) {
                currentCounter++;
                if (currentCounter >= 4) {
                    return true;
                }
            } else {
                currentCounter = 0;
            }
            j++;
            i--;
        }

        return false;
    }
}
export { Board };