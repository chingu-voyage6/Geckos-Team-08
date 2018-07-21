import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import SignIn from './SignIn';
import Register from './Register';
import HomePage from './HomePage/HomePage';
// import SideBar from './SideBar';

class App extends Component {
  componentDidMount() {
    //   fetch("api/clients/test")
    //     .then(response => console.log(response.json()))
    //     .then(json => this.setState({ message: json }));
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </div>
    );
  }
}

export default App;
