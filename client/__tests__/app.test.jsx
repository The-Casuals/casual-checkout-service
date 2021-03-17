/* eslint-disable */
import React from 'react';
import {mount, shallow, render} from 'enzyme';

import axios from 'axios';

import App from '../components/App'
import CheckoutBox from '../components/checkoutBox';
import NavBar from '../components/navBar';
import CalendarBox from '../components/calendarBox';
import InputBox from '../components/inputBox';
import CalendarTable from '../components/calendarTable';

import { response } from '../../testData.js';

jest.mock('axios');

describe('<App />', () => {
  test('shallow renders', () => {
    const resp = {data: response};
    axios.get.mockResolvedValue(resp);
    const wrapper = mount(<App id={1} />);
    console.log(wrapper.debug());
    expect(wrapper.find('.rowContainer').hostNodes()).toHaveLength(1);
  });
  // test('contains checkoutBox', () => {
  //   const wrapper = shallow(<App />);
  //   expect(wrapper.find(CheckoutBox)).toHaveLength(1);
  // });
  // test('does not have navBar', () => {
  //   const wrapper = shallow(<App />);
  //   expect(wrapper.find(NavBar)).toHaveLength(0);
  // });
  // test('does not have CalendarBox', () => {
  //   const wrapper = shallow(<App />);
  //   expect(wrapper.find(CalendarBox)).toHaveLength(0);
  // });
  // test('does have InputBox mount', () => {
  //   const wrapper = mount(<App />);
  //   expect(wrapper.find(InputBox)).toHaveLength(1);
  // });
});

