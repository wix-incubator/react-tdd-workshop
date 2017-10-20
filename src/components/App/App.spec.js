import React from 'react';
import {expect} from 'chai';
import {mount} from 'enzyme';
import App from './App';

describe('App', () => {
  let wrapper;

  afterEach(() => wrapper.detach());

  it('should have "X" and "O" interchangeably', () => {
    wrapper = mount(
      <App/>, {attachTo: document.createElement('div')}
    );
    wrapper.find('[data-hook="cell"]').at(0).simulate('click');
    wrapper.find('[data-hook="cell"]').at(1).simulate('click');
    expect(wrapper.find('[data-hook="cell"]').at(0).text()).to.eq('X');
    expect(wrapper.find('[data-hook="cell"]').at(1).text()).to.eq('O');
  });
});
