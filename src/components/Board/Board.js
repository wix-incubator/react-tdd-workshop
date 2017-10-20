import React from 'react';
import PropTypes from 'prop-types';

class Board extends React.Component {
  constructor() {
    super();
    this.state = {
      board: [...Array(3)].map(() => Array(3).fill('')),
      nextPlayer: 'X'
    };
  }

  cellClicked(rowIndex, cellIndex) {
    const board = [...this.state.board];
    board[rowIndex][cellIndex] = this.state.nextPlayer;
    if (board[0].every(cell => cell === this.state.nextPlayer)) {
      this.props.onGameOver(this.state.nextPlayer);
    }
    const nextPlayer = this.state.nextPlayer === 'X' ? 'O' : 'X';
    this.setState({board, nextPlayer});
  }

  render() {
    return (<table>
      <tbody>
        {this.state.board.map((row, rowIndex) =>
          <tr key={rowIndex}>{row.map((cell, cellIndex) =>
            <td
              data-hook="cell"
              key={cellIndex}
              onClick={() => this.cellClicked(rowIndex, cellIndex)}
              >{cell}</td>)}
          </tr>
        )}
      </tbody>
    </table>);
  }
}

Board.propTypes = {
  onGameOver: PropTypes.func.isRequired
};

export default Board;
