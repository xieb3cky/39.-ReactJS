import React, { useState } from "react";
import Cell from "./Cell";
import "./Board.css";

/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

function Board({ nrows = 5, ncols = 5, chanceLightStartsOn = 0.25 }) {
  const [board, setBoard] = useState(createBoard());

  /**Determine if each cell should be lit or unlit */
  function rand(chance) {
    if (Math.random() < chanceLightStartsOn) return true;
    return false;
  };

  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */
  function createBoard() {
    let initialBoard = [];
    for (let boardRow = 0; boardRow < nrows; boardRow++) {
      let row = [];
      for (let boardCol = 0; boardCol < ncols; boardCol++) {
        row.push(rand(chanceLightStartsOn));
      }
      initialBoard.push(row);
    }
    return initialBoard;
  }

  /* Check if the player has won */
  function hasWon() {
    // if a cell contains true == lights on == no winner
    for (let row of board) {
      if (row.includes(true)) {
        return false;
      };
    };
    return true;
  };

  /* Flip cells around a given cell */
  function flipCellsAround(coord) {
    setBoard(oldBoard => {
      const [y, x] = coord.split("-").map(Number);

      const flipCell = (y, x, boardCopy) => {
        // if this coord is actually on board, flip it

        if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
          boardCopy[y][x] = !boardCopy[y][x];
        }
      };

      // TODO: Make a (deep) copy of the oldBoard
      const boardCopy = oldBoard.map(row => [...row]);

      // TODO: in the copy, flip this cell and the cells around it
      flipCell(y, x, boardCopy);
      flipCell(y, x - 1, boardCopy);
      flipCell(y, x + 1, boardCopy);
      flipCell(y - 1, x, boardCopy);
      flipCell(y + 1, x, boardCopy);

      // TODO: return the copy

      return boardCopy;
    });
  }

  // if the game is won, just show a winning msg & render nothing else
  if (hasWon()) {
    return <h1>You Win!</h1>;
  }

  // TODO

  // make table board


  let tableBoard = [];

  for (let boardRow = 0; boardRow < nrows; boardRow++) {
    let row = [];
    for (let boardCol = 0; boardCol < ncols; boardCol++) {
      let cord = `${boardRow}-${boardCol}`;
      row.push(
        <Cell
          key={cord}
          isLit={board[boardRow][boardCol]}
          flipCellsAroundMe={() => flipCellsAround(cord)}
        />
      );
    }
    tableBoard.push(<tr key={boardRow}>{row}</tr>);
  }

  return (
    <table className="Board">
      <tbody>{tableBoard}</tbody>
    </table>
  );
}

export default Board;