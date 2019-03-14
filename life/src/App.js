import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from "./components/showClock"

class App extends Component {
  state = {
    clicked: false
  }
  deleteComponent = () => {
    this.setState({clicked:true})
}
  render() {
    return (
      <div className="App">
        {this.state.clicked ? null : <Clock />}
        <button onClick = {this.deleteComponent}> Click </button>
      </div>
    );
  }
}

export default App;
