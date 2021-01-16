/*eslint-disable*/
import React from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components'
import CheckoutBox from './checkoutBox.jsx';
import NavBar from './navBar.jsx'
import Calendar from './calendar';

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
  background-color: thistle;
`;

const RightColumn = styled.div`
  flex: 1.2;
  box-sizing: border-box;
  background-color: lavender;
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
  height: 1000px;
  width: 100%;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollPos: 0,
      calendar: false,
    };
    this.handleScroll = this.handleScroll.bind(this);
    this.calendarClick = this.calendarClick.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  renderNavBar() {
    return this.state.scrollPos > 1000 ? <NavBar /> : <></>
  }

  handleScroll(e) {
    console.log(window.scrollY);
    this.setState({
      scrollPos: window.scrollY,
    })
  }

  calendarClick() {
    console.log('calendar div clicked');
    this.setState({
      calendar: true,
    })
  }

  render() {
    return (
      <RowContainer>
        {this.renderNavBar()}
        <TopBottomDummy />
        <Container>
        <GlobalStyle />
        <LeftColumn />
        <RightColumn>
          <CheckoutBox calendarClick={this.calendarClick} />
        </RightColumn>
        </Container>
        <TopBottomDummy />
      </RowContainer>

    );
  }
}

render(<App />, document.getElementById('app'));
