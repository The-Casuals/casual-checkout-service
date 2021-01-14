import React from 'react';
import { render } from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'happy',
    };
  }

  render() {
    const { value } = this.state;
    return (
      <h1>{value}</h1>
    );
  }
}

render(<App />, document.getElementById('app'));
