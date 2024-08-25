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

  function equals(square1 = [], square2 = []) {
    return square1[0] == square2[0] && square1[1] == square2[1];
  }

  function numToSquare(num) {
    return board[num];
  }

  function squareToNum(square = []) {
    for (let i = 0; i < board.length; i += 1) {
      if (equals(square, board[i])) {
        return i;
      }
    }
    return null;
  }

  function isValidSquare(square = []) {
    if (square.length != 2) {
      return false;
    }
    return square.every((val) => {
      return val >= 0 && val <= 7;
    });
  }

  function getBoard() {
    return board;
  }

  function getBoardNum() {
    return boardNum;
  }

  function printBoard() {
    for (let i = 0; i < 64; i += 8) {
      let s = '';
      for (let j = 0; j < 8; j += 1) {
        s += `[${board[i + j]}] `;
        if (board[i + j] < 10) {
          s += ' ';
        }
      }
      console.log(s);
      s = '';
      console.log();
    }
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

  return {
    getBoard,
    getBoardNum,
    printBoardNum,
    printBoard,
    squareToNum,
    numToSquare,
    isValidSquare,
    equals,
  };
})();

export default chess;
