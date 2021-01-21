import React from 'react';
import styled from 'styled-components';
import CalendarBox from './calendarBox';
import GuestMenu from './guestMenu';

const DivFlex2 = styled.div`
  flex: 2;
  display: flex;
  border: 1px black solid;
  align-items: center;
  justify-content: center;
`;

const MainInput = styled.div`
  height: 80%;
  width: 80%;
  border: 1px black solid;
  display: flex;
  flex-direction: column;
`;

const DivFlex1 = styled.div`
  flex: 1;
  border: 1px black solid;
`;

const Box = styled.div`
  display: flex;
  flex-direciton: row;
  height: 100%;
  flex: 1;
`;

class InputBox extends React.Component {
  constructor(props) {
    super(props);
    this.leftCalendarButton = React.createRef();
    this.rightCalendarButton = React.createRef();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const { inputClick } = this.props;
    console.log(e.target);
    console.log(this.leftCalendarButton.current);
    if (e.target === this.leftCalendarButton.current) {
      inputClick(true, 'calendar', 'checkin');
    }
    if (e.target === this.rightCalendarButton.current) {
      inputClick(true, 'calendar', 'checkout');
    }
  }

  render() {
    const { renderCalendar, renderGuest, inputClick, focus, setFocus } = this.props;
    const { availability, pricing, handleDateClick, checkinDate, checkoutDate } = this.props;
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
      />
    );
    const element = renderCalendar ? cal : <></>;
    const guestRender = renderGuest ? <GuestMenu inputClick={inputClick} /> : <></>;
    return (
      <DivFlex2>
        <MainInput>
          <Box>
            <DivFlex1
              onClick={this.handleClick}
              ref={this.leftCalendarButton}
            >
              <div>
                {element}
              </div>
            </DivFlex1>
            <DivFlex1 ref={this.rightCalendarButton} onClick={this.handleClick} />
          </Box>
          <DivFlex1 onClick={() => inputClick(true, 'guest')}>
            <div>
              {guestRender}
            </div>
          </DivFlex1>
        </MainInput>
      </DivFlex2>
    );
  }
}

export default InputBox;
