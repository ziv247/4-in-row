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

    move = (colIndex, color) => { return Boolean };

    checkWin = () => { return Boolean };
}
export default Board;