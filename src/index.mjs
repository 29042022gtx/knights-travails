import chess from './chess.mjs';
import knight from './knight.mjs';

console.log('\x1b[2J\x1b[3J\x1b[H');
chess.printBoard();
// chess.printBoardNum();
console.log(knight.path([0, 0], [5, 7]));
