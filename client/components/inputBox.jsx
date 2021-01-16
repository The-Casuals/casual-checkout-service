import React from 'react';
import styled from 'styled-components';

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
  flex-basis: 100%;
`;

const Box = styled.div`
  display: flex;
  flex-direciton: row;
  height: 100%;
`

const InputBox = () => (
  <DivFlex2>
    <MainInput>
      <DivFlex1>
        <Box>
          <DivFlex1 />
          <DivFlex1 />
        </Box>
      </DivFlex1>
      <DivFlex1 />
    </MainInput>
  </DivFlex2>
);

export default InputBox;
