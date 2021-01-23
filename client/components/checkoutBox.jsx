import React from 'react';
import styled from 'styled-components';
import InputBox from './inputBox';

const StyledDiv = styled.div`
  height: 300px;
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
  flex: 1 1 0;
  display: flex;
  justify-content: space-between !important;
  align-items: baseline !important;
`;

const DivFlex = styled.div`
  flex: 1 1 0;
  display: flex;
  align-items: flex-end;
`;

const ReservationButton = styled.button`
  background: var(--dls19-brand-gradient, linear-gradient(to right, #E61E4D 0%, #E31C5F 50%, #D70466 100%)) ;
  cursor: pointer ;
  display: inline-block ;
  margin: 0px 2px ;
  position: relative ;
  text-align: center ;
  text-decoration: none ;
  touch-action: manipulation ;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif ;
  font-size: 16px ;
  line-height: 20px ;
  font-weight: 600 ;
  border-radius: 8px ;
  outline: none ;
  padding: 14px 24px ;
  transition: box-shadow 0.2s ease 0s, -ms-transform 0.1s ease 0s, -webkit-transform 0.1s ease 0s, transform 0.1s ease 0s ;
  border: none ;
  background: linear-gradient(to right, rgb(230, 30, 77) 0%, rgb(227, 28, 95) 50%, rgb(215, 4, 102) 100%) ;
  color: rgb(255, 255, 255) ;
  width: 100% ;
  height: 48px;
`;

const Span = styled.span`
  position: absolute !important;
  top: 0px !important;
  left: 0px !important;
  right: 0px !important;
  bottom: 0px !important;
  width: 100% !important;
  height: 100% !important;
  -webkit-mask-image: -webkit-radial-gradient(center, white, black) !important;
  overflow: hidden !important;
  border-radius: 8px !important;
`;

// const InnerSpan = styled.span`
//   background-position: calc((100 - var(--mouse-x, 0)) * 1%) calc((100 - var(--mouse-y, 0)) * 1%);
//   --mouse-x: 90.9204;
//   --mouse-y: 2.08333;
//   background-image: var(--dls19-brand-gradient-radial, radial-gradient(circle at center, #FF385C 0%, #E61E4D 27.5%, #E31C5F 40%, #D70466 57.5%, #BD1E59 75%, #BD1E59 100% )) !important;
// `;
const TitleSpan = styled.span`
  display: block !important;
  position: relative !important;
  pointer-events: none !important;
  cursor: pointer !important;
  display: inline-block !important;
  margin: 0px !important;
  position: relative !important;
  text-align: center !important;
  text-decoration: none !important;
  touch-action: manipulation !important;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;
  font-size: 16px !important;
  line-height: 20px !important;
  font-weight: 600 !important;
  border-radius: 8px !important;
  outline: none !important;
  padding: 14px 24px !important;
  transition: box-shadow 0.2s ease 0s, -ms-transform 0.1s ease 0s, -webkit-transform 0.1s ease 0s, transform 0.1s ease 0s !important;
  border: none !important;
  background: linear-gradient(to right, rgb(230, 30, 77) 0%, rgb(227, 28, 95) 50%, rgb(215, 4, 102) 100%) !important;
  color: rgb(255, 255, 255) !important;
`;

const PriceTitle = styled.div`
  display: flex !important;
  flex-direction: row !important;
`;

const TitleItem = styled.div`
  flex: 1
`;

const TitlSpan = styled.span`
  font-size: 22px !important;
  line-height: 26px !important;
  color: rgb(34, 34, 34) !important;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;
`;

const SmallSpan = styled.span`
  color: rgb(34, 34, 34) !important;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;
  font-weight: 400 !important;
  font-size: 16px !important;
  line-height: 20px !important;
  white-space: nowrap !important;
  padding-left: 4px !important;
`;

class CheckoutBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkinDate: {},
      checkoutDate: {},
      focus: 'checkin',
      availableAfterCheckin: '',
      adults: 1,
      children: 0,
      infants: 0,
    };
    this.handleDateClick = this.handleDateClick.bind(this);
    this.setFocus = this.setFocus.bind(this);
    this.eraseStateDate = this.eraseStateDate.bind(this);
    this.updateGuests = this.updateGuests.bind(this);
  }

  handleDateClick(month, day) {
    const { focus, adults, children, infants } = this.state;
    const { inputClick } = this.props;
    if (focus === 'checkout') {
      this.setState({
        checkoutDate: {
          month,
          day,
        },
      });
      inputClick(false, 'calendar');
      if (adults + children + infants > 1) {
        inputClick(true, 'guest');
      }
    } else {
      this.setState({
        checkinDate: {
          month,
          day,
        },
      });
      this.calculateAvailableAfterCheckin(month, day);
      this.setState({
        focus: 'checkout',
      });
    }
  }

  setFocus(whichFocus) {
    const { checkinDate, checkoutDate } = this.state;
    if (!checkinDate.month) {
      this.setState({
        focus: 'checkin',
      });
    } else {
      this.setState({
        focus: whichFocus,
      });
    }

    console.log('setting focus to ', whichFocus);
  }

  updateGuests(whichGuest, operator) {
    if (operator === '+') {
      this.setState(state => ({
        [whichGuest]: state[whichGuest] + 1,
      }));
    } else {
      this.setState(state => ({
        [whichGuest]: state[whichGuest] - 1,
      }));
    }
  }

  calculateAvailableAfterCheckin(month, day) {
    const { availability } = this.props;
    const { checkinDate } = this.state;
    const days = availability[month];
    let lastDayAvailable = day + 1;
    for (; lastDayAvailable < days.length; lastDayAvailable += 1) {
      if (days[lastDayAvailable].available === 1) {
        break;
      }
    }
    this.setState({
      availableAfterCheckin: lastDayAvailable,
    });
  }

  eraseStateDate(whichDate) {
    this.setState({
      [whichDate]: {},
    });
    console.log('erasing ' + whichDate);
  }

  render() {
    const { inputClick, renderCalendar, renderGuest } = this.props;
    const { availability, pricing } = this.props;
    const { checkinDate, checkoutDate, focus, availableAfterCheckin, adults, children, infants } = this.state;
    const passDownGuests = { adults, children, infants };
    const buttonText = checkinDate.month && checkoutDate.month ? 'Reserve' : 'Check Availability';
    return (
      <StyledDiv className="checkoutBox">
        <DivFlex1>
          <TitleItem>
            <TitlSpan>{`$${pricing.price}`}</TitlSpan>
            <SmallSpan>{"/ night"}</SmallSpan>
          </TitleItem>
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
        />
        <DivFlex>
          <ReservationButton>
            <Span>
              <TitleSpan>
                {buttonText}
              </TitleSpan>
            </Span>
          </ReservationButton>
        </DivFlex>
      </StyledDiv>
    );
  }
}

export default CheckoutBox;
