import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/main';

const h1Style = {
  fontSize: "15vh",
  margin: 0,
  maxHeight: "85px",
  fontFamily: "cursive",
  margin: "10px 0",
  width: "100%",
  
}

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1 id='main-headline' style={h1Style}>4 In a Row</h1>
        <Main />
      </div>
    );
  }
}

export default App;

