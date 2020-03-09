// Using map function to generate a table from a data array with ReactJS

import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      data: [
        {
          id: 1,
          name: "Apple",
          age: 26
        },
        {
          id: 2,
          name: "Orange",
          age: 28
        },
        {
          id: 3,
          name: "Pear",
          age: 29
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <table>
          <tbody>
            {this.state.data.map((person, i) => (
              <Table key={i} data={person} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

class Table extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.data.id}</td>
        <td>{this.props.data.name}</td>
        <td>{this.props.data.age}</td>
      </tr>
    );
  }
}

export default App;
