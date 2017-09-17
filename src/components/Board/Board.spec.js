import {expect} from 'chai';
import {getGameStatus} from './Board';

describe('getGameStatus', () => {
  it('"X" should win on first row', () => {
    const board = [
      ['X', 'X', 'X'],
      ['', '', ''],
      ['', '', '']
    ];

    expect(getGameStatus(board)).to.equal('X');
  });

  it('"O" should win on first row', () => {
    const board = [
      ['O', 'O', 'O'],
      ['', '', ''],
      ['', '', '']
    ];

    expect(getGameStatus(board)).to.equal('O');
  });
});
