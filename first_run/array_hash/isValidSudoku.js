//https://leetcode.com/problems/valid-sudoku/

var isValidSudoku = function (board) {
    let rows = new Array(9).fill().map(item => new Set());
    let cols = new Array(9).fill().map(item => new Set());
    let box = new Array(9).fill().map(item => new Set());

    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            let val = board[r][c];
            console.log(val, r, c);

            if (val === ".") {
                continue;
            }
            console.log(rows[r]);
            if (rows[r].has(val)) {
                return false;
            }
            rows[r].add(val);

            if (cols[c].has(val)) {
                return false;
            }
            cols[c].add(val);

            let idx = Math.floor(r / 3) * 3 + Math.floor(c / 3);
            if (box[idx].has(val)) {
                return false;
            }
            box[idx].add(val);
        }
    }

    return true;
};

let test = [
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

isValidSudoku(test);
