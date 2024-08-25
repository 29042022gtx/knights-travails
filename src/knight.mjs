import Graph from './Graph.mjs';
import chess from './chess.mjs';

const knight = (() => {
  const graph = new Graph(chess.getBoardNum());

  function path(start, end) {
    for (let i = 0; i < 64; i += 1) {
      const edges = [];
      const nexts = getNextSquares(chess.numToSquare(i));
      nexts.forEach((next) => {
        edges.push(chess.squareToNum(next));
      });
      graph.addEdges(i, ...edges);
    }

    const startNum = chess.squareToNum(start);
    const endNum = chess.squareToNum(end);
    const paths = graph.path(startNum, endNum);
    return paths.map((val) => {
      return chess.numToSquare(val);
    });
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
