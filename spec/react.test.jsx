/* eslint-disable */
import React from 'react';
import {mount, shallow} from 'enzyme';
import App from '../client/components/App'
import CheckoutBox from '../client/components/CheckoutBox';

describe('<App />', () => {
  it('shallow renders', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.rowContainer')).toHaveLength(1);
    expect(wrapper.find(CheckoutBox)).toHaveLength(1);
  });
  it('contains checkoutBox', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(CheckoutBox)).toHaveLength(1);
  });
});

