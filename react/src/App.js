import React, { Component } from "react";
import Button from "antd/lib/button";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
          <Button type="primary">Button</Button>
        </header>
      </div>
    );
  }
}

export default App;
