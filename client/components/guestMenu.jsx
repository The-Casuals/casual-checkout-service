import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  background: rgba(255, 255, 255);
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 6px, rgba(0, 0, 0, 0.07) 0px 0px 0px 1px;
  box-sizing: border-box;
  margin-bottom: 16px;
  min-width: 280px
  padding: 16px;
  position: absolute;
  text-align: left;
  width: 100%;
  z-index: 999;
  right: 16.2%;
  top: 66%;
  height: 300px;
}
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
    return (
      <Box ref={this.wrapperRef}>
        guest
      </Box>
    );
  }
}

export default GuestMenu;
