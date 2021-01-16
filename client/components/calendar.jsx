import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  background: rgb(255, 255, 255);
  border-radius: 16px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 6px 20px;
  display: inline-block;
  padding: 24px 32px 16px;
  position: absolute;
  top: 1px;
  right: 1px;
  width: 661px;
  z-index: 1;
  min-height: 460px;
`;

const Calendar = () => (
  <Box>
    calendar
  </Box>
);

export default Calendar;
