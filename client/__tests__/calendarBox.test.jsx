import React from 'react';
import { mount, shallow, render } from 'enzyme';

import CalendarBox from '../components/calendarBox.jsx';
import CalendarBoxInput from '../components/calendarBoxInput.jsx';
import CalendarCarousel from '../components/calendarCarousel.jsx';

const { JANUARY, FEBRUARY, response } = require('../../testData.js');

describe('<CalendarBox />', () => {
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
    const translateLeft = () => {};
    const translateRight = () => {};
    const cellHover = () => {};
    const handleDateClick = () => {};
    const hoverDate = {};
    const inputClick = jest.fn();
    const setFocus = () => {};
    const eraseStateDate = jest.fn();
    delete response[availability];
    const pricing = response;

    const wrapper = mount(
      <CalendarBox
        availability={availability}
        translate={translate}
        translateLeft={translateLeft}
        translateRight={translateRight}
        handleDateClick={handleDateClick}
        cellHover={cellHover}
        checkinDate={checkinDate}
        hoverDate={hoverDate}
        checkoutDate={checkoutDate}
        focus={focus}
        availableAfterCheckin={availableAfterCheckin}
        today={today}
        inputClick={inputClick}
        setFocus={setFocus}
        eraseStateDate={eraseStateDate}
        pricing={pricing}
      />
    );
    expect(wrapper.find(CalendarBoxInput)).toHaveLength(1);
    expect(wrapper.find(CalendarCarousel)).toHaveLength(1);
    wrapper.find({'data-testid': 'clear'}).hostNodes().simulate('click');
    expect(eraseStateDate).toHaveBeenCalledTimes(2);
    expect(eraseStateDate.mock.calls[0][0]).toBe('checkinDate');
    expect(eraseStateDate.mock.calls[1][0]).toBe('checkoutDate');
    wrapper.find({'data-testid': 'close'}).hostNodes().simulate('click');
    expect(inputClick).toHaveBeenCalledTimes(1);
    expect(inputClick.mock.calls[0][0]).toBe(false);
    expect(inputClick.mock.calls[0][1]).toBe('calendar');
  });
});
