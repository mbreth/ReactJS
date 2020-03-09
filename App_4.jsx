// Working with constructor props, super props and this.state in ReactJS

import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      header: "Header from the state",
      content: "Content from the state"
    };
  }
  render() {
    return (
      <div>
        <h1>{this.state.header}</h1>
        <h2>{this.state.content}</h2>
      </div>
    );
  }
}

export default App;
