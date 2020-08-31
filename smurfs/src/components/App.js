import React, { Component } from "react";
import "./App.css";
import Smurfs from "./Smurfs";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! W/Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <Smurfs />
      </div>
    );
  }
}

export default App;
