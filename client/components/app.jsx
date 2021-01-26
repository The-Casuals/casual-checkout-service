/*eslint-disable*/
import React from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components'
import CheckoutBox from './checkoutBox.jsx';
import NavBar from './navBar.jsx'
import axios from 'axios';
import moment from 'moment';

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
    const { id } = this.props;
    this.state = {
      scrollPos: 0,
      calendar: false,
      guest: false,
      availability: [],
      pricing: {},
      today: {
        month: moment().month(),
        day: moment().date() - 1,
      },
      firstDayAvailable: '',
      id,
    };
    this.handleScroll = this.handleScroll.bind(this);
    this.inputClick = this.inputClick.bind(this);
    this.calculateAvailable = this.calculateAvailable.bind(this);
    this.guestInputClick = this.guestInputClick.bind(this);
  }

  componentDidMount() {
    const { id } = this.state;
    this.getData(id);
    document.addEventListener('scroll', this.handleScroll);

  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScroll);
  }

  renderNavBar() {
    return this.state.scrollPos > 500 ? <NavBar /> : <></>
  }

  calculateAvailable(month, day, availability) {
    const days = availability[month];
    let lastDayAvailable = day + 1;
    for (; lastDayAvailable < days.length; lastDayAvailable += 1) {
      if (days[lastDayAvailable].available === 1) {
        break;
      }
    }
    return lastDayAvailable;
  }

  calculateFirstAvailable(month, day, availability) {
    const days = availability[month];
    let firstDayAvailable = day + 1;
    for (; firstDayAvailable < days.length; firstDayAvailable += 1) {
      if (days[firstDayAvailable].available === 0) {
        break;
      }
    }
    return firstDayAvailable;
  }

  getData(id) {
    axios.get(`/api/checkout/${id}`).then(({ data }) => {
      let { availability } = data;
      delete data.availability;
      this.setState({
        availability: availability,
        pricing: data,
      });
      const { today } = this.state;
      const { month, day } = today;
      const firstDayAvailable = this.calculateFirstAvailable(month, day, availability);
      this.setState({
        firstDayAvailable,
      });
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

  guestInputClick() {
    this.setState(state => ({
      guest: !state.guest,
    }));
  }

  render() {
    const { availability, guest, calendar, pricing, focus, today, firstDayAvailable } = this.state;
    return (
      <RowContainer className='rowContainer'>
        {this.renderNavBar()}
        <Container>
          <LeftColumn />
          <RightColumn>
            <CheckoutBox
              availability={availability}
              renderGuest={guest}
              renderCalendar={calendar}
              inputClick={this.inputClick}
              pricing={pricing}
              focus={focus}
              calculateAvailable={this.calculateAvailable}
              firstDayAvailable={firstDayAvailable}
              today={today}
              guestInputClick={this.guestInputClick}
            />
          </RightColumn>
        </Container>
      </RowContainer>

    );
  }
}

export default App;