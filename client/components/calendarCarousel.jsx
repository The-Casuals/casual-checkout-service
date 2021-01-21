import React from 'react';
import styled from 'styled-components';
import CalendarTable from './calendarTable';

const CalendarCarouselTransform = styled.div`
  display: flex;
  left: -310px;
  position: relative;
  transform: translateX(${(props) => props.translate}px);
  transition: transform .2s ease-in-out;
`;

const CarouselContainer = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
`;
const ButtonLeft = styled.div`
  position: absolute;
  top: 26%;
  left: 5%;
  z-index: 20;
`;

const ButtonRight = styled.div`
  position: absolute;
  top: 26%;
  right: 5%;
  z-index: 20;
`;

class CalendarCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      translate: 0,
    };
    this.months = {
      0: 'January 2021',
      1: 'February 2021',
      2: 'March 2021',
      3: 'April 2021',
      4: 'May 2021',
      5: 'June 2021',
      6: 'July 2021',
      7: 'August 2021',
      8: 'September 2021',
      9: 'October 2021',
      10: 'November 2021',
      11: 'December 2021',
    };
    this.translateLeft = this.translateLeft.bind(this);
    this.translateRight = this.translateRight.bind(this);
  }

  translateLeft() {
    this.setState(state => ({
      translate: state.translate + 320,
    }));
  }

  translateRight() {
    this.setState(state => ({
      translate: state.translate - 320,
    }));
  }

  render() {
    const { availability, handleDateClick, cellHover} = this.props;
    const { checkinDate, hoverDate, checkoutDate, focus } = this.props;
    const { translate } = this.state;
    return (
      <CarouselContainer>
        <ButtonLeft onClick={this.translateLeft}>L</ButtonLeft>
        <ButtonRight onClick={this.translateRight}>R</ButtonRight>
        <CalendarCarouselTransform translate={translate}>
          {availability.map((month, i) => (
            <CalendarTable
              handleDateClick={handleDateClick}
              month={month}
              title={this.months[i]}
              key={this.months[i]}
              cellHover={cellHover}
              checkinDate={checkinDate}
              hoverDate={hoverDate}
              checkoutDate={checkoutDate}
              focus={focus}
            />
          ))}
        </CalendarCarouselTransform>
      </CarouselContainer>

    );
  }
}

export default CalendarCarousel;
