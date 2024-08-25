class ChessBoard {
  #board = [];
  constructor() {
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        this.#board.push([i, j]);
      }
    }
  }

  getBoard() {
    return this.#board;
  }
}

export default ChessBoard;
