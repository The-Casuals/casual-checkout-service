import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  height: 200px;
  width: 80%;
  margin: auto;
  margin-top: 2em;
  border: 1px solid black;
  border-radius: 5px;
  box-sizing: border-box;
`;

const CheckoutBox = () => (
  <StyledDiv>
    <h4>$407 / night</h4>
  </StyledDiv>
);

export default CheckoutBox;
