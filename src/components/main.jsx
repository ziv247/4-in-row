import React, { Component } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";

const mainDiv = {
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

class Main extends Component {
  constructor(props) {
    super(props);
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

  render() {
    return (
      <div style={mainDiv}>
        <Button variant="outline-dark" onClick={e => this.onStart(e)}>
          Start
        </Button>

        <ButtonGroup
          size="lg"
          ref={this.chooseNumOfPlayers}
          style={{ display: "none" }}
        >
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
          style={{ display: "none" }}
        >
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
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </ButtonGroup>
      </div>
    );
  }
}

export default Main;
