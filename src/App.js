import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style/style.css";
import Main from './components/main';





class App extends Component {

  render() {
    return (
      <div className="App" style={{ fontFamily: "cursive" }}>
        <h1 id='main-headline' className={"h1Style"}>4 In a Row</h1>
        <Main />
      </div>
    );
  }
}

export default App;

