import React from 'react';
import styled from 'styled-components';

const FixedDiv = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 80px;
  background-color: bisque;
`;

const NavBar = () => (
  <FixedDiv>
    test
  </FixedDiv>
);

export default NavBar;
