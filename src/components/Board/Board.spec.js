import {expect} from 'chai';
import {getGameStatus} from './Board';

describe('getGameStatus', () => {
  it('"X" should win for first row', () => {
    const borad = [['X', 'X', 'X'], ['', '', ''], ['', '', '']];
    expect(getGameStatus(borad)).to.equal('X');
  });

  it('"O" should win for first row', () => {
    const borad = [['O', 'O', 'O'], ['', '', ''], ['', '', '']];
    expect(getGameStatus(borad)).to.equal('O');
  });
});
