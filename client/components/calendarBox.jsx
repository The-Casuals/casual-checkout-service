import React from 'react';
import styled from 'styled-components';
import CalendarCarousel from './calendarCarousel';
import CalendarBoxInput from './calendarBoxInput';

const Box = styled.div`
  background: rgb(255, 255, 255);
  border-radius: 16px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 6px 20px;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 30%;
  right: -4%;
  width: 660px;
  z-index: 1;
  min-height: 500px;
`;
const HeaderDiv = styled.div`
  height: 130px;
  width: 100%;
  display: flex;
`;
const DivFlex1 = styled.div`
  flex: 1;
`;
const FlexDiv5 = styled.div`
  flex: 4.54;
  display: flex;
  overflow: hidden;
`;

class CalendarBox extends React.Component {
  constructor(props) {
    super(props);
    this.wrapperRef = React.createRef();
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.cellHover = this.cellHover.bind(this);
    const { availability, whichFocus } = this.props;
    this.state = {
      availability,
      hover: {},
      focus: whichFocus,
    };
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  handleClickOutside(event) {
    const { inputClick } = this.props;
    if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
      inputClick(false, 'calendar');
    }
  }

  cellHover(hoverM, hoverD) {
    if (!hoverM) {
      this.setState({
        hover: {},
      });
    }
    const { availability } = this.state;
    const { pricing, checkinDate } = this.props;
    const { minStay } = pricing;

    // if checkin has been clicked
    if (checkinDate.month) {
      const { month, day } = checkinDate;
      const potentialDays = availability[month].slice(day, hoverD);
      const availableDays = potentialDays.filter((dayInfo) => dayInfo.available === 0);
      const potentialStay = hoverD - day;
      if (potentialStay === availableDays.length && potentialStay > minStay) {
        this.setState({
          hover: {
            month: hoverM,
            day: hoverD,
          },
        });
      }
    }
    console.log(hoverM, hoverD);
  }

  makeNewAvailability() {
    const newAvailability = [];
    const { availability } = this.state;
    availability.forEach((month) => {
      newAvailability.push(month);
    });
    return newAvailability;
  }

  render() {
    const { handleDateClick, checkinDate, checkoutDate } = this.props;
    const {
      availability,
      hover,
    } = this.state;

    return (
      <Box ref={this.wrapperRef}>
        <HeaderDiv>
          <DivFlex1 />
          <CalendarBoxInput checkinDate={checkinDate} checkoutDate={checkoutDate} />
        </HeaderDiv>
        <FlexDiv5>
          <CalendarCarousel
            handleDateClick={handleDateClick}
            availability={availability}
            cellHover={this.cellHover}
            checkinDate={checkinDate}
            hoverDate={hover}
            checkoutDate={checkoutDate}
          />
        </FlexDiv5>
      </Box>
    );
  }
}

export default CalendarBox;
