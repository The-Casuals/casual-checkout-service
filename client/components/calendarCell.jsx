import React from 'react';
import styled from 'styled-components';

const Td = styled.td`
  text-decoration: ${props => props.crossOut ? "line-through" : "none"};
  font-size: 14px;
  color: ${props => props.crossOut ? "rgb(176, 176, 176)" : "rgb(34, 34, 34)"};
  font-weight: ${props => props.crossOut ? "400" : "600"};
  height: 40px;
  width: 40px;
`;

const Cell = styled.div`;
  background: rgb(255, 255, 255);
  :hover {
    border: 1.5px solid rgb(34, 34, 34);
    border-radius: 100px;
  }
  height: 40px;
  width: 40px;
  text-align: center;
  vertical-align: middle;
  box-sizing: border-box;
  margin-left: 1px !important;
  margin-right: 1px !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  flex-direction: column !important;
  border-radius: 100% !important;
  position: relative !important;
`;

const Hover = styled.div`
  background: rgb(247, 247, 247);

  height: 40px;
  width: 40px;
  text-align: center;
  vertical-align: middle;
  box-sizing: border-box;
  margin-left: 1px !important;
  margin-right: 1px !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  flex-direction: column !important;
  position: relative !important;
`;

const UnavailableCell = styled.div`
  background: rgb(255, 255, 255);
  height: 40px;
  width: 40px;
  text-align: center;
  vertical-align: middle;
  box-sizing: border-box;
  margin-left: 1px !important;
  margin-right: 1px !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  flex-direction: column !important;
  border-radius: 100% !important;
  position: relative !important;
`;

const ClickedCell = styled.div`
  height: 40px;
  width: 40px;
  text-align: center;
  vertical-align: middle;
  box-sizing: border-box;
  margin-left: 1px !important;
  margin-right: 1px !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  flex-direction: column !important;
  border-radius: 100% !important;
  position: relative !important;
  background: rgb(34, 34, 34) !important;
  border: 1.5px solid rgb(34, 34, 34) !important;
  color: rgb(255, 255, 255) !important;
`;

class CalendarCell extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { handleDateClick } = this.props;
    const { cellInfo } = this.props;
    const { month, day } = cellInfo;
    handleDateClick(month, day);
  }

  render() {
    const { cellInfo, cellHover, checkinDate, hoverDate, checkoutDate } = this.props;
    if (cellInfo) {
      const { month, day, available } = cellInfo;
      const checkMonth = checkinDate.month;
      const checkDay = checkinDate.day;
      const hoverMonth = hoverDate.month;
      const hoverDay = hoverDate.day;
      if ((month === checkMonth && day === checkDay) || (month === checkoutDate.month && day === checkoutDate.day)) {
        return (
          <Td crossOut={available === 1}>
            <ClickedCell onClick={this.handleClick}>
              {day}
            </ClickedCell>
          </Td>
        );
      }
      if (month >= checkMonth && month <= hoverMonth && day > checkDay && day <= hoverDay) {
        return (
          <Td crossOut={available === 1}>
            <Hover
              onClick={this.handleClick}
              onMouseEnter={() => cellHover(month, day)}
              onMouseLeave={() => cellHover()}
            >
              {day}
            </Hover>
          </Td>
        );
      }
      if (month >= checkMonth && month <= checkoutDate.month && day > checkDay && day < checkoutDate.day) {
        return (
          <Td crossOut={available === 1}>
            <Hover
              onClick={this.handleClick}
              onMouseEnter={() => cellHover(month, day)}
              onMouseLeave={() => cellHover()}
            >
              {day}
            </Hover>
          </Td>
        );
      }
      if (available === 0) {
        return (
          <Td crossOut={available === 1}>
            <Cell
              onClick={this.handleClick}
              onMouseEnter={() => cellHover(month, day)}
              onMouseLeave={() => cellHover()}
            >
              {day}
            </Cell>
          </Td>
        );
      }
      return (
        <Td crossOut={available === 1}>
          <UnavailableCell>{day}</UnavailableCell>
        </Td>
      );
    }
    return (
      <Td crossOut={false} />
    );
  }
}

export default CalendarCell;
