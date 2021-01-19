import React from 'react';
import styled from 'styled-components';
import CalendarTable from './calendarTable';

const FlexDiv1 = styled.div`
  flex: 1;
  width: 320px;
`;

const CalendarCarouselTransform = styled.div`
  display: flex;
  width: 1280;
  left: -310px;
  position: relative;
`;
const HeaderFlex = styled.div`
  flex: 1;
  display: flex;
  vertical-align: center;
`;
const MonthContainer = styled.div`
  margin: 0 auto;
`;
const CalendarHeading = styled.h3`
  color: rgb(34, 34, 34);
  font-size: 1em;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;
`;
class CalendarCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLeftMonth: 1,
    };
    this.months = {
      0: 'January 2021',
      1: 'February 2021',
      2: 'March 2021',
      3: 'April 2021',
      4: 'May 2021',
      5: 'June: 2021',
      6: 'July: 2021',
      7: 'August: 2021',
      8: 'September: 2021',
      9: 'October 2021',
      10: 'November 2021',
      11: 'December 2021',
    };
  }

  render() {
    const { availability } = this.props;
    const { currentLeftMonth } = this.state;
    return (
      <CalendarCarouselTransform>
        <FlexDiv1>
          <HeaderFlex>
            <MonthContainer>
              <CalendarHeading>{this.months[currentLeftMonth - 1]}</CalendarHeading>
            </MonthContainer>
          </HeaderFlex>
          <CalendarTable month={availability[currentLeftMonth - 1]} />
        </FlexDiv1>
        <FlexDiv1>
          <HeaderFlex>
            <MonthContainer>
              <CalendarHeading>{this.months[currentLeftMonth]}</CalendarHeading>
            </MonthContainer>
          </HeaderFlex>
          <CalendarTable month={availability[currentLeftMonth]} />
        </FlexDiv1>
        <FlexDiv1>
          <HeaderFlex>
            <MonthContainer>
              <CalendarHeading>{this.months[currentLeftMonth + 1]}</CalendarHeading>
            </MonthContainer>
          </HeaderFlex>
          <CalendarTable month={availability[currentLeftMonth + 1]} />
        </FlexDiv1>
        <FlexDiv1>
          <HeaderFlex>
            <MonthContainer>
              <CalendarHeading>{this.months[currentLeftMonth + 2]}</CalendarHeading>
            </MonthContainer>
          </HeaderFlex>
          <CalendarTable month={availability[currentLeftMonth + 2]} />
        </FlexDiv1>
      </CalendarCarouselTransform>
    );
  }
}

export default CalendarCarousel;
