import React from 'react';
import styled from 'styled-components';
import GuestInput from './guestInput';

const Box = styled.div`
  background: rgb(255, 255, 255) !important;
  border-radius: 4px !important;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 6px, rgba(0, 0, 0, 0.07) 0px 0px 0px 1px !important;
  box-sizing: border-box !important;
  margin-bottom: 16px !important;
  min-width: 280px !important;
  padding: 16px !important;
  position: absolute !important;
  text-align: left !important;
  width: 100% !important;
  z-index: 999 !important;
  right: 0px !important;
  top: 100%;
`;

const BlockDiv = styled.div`
  display: block;
`;

class GuestMenu extends React.Component {
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
      inputClick(false, 'guest');
    }
  }

  render() {
    const inputNames = ['Adults', 'Children', 'Infants'];
    const { updateGuests, passDownGuests } = this.props;
    return (
      <BlockDiv>
        <Box ref={this.wrapperRef}>
          {inputNames.map((title) => <GuestInput passDownGuests={passDownGuests} updateGuests={updateGuests} title={title} key={title} />)}
        </Box>
      </BlockDiv>
    );
  }
}

export default GuestMenu;
