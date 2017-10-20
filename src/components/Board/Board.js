import React from 'react';
import PropTypes from 'prop-types';

const Board = ({board, handleGameChanged}) => (<table>
  <tbody>
    {board.map((row, rowIndex) =>
      <tr key={rowIndex}>{row.map((cell, cellIndex) =>
        <td
          data-hook="cell"
          key={cellIndex}
          onClick={() => handleGameChanged(rowIndex, cellIndex)}
          >{cell}</td>)}
      </tr>
    )}
  </tbody>
</table>);

Board.propTypes = {
  board: PropTypes.array.isRequired,
  handleGameChanged: PropTypes.func.isRequired
};

export default Board;
