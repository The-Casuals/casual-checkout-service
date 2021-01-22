/*eslint-disable*/
import React from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components'
import CheckoutBox from './checkoutBox.jsx';
import NavBar from './navBar.jsx'
import axios from 'axios';

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
`;

const RightColumn = styled.div`
  flex: 1.2;
  box-sizing: border-box;
`;

const Container = styled.div`
  max-width: 1128px;
  width: 100%;
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
      guest: false,
      availability: [],
      pricing: {},
    };
    this.handleScroll = this.handleScroll.bind(this);
    this.inputClick = this.inputClick.bind(this);
    this.setFocus = this.setFocus.bind(this);
  }

  componentDidMount() {
    document.addEventListener('scroll', this.handleScroll);
    this.getData(1);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScroll);
  }

  renderNavBar() {
    return this.state.scrollPos > 1000 ? <NavBar /> : <></>
  }

  getData(id) {
    axios.get(`api/checkout/${id}`).then(({ data }) => {
      let { availability } = data;
      delete data.availability;
      this.setState({
        availability: availability,
        pricing: data,
      });
      console.log(this.state.availability);
      console.log(this.state.pricing);
    }).catch(err => {
      console.log(err);
    });
  }

  handleScroll(e) {
    this.setState({
      scrollPos: window.scrollY,
    })
  }

  inputClick(toRender, whichModal) {
    this.setState({
      [whichModal]: toRender,
    });
  }

  setFocus(whichFocus) {
    console.log(whichFocus);
    this.setState({
      focus: whichFocus,
    });
  }

  render() {
    const { availability, guest, calendar, pricing, focus } = this.state;
    return (
      <RowContainer className='rowContainer'>
        {this.renderNavBar()}
        <TopBottomDummy />
        <Container>
          <GlobalStyle />
          <LeftColumn />
          <RightColumn>
            <CheckoutBox
              availability={availability}
              renderGuest={guest}
              renderCalendar={calendar}
              inputClick={this.inputClick}
              pricing={pricing}
              focus={focus}
              setFocus={this.setFocus}
            />
          </RightColumn>
        </Container>
        <TopBottomDummy />
      </RowContainer>

    );
  }
}

export default App;