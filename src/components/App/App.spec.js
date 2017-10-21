import React from 'react';
import {expect} from 'chai';
import {mount} from 'enzyme';
import App, {getGameStatus} from './App';

let wrapper;
const render = x => mount(
  x, {attachTo: document.createElement('div')}
);
const clickACellAt = index => wrapper.find('[data-hook="cell"]').at(index).simulate('click');
const getCellText = index => wrapper.find('[data-hook="cell"]').at(index).text();
const getWinnerMessage = () => wrapper.find('[data-hook="winner-message"]').text();
describe('App', () => {

  afterEach(() => wrapper.detach());

  it('should have "X" and "O" interchangeably', () => {
    wrapper = render(<App/>);
    clickACellAt(0);
    clickACellAt(1);
    expect(getCellText(0)).to.eq('X');
    expect(getCellText(1)).to.eq('O');
  });

  it('player "O" should win the game', () => {
    wrapper = render(<App/>);
    clickACellAt(3);
    clickACellAt(0);
    clickACellAt(4);
    clickACellAt(1);
    clickACellAt(6);
    clickACellAt(2);
    expect(getWinnerMessage()).to.equal('O Wins!');
  });
});

describe('getGameStatus', () => {
  it('X should win', () => {
    const board = [['X', 'X', 'X'], ['', '', ''], ['', '', '']];
    expect(getGameStatus(board)).to.equal('X');
  });
});
