import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const InnerSpan = styled.span`
  background-position: calc((100 - var(--mouse-x, 0)) * 1%) calc((100 - var(--mouse-y, 0)) * 1%);
  --mouse-x: ${(props) => props.x};
  --mouse-y: ${(props) => props.y};
  display: block;
  width: 100%;
  height: 100%;
  background-size: 200% 200%;
  background-image: radial-gradient(circle at center, rgb(255, 56, 92) 0%, rgb(230, 30, 77) 27.5%, rgb(227, 28, 95) 40%, rgb(215, 4, 102) 57.5%, rgb(189, 30, 89) 75%, rgb(189, 30, 89) 100%);
  border-radius: 8px;
`;

const TitleSpan = styled.span`
  display: block;
  position: relative;
  pointer-events: none;
  cursor: pointer;
  display: inline-block;
  margin: 0px;
  position: relative;
  text-align: center;
  text-decoration: none;
  touch-action: manipulation;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
  border-radius: 8px;
  outline: none;
  padding: 14px 24px;
  transition: box-shadow 0.2s ease 0s, -ms-transform 0.1s ease 0s, -webkit-transform 0.1s ease 0s, transform 0.1s ease 0s;
  border: none;
`;

const Span = styled.span`
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  width: 100%;
  height: 100%;
`;

const ButtonBase = styled.button`
  cursor: pointer;
  display: inline-block;
  margin: 0px;
  position: relative;
  text-align: center;
  text-decoration: none;
  touch-action: manipulation;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
  border-radius: 8px;
  outline: none;
  transition: box-shadow 0.2s ease 0s, -ms-transform 0.1s ease 0s, -webkit-transform 0.1s ease 0s, transform 0.1s ease 0s;
  border: none;
  background: linear-gradient(to right, rgb(230, 30, 77) 0%, rgb(227, 28, 95) 50%, rgb(215, 4, 102) 100%);
  color: rgb(255, 255, 255);
  width: 100%;
`;

export default class ReservationButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0,
    };
    this.buttonRef = React.createRef();
    this.changeButtonBackground = this.changeButtonBackground.bind(this);
    // this.checkAvailabilityClick = this.checkAvailabilityClick.bind(this);
  }

  changeButtonBackground(e) {
    const elementRectangle = this.buttonRef.current.getBoundingClientRect();
    this.setState({
      x: ((e.pageX - elementRectangle.left) / elementRectangle.width) * 100,
      y: ((e.pageY - (window.scrollY + elementRectangle.top)) / elementRectangle.height) * 100,
    });
  }

  checkAvailabilityClick() {
    const { inputClick } = this.props;
    inputClick(true, 'calendar');
  }

  render() {
    const { x, y } = this.state;
    const { checkinDate, checkoutDate } = this.props;
    const buttonText = checkinDate.day && checkoutDate.day ? 'Reserve' : 'Check Availability';
    return (
      <ButtonBase onClick={() => { this.checkAvailabilityClick(); }}>
        <Span>
          <InnerSpan
            x={x}
            y={y}
            ref={this.buttonRef}
            onMouseMove={this.changeButtonBackground}
          />
        </Span>
        <TitleSpan>
          {buttonText}
        </TitleSpan>
      </ButtonBase>
    );
  }
}

ReservationButton.propTypes = {
  checkinDate: PropTypes.shape({
    month: PropTypes.number,
    day: PropTypes.number,
  }).isRequired,
  checkoutDate: PropTypes.shape({
    month: PropTypes.number,
    day: PropTypes.number,
  }).isRequired,
  inputClick: PropTypes.func.isRequired,
};
