import React from 'react';
import {mount, shallow, render} from 'enzyme';

import CalendarCell from '../components/CalendarCell.jsx';

describe('<CalendarCell />', () => {
  test('clicking on cell works as expected', () => {
    const cellInfo = {
      "_id": "6012fc40e7147d5812577186",
      "available": 0,
      "dayOfWeek": 5,
      "day": 12,
      "month": 1
    };
    const handleDateClick = jest.fn();
    const checkinDate = {
      day: 12,
      month: 1,
    };
    //january 1st
    const today = {
      month: 0,
      day: 1,
    }
    const wrapper = mount(<CalendarCell cellInfo={cellInfo} handleDateClick={handleDateClick} checkinDate={checkinDate} today={today} />);
    wrapper.find('div').simulate('click');
    expect(handleDateClick).toHaveBeenCalledTimes(1);
    expect(handleDateClick).toHaveBeenCalledWith(cellInfo.month, cellInfo.day);
  });

  test('cell hover triggers when checkin has been clicked', () => {
    const cellInfo = {
      "_id": "6012fc40e7147d5812577186",
      "available": 0,
      "dayOfWeek": 5,
      "day": 12,
      "month": 1
    };
    const cellHover = jest.fn();
    const handleDateClick = () => {};
    const checkinDate = {
      day: 11,
      month: 1,
    };
    //january 1st
    const today = {
      month: 1,
      day: 1,
    };
    const wrapper = mount(
      <CalendarCell
        cellInfo={cellInfo}
        handleDateClick={handleDateClick} checkinDate={checkinDate}
        today={today}
        cellHover={cellHover}
        availableAfterCheckin={15}
      />
    );
    const cell = wrapper.find('div');
    cell.simulate('mouseenter');
    expect(cellHover).toHaveBeenCalledTimes(1);
    expect(cellHover).toHaveBeenCalledWith(cellInfo.month, cellInfo.day);
    cell.simulate('mouseleave');
    expect(cellHover).toHaveBeenCalledTimes(2);
    expect(cellHover).toHaveBeenCalledWith();
  });

  test('cell hover does not trigger when if cell is unavailable', () => {
    const cellInfo = {
      "_id": "6012fc40e7147d5812577186",
      "available": 1,
      "dayOfWeek": 5,
      "day": 12,
      "month": 1
    };
    const cellHover = jest.fn();
    const handleDateClick = () => {};
    const checkinDate = {
      day: 11,
      month: 1,
    };
    //january 1st
    const today = {
      month: 1,
      day: 1,
    };
    const wrapper = mount(
      <CalendarCell
        cellInfo={cellInfo}
        handleDateClick={handleDateClick} checkinDate={{}}
        today={today}
        cellHover={cellHover}
        availableAfterCheckin={15}
      />
    );
    const cell = wrapper.find('div');
    cell.simulate('mouseenter');
    expect(cellHover).toHaveBeenCalledTimes(0);
  });
});
