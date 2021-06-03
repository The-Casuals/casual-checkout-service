import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import InputBox from './inputBox';
import PriceBreakdown from './priceBreakdown';
import ReservationButton from './reservationButton';

const StyledDiv = styled.div`
  width: 90%;
  margin: auto;
  margin-top: 48px;
  border-radius: 5px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 120px;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 12px;
  padding: 24px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 16px;
`;

const DivFlex1 = styled.div`
  height: 82px;
  flex: 1 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  flex-direction: column;
`;

const TitleSubHeading = styled.div`
  color: rgb(34, 34, 34);
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  font-weight: 300;
  font-size: 12px;
  line-height: 16px;
  display: flex;
  flex: .5 0 0;
  margin-bottom: 16px;
`;

const TitleTopHeading = styled.div`
  flex: 1 0 0;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  width: 100%;
  margin-bottom: 24px;
`;

const DivFlex = styled.div`
  flex: 1 0 auto;
  display: block;
`;

const TitleItem = styled.div`
  flex: 0 0 auto;
  display: block;
`;

const TitlSpan = styled.span`
  font-size: 22px;
  line-height: 26px;
  color: rgb(34, 34, 34);
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
`;

const SmallSpan = styled.span`
  color: rgb(34, 34, 34);
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  white-space: nowrap;
  padding-left: 4px;
`;

const ReviewsDiv = styled.div`
  display: block;
  flex: 0 0 auto;
`;

const ReviewSpanLeft = styled.span`
  color: rgb(34, 34, 34);
  padding-left: 4px;
  font-weight: 600;
`;

const ReviewSpanRight = styled.span`
  color: rgb(113, 113, 113);
  padding-left: 4px;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  font-weight: 300;
  font-size: 14px;
`;

const SVG = styled.svg`
  display: block;
  height: 16px;
  width: 16px;
  fill: currentcolor;
`;

const StarSpan = styled.span`
  font-size: 14px;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  color: rgb(255, 56, 92);
`;

const CalendarIconDiv = styled.div`
  margin-right: 8px;
  display: block;
`;

const SubSpan = styled.span`
  flex: 0 1 auto;
  margin-right: 8px;
`;

const SubSpanLink = styled.span`
  flex: 1;
  text-decoration: underline;
  font-weight: 600;
  cursor: pointer;
`;

class CheckoutBox extends React.Component {
  static calculateAvailable(month, day, availability) {
    const days = availability[month];
    let lastDayAvailable = day + 1;
    for (; lastDayAvailable < days.length; lastDayAvailable += 1) {
      if (days[lastDayAvailable].available === 1) {
        break;
      }
    }
    return lastDayAvailable;
  }

  constructor(props) {
    super(props);
    const { today } = this.props;
    this.state = {
      checkinDate: {},
      checkoutDate: {},
      focus: 'checkin',
      adults: 1,
      children: 0,
      infants: 0,
      availableAfterCheckin: 0,
      translate: 1600 - today.month * 320,
    };
    this.handleDateClick = this.handleDateClick.bind(this);
    this.setFocus = this.setFocus.bind(this);
    this.eraseStateDate = this.eraseStateDate.bind(this);
    this.updateGuests = this.updateGuests.bind(this);
    this.translateLeft = this.translateLeft.bind(this);
    this.translateRight = this.translateRight.bind(this);
  }

  handleDateClick(month, day) {
    const {
      focus,
      adults,
      children,
      infants,
    } = this.state;
    const { inputClick } = this.props;
    if (focus === 'checkout') {
      this.setState({
        checkoutDate: {
          month,
          day,
        },
      });
      inputClick(false, 'calendar');
      if (adults + children + infants === 1) {
        inputClick(true, 'guest');
      }
    } else {
      this.setState({
        checkinDate: {
          month,
          day,
        },
        focus: 'checkout',
      });
      this.availableAfterCheckin(month, day);
    }
  }

  setFocus(whichFocus) {
    const { checkinDate } = this.state;
    if (!checkinDate.day) {
      this.setState({
        focus: 'checkin',
      });
    } else {
      this.setState({
        focus: whichFocus,
      });
    }
  }

  updateGuests(whichGuest, operator) {
    if (operator === '+') {
      this.setState((state) => ({
        [whichGuest]: state[whichGuest] + 1,
      }));
    } else {
      this.setState((state) => ({
        [whichGuest]: state[whichGuest] - 1,
      }));
    }
  }

  availableAfterCheckin(month, day) {
    const { availability } = this.props;
    const lastDayAvailable = CheckoutBox.calculateAvailable(month, day, availability);
    this.setState({
      availableAfterCheckin: lastDayAvailable,
    });
  }

  eraseStateDate(whichDate) {
    if (whichDate === 'checkinDate') {
      this.setState({
        checkinDate: {},
        checkoutDate: {},
        focus: 'checkin',
      });
    } else {
      this.setState({
        [whichDate]: {},
      });
    }
  }

  translateLeft() {
    this.setState((state) => ({
      translate: state.translate + 320,
    }));
  }

  translateRight() {
    this.setState((state) => ({
      translate: state.translate - 320,
    }));
  }

  render() {
    const {
      availability, pricing, firstDayAvailable, guestInputClick,
      inputClick, renderCalendar, renderGuest, today,
    } = this.props;
    const {
      checkinDate, checkoutDate, focus, availableAfterCheckin,
      adults, children, infants, translate,
    } = this.state;
    const passDownGuests = { adults, children, infants };
    const months = {
      0: 'Jan',
      1: 'Feb',
      2: 'Mar',
      3: 'Apr',
      4: 'May',
      5: 'Jun',
      6: 'Jul',
      7: 'Aug',
      8: 'Sep',
      9: 'Oct',
      10: 'Nov',
      11: 'Dec',
    };
    const priceBreakdown = (
      <PriceBreakdown
        pricing={pricing}
        checkinDate={checkinDate}
        checkoutDate={checkoutDate}
        adults={adults}
        numChildren={children}
      />
    );
    const pricingList = checkinDate.day && checkoutDate.day ? priceBreakdown : <></>;
    const calendarPathTop = 'M 23 21.5 a 2.502 2.502 0 0 0 -2.5 2.5 v 6.767 c 0.182 -0.094 0.354 -0.207 0.5 -0.353 L 29.414 22 c 0.146 -0.146 0.26 -0.318 0.353 -0.5 H 23 Z M 30 5 c 0 -1.103 -0.897 -2 -2 -2 h -5.7 V 1 h -2.6 v 2 h -7.4 V 1 H 9.7 v 2 H 4 c -1.103 0 -2 0.897 -2 2 v 5.5 h 28 V 5 Z M 12.5 7 h -3 V 5 h 3 v 2 Z m 10 0 h -3 V 5 h 3 v 2 Z';
    const calendarPathBottom = 'M 23 18.5 h 7 v -5 H 2 V 26 c 0 2.757 2.243 5 5 5 h 10.5 v -7 c 0 -3.032 2.468 -5.5 5.5 -5.5 Z';
    return (
      <StyledDiv className="checkoutBox">
        <DivFlex1>
          <TitleTopHeading>
            <TitleItem>
              <TitlSpan>{`$${pricing.price || 100}`}</TitlSpan>
              <SmallSpan>/ night</SmallSpan>
            </TitleItem>
            <ReviewsDiv>
              <StarSpan>&#9733;</StarSpan>
              <ReviewSpanLeft>4.82</ReviewSpanLeft>
              <ReviewSpanRight>(267)</ReviewSpanRight>
            </ReviewsDiv>
          </TitleTopHeading>
          <TitleSubHeading>
            <CalendarIconDiv>
              <SVG viewBox="0 0 32 32">
                <path d={calendarPathTop} />
                <path d={calendarPathBottom} />
              </SVG>
            </CalendarIconDiv>
            <SubSpan>
              {`Earliest availability is ${months[firstDayAvailable.month]} ${firstDayAvailable.day}`}
            </SubSpan>
            <SubSpanLink onClick={() => inputClick(true, 'calendar')}>Add check-in date</SubSpanLink>
          </TitleSubHeading>
        </DivFlex1>
        <InputBox
          availability={availability}
          renderGuest={renderGuest}
          renderCalendar={renderCalendar}
          inputClick={inputClick}
          pricing={pricing}
          handleDateClick={this.handleDateClick}
          checkinDate={checkinDate}
          checkoutDate={checkoutDate}
          focus={focus}
          setFocus={this.setFocus}
          availableAfterCheckin={availableAfterCheckin}
          eraseStateDate={this.eraseStateDate}
          updateGuests={this.updateGuests}
          passDownGuests={passDownGuests}
          translate={translate}
          translateLeft={this.translateLeft}
          translateRight={this.translateRight}
          guestInputClick={guestInputClick}
          today={today}
        />
        <DivFlex>
          <ReservationButton
            checkinDate={checkinDate}
            checkoutDate={checkoutDate}
            inputClick={inputClick}
          />
        </DivFlex>
        {pricingList}
      </StyledDiv>
    );
  }
}

export default CheckoutBox;

CheckoutBox.propTypes = {
  availability: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        _id: PropTypes.string.isRequired,
        available: PropTypes.number.isRequired,
        dayOfWeek: PropTypes.number.isRequired,
        day: PropTypes.number.isRequired,
        month: PropTypes.number.isRequired,
      }),
    ),
  ).isRequired,
  renderGuest: PropTypes.bool.isRequired,
  renderCalendar: PropTypes.bool.isRequired,
  inputClick: PropTypes.func.isRequired,
  pricing: PropTypes.shape({
    maxGuests: PropTypes.number,
    price: PropTypes.number,
    serviceFee: PropTypes.number,
    cleaningFee: PropTypes.number,
    minStay: PropTypes.number,
  }).isRequired,
  firstDayAvailable: PropTypes.shape({
    month: PropTypes.number,
    day: PropTypes.number,
  }).isRequired,
  today: PropTypes.shape({
    month: PropTypes.number,
    day: PropTypes.number,
  }).isRequired,
  guestInputClick: PropTypes.func.isRequired,
};
