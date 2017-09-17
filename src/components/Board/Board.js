import React from 'react';
import PropTypes from 'prop-types';

export const getGameStatus = board => {
  const win = currentPlayer => board[0].every(cell => cell === currentPlayer);
  if (win('X')) {
    return 'X';
  }
  if (win('O')) {
    return 'O';
  }
};

class Board extends React.Component {
  constructor() {
    super();
    this.state = {board: [['', '', ''], ['', '', ''], ['', '', '']], currentPlayer: 'X'};
  }

  onClick(rowIndex, cellIndex) {
    const board = [...this.state.board];
    board[rowIndex][cellIndex] = this.state.currentPlayer;
    if (getGameStatus(board)) {
      this.props.onGameOver({winner: this.state.currentPlayer});
    }
    const nextPlayer = this.state.currentPlayer === 'X' ? 'O' : 'X';
    this.setState({board, currentPlayer: nextPlayer});
  }

  render() {
    return (<table>
      <tbody>
        {this.state.board.map((row, rIndex) =>
          <tr key={rIndex}>{row.map((cell, cIndex) =>
            <td
              onClick={() => this.onClick(rIndex, cIndex)}
              data-hook="cell"
              key={cIndex}
              >{cell}</td>)}</tr>)}
      </tbody>
    </table>);
  }
}

Board.propTypes = {
  onGameOver: PropTypes.func.isRequired
};

export default Board;
