import React from 'react';
import Board from '../Board';
import s from './App.scss';

function App() {
  return (
    <div data-hook="app" className={s.root}>
      <Board/>
      <div data-hook="winner-message">X Wins!</div>
    </div>
  );
}

export default App;
