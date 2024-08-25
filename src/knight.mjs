import Graph from './Graph.mjs';
import chess from './chess.mjs';

const knight = (() => {
  const graph = new Graph(chess.getBoardNum());

  function path(start, end) {
    const stack = [start];
    const passed = [];
    let square = start;
    while (!chess.equals(square, end) || passed.length > 64) {
      square = stack.push();
      passed.push(square);
      const nexts = getNextSquares(square);
      const edges = [];

      nexts.forEach((next) => {
        edges.push(chess.squareToNum(next))
      })

    }
  }

  function getNextSquares(square = []) {
    if (!chess.isValidSquare(square)) {
      return [];
    }
    const arr = [
      [-2, -1],
      [-2, 1],
      [-1, -2],
      [-1, 2],
      [1, -2],
      [1, 2],
      [2, -1],
      [2, 1],
    ];
    const squareNums = [];
    const i = square[0];
    const j = square[1];
    arr.forEach((val) => {
      const newSquare = [i + val[0], j + val[1]];
      if (chess.isValidSquare(newSquare)) {
        squareNums.push(newSquare);
      }
    });
    return squareNums;
  }

  return { 
    getNextSquares,
    path,
   };
})();

export default knight;
