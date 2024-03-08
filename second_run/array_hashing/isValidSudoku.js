function isValidSudoku(board) {
  let row = new Array(9).fill().map((elem) => new Set());
  let col = new Array(9).fill().map((elem) => new Set());
  let box = new Array(9).fill().map((elem) => new Set());

  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      let val = board[r][c];

      if (val === ".") {
        continue;
      }

      if (row[r].has(val)) return false;
      row[r].add(val);

      if (col[c].has(val)) return false;
      col[c].add(val);

      let idx = Math.floor(r / 3) * 3 + Math.floor(c / 3);
      if (box[idx].has(val)) return false;
      box[idx].add(val);
    }
  }
  return true;
}
