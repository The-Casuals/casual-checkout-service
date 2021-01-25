import React from 'react';

import CalendarCell from './calendarCell';

const CalendarRow = ({ row, handleDateClick, cellHover, checkinDate, hoverDate, checkoutDate, availableAfterCheckin }) => {
  const cells = [];
  for (let i = 0; i < 7; i += 1) {
    if (row[i]) {
      cells.push(<CalendarCell
        handleDateClick={handleDateClick}
        cellInfo={row[i]}
        cellHover={cellHover}
        checkinDate={checkinDate}
        hoverDate={hoverDate}
        checkoutDate={checkoutDate}
        key={JSON.stringify(row[i])}
        availableAfterCheckin = {availableAfterCheckin}
      />);
    } else {
      cells.push(<CalendarCell key={i} />);
    }
  }
  return (
    <tr>
      {cells}
    </tr>
  );
};

export default CalendarRow;