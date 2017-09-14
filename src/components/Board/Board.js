import React from 'react';
import PropTypes from 'prop-types';

class Board extends React.Component {
  constructor() {
    super();
    this.state = {board: [['', '', ''], ['', '', ''], ['', '', '']], currentPlayer: 'X'};
  }

  cellClicked(rowI, cellI) {
    const board = this.state.board.map((row, rowIndex) =>
      rowIndex !== rowI ? row : row.map((cell, cellIndex) => cellI !== cellIndex ? cell : this.state.currentPlayer));

    if (board[0].every(cell => cell === this.state.currentPlayer)) {
      this.props.onGameOver();
    }
    const nextPlayer = this.state.currentPlayer === 'X' ? 'O' : 'X';
    this.setState({board, currentPlayer: nextPlayer});
  }

  render() {
    return (<div>
      <table>
        <tbody>
          {this.state.board.map((row, rowIndex) =>
            <tr key={rowIndex}>{row.map((cell, cellIndex) =>
              <td data-hook="cell" onClick={() => this.cellClicked(rowIndex, cellIndex)} key={cellIndex}>{cell}</td>)}</tr>)}
        </tbody>
      </table>
    </div>);
  }
}

Board.propTypes = {
  onGameOver: PropTypes.func.isRequired
};

export default Board;
