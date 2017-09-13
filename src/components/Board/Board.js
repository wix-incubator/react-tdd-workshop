import React from 'react';

class Board extends React.Component {
  constructor() {
    super();
    this.state = {board: [['', '', ''], ['', '', ''], ['', '', '']]};
  }

  cellClicked(rowI, cellI) {
    const board = this.state.board.map((row, rowIndex) =>
      rowIndex !== rowI ? row : row.map((cell, cellIndex) => cellI !== cellIndex ? cell : 'X'));
    this.setState({board});
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

export default Board;
