import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
  order: 2 ;
  flex: 0 0 calc(((100vw - 256px) / 12) * 5 + 16px) ;
  margin-left: 24px ;
  max-width: 270px ;
  display: block ;
  margin-top: 24px;
  margin-right: 32px;
  z-indez: 999;
`;

const InnerFlex = styled.div`
  display: flex ;
  border-radius: 8px ;
  box-shadow: rgb(176, 176, 176) 0px 0px 0px 1px inset ;
`;

const CheckinInput = styled.div`
  position: relative ;
  cursor: text ;
  display: flex ;
  height: 56px ;
  width: 100% ;
  margin: 0px ;
  border: none transparent ;
  color: rgb(34, 34, 34) ;
  border-radius: 8px ;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif ;
  font-size: 16px ;
  line-height: 20px ;
  font-weight: 400 ;
  flex: 1 1 0% ;
  outline: none ;
  box-shadow: ${(props) => props.focus === 'checkin' ? "rgb(34, 34, 34) 0px 0px 0px 2px inset" : "none"};
  background-color: ${(props) => props.focus === 'checkin' ? "rgb(255, 255, 255)" : "transparent"};
`;

const CheckoutInput = styled.div`
  position: relative ;
  cursor: text ;
  display: flex ;
  height: 56px ;
  width: 100% ;
  margin: 0px ;
  border: none transparent ;
  color: rgb(34, 34, 34) ;
  border-radius: 8px ;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif ;
  font-size: 14px ;
  line-height: 20px ;
  font-weight: 400 ;
  flex: 1 1 0% ;
  outline: none ;
  box-shadow: ${(props) => props.focus === 'checkout' ? "rgb(34, 34, 34) 0px 0px 0px 2px inset" : "none"};
  background-color: ${(props) => props.focus === 'checkout' ? "rgb(255, 255, 255)" : "transparent"};
`;

const InputLabel = styled.div`
  position: absolute ;
  top: 12px ;
  left: 12px ;
  right: 12px ;
  margin: 0px ;
  padding: 0px ;
  pointer-events: none ;
  font-size: 10px ;
  line-height: 12px ;
  color: rgb(34, 34, 34) ;
  text-transform: uppercase ;
  font-weight: 800 ;
  max-width: 100% ;
  overflow: hidden ;
  text-overflow: ellipsis ;
  white-space: nowrap
`;

const Input = styled.input`
  width: 100% ;
  border: none ;
  outline: none ;
  padding: 0px ;
  margin: 26px 12px 10px ;
  min-height: 1px ;
  color: inherit ;
  background-color: transparent ;
  font-family: inherit ;
  font-size: inherit ;
  font-weight: inherit ;
  line-height: inherit ;
  appearance: none ;
`;

const InputContainer = styled.div`
  display: flex ;
  font-size: 14px ;
  line-height: 18px ;
  color: rgb(34, 34, 34) ;
  opacity: 1 ;
`;
class CalendarBoxInput extends React.Component {
  constructor(props) {
    super(props);
    this.checkinRef = React.createRef();
    this.checkoutRef = React.createRef();
    this.focusInputCheckin = this.focusInputCheckin.bind(this);
    this.focusInputCheckout = this.focusInputCheckout.bind(this);
  }

  focusInputCheckin() {
    this.checkinRef.current.focus();
    const { setFocus } = this.props;
    setFocus('checkin');
  }

  focusInputCheckout() {
    this.checkoutRef.current.focus();
    const { setFocus } = this.props;
    setFocus('checkout');
  }

  render() {
    const { checkinDate, checkoutDate, setFocus, focus } = this.props;
    const checkin = checkinDate.month ? `${checkinDate.month + 1}/${checkinDate.day}/2021` : '';
    const checkout = checkoutDate.month ? `${checkoutDate.month + 1}/${checkoutDate.day}/2021` : '';
    return (
      <MainContainer>
        <InnerFlex>
          <CheckinInput name="checkin" focus={focus} onClick={this.focusInputCheckin}>
            <InputLabel>CHECK-IN</InputLabel>
            <InputContainer>
              <Input ref={this.checkinRef} placeholder="Add date" type="text" defaultValue={checkin} />
            </InputContainer>
          </CheckinInput>
          <CheckoutInput name="checkout" focus={focus} onClick={this.focusInputCheckout}>
            <InputLabel>CHECKOUT</InputLabel>
            <Input ref={this.checkoutRef} placeholder="Add date" type="text" defaultValue={checkout} />
          </CheckoutInput>
        </InnerFlex>
      </MainContainer>
    );
  }
}

export default CalendarBoxInput;
