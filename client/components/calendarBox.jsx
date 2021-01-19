import React from 'react';
import styled from 'styled-components';
import CalendarCarousel from './calendarCarousel';

const Box = styled.div`
  background: rgb(255, 255, 255);
  border-radius: 16px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 6px 20px;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 30%;
  right: -4%;
  width: 660px;
  z-index: 1;
  min-height: 500px;
`;
const HeaderDiv = styled.div`
  height: 130px;
  width: 100%;
  display: flex;
`;
const DivFlex1 = styled.div`
  flex: 1;
`;
const FlexDiv5 = styled.div`
  flex: 4.54;
  display: flex;
  overflow: hidden;
`;

class CalendarBox extends React.Component {
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
    const { inputClick } = this.props;
    if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
      inputClick(false, 'calendar');
    }
  }

  render() {
    const { availability } = this.props;
    return (
      <Box ref={this.wrapperRef}>
        <HeaderDiv />
        <FlexDiv5>
          <CalendarCarousel availability={availability} />
        </FlexDiv5>
      </Box>
    );
  }
}

export default CalendarBox;
