import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/main';

const h1Style = {
  fontSize: "4.5rem",
  fontFamily: "cursive",
  margin: "10px 0",
  position: "absolute",
  width: "100%"
};

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1 style={h1Style}>4 In a Row</h1>
        <Main />
      </div>
    );
  }
}

export default App;
