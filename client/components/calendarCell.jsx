import React from 'react';
import styled from 'styled-components';

const Td = styled.td`
  text-decoration: ${props => props.crossOut ? "line-through" : "none"};
  font-size: 14px;
  color: ${props => props.crossOut ? "rgb(176, 176, 176)" : "rgb(34, 34, 34)"};
  font-weight: ${props => props.crossOut ? "400" : "600"};
  height: 40px;
  width: 40px;
`;

const Cell = styled.div`;
  background: rgb(255, 255, 255);
  :hover {
    border: 1.5px solid rgb(34, 34, 34);
    border-radius: 100px;
  }
  height: 40px;
  width: 40px;
  text-align: center;
  vertical-align: middle;
  box-sizing: border-box;
  margin-left: 1px !important;
  margin-right: 1px !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  flex-direction: column !important;
  border-radius: 100% !important;
  position: relative !important;
`;

const UnavailableCell = styled.div`
  background: rgb(255, 255, 255);
  height: 40px;
  width: 40px;
  text-align: center;
  vertical-align: middle;
  box-sizing: border-box;
  margin-left: 1px !important;
  margin-right: 1px !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  flex-direction: column !important;
  border-radius: 100% !important;
  position: relative !important;
`;

const CalendarCell = ({ cellInfo }) => {
  const toRender = cellInfo ? cellInfo.day : '';
  if (cellInfo) {
    if (cellInfo.available === 0) {
      return (
        <Td crossOut={cellInfo.available === 1}>
          <Cell>{cellInfo.day}</Cell>
        </Td>
      );
    }
    return (
      <Td crossOut={cellInfo.available === 1}>
        <UnavailableCell>{cellInfo.day}</UnavailableCell>
      </Td>
    );
  }
  return (
    <Td crossOut={false} />
  );
};

export default CalendarCell;
