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
    delete response[availability];
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

CalendarBoxInput.propTypes = {
  focus: PropTypes.string.isRequired,
  setFocus: PropTypes.func.isRequired,
  checkinDate: PropTypes.shape({
    month: PropTypes.number,
    day: PropTypes.number,
  }),
  checkoutDate: PropTypes.shape({
    month: PropTypes.number,
    day: PropTypes.number,
  }),
  eraseStateDate: PropTypes.func.isRequired,
};
