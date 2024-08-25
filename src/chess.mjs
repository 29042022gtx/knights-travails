const chess = (() => {
  const board = [];
  const boardNum = [];

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      board.push([i, j]);
    }
  }

  for (let i = 0; i < 64; i++) {
    boardNum.push(i);
  }

  function squareToNum(square = []) {
    for (let i = 0; i < board.length; i += 1) {
      if (board[i] == square) {
        return i;
      }
    }
    return null;
  }

  function getBoard() {
    return board;
  }

  function getBoardNum() {
    return boardNum;
  }

  function printBoardNum() {
    for (let i = 0; i < 64; i += 8) {
      let s = '';
      for (let j = 0; j < 8; j += 1) {
        s += `${boardNum[i + j]} `;
        if (boardNum[i + j] < 10) {
          s += ' ';
        }
      }
      console.log(s);
      s = '';
      console.log();
    }
  }

  return { getBoard, getBoardNum, printBoardNum, squareToNum };
})();

export default chess;
