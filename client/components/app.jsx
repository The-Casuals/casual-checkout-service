/*eslint-disable*/
import React from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components'
import CheckoutBox from './checkoutBox.jsx';

const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
  display: block;
}
body {
  line-height: 1;
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
html, body, #app {
  height: 100%;
}
`
const LeftColumn = styled.div`
  flex: 1.8;
  box-sizing: border-box;
  background-color: orange;
`;

const RightColumn = styled.div`
  flex: 1.2;
  box-sizing: border-box;
  background-color: blue;
`;

const Container = styled.div`
  width: 1120px;
  margin: 0 auto;
  height: 1000px;
  display: flex;
`;

const RowContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const TopBottomDummy = styled.div`
  height: 300px;
  width: 100%;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'happy',
    };
  }

  render() {
    return (
      <RowContainer>
        <TopBottomDummy />
        <Container>
        <GlobalStyle />
        <LeftColumn />
        <RightColumn>
          <CheckoutBox />
        </RightColumn>
        </Container>
        <TopBottomDummy />
      </RowContainer>

    );
  }
}

render(<App />, document.getElementById('app'));
