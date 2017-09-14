import React from 'react';
import {expect} from 'chai';
import {mount} from 'enzyme';
import App from './App';

describe('App', () => {
  let wrapper;

  afterEach(() => wrapper.detach());

  it('should have "O" after second user clicks', () => {
    wrapper = mount(
      <App/>, {attachTo: document.createElement('div')}
    );
    wrapper.find('[data-hook="cell"]').at(0).simulate('click');
    expect(wrapper.find('[data-hook="cell"]').at(0).text()).to.eq('X');
    wrapper.find('[data-hook="cell"]').at(1).simulate('click');
    expect(wrapper.find('[data-hook="cell"]').at(1).text()).to.eq('O');
  });
});
