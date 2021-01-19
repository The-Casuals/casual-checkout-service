import React from 'react';
import styled from 'styled-components';

const Td = styled.td`
  height: 40px;
  width: 40px;
  padding: 0px 10px;
  text-align: center;
  vertical-align: middle;
  text-decoration: ${props => props.crossOut ? "line-through" : "none"};
  font-size: 14px;
  color: ${props => props.crossOut ? "rgb(176, 176, 176)" : "rgb(34, 34, 34)"};
  font-weight: ${props => props.crossOut ? "400" : "600"};
  background: rgb(255, 255, 255);
`;

const CalendarCell = ({ cellInfo }) => {
  const toRender = cellInfo ? cellInfo.day : '';
  if (cellInfo) {
    return (
      <Td crossOut={cellInfo.available === 1}>{cellInfo.day}</Td>
    );
  }
  return (
    <Td crossOut={false} />
  );
};

export default CalendarCell;
