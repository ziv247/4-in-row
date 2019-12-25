import React, { Component } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
import GameBoard from './gameBoard.jsx';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state={
      boardOn:false
    }
    this.chooseNumOfPlayers = React.createRef();
    this.buildBoardBtn = React.createRef();
  }

  onStart = e => {
    e.target.style.display = "none";
    this.chooseNumOfPlayers.current.style.display = "inline-flex";
  };

  onPlayerInit = e => {
    this.chooseNumOfPlayers.current.style.display = "none";
    this.buildBoardBtn.current.style.display = "inline-flex";
  };
  handleSubmit=()=>{
    this.setState({boardOn:!this.state.boardOn})
  }

  render() {
    return (
      
      <div style={mainDivStyle}>
        {!this.state.boardOn ?
        <div>
        <Button variant="outline-dark" onClick={e => this.onStart(e)}>
          Start
        </Button>

        <ButtonGroup
          size="lg"
          ref={this.chooseNumOfPlayers}
          style={{ display: "none" }}>

          <Button variant="outline-dark" onClick={e => this.onPlayerInit(e)}>
            P vs P
          </Button>
          <Button variant="outline-dark" onClick={e => this.onPlayerInit(e)}>
            P vs Computer
          </Button>
        </ButtonGroup>

        <ButtonGroup
          size="lg"
          ref={this.buildBoardBtn}
          style={{ display: "none" }}>

          <Button variant="outline-dark">Default Board (6X7)</Button>
          {/* <Button variant="outline-dark">Custom Board </Button> */}
          <Dropdown>
            <Dropdown.Toggle
              variant="outline-dark"
              id="dropdown-basic"
              size="lg"
              style={{ borderBottomLeftRadius: "0", borderTopLeftRadius: "0" }}
            >
              Custom Board
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <form onSubmit={this.handleSubmit} action="">
                <input id='rowsInput' placeholder='Number of Rows' type="text"/>
                <input id='columnsInput' style={{margin:'25px 0'}} placeholder='Number of Columns' type="text"/>
                <div style={{display:'flex',justifyContent:'center'}}>
                  <input value='submit' type="submit"/>
                </div>
              </form>
            </Dropdown.Menu>
          </Dropdown>
        </ButtonGroup>
        </div>
        :<GameBoard/>}
      </div>
    );
  }
}

export default Main;

//styling

const mainDivStyle = {
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};
