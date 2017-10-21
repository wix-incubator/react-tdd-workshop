import React from 'react';
import PropTypes from 'prop-types';

const Board = ({board, onGameChanged}) => {
  return (<table>
    <tbody>
      {board.map((row, rowIndex) => <tr key={rowIndex}>
        {row.map((cell, cellIndex) =>
          <td
            data-hook="cell"
            key={cellIndex}
            onClick={() => onGameChanged(rowIndex, cellIndex)}
            >{cell}</td>)}
      </tr>)}
    </tbody>
  </table>);
};

Board.propTypes = {
  onGameChanged: PropTypes.func.isRequired,
  board: PropTypes.array.isRequired
};

export default Board;
