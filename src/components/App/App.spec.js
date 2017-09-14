import React from 'react';
import {expect} from 'chai';
import {mount} from 'enzyme';
import App from './App';

let wrapper;
const render = () => mount(
  <App/>, {attachTo: document.createElement('div')}
);
const clickCellAt = index => wrapper.find('[data-hook="cell"]').at(index).simulate('click');
const getCellTextAt = index => wrapper.find('[data-hook="cell"]').at(index).text();
const getWinnerMessage = () => wrapper.find('[data-hook="winner-message"]').text();

describe('App', () => {

  afterEach(() => wrapper.detach());

  it('should have "O" after second user clicks', () => {
    wrapper = render();
    clickCellAt(0);
    expect(getCellTextAt(0)).to.eq('X');
    clickCellAt(1);
    expect(getCellTextAt(1)).to.eq('O');
  });

  it('Player "O" should win the game', () => {
    wrapper = render();
    clickCellAt(3);
    clickCellAt(0);
    clickCellAt(4);
    clickCellAt(1);
    clickCellAt(6);
    clickCellAt(2);
    expect(getWinnerMessage()).to.eq('O wins!');
  });
});
