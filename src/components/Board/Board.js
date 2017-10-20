import React from 'react';

class Board extends React.Component {
  constructor() {
    super();
    this.state = {board: [['', '', ''], ['', '', ''], ['', '', '']]};
  }

  cellClicked(rowIndex, cellIndex) {
    const board = [...this.state.board];
    board[rowIndex][cellIndex] = 'X';
    this.setState({board});
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

export default Board;
