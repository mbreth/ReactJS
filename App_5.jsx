// Changing the value of a certain state in ReactJS

import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      brand: "Chevy",
      year: "1955",
      color: "Red"
    };
  }
  changeColor = () => {
    this.setState({ color: "blue" });
    this.setState({ year: "2020" });
  };
  render() {
    return (
      <div>
        <h1>This is my {this.state.brand}</h1>
        <p>
          My car was built in {this.state.year}. The color of my car is{" "}
          {this.state.color}.
        </p>
        <button onClick={this.changeColor}>Change the car color</button>
      </div>
    );
  }
}

export default App;
