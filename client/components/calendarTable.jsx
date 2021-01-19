import React from 'react';
import styled from 'styled-components';
import CalendarRow from './calendarRow';

const Table = styled.table`
  color: rgb(34, 34, 34);
  margin: 0 13px;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  width: 294px;
`;

const TableBody = styled.tbody`
  display: table-row-group;
  vertical-align: middle;
  border-color: inherit;
`;

const HeaderFlex = styled.div`
  flex: 1;
  display: flex;
  vertical-align: center;
`;
const MonthContainer = styled.div`
  margin: 0 auto;
  font-size: 16px ;
  line-height: 20px ;
  text-align: center ;
  font-weight: 600 ;
  padding-top: 22px;
  padding-bottom: 22px;
`;
const CalendarHeading = styled.h3`
  color: rgb(176, 176, 176)
  font-size: 1em;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif ;
`;

const FlexDiv1 = styled.div`
  flex: 1;
  width: 320px;
`;

const Th = styled.th`
  font-size: 12px ;
  text-align: center ;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif ;
  font-weight: 600 ;
  color: rgb(144, 144, 144);
`

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
      title: this.props.title,
    }

  }

  render() {
    return (
      <FlexDiv1>
        <HeaderFlex>
          <MonthContainer>
            <CalendarHeading>{this.state.title}</CalendarHeading>
          </MonthContainer>
        </HeaderFlex>
        <Table>
          <thead>
            <tr>
              <Th>Su</Th>
              <Th>Mo</Th>
              <Th>Tu</Th>
              <Th>We</Th>
              <Th>Th</Th>
              <Th>Fr</Th>
              <Th>Sa</Th>
            </tr>

          </thead>
          <TableBody>
            {this.state.rows}
          </TableBody>
        </Table>
      </FlexDiv1>
    );
  }
}

export default CalendarTable;