import React from 'react';
import Board from '../Board';
import s from './App.scss';

class App extends React.Component {
  constructor() {
    super();
    this.state = {winner: ''};
  }

  render() {
    return (
      <div data-hook="app" className={s.root}>
        <Board onGameOver={({winner}) => this.setState({winner})}/>
        {this.state.winner && <div data-hook="winner-message">{`${this.state.winner} wins!`}</div>}
      </div>
    );
  }
}

export default App;
