import React from 'react';
import styled from 'styled-components';

const Td = styled.td`
  text-decoration: ${props => props.crossOut ? "line-through" : "none"};
  font-size: 14px;
  color: ${props => props.crossOut ? "rgb(176, 176, 176)" : "rgb(34, 34, 34)"};
  font-weight: ${props => props.crossOut ? "300" : "500"};
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
  background: #f1efef;
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
/*eslint-disable*/
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

  whichCellStyle() {
    const { cellInfo } = this.props;

    if (cellInfo) {
      // function
      const { cellHover } = this.props;
      const { checkinDate, checkoutDate, availableAfterCheckin, hoverDate } = this.props;
      const checkinMonth = checkinDate.month;
      const checkinDay = checkinDate.day;
      const checkoutMonth = checkoutDate.month;
      const checkoutDay = checkoutDate.day;
      const hoverMonth = hoverDate.month;
      const hoverDay = hoverDate.day;
      const { month, day, available } = cellInfo;

      if ((month === checkinMonth && day === checkinDay) || (month === checkoutMonth && day === checkoutDay)) {
        return (
          <Td crossOut={available === 1}>
            <ClickedCell onClick={this.handleClick}>
              {day}
            </ClickedCell>
          </Td>
        );
      }

      // check in been clicked
      if (checkinMonth) {
        if (month === checkinMonth && (day > checkinDay && day <= availableAfterCheckin)) {
          if (month >= checkinMonth && month <= hoverMonth && day > checkinDay && day <= hoverDay) {
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
          } else {
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

        } else {
          return (
            <Td crossOut={true}>
              <UnavailableCell>{day}</UnavailableCell>
            </Td>
          );
        }


      } else {
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
    }
    // no cell Info
    return (
      <Td crossOut={false} />
    );

  }

  render() {
    return this.whichCellStyle();
  }
}

export default CalendarCell;
