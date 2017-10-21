import React from 'react';
import {expect} from 'chai';
import {mount} from 'enzyme';
import App, {getGameStatus} from './App';

let wrapper;
const render = element => mount(
  element, {attachTo: document.createElement('div')}
);
const clickACellAt = index => wrapper.find('[data-hook="cell"]')
  .at(index).simulate('click');
const getCellTextAt = index => wrapper.find('[data-hook="cell"]')
  .at(index).text();
const getWinnerMessage = () => wrapper.find('[data-hook="winner-message"]').text();

describe('App', () => {

  afterEach(() => wrapper.detach());

  it('should have "O" after second user plays', () => {
    wrapper = render(<App/>);
    clickACellAt(0);
    clickACellAt(1);
    expect(getCellTextAt(1)).to.equal('O');
  });

  it('player "O" should win the game', () => {
    wrapper = render(<App/>);
    clickACellAt(4);
    clickACellAt(0);
    clickACellAt(5);
    clickACellAt(1);
    clickACellAt(7);
    clickACellAt(2);
    expect(getWinnerMessage()).to.equal('O Wins!');
  });
});

describe('getGameStatus', () => {
  it('X should win the game', () => {
    const board = [
      ['X', 'X', 'X'],
      ['', '', ''],
      ['', '', '']
    ];
    expect(getGameStatus(board)).to.equal(true);
  });
});
