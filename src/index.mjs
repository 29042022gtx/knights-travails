import Graph from './Graph.mjs';
import chess from './chess.mjs';

console.log('\x1b[2J\x1b[3J\x1b[H');
const graph = new Graph(chess.getBoardNum());
chess.printBoardNum();
