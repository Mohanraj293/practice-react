import React, { Component } from "react";

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increment() {
    this.setState({
      count: this.state.count + 1,
    }, () => {
        console.log(this.state.count);
    });
  }
  decrement() {
    this.setState({
      count: this.state.count - 1,
    });
  }
  reset() {
    this.setState({
      count: (this.state.count = 0),
    });
  }
  render() {
    return (
      <div>
        <h1>
          count --{">"} {this.state.count}
        </h1>
        <button
          onClick={() => {
            this.increment();
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            this.decrement();
          }}
        >
          Decrement
        </button>
        <button
          onClick={() => {
            this.reset();
          }}
        >
          Reset
        </button>
      </div>
    );
  }
}
