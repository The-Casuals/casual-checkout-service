import React from 'react';
import styled from 'styled-components';
import CalendarBox from './calendarBox';
import GuestMenu from './guestMenu';

const MainInput = styled.div`
  height: 90%;
  width: 100%;
  border: 1px solid rgb(176, 176, 176);
  display: flex;
  flex-direction: column;
  border-radius: 8px;
`;

const BottomRow = styled.div`
  flex: 1 1 0;
  border-top: 1px solid rgb(176, 176, 176);
  position: relative;
  display: block;
  box-shadow: ${(props) => props.focus === 'guest' ? "rgb(34, 34, 34) 0px 0px 0px 2px inset" : "none"};
  background-color: ${(props) => props.focus === 'guest' ? "rgb(255, 255, 255)" : "transparent"};
  border-radius: ${(props) => props.focus === 'guest' ? "8px" : "0px"};
`;

const BlockDiv = styled.div`
  margin-bottom: 16px;
  display: block;
`;

const DivFlex2 = styled.div`
  flex: 2 2 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TopLeft = styled.div`
  position: relative ;
  flex: 1 1 0% ;
  padding: 0px ;
  width: 100% ;
  z-index: 8px;
`;

const TopRight = styled.div`
  position: relative ;
  flex: 1 1 0% ;
  padding: 0px ;
  width: 100% ;
  border-left: 1px solid rgb(176, 176, 176) ;
  z-index: 8px;
`;

const TopRow = styled.div`
  position: relative ;
  display: flex ;
  width: 100% ;
  margin: 0px ;
  border: none transparent ;
  color: rgb(34, 34, 34) ;
  background-color: transparent ;
  box-shadow: none ;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif ;
  font-size: 16px ;
  line-height: 20px ;
  font-weight: 400 ;
  outline: 0px ;
  flex: 1 1 0;
  height: 100%;
`;

const InputTopHeading = styled.div`
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
  white-space: nowrap ;
`;

const InputBottomHeading = styled.div`
  width: 100% ;
  border: none ;
  outline: none ;
  margin: 0px ;
  padding: 26px 12px 10px ;
  background-color: transparent ;
  font-family: inherit ;
  font-size: 14px ;
  font-weight: inherit ;
  line-height: 18px ;
  appearance: none ;
  cursor: pointer ;
  overflow: hidden ;
  text-overflow: ellipsis ;
  white-space: nowrap ;
  color: rgb(113, 113, 113) ;
`;

const LowerRowTopDiv = styled.div`
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
  white-space: nowrap ;
`;

const LowerRowBottomDiv = styled.div`
  width: 100% ;
  border: none ;
  outline: none ;
  margin: 0px ;
  padding: 26px 36px 10px 12px ;
  background-color: transparent ;
  color: inherit ;
  font-family: inherit ;
  font-size: inherit ;
  font-weight: inherit ;
  line-height: inherit ;
  appearance: none ;
  cursor: pointer ;
  overflow: hidden ;
  text-overflow: ellipsis ;
  white-space: nowrap ;
  font-size: 14px ;
  line-height: 18px
`;

const RightIconDiv = styled.div`
  -webkit-box-pack: center ;
  -webkit-box-align: center ;
  position: absolute ;
  right: 0px ;
  display: flex ;
  align-items: center ;
  justify-content: center ;
  height: 100% ;
  max-width: 50% ;
  min-width: 36px ;
  padding-right: 12px ;
  pointer-events: none ;
  color: rgb(34, 34, 34) ;
`;

const I = styled.i`
  height: 16px;
  width: 16px;
  display: block;
  fill: currentcolor;
`;
class InputBox extends React.Component {
  constructor(props) {
    super(props);
    this.leftCalendarButton = React.createRef();
    this.rightCalendarButton = React.createRef();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.stopPropagation();
    const { inputClick, setFocus } = this.props;
    if (e.target === this.leftCalendarButton.current) {
      inputClick(true, 'calendar');
      setFocus('checkin');
    }
    if (e.target === this.rightCalendarButton.current) {
      inputClick(true, 'calendar');
      setFocus('checkout');
    }
  }

  render() {
    const { renderCalendar, renderGuest, inputClick, focus, setFocus, availableAfterCheckin, passDownGuests } = this.props;
    const { availability, pricing, handleDateClick, checkinDate, checkoutDate, eraseStateDate, updateGuests, translate, translateLeft, translateRight } = this.props;
    const cal = (
      <CalendarBox
        inputClick={inputClick}
        availability={availability}
        pricing={pricing}
        handleDateClick={handleDateClick}
        checkinDate={checkinDate}
        checkoutDate={checkoutDate}
        focus={focus}
        setFocus={setFocus}
        availableAfterCheckin={availableAfterCheckin}
        eraseStateDate={eraseStateDate}
        translate={translate}
        translateLeft={translateLeft}
        translateRight={translateRight}
      />
    );
    const element = renderCalendar ? cal : <></>;
    const guestRender = renderGuest ? <GuestMenu pricing={pricing} passDownGuests={passDownGuests }updateGuests={updateGuests} inputClick={inputClick} /> : <></>;
    const { adults, children } = passDownGuests;
    const totalGuests = adults + children;
    const checkin = `${checkinDate.month + 1}/${checkinDate.day}/2021`;
    const checkout = `${checkoutDate.month + 1}/${checkoutDate.day}/2021`;
    const leftInputString = checkinDate.month ? checkin : 'Add date';
    const rightInputString = checkoutDate.month ? checkout : 'Add date';
    return (
      <DivFlex2>
        {/* <BlockDiv> */}
          <MainInput>
            <TopRow>
              <TopLeft>
                <InputTopHeading>
                  CHECK-IN
                </InputTopHeading>
                <InputBottomHeading onClick={this.handleClick} ref={this.leftCalendarButton}>
                  {leftInputString}
                </InputBottomHeading>
                <div>
                  {element}
                </div>
              </TopLeft>
              <TopRight>
                <InputTopHeading>
                  CHECKOUT
                </InputTopHeading>
                <InputBottomHeading ref={this.rightCalendarButton} onClick={this.handleClick}>
                  {rightInputString}
                </InputBottomHeading>
              </TopRight>
            </TopRow>
            <BottomRow focus="guest" onClick={() => inputClick(true, 'guest')}>
              <LowerRowTopDiv>
                GUESTS
              </LowerRowTopDiv>
              <LowerRowBottomDiv>
                {totalGuests + ' guests'}
              </LowerRowBottomDiv>
              <RightIconDiv>
                <I className="fas fa-chevron-down"/>
              </RightIconDiv>
              <div>
                {guestRender}
              </div>

            </BottomRow>
          </MainInput>
        {/* </BlockDiv> */}
      </DivFlex2>
    );
  }
}

export default InputBox;
