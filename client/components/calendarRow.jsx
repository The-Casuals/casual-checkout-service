import React from 'react';

import CalendarCell from './calendarCell';

const CalendarRow = ({ row }) => {
  const cells = [];
  for (let i = 0; i < 7; i += 1) {
    if (row[i]) {
      cells.push(<CalendarCell cellInfo={row[i]} />);
    } else {
      cells.push(<CalendarCell />);
    }
  }
  return (
    <tr>
      {cells}
    </tr>
  );
};

export default CalendarRow;