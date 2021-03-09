import React from 'react';
import { mount, shallow, render } from 'enzyme';

import CalendarCarousel from '../components/calendarCarousel.jsx';
import CalendarTable from '../components/calendarTable.jsx';

const { JANUARY, FEBRUARY, response } = require('../../testData.js');

describe('<CalendarCarousel />', () => {
  test('translation updates', () => {
    const focus = 'checkin';
    const availableAfterCheckin = 20;
    const { availability } = response;
    const checkinDate = {};
    const checkoutDate = {};
    const today = {
      month: 1,
      day: 1
    };
    const translate = 1600 - today.month * 320;
    const translateLeft = jest.fn();
    const translateRight = jest.fn();
    const cellHover = () => {};
    const handleDateClick = () => {};
    const hoverDate = {};
    const wrapper = mount(
      <CalendarCarousel
        availability = {availability}
        translate = {translate}
        translateLeft = {translateLeft}
        translateRight = {translateRight}
        handleDateClick={handleDateClick}
        cellHover={cellHover}
        checkinDate={checkinDate}
        hoverDate={hoverDate}
        checkoutDate={checkoutDate}
        focus={focus}
        availableAfterCheckin={availableAfterCheckin}
        today={today}
      />
    );
    expect(wrapper.find(CalendarTable)).toHaveLength(12);
    // button left
    wrapper.find({ "data-testid": "buttonLeft" }).hostNodes().simulate('click');
    expect(translateLeft).toHaveBeenCalledTimes(1);
    // button right
    wrapper.find({ "data-testid": "buttonRight" }).hostNodes().simulate('click');
    expect(translateRight).toHaveBeenCalledTimes(1);
  });
});
