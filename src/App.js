import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/main';

const h1Style = {
  fontSize: "7vw",
  fontFamily: "cursive",
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
