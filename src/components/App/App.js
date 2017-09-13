import React from 'react';
import Board from '../Board';
import s from './App.scss';

function App() {
  return (
    <div data-hook="app" className={s.root}>
      <Board/>
    </div>
  );
}

export default App;
