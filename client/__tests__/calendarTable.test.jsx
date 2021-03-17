import React from 'react';
import {mount, shallow, render} from 'enzyme';

import CalendarTable from '../components/CalendarTable.jsx';
import CalendarRow from '../components/calendarRow';

const { JANUARY, FEBRUARY } = require('../../testData.js');

const focus = 'checkin';
const availableAfterCheckin = 0;
const handleDateClick = () => {};
const checkinDate = {};
const checkoutDate = {};
const cellHover = () => {};
const hoverDate = {};
const today = {
  month: 0,
  day: 1,
};

describe('<CalendarTable />', () => {
  test('table contains right amount of rows for id 1 january', () => {
    const month = JANUARY;
    const title = 'January 2021';
    const wrapper = mount(
      <CalendarTable
        handleDateClick={handleDateClick}
        month={month}
        title={title}
        cellHover={cellHover}
        checkinDate={checkinDate}
        hoverDate={hoverDate}
        checkoutDate={checkoutDate}
        focus={focus}
        availableAfterCheckin={availableAfterCheckin}
        today={today}
      />
    );
    expect(wrapper.find({'data-testid': 'unavailable'}).hostNodes()).toHaveLength(11);
    expect(wrapper.find(CalendarRow)).toHaveLength(6);
  });
  test('table contains right amount of rows for id 1 feb', () => {
    const month = FEBRUARY;
    const title = 'February 2021';
    const wrapper = mount(
      <CalendarTable
        handleDateClick={handleDateClick}
        month={month}
        title={title}
        cellHover={cellHover}
        checkinDate={checkinDate}
        hoverDate={hoverDate}
        checkoutDate={checkoutDate}
        focus={focus}
        availableAfterCheckin={availableAfterCheckin}
        today={today}
      />
    );
    expect(wrapper.find(CalendarRow)).toHaveLength(5);
  });
});
