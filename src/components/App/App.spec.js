import React from 'react';
import {expect} from 'chai';
import {mount} from 'enzyme';
import App from './App';

let wrapper;
const render = () => mount(
  <App/>, {attachTo: document.createElement('div')}
);
const clickCellAt = index => wrapper.find('[data-hook="cell"]').at(index).simulate('click');
const getCellValueAt = index => wrapper.find('[data-hook="cell"]').at(index).text();
const getWinnerMessage = () => wrapper.find('[data-hook="winner-message"]').text();

describe('App', () => {

  afterEach(() => wrapper.detach());

  it('should show "O" after second player plays', () => {
    wrapper = render();
    clickCellAt(0);
    clickCellAt(1);
    expect(getCellValueAt(1)).to.eq('O');
  });

  it('player "O" should win the game', () => {
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
