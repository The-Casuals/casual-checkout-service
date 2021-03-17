import React from 'react';
import { mount, shallow, render } from 'enzyme';

import CalendarBoxInput from '../components/calendarBoxInput.jsx';

const { JANUARY, FEBRUARY, response } = require('../../testData.js');

describe('<CalendarBox />', () => {
  test('translation updates', () => {
    const focus = 'checkin';
    const checkinDate = {};
    const checkoutDate = {};
    const today = {
      month: 1,
      day: 1
    };
    const setFocus = () => {};
    const eraseStateDate = jest.fn();
    const pricing = response;
    const wrapper = mount(
      <CalendarBoxInput
        checkinDate={checkinDate}
        checkoutDate={checkoutDate}
        focus={focus}
        setFocus={setFocus}
        eraseStateDate={eraseStateDate}
      />
    );
  });
});

