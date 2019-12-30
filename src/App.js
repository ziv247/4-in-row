import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/main';

const h1Style = {
  fontSize: "12vw",
  width: "100%",
  color: "#795542"
}



class App extends Component {

  render() {
    return (
      <div className="App" style={{ fontFamily: "cursive" }}>
        <h1 id='main-headline' style={h1Style}>4 In a Row</h1>
        <Main />
      </div>
    );
  }
}

export default App;

