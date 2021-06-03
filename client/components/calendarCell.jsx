import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Td = styled.td`
  text-decoration: ${(props) => (props.crossOut ? 'line-through' : 'none')};
  font-size: 14px;
  color: ${(props) => (props.crossOut ? 'rgb(176, 176, 176)' : 'rgb(34, 34, 34)')};
  font-weight: ${(props) => (props.crossOut ? '300' : '500')};
  height: 40px;
  width: 40px;
  background: rgb(255, 255, 255);
  text-align: center;
  vertical-align: middle;
`;

const Cell = styled.div`;
  :hover {
    border: 1.5px solid rgb(34, 34, 34);
    border-radius: 100px;
  }
  height: 40px;
  width: 40px;

  box-sizing: border-box;
  margin-left: 1px;
  margin-right: 1px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 100%;
  position: relative;
`;

const Hover = styled.div`
  background: rgb(247, 247, 247);
  background: #f1efef;
  height: 40px;
  width: 40px;
  box-sizing: border-box;
  margin-left: 1px;
  margin-right: 1px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
`;

const UnavailableCell = styled.div`
  height: 40px;
  width: 40px;
  box-sizing: border-box;
  margin-left: 1px;
  margin-right: 1px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 100%;
  position: relative;
`;

const ClickedCell = styled.div`
  height: 40px;
  width: 40px;
  text-align: center;
  vertical-align: middle;
  box-sizing: border-box;
  margin-left: 1px;
  margin-right: 1px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 100%;
  position: relative;
  background: rgb(34, 34, 34);
  border: 1.5px solid rgb(34, 34, 34);
  color: rgb(255, 255, 255);
`;

class CalendarCell extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleHover = this.handleHover.bind(this);
  }

  handleClick() {
    const { handleDateClick, cellInfo } = this.props;
    const { month, day } = cellInfo;
    handleDateClick(month, day);
  }

  handleHover(e) {
    const { cellHover, cellInfo } = this.props;
    const { month, day } = cellInfo;
    if (e.type === 'mouseenter') {
      cellHover(month, day);
    } else {
      cellHover();
    }
  }

  whichCellStyle() {
    const { cellInfo } = this.props;

    if (cellInfo) {
      // function
      const {
        checkinDate, checkoutDate, availableAfterCheckin, hoverDate,
        today,
      } = this.props;
      const checkinMonth = checkinDate.month;
      const checkinDay = checkinDate.day;
      const checkoutMonth = checkoutDate.month;
      const checkoutDay = checkoutDate.day;
      const hoverMonth = hoverDate.month;
      const hoverDay = hoverDate.day;
      const { month, day, available } = cellInfo;

      const isCheckinDay = (month === checkinMonth && day === checkinDay);
      const isCheckoutDay = (month === checkoutMonth && day === checkoutDay);
      if ((day <= today.day && month === today.month) || (month < today.month)) {
        return (
          <Td crossOut>
            <UnavailableCell>{day}</UnavailableCell>
          </Td>
        );
      }
      if (isCheckinDay || isCheckoutDay) {
        return (
          <Td crossOut={available === 1}>
            <ClickedCell onClick={this.handleClick} data-testid="clicked">
              {day}
            </ClickedCell>
          </Td>
        );
      }

      // check in been clicked
      if (checkinDay) {
        if (month === checkinMonth && (day > checkinDay && day <= availableAfterCheckin)) {
          if (month >= checkinMonth && month <= hoverMonth && day > checkinDay && day <= hoverDay) {
            return (
              <Td crossOut={available === 1}>
                <Hover
                  onClick={this.handleClick}
                  onMouseEnter={this.handleHover}
                  onMouseLeave={this.handleHover}
                  data-testid="hover"
                >
                  {day}
                </Hover>
              </Td>
            );
          }
          return (
            <Td crossOut={available === 1}>
              <Cell
                onClick={this.handleClick}
                onMouseEnter={this.handleHover}
                onMouseLeave={this.handleHover}
              >
                {day}
              </Cell>
            </Td>
          );
        }
        return (
          <Td crossOut>
            <UnavailableCell>{day}</UnavailableCell>
          </Td>
        );
      }
      if (available === 0) {
        return (
          <Td crossOut={false}>
            <Cell
              onClick={this.handleClick}
              onMouseEnter={this.handleHover}
              onMouseLeave={this.handleHover}
            >
              {day}
            </Cell>
          </Td>
        );
      }
      return (
        <Td crossOut>
          <UnavailableCell>{day}</UnavailableCell>
        </Td>
      );
    }
    // no cell Info
    return (
      <Td data-testid="unavailable" crossOut={false} />
    );
  }

  render() {
    return this.whichCellStyle();
  }
}

export default CalendarCell;

CalendarCell.propTypes = {
  availableAfterCheckin: PropTypes.number,
  cellInfo: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    available: PropTypes.number.isRequired,
    dayOfWeek: PropTypes.number.isRequired,
    day: PropTypes.number.isRequired,
    month: PropTypes.number.isRequired,
  }),
  handleDateClick: PropTypes.func,
  checkinDate: PropTypes.shape({
    month: PropTypes.number,
    day: PropTypes.number,
  }),
  checkoutDate: PropTypes.shape({
    month: PropTypes.number,
    day: PropTypes.number,
  }),
  today: PropTypes.shape({
    month: PropTypes.number,
    day: PropTypes.number,
  }),
  cellHover: PropTypes.func,
  hoverDate: PropTypes.shape({
    month: PropTypes.number,
    day: PropTypes.number,
  }),
};

CalendarCell.defaultProps = {
  checkinDate: {},
  checkoutDate: {},
  today: {},
  hoverDate: {},
  availableAfterCheckin: 0,
  cellInfo: undefined,
  cellHover: () => {},
  handleDateClick: () => {},
};
