// analysi
// what to do?display counter values on screen and butten 
// to increment and decrement
// how to do? use

import React, { Component } from 'react';

class CounterApp extends Component {
  constructor(props) {
    super(props);

    // Initialize the CounterApp value in the state
    this.state = {
      count: 0,
    };
  }

  // Function to increment the CounterApp
  incrementCounterApp = () => {
    this.setState({ count: this.state.count + 1 });
  };

  // Function to decrement the CounterApp
  decrementCounterApp = () => {
    this.setState({ count: this.state.count - 1 });
  };

  // Function to reset the CounterApp
  resetCounterApp = () => {
    this.setState({ count: 0 });
  };

  render() {
    return (
      <div>
        <h1>CounterApp</h1>
        <p>CounterApp: {this.state.count}</p>
        <button onClick={this.incrementCounterApp}>Increment</button>
        <button onClick={this.decrementCounterApp}>Decrement</button>
        <button onClick={this.resetCounterApp}>Reset</button>
      </div>
    );
  }
}

export default CounterApp;
