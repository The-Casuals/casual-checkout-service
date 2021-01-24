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

const I = styled.i`
  height: 12px;
  width: 12px;
`;

const Button = styled.button`
  appearance: none !important;
  display: inline-block !important;
  border-radius: 50% !important;
  border: none !important;
  outline: none !important;
  margin: 0px !important;
  padding: 0px !important;
  color: rgb(34, 34, 34) !important;
  cursor: pointer !important;
  touch-action: manipulation !important;
  position: relative !important;
  background: transparent !important;
  transition: -ms-transform 0.25s ease 0s, -webkit-transform 0.25s ease 0s, transform 0.25s ease 0s !important;
  z-index: 999;
`;

const ButtonDivLeft = styled.div`
  position: absolute !important;
  top: 154px !important;
  left: 37px !important;
`;

const ButtonDivRight = styled.div`
  position: absolute !important;
  top: 154px !important;
  right: 37px !important;
`;

class CalendarCarousel extends React.Component {
  constructor(props) {
    super(props);

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
  }

  render() {
    const { availability, handleDateClick, cellHover, availableAfterCheckin, translateRight } = this.props;
    const { checkinDate, hoverDate, checkoutDate, focus, translate, translateLeft } = this.props;
    return (
      <CarouselContainer>
        <ButtonDivLeft>
          <Button disabled={translate === 320} onClick={translateLeft}>
            <I className="fas fa-chevron-left"></I>
          </Button>
        </ButtonDivLeft>
        <ButtonDivRight>
          <Button disabled={translate === -2880} onClick={translateRight}>
            <I className="fas fa-chevron-right"></I>
          </Button>
        </ButtonDivRight>
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
              availableAfterCheckin={availableAfterCheckin}
            />
          ))}
        </CalendarCarouselTransform>
      </CarouselContainer>

    );
  }
}

export default CalendarCarousel;
