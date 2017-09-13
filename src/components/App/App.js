import React from 'react';
import s from './App.scss';

function App() {
  return (
    <div data-hook="app" className={s.root}>
      <table>
        <tbody>
          <tr>
            <td data-hook="cell">X</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
