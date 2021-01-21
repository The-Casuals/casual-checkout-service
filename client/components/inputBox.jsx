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

const InputBox = (props) => {
  const { renderCalendar, renderGuest, inputClick, focus, setFocus } = props;
  const { availability, pricing, handleDateClick, checkinDate, checkoutDate } = props;
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
          <DivFlex1 onClick={() => inputClick(true, 'calendar', 'checkin')}>
            <div>
              {element}
            </div>
          </DivFlex1>
          <DivFlex1 onClick={() => inputClick(true, 'calendar', 'checkout')} />
        </Box>
        <DivFlex1 onClick={() => inputClick(true, 'guest')}>
          <div>
            {guestRender}
          </div>
        </DivFlex1>
      </MainInput>
    </DivFlex2>
  );
};

export default InputBox;
