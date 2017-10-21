import React from 'react';
import Board from '../Board';
import './App.scss';

export const getGameStatus = board => {
  const isGameWon = player =>
    board[0].every(cell => cell === player);
  return isGameWon('X') || isGameWon('O');
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      board: [['', '', ''], ['', '', ''], ['', '', '']],
      winner: '',
      nextPlayer: 'X'
    };
  }

  save() {
    fetch('/api/game', {
      method: 'POST',
      body: JSON.stringify({board: this.state.board}),
      headers: {'Content-Type': 'application/json'}
    });
  }

  async load() {
    const response = await fetch('/api/game');
    const {board} = await response.json();
    this.setState({board});
  }

  handleGameChange(rowI, cellI) {
    const board = [...this.state.board];
    const nextPlayer = this.state.nextPlayer;
    board[rowI][cellI] = nextPlayer;
    if (getGameStatus(board)) {
      this.setState({winner: nextPlayer});
    }
    const newNextPlayer = nextPlayer === 'X' ? 'O' : 'X';
    this.setState({board, nextPlayer: newNextPlayer});
  }
  render() {
    return (
      <div data-hook="app" className="root">
        <Board
          board={this.state.board}
          onGameChanged={(rowIndex, cellIndex) => this.handleGameChange(rowIndex, cellIndex)}
          />
        {this.state.winner && <div data-hook="winner-message" className="winner-message">{`${this.state.winner} Wins!`}</div>}
        <div>
          <button onClick={() => this.save()} data-hook="save">Save</button>
          <button onClick={() => this.load()} data-hook="load">Load</button>
        </div>
      </div>
    );
  }
}

export default App;
