import React from 'react';
import styled from 'styled-components';
import InputBox from './inputBox';

const StyledDiv = styled.div`
  height: 276px;
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
  flex: 1;
  border: 1px black solid;
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
    const { focus } = this.state;
    if (focus === 'checkout') {
      this.setState({
        checkoutDate: {
          month,
          day,
        },
      });
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
    return (
      <StyledDiv className="checkoutBox">
        <DivFlex1>
          test
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
        <DivFlex1>
          test
        </DivFlex1>
      </StyledDiv>
    );
  }
}

export default CheckoutBox;
