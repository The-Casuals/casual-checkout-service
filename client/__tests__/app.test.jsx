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

import axios from 'axios';
import Users from './users';

jest.mock('axios');

test('should fetch users', () => {

  const resp = {data: response};
  axios.get.mockResolvedValue(resp);

  // or you could use the following depending on your use case:
  // axios.get.mockImplementation(() => Promise.resolve(resp))

  return Users.all().then(data => expect(data).toEqual(users));
});

describe('<App />', () => {
  test('shallow renders', () => {
    const wrapper = mount(<App id={1} />);
    expect(wrapper.find('.rowContainer')).toHaveLength(1);
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

App.propTypes = {
  id: PropTypes.number.isRequired,
};

