import React from 'react';
import s from './App.scss';

function App() {
  return (
    <div data-hook="app" className={s.root}>
      <div className={s.header}>
        <h2>{'Hello World!'}</h2>
      </div>
      <p className={s.intro}>
        {'Get started here: https://github.com/wix/yoshi'}
      </p>
    </div>
  );
}

export default App;
