import React from 'react';
import Board from '../Board';
import s from './App.scss';

export const getGameStatus = board => {
  const checkForWinning = player => board[0].every(cell => cell === player);
  return checkForWinning('X') || checkForWinning('O');
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      winner: '',
      board: [...Array(3)].map(() => Array(3).fill('')),
      nextPlayer: 'X'
    };
  }

  handleSaveGame = () => {
    fetch('/api/game', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({board: this.state.board})
    });
  }

  handleLoadGame = async () => {
    const response = await fetch('/api/game');
    const {board} = await response.json();
    this.setState({board});
  }

  onGameChanged = (rowIndex, cellIndex) => {
    const nextPlayer = this.state.nextPlayer;
    const board = [...this.state.board];
    board[rowIndex][cellIndex] = nextPlayer;
    if (getGameStatus(board)) {
      this.setState({winner: nextPlayer});
    }
    const newNextPlayer = this.state.nextPlayer === 'X' ? 'O' : 'X';
    this.setState({board, nextPlayer: newNextPlayer});
  }

  render() {
    return (
      <div data-hook="app" className={s.root}>
        <Board handleGameChanged={this.onGameChanged} board={this.state.board}/>
        {this.state.winner && <div data-hook="winner-message">{`${this.state.winner} Wins!`}</div>}
        <div>
          <button data-hook="save" onClick={this.handleSaveGame}>Save</button>
          <button data-hook="load" onClick={this.handleLoadGame}>Load</button>
        </div>
      </div>
    );
  }
}

export default App;
