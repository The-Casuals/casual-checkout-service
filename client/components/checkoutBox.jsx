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
  flex-direction: column;
`;

const TitleSubHeading = styled.div`
  color: rgb(34, 34, 34) !important;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;
  font-weight: 300 !important;
  font-size: 12px !important;
  line-height: 16px !important;
  display: flex !important;
  flex: .5 .5 0;
`;

const TitleTopHeading = styled.div`
  flex: 1 1 0;
  display: flex;
  justify-content: space-between !important;
  align-items: baseline !important;
  width: 100%;
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

const TitleItem = styled.div`
  flex: 0 0 auto;
  display: block;
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

const ReviewsDiv = styled.div`
  display: block;
  flex: 0 0 auto;
`;

const ReviewSpanLeft = styled.span`
  color: rgb(34, 34, 34) !important;
  padding-left: 4px !important;
  font-weight: 600 !important;
`;

const ReviewSpanRight = styled.span`
  color: rgb(113, 113, 113) !important;
  padding-left: 4px !important;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;
`;

class CheckoutBox extends React.Component {
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
      availableAfterCheckin: '',
      translate: 320 - today.month*320,
    };
    this.handleDateClick = this.handleDateClick.bind(this);
    this.setFocus = this.setFocus.bind(this);
    this.eraseStateDate = this.eraseStateDate.bind(this);
    this.updateGuests = this.updateGuests.bind(this);
    this.translateLeft = this.translateLeft.bind(this);
    this.translateRight = this.translateRight.bind(this);
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
      if (adults + children + infants === 1) {
        inputClick(true, 'guest');
      }
    } else {
      this.setState({
        checkinDate: {
          month,
          day,
        },
      });
      this.availableAfterCheckin(month, day);
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

  availableAfterCheckin(month, day) {
    const { calculateAvailable, availability } = this.props;
    const lastDayAvailable = calculateAvailable(month, day, availability);
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
    const { inputClick, renderCalendar, renderGuest, today } = this.props;
    const { availability, pricing, firstDayAvailable } = this.props;
    const { checkinDate, checkoutDate, focus, availableAfterCheckin, adults, children, infants, translate } = this.state;
    const passDownGuests = { adults, children, infants };
    const buttonText = checkinDate.month && checkoutDate.month ? 'Reserve' : 'Check Availability';
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
    return (
      <StyledDiv className="checkoutBox">
        <DivFlex1>
          <TitleTopHeading>
            <TitleItem>
              <TitlSpan>{`$${pricing.price}`}</TitlSpan>
              <SmallSpan>{"/ night"}</SmallSpan>
            </TitleItem>
            <ReviewsDiv>
              <ReviewSpanLeft>4.82</ReviewSpanLeft>
              <ReviewSpanRight>(267)</ReviewSpanRight>
            </ReviewsDiv>
          </TitleTopHeading>
          <TitleSubHeading>
            {`Earliest availability is ${months[today.month]} ${firstDayAvailable + 1}`}
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
