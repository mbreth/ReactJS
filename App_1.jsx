import React from "react";
import "./styles.css";

class App extends React.Component {
  helloUser() {
    var user = document.getElementById("username").value;
    document.getElementById("display").innerHTML = "Hello " + user + "!";
  }

  render() {
    return (
      <div>
        <input id="username" placeholder="Name" />
        <button onClick={this.helloUser}>Submit!</button>
        <p id="display" />
      </div>
    );
  }
}

export default App;
