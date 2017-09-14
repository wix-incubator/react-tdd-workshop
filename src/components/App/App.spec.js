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

describe('App', () => {

  afterEach(() => wrapper.detach());

  it('should have "O" after second user clicks', () => {
    wrapper = render();
    clickCellAt(0);
    expect(getCellTextAt(0)).to.eq('X');
    clickCellAt(1);
    expect(getCellTextAt(1)).to.eq('O');
  });
});
