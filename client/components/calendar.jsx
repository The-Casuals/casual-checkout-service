import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  background: rgb(255, 255, 255);
  border-radius: 16px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 6px 20px;
  display: inline-block;
  padding: 24px 32px 16px;
  position: absolute;
  top: 50px;
  right: 30px;
  width: 661px;
  z-index: 1;
  min-height: 460px;
`;

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.wrapperRef = React.createRef();
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
      this.props.calendarClick(false);
    }
  }

  render() {
    return (
      <Box ref={this.wrapperRef}>
        calendar
      </Box>
    );
  }
}

export default Calendar;
