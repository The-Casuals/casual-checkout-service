import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import moment from 'moment';
import { PropTypes } from 'prop-types';
import CheckoutBox from './checkoutBox';
import NavBar from './navBar';

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

class App extends React.Component {
  static calculateFirstAvailable(month, day, availability) {
    const days = availability[month];
    let firstDayAvailable = day + 1;
    for (; firstDayAvailable < days.length; firstDayAvailable += 1) {
      if (days[firstDayAvailable].available === 0) {
        break;
      }
    }
    return firstDayAvailable;
  }

  constructor(props) {
    super(props);
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
    };
    this.handleScroll = this.handleScroll.bind(this);
    this.inputClick = this.inputClick.bind(this);
    this.guestInputClick = this.guestInputClick.bind(this);
  }

  componentDidMount() {
    const { id } = this.props;
    this.getData(id);
    document.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    this.setState({
      scrollPos: window.scrollY,
    });
  }

  /* eslint no-param-reassign: ["error", { "props": false }] */
  getData(id) {
    axios.get(`/api/checkout/${id}`).then(({ data }) => {
      const { availability } = data;
      delete data.availability;
      this.setState({
        availability,
        pricing: data,
      });
      const { today } = this.state;
      const { month, day } = today;
      const firstDayAvailable = App.calculateFirstAvailable(month, day, availability);
      this.setState({
        firstDayAvailable,
      });
    }).catch((err) => {
      console.log(err);
    });
  }

  inputClick(toRender, whichModal) {
    this.setState({
      [whichModal]: toRender,
    });
  }

  guestInputClick() {
    this.setState((state) => ({
      guest: !state.guest,
    }));
  }

  renderNavBar() {
    const { scrollPos } = this.state;
    return scrollPos > 500 ? <NavBar /> : <></>;
  }

  render() {
    const {
      availability,
      guest,
      calendar,
      pricing,
      focus,
      today,
      firstDayAvailable,
    } = this.state;
    return (
      <RowContainer className="rowContainer">
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

App.propTypes = {
  id: PropTypes.number.isRequired,
};
