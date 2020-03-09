// More practice with classes and obtaining information from user inputs with ReactJS

import React, { Component } from "react";
import "./styles.css";

class App extends Component {
  render() {
    return (
      <div>
        <UserInput />
        <Button />
      </div>
    );
  }
}

class UserInput extends Component {
  render() {
    return (
      <div>
        <p>Username:</p>
        <input id="name" />
      </div>
    );
  }
}

class Button extends Component {
  getInput() {
    let userName = document.getElementById("name").value;
    console.log("Hello " + userName);
  }
  render() {
    return (
      <div>
        <button type="button" id="button" onClick={this.getInput}>
          Go
        </button>
      </div>
    );
  }
}

export default App;
