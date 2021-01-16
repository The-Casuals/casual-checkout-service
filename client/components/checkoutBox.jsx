import React from 'react';
import styled from 'styled-components';
import InputBox from './inputBox';

const StyledDiv = styled.div`
  height: 250px;
  width: 80%;
  margin: auto;
  margin-top: 2em;
  border: 1px solid black;
  border-radius: 5px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 100px;
`;

const DivFlex1 = styled.div`
  flex: 1;
  border: 1px black solid;
`;

const CheckoutBox = () => (
  <StyledDiv>
    <DivFlex1>
      test
    </DivFlex1>
    <InputBox />
    <DivFlex1>
      test
    </DivFlex1>
  </StyledDiv>
);

export default CheckoutBox;
