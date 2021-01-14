import React from 'react';
import ReactDOM from 'react-dom';

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

ReactDOM.render(<App />, document.getElementById('app'));
