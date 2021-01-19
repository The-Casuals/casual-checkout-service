import React from 'react';
import styled from 'styled-components';
import CalendarRow from './calendarRow';

const Table = styled.table`
  margin: 20px auto;
  color: rgb(34, 34, 34);
  margin-left: 30px;
  margin-right: 30px;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
`;

const TableBody = styled.tbody`
  display: table-row-group;
  vertical-align: middle;
  border-color: inherit;
`;

/*eslint-disable*/
class CalendarTable extends React.Component {
  constructor(props) {
    super(props);
    let { month } = this.props;
    let calendarRows = [[], [], [], [], [], []];
    let calendarRow = 0;
    for (let day of month) {
      calendarRows[calendarRow][day.dayOfWeek] = day;
      if (day.dayOfWeek === 6) {
        calendarRow += 1;
      }
    }
    let rowsToRender = [];
    for (let row of calendarRows) {
      if (row.filter(info => info !== undefined).length > 0) {
        let calRow = <CalendarRow row={row} />
        rowsToRender.push(calRow);
      }

    }
    this.state = {
      rows: rowsToRender,
    }
    this.ref = React.createRef();
  }

  render() {
    return (
      <Table>
        <thead>
          <tr>
            <th>Su</th>
            <th>Mo</th>
            <th>Tu</th>
            <th>We</th>
            <th>Th</th>
            <th>Fr</th>
            <th>Sa</th>
          </tr>

        </thead>
        <TableBody>
          {this.state.rows}
        </TableBody>
      </Table>
    );
  }
}

export default CalendarTable;
